import type { Project } from '../types';
import { bi } from '../i18n/dictionary';

/** Direct 1:1 port of the PROJETOS array from the original index.html <script> block. */
export const PROJECTS: Project[] = [
  {
    nome: 'K4Math', ano: '2025', destaque: true, status: 'acad',
    stacks: ['FULLSTACK', 'DB'],
    desc: bi('A gamified, Duolingo-style math platform — sign-up, unit-based tracks, XP, coins, an avatar shop and achievements. It was my technical-school capstone and is still the project where front end, back end and database meet.',
             'Plataforma de matemática gamificada no modelo Duolingo — cadastro, trilhas por unidade, XP, moedas, loja de avatares e conquistas. Foi meu TCC no técnico e continua sendo o projeto onde front, back e banco se encontram.'),
    tags: ['PHP', 'MySQL', 'JavaScript', 'CSS'],
    metrics: [
      { v: '4', l: bi('Thematic units', 'Unidades temáticas') },
      { v: '19', l: bi('Lessons', 'Lições') },
      { v: '76', l: bi('Exercises', 'Exercícios') },
    ],
    img: '/PROJETOS/imagens/mathduo-tela-inicial.jpeg',
    href: '/projects/k4math', cta: bi('Open the case', 'Abrir o case'),
  },
  {
    nome: bi('Web Platforms', 'Plataformas Web'), ano: '2024–2026', status: 'live',
    stacks: ['FULLSTACK'],
    desc: bi('Four published interfaces: <b>JML Phones</b> (Bootstrap 5 e-commerce), <b>StudyFlow</b> (a study portal built with Scrum), <b>Velocidade Premium</b> (a conversion landing page with DOM events) and this portfolio.',
             'Quatro interfaces publicadas: <b>JML Phones</b> (e-commerce em Bootstrap 5), <b>StudyFlow</b> (portal de estudos feito em SCRUM), <b>Velocidade Premium</b> (landing de conversão com eventos DOM) e este portfólio.'),
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Tailwind'],
    metrics: [
      { v: '4', l: bi('Sites live', 'Sites no ar') },
      { v: '100%', l: bi('Responsive', 'Responsivos') },
    ],
    href: '/projects/web-platforms', cta: bi('See all four', 'Ver as quatro'),
  },
  {
    nome: bi('FPD Risk Model', 'Modelo de risco FPD'), ano: '2026', status: 'proto',
    stacks: ['DATA'],
    desc: bi('A <b>First Payment Default</b> prediction pipeline built in a 48-hour hackathon: feature engineering, SMOTE balancing, LightGBM tuned with Optuna and SHAP interpretation, delivering a scored base with risk tiers.',
             'Pipeline de previsão de <b>First Payment Default</b> construído em 48 h de hackathon: engenharia de atributos, balanceamento com SMOTE, LightGBM ajustado no Optuna e interpretação por SHAP, entregando a base pontuada com faixas de risco.'),
    tags: ['Python', 'LightGBM', 'SMOTE', 'Optuna', 'SHAP'],
    metrics: [
      { v: '0.796', l: 'ROC-AUC' },
      { v: bi('3rd', '3º'), l: bi('Place · PIT SJC', 'Lugar · PIT SJC') },
      { v: '48h', l: bi('Zero to pitch', 'Do zero ao pitch') },
    ],
    motif: 'curve',
    href: '/#awards', cta: bi('See the hackathon', 'Ver o hackathon'),
  },
  {
    nome: bi('Superstore Dashboard', 'Dashboard Superstore'), ano: '2026', destaque: true, status: 'acad',
    stacks: ['DATA'],
    desc: bi('Exploratory analysis of a US retail chain: data cleaning, pivot tables and a read on profit by category, segment and region. The finding that sparked the most discussion — discounts above 30% wipe out the margin.',
             'Análise exploratória de uma rede varejista americana: limpeza, tabelas dinâmicas e leitura de lucro por categoria, segmento e região. O achado que mais rendeu discussão — descontos acima de 30% derrubam a margem.'),
    tags: ['Excel', 'Pivot Tables', 'Power Query'],
    metrics: [
      { v: 'US$ 1.7M', l: bi('Profit analyzed', 'Lucro analisado') },
      { v: '56%', l: bi('Margin', 'Margem') },
      { v: 'West', l: bi('Top region', 'Região líder') },
    ],
    img: '/PROJETOS/imagens/dashboard3.jpeg',
    href: '/projects/data-analysis', cta: bi('See the insights', 'Ver os insights'),
  },
  {
    nome: bi('Relational Modeling', 'Modelagem relacional'), ano: '2024–2025', status: 'acad',
    stacks: ['DB'],
    desc: bi('Three databases designed from scratch: <b>EduCash</b> (financial education), <b>K4Math</b> (progression and inventory) and <b>Loja Real</b> (orders and stock). Normalization, stored procedures, triggers and reporting queries.',
             'Três bases desenhadas do zero: <b>EduCash</b> (educação financeira), <b>K4Math</b> (progressão e inventário) e <b>Loja Real</b> (pedidos e estoque). Normalização, procedures, triggers e consultas de relatório.'),
    tags: ['MySQL', 'SQL Server', 'T-SQL', bi('Modeling', 'Modelagem')],
    metrics: [{ v: '3', l: bi('Complete schemas', 'Schemas completos') }],
    motif: 'schema',
    href: '/projects/database', cta: bi('See the schemas', 'Ver os schemas'),
  },
];
