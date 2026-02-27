import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Settings } from 'lucide-react';
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

          {/* Right Form - Floating Card Style */}
          <div className="hidden lg:block z-10 relative">
            <div className="bg-white rounded-3xl p-8 shadow-2xl max-w-md ml-auto animate-in slide-in-from-right duration-700">
              <div className="mb-6">
                <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Book Now</span>
                <h3 className="text-2xl font-bold text-primary mt-1">Online Appointment</h3>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input 
                    placeholder="Your Name" 
                    className="h-12 bg-gray-50 border-gray-200 focus:border-secondary focus:ring-secondary rounded-xl"
                  />
                  <Input 
                    placeholder="Phone Number" 
                    className="h-12 bg-gray-50 border-gray-200 focus:border-secondary focus:ring-secondary rounded-xl"
                  />
                </div>
                
                <Input 
                  placeholder="Email Address" 
                  className="h-12 bg-gray-50 border-gray-200 focus:border-secondary focus:ring-secondary rounded-xl"
                />
                
                <Select>
                  <SelectTrigger className="h-12 bg-gray-50 border-gray-200 focus:border-secondary focus:ring-secondary rounded-xl text-gray-500">
                    <SelectValue placeholder="Select Service" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((s) => (
                      <SelectItem key={s} value={s.toLowerCase()}>{s}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                
                <Textarea 
                  placeholder="Message" 
                  className="min-h-[100px] bg-gray-50 border-gray-200 focus:border-secondary focus:ring-secondary rounded-xl resize-none"
                />
                
                <Button type="submit" className="w-full h-12 bg-secondary hover:bg-secondary/90 text-white font-bold rounded-xl text-base shadow-lg shadow-secondary/25 transition-all hover:scale-[1.02]">
                  Get Appointment
                </Button>
              </form>
            </div>
          </div>
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
