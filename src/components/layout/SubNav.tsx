import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLocale } from '../../i18n/LocaleContext';

interface SubNavProps {
  tag: string;
}

/** Subpage nav — port of the .nav markup + nav()/is-stuck scroll chrome from assets/theme.js,
 *  with the EN/PT toggle added (subpages were Portuguese-only before this migration). */
export default function SubNav({ tag }: SubNavProps) {
  const { locale, setLocale, ui } = useLocale();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    const onScroll = () => nav.classList.toggle('is-stuck', window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className="nav" id="nav" ref={navRef}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.4rem' }}>
        <Link to="/" className="nav__mark">
          JPC<span>.</span>
        </Link>
        <Link to="/" className="nav__back">
          <i>←</i> {ui('sub.backToPortfolio')}
        </Link>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <span className="nav__tag">{tag}</span>
        <div className="nav__lang" role="group" aria-label="Language">
          <button
            type="button"
            className={`chip lang-btn${locale === 'en' ? ' is-on' : ''}`}
            onClick={() => setLocale('en')}
          >
            EN
          </button>
          <button
            type="button"
            className={`chip lang-btn${locale === 'pt' ? ' is-on' : ''}`}
            onClick={() => setLocale('pt')}
          >
            PT
          </button>
        </div>
      </div>
    </nav>
  );
}
