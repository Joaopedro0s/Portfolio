import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap, Flip, REDUCED } from '../../lib/motion';
import { useLocale } from '../../i18n/LocaleContext';
import { STACK_LABELS } from '../../i18n/dictionary';
import { PROJECTS } from '../../data/projects';
import type { StackKey } from '../../types';
import ProjectCard from './ProjectCard';

const ORDER: StackKey[] = ['ALL', 'FULLSTACK', 'DATA', 'DB'];

/** Port of the #work section: render(), reapplyFilter() and filters() (GSAP Flip) from index.html. */
export default function Work() {
  const { t, ui } = useLocale();
  const [filter, setFilter] = useState<StackKey>('ALL');
  const gridRef = useRef<HTMLDivElement>(null);

  const counts: Partial<Record<StackKey, number>> = { ALL: PROJECTS.length };
  PROJECTS.forEach((p) => p.stacks.forEach((s) => (counts[s] = (counts[s] || 0) + 1)));
  const chips = ORDER.filter((k) => counts[k]);

  const applyFilter = (key: StackKey) => {
    const grid = gridRef.current;
    if (!grid || REDUCED || typeof Flip === 'undefined') {
      setFilter(key);
      return;
    }
    const cards = Array.from(grid.querySelectorAll<HTMLElement>('.card'));
    const state = Flip.getState(cards);
    setFilter(key);
    requestAnimationFrame(() => {
      Flip.from(state, {
        duration: 0.65,
        ease: 'power3.inOut',
        absolute: true,
        stagger: 0.02,
        onEnter: (els) => gsap.fromTo(els, { opacity: 0, scale: 0.94 }, { opacity: 1, scale: 1, duration: 0.45, ease: 'power2.out' }),
        onLeave: (els) => gsap.to(els, { opacity: 0, scale: 0.94, duration: 0.28, ease: 'power2.in' }),
      });
    });
  };

  const visible = PROJECTS.filter(
    (p) => filter === 'ALL' || p.stacks.includes(filter as Exclude<StackKey, 'ALL'>),
  );

  // reveal states + parallax + motif-dash draw, re-run whenever the visible set changes
  useGSAP(() => {
    if (REDUCED) return;
    const grid = gridRef.current;
    if (!grid) return;
    const ctxs: (() => void)[] = [];

    grid.querySelectorAll<HTMLElement>('.card__mask').forEach((m) => {
      const tw = gsap.to(m, {
        scaleY: 0,
        transformOrigin: 'bottom',
        duration: 1.1,
        ease: 'expo.inOut',
        scrollTrigger: { trigger: m.closest('.card'), start: 'top 82%', once: true },
      });
      ctxs.push(() => tw.scrollTrigger?.kill());
    });

    grid.querySelectorAll<HTMLElement>('.card__media img').forEach((img) => {
      const tw = gsap.fromTo(
        img,
        { yPercent: -4 },
        { yPercent: 4, ease: 'none', scrollTrigger: { trigger: img.closest('.card'), start: 'top bottom', end: 'bottom top', scrub: true } },
      );
      ctxs.push(() => tw.scrollTrigger?.kill());
    });

    grid.querySelectorAll<SVGPathElement>('.card__motif .dash').forEach((p) => {
      const L = p.getTotalLength ? p.getTotalLength() : 600;
      gsap.set(p, { strokeDasharray: L, strokeDashoffset: L });
      const tw = gsap.to(p, {
        strokeDashoffset: 0,
        duration: 1.6,
        ease: 'power2.inOut',
        scrollTrigger: { trigger: p.closest('.card'), start: 'top 78%', once: true },
      });
      ctxs.push(() => tw.scrollTrigger?.kill());
    });

    return () => ctxs.forEach((fn) => fn());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  return (
    <section className="sec wrap" id="work" data-sec="work">
      <div className="shead">
        <h2 className="shead__title up">{ui('work.title')}</h2>
        <p className="shead__meta up">{ui('work.meta')}</p>
      </div>

      <div className="filters" role="group" aria-label="Filter projects by stack">
        {chips.map((k) => (
          <button key={k} type="button" className={`chip${filter === k ? ' is-on' : ''}`} onClick={() => applyFilter(k)}>
            {t(STACK_LABELS[k])}
            <b>{counts[k]}</b>
          </button>
        ))}
      </div>

      <div className="work" ref={gridRef}>
        {visible.map((p) => (
          <ProjectCard key={p.href} project={p} index={PROJECTS.indexOf(p)} />
        ))}
      </div>
    </section>
  );
}
