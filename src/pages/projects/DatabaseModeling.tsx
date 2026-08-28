import { useState } from 'react';
import { useLocale } from '../../i18n/LocaleContext';
import { bi } from '../../i18n/dictionary';
import type { LocalizedText } from '../../types';
import { useReveal } from '../../lib/useReveal';
import Halo from '../../components/layout/Halo';
import SubNav from '../../components/layout/SubNav';
import SubFooter from '../../components/layout/SubFooter';
import BackToTop from '../../components/layout/BackToTop';

const T = {
  eyebrow: bi('MySQL & SQL Server', 'MySQL & SQL Server'),
  title: bi('Databases', 'Bancos de Dados'),
  lede: bi('Relational modeling, advanced queries and complete systems', 'Projetos de modelagem relacional, consultas avançadas e sistemas completos'),
  navTag: bi('Databases', 'Banco de Dados'),
  about: bi('About the Project', 'Sobre o Projeto'),
  tables: bi('Structure (Main Tables)', 'Estrutura (Tabelas principais)'),
  sqlExamples: bi('SQL Examples', 'Exemplos de SQL'),
  preview: bi('Project Preview', 'Preview do Projeto'),
  clickEnlarge: bi('Click the image to enlarge', 'Clique na imagem para ampliar'),
  viewGithub: bi('View on GitHub', 'Ver no GitHub'),
  imgNotFound: bi('Image not found', 'Imagem não encontrada'),
};

interface DbProject {
  id: string;
  icon: string;
  name: string;
  cardDesc: LocalizedText;
  description: LocalizedText;
  tags: LocalizedText[];
  tables: string[];
  sql: string;
  github: string;
  imagePath: string;
}

const PROJECTS: DbProject[] = [
  {
    id: 'educash', icon: 'fa-coins', name: 'EduCash',
    cardDesc: bi('A financial-education system with expense tracking, savings jars and user progress.', 'Sistema de educacao financeira com controle de despesas, cofrinhos e progresso do usuario.'),
    description: bi(
      'A complete financial-education system built to help users track personal spending, set savings goals ("cofrinhos") and follow their financial progress. It uses a robust relational structure with JSON support for storing personalized progress.',
      'Sistema completo de educacao financeira desenvolvido para auxiliar usuarios no controle de gastos pessoais, criacao de metas de economia (cofrinhos) e acompanhamento de progresso financeiro. O sistema utiliza uma estrutura relacional robusta com suporte a dados JSON para armazenar progresso personalizado.',
    ),
    tags: ['MySQL', bi('Relational structure', 'Estrutura relacional'), 'JSON'],
    tables: ['users', 'user_cofrinhos', 'cofrinho_deposits', 'user_planilhas', 'planilha_despesas', 'user_module_progress'],
    sql: `-- Top 5 biggest expenses\nSELECT name, amount, date\nFROM planilha_despesas\nORDER BY amount DESC\nLIMIT 5;\n\n-- Total saved per jar\nSELECT c.name, SUM(d.amount) as total_saved\nFROM user_cofrinhos c\nLEFT JOIN cofrinho_deposits d ON c.id = d.cofrinho_id\nGROUP BY c.id, c.name\nORDER BY total_saved DESC;`,
    github: 'https://github.com/Joaopedro0s/Portfolio/blob/main/BANCOS%20DE%20DADOS/educash%20(1).sql',
    imagePath: '/PROJETOS/imagens/educash.svg',
  },
  {
    id: 'k4math', icon: 'fa-gamepad', name: 'K4Math',
    cardDesc: bi('A gamified educational system with activities, achievements, XP, a shop and user progression.', 'Sistema educacional gamificado com atividades, conquistas, XP, loja e progressao de usuario.'),
    description: bi(
      'A gamified educational platform that turns learning math into an engaging experience. The system manages users, interactive activities, an achievement system, XP-based progression, an item inventory and a virtual shop where students trade points for rewards.',
      'Plataforma educacional gamificada que transforma o aprendizado de matematica em uma experiencia envolvente. O sistema gerencia usuarios, atividades interativas, sistema de conquistas, progressao por XP, inventario de itens e loja virtual onde alunos podem trocar pontos por recompensas.',
    ),
    tags: ['MySQL', bi('Achievement system', 'Sistema de conquistas'), bi('Inventory and shop', 'Inventario e loja')],
    tables: ['users', 'activities', 'achievements', 'user_progress', 'user_achievements', 'user_inventory', 'shop_items', 'shop_categories'],
    sql: `-- User ranking by XP\nSELECT u.username, up.total_xp, up.current_level\nFROM users u\nJOIN user_progress up ON u.id = up.user_id\nORDER BY up.total_xp DESC\nLIMIT 10;\n\n-- Most completed activities\nSELECT a.title, COUNT(up.activity_id) as completions\nFROM activities a\nLEFT JOIN user_progress up ON a.id = up.activity_id AND up.status = 'completed'\nGROUP BY a.id, a.title\nORDER BY completions DESC;`,
    github: 'https://github.com/Joaopedro0s/Portfolio/blob/main/BANCOS%20DE%20DADOS/k4math.sql',
    imagePath: '/PROJETOS/imagens/k4math_erd.svg',
  },
  {
    id: 'lojareal', icon: 'fa-store', name: 'Loja Real',
    cardDesc: bi('A database for a sales system with customers, orders, products and order items.', 'Banco de dados para sistema de vendas com clientes, pedidos, produtos e itens de pedido.'),
    description: bi(
      'A full e-commerce database system managing customers, orders, products and order items. Designed to support high-performance operations with optimized indexes and analytical queries for decision-making.',
      'Sistema de banco de dados para e-commerce completo, gerenciando clientes, pedidos, produtos e itens de pedido. Projetado para suportar operacoes de alta performance com indices otimizados e consultas analiticas para tomada de decisao.',
    ),
    tags: ['MySQL', bi('Relational modeling', 'Modelagem relacional'), bi('Order tracking', 'Controle de pedidos')],
    tables: ['clientes', 'pedidos', 'produtos', 'itens_pedido'],
    sql: `-- Best-selling products\nSELECT p.nome, SUM(i.quantidade) AS total_vendido\nFROM itens_pedido i\nJOIN produtos p ON i.produto_id = p.id\nGROUP BY p.id, p.nome\nORDER BY total_vendido DESC\nLIMIT 10;\n\n-- Total order value per customer\nSELECT c.nome, SUM(p.valor_total) as total_gasto\nFROM clientes c\nLEFT JOIN pedidos p ON c.id = p.cliente_id\nGROUP BY c.id, c.nome\nORDER BY total_gasto DESC;`,
    github: 'https://github.com/Joaopedro0s/Portfolio/blob/main/BANCOS%20DE%20DADOS/loja_real.sql',
    imagePath: '/PROJETOS/imagens/loja_real.svg',
  },
];

