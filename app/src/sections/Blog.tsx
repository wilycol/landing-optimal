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
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-[#0072ff] text-white text-xs font-medium px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>

                {/* Date Overlay */}
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {post.author}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[#0a1a3a] mb-3 group-hover:text-[#0072ff] transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                <a 
                  href="#"
                  className="inline-flex items-center text-[#0072ff] font-medium text-sm hover:text-[#00c853] transition-colors"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a 
            href="#"
            className="inline-flex items-center gap-2 bg-[#0072ff] text-white px-8 py-3 rounded-full font-medium hover:bg-[#005bb5] transition-colors"
          >
            View All Posts
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
