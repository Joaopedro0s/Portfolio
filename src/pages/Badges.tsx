import { useState } from 'react';
import { useLocale } from '../i18n/LocaleContext';
import { bi } from '../i18n/dictionary';
import { useReveal } from '../lib/useReveal';
import Halo from '../components/layout/Halo';
import SubNav from '../components/layout/SubNav';
import SubFooter from '../components/layout/SubFooter';
import BackToTop from '../components/layout/BackToTop';
import { BADGES_DETAILED } from '../data/badgesDetailed';

const T = {
  eyebrow: bi('Microsoft Learn · GitHub', 'Microsoft Learn · GitHub'),
  title: bi('Badges & Achievements', 'Badges & Conquistas'),
  lede: bi(
    'Seals, badges and recognitions that represent my growth and dedication in technology.',
    'Selos, distintivos e reconhecimentos que representam minha evolução e dedicação na área da tecnologia.',
  ),
  navTag: bi('Badges & Achievements', 'Badges & Conquistas'),
  completedOn: bi('Completed on', 'Concluído em'),
  statBadges: bi('Badges Earned', 'Badges Conquistadas'),
  statPlatform: bi('Main Platform', 'Plataforma Principal'),
  statAi: bi('AI & Machine Learning', 'IA & Machine Learning'),
  statLearn: bi('Learn Platform', 'Learn Platform'),
  verifyLink: bi('Verification link:', 'Link de verificação:'),
  clickVerify: bi('Click to verify the badge', 'Clique para verificar a badge'),
};

export default function Badges() {
  const { t } = useLocale();
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  useReveal();

  const open = openIdx !== null ? BADGES_DETAILED[openIdx] : null;

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

        <div className="wrap">
          <div className="grid-badges">
            {BADGES_DETAILED.map((b, i) => (
              <div className="badge-card reveal row" key={b.key} onClick={() => setOpenIdx(i)}>
                <div className="badge-card__icon">{b.key}</div>
                <div style={{ flex: 1 }}>
                  <div className="badge-card__title">{b.name}</div>
                  <div className="badge-card__date">
                    {t(T.completedOn)} {b.date}
                  </div>
                  <div className="badge-card__status">{t(b.status)}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid-4 stat-tiles reveal">
            <div className="pcard" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1.7rem', fontWeight: 700, color: 'var(--signal-ink)' }}>24</div>
              <div style={{ fontSize: '.72rem', color: 'var(--fog)' }}>{t(T.statBadges)}</div>
            </div>
            <div className="pcard" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1.7rem', fontWeight: 700, color: 'var(--signal-ink)' }}>GitHub</div>
              <div style={{ fontSize: '.72rem', color: 'var(--fog)' }}>{t(T.statPlatform)}</div>
            </div>
            <div className="pcard" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1.7rem', fontWeight: 700, color: 'var(--signal-ink)' }}>Azure</div>
              <div style={{ fontSize: '.72rem', color: 'var(--fog)' }}>{t(T.statAi)}</div>
            </div>
            <div className="pcard" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1.7rem', fontWeight: 700, color: 'var(--signal-ink)' }}>Microsoft</div>
              <div style={{ fontSize: '.72rem', color: 'var(--fog)' }}>{t(T.statLearn)}</div>
            </div>
          </div>
        </div>
      </main>

      <div className={`badge-modal${open ? ' is-open' : ''}`} onClick={() => setOpenIdx(null)}>
        {open && (
          <div className="badge-modal__box" onClick={(e) => e.stopPropagation()}>
            <div className="row row--between">
              <h3 className="badge-modal__title">{open.name}</h3>
              <button className="badge-modal__close" onClick={() => setOpenIdx(null)}>
                &times;
              </button>
            </div>
            <div className="badge-modal__date">
              {t(T.completedOn)} {open.date}
            </div>
            <div className="badge-modal__linkbox">
              <p>{t(T.verifyLink)}</p>
              <a href={open.link} target="_blank" rel="noopener">
                {open.link}
              </a>
            </div>
            <div style={{ marginTop: '1rem' }}>
              <span className="badge-card__status">{t(open.status)}</span>
            </div>
          </div>
        )}
      </div>

      <SubFooter />
      <BackToTop />
    </div>
  );
}
