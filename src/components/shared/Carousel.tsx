import { useState, type ReactNode } from 'react';

interface CarouselProps {
  slides: ReactNode[];
}

/** Shared carousel — port of the track/dots/prev-next JS repeated identically in
 *  projetoIntegrador.html and plataformasWEB.html. */
export default function Carousel({ slides }: CarouselProps) {
  const [i, setI] = useState(0);
  const total = slides.length;
  const go = (n: number) => setI(Math.max(0, Math.min(n, total - 1)));

  return (
    <div className="carousel reveal">
      <div className="carousel__wrap">
        <button
          type="button"
          className="carousel__nav carousel__nav--prev"
          onClick={() => go(i - 1)}
          disabled={i === 0}
          aria-label="Previous"
        >
          ←
        </button>
        <div className="carousel__track" style={{ transform: `translateX(-${i * 100}%)` }}>
          {slides.map((slide, idx) => (
            <div className="carousel__slide" key={idx}>
              {slide}
            </div>
          ))}
        </div>
        <button
          type="button"
          className="carousel__nav carousel__nav--next"
          onClick={() => go(i + 1)}
          disabled={i === total - 1}
          aria-label="Next"
        >
          →
        </button>
      </div>
      <div className="carousel__dots">
        {slides.map((_, idx) => (
          <button
            type="button"
            key={idx}
            className={`dot${idx === i ? ' is-active' : ''}`}
            onClick={() => go(idx)}
            aria-label={`Slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
