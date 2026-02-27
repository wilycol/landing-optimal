import { ArrowRight, Droplets, Home, Wrench, Building2, Bath, Sun, ChevronLeft, ChevronRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback } from 'react';

const services = [
  {
    id: 1,
    title: 'Bathroom Cleaning',
    description: 'Professional bathroom cleaning services that leave your bathrooms sparkling clean and sanitized.',
    image: '/images/service-bathroom.jpg',
    icon: Bath,
  },
  {
    id: 2,
    title: 'Outdoor Cleaning',
    description: 'Complete outdoor cleaning solutions including pressure washing and exterior maintenance.',
    image: '/images/service-outdoor.jpg',
    icon: Sun,
  },
  {
    id: 3,
    title: 'House Fixing',
    description: 'Expert handyman services for all your home repair and maintenance needs.',
    image: '/images/service-house-fixing.jpg',
    icon: Wrench,
  },
  {
    id: 4,
    title: 'House Cleaning',
    description: 'Comprehensive house cleaning services tailored to your specific requirements.',
    image: '/images/service-house.jpg',
    icon: Home,
  },
  {
    id: 5,
    title: 'Indoor Cleaning',
    description: 'Thorough indoor cleaning for a healthier and more comfortable living environment.',
    image: '/images/service-indoor.jpg',
    icon: Building2,
  },
  {
    id: 6,
    title: 'Plumbing Services',
    description: 'Professional plumbing services for repairs, installations, and maintenance.',
    image: '/images/service-plumbing.jpg',
    icon: Droplets,
  },
];

export default function Services() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'start',
    slidesToScroll: 1,
    breakpoints: {
      '(min-width: 1024px)': { slidesToScroll: 1 }
    }
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section id="services" className="py-24 bg-[#f4f5f8] relative group/section">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-secondary font-bold uppercase tracking-wider text-sm mb-3 block">Featured Service</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-primary leading-tight">
              We provide the best services<br />
              for your help!
            </h2>
          </div>
          <div className="max-w-md text-gray-500 pb-2">
            <p>
              Optimal X is a design studio founded in London and expanded our services, 
              and become a multinational firm, offering solutions Worldwide.
            </p>
          </div>
        </div>

        {/* Services Carousel */}
        <div className="relative px-4 lg:px-8">
          {/* Navigation Buttons - Absolute on sides */}
          <button 
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 lg:-translate-x-full z-20 w-12 h-12 lg:w-16 lg:h-16 bg-white rounded-full shadow-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 group/btn"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 lg:w-8 lg:h-8" />
          </button>
          
          <button 
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 lg:translate-x-full z-20 w-12 h-12 lg:w-16 lg:h-16 bg-white rounded-full shadow-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 group/btn"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 lg:w-8 lg:h-8" />
          </button>

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-8">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <div key={service.id} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pl-8">
                    <div
                      className="group relative bg-white rounded-3xl overflow-hidden p-10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl h-full flex flex-col items-center text-center min-h-[420px]"
                    >
                      {/* Hover Background Image & Overlay */}
                      <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute inset-0 bg-[#062265]/90 z-10" /> {/* Primary color overlay */}
                        <img 
                          src={service.image} 
                          alt={service.title}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Content */}
                      <div className="relative z-10 flex flex-col items-center h-full">
                        {/* Icon Circle */}
                        <div className="relative w-24 h-24 mb-8 flex items-center justify-center">
                          {/* Dashed Border Circle (Default) */}
                          <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30 group-hover:border-white/30 transition-colors duration-300" />
                          
                          {/* Inner Circle */}
                          <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                            <Icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
                          </div>
                        </div>

                        <h3 className="text-2xl font-bold text-primary mb-6 group-hover:text-white transition-colors duration-300">
                          {service.title}
                        </h3>
                        
                        <p className="text-gray-500 mb-8 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                          {service.description}
                        </p>
                        
                        <div className="mt-auto">
                          <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-primary group-hover:text-white transition-colors duration-300 bg-transparent hover:bg-transparent">
                            Read More <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
