import { useEffect, useRef } from 'react';
import { REDUCED } from '../../lib/motion';

interface BackToTopProps {
  /** Optional custom scroll-to handler (Home uses Lenis; subpages use native smooth scroll). */
  onClick?: () => void;
  threshold?: number;
}

/** Port of backToTop() from both index.html and assets/theme.js. */
export default function BackToTop({ onClick, threshold = 800 }: BackToTopProps) {
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const btn = ref.current;
    if (!btn) return;
    const toggle = () => btn.classList.toggle('is-visible', window.scrollY > threshold);
    window.addEventListener('scroll', toggle, { passive: true });
    toggle();
    return () => window.removeEventListener('scroll', toggle);
  }, [threshold]);

  const handleClick = () => {
    if (onClick) {
      onClick();
      return;
    }
    window.scrollTo({ top: 0, behavior: REDUCED ? 'auto' : 'smooth' });
  };

  return (
    <button className="totop" id="totop" ref={ref} onClick={handleClick} aria-label="Back to top" title="Back to top">
      ↑
    </button>
  );
}
