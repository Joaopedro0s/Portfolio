import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap, REDUCED } from '../../lib/motion';
import { useLocale } from '../../i18n/LocaleContext';

interface BootProps {
  onDone: () => void;
}

/** Preloader — port of boot() from index.html. Plays once per Home mount. */
export default function Boot({ onDone }: BootProps) {
  const [visible, setVisible] = useState(true);
  const rootRef = useRef<HTMLDivElement>(null);
  const numRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const { ui } = useLocale();

  useGSAP(() => {
    if (REDUCED) {
      setVisible(false);
      onDone();
      return;
    }
    const num = numRef.current;
    const fill = fillRef.current;
    const el = rootRef.current;
    if (!num || !fill || !el) return;

    const counter = { v: 0 };
    gsap
      .timeline({
        onComplete: () => {
          setVisible(false);
          onDone();
        },
      })
      .to(
        counter,
        {
          v: 100,
          duration: 1.15,
          ease: 'power2.inOut',
          onUpdate: () => {
            num.textContent = String(Math.round(counter.v)).padStart(3, '0');
          },
        },
        0,
      )
      .to(fill, { scaleX: 1, duration: 1.15, ease: 'power2.inOut' }, 0)
      .to([num, labelRef.current], { y: -28, opacity: 0, duration: 0.5, ease: 'power3.in', stagger: 0.05 }, '+=.15')
      .to(el, { clipPath: 'inset(0 0 100% 0)', duration: 0.9, ease: 'expo.inOut' }, '-=.2');
  }, []);

  if (!visible) return null;

  return (
    <div className="boot" ref={rootRef} aria-hidden="true">
      <div className="boot__row">
        <div className="boot__num" ref={numRef}>
          000
        </div>
        <div
          className="boot__label mono mono--fog"
          ref={labelRef}
          dangerouslySetInnerHTML={{ __html: ui('boot.label') }}
        />
      </div>
      <div className="boot__track">
        <div className="boot__fill" ref={fillRef} />
      </div>
    </div>
  );
}
