import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import { gsap, REDUCED } from '../../lib/motion';
import { useLocale } from '../../i18n/LocaleContext';
import { CERTS } from '../../data/certs';
import { BADGES } from '../../data/badges';
import Ticker from '../shared/Ticker';

const ROW_SPEEDS = [26, 20, 30];

/** Port of the #credentials section: the hero cert, three certrow tickers, the toggleable
 *  certgrid list and the badges mosaic — direct render of certToggle()'s list-open animation. */
export default function Credentials() {
  const { locale, ui } = useLocale();
  const [listOpen, setListOpen] = useState(false);

  const rows: typeof CERTS[] = [[], [], []];
  CERTS.forEach((c, i) => rows[i % 3].push(c));

  useGSAP(() => {
    if (!listOpen || REDUCED) return;
    gsap.from('.certcell', { opacity: 0, y: 16, duration: 0.5, stagger: 0.012, ease: 'power2.out' });
  }, [listOpen]);

  return (
    <section className="sec wrap" id="credentials" data-sec="credentials">
      <div className="shead">
        <h2 className="shead__title up">{ui('credentials.title')}</h2>
        <p className="shead__meta up">{ui('credentials.meta')}</p>
      </div>

      <a
        className="hero-cert up"
        href={encodeURI('/certificados/IBM DATA ANALYST PROFESSIONAL.pdf')}
        target="_blank"
        rel="noopener"
      >
        <div className="hero-cert__seal">IBM</div>
        <div>
          <h3 className="hero-cert__t">IBM Data Analyst Professional Certificate</h3>
          <p className="hero-cert__s">{ui('credentials.hero')}</p>
        </div>
        <span className="btn">
          {ui('credentials.openPdf')} <i>↗</i>
        </span>
      </a>

      <div className="certrows">
        {rows.map((row, i) => (
          <div className="certrow" key={i}>
            <Ticker speed={ROW_SPEEDS[i]} dir={i === 1 ? 1 : -1} watch={locale}>
              {row.map((c) => (
                <a
                  key={c[0]}
                  className="certchip"
                  href={encodeURI('/certificados/' + c[3])}
                  target="_blank"
                  rel="noopener"
                  style={{ marginRight: '.55rem' }}
                >
                  <span className="certchip__k">{c[0]}</span>
                  <span className="certchip__n">{c[1]}</span>
                  <span className="certchip__o">{c[2]}</span>
                </a>
              ))}
            </Ticker>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', gap: '.6rem', flexWrap: 'wrap', marginTop: 'clamp(1.6rem,3vw,2.4rem)' }}>
        <button className="btn" aria-expanded={listOpen} aria-controls="certgrid" onClick={() => setListOpen((v) => !v)}>
          <span>{listOpen ? ui('credentials.collapseList') : ui('credentials.viewList')}</span> <i>{listOpen ? '↑' : '↓'}</i>
        </button>
        <Link className="btn" to="/badges">
          <span>{ui('credentials.badgesLink')}</span> <i>↗</i>
        </Link>
      </div>

      <div className="certgrid" id="certgrid" hidden={!listOpen}>
        {CERTS.map((c) => (
          <a key={c[0]} className="certcell" href={encodeURI('/certificados/' + c[3])} target="_blank" rel="noopener">
            <span className="certcell__k">{c[0]}</span>
            <span>
              <span className="certcell__n">{c[1]}</span>
              <span className="certcell__o">{c[2]}</span>
            </span>
          </a>
        ))}
      </div>

      <div style={{ marginTop: 'clamp(2.5rem,5vw,4rem)' }}>
        <div className="mono" style={{ marginBottom: '1rem' }}>
          {ui('credentials.badgesHeading')}
        </div>
        <div className="badges">
          {BADGES.map((b) => (
            <div className="badge" title={b[1]} key={b[0]}>
              {b[0]}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
