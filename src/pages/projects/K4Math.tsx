import { useState } from 'react';
import { useLocale } from '../../i18n/LocaleContext';
import { bi } from '../../i18n/dictionary';
import { useReveal } from '../../lib/useReveal';
import Halo from '../../components/layout/Halo';
import SubNav from '../../components/layout/SubNav';
import SubFooter from '../../components/layout/SubFooter';
import BackToTop from '../../components/layout/BackToTop';
import Carousel from '../../components/shared/Carousel';

const GITHUB = 'https://github.com/Joaopedro0s/TCC-K4-MATH.git';

const T = {
  eyebrow: bi('Capstone Project', 'Projeto Integrador'),
  title: bi('K4Math — Gamified Math', 'K4Math — Matemática Gamificada'),
  lede: bi(
    'A math learning platform with a full gamification, progress and achievement system.',
    'Plataforma de aprendizado de matemática, com sistema completo de gamificação, progresso e conquistas.',
  ),
  navTag: bi('Capstone Project — K4Math', 'Projeto Integrador — K4Math'),
  repo: bi('Repository', 'Repositório'),
  repoDesc: bi('Full project code', 'Código completo do projeto'),
  viewGithub: bi('View on GitHub', 'Ver no GitHub'),
  viewCode: bi('View code', 'Ver código'),
  s1Title: bi('K4Math — Overview', 'K4Math - Visão Geral'),
  s1P1: bi(
    'K4Math is a complete math learning platform inspired by Duolingo, built to make studying math more fun and engaging through gamification. It includes account creation, level progression, avatar customization and an achievement system.',
    'O K4Math é uma plataforma completa de aprendizado de matemática inspirada no Duolingo, desenvolvida para tornar o estudo da matemática mais divertido e envolvente através de gamificação. O sistema conta com criação de contas, progressão por níveis, personalização de avatares e sistema de conquistas.',
  ),
  s1P2: bi(
    'Built as the capstone project for my Systems Development course, K4Math uses a full-stack web stack (PHP, SQL, HTML, CSS, JS) to deliver a complete user experience.',
    'Desenvolvido como Projeto Integrador do curso de DS, o K4Math utiliza tecnologias web full-stack (PHP, SQL, HTML, CSS, JS) para entregar uma experiência completa aos usuários.',
  ),
  featTitle: bi('Main Features', 'Funcionalidades Principais'),
  feat1: bi('Account Creation', 'Criação de Contas'),
  feat1d: bi('Full sign-up, login and password-recovery flow with PHP and MySQL', 'Sistema completo de cadastro, login e recuperação de senha com PHP e MySQL'),
  feat2: bi('Progress Tracking', 'Visualização de Progresso'),
  feat2d: bi('Charts and metrics showing user evolution, levels and experience', 'Gráficos e métricas mostrando evolução do usuário, níveis e experiência'),
  feat3: bi('Avatar Customization', 'Personalização de Avatares'),
  feat3d: bi('Choosing characters, outfits and accessories to personalize a profile', 'Escolha de personagens, roupas e acessórios para personalizar o perfil'),
  feat4: bi('Earning Achievements', 'Ganho de Conquistas'),
  feat4d: bi('A medal and trophy system unlocked by completing challenges', 'Sistema de medalhas e troféus desbloqueáveis ao completar desafios'),
  s2Title: bi('Learning Content', 'Conteúdo de Aprendizagem'),
  s2P: bi(
    'Modeled after Duolingo, K4Math organizes content into thematic units with short interactive quizzes. Each lesson is a quick, fun experience, letting the learner move at their own pace.',
    'Inspirado no modelo do Duolingo, o K4Math organiza o conteúdo em unidades temáticas com pequenos quizzes interativos. Cada lição oferece uma experiência rápida e divertida, permitindo que o usuário aprenda no seu próprio ritmo.',
  ),
  unitsTitle: bi('Learning Units', 'Unidades de Aprendizagem'),
  quizTitle: bi('Sample Quiz (Duolingo-style)', 'Exemplo de Quiz (Estilo Duolingo)'),
  quizQ: bi('What is the result of 15 + 27?', 'Qual é o resultado de 15 + 27?'),
  quizOk: bi('Correct! Nice work! +10 XP', 'Correto! Parabéns! +10 XP'),
  quizBad: bi('Oops! The correct answer is 42. Keep trying!', 'Ops! A resposta correta é 42. Continue tentando!'),
  gamifyTitle: bi('Gamification System', 'Sistema de Gamificação'),
  gamifyDesc: bi('Every finished lesson earns XP and coins', 'Cada lição concluída rende XP e moedas'),
  s3Title: bi('Progress System', 'Sistema de Progresso'),
  s3P: bi(
    "K4Math's progress system lets users see their evolution clearly and with motivation, backed by detailed metrics and visuals.",
    'O sistema de progresso do K4Math permite que os usuários visualizem sua evolução de forma clara e motivadora, com métricas detalhadas e representações visuais.',
  ),
  s3FeatTitle: bi('Progress Features', 'Funcionalidades de Progresso'),
  s3F: [
    bi('User stats dashboard', 'Dashboard com estatísticas do usuário'),
    bi('Performance charts by subject/topic', 'Gráficos de desempenho por matéria/tópico'),
    bi('XP bar and levels', 'Barra de experiência (XP) e níveis'),
    bi('Daily streaks', 'Sequências de dias (streak) e ofensas'),
    bi('Right/wrong answer reports', 'Relatórios de acertos e erros'),
    bi('Customizable daily and weekly goals', 'Metas diárias e semanais personalizáveis'),
  ],
  progressModule: bi('Progress Module', 'Módulo de Progresso'),
  codeOnGithub: bi('Code on GitHub', 'Código no GitHub'),
  s4Title: bi('Avatar Customization', 'Personalização de Avatares'),
  s4P: bi(
    'The customization system lets every user build a unique avatar, driving more engagement and identification with the platform.',
    'O sistema de personalização permite que cada usuário crie um avatar único, promovendo maior engajamento e identificação com a plataforma.',
  ),
  s4OptTitle: bi('Customization Options', 'Opções de Personalização'),
  s4O: [
    bi('Choice of several base characters', 'Escolha entre vários personagens base'),
    bi('Customizable skin and hair colors', 'Cores de pele e cabelo customizáveis'),
    bi('Outfits, accessories and hats', 'Roupas, acessórios e chapéus'),
    bi('Facial expressions (happy, sad, excited)', 'Expressões faciais (feliz, triste, animado)'),
    bi('Profile backgrounds and scenes', 'Fundos e cenários para perfil'),
    bi('Items unlockable with in-game coins', 'Itens desbloqueáveis com moedas do jogo'),
  ],
  avatarModule: bi('Avatar Module', 'Módulo de Avatar'),
  s5Title: bi('Achievement System', 'Sistema de Conquistas'),
  s5P: bi(
    "K4Math's gamification system rewards users with achievements for completing challenges, keeping them motivated and engaged in learning.",
    'O sistema de gamificação do K4Math recompensa os usuários com conquistas ao completarem desafios, mantendo-os motivados e engajados no aprendizado.',
  ),
  s5TypeTitle: bi('Achievement Types', 'Tipos de Conquistas'),
  s5T: [
    bi('Progress achievements (completing levels)', 'Conquistas de progresso (completar níveis)'),
    bi('Streak achievements (day streaks)', 'Conquistas de sequência (streak de dias)'),
    bi('Skill achievements (correct answers)', 'Conquistas de habilidade (acertar questões)'),
    bi('Time achievements (study time)', 'Conquistas de tempo (tempo de estudo)'),
    bi('Gold, silver and bronze medals', 'Medalhas de ouro, prata e bronze'),
    bi('Special event trophies', 'Troféus especiais para eventos'),
  ],
  achievementModule: bi('Achievements Module', 'Módulo de Conquistas'),
  summary: [bi('Account Creation', 'Criação de Contas'), bi('Progress', 'Progresso'), bi('Avatars', 'Avatares'), bi('Achievements', 'Conquistas')],
};

