import { useLocale } from '../../i18n/LocaleContext';
import { bi } from '../../i18n/dictionary';
import { useReveal } from '../../lib/useReveal';
import Halo from '../../components/layout/Halo';
import SubNav from '../../components/layout/SubNav';
import SubFooter from '../../components/layout/SubFooter';
import BackToTop from '../../components/layout/BackToTop';
import Carousel from '../../components/shared/Carousel';

const T = {
  eyebrow: bi('Front-end Development', 'Front-end Development'),
  title: bi('Web Platforms', 'Plataformas Web'),
  lede: bi(
    'Modern, responsive interfaces built with a focus on user experience.',
    'Desenvolvimento de interfaces modernas, responsivas e com foco na experiência do usuário.',
  ),
  navTag: bi('Web Platforms', 'Plataformas Web'),
  openTab: bi('Open in new tab', 'Abrir em nova aba'),
  features: bi('Features', 'Funcionalidades'),
  tech: bi('Technologies', 'Tecnologias'),
  repo: bi('Repository', 'Repositório'),
  repoDesc: bi('Full source code', 'Código completo'),
  viewGithub: bi('View on GitHub', 'Ver no GitHub'),
  allTech: bi('Technologies Used', 'Tecnologias Utilizadas'),
};

interface Site {
  iframe: string;
  visit: string;
  title: import('../../types').LocalizedText;
  desc: import('../../types').LocalizedText;
  features: import('../../types').LocalizedText[];
  tech: string[];
  repo: string;
}

const SITES: Site[] = [
  {
    iframe: 'https://joaopedro0s.github.io/Portfolio/',
    visit: 'https://github.com/Joaopedro0s/Portfolio',
    title: bi('Personal Portfolio (v1)', 'Portfólio Pessoal'),
    desc: bi(
      'A complete portfolio site with smooth animations, a modern design and full responsiveness. Built to present projects, skills and certifications in a professional way.',
      'Site portfólio completo com animações suaves, design moderno e totalmente responsivo. Desenvolvido para apresentar projetos, habilidades e certificações de forma profissional.',
    ),
    features: [
      bi('Responsive design', 'Design responsivo'),
      bi('Smooth animations', 'Animações suaves'),
      bi('Typewriter effect', 'Efeito de digitação'),
      bi('Interactive terminal', 'Terminal interativo'),
      bi('Clickable cards', 'Cards clicáveis'),
      bi('Certifications and badges', 'Certificações e badges'),
    ],
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS'],
    repo: 'https://github.com/Joaopedro0s/Portfolio',
  },
  {
    iframe: 'https://joaopedro0s.github.io/JML-Phones/',
    visit: 'https://joaopedro0s.github.io/JML-Phones/',
    title: 'JML Phones — Phone Store',
    desc: bi(
      'A smartphone e-commerce site built with Bootstrap 5. A modern interface with a product catalog (iPhone 17, Galaxy S26, Redmi Note 14 Pro), a featured carousel and perks like free shipping and secure checkout.',
      'E-commerce institucional de smartphones desenvolvido com Bootstrap 5. Interface moderna com catálogo de produtos (iPhone 17, Galaxy S26, Redmi Note 14 Pro), carrossel de destaques e benefícios como frete grátis e compra segura.',
    ),
    features: [
      bi('Banner carousel', 'Carrossel de banners'),
      bi('Product cards', 'Cards de produtos'),
      bi('Per-product dropdown menu', 'Menu dropdown por produto'),
      bi('Footer with social links', 'Footer com redes sociais'),
      bi('Perks section', 'Seção de benefícios'),
      bi('Fully responsive design', 'Design totalmente responsivo'),
    ],
    tech: ['HTML5', 'CSS3', 'Bootstrap 5', 'Font Awesome', 'JavaScript (jQuery/Bootstrap)'],
    repo: 'https://github.com/Joaopedro0s/JML-Phones',
  },
  {
    iframe: 'https://joaopedro0s.github.io/StudyFlow/',
    visit: 'https://joaopedro0s.github.io/StudyFlow/',
    title: 'StudyFlow — Study Aid',
    desc: bi(
      'An educational platform built with the Scrum methodology as a SENAI capstone project. An interface organized by subject (Front-End, Back-End, Databases, Capstone Project) with interactive cards for accessing study materials.',
      'Plataforma educacional desenvolvida com metodologia SCRUM como Projeto Integrador do SENAI. Interface organizada por disciplinas (Front-End, Back-End, Banco de Dados, Projeto Integrador) com cards interativos para acesso a materiais de estudo.',
    ),
    features: [
      bi('Hero section with CTA', 'Hero section com chamada'),
      bi('Cards organized by subject', 'Cards organizados por disciplina'),
      bi('Search bar', 'Barra de pesquisa'),
      bi('Clean, study-focused design', 'Design clean e focado em estudo'),
      bi('"View files" links', 'Links para "Ver arquivos"'),
      bi('Fully responsive', 'Totalmente responsivo'),
    ],
    tech: ['HTML5', 'CSS3', 'CSS Grid/Flexbox', 'Font Awesome', 'Scrum methodology'],
    repo: 'https://github.com/Joaopedro0s/StudyFlow',
  },
  {
    iframe: 'https://joaopedro0s.github.io/Bike-Shop/',
    visit: 'https://joaopedro0s.github.io/Bike-Shop/',
    title: 'Velocidade Premium — Bike Shop',
    desc: bi(
      'A high-conversion landing page for a premium bike shop, with strong visual appeal and JavaScript interactivity. Features a product catalog (Strada F1, Montagna XTR, Urbano Elegante) and interactive elements using click, double-click and hover events.',
      'Landing page de alta conversão para loja de bicicletas premium, com forte apelo visual e interatividade via JavaScript. Apresenta catálogo de produtos (Strada F1, Montagna XTR, Urbano Elegante) e elementos interativos com eventos de clique, duplo clique e hover.',
    ),
    features: [
      bi('Interactive buttons (click/dblclick/mouse)', 'Botões interativos (click/dblclick/mouse)'),
      bi('Newsletter form with validation', 'Formulário de newsletter com validação'),
      bi('Interaction log system', 'Sistema de logs de interação'),
      bi('Product cards with prices', 'Cards de produtos com preços'),
      bi('Bike gallery', 'Galeria de bicicletas'),
      bi('Elegant, responsive design', 'Design responsivo e elegante'),
    ],
    tech: ['HTML5', 'CSS3', 'JavaScript (DOM Events)', 'Google Fonts', 'CSS Grid/Flexbox'],
    repo: 'https://github.com/Joaopedro0s/Bike-Shop',
  },
];

