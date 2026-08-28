import { useLocale } from '../i18n/LocaleContext';
import { bi } from '../i18n/dictionary';
import { useReveal } from '../lib/useReveal';
import Halo from '../components/layout/Halo';
import SubNav from '../components/layout/SubNav';
import SubFooter from '../components/layout/SubFooter';
import BackToTop from '../components/layout/BackToTop';
import { CERTIFICATIONS_DETAILED, CERT_STATS } from '../data/certificationsDetailed';

const T = {
  eyebrow: bi('17+ certifications', '17+ certificações'),
  title: bi('My Certifications', 'Minhas Certificações'),
  lede: bi(
    'Courses and certifications earned throughout my journey in technology, data analysis and systems development.',
    'Cursos e certificações que conquistei ao longo da minha jornada em tecnologia, análise de dados e desenvolvimento de sistemas.',
  ),
  navTag: bi('Certifications', 'Certificações'),
};

/** Port of certificacoes.html. The original loaded Tailwind via CDN script — dropped per the
 *  migration plan; this layout is built on the shared custom-property design system instead,
 *  matching every other page. */
export default function Certifications() {
  const { t } = useLocale();
  useReveal();

  return (
    <div className="subpage">
      <Halo />
      <SubNav tag={t(T.navTag)} />
      <main>
        <header className="pagehero wrap">
          <span className="eyebrow">{t(T.eyebrow)}</span>
          <h1>{t(T.title)}</h1>
          <p>{t(T.lede)}</p>
          <div className="pagehero__rule" />
        </header>

        <div className="wrap">
          <div className="grid-2">
            {CERTIFICATIONS_DETAILED.map((c) => (
              <div className="cert-card reveal" key={c.key}>
                <div className="cert-card__key">{c.key}</div>
                <div style={{ flex: 1 }}>
                  <h3 className="cert-card__title">{t(c.title)}</h3>
                  <p className="cert-card__meta">
                    {c.issuer} — {c.year}
                  </p>
                  <p className="cert-card__desc">{t(c.desc)}</p>
                  <div className="cert-card__tags">
                    {c.tags.map((tag) => (
                      <span className="tag" key={t(tag)}>
                        {t(tag)}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="stats reveal">
            {CERT_STATS.map((s) => (
              <div className="stat" key={s.n}>
                <div className="stat__n">{s.n}</div>
                <div className="stat__l mono mono--fog">{t(s.l)}</div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <SubFooter />
      <BackToTop />
    </div>
  );
}
