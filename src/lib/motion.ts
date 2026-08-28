import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Flip } from 'gsap/Flip';
import { SplitText } from 'gsap/SplitText';
import Lenis from 'lenis';

let registered = false;
export function ensureGsapPlugins() {
  if (registered) return;
  gsap.registerPlugin(ScrollTrigger, Flip, SplitText);
  registered = true;
}

export const REDUCED =
  typeof window !== 'undefined' && window.matchMedia
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false;

export { gsap, ScrollTrigger, Flip, SplitText, Lenis };

/** Shared registry so the scroll-velocity handler can speed up/slow down every mounted ticker. */
export interface TickerHandle {
  tl: gsap.core.Tween;
}
export const tickerRegistry = new Set<TickerHandle>();
