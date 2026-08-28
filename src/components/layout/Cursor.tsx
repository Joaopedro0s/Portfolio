import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap, REDUCED } from '../../lib/motion';

/** Custom dot + ring cursor that reacts to hoverable elements. Port of pointer() from index.html
 *  (the cursor half only — the halo is a separate shared component). Home-only, matching the
 *  original markup (subpages never included #cur/#curRing). */
export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (REDUCED || matchMedia('(pointer:coarse)').matches) return;
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const dx = gsap.quickTo(dot, 'x', { duration: 0.12, ease: 'power3' });
    const dy = gsap.quickTo(dot, 'y', { duration: 0.12, ease: 'power3' });
    const rx = gsap.quickTo(ring, 'x', { duration: 0.5, ease: 'power3' });
    const ry = gsap.quickTo(ring, 'y', { duration: 0.5, ease: 'power3' });
    let woke = false;

    const onMove = (e: PointerEvent) => {
      dx(e.clientX);
      dy(e.clientY);
      rx(e.clientX);
      ry(e.clientY);
      if (!woke) {
        woke = true;
        gsap.set([dot, ring], { x: e.clientX, y: e.clientY });
        gsap.to([dot, ring], { opacity: 1, duration: 0.4 });
      }
    };
    const onOver = (e: PointerEvent) => {
      const hit = (e.target as Element)?.closest?.('a,button,.card,.panel,.badge');
      if (!woke) return;
      gsap.to(ring, { scale: hit ? 1.85 : 1, opacity: hit ? 0.55 : 1, duration: 0.35, ease: 'power3' });
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('pointerover', onOver);
    return () => {
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerover', onOver);
    };
  }, []);

  return (
    <>
      <div className="cur" ref={dotRef} aria-hidden="true" />
      <div className="cur-ring" ref={ringRef} aria-hidden="true" />
    </>
  );
}
