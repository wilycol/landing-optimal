import { useEffect, useRef, useState } from 'react';
import { Search, Calculator, UserCheck } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Find our agent',
    description: 'As a professional cleaning service provider, we help organizations adjust to the expanding significance of maintaining clean and healthy environments.',
    icon: Search,
  },
  {
    id: 2,
    title: 'Estimate budget',
    description: 'Get a free quote and estimate for your cleaning needs. We provide transparent pricing with no hidden costs.',
    icon: Calculator,
  },
  {
    id: 3,
    title: 'Hire our agent!',
    description: 'Once you are satisfied with the quote, hire our professional team and experience top-quality cleaning services.',
    icon: UserCheck,
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
    <section ref={sectionRef} className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#0072ff] font-medium mb-2 block">Steps to reach here</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0a1a3a] mb-4">
            Some easy steps to<br />
            <span className="text-[#0072ff]">clean your asset.</span>
          </h2>
          <p className="text-gray-600">
            We've been lucky to collaborate with a long list of customers, located in and out of the country.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={step.id}
                className={`relative text-center transition-all duration-700 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-gray-200">
                    <div 
                      className={`h-full bg-[#0072ff] transition-all duration-1000 ${
                        isVisible ? 'w-full' : 'w-0'
                      }`}
                      style={{ transitionDelay: `${index * 200 + 500}ms` }}
                    />
                  </div>
                )}

                {/* Step Number */}
                <div className="relative inline-flex items-center justify-center mb-6">
                  <div className="w-32 h-32 rounded-full bg-gray-50 flex items-center justify-center border-4 border-white shadow-lg">
                    <div className="w-24 h-24 rounded-full bg-[#0072ff] flex items-center justify-center">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-[#00c853] text-white flex items-center justify-center font-bold text-lg shadow-md">
                    {step.id}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-[#0a1a3a] mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
