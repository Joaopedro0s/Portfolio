import { useEffect, useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap, ScrollTrigger, Lenis, REDUCED, ensureGsapPlugins, tickerRegistry } from '../lib/motion';
import { useLocale } from '../i18n/LocaleContext';

import Boot from '../components/layout/Boot';
import Halo from '../components/layout/Halo';
import Cursor from '../components/layout/Cursor';
import Nav from '../components/layout/Nav';
import ProgressBar from '../components/layout/ProgressBar';
import BackToTop from '../components/layout/BackToTop';

import Hero from '../components/home/Hero';
import Niches from '../components/home/Niches';
import Method from '../components/home/Method';
import Work from '../components/home/Work';
import Awards from '../components/home/Awards';
import Timeline from '../components/home/Timeline';
import Credentials from '../components/home/Credentials';
import Contact from '../components/home/Contact';

ensureGsapPlugins();

/** Home — assembles every section and owns the page-level motion engine: Lenis smooth scroll,
 *  the generic .up/.fade reveal pass, the scroll-velocity ticker speed boost, and the preloader
 *  gate. Direct functional port of the "3. MOTOR" block at the bottom of the original index.html. */
export default function Home() {
  const { locale } = useLocale();
  const [booted, setBooted] = useState(REDUCED);
  const lenisRef = useRef<InstanceType<typeof Lenis> | null>(null);

  // Lenis smooth scroll, bound to the GSAP ticker — Home-only, matches the original.
  useEffect(() => {
    if (REDUCED) return;
    const lenis = new Lenis({ lerp: 0.085, wheelMultiplier: 1, smoothWheel: true, anchors: { offset: -80 } });
    lenisRef.current = lenis;
    lenis.on('scroll', ScrollTrigger.update);
    const tick = (t: number) => lenis.raf(t * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    const goTo = (target: string) => lenis.scrollTo(target, { offset: -70 });
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element)?.closest?.('a[href^="#"]') as HTMLAnchorElement | null;
      if (!a) return;
      const id = a.getAttribute('href');
      if (id && id.length > 1 && document.querySelector(id)) {
        e.preventDefault();
        goTo(id);
      }
    };
    document.addEventListener('click', onClick);

    return () => {
      document.removeEventListener('click', onClick);
      gsap.ticker.remove(tick);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Generic .up / .fade reveal pass — everything not individually animated by a section component.
  useGSAP(() => {
    if (REDUCED) {
      gsap.set('.up', { y: 0, opacity: 1 });
      gsap.set('.fade', { opacity: 1 });
      return;
    }
    const tweens: gsap.core.Tween[] = [];
    document.querySelectorAll<HTMLElement>('.sec .up').forEach((el) => {
      tweens.push(
        gsap.to(el, { y: 0, opacity: 1, duration: 1, ease: 'expo.out', scrollTrigger: { trigger: el, start: 'top 88%', once: true } }),
      );
    });
    document.querySelectorAll<HTMLElement>('.sec .fade').forEach((el) => {
      tweens.push(
        gsap.to(el, { opacity: 1, duration: 0.9, ease: 'power2.out', scrollTrigger: { trigger: el, start: 'top 92%', once: true } }),
      );
    });
    return () => tweens.forEach((tw) => tw.scrollTrigger?.kill());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locale, booted]);

  // Scroll-velocity → ticker speed boost, port of velocity() from index.html.
  useGSAP(() => {
    if (REDUCED) return;
    let idle: ReturnType<typeof setTimeout>;
    const trigger = ScrollTrigger.create({
      onUpdate: (self) => {
        const v = self.getVelocity();
        const boost = gsap.utils.clamp(1, 5, 1 + Math.abs(v) / 700);
        const sign = v > 0 ? 1 : -1;
        tickerRegistry.forEach((t) => t.tl.timeScale(boost * sign));
        clearTimeout(idle);
        idle = setTimeout(() => tickerRegistry.forEach((t) => gsap.to(t.tl, { timeScale: 1, duration: 0.9, ease: 'power2.out' })), 220);
      },
    });
    return () => {
      clearTimeout(idle);
      trigger.kill();
    };
  }, []);

  // Refresh ScrollTrigger after locale switches (text length changes section heights) and on resize.
  useEffect(() => {
    const t = setTimeout(() => ScrollTrigger.refresh(), 60);
    return () => clearTimeout(t);
  }, [locale]);

  useEffect(() => {
    let rt: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(rt);
      rt = setTimeout(() => ScrollTrigger.refresh(), 220);
    };
    window.addEventListener('resize', onResize);
    return () => {
      clearTimeout(rt);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <div className="subpage-home">
      {!REDUCED && <Boot onDone={() => setBooted(true)} />}
      <Halo />
      <Cursor />
      <ProgressBar />
      <Nav />

      <main>
        <Hero play={booted} />
        <Niches />
        <Method />
        <Work />
        <Awards lenis={lenisRef.current} />
        <Timeline />
        <Credentials />
        <Contact />
      </main>

      <BackToTop onClick={() => lenisRef.current?.scrollTo('#home', { offset: -70 })} threshold={800} />
    </div>
  );
}
