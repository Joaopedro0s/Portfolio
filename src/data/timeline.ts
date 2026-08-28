import type { TimelineItem } from '../types';
import { bi } from '../i18n/dictionary';

/** Direct 1:1 port of the timeline items from the original index.html markup. */
export const EXPERIENCE: TimelineItem[] = [
  {
    when: '02/2024 → 12/2025',
    what: bi('Systems Development Apprentice', 'Aprendiz em Desenvolvimento de Sistemas'),
    where: 'Iochpe-Maxion — Cruzeiro/SP',
    note: bi('Web development, system routines and databases for internal operations solutions.', 'Desenvolvimento web, rotinas de sistema e bancos de dados para soluções internas da operação.'),
  },
  {
    when: '12/2023 → 02/2024',
    what: bi('IT Intern', 'Estagiário de TI'),
    where: 'UNISAL — SP',
    note: bi('Lab support, environment setup and maintenance of the machine fleet.', 'Suporte a laboratórios, preparação de ambientes e manutenção de parque de máquinas.'),
  },
  {
    when: '03/2023 → 12/2023',
    what: bi('Administrative Assistant', 'Auxiliar Administrativo'),
    where: 'Ascontec',
    note: bi('Administrative routines and spreadsheet control — where the interest in data began.', 'Rotinas administrativas e controle em planilhas — onde o gosto por dados começou.'),
  },
];

export const EDUCATION: TimelineItem[] = [
  {
    when: bi('2026 → 2027 · in progress', '2026 → 2027 · cursando'),
    what: bi('Associate Degree in Systems Analysis and Development', 'Tecnólogo em Análise e Desenvolvimento de Sistemas'),
    where: 'SENAI Taubaté',
    note: bi('Java back-end, applied statistics, requirements engineering and capstone project.', 'Back-end em Java, estatística aplicada, engenharia de requisitos e projeto integrador.'),
  },
  {
    when: bi('2024 → 2025 · completed', '2024 → 2025 · concluído'),
    what: bi('Technical Degree in Systems Development', 'Técnico em Desenvolvimento de Sistemas'),
    where: 'SENAI Cruzeiro',
    note: bi('Programming, databases, networking and web development. Capstone: the K4Math platform.', 'Programação, banco de dados, redes e desenvolvimento web. TCC: plataforma K4Math.'),
  },
  {
    when: bi('2026 · completed', '2026 · concluído'),
    what: 'IBM Data Analyst Professional Certificate',
    where: bi('IBM · Coursera — 9 courses', 'IBM · Coursera — 9 cursos'),
    note: bi('Python, SQL, Excel, Cognos and Looker Studio, closing with an end-to-end final project.', 'Python, SQL, Excel, Cognos e Looker Studio, fechando com um projeto final de ponta a ponta.'),
  },
];
