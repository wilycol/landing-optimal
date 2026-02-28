import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Settings, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const slides = [
  {
    id: 1,
    title: 'Our company is a collective of amazing people',
    image: '/images/hero-bg.jpg',
  },
  {
    id: 2,
    subtitle: 'We provide exceptional service with attention to detail and customer satisfaction guaranteed',
    title: 'Expert Team for',
    titleHighlight: 'Your Home & Office',
    image: '/images/about-team.jpg',
  },
];

const services = [
  'House Cleaning',
  'Indoor Cleaning',
  'Plumbing Services',
  'Bathroom Cleaning',
  'Outdoor Cleaning',
  'Window Cleaning',
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your request! We will contact you soon.');
  };

  return (
    <section id="home" className="relative h-[850px] overflow-hidden bg-zinc-900">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
      ))}

      {/* Content */}
      <div className="relative container h-full mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center h-full pt-20">
          {/* Left Content */}
          <div className="text-white z-10">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`transition-all duration-700 ${
                  index === currentSlide 
                    ? 'opacity-100 translate-y-0 relative' 
                    : 'opacity-0 translate-y-8 absolute inset-0 pointer-events-none'
                }`}
              >
                {slide.subtitle && (
                  <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                    <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                    <span className="text-sm font-medium tracking-wide uppercase">Optimal X Cleaning</span>
                  </div>
                )}
                
                <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight mb-6">
                  {slide.title}
                  {slide.titleHighlight && <br />}
                  {slide.titleHighlight && <span className="text-secondary">{slide.titleHighlight}</span>}
                </h1>
                
                {slide.subtitle && (
                  <p className="text-xl text-gray-200 mb-8 max-w-lg leading-relaxed">
                    {slide.subtitle}
                  </p>
                )}
                
                <div className="flex flex-wrap gap-4">
                  <Button 
                    size="lg" 
                    className="bg-primary hover:bg-primary/90 text-white rounded-full pl-8 pr-1 py-1 h-14 text-lg font-bold group"
                  >
                    Our Services
                    <span className="ml-4 w-12 h-12 bg-white rounded-full flex items-center justify-center group-hover:bg-gray-100 transition-colors">
                      <Settings className="w-6 h-6 text-primary animate-spin-slow" />
                    </span>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Right Content - Appointment Form */}
          <div className="hidden lg:block z-20 relative ml-auto w-[400px] mt-10">
            <div className="bg-[#030e29] p-8 rounded-2xl shadow-2xl relative overflow-hidden border border-white/5">
              
              {/* Decorative Pattern Background (Simulated Circles) */}
              <div className="absolute inset-0 opacity-5 pointer-events-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <pattern id="circles" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                    <circle cx="20" cy="20" r="18" fill="none" stroke="white" strokeWidth="1" />
                    <circle cx="20" cy="20" r="12" fill="none" stroke="white" strokeWidth="1" />
                    <circle cx="20" cy="20" r="6" fill="none" stroke="white" strokeWidth="1" />
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#circles)" />
                </svg>
              </div>

              <div className="relative z-10">
                <span className="text-[#ff4d30] font-bold text-xs uppercase tracking-wider mb-2 block">24 / 7 Hours Service</span>
                <h3 className="text-3xl font-bold text-white mb-6">Online Appointment</h3>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input 
                    placeholder="Your name*" 
                    className="bg-[#0b163f] border-none text-white placeholder:text-gray-400 h-12 rounded px-4 focus:ring-1 focus:ring-[#0072ff]"
                  />
                  <Input 
                    placeholder="Mobile number*" 
                    className="bg-[#0b163f] border-none text-white placeholder:text-gray-400 h-12 rounded px-4 focus:ring-1 focus:ring-[#0072ff]"
                  />
                  <Input 
                    placeholder="Mail address*" 
                    className="bg-[#0b163f] border-none text-white placeholder:text-gray-400 h-12 rounded px-4 focus:ring-1 focus:ring-[#0072ff]"
                  />
                  
                  <div className="relative">
                    <Select>
                      <SelectTrigger className="w-full bg-[#0b163f] border-none text-gray-400 h-12 rounded px-4 focus:ring-1 focus:ring-[#0072ff]">
                        <SelectValue placeholder="Choose services" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#0b163f] border border-white/10 text-white">
                        {services.map((service) => (
                          <SelectItem key={service} value={service.toLowerCase()} className="focus:bg-[#0072ff] focus:text-white cursor-pointer">
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <Textarea 
                    placeholder="Type message..." 
                    className="bg-[#0b163f] border-none text-white placeholder:text-gray-400 min-h-[120px] rounded px-4 py-3 focus:ring-1 focus:ring-[#0072ff] resize-none"
                  />
                  
                  <Button 
                    type="submit"
                    className="w-full bg-[#0072ff] hover:bg-[#0060d5] text-white font-bold h-14 rounded-full flex items-center justify-between px-6 mt-2 group transition-all shadow-lg shadow-blue-900/20"
                  >
                    <span>Get a Quote</span>
                    <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                       <Send className="w-4 h-4 text-white -ml-0.5" /> 
                    </span>
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Sparkles (Bottom Left) */}
      <div className="absolute bottom-24 left-[5%] z-20 hidden md:block pointer-events-none">
        <div className="relative w-32 h-32">
          {/* Star 1 - Large (Top Right) */}
          <svg className="absolute top-2 right-2 w-10 h-10 text-white animate-pulse" viewBox="0 0 24 24" fill="currentColor" style={{ animationDuration: '2s' }}>
            <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
          </svg>
          
          {/* Star 2 - Medium (Bottom Center) */}
          <svg className="absolute bottom-4 left-1/2 -translate-x-1/2 w-8 h-8 text-white animate-pulse" viewBox="0 0 24 24" fill="currentColor" style={{ animationDuration: '3s', animationDelay: '0.5s' }}>
            <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
          </svg>
          
          {/* Star 3 - Small (Top Left) */}
          <svg className="absolute top-6 left-2 w-6 h-6 text-white animate-pulse" viewBox="0 0 24 24" fill="currentColor" style={{ animationDuration: '2.5s', animationDelay: '1s' }}>
            <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
          </svg>
        </div>
      </div>

      {/* Slide Navigation */}
      <div className="hidden md:flex absolute bottom-8 left-12 gap-2 z-20">
        <button
          onClick={prevSlide}
          className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all duration-300 group rounded-full"
        >
          <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
        </button>
        <button
          onClick={nextSlide}
          className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all duration-300 group rounded-full"
        >
          <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide 
                ? 'w-8 h-2 bg-secondary' 
                : 'w-2 h-2 bg-white/50 hover:bg-white'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
