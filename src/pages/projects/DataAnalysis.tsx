import { useEffect, useState } from 'react';
import { useLocale } from '../../i18n/LocaleContext';
import { bi } from '../../i18n/dictionary';
import { useReveal } from '../../lib/useReveal';
import Halo from '../../components/layout/Halo';
import SubNav from '../../components/layout/SubNav';
import SubFooter from '../../components/layout/SubFooter';
import BackToTop from '../../components/layout/BackToTop';

const T = {
  eyebrow: bi('Excel & Pivot Tables', 'Excel & Pivot Tables'),
  title: bi('Data Analysis', 'Análise de Dados'),
  lede: bi(
    'An interactive dashboard and strategic insights based on real sales data',
    'Dashboard interativo e insights estratégicos baseados em dados reais de vendas',
  ),
  navTag: bi('Data Analysis', 'Análise de Dados'),
  kpiProfit: bi('Total Profit', 'Lucro Total'),
  kpiTicket: bi('Average Ticket', 'Ticket Médio'),
  kpiMargin: bi('Margin', 'Margem'),
  kpiRegion: bi('Top Region', 'Região Top'),
  insightsTitle: bi('Generated Insights', 'Insights Gerados'),
  insights: [
    bi('"Office Supplies" accounts for 60% of total profit for the period', '"Office Supplies" representa 60% do lucro total do período'),
    bi('The "Consumer" segment leads in sales volume with 49% of the total', 'Segmento "Consumer" lidera em volume de vendas com 49% do total'),
    bi('The "West" region shows the highest profitability — 32% of profit', 'Região "West" apresenta maior rentabilidade — 32% do lucro'),
    bi('Discounts above 30% cut profit by up to 65% in low-value categories', 'Descontos acima de 30% reduzem o lucro em até 65% em categorias de baixo valor'),
    bi('Home Office has the lowest volume but the second-highest margin percentage', 'Home Office tem menor volume, mas segunda maior margem percentual'),
  ],
  aboutTitle: bi('About the Project', 'Sobre o Projeto'),
  aboutP1: bi(
    'A dashboard built on the Sample Superstore dataset — real data from a US retail chain. The analysis explores profit by product category, performance by customer segment (Consumer, Corporate, Home Office) and performance by geographic region (Central, East, South, West).',
    'Dashboard desenvolvido utilizando o dataset Sample Superstore — dados reais de uma rede varejista americana. A análise explora o lucro por categoria de produto, o desempenho por segmento de cliente (Consumer, Corporate, Home Office) e a performance por região geográfica (Central, East, South, West).',
  ),
  aboutP2: bi(
    'Data-cleaning techniques, pivot tables and exploratory analysis were used to extract patterns and trends that guide strategic business decisions.',
    'Foram aplicadas técnicas de limpeza de dados, Pivot Tables e análise exploratória para extrair padrões e tendências que orientam decisões de negócio estratégicas.',
  ),
  previewTitle: bi('Dashboard Preview', 'Preview do Dashboard'),
  downloadCsv: bi('Download CSV', 'Baixar CSV'),
  viewGithub: bi('View on GitHub', 'Ver no GitHub'),
  enlarge: bi('Enlarge image', 'Ampliar imagem'),
  caption: bi('Sample Superstore — sales dashboard by category, segment and region', 'Sample Superstore — Dashboard de Vendas por categoria, segmento e região'),
};

export default function DataAnalysis() {
  const { t } = useLocale();
  const [lbOpen, setLbOpen] = useState(false);
  useReveal();

  useEffect(() => {
    if (!lbOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLbOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [lbOpen]);

  return (
    <div className="subpage">
      <Halo />
      <SubNav tag={t(T.navTag)} />
      <main>
        <header className="pagehero wrap reveal">
          <span className="eyebrow">
            <i className="fas fa-chart-pie" /> {t(T.eyebrow)}
          </span>
          <h1>{t(T.title)}</h1>
          <p>{t(T.lede)}</p>
          <div className="pagehero__rule" />
        </header>

        <div className="kpi-row">
          <div className="kpi-box reveal">
            <div className="kpi-box__val">$1.7M</div>
            <div className="kpi-box__lbl">{t(T.kpiProfit)}</div>
          </div>
          <div className="kpi-box reveal">
            <div className="kpi-box__val">$732</div>
            <div className="kpi-box__lbl">{t(T.kpiTicket)}</div>
          </div>
          <div className="kpi-box reveal">
            <div className="kpi-box__val">56%</div>
            <div className="kpi-box__lbl">{t(T.kpiMargin)}</div>
          </div>
          <div className="kpi-box reveal">
            <div className="kpi-box__val">West</div>
            <div className="kpi-box__lbl">{t(T.kpiRegion)}</div>
          </div>
        </div>

        <div className="grid-2" style={{ marginBottom: '1.5rem' }}>
          <div className="info-card reveal">
            <h3>
              <i className="fas fa-lightbulb" /> {t(T.insightsTitle)}
            </h3>
            <ul className="insight-list">
              {T.insights.map((ins) => (
                <li key={t(ins)}>
                  <i className="fas fa-chart-line" /> {t(ins)}
                </li>
              ))}
            </ul>
          </div>

          <div className="info-card reveal">
            <h3>
              <i className="fas fa-info-circle" /> {t(T.aboutTitle)}
            </h3>
            <p className="about-text">{t(T.aboutP1)}</p>
            <p className="about-text">{t(T.aboutP2)}</p>
            <div className="row row--wrap" style={{ marginTop: '1.5rem', gap: '.5rem' }}>
              {['Excel', 'Pivot Tables', 'Google Sheets', 'Data Analysis'].map((tag) => (
                <span key={tag} className="tag" style={{ borderRadius: '2rem', padding: '.25rem .75rem' }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="preview-panel reveal">
          <div className="preview-panel__head">
            <h3>
              <i className="fas fa-image" /> {t(T.previewTitle)}
            </h3>
            <div className="preview-actions">
              <a href="/EXCEL/SampleSuperstore.csv" download className="preview-action">
                <i className="fas fa-download" /> {t(T.downloadCsv)}
              </a>
              <a href="https://github.com/Joaopedro0s/Portfolio/tree/main/EXCEL" target="_blank" rel="noopener" className="preview-action">
                <i className="fab fa-github" /> {t(T.viewGithub)}
              </a>
            </div>
          </div>
          <div className="preview-img" onClick={() => setLbOpen(true)}>
            <img src="/PROJETOS/imagens/dashboard3.jpeg" alt="Sample Superstore Dashboard" />
            <div className="preview-overlay">
              <div className="overlay-pill">
                <i className="fas fa-expand" /> {t(T.enlarge)}
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className={`lightbox-full${lbOpen ? ' is-active' : ''}`} onClick={() => setLbOpen(false)}>
        <div className="lightbox-full__content" onClick={(e) => e.stopPropagation()}>
          <button className="lightbox-full__close" onClick={() => setLbOpen(false)}>
            ✕
          </button>
          <img src="/PROJETOS/imagens/dashboard3.jpeg" alt="Sample Superstore Dashboard enlarged" />
          <div className="lightbox-full__caption">{t(T.caption)}</div>
        </div>
      </div>

      <SubFooter />
      <BackToTop />
    </div>
  );
}