const UNITS = [
  {
    icon: 'A', title: bi('Basic Arithmetic', 'Aritmética Básica'), meta: bi('6 lessons • 24 exercises', '6 lições • 24 exercícios'),
    lessons: [
      { name: bi('Addition and Subtraction', 'Adição e Subtração'), level: 1, locked: false },
      { name: bi('Multiplication', 'Multiplicação'), level: 1, locked: false },
      { name: bi('Division', 'Divisão'), level: 2, locked: false },
      { name: bi('Numeric Expressions', 'Expressões Numéricas'), level: 2, locked: true },
    ],
  },
  {
    icon: 'G', title: bi('Geometry', 'Geometria'), meta: bi('5 lessons • 20 exercises', '5 lições • 20 exercícios'),
    lessons: [
      { name: bi('Plane Figures', 'Figuras Planas'), level: 1, locked: false },
      { name: bi('Perimeter and Area', 'Perímetro e Área'), level: 2, locked: true },
      { name: bi('Angles', 'Ângulos'), level: 2, locked: true },
    ],
  },
  {
    icon: 'F', title: bi('Fractions and Decimals', 'Frações e Decimais'), meta: bi('4 lessons • 16 exercises', '4 lições • 16 exercícios'),
    lessons: [
      { name: bi('What fractions are', 'O que são frações'), level: 1, locked: false },
      { name: bi('Operations with fractions', 'Operações com Frações'), level: 2, locked: true },
      { name: bi('Decimal numbers', 'Números Decimais'), level: 2, locked: true },
    ],
  },
  {
    icon: 'R', title: bi('Logical Reasoning', 'Raciocínio Lógico'), meta: bi('4 lessons • 16 exercises', '4 lições • 16 exercícios'),
    lessons: [
      { name: bi('Sequences and Patterns', 'Sequências e Padrões'), level: 1, locked: false },
      { name: bi('Math Problems', 'Problemas Matemáticos'), level: 2, locked: true },
    ],
  },
];

