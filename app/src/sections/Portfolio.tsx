import { useState } from 'react';
import { Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { portfolioItems } from '@/data/portfolio';

const categories = ['All', 'Kitchen', 'Office Cleaning', 'Plumbing', 'Window Cleaning'];

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
            <Link to={`/portfolio/${item.slug}`} key={item.id} className="block group">
                <div className="relative overflow-hidden rounded-lg cursor-pointer shadow-md hover:shadow-xl transition-all duration-300">
                  {/* Image */}
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-[#062265]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-6">
                      <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-4 transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-100">
                        <Plus className="w-6 h-6 text-[#062265]" />
                      </div>
                      <h3 className="text-white text-2xl font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">{item.title}</h3>
                      <span className="text-[#00c853] text-sm font-medium mt-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-200">{item.category}</span>
                  </div>
                </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
