import { useEffect, useRef, useState } from 'react';
import { Sparkles, Check, Users, Shirt } from 'lucide-react';
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
    <div ref={ref} className="text-4xl lg:text-5xl font-bold text-primary">
      {count}
      <span className="text-secondary">{suffix}</span>
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
            <div className="relative rounded-lg overflow-hidden shadow-2xl mb-12">
              <img 
                src="/images/about-team.jpg" 
                alt="Optimal X Cleaning Team" 
                className="w-full h-auto object-cover"
              />
              
               {/* Experience Badge */}
              <div className="absolute bottom-8 right-0 translate-x-1/2 bg-primary text-white p-8 rounded-full shadow-xl z-10 w-40 h-40 flex flex-col items-center justify-center text-center border-4 border-white">
                <div className="text-4xl font-bold mb-1">2020</div>
                <div className="text-xs uppercase tracking-wider font-medium">Established</div>
              </div>
            </div>
           
            {/* Stats Row */}
            <div className="flex flex-wrap gap-12 mt-8">
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <Shirt className="w-10 h-10 text-secondary stroke-[1.5]" />
                </div>
                <div>
                  <Counter end={1542} suffix="+" />
                  <p className="text-gray-500 font-medium mt-1">Satisfied Clients</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <Users className="w-10 h-10 text-secondary stroke-[1.5]" />
                </div>
                <div>
                  <Counter end={182} suffix="+" />
                  <p className="text-gray-500 font-medium mt-1">Expert Team</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats - Now below the image on mobile, but part of left column structure visually */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-8 mt-4 pt-8 border-t border-gray-100 lg:hidden">
             {/* Mobile only duplicate or move? Better to restructure grid. 
                 But to match Bixol layout where stats are below the image area:
             */}
          </div>

          {/* Right - Content */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-secondary" />
              <span className="text-primary font-medium">About Cleaning Agency</span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0a1a3a] mb-6">
              Why will you choose<br />
              <span className="text-primary">our services?</span>
            </h2>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Optimal X is a design studio founded in London. Nowadays, we've grown and expanded our services, 
              and have become a multinational firm, offering a variety of services and solutions Worldwide.
            </p>

            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-secondary" />
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature}</p>
                </div>
              ))}
            </div>

            <a href="#services">
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-base rounded-full">
                View Details
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
