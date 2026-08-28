import { useEffect, useRef } from 'react';

/** Ambient radial-gradient halo that follows the pointer. Port of the `.halo` + pointermove
 *  listener shared by index.html's pointer() and assets/theme.js's halo(). */
export default function Halo() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: PointerEvent) => {
      el.style.setProperty('--mx', (e.clientX / window.innerWidth) * 100 + '%');
      el.style.setProperty('--my', (e.clientY / window.innerHeight) * 100 + '%');
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, []);

  return <div className="halo" ref={ref} aria-hidden="true" />;
}
