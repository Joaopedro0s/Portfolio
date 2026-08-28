import { useEffect, useRef } from 'react';
import { useLocale } from '../../i18n/LocaleContext';

const LINKS: { id: string; key: string }[] = [
  { id: 'work', key: 'nav.work' },
  { id: 'awards', key: 'nav.awards' },
  { id: 'timeline', key: 'nav.timeline' },
  { id: 'credentials', key: 'nav.credentials' },
  { id: 'contact', key: 'nav.contact' },
];

/** Home nav bar — port of the .nav markup + the is-stuck/is-hidden scroll chrome from index.html.
 *  Spine/readout + active-link tracking live in ScrollSpine (they need ScrollTrigger + data-sec). */
export default function Nav() {
  const { locale, setLocale, ui } = useLocale();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    let last = 0;
    const onScroll = () => {
      const y = window.scrollY;
      nav.classList.toggle('is-stuck', y > 40);
      nav.classList.toggle('is-hidden', y > 300 && y > last);
      last = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className="nav" id="nav" ref={navRef}>
      <a href="#home" className="nav__mark">
        JPC<span>.</span>
      </a>
      <div className="nav__links">
        {LINKS.map((l) => (
          <a key={l.id} href={`#${l.id}`} data-nl={l.id}>
            {ui(l.key)}
          </a>
        ))}
      </div>
      <div className="nav__right">
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
        <a href="#contact" className="live">
          <i></i> <span>{ui('nav.available')}</span>
        </a>
      </div>
    </nav>
  );
}
