import type { DetailedCertEntry } from '../types';
import { bi } from '../i18n/dictionary';

/** Direct 1:1 port of the 17 certification cards from certificacoes.html, translated to bilingual. */
export const CERTIFICATIONS_DETAILED: DetailedCertEntry[] = [
  {
    key: 'BI', issuer: 'Microsoft Learn', year: '2026',
    title: bi('Data Analysis with Power BI', 'Análise de Dados com Power BI'),
    desc: bi('Data analysis, interactive visualizations, DAX, Power Query and building professional dashboards for decision-making.',
             'Análise de dados, visualizações interativas, DAX, Power Query e criação de dashboards profissionais para tomada de decisão.'),
    tags: ['Power BI', 'DAX', 'Power Query'],
  },
  {
    key: 'Py', issuer: 'Alura', year: '2026',
    title: bi('Building GUIs with Python', 'Criando Interface Gráfica com Python'),
    desc: bi('Building graphical interfaces with Tkinter, PyQt, events, layouts and full desktop applications.',
             'Desenvolvimento de interfaces gráficas com Tkinter, PyQt, eventos, layouts e criação de aplicações desktop completas.'),
    tags: ['Python', 'Tkinter', 'GUI'],
  },
  {
    key: 'DB', issuer: 'IBM', year: '2026',
    title: bi('Dashboards with Excel and Cognos', 'DashBoards com Excel e Cognos'),
    desc: bi('Building interactive dashboards using advanced Excel and IBM Cognos Analytics for business intelligence.',
             'Criação de dashboards interativos utilizando Excel avançado e IBM Cognos Analytics para business intelligence.'),
    tags: ['Excel', 'Cognos', bi('Dashboards', 'Dashboards')],
  },
  {
    key: 'XL', issuer: 'Alura', year: '2024',
    title: bi('Excel — Full Track', 'Excel - Formação Completa'),
    desc: bi('Excel from basics to advanced: formulas, functions, pivot tables, charts and business data analysis.',
             'Excel do básico ao avançado, fórmulas, funções, tabelas dinâmicas, gráficos e análise de dados empresarial.'),
    tags: [bi('Excel', 'Excel'), bi('Formulas', 'Fórmulas'), bi('Pivot Tables', 'Tabelas Dinâmicas')],
  },
  {
    key: 'E16', issuer: 'Fundação Bradesco', year: '2024',
    title: bi('Excel 2016 — Basic', 'Excel 2016 - Básico'),
    desc: bi('Excel 2016 fundamentals: formatting, basic formulas, building spreadsheets and first steps in data analysis.',
             'Fundamentos do Excel 2016, formatação, fórmulas básicas, criação de planilhas e primeiros passos na análise de dados.'),
    tags: [bi('Excel 2016', 'Excel 2016'), bi('Spreadsheets', 'Planilhas')],
  },
  {
    key: 'AD', issuer: 'IBM', year: '2026',
    title: bi('Excel Basics for Data Analysis', 'Excel Básico para Análise de Dados'),
    desc: bi('Using Excel as a data analysis tool: data cleaning, filters, sorting and visualizations.',
             'Utilização do Excel como ferramenta de análise de dados, limpeza de dados, filtros, classificação e visualizações.'),
    tags: [bi('Excel', 'Excel'), bi('Data Analysis', 'Análise de Dados'), bi('Data Cleaning', 'Limpeza de Dados')],
  },
  {
    key: 'EB', issuer: 'Fundação Bradesco', year: '2026',
    title: bi('Excel Basic', 'Excel Básico'),
    desc: bi('Core Excel concepts: navigation, data entry, conditional formatting and simple charts.',
             'Conceitos fundamentais do Excel, navegação, entrada de dados, formatação condicional e criação de gráficos simples.'),
    tags: [bi('Excel', 'Excel'), bi('Formatting', 'Formatação'), bi('Charts', 'Gráficos')],
  },
  {
    key: 'EI', issuer: 'Fundação Bradesco', year: '2026',
    title: bi('Excel Intermediate', 'Excel Intermediário'),
    desc: bi('Advanced functions such as VLOOKUP, IF, SUMIFS, pivot tables, data segmentation and interactive dashboards.',
             'Funções avançadas como PROCV, SE, SOMASES, tabelas dinâmicas, segmentação de dados e dashboards interativos.'),
    tags: [bi('Excel', 'Excel'), 'VLOOKUP', bi('Pivot Tables', 'Tabelas Dinâmicas')],
  },
  {
    key: 'HT', issuer: 'Alura', year: '2024',
    title: bi('HTML and CSS', 'HTML e CSS'),
    desc: bi('Building web pages with semantic HTML5, modern CSS3, Flexbox, Grid Layout and responsive design.',
             'Construção de páginas web com HTML5 semântico, CSS3 moderno, Flexbox, Grid Layout e design responsivo.'),
    tags: ['HTML5', 'CSS3', bi('Responsiveness', 'Responsividade')],
  },
  {
    key: 'IA', issuer: 'IBM', year: '2026',
    title: bi('Introduction to Data Analysis', 'Introdução à Análise de Dados'),
    desc: bi('Data analysis fundamentals, the data lifecycle, descriptive statistics and BI tools.',
             'Fundamentos da análise de dados, ciclo de vida dos dados, estatística descritiva e ferramentas de BI.'),
    tags: [bi('Data Analysis', 'Análise de Dados'), bi('Statistics', 'Estatística'), 'BI'],
  },
  {
    key: 'LP', issuer: 'Alura', year: '2024',
    title: bi('Programming Logic', 'Lógica de Programação'),
    desc: bi('Algorithms, conditional structures, loops, arrays, matrices and computational problem solving.',
             'Algoritmos, estruturas condicionais, laços de repetição, vetores, matrizes e resolução de problemas computacionais.'),
    tags: [bi('Logic', 'Lógica'), bi('Algorithms', 'Algoritmos'), bi('Pseudocode', 'Pseudocódigo')],
  },
  {
    key: 'SQL', issuer: 'Alura', year: '2024',
    title: 'MySQL',
    desc: bi('Relational databases with MySQL: advanced SQL queries, JOINs, subqueries, stored procedures and optimization.',
             'Banco de dados relacional com MySQL, consultas SQL avançadas, JOINs, subconsultas, stored procedures e otimização.'),
    tags: ['MySQL', 'SQL', bi('Modeling', 'Modelagem')],
  },
  {
    key: 'PP', issuer: 'Fundação Bradesco', year: '2024',
    title: bi('PowerPoint 2016 — Basic', 'Power Point 2016 - Básico'),
    desc: bi('Building professional presentations: slide masters, animations, transitions and effective presentation techniques.',
             'Criação de apresentações profissionais, slides mestres, animações, transições e técnicas de apresentação eficaz.'),
    tags: [bi('PowerPoint', 'Power Point'), bi('Presentations', 'Apresentações')],
  },
  {
    key: 'TI', issuer: 'Alura', year: '2024',
    title: bi('First Steps in Technology', 'Primeiros Passos em Tecnologia'),
    desc: bi('Introduction to the world of technology: hardware, software, networking fundamentals and IT careers.',
             'Introdução ao mundo da tecnologia, conceitos fundamentais de hardware, software, redes e carreiras em TI.'),
    tags: [bi('IT Fundamentals', 'Fundamentos de TI'), 'Hardware', 'Software'],
  },
  {
    key: 'SI', issuer: 'Fundação Bradesco', year: '2026',
    title: bi('Information Technology Security', 'Segurança em Tecnologia da Informação'),
    desc: bi('Information security principles, cryptography, firewalls, security policies and IT best practices.',
             'Princípios de segurança da informação, criptografia, firewalls, políticas de segurança e boas práticas em TI.'),
    tags: [bi('Information Security', 'Segurança da Informação'), bi('Cryptography', 'Criptografia'), 'LGPD'],
  },
  {
    key: 'AI', issuer: 'GitHub', year: '2026',
    title: bi('AI Solutions with GitHub', 'Soluções de IA com GitHub'),
    desc: bi('Implementing AI solutions using GitHub Copilot, GitHub Models and other AI tooling.',
             'Implementação de soluções de inteligência artificial utilizando GitHub Copilot, GitHub Models e ferramentas de IA.'),
    tags: ['IA', 'GitHub', 'Copilot'],
  },
  {
    key: 'SS', issuer: 'Alura', year: '2024',
    title: 'SQL Server',
    desc: bi('Administration and querying in SQL Server: T-SQL, indexes, views, triggers and query optimization.',
             'Administração e consultas em SQL Server, T-SQL, índices, views, triggers e otimização de consultas.'),
    tags: ['SQL Server', 'T-SQL', bi('Databases', 'Banco de Dados')],
  },
  {
    key: 'WD', issuer: 'Fundação Bradesco', year: '2024',
    title: bi('Word 2016 — Basic', 'Word 2016 - Básico'),
    desc: bi('Document formatting, styles, tables, images, mail merge and Word productivity features.',
             'Formatação de documentos, estilos, tabelas, imagens, mala direta e recursos de produtividade do Word.'),
    tags: [bi('Word', 'Word'), bi('Documents', 'Documentos'), bi('Formatting', 'Formatação')],
  },
];

export const CERT_STATS: { n: string; l: import('../types').LocalizedText }[] = [
  { n: '17+', l: bi('Certifications', 'Certificações') },
  { n: '200+', l: bi('Hours studied', 'Horas de estudo') },
  { n: '12+', l: bi('Technologies', 'Tecnologias') },
  { n: '5', l: bi('Institutions', 'Instituições') },
];
