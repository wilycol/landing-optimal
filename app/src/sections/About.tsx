import { useEffect, useRef, useState } from 'react';
import { Sparkles, Check, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const features = [
  'The housekeepers we hired are professionals who take pride in doing excellent work and in exceeding expectations.',
  'We carefully screen all of our cleaners, so you can rest assured that your home would receive the absolute highest quality of service providing.',
  'Your time is precious, and we understand that cleaning is really just one more item on your to-do list.',
];

function Counter({ end, suffix = '', duration = 2000 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return (
    <div ref={ref} className="text-4xl lg:text-5xl font-bold text-[#0072ff]">
      {count}
      <span className="text-[#00c853]">{suffix}</span>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="/images/about-team.jpg" 
                alt="Optimal X Cleaning Team" 
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 bg-[#0072ff] text-white p-6 rounded-lg shadow-xl">
              <div className="text-5xl font-bold">15</div>
              <div className="text-sm">Years of<br />Experience</div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-[#00c853]" />
              <span className="text-[#0072ff] font-medium">About Cleaning Agency</span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0a1a3a] mb-6">
              Why will you choose<br />
              <span className="text-[#0072ff]">our services?</span>
            </h2>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Optimal X is a design studio founded in London. Nowadays, we've grown and expanded our services, 
              and have become a multinational firm, offering a variety of services and solutions Worldwide.
            </p>

            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#00c853]/10 flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-[#00c853]" />
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature}</p>
                </div>
              ))}
            </div>

            <a href="#services">
              <Button className="bg-[#0072ff] hover:bg-[#005bb5] text-white px-8 py-6 text-base rounded-full">
                View Details
              </Button>
            </a>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 mt-12 pt-8 border-t border-gray-100">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-[#0072ff]/10 flex items-center justify-center">
                  <Users className="w-7 h-7 text-[#0072ff]" />
                </div>
                <div>
                  <Counter end={301} suffix="+" />
                  <p className="text-gray-500 text-sm">Satisfied Clients</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-[#00c853]/10 flex items-center justify-center">
                  <Award className="w-7 h-7 text-[#00c853]" />
                </div>
                <div>
                  <Counter end={36} suffix="+" />
                  <p className="text-gray-500 text-sm">Expert Team</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
