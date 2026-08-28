import { Link } from 'react-router-dom';
import { useLocale } from '../../i18n/LocaleContext';
import MotifSVG from './MotifSVG';

/** Port of the "02 — Nichos em destaque" section from index.html. */
export default function Niches() {
  const { ui } = useLocale();

  return (
    <section className="sec wrap sec--tight" id="niches" data-sec="niches">
      <div className="shead">
        <h2 className="shead__title up">{ui('niches.title')}</h2>
        <p className="shead__meta up">{ui('niches.meta')}</p>
      </div>

      <div className="work work--niches" id="niches-grid">
        <article className="card">
          <div className="card__media">
            <img src="/PROJETOS/imagens/mathduo-tela-inicial.jpeg" alt="K4Math" loading="lazy" />
            <span className="card__idx">01</span>
            <div className="card__mask" />
          </div>
          <div className="card__body">
            <div className="card__kicker">
              <span className="mono mono--signal">{ui('niches.fullstack.label')}</span>
            </div>
            <h3 className="card__title">K4Math</h3>
            <p className="card__desc">{ui('niches.fullstack.desc')}</p>
            <div className="card__metrics">
              <div className="card__metric">
                <b>76</b>
                <span>{ui('niches.fullstack.metric')}</span>
              </div>
            </div>
            <div className="card__foot">
              <div className="tags">
                <span className="tag">PHP</span>
                <span className="tag">MySQL</span>
                <span className="tag">JavaScript</span>
              </div>
              <span className="card__go">
                <span>{ui('niches.fullstack.cta')}</span> <i>↗</i>
              </span>
            </div>
          </div>
          <Link className="card__link" to="/projects/k4math" aria-label="K4Math" />
        </article>

        <article className="card">
          <div className="card__media">
            <img src="/PROJETOS/imagens/dashboard3.jpeg" alt="Dashboard Superstore" loading="lazy" />
            <span className="card__idx">02</span>
            <div className="card__mask" />
          </div>
          <div className="card__body">
            <div className="card__kicker">
              <span className="mono mono--signal">{ui('niches.data.label')}</span>
            </div>
            <h3 className="card__title">{ui('niches.data.title')}</h3>
            <p className="card__desc">{ui('niches.data.desc')}</p>
            <div className="card__metrics">
              <div className="card__metric">
                <b>US$ 1.7M</b>
                <span>{ui('niches.data.metric')}</span>
              </div>
            </div>
            <div className="card__foot">
              <div className="tags">
                <span className="tag">Excel</span>
                <span className="tag">Power Query</span>
                <span className="tag">Pivot Tables</span>
              </div>
              <span className="card__go">
                <span>{ui('niches.data.cta')}</span> <i>↗</i>
              </span>
            </div>
          </div>
          <Link className="card__link" to="/projects/data-analysis" aria-label="Dashboard Superstore" />
        </article>

        <article className="card">
          <div className="card__media">
            <MotifSVG kind="schema" />
            <span className="card__idx">03</span>
            <div className="card__mask" />
          </div>
          <div className="card__body">
            <div className="card__kicker">
              <span className="mono mono--signal">{ui('niches.db.label')}</span>
            </div>
            <h3 className="card__title">{ui('niches.db.title')}</h3>
            <p className="card__desc">{ui('niches.db.desc')}</p>
            <div className="card__metrics">
              <div className="card__metric">
                <b>3</b>
                <span>{ui('niches.db.metric')}</span>
              </div>
            </div>
            <div className="card__foot">
              <div className="tags">
                <span className="tag">MySQL</span>
                <span className="tag">SQL Server</span>
                <span className="tag">T-SQL</span>
              </div>
              <span className="card__go">
                <span>{ui('niches.db.cta')}</span> <i>↗</i>
              </span>
            </div>
          </div>
          <Link className="card__link" to="/projects/database" aria-label="Relational modeling" />
        </article>
      </div>
    </section>
  );
}
