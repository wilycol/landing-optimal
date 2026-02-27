import { useState, useEffect, useRef } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Home, Briefcase, Wrench, Droplets } from 'lucide-react';

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
  { label: 'Home Cleaning', percentage: 90, color: 'text-[#0072ff]', icon: Home },
  { label: 'Office Cleaning', percentage: 75, color: 'text-[#00c853]', icon: Briefcase },
  { label: 'Plumbing Service', percentage: 50, color: 'text-[#0072ff]', icon: Wrench },
  { label: 'Window Cleaning', percentage: 90, color: 'text-[#00c853]', icon: Droplets },
];

function CircularProgress({ 
  label, 
  percentage, 
  color, 
  icon: Icon,
  isVisible 
}: { 
  label: string; 
  percentage: number; 
  color: string;
  icon: any;
  isVisible: boolean;
}) {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center group cursor-pointer">
      <div className="relative w-40 h-40 mb-6">
        {/* Background Circle */}
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="80"
            cy="80"
            r={radius}
            stroke="#f3f4f6"
            strokeWidth="8"
            fill="transparent"
          />
          {/* Progress Circle */}
          <circle
            cx="80"
            cy="80"
            r={radius}
            stroke="currentColor"
            strokeWidth="8"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={isVisible ? strokeDashoffset : circumference}
            className={`${color} transition-all duration-1500 ease-out`}
            style={{ transitionDuration: '1.5s' }}
          />
        </svg>
        
        {/* Icon & Percentage in Center */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="relative mb-1">
             <Icon className={`w-8 h-8 ${color} transition-transform duration-300 group-hover:-translate-y-2 group-hover:scale-110`} />
             <div className="absolute -top-2 -right-2 bg-primary text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
               {percentage}%
             </div>
          </div>
        </div>
      </div>
      
      <h4 className="text-xl font-bold text-[#0a1a3a] mb-2">{label}</h4>
      <p className="text-gray-500 text-sm text-center max-w-[200px]">
        As a app web crawler expert, I help organizations.
      </p>
      <div className={`h-1 w-12 mt-4 rounded-full ${color.replace('text-', 'bg-')}`} />
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

          {/* Right Content - Image */}
          <div className="lg:pt-8 relative">
             <div className="relative rounded-lg overflow-hidden shadow-2xl h-full min-h-[400px]">
              <img 
                src="/images/service-indoor.jpg" 
                alt="Cleaning Service Quality"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a3a]/40 to-transparent" />
            </div>

            {/* Floating Stats Card */}
            <div className="absolute bottom-8 -left-8 bg-white p-6 rounded-lg shadow-xl max-w-xs border-l-4 border-primary hidden lg:block">
              <div className="flex items-center gap-4 mb-2">
                <div className="text-4xl font-bold text-primary">25+</div>
                <div className="text-gray-600 text-sm font-medium leading-tight">Years of<br/>Experience</div>
              </div>
            </div>
          </div>
        </div>

        {/* Circular Metrics Row */}
        <div className="mt-24 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {progressData.map((item) => (
            <CircularProgress
              key={item.label}
              label={item.label}
              percentage={item.percentage}
              color={item.color}
              icon={item.icon}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
