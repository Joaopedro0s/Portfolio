import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap, SplitText, REDUCED } from '../../lib/motion';
import { useLocale } from '../../i18n/LocaleContext';
import Ticker from '../shared/Ticker';

const SKILLS = ['Python', 'JavaScript', 'PHP', 'SQL Server', 'MySQL', 'Power BI', 'Looker Studio', 'n8n', 'Supabase', 'Git'];

interface HeroProps {
  play: boolean;
}

/** Port of the #home hero section + heroIn() entrance timeline from index.html. */
export default function Hero({ play }: HeroProps) {
  const { locale, ui } = useLocale();
  const nameRef = useRef<HTMLHeadingElement>(null);
  const ledeRef = useRef<HTMLParagraphElement>(null);
  const actsRef = useRef<HTMLDivElement>(null);
  const tickerWrapRef = useRef<HTMLDivElement>(null);
  const topRef = useRef<HTMLDivElement>(null);

  const resumeHref = locale === 'pt' ? '/Curriculo_Joao_Pedro_PT.pdf' : '/Curriculo_Joao_Pedro_EN.pdf';

  useGSAP(() => {
    if (!play) return;
    if (REDUCED) {
      gsap.set('.hero .up,.hero .fade', { clearProps: 'all' });
      return;
    }
    const name = nameRef.current;
    if (!name) return;
    const split = new SplitText(name, { type: 'chars', charsClass: 'ch' });
    const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });
    tl.from(split.chars, { yPercent: 118, duration: 1.15, stagger: { each: 0.022, from: 'start' } })
      .to(topRef.current?.querySelectorAll('.fade') ?? [], { opacity: 1, duration: 0.7 }, 0.15)
      .to([ledeRef.current, actsRef.current], { y: 0, opacity: 1, duration: 0.9, stagger: 0.08 }, '-=.75')
      .from(tickerWrapRef.current, { opacity: 0, y: 24, duration: 0.9 }, '-=.6');

    return () => {
      split.revert();
    };
  }, [play]);

  return (
    <section className="hero wrap" id="home" data-sec="hero">
      <div className="hero__top" ref={topRef}>
        <span className="mono fade">{ui('hero.loc')}</span>
        <span className="mono fade">{ui('hero.tag')}</span>
      </div>

      <h1 className="hero__name" id="heroName" ref={nameRef}>
        <span className="ln">
          <em>João Pedro</em>
        </span>
        <span className="ln">
          <em>Carvalho</em>
        </span>
      </h1>

      <div className="hero__grid">
        <p className="hero__lede up" ref={ledeRef} dangerouslySetInnerHTML={{ __html: ui('hero.lede') }} />
        <div className="hero__acts up" ref={actsRef}>
          <a href="#work" className="btn btn--solid btn--down">
            <span>{ui('hero.ctaWork')}</span> <i>↓</i>
          </a>
          <a href={resumeHref} download className="btn">
            <span>{ui('hero.ctaCv')}</span> <i>↗</i>
          </a>
        </div>
      </div>

      <div ref={tickerWrapRef}>
        <Ticker speed={34} dir={-1}>
          {SKILLS.map((s, i) => (
            <span key={s}>
              <span className="ticker__item">{s}</span>
              {i < SKILLS.length && <span className="ticker__item ticker__sep">×</span>}
            </span>
          ))}
        </Ticker>
      </div>
    </section>
  );
}
