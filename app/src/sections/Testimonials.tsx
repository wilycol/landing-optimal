import { useState, useEffect, useCallback } from 'react';
import { Star, Sparkles } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    id: 1,
    name: 'Laito French',
    role: 'Director',
    image: '/images/testimonial-1.jpg',
    content: 'Testimonials are written or recorded statements that support your credibility and level of expertise. They also strengthen your reputation.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Fiona Titir',
    role: 'Director',
    image: '/images/testimonial-2.jpg',
    content: 'The team at Optimal X is professional, reliable, and thorough. Their attention to detail is remarkable, and they always go above and beyond.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Lima Vinchy',
    role: 'Director',
    image: '/images/testimonial-3.jpg',
    content: 'We have been using Optimal X for over a year now, and we could not be happier with their service. They are consistent, professional, and truly care.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Jeff Adams',
    role: 'Director',
    image: '/images/testimonial-1.jpg',
    content: 'Optimal X provided exceptional service. Their team was efficient, friendly, and the results were outstanding. Highly recommended!',
    rating: 5,
  },
  {
    id: 5,
    name: 'Moe Ammar',
    role: 'Director',
    image: '/images/testimonial-2.jpg',
    content: 'I was impressed by the professionalism and quality of work. They transformed our space completely. Thank you Optimal X!',
    rating: 5,
  },
  {
    id: 6,
    name: 'Sarah Jenkins',
    role: 'Marketing Manager',
    image: '/images/testimonial-3.jpg',
    content: 'The ROI we have seen since working with Optimal X has been incredible. They truly understand the market dynamics.',
    rating: 5,
  },
  {
    id: 7,
    name: 'Michael Chen',
    role: 'CTO',
    image: '/images/testimonial-1.jpg',
    content: 'Technical expertise at its finest. They solved complex problems that other agencies struggled with for months.',
    rating: 5,
  },
];

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'start',
    slidesToScroll: 1,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onInit = useCallback((emblaApi: any) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: any) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on('reInit', onInit);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onInit, onSelect]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-[#f4f7fc]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
            <div className="max-w-2xl">
                <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-5 h-5 text-[#0072ff]" />
                    <span className="text-[#0a1a3a] font-bold text-lg">Best Review</span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-[#062265] leading-tight">
                  We are very glad to<br />
                  get good review.
                </h2>
            </div>
            <div className="max-w-md">
                 <p className="text-gray-500 text-lg">
                    We value the experimentation, the reformation of the message, and the smart incentives.
                </p>
            </div>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-8 pb-12 pt-4"> {/* Added padding bottom for hover effect space */}
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-8 min-w-0"
              >
                <div className="group bg-white p-10 rounded-xl shadow-sm border-t-4 border-transparent hover:border-[#0072ff] hover:-translate-y-2 hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between cursor-pointer">
                  <div>
                    <p className="text-gray-500 text-lg leading-relaxed mb-8">
                      {testimonial.content}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <img 
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md"
                    />
                    <div>
                      <h4 className="font-bold text-[#062265] text-lg mb-1">{testimonial.name}</h4>
                      <p className="text-[#0072ff] font-medium text-sm mb-2">{testimonial.role}</p>
                      <div className="flex gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-[#ffcc00] fill-[#ffcc00]" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Pagination */}
        <div className="flex justify-center gap-3 mt-8">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              className={cn(
                "w-3 h-3 rounded-full transition-all duration-300",
                index === selectedIndex 
                  ? "bg-transparent border-2 border-[#0072ff] scale-125" 
                  : "bg-gray-300 hover:bg-[#0072ff]/50"
              )}
              onClick={() => scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            >
                {index === selectedIndex && (
                    <div className="w-1.5 h-1.5 bg-[#0072ff] rounded-full mx-auto mt-[1px]" />
                )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