function RepoBox() {
  const { t } = useLocale();
  return (
    <div className="repo-box row row--between row--wrap">
      <div>
        <h4>{t(T.repo)}</h4>
        <p>{t(T.repoDesc)}</p>
      </div>
      <a href={GITHUB} target="_blank" rel="noopener" className="btn btn--solid">
        <i className="fab fa-github" /> {t(T.viewGithub)}
      </a>
    </div>
  );
}

function QuizWidget() {
  const { t } = useLocale();
  const [result, setResult] = useState<'ok' | 'bad' | null>(null);
  const [picked, setPicked] = useState<string | null>(null);
  const check = (v: string) => {
    setPicked(v);
    setResult(v === '42' ? 'ok' : 'bad');
  };
  return (
    <div className="quiz-question">
      <p>{t(T.quizQ)}</p>
      <div className="quiz-options">
        {['32', '42', '38', '45'].map((v) => (
          <div
            key={v}
            className={`quiz-option${picked === v ? (v === '42' ? ' correct' : ' wrong') : ''}`}
            onClick={() => check(v)}
          >
            {v}
          </div>
        ))}
      </div>
      <p className={`quiz-feedback${result === 'ok' ? ' quiz-feedback--ok' : result === 'bad' ? ' quiz-feedback--bad' : ''}`}>
        {result === 'ok' ? t(T.quizOk) : result === 'bad' ? t(T.quizBad) : ''}
      </p>
    </div>
  );
}

