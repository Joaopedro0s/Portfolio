import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap, ScrollTrigger } from '../../lib/motion';
import { useLocale, resolve } from '../../i18n/LocaleContext';
import { SEC_LABELS } from '../../i18n/dictionary';

/** Progress rail (spine + section readout) — port of the spine-fill and per-[data-sec] ScrollTrigger
 *  logic from chrome() in index.html. Also drives the active-link underline on the nav. */
export default function ProgressBar() {
  const fillRef = useRef<HTMLDivElement>(null);
  const idxRef = useRef<HTMLSpanElement>(null);
  const nameRef = useRef<HTMLSpanElement>(null);
  const { locale } = useLocale();

  useGSAP(() => {
    const fill = fillRef.current;
    if (!fill) return;

    const fillTween = gsap.to(fill, {
      scaleY: 1,
      ease: 'none',
      scrollTrigger: { trigger: document.body, start: 'top top', end: 'bottom bottom', scrub: 0.3 },
    });

    const sections = Array.from(document.querySelectorAll<HTMLElement>('[data-sec]'));
    const triggers = sections.map((s, i) =>
      ScrollTrigger.create({
        trigger: s,
        start: 'top 45%',
        end: 'bottom 45%',
        onToggle: (self) => {
          if (!self.isActive) return;
          if (idxRef.current) idxRef.current.textContent = String(i + 1).padStart(2, '0');
          if (nameRef.current) nameRef.current.textContent = resolve(SEC_LABELS[s.dataset.sec!], locale) || s.dataset.sec!;
          document
            .querySelectorAll<HTMLAnchorElement>('.nav__links a')
            .forEach((a) => a.classList.toggle('is-active', a.dataset.nl === s.id));
        },
      }),
    );

    return () => {
      fillTween.scrollTrigger?.kill();
      fillTween.kill();
      triggers.forEach((t) => t.kill());
    };
  }, [locale]);

  return (
    <>
      <div className="spine" aria-hidden="true">
        <div className="spine__fill" ref={fillRef} />
      </div>
      <div className="readout mono" aria-hidden="true">
        <span className="readout__idx" ref={idxRef}>
          01
        </span>{' '}
        — <span ref={nameRef}>Home</span>
      </div>
    </>
  );
}
