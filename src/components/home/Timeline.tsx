import { useGSAP } from '@gsap/react';
import { gsap, REDUCED } from '../../lib/motion';
import { useLocale } from '../../i18n/LocaleContext';
import { EXPERIENCE, EDUCATION } from '../../data/timeline';
import type { TimelineItem } from '../../types';

function Column({ heading, items }: { heading: string; items: TimelineItem[] }) {
  const { t } = useLocale();
  return (
    <div className="tl__col">
      <div className="mono" style={{ marginBottom: '1.4rem' }}>
        {heading}
      </div>
      <div className="tl__line">
        <i data-tlline></i>
      </div>
      <div className="tl__items">
        {items.map((it, i) => (
          <div className="tl__item up" key={i}>
            <div className="tl__when mono mono--fog">{t(it.when)}</div>
            <div className="tl__what">{t(it.what)}</div>
            <div className="tl__where">{t(it.where)}</div>
            <p className="tl__note">{t(it.note)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Port of the #timeline section, including the scrub-filled tl__line from reveals(). */
export default function Timeline() {
  const { ui } = useLocale();

  useGSAP(() => {
    if (REDUCED) return;
    const tweens = Array.from(document.querySelectorAll<HTMLElement>('[data-tlline]')).map((l) =>
      gsap.to(l, {
        scaleY: 1,
        ease: 'none',
        scrollTrigger: { trigger: l.closest('.tl__col'), start: 'top 76%', end: 'bottom 72%', scrub: 0.6 },
      }),
    );
    return () => tweens.forEach((tw) => tw.scrollTrigger?.kill());
  }, []);

  return (
    <section className="sec wrap" id="timeline" data-sec="timeline">
      <div className="shead">
        <h2 className="shead__title up">{ui('timeline.title')}</h2>
        <p className="shead__meta up">{ui('timeline.meta')}</p>
      </div>

      <div className="tl">
        <Column heading={ui('timeline.experience')} items={EXPERIENCE} />
        <Column heading={ui('timeline.education')} items={EDUCATION} />
      </div>
    </section>
  );
}
