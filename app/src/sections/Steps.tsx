import { useEffect, useRef, useState } from 'react';
import { Search, Calculator, Target, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const steps = [
  {
    id: 1,
    title: 'Find our agent',
    description: 'As a app web crawler expert, I help organizations adjust to the expanding significance of internet.',
    icon: Search,
  },
  {
    id: 2,
    title: 'Estimate budget',
    description: 'As a app web crawler expert, I help organizations adjust to the expanding significance of internet.',
    icon: Calculator,
  },
  {
    id: 3,
    title: 'Hire our agent!',
    description: 'As a app web crawler expert, I help organizations adjust to the expanding significance of internet.',
    icon: Target,
  },
];

export default function Steps() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
            <div className="max-w-2xl">
                <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-5 h-5 text-[#0072ff]" />
                    <span className="text-[#0a1a3a] font-bold text-lg">Steps to reach here</span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-[#062265] leading-tight">
                  Some easy steps to<br />
                  clean your asset.
                </h2>
            </div>
            <div className="max-w-md">
                 <p className="text-gray-500 text-lg">
                    We've been lucky to collaborate with a long list of customers, located in and out of the country.
                </p>
            </div>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={step.id}
                className={`group relative text-center transition-all duration-700 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Step Circle */}
                <div className="relative inline-flex items-center justify-center mb-8">
                  {/* Background Circle with Shadow */}
                  <div className="w-40 h-40 rounded-full bg-white flex items-center justify-center shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] group-hover:bg-[#0072ff] transition-colors duration-500 relative z-10">
                      <Icon className="w-14 h-14 text-[#0072ff] group-hover:text-white transition-colors duration-500 stroke-[1.5]" />
                  </div>
                  
                  {/* Decorative Blue Arc/Crescent */}
                  <div className="absolute -bottom-2 w-32 h-32 rounded-full border-b-[6px] border-[#0072ff] opacity-100 group-hover:opacity-0 transition-opacity duration-500 z-0" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-[#062265] mb-4">{step.title}</h3>
                
                {/* Divider */}
                <div className="w-12 h-1 bg-[#0072ff] mx-auto mb-4 rounded-full" />
                
                <p className="text-gray-500 leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Button */}
        <div className="text-center">
            <Button className="bg-[#0072ff] hover:bg-[#005bb5] text-white font-bold py-6 px-8 rounded-full shadow-lg hover:shadow-xl transition-all text-base">
                Read more to reach us
            </Button>
        </div>
      </div>
    </section>
  );
}