export default function DatabaseModeling() {
  const { t } = useLocale();
  const [active, setActive] = useState('educash');
  const [modalImg, setModalImg] = useState<string | null>(null);
  const [imgError, setImgError] = useState<Record<string, boolean>>({});
  useReveal([active]);

  const project = PROJECTS.find((p) => p.id === active)!;

  return (
    <div className="subpage">
      <Halo />
      <SubNav tag={t(T.navTag)} />
      <main style={{ paddingTop: '7rem', paddingBottom: '4rem' }}>
        <div className="wrap">
          <header className="pagehero wrap">
            <span className="eyebrow">
              <i className="fas fa-database" /> {t(T.eyebrow)}
            </span>
            <h1>{t(T.title)}</h1>
            <p>{t(T.lede)}</p>
            <div className="pagehero__rule" />
          </header>

          <div className="db-cards reveal">
            {PROJECTS.map((p) => (
              <div
                key={p.id}
                className={`db-card${active === p.id ? ' is-active' : ''}`}
                onClick={() => setActive(p.id)}
              >
                <div className="db-card__icon">
                  <i className={`fas ${p.icon}`} />
                </div>
                <h3>{p.name}</h3>
                <p>{t(p.cardDesc)}</p>
              </div>
            ))}
          </div>

          <div className="db-details reveal">
            <div className="db-details__head">
              <h2>
                <i className={`fas ${project.icon}`} /> {project.name}
              </h2>
              <a href={project.github} target="_blank" rel="noopener" className="btn btn--solid">
                <i className="fab fa-github" /> {t(T.viewGithub)}
              </a>
            </div>
            <div className="db-details__grid">
              <div className="db-info-box">
                <h3>
                  <i className="fas fa-info-circle" /> {t(T.about)}
                </h3>
                <p>{t(project.description)}</p>
              </div>
              <div className="db-info-box">
                <h3>
                  <i className="fas fa-table" /> {t(T.tables)}
                </h3>
                <ul className="db-tables">
                  {project.tables.map((tb) => (
                    <li key={tb}>
                      <i className="fas fa-database" style={{ color: 'var(--signal-ink)', width: 20 }} /> {tb}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="db-info-box">
                <h3>
                  <i className="fas fa-code" /> {t(T.sqlExamples)}
                </h3>
                <div className="db-sql">
                  <pre>{project.sql}</pre>
                </div>
              </div>
              <div className="db-info-box">
                <h3>
                  <i className="fas fa-image" /> {t(T.preview)}
                </h3>
                {imgError[project.id] ? (
                  <div className="img-fallback">
                    <i className="fas fa-database" />
                    <p>{t(T.imgNotFound)}</p>
                    <p className="img-fallback__path">{project.imagePath}</p>
                  </div>
                ) : (
                  <img
                    src={project.imagePath}
                    alt={`Preview of ${project.name}`}
                    className="db-image"
                    onClick={() => setModalImg(project.imagePath)}
                    onError={() => setImgError((s) => ({ ...s, [project.id]: true }))}
                  />
                )}
                <div className="db-image-caption">{t(T.clickEnlarge)}</div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className={`modal-overlay${modalImg ? ' is-open' : ''}`} onClick={() => setModalImg(null)}>
        <span className="modal-overlay__close">&times;</span>
        {modalImg && <img className="modal-overlay__img" src={modalImg} alt="" />}
      </div>

      <SubFooter />
      <BackToTop />
    </div>
  );
}
