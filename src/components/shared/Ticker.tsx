import { useRef, useState, type ReactNode } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap, REDUCED, tickerRegistry } from '../../lib/motion';

interface TickerProps {
  children: ReactNode;
  speed?: number;
  dir?: 1 | -1;
  className?: string;
  /** Re-measure/rebuild when this changes (e.g. after a locale switch changes text length). */
  watch?: unknown;
}

/** Infinite horizontal marquee — functional port of buildTickerBox()/buildTickers() from index.html.
 *  Instead of imperatively cloning DOM nodes, it renders enough copies of `children` via React state
 *  (computed the same way the original did: enough groups to cover 2x viewport + one) and drives the
 *  same wrap-modifier GSAP tween across them. */
export default function Ticker({ children, speed = 28, dir = -1, className = '', watch }: TickerProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const grpRef = useRef<HTMLDivElement>(null);
  const [copies, setCopies] = useState(2);

  useGSAP(
    () => {
      const grp = grpRef.current;
      const track = trackRef.current;
      if (!grp || !track) return;

      const gw = grp.getBoundingClientRect().width;
      if (!gw) return;

      const need = Math.max(2, Math.ceil((window.innerWidth * 2 + gw) / gw));
      if (need !== copies) {
        setCopies(need);
        return; // re-run after re-render with the right copy count
      }

      if (REDUCED) return;

      const wrap = gsap.utils.wrap(-gw, 0);
      gsap.set(track, { x: dir < 0 ? 0 : -gw });
      const tl = gsap.to(track, {
        x: `+=${dir * gw}`,
        duration: gw / speed,
        ease: 'none',
        repeat: -1,
        modifiers: { x: gsap.utils.unitize((x) => wrap(parseFloat(x))) },
      });
      const handle = { tl };
      tickerRegistry.add(handle);
      return () => {
        tickerRegistry.delete(handle);
      };
    },
    { scope: trackRef, dependencies: [copies, speed, dir, watch] },
  );

  return (
    <div className={`ticker ${className}`.trim()}>
      <div className="ticker__track" ref={trackRef}>
        {Array.from({ length: copies }).map((_, i) => (
          <div className="ticker__grp" ref={i === 0 ? grpRef : undefined} key={i}>
            {children}
          </div>
        ))}
      </div>
    </div>
  );
}
