import { useState, useEffect, useRef } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const tabContent = {
  philosophy: {
    title: 'Our Philosophy',
    content: 'We believe in delivering exceptional cleaning services that exceed our clients expectations. Our philosophy is built on trust, reliability, and attention to detail. We understand that every space is unique, and we tailor our services to meet your specific needs.',
  },
  mission: {
    title: 'Company Mission',
    content: 'Our mission is to provide top-quality cleaning services that create healthier, more comfortable environments for our clients. We are committed to using eco-friendly products and sustainable practices while maintaining the highest standards of cleanliness and hygiene.',
  },
  vision: {
    title: 'Our Vision',
    content: 'We envision becoming the leading cleaning service provider globally, known for our innovation, reliability, and customer-centric approach. Our goal is to set new industry standards and continuously improve our services through technology and training.',
  },
};

const progressData = [
  { label: 'Home Cleaning', percentage: 90, color: 'bg-[#0072ff]' },
  { label: 'Office Cleaning', percentage: 75, color: 'bg-[#00c853]' },
  { label: 'Plumbing Service', percentage: 50, color: 'bg-[#0072ff]' },
  { label: 'Window Cleaning', percentage: 90, color: 'bg-[#00c853]' },
];

function ProgressBar({ 
  label, 
  percentage, 
  color, 
  isVisible 
}: { 
  label: string; 
  percentage: number; 
  color: string;
  isVisible: boolean;
}) {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="font-medium text-[#0a1a3a]">{label}</span>
        <span className="font-bold text-[#0072ff]">{percentage}%</span>
      </div>
      <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className={`h-full ${color} rounded-full transition-all duration-1500 ease-out`}
          style={{ 
            width: isVisible ? `${percentage}%` : '0%',
            transitionDuration: '1.5s'
          }}
        />
      </div>
    </div>
  );
}

export default function WhyChooseUs() {
  const [activeTab, setActiveTab] = useState('philosophy');
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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Content */}
          <div>
            <span className="text-[#0072ff] font-medium mb-2 block">Why choose us?</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0a1a3a] mb-4">
              For our best quality<br />
              <span className="text-[#0072ff]">you have chosen us</span>
            </h2>
            <p className="text-gray-600 mb-8">
              Our agency can only be as strong as our people & because of this, our team have designed game changing products.
            </p>

            {/* Tabs */}
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid grid-cols-3 bg-gray-100 p-1 mb-6">
                <TabsTrigger 
                  value="philosophy"
                  className="data-[state=active]:bg-[#0072ff] data-[state=active]:text-white"
                >
                  Our Philosophy
                </TabsTrigger>
                <TabsTrigger 
                  value="mission"
                  className="data-[state=active]:bg-[#0072ff] data-[state=active]:text-white"
                >
                  Company Mission
                </TabsTrigger>
                <TabsTrigger 
                  value="vision"
                  className="data-[state=active]:bg-[#0072ff] data-[state=active]:text-white"
                >
                  Our Vision
                </TabsTrigger>
              </TabsList>
              
              {Object.entries(tabContent).map(([key, content]) => (
                <TabsContent key={key} value={key} className="mt-0">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-[#0a1a3a] mb-3">{content.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{content.content}</p>
                  </div>
                </TabsContent>
              ))}
            </Tabs>

            {/* Guarantee Box */}
            <div className="mt-8 bg-[#0a1a3a] text-white p-6 rounded-lg">
              <h4 className="text-xl font-bold mb-3">Our Two-Part Satisfaction Guarantee!</h4>
              <p className="text-white/80 text-sm mb-4">
                We know that if you love our service you're going to recommend us to your family and friends, 
                so your satisfaction is our number one priority. If you're unhappy with our service in any way.
              </p>
              <a 
                href="#contact"
                className="inline-flex items-center text-[#00c853] font-medium hover:text-white transition-colors"
              >
                View Terms of Service
              </a>
            </div>
          </div>

          {/* Right Content - Progress Bars */}
          <div className="lg:pt-16">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-[#0a1a3a] mb-8">Service Quality</h3>
              {progressData.map((item) => (
                <ProgressBar
                  key={item.label}
                  label={item.label}
                  percentage={item.percentage}
                  color={item.color}
                  isVisible={isVisible}
                />
              ))}
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-[#0072ff] text-white p-6 rounded-lg text-center">
                <div className="text-4xl font-bold mb-1">98%</div>
                <div className="text-white/80 text-sm">Customer Satisfaction</div>
              </div>
              <div className="bg-[#00c853] text-white p-6 rounded-lg text-center">
                <div className="text-4xl font-bold mb-1">24/7</div>
                <div className="text-white/80 text-sm">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
