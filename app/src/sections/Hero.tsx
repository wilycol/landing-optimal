import { useState, useEffect } from 'react';
import { Play, ChevronLeft, ChevronRight, Settings, ArrowRight } from 'lucide-react';
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
    subtitle: 'Optimal X is professionalism in the cleaning industry by providing top-quality cleaning and related services',
    title: 'We are Professional',
    titleHighlight: 'Cleaning Services',
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
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    service: '',
    message: '',
  });

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
    <section id="home" className="relative min-h-[700px] lg:min-h-[800px] overflow-hidden">
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
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>
      ))}

      {/* Content */}
      <div className="relative container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`transition-all duration-700 ${
                  index === currentSlide 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8 absolute'
                }`}
              >
                {index === currentSlide && (
                  <>
                    <p className="text-lg mb-4 max-w-lg">{slide.subtitle}</p>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
                      {slide.title}
                    </h1>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#00c853] mb-8">
                      {slide.titleHighlight}
                    </h2>
                  </>
                )}
              </div>
            ))}

            {/* Video Button */}
            <div className="flex items-center gap-6 mt-8">
              <a 
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-[#0072ff] transition-colors">
                  <Play className="w-6 h-6 text-white ml-1" fill="white" />
                </div>
                <span className="text-white font-medium">Watch Our Video</span>
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mt-10">
              <a 
                href="#services"
                className="inline-flex items-center gap-2 bg-[#0072ff] text-white px-6 py-3 rounded-full font-medium hover:bg-[#005bb5] transition-colors"
              >
                Our Services
                <Settings className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Content - Quote Form */}
          <div className="bg-[#0072ff] rounded-lg p-6 lg:p-8 shadow-2xl">
            <div className="text-center mb-6">
              <p className="text-white/80 text-sm mb-1">24 / 7 Hours Service</p>
              <h3 className="text-2xl font-bold text-white">Online Appointment</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="text"
                placeholder="Your name*"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 h-12"
                required
              />
              <Input
                type="tel"
                placeholder="Mobile number*"
                value={formData.mobile}
                onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 h-12"
                required
              />
              <Input
                type="email"
                placeholder="Mail address*"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 h-12"
                required
              />
              <Select
                value={formData.service}
                onValueChange={(value) => setFormData({ ...formData, service: value })}
              >
                <SelectTrigger className="bg-white/10 border-white/20 text-white h-12 [&>span]:text-white/60">
                  <SelectValue placeholder="Choose services" />
                </SelectTrigger>
                <SelectContent>
                  {services.map((service) => (
                    <SelectItem key={service} value={service.toLowerCase().replace(' ', '-')}>
                      {service}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Textarea
                placeholder="Type message..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 min-h-[100px] resize-none"
              />
              <Button 
                type="submit"
                className="w-full bg-[#0a1a3a] hover:bg-[#0d2249] text-white h-12 text-lg font-medium"
              >
                Get a Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Slide Navigation */}
      <div className="absolute bottom-8 left-4 flex gap-2">
        <button
          onClick={prevSlide}
          className="w-12 h-12 bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-[#0072ff] transition-colors"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="w-12 h-12 bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-[#0072ff] transition-colors"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-[#0072ff]' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
