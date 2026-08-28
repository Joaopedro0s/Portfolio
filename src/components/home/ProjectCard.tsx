import { Link } from 'react-router-dom';
import type { Project } from '../../types';
import { useLocale } from '../../i18n/LocaleContext';
import { STACK_LABELS, STATUS } from '../../i18n/dictionary';
import MotifSVG from './MotifSVG';

interface ProjectCardProps {
  project: Project;
  index: number;
}

/** Port of cardHTML() from index.html. */
export default function ProjectCard({ project: p, index: i }: ProjectCardProps) {
  const { t } = useLocale();
  const stackLabel = p.stacks.map((s) => t(STACK_LABELS[s])).join(' · ');
  const cta = t(p.cta);
  const nome = t(p.nome);

  const linkProps = { className: 'card__link', 'aria-label': `${nome} — ${cta}` };
  let link: React.ReactNode;
  if (/^https?:/.test(p.href)) {
    link = <a {...linkProps} href={p.href} target="_blank" rel="noopener" />;
  } else if (p.href.startsWith('/#')) {
    link = <a {...linkProps} href={p.href.slice(1)} />;
  } else {
    link = <Link {...linkProps} to={p.href} />;
  }

  return (
    <article className={`card${p.destaque ? ' is-wide' : ''}`} data-stacks={p.stacks.join('|')}>
      <div className="card__media">
        {p.img ? <img src={p.img} alt={nome} loading="lazy" /> : <MotifSVG kind={p.motif ?? 'nodes'} />}
        <span className="card__idx">{String(i + 1).padStart(2, '0')}</span>
        <span className="card__status" data-s={p.status}>
          <i></i>
          {t(STATUS[p.status])}
        </span>
        <div className="card__mask" />
      </div>
      <div className="card__body">
        <div className="card__kicker">
          <span className="mono mono--fog">{stackLabel}</span>
          <span className="mono">{p.ano}</span>
        </div>
        <h3 className="card__title">{nome}</h3>
        <p className="card__desc" dangerouslySetInnerHTML={{ __html: t(p.desc) }} />
        {p.metrics && p.metrics.length > 0 && (
          <div className="card__metrics">
            {p.metrics.map((m, mi) => (
              <div className="card__metric" key={mi}>
                <b>{t(m.v)}</b>
                <span>{t(m.l)}</span>
              </div>
            ))}
          </div>
        )}
        <div className="card__foot">
          <div className="tags">
            {p.tags.map((tag, ti) => (
              <span className="tag" key={ti}>
                {t(tag)}
              </span>
            ))}
          </div>
          <span className="card__go">
            {cta} <i>↗</i>
          </span>
        </div>
      </div>
      {link}
    </article>
  );
}
