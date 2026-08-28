export type Locale = 'en' | 'pt';

export type LocalizedText = string | { en: string; pt: string };

export type ProjectStatus = 'live' | 'proto' | 'acad';

export type StackKey = 'ALL' | 'FULLSTACK' | 'DATA' | 'DB';

export interface ProjectMetric {
  v: LocalizedText;
  l: LocalizedText;
}

export interface Project {
  nome: LocalizedText;
  ano: string;
  destaque?: boolean;
  status: ProjectStatus;
  stacks: Exclude<StackKey, 'ALL'>[];
  desc: LocalizedText;
  tags: LocalizedText[];
  metrics?: ProjectMetric[];
  img?: string;
  motif?: 'curve' | 'nodes' | 'schema';
  href: string;
  cta: LocalizedText;
}

/** [key, name, issuer, filename] */
export type CertEntry = [string, string, string, string];

/** [key, name] */
export type BadgeEntry = [string, string];

export interface TimelineItem {
  when: LocalizedText;
  what: LocalizedText;
  where: LocalizedText;
  note: LocalizedText;
}

export interface AwardPanel {
  medal: '1' | '3' | 'visit' | 'presentation';
  kicker: LocalizedText;
  title: string;
  place?: LocalizedText;
  sub?: LocalizedText;
  ctx: LocalizedText;
  ctxHtml?: boolean;
  photos: string[];
  photoAlt: string;
}

export interface DetailedCertEntry {
  key: string;
  title: LocalizedText;
  issuer: string;
  year: string;
  desc: LocalizedText;
  tags: LocalizedText[];
}

export interface DetailedBadgeEntry {
  key: string;
  name: string;
  date: string;
  status: LocalizedText;
  link: string;
}
