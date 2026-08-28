import { useEffect, useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap, REDUCED } from '../../lib/motion';

export interface LightboxData {
  photos: string[];
  title: string;
  sub: string;
  index: number;
}

interface LightboxProps {
  data: LightboxData | null;
  onClose: () => void;
  /** Lenis instance to pause/resume while the lightbox is open (Home only). */
  lenis?: { stop: () => void; start: () => void } | null;
}

/** Port of lightbox() from index.html. */
export default function Lightbox({ data, onClose, lenis }: LightboxProps) {
  const [idx, setIdx] = useState(0);
  const imgRef = useRef<HTMLImageElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (data) {
      setIdx(data.index);
      lenis?.stop();
    } else {
      lenis?.start();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useGSAP(() => {
    if (!data || !boxRef.current) return;
    if (!REDUCED) gsap.from(boxRef.current, { y: 26, opacity: 0, duration: 0.5, ease: 'expo.out' });
  }, [data]);

  useGSAP(() => {
    if (!data || !imgRef.current) return;
    if (!REDUCED) gsap.fromTo(imgRef.current, { opacity: 0, scale: 1.03 }, { opacity: 1, scale: 1, duration: 0.45, ease: 'power2.out' });
  }, [idx, data]);

  useEffect(() => {
    if (!data) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') setIdx((i) => (i - 1 + data.photos.length) % data.photos.length);
      if (e.key === 'ArrowRight') setIdx((i) => (i + 1) % data.photos.length);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [data, onClose]);

  if (!data) return null;

  return (
    <div className="lb is-open" role="dialog" aria-modal="true" aria-label="Photo gallery">
      <div className="lb__veil" onClick={onClose} />
      <div className="lb__box" ref={boxRef}>
        <div className="lb__bar">
          <div>
            <div className="lb__t">{data.title}</div>
            <div className="mono mono--fog" style={{ marginTop: '.3rem' }}>
              {data.sub}
            </div>
          </div>
          <button className="lb__x" onClick={onClose} aria-label="Close gallery">
            ✕
          </button>
        </div>
        <div className="lb__stage">
          <img ref={imgRef} src={data.photos[idx]} alt="" />
          <div className="lb__nav">
            <button aria-label="Previous photo" onClick={() => setIdx((i) => (i - 1 + data.photos.length) % data.photos.length)}>
              ←
            </button>
            <button aria-label="Next photo" onClick={() => setIdx((i) => (i + 1) % data.photos.length)}>
              →
            </button>
          </div>
        </div>
        <div className="lb__dots">
          {data.photos.map((_, i) => (
            <i key={i} className={i === idx ? 'on' : ''} />
          ))}
        </div>
      </div>
    </div>
  );
}
