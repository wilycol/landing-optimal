import { Calendar, User, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'How stay calm from the first time.',
    excerpt: 'Learn the best practices for maintaining a clean and organized space from day one.',
    image: '/images/blog-home.jpg',
    author: 'Optimal X Team',
    date: 'August 17, 2024',
    category: 'Tips',
  },
  {
    id: 2,
    title: 'Our proprietary enables Quality.',
    excerpt: 'Discover our unique approach to delivering exceptional cleaning services.',
    image: '/images/blog-toilet.jpg',
    author: 'Optimal X Team',
    date: 'August 15, 2024',
    category: 'Services',
  },
  {
    id: 3,
    title: 'Locate Optimal X Office Near You.',
    excerpt: 'Find our nearest office and get in touch with our professional team.',
    image: '/images/blog-office.jpg',
    author: 'Optimal X Team',
    date: 'July 12, 2024',
    category: 'News',
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-20 lg:py-28 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#0072ff] font-medium mb-2 block">Featured Blog</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0a1a3a] mb-4">
            Learn about our latest<br />
            <span className="text-[#0072ff]">news from blog.</span>
          </h2>
          <p className="text-gray-600">
            Follow our latest news and thoughts which focuses exclusively on design, art, vintage, and also work updates.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article 
              key={post.id}
              className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Image Container with Shine Effect */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Shine Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full skew-x-[-25deg] group-hover:animate-shine z-10 w-[150%] h-full pointer-events-none" />

                {/* Dark Overlay on Hover */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="bg-[#0072ff] text-white text-xs font-bold uppercase tracking-wide px-3 py-1.5 rounded">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4 border-b border-gray-100 pb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#0072ff]" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-[#0072ff]" />
                    {post.author}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[#0a1a3a] mb-3 group-hover:text-[#0072ff] transition-colors line-clamp-2">
                  <a href="#">{post.title}</a>
                </h3>

                <a 
                  href="#"
                  className="inline-flex items-center text-[#0a1a3a] font-bold text-sm hover:text-[#0072ff] transition-colors mt-2"
                >
                  Read more
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
