import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap, REDUCED } from '../../lib/motion';
import { useLocale } from '../../i18n/LocaleContext';

const STATS: { count: number; key: string }[] = [
  { count: 2, key: 'method.stat1' },
  { count: 28, key: 'method.stat2' },
  { count: 24, key: 'method.stat3' },
  { count: 3, key: 'method.stat4' },
];

/** Word-by-word manifesto reveal — port of buildManifesto()/reveals()'s manifesto scrub. */
function buildWords(container: HTMLElement) {
  const out: HTMLElement[] = [];
  const walk = (node: Node, hot: boolean) => {
    Array.from(node.childNodes).forEach((n) => {
      if (n.nodeType === 3) {
        const frag = document.createDocumentFragment();
        (n.textContent || '').split(/(\s+)/).forEach((tok) => {
          if (!tok) return;
          if (/^\s+$/.test(tok)) {
            frag.appendChild(document.createTextNode(tok));
            return;
          }
          const w = document.createElement('w');
          if (hot) w.className = 'hot';
          w.textContent = tok;
          frag.appendChild(w);
          out.push(w);
        });
        node.replaceChild(frag, n);
      } else if (n.nodeType === 1) {
        walk(n, hot || (n as Element).tagName === 'EM');
      }
    });
  };
  walk(container, false);
  return out;
}

export default function Method() {
  const { ui } = useLocale();
  const manifRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    const el = manifRef.current;
    if (!el) return;
    const words = buildWords(el);
    if (!words.length) return;

    if (REDUCED) {
      gsap.set(words, { opacity: 1 });
      return;
    }

    const tween = gsap.to(words, {
      opacity: 1,
      stagger: 0.08,
      ease: 'none',
      scrollTrigger: { trigger: el, start: 'top 78%', end: 'bottom 62%', scrub: 0.4 },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ui('method.manifesto')]);

  useGSAP(() => {
    if (REDUCED) return;
    const tweens = Array.from(document.querySelectorAll<HTMLElement>('[data-count]')).map((el) => {
      const target = parseFloat(el.dataset.count || '0');
      const o = { v: 0 };
      return gsap.to(o, {
        v: target,
        duration: 1.6,
        ease: 'power2.out',
        snap: { v: 1 },
        onUpdate: () => {
          el.textContent = String(Math.round(o.v));
        },
        scrollTrigger: { trigger: el, start: 'top 88%', once: true },
      });
    });
    return () => tweens.forEach((t) => t.scrollTrigger?.kill());
  }, []);

  return (
    <section className="sec wrap" id="method" data-sec="method">
      <div className="mono fade" style={{ marginBottom: 'clamp(2rem,5vw,3.5rem)' }}>
        {ui('method.kicker')}
      </div>

      <p className="manif" ref={manifRef} dangerouslySetInnerHTML={{ __html: ui('method.manifesto') }} />

      <div className="stats" data-stats>
        {STATS.map((s) => (
          <div className="stat" key={s.key}>
            <div className="stat__n" data-count={s.count}>
              0
            </div>
            <div className="stat__l mono mono--fog">{ui(s.key)}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
