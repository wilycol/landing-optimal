import { useState } from 'react';
import { Plus } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '@/components/ui/dialog';

const categories = ['All', 'Kitchen', 'Office Cleaning', 'Plumbing', 'Window Cleaning'];

const portfolioItems = [
  {
    id: 1,
    title: 'Car Cleaning',
    category: 'Office Cleaning',
    image: '/images/portfolio-car.jpg',
  },
  {
    id: 2,
    title: 'Dishes Cleaning',
    category: 'Kitchen',
    image: '/images/portfolio-kitchen.jpg',
  },
  {
    id: 3,
    title: 'Outdoor Cleaning',
    category: 'Office Cleaning',
    image: '/images/service-outdoor.jpg',
  },
  {
    id: 4,
    title: 'Furniture Cleaning',
    category: 'Office Cleaning',
    image: '/images/portfolio-furniture.jpg',
  },
  {
    id: 5,
    title: 'Kitchen Cleaning',
    category: 'Kitchen',
    image: '/images/portfolio-kitchen.jpg',
  },
  {
    id: 6,
    title: 'Window Cleaning',
    category: 'Window Cleaning',
    image: '/images/portfolio-window.jpg',
  },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[#0072ff] font-medium mb-2 block">Our Portfolio</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0a1a3a] mb-4">
            Some work from our<br />
            <span className="text-[#0072ff]">memorable gallery.</span>
          </h2>
          <p className="text-gray-600">
            We shows only the best websites and portfolios built completely with passion, simplicity & creativity.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? 'bg-[#0072ff] text-white'
                  : 'bg-white text-gray-600 hover:bg-[#0072ff] hover:text-white shadow-sm'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <Dialog key={item.id}>
              <DialogTrigger asChild>
                <div className="group relative overflow-hidden rounded-lg cursor-pointer shadow-md hover:shadow-xl transition-all duration-300">
                  {/* Image */}
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a3a]/90 via-[#0a1a3a]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 bg-[#0072ff] rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
                        <Plus className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <span className="text-[#00c853] text-sm font-medium">{item.category}</span>
                      <h3 className="text-white text-xl font-bold mt-1">{item.title}</h3>
                    </div>
                  </div>
                </div>
              </DialogTrigger>
              
              <DialogContent className="max-w-4xl p-0 overflow-hidden">
                <div className="relative">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-auto"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <span className="text-[#00c853] text-sm font-medium">{item.category}</span>
                    <h3 className="text-white text-2xl font-bold mt-1">{item.title}</h3>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
