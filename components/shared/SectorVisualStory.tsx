'use client';

import { useEffect, useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from '@/components/shared/LocalizedLink';
import { cn } from '@/lib/utils';

export type SectorVisualSlide = {
  src: string;
  alt: string;
  caption?: string;
};

type StoryLabels = {
  problem?: string;
  solution?: string;
  result?: string;
};

export interface SectorVisualStoryProps {
  title: string;
  sectorLabel: string;
  slides: SectorVisualSlide[];
  problem: string;
  solution: string;
  result: string;
  ctaLabel?: string;
  ctaHref?: string;
  autoplayMs?: number;
  labels?: StoryLabels;
  className?: string;
}

const DEFAULT_AUTOPLAY_MS = 6000;

const SectorVisualStory = ({
  title,
  sectorLabel,
  slides,
  problem,
  solution,
  result,
  ctaLabel,
  ctaHref,
  autoplayMs = DEFAULT_AUTOPLAY_MS,
  labels,
  className,
}: SectorVisualStoryProps) => {
  const safeSlides = useMemo(() => slides.filter((slide) => slide?.src && slide?.alt), [slides]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (safeSlides.length <= 1 || autoplayMs <= 0) return;

    const interval = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % safeSlides.length);
    }, autoplayMs);

    return () => window.clearInterval(interval);
  }, [autoplayMs, safeSlides.length]);

  if (!safeSlides.length) return null;

  const normalizedActiveIndex = safeSlides.length ? ((activeIndex % safeSlides.length) + safeSlides.length) % safeSlides.length : 0;

  const goTo = (index: number) => {
    const total = safeSlides.length;
    if (!total) return;
    setActiveIndex((index + total) % total);
  };

  const prev = () => goTo(normalizedActiveIndex - 1);
  const next = () => goTo(normalizedActiveIndex + 1);

  return (
    <section className={cn('space-y-6', className)}>
      <div className="w-full">
        <div className="mb-3 flex items-center justify-between gap-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-primary">{sectorLabel}</p>
            <p className="text-xs text-muted-foreground">
              {String(normalizedActiveIndex + 1).padStart(2, '0')}/{String(safeSlides.length).padStart(2, '0')}
            </p>
          </div>

        <div className="relative w-full overflow-hidden rounded-2xl border border-border bg-card shadow-sm aspect-[16/10]">
          {safeSlides.map((slide, index) => {
            const isActive = index === normalizedActiveIndex;
            return (
              <div
                key={`${slide.src}-${index}`}
                className={cn(
                  'absolute inset-0 transition-all duration-500 ease-out',
                  isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-[1.02] pointer-events-none'
                )}
                aria-hidden={!isActive}
              >
                <img
                  src={encodeURI(slide.src)}
                  alt={slide.alt}
                  loading={isActive ? 'eager' : 'lazy'}
                  className="h-full w-full object-cover"
                />
              </div>
            );
          })}

          {safeSlides.length > 1 && (
            <>
              <button
                type="button"
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-border/70 bg-background/85 p-2 text-foreground shadow-sm transition hover:bg-background"
                aria-label="Slide anterior"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-border/70 bg-background/85 p-2 text-foreground shadow-sm transition hover:bg-background"
                aria-label="Siguiente slide"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </>
          )}
        </div>

        {safeSlides.length > 1 && (
          <div className="mt-4 flex items-center justify-center gap-2" role="tablist" aria-label="Indicadores del carrusel">
            {safeSlides.map((slide, index) => {
              const isActive = index === normalizedActiveIndex;
              return (
                <button
                  key={`dot-${slide.src}-${index}`}
                  type="button"
                  onClick={() => goTo(index)}
                  role="tab"
                  aria-selected={isActive}
                  aria-label={`Ir al slide ${index + 1}`}
                  className={cn(
                    'h-2.5 rounded-full transition-all',
                    isActive ? 'w-8 bg-primary' : 'w-2.5 bg-muted-foreground/35 hover:bg-muted-foreground/60'
                  )}
                />
              );
            })}
          </div>
        )}
      </div>

      <div className="rounded-2xl border border-border bg-card/40 p-6 lg:p-7">
        <h3 className="text-2xl font-bold leading-tight text-foreground">{title}</h3>

        <div className="mt-6 space-y-5 text-sm leading-relaxed text-muted-foreground md:text-base">
          <div>
            <p className="mb-1 font-semibold text-foreground">{labels?.problem ?? 'Problema'}</p>
            <p>{problem}</p>
          </div>

          <div>
            <p className="mb-1 font-semibold text-foreground">{labels?.solution ?? 'Solucion'}</p>
            <p>{solution}</p>
          </div>

          <div>
            <p className="mb-1 font-semibold text-foreground">{labels?.result ?? 'Resultado esperado'}</p>
            <p>{result}</p>
          </div>
        </div>

        {ctaLabel && ctaHref && (
          <div className="mt-7">
            <Link
              href={ctaHref}
              className="inline-flex items-center rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition hover:shadow-neon"
            >
              {ctaLabel}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default SectorVisualStory;
