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
    <section id="services" className="py-24 bg-[#f4f5f8]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-secondary font-bold uppercase tracking-wider text-sm mb-3 block">Featured Service</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-primary leading-tight">
              We provide the best services<br />
              for your help!
            </h2>
          </div>
          <div className="max-w-md text-gray-500 pb-2">
            <p>
              Optimal X is a design studio founded in London and expanded our services, 
              and become a multinational firm, offering solutions Worldwide.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group relative bg-white rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/5"
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Image Area */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Floating Icon */}
                  <div className="absolute -bottom-8 right-8 w-16 h-16 bg-secondary rounded-full flex items-center justify-center shadow-lg z-10 group-hover:bg-primary transition-colors duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="pt-12 pb-8 px-8">
                  <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center text-sm font-bold uppercase tracking-wider text-primary group-hover:text-secondary transition-colors cursor-pointer">
                    Read More <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
