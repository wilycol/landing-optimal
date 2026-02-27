import { useState } from 'react';
import { ArrowRight, Droplets, Home, Wrench, Building2, Bath, Sun } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Bathroom Cleaning',
    description: 'Professional bathroom cleaning services that leave your bathrooms sparkling clean and sanitized.',
    image: '/images/service-bathroom.jpg',
    icon: Bath,
  },
  {
    id: 2,
    title: 'Outdoor Cleaning',
    description: 'Complete outdoor cleaning solutions including pressure washing and exterior maintenance.',
    image: '/images/service-outdoor.jpg',
    icon: Sun,
  },
  {
    id: 3,
    title: 'House Fixing',
    description: 'Expert handyman services for all your home repair and maintenance needs.',
    image: '/images/service-house-fixing.jpg',
    icon: Wrench,
  },
  {
    id: 4,
    title: 'House Cleaning',
    description: 'Comprehensive house cleaning services tailored to your specific requirements.',
    image: '/images/service-house.jpg',
    icon: Home,
  },
  {
    id: 5,
    title: 'Indoor Cleaning',
    description: 'Thorough indoor cleaning for a healthier and more comfortable living environment.',
    image: '/images/service-indoor.jpg',
    icon: Building2,
  },
  {
    id: 6,
    title: 'Plumbing Services',
    description: 'Professional plumbing services for repairs, installations, and maintenance.',
    image: '/images/service-plumbing.jpg',
    icon: Droplets,
  },
];

export default function Services() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="services" className="py-20 lg:py-28 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#0072ff] font-medium mb-2 block">Featured Service</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0a1a3a] mb-4">
            We provide the best services<br />
            <span className="text-[#0072ff]">for your help!</span>
          </h2>
          <p className="text-gray-600">
            Optimal X is a design studio founded in London and expanded our services, 
            and become a multinational firm, offering solutions Worldwide.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Icon */}
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-[#0072ff] rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#0a1a3a] mb-3 group-hover:text-[#0072ff] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {service.description}
                  </p>
                  <a 
                    href="#contact"
                    className="inline-flex items-center text-[#0072ff] font-medium text-sm hover:text-[#00c853] transition-colors"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>

                {/* Hover Overlay */}
                <div 
                  className={`absolute inset-0 bg-[#0072ff]/95 flex flex-col items-center justify-center p-6 transition-opacity duration-300 ${
                    hoveredId === service.id ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}
                >
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 text-center">
                    {service.title}
                  </h3>
                  <p className="text-white/80 text-sm text-center mb-6">
                    {service.description}
                  </p>
                  <a 
                    href="#contact"
                    className="inline-flex items-center bg-white text-[#0072ff] px-6 py-2 rounded-full font-medium text-sm hover:bg-[#00c853] hover:text-white transition-colors"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
