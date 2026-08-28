import type { DetailedBadgeEntry } from '../types';
import { bi } from '../i18n/dictionary';

const APPROVED = bi('Assessment passed', 'Avaliação aprovada');
const CERTIFIED = bi('Certified', 'Certificado');

/** Direct 1:1 port of the 24 Microsoft Learn badge cards from badges.html. */
export const BADGES_DETAILED: DetailedBadgeEntry[] = [
  { key: 'MCP', name: 'Introdução ao SERVIDOR MCP', date: '23/04/2026', status: APPROVED, link: 'https://learn.microsoft.com/api/achievements/share/pt-br/JorginGamesPrayGamesPray-4528/7BA4SDNZ?sharingId=1CFF8B701923E29B' },
  { key: 'GCA', name: 'Acelerar o desenvolvimento com o GitHub Copilot Cloud Agent', date: '23/04/2026', status: CERTIFIED, link: 'https://learn.microsoft.com/api/achievements/share/pt-br/JorginGamesPrayGamesPray-4528/2JZBLDUV?sharingId=1CFF8B701923E29B' },
  { key: 'AGT', name: 'Criar aplicativos com o modo agente do GitHub Copilot', date: '23/04/2026', status: APPROVED, link: 'https://learn.microsoft.com/api/achievements/share/pt-br/JorginGamesPrayGamesPray-4528/J3D9N6ET?sharingId=1CFF8B701923E29B' },
  { key: 'IAR', name: 'IA responsável com GitHub Copilot', date: '23/04/2026', status: APPROVED, link: 'https://learn.microsoft.com/api/achievements/share/pt-br/JorginGamesPrayGamesPray-4528/37UR2N3H?sharingId=1CFF8B701923E29B' },
  { key: 'PRM', name: 'Introdução à engenharia de prompts com o GitHub Copilot', date: '15/04/2026', status: APPROVED, link: 'https://learn.microsoft.com/api/achievements/share/pt-br/JorginGamesPrayGamesPray-4528/Q5VBHSME?sharingId=1CFF8B701923E29B' },
  { key: 'COP', name: 'Introdução ao GitHub Copilot', date: '15/04/2026', status: APPROVED, link: 'https://learn.microsoft.com/api/achievements/share/pt-br/JorginGamesPrayGamesPray-4528/CYG8MTN9?sharingId=1CFF8B701923E29B' },
  { key: 'SEG', name: 'Manter um repositório seguro com as melhores práticas do GitHub', date: '15/04/2026', status: APPROVED, link: 'https://learn.microsoft.com/api/achievements/share/pt-br/JorginGamesPrayGamesPray-4528/NM8AMJCF?sharingId=1CFF8B701923E29B' },
  { key: 'INS', name: 'Gerenciar um programa InnerSource usando o GitHub', date: '15/04/2026', status: APPROVED, link: 'https://learn.microsoft.com/api/achievements/share/pt-br/JorginGamesPrayGamesPray-4528/YPF2ENKR?sharingId=1CFF8B701923E29B' },
  { key: 'OSS', name: 'Contribuir para um projeto de software livre no GitHub', date: '15/04/2026', status: APPROVED, link: 'https://learn.microsoft.com/api/achievements/share/pt-br/JorginGamesPrayGamesPray-4528/WVHR2E5N?sharingId=1CFF8B701923E29B' },
  { key: 'PRO', name: 'Introdução aos produtos do GitHub', date: '14/04/2026', status: APPROVED, link: 'https://learn.microsoft.com/api/achievements/share/pt-br/JorginGamesPrayGamesPray-4528/CYL6SQV9?sharingId=1CFF8B701923E29B' },
  { key: 'GH', name: 'Introdução ao GitHub', date: '14/04/2026', status: APPROVED, link: 'https://learn.microsoft.com/api/achievements/share/pt-br/JorginGamesPrayGamesPray-4528/UA69LYM3?sharingId=1CFF8B701923E29B' },
  { key: 'GIT', name: 'Introdução ao Git', date: '09/04/2026', status: APPROVED, link: 'https://learn.microsoft.com/api/achievements/share/pt-br/JorginGamesPrayGamesPray-4528/HZ9VNDY8?sharingId=1CFF8B701923E29Bs' },
  { key: 'EXT', name: 'Introdução à extração de informações alimentadas por IA no Azure', date: '10/10/2025', status: APPROVED, link: 'https://learn.microsoft.com/api/achievements/share/pt-br/JorginGamesPrayGamesPray-4528/HZNUFRB8?sharingId=1CFF8B701923E29B' },
  { key: 'CEI', name: 'Introdução aos conceitos de extração de informações alimentados por IA', date: '10/10/2025', status: APPROVED, link: 'https://learn.microsoft.com/api/achievements/share/pt-br/JorginGamesPrayGamesPray-4528/KCJPDVKB?sharingId=1CFF8B701923E29B' },
  { key: 'VIS', name: 'Introdução à pesquisa visual computacional no Azure', date: '10/10/2025', status: APPROVED, link: 'https://learn.microsoft.com/api/achievements/share/pt-br/JorginGamesPrayGamesPray-4528/VTEZQHXM?sharingId=1CFF8B701923E29B' },
  { key: 'CV', name: 'Introdução aos conceitos de computer vision', date: '10/10/2025', status: APPROVED, link: 'https://learn.microsoft.com/api/achievements/share/pt-br/JorginGamesPrayGamesPray-4528/WVXHF4GN?sharingId=1CFF8B701923E29B' },
  { key: 'SPE', name: 'Introdução à fala no Azure', date: '10/10/2025', status: APPROVED, link: 'https://learn.microsoft.com/api/achievements/share/pt-br/JorginGamesPrayGamesPray-4528/82F3NN3W?sharingId=1CFF8B701923E29B' },
  { key: 'NLP', name: 'Introdução ao processamento de linguagem natural no Azure', date: '10/10/2025', status: APPROVED, link: 'https://learn.microsoft.com/api/achievements/share/pt-br/JorginGamesPrayGamesPray-4528/Q542Q2YE?sharingId=1CFF8B701923E29B' },
  { key: 'PLN', name: 'Introdução aos conceitos de processamento de linguagem natural', date: '10/10/2025', status: APPROVED, link: 'https://learn.microsoft.com/api/achievements/share/pt-br/JorginGamesPrayGamesPray-4528/CY3LCR59?sharingId=1CFF8B701923E29B' },
  { key: 'GEN', name: 'Introdução à IA gerativa no Azure', date: '10/10/2025', status: APPROVED, link: 'https://learn.microsoft.com/api/achievements/share/pt-br/JorginGamesPrayGamesPray-4528/NMYHWW3F?sharingId=1CFF8B701923E29B' },
  { key: 'AGE', name: 'Introdução à IA gerativa e aos agentes', date: '10/10/2025', status: APPROVED, link: 'https://learn.microsoft.com/api/achievements/share/pt-br/JorginGamesPrayGamesPray-4528/7BVYAK8Z?sharingId=1CFF8B701923E29B' },
  { key: 'ML', name: 'Introdução ao aprendizado de máquina no Azure', date: '29/08/2025', status: APPROVED, link: 'https://learn.microsoft.com/api/achievements/share/pt-br/JorginGamesPrayGamesPray-4528/A4FZKK27?sharingId=1CFF8B701923E29B' },
  { key: 'MCL', name: 'Introdução aos conceitos de machine learning', date: '29/08/2025', status: APPROVED, link: 'https://learn.microsoft.com/api/achievements/share/pt-br/JorginGamesPrayGamesPray-4528/2DRMDP6V?sharingId=1CFF8B701923E29B' },
  { key: 'IA', name: 'Introdução aos conceitos de IA', date: '29/08/2025', status: CERTIFIED, link: 'https://learn.microsoft.com/api/achievements/share/pt-br/JorginGamesPrayGamesPray-4528/BCEJ6HWD?sharingId=1CFF8B701923E29B' },
];
