import { useEffect } from 'react';

/** Port of reveals() from assets/theme.js — IntersectionObserver-driven fade/rise for any
 *  element with the `.reveal` class, used across every subpage. Re-runs on `deps` change so
 *  content swapped in after a locale toggle (or a carousel/db-card change) still reveals. */
export function useReveal(deps: unknown[] = []) {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));
    if (!els.length) return;

    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('reveal-visible'));
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => (entry.target as HTMLElement).classList.add('reveal-visible'), i * 40);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' },
    );
    els.forEach((el) => obs.observe(el));

    const t = setTimeout(() => {
      els.forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight - 50) el.classList.add('reveal-visible');
      });
    }, 120);

    return () => {
      clearTimeout(t);
      obs.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
