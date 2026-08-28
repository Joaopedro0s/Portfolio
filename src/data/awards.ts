import type { AwardPanel } from '../types';
import { bi } from '../i18n/dictionary';

/** Direct 1:1 port of the award/field-work panels from the original index.html markup. */
export const AWARDS: AwardPanel[] = [
  {
    medal: '1',
    kicker: bi('Hackathon', 'Hackathon'),
    title: 'Hackathon API Edition',
    place: bi('1st place · SENAI Cruzeiro', '1º lugar · SENAI Cruzeiro'),
    ctx: bi('A development marathon focused on API integration and shipping working software within the deadline. Overall first place.', 'Maratona de desenvolvimento com foco em integração de APIs e entrega de software funcionando dentro do prazo. Primeiro lugar geral.'),
    photos: ['/fotos/hackathon-api/foto1.jpg', '/fotos/hackathon-api/foto2.jpg', '/fotos/hackathon-api/foto3.jpg'],
    photoAlt: 'Hackathon API Edition',
  },
  {
    medal: '3',
    kicker: bi('Hackathon · 2026', 'Hackathon · 2026'),
    title: 'Science & Business',
    place: bi('3rd place · PIT São José dos Campos', '3º lugar · PIT São José dos Campos'),
    ctx: bi('A credit-risk challenge with real data. Our team delivered the <b style="color:var(--chalk);font-weight:600">First Payment Default</b> model listed above in Work — ROC-AUC 0.796 in 48 hours.',
            'Desafio de risco de crédito com dados reais. Nosso time entregou o modelo de <b style="color:var(--chalk);font-weight:600">First Payment Default</b> que está listado ali no Trabalho — ROC-AUC 0,796 em 48 horas.'),
    ctxHtml: true,
    photos: ['/fotos/hackathon-sb/foto1.jpg', '/fotos/hackathon-sb/foto2.jpg', '/fotos/hackathon-sb/foto3.jpg'],
    photoAlt: 'Hackathon Science & Business',
  },
  {
    medal: 'visit',
    kicker: bi('Technical visit', 'Visita técnica'),
    title: 'PIT — Parque Tecnológico',
    sub: 'São José dos Campos',
    ctx: bi('Innovation hub of the Paraíba Valley, home of Science & Business.', 'Polo de inovação do Vale do Paraíba, sede do Science & Business.'),
    photos: ['/fotos/pit/foto1.jpg', '/fotos/pit/foto2.jpg', '/fotos/pit/foto3.jpg'],
    photoAlt: 'PIT',
  },
  {
    medal: 'visit',
    kicker: bi('Technical visit', 'Visita técnica'),
    title: 'FEIMEC',
    sub: 'Osasco — SP',
    ctx: bi('The largest manufacturing and industrial technology trade fair in Latin America.', 'Maior feira de manufatura e tecnologia industrial da América Latina.'),
    photos: ['/fotos/feimec/foto1.jpg', '/fotos/feimec/foto2.jpg', '/fotos/feimec/foto3.jpg'],
    photoAlt: 'FEIMEC',
  },
  {
    medal: 'presentation',
    kicker: bi('Presentation', 'Apresentação'),
    title: 'UniSENAI',
    place: bi('University extension project · Osasco', 'Projeto de extensão · Osasco'),
    ctx: bi('Defense of the university extension project before a panel and audience.', 'Defesa do projeto de extensão universitária diante de banca e público.'),
    photos: ['/fotos/unisenai/foto1.jpg', '/fotos/unisenai/foto2.jpg', '/fotos/unisenai/foto3.jpg'],
    photoAlt: 'UniSENAI',
  },
];