const ALL_TECH = ['HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS', 'Bootstrap 5', 'CSS Grid/Flexbox', 'Font Awesome', 'DOM Event Handling'];

export default function WebPlatforms() {
  const { t } = useLocale();
  useReveal();

  const slides = SITES.map((site) => (
    <div key={t(site.title)}>
      <div className="preview-frame" style={{ marginBottom: '1.25rem' }}>
        <iframe
          src={site.iframe}
          sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-modals"
          loading="lazy"
          title={t(site.title)}
        />
      </div>
      <div className="row row--end" style={{ marginBottom: '1rem' }}>
        <a href={site.visit} target="_blank" rel="noopener" className="btn-visit">
          {t(T.openTab)}
        </a>
      </div>
      <h2 style={{ color: 'var(--signal-ink)', marginBottom: '.75rem' }}>{t(site.title)}</h2>
      <p style={{ color: 'var(--fog)', marginBottom: '1rem', lineHeight: 1.6 }}>{t(site.desc)}</p>

      <h3 style={{ color: 'var(--signal-ink)', marginBottom: '.5rem' }}>{t(T.features)}</h3>
      <ul className="feature-list" style={{ marginBottom: '1rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '.2rem' }}>
        {site.features.map((f) => (
          <li key={t(f)}>✓ {t(f)}</li>
        ))}
      </ul>

      <h3 style={{ color: 'var(--signal-ink)', marginBottom: '.5rem' }}>{t(T.tech)}</h3>
      <div className="row row--wrap" style={{ gap: '.5rem', marginBottom: '1.25rem' }}>
        {site.tech.map((tech) => (
          <span className="tech-badge" key={tech}>
            {tech}
          </span>
        ))}
      </div>

      <div className="repo-box row row--between row--wrap">
        <div>
          <h4>{t(T.repo)}</h4>
          <p>{t(T.repoDesc)}</p>
        </div>
        <a href={site.repo} target="_blank" rel="noopener" className="btn btn--solid">
          {t(T.viewGithub)} <i>↗</i>
        </a>
      </div>
    </div>
  ));

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

        <Carousel slides={slides} />

        <div className="reveal" style={{ marginTop: '2rem', background: 'var(--raise)', border: '1px solid var(--wire)', borderRadius: '1rem', padding: '1rem', textAlign: 'center' }}>
          <h3 style={{ color: 'var(--signal-ink)', marginBottom: '.6rem', fontSize: '1rem' }}>{t(T.allTech)}</h3>
          <div className="row row--wrap" style={{ justifyContent: 'center', gap: '.5rem' }}>
            {ALL_TECH.map((tech) => (
              <span className="tech-badge" key={tech}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </main>

      <SubFooter />
      <BackToTop />
    </div>
  );
}
