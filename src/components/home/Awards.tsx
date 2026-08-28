import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap, REDUCED } from '../../lib/motion';
import { useLocale } from '../../i18n/LocaleContext';
import { AWARDS } from '../../data/awards';
import Lightbox, { type LightboxData } from './Lightbox';
import type { AwardPanel } from '../../types';

interface AwardsProps {
  lenis?: { stop: () => void; start: () => void } | null;
}

function Medal({ medal }: { medal: AwardPanel['medal'] }) {
  if (medal === '1') return <div className="medal medal--1">1º</div>;
  if (medal === '3') return <div className="medal medal--3">3º</div>;
  if (medal === 'presentation') return <div className="medal medal--v">◉</div>;
  return <div className="medal medal--v">↗</div>;
}

/** Port of the #awards horizontal rail (railScroll() pin/scrub) + gallery lightbox wiring. */
export default function Awards({ lenis }: AwardsProps) {
  const { t, ui } = useLocale();
  const trackRef = useRef<HTMLDivElement>(null);
  const [lb, setLb] = useState<LightboxData | null>(null);

  useGSAP(() => {
    if (REDUCED) return;
    const mm = gsap.matchMedia();
    mm.add('(min-width: 1024px)', () => {
      const track = trackRef.current;
      if (!track) return;
      const dist = () => Math.max(0, track.scrollWidth - window.innerWidth + 32);
      const tw = gsap.to(track, {
        x: () => -dist(),
        ease: 'none',
        scrollTrigger: {
          trigger: '#rail',
          start: 'center center',
          end: () => '+=' + dist(),
          pin: '#awards',
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
      return () => tw.scrollTrigger?.kill();
    });
    return () => mm.revert();
  }, []);

  useGSAP(() => {
    if (REDUCED) return;
    const tweens = Array.from(document.querySelectorAll<HTMLElement>('#awards .panel.up')).map((el) =>
      gsap.to(el, { y: 0, opacity: 1, duration: 1, ease: 'expo.out', scrollTrigger: { trigger: el, start: 'top 88%', once: true } }),
    );
    return () => tweens.forEach((tw) => tw.scrollTrigger?.kill());
  }, []);

  const openLightbox = (award: AwardPanel, photoIndex: number) => {
    setLb({
      photos: award.photos,
      title: award.title,
      sub: award.sub ? t(award.sub) : award.place ? t(award.place) : t(award.kicker),
      index: photoIndex,
    });
  };

  return (
    <section className="sec" id="awards" data-sec="awards">
      <div className="wrap">
        <div className="shead">
          <h2 className="shead__title up">{ui('awards.title')}</h2>
          <p className="shead__meta up">{ui('awards.meta')}</p>
        </div>
      </div>

      <div className="rail" id="rail">
        <div className="rail__track" id="railTrack" ref={trackRef}>
          {AWARDS.map((a) => (
            <article className={`panel up${a.medal === '1' || a.medal === '3' ? ' panel--award' : ''}`} key={a.title}>
              <div className="panel__head">
                <Medal medal={a.medal} />
                <span className="mono">{t(a.kicker)}</span>
              </div>
              <div>
                <h3 className="panel__title">{a.title}</h3>
                {(a.place || a.sub) && (
                  <div
                    className={`panel__sub ${a.place ? 'mono mono--signal' : 'mono mono--fog'}`}
                    style={{ marginTop: '.45rem' }}
                  >
                    {a.place ? t(a.place) : t(a.sub)}
                  </div>
                )}
              </div>
              {a.ctxHtml ? (
                <p className="panel__ctx" dangerouslySetInnerHTML={{ __html: t(a.ctx) }} />
              ) : (
                <p className="panel__ctx">{t(a.ctx)}</p>
              )}
              <div className="shots">
                {a.photos.map((src, i) => (
                  <button type="button" key={src} aria-label={ui(`gallery.photo${i + 1}`)} onClick={() => openLightbox(a, i)}>
                    <img src={src} alt={`${a.photoAlt} — photo ${i + 1}`} loading="lazy" />
                  </button>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>

      <Lightbox data={lb} onClose={() => setLb(null)} lenis={lenis} />
    </section>
  );
}