export default function K4Math() {
  const { t } = useLocale();
  useReveal();

  const slides = [
    <>
      <div className="shot-frame">
        <img src="/PROJETOS/imagens/mathduo-tela-inicial.jpeg" alt="K4Math home screen" />
      </div>
      <h2 style={{ color: 'var(--signal-ink)', marginBottom: '.75rem' }}>{t(T.s1Title)}</h2>
      <p style={{ color: 'var(--fog)', marginBottom: '.9rem', lineHeight: 1.6 }}>{t(T.s1P1)}</p>
      <p style={{ color: 'var(--fog)', marginBottom: '1.2rem', lineHeight: 1.6 }}>{t(T.s1P2)}</p>
      <h3 style={{ color: 'var(--signal-ink)', marginBottom: '.75rem' }}>{t(T.featTitle)}</h3>
      <div className="grid-2" style={{ marginBottom: '1.25rem' }}>
        {[
          [T.feat1, T.feat1d], [T.feat2, T.feat2d], [T.feat3, T.feat3d], [T.feat4, T.feat4d],
        ].map(([title, desc], i) => (
          <div className="pcard" key={i}>
            <h4>{t(title)}</h4>
            <p>{t(desc)}</p>
          </div>
        ))}
      </div>
      <RepoBox />
    </>,
    <>
      <div className="shot-frame">
        <img src="/PROJETOS/imagens/mathduo-tela-game.jpeg" alt="K4Math content screen" />
      </div>
      <h2 style={{ color: 'var(--signal-ink)', marginBottom: '.75rem' }}>{t(T.s2Title)}</h2>
      <p style={{ color: 'var(--fog)', marginBottom: '1rem', lineHeight: 1.6 }}>{t(T.s2P)}</p>
      <h3 style={{ color: 'var(--signal-ink)', marginBottom: '.75rem' }}>{t(T.unitsTitle)}</h3>
      <div className="grid-2" style={{ marginBottom: '1.5rem' }}>
        {UNITS.map((u) => (
          <div className="topic-card" key={u.icon}>
            <div className="topic-card__head">
              <div className="topic-card__icon">{u.icon}</div>
              <div>
                <div className="topic-card__title">{t(u.title)}</div>
                <div className="topic-card__meta">{t(u.meta)}</div>
              </div>
            </div>
            <div className="stack" style={{ gap: '.5rem' }}>
              {u.lessons.map((l) => (
                <div className={`lesson-item${l.locked ? ' lesson-item--locked' : ''}`} key={t(l.name)}>
                  <span>{l.locked ? '🔒' : '✓'} {t(l.name)}</span>
                  <span className="lesson-item__badge">{t(bi('Level', 'Nível'))} {l.level}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <h3 style={{ color: 'var(--signal-ink)', marginBottom: '.75rem' }}>{t(T.quizTitle)}</h3>
      <QuizWidget />
      <div className="repo-box row row--between row--wrap" style={{ marginTop: '1rem' }}>
        <div>
          <h4>{t(T.gamifyTitle)}</h4>
          <p>{t(T.gamifyDesc)}</p>
        </div>
        <a href={GITHUB} target="_blank" rel="noopener" className="btn btn--solid">
          <i className="fab fa-github" /> {t(T.viewCode)}
        </a>
      </div>
    </>,
    <>
      <div className="shot-frame">
        <img src="/PROJETOS/imagens/mathduo-tela-progresso.jpeg" alt="K4Math progress screen" />
      </div>
      <h2 style={{ color: 'var(--signal-ink)', marginBottom: '.75rem' }}>{t(T.s3Title)}</h2>
      <p style={{ color: 'var(--fog)', marginBottom: '1rem', lineHeight: 1.6 }}>{t(T.s3P)}</p>
      <h3 style={{ color: 'var(--signal-ink)', marginBottom: '.5rem' }}>{t(T.s3FeatTitle)}</h3>
      <ul className="feature-list" style={{ marginBottom: '1.25rem' }}>
        {T.s3F.map((f) => (
          <li key={t(f)}>✓ {t(f)}</li>
        ))}
      </ul>
      <div className="repo-box row row--between row--wrap">
        <div>
          <h4>{t(T.progressModule)}</h4>
          <p>{t(T.codeOnGithub)}</p>
        </div>
        <a href={GITHUB} target="_blank" rel="noopener" className="btn btn--solid">
          <i className="fab fa-github" /> {t(T.viewCode)}
        </a>
      </div>
    </>,
    <>
      <div className="shot-frame">
        <img src="/PROJETOS/imagens/mathduo-tela-personalização.jpeg" alt="K4Math avatar customization screen" />
      </div>
      <h2 style={{ color: 'var(--signal-ink)', marginBottom: '.75rem' }}>{t(T.s4Title)}</h2>
      <p style={{ color: 'var(--fog)', marginBottom: '1rem', lineHeight: 1.6 }}>{t(T.s4P)}</p>
      <h3 style={{ color: 'var(--signal-ink)', marginBottom: '.5rem' }}>{t(T.s4OptTitle)}</h3>
      <ul className="feature-list" style={{ marginBottom: '1.25rem' }}>
        {T.s4O.map((f) => (
          <li key={t(f)}>✓ {t(f)}</li>
        ))}
      </ul>
      <div className="repo-box row row--between row--wrap">
        <div>
          <h4>{t(T.avatarModule)}</h4>
          <p>{t(T.codeOnGithub)}</p>
        </div>
        <a href={GITHUB} target="_blank" rel="noopener" className="btn btn--solid">
          <i className="fab fa-github" /> {t(T.viewCode)}
        </a>
      </div>
    </>,
    <>
      <div className="shot-frame">
        <img src="/PROJETOS/imagens/mathduo-tela-conquistas.jpeg" alt="K4Math achievements screen" />
      </div>
      <h2 style={{ color: 'var(--signal-ink)', marginBottom: '.75rem' }}>{t(T.s5Title)}</h2>
      <p style={{ color: 'var(--fog)', marginBottom: '1rem', lineHeight: 1.6 }}>{t(T.s5P)}</p>
      <h3 style={{ color: 'var(--signal-ink)', marginBottom: '.5rem' }}>{t(T.s5TypeTitle)}</h3>
      <ul className="feature-list" style={{ marginBottom: '1.25rem' }}>
        {T.s5T.map((f) => (
          <li key={t(f)}>✓ {t(f)}</li>
        ))}
      </ul>
      <div className="repo-box row row--between row--wrap">
        <div>
          <h4>{t(T.achievementModule)}</h4>
          <p>{t(T.codeOnGithub)}</p>
        </div>
        <a href={GITHUB} target="_blank" rel="noopener" className="btn btn--solid">
          <i className="fab fa-github" /> {t(T.viewCode)}
        </a>
      </div>
    </>,
  ];

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

        <div className="summary-tiles reveal">
          {T.summary.map((s) => (
            <div className="summary-tile" key={t(s)}>
              {t(s)}
            </div>
          ))}
        </div>
      </main>

      <SubFooter />
      <BackToTop />
    </div>
  );
}
