import { useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { cn } from '@/lib/utils';

// SVG Logos for brands
const Logos = {
  Google: () => (
    <svg viewBox="0 0 24 24" className="h-8 w-auto fill-current">
      <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z" />
    </svg>
  ),
  Slack: () => (
    <svg viewBox="0 0 24 24" className="h-8 w-auto fill-current">
      <path d="M5.042 15.123a2.52 2.52 0 0 1-2.52 2.52 2.52 2.52 0 0 1-2.52-2.52 2.52 2.52 0 0 1 2.52-2.52h2.52v2.52zm1.26 0a2.52 2.52 0 0 1 2.52-2.52 2.52 2.52 0 0 1 2.52 2.52v6.301a2.52 2.52 0 0 1-2.52 2.52 2.52 2.52 0 0 1-2.52-2.52v-6.3zM15.123 6.302a2.52 2.52 0 0 1 2.52-2.52 2.52 2.52 0 0 1 2.52 2.52 2.52 2.52 0 0 1-2.52 2.52h-2.52V6.302zm-1.26 0a2.52 2.52 0 0 1-2.52 2.52 2.52 2.52 0 0 1-2.52-2.52V2.52A2.52 2.52 0 0 1 13.862 0a2.52 2.52 0 0 1 2.52 2.52v3.782zM6.302 8.863a2.52 2.52 0 0 1-2.52 2.52 2.52 2.52 0 0 1-2.52-2.52 2.52 2.52 0 0 1 2.52-2.52h2.52v2.52zm0 1.26a2.52 2.52 0 0 1 2.52 2.52 2.52 2.52 0 0 1-2.52 2.52H2.52a2.52 2.52 0 0 1-2.52-2.52 2.52 2.52 0 0 1 2.52-2.52h3.782zm11.341 8.822a2.52 2.52 0 0 1 2.52-2.52 2.52 2.52 0 0 1 2.52 2.52 2.52 2.52 0 0 1-2.52 2.52h-2.52v-2.52zm-1.26 0a2.52 2.52 0 0 1-2.52-2.52 2.52 2.52 0 0 1-2.52-2.52h3.782a2.52 2.52 0 0 1 2.52 2.52 2.52 2.52 0 0 1-2.52 2.52h-1.262z" />
    </svg>
  ),
  Figma: () => (
    <svg viewBox="0 0 38 57" className="h-8 w-auto fill-current">
      <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" />
      <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" />
      <path d="M0 28.5A9.5 9.5 0 0 1 9.5 19H19v19H9.5A9.5 9.5 0 0 1 0 28.5z" />
      <path d="M0 9.5A9.5 9.5 0 0 1 9.5 0H19v19H9.5A9.5 9.5 0 0 1 0 9.5z" />
      <path d="M19 0h9.5A9.5 9.5 0 0 1 38 9.5 9.5 9.5 0 0 1 28.5 19H19V0z" />
    </svg>
  ),
  Sketch: () => (
    <svg viewBox="0 0 24 24" className="h-8 w-auto fill-current">
      <path d="M11.99 1.05L.55 6.64l3.08 6.55L11.99 22.95l8.36-9.76 3.08-6.55L11.99 1.05zM3.46 6.88l8.53-4.18 8.53 4.18-1.54 3.28H5l-1.54-3.28zm10.5 4.13l-1.97 7.7-3.95-7.7h5.92zm1.09-1.28l1.79-3.8 3.56 3.8h-5.35zm-6.1-1.28h-5.35l3.56-3.8 1.79 3.8zm-1.09 1.28l-3.95 7.7-1.97-7.7h5.92z" />
    </svg>
  ),
  Envato: () => (
    <svg viewBox="0 0 24 24" className="h-8 w-auto fill-current">
      <path d="M18.665 17.58c-1.854 2.87-4.726 4.128-6.626 4.128-5.378 0-8.23-4.04-8.23-7.51 0-5.83 4.582-9.61 9.227-12.2.53-.294.622.395.215.72C9.563 5.375 6.36 8.358 6.36 12.02c0 3.167 2.458 5.485 5.56 5.485 2.148 0 4.168-1.354 5.35-3.085.61-1.077 1.082-2.316 1.082-3.834 0-4.075-2.607-7.143-2.607-7.143-.275-.386.202-.756.558-.517 3.51 2.36 5.672 5.64 5.672 9.58 0 2.22-.647 3.966-1.31 5.074z"/>
    </svg>
  )
};

const brands = [
  { name: 'Sketch', Icon: Logos.Sketch },
  { name: 'Figma', Icon: Logos.Figma },
  { name: 'Slack', Icon: Logos.Slack },
  { name: 'Google', Icon: Logos.Google },
  { name: 'Envato', Icon: Logos.Envato },
  // Duplicate for loop effect if needed, but Embla loop:true handles it well
  { name: 'Sketch', Icon: Logos.Sketch },
  { name: 'Figma', Icon: Logos.Figma },
  { name: 'Slack', Icon: Logos.Slack },
  { name: 'Google', Icon: Logos.Google },
  { name: 'Envato', Icon: Logos.Envato },
];

export default function Brands() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'start',
    slidesToScroll: 1,
    dragFree: true, // Allows smooth dragging
  });

  useEffect(() => {
    if (!emblaApi) return;

    // Autoplay implementation
    const intervalId = setInterval(() => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollTo(0);
      }
    }, 3000); // 3 seconds interval

    return () => clearInterval(intervalId);
  }, [emblaApi]);

  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex touch-pan-y">
            {brands.map((brand, index) => (
              <div 
                key={`${brand.name}-${index}`} 
                className="flex-[0_0_50%] md:flex-[0_0_33.333%] lg:flex-[0_0_20%] min-w-0 flex justify-center items-center px-8"
              >
                <div className="flex items-center gap-3 group cursor-pointer opacity-50 hover:opacity-100 transition-opacity duration-300">
                  <brand.Icon />
                  <span className="text-2xl font-bold text-gray-700 group-hover:text-black transition-colors duration-300">
                    {brand.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
