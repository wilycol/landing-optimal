import { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Laito French',
    role: 'Director',
    image: '/images/testimonial-1.jpg',
    content: 'Testimonials are written or recorded statements that support your credibility and level of expertise. They also strengthen your reputation. Optimal X has exceeded our expectations in every way.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Fiona Titir',
    role: 'Director',
    image: '/images/testimonial-2.jpg',
    content: 'The team at Optimal X is professional, reliable, and thorough. Their attention to detail is remarkable, and they always go above and beyond to ensure our office is spotless.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Lima Vinchy',
    role: 'Director',
    image: '/images/testimonial-3.jpg',
    content: 'We have been using Optimal X for over a year now, and we could not be happier with their service. They are consistent, professional, and truly care about their work.',
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <span className="text-[#0072ff] font-medium mb-2 block">Best Review</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0a1a3a] mb-4">
              We are very glad to<br />
              <span className="text-[#0072ff]">get good review.</span>
            </h2>
            <p className="text-gray-600 mb-8">
              We value the experimentation, the reformation of the message, and the smart incentives.
            </p>

            {/* Featured Testimonial */}
            <div className="relative bg-gray-50 p-6 rounded-lg">
              <Quote className="w-10 h-10 text-[#0072ff]/20 absolute top-4 right-4" />
              <p className="text-gray-600 leading-relaxed mb-6 relative z-10">
                {testimonials[currentIndex].content}
              </p>
              <div className="flex items-center gap-4">
                <img 
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-[#0a1a3a]">{testimonials[currentIndex].name}</h4>
                  <p className="text-[#0072ff] text-sm">{testimonials[currentIndex].role}</p>
                </div>
              </div>
              
              {/* Rating */}
              <div className="flex gap-1 mt-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex gap-3 mt-6">
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#0072ff] hover:text-white transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#0072ff] hover:text-white transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right Content - All Testimonials */}
          <div className="space-y-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`p-6 rounded-lg transition-all duration-300 cursor-pointer ${
                  index === currentIndex 
                    ? 'bg-[#0072ff] text-white shadow-lg' 
                    : 'bg-gray-50 hover:bg-gray-100'
                }`}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                }}
              >
                <div className="flex items-start gap-4">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <p className={`text-sm leading-relaxed mb-3 ${
                      index === currentIndex ? 'text-white/90' : 'text-gray-600'
                    }`}>
                      {testimonial.content.substring(0, 100)}...
                    </p>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className={`font-bold ${
                          index === currentIndex ? 'text-white' : 'text-[#0a1a3a]'
                        }`}>
                          {testimonial.name}
                        </h4>
                        <p className={`text-sm ${
                          index === currentIndex ? 'text-white/70' : 'text-[#0072ff]'
                        }`}>
                          {testimonial.role}
                        </p>
                      </div>
                      <div className="flex gap-0.5">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-3 h-3 ${
                              index === currentIndex 
                                ? 'text-yellow-300 fill-yellow-300' 
                                : 'text-yellow-400 fill-yellow-400'
                            }`} 
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
