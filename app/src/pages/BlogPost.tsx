import { useParams, Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft, Clock, Share2 } from 'lucide-react';
import Header from '../sections/Header';
import Footer from '../sections/Footer';
import ContactCTA from '../sections/ContactCTA';

// Blog data store (simulated)
const blogPosts = {
  'how-stay-calm-from-the-first-time': {
    title: 'How stay calm from the first time.',
    date: 'August 17, 2024',
    author: 'Optimal X Team',
    category: 'Tips',
    image: '/images/blog-home.jpg',
    content: `
      <p class="mb-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
      
      <p class="mb-6">The man, who is in a stable condition in hospital, has "potentially life-changing injuries" after the overnight attack in Garvagh, County Londonderry. He was shot in the arms and legs.</p>
      
      <blockquote class="border-l-4 border-[#0072ff] pl-6 italic text-xl text-gray-700 my-8">
        "What sort of men would think it is acceptable to subject a young girl to this level of brutality and violence? Every child has the right to feel safe and protected in their own home."
      </blockquote>
      
      <p class="mb-6">As a app web crawler expert, I help organizations adjust to the expanding significance of internet promoting. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      
      <h3 class="text-2xl font-bold text-[#062265] mt-8 mb-4">Why staying calm matters</h3>
      
      <p class="mb-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't quite anything embarrassing hidden in the middle of text.</p>
      
      <ul class="list-disc pl-6 space-y-2 mb-8 text-gray-600">
        <li>Breath deeply and count to ten</li>
        <li>Visualize a peaceful place</li>
        <li>Focus on what you can control</li>
        <li>Step away from the situation if needed</li>
      </ul>
      
      <p class="mb-6">All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
    `
  },
  'our-proprietary-enables-quality': {
    title: 'Our proprietary enables Quality.',
    date: 'August 15, 2024',
    author: 'Optimal X Team',
    category: 'Services',
    image: '/images/blog-toilet.jpg',
    content: `
      <p class="mb-6">Apartment cleaning is more than just a chore; it's a science. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
      
      <p class="mb-6">CleanNet's proprietary software enables CleanNet Quality Assurance employees to monitor cleaning and maintenance standards and take action when necessary, from solving basic problems to incorporating remedial training quality levels at each site.</p>
      
      <h3 class="text-2xl font-bold text-[#062265] mt-8 mb-4">Quality Assurance Process</h3>
      
      <p class="mb-6">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      
      <div class="bg-blue-50 p-6 rounded-lg my-8">
        <h4 class="font-bold text-[#0072ff] mb-2">Key Benefits:</h4>
        <ul class="space-y-2 text-gray-700">
          <li>✓ Real-time monitoring of service quality</li>
          <li>✓ Instant feedback loop for cleaners</li>
          <li>✓ Data-driven improvements</li>
          <li>✓ Consistent standards across all locations</li>
        </ul>
      </div>
      
      <p class="mb-6">As a app web crawler expert, I help organizations adjust to the expanding significance of internet promoting. Especially in capital projects and the suppliers and consultants that work for you know the value of a customer like that.</p>
    `
  },
  'locate-optimal-x-office-near-you': {
    title: 'Locate Optimal X Office Near You.',
    date: 'July 12, 2024',
    author: 'Optimal X Team',
    category: 'News',
    image: '/images/blog-office.jpg',
    content: `
      <p class="mb-6">We are expanding! It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
      
      <p class="mb-6">Content without backward-compatible data. As a app web crawler expert, I help organizations adjust to the expanding significance of internet promoting. placeholder text for use in your graphic, print.</p>
      
      <h3 class="text-2xl font-bold text-[#062265] mt-8 mb-4">New Locations Opening Soon</h3>
      
      <p class="mb-6">The intruders chased the girl in the house and threatened her when she hid from them, according to the PSNI Limavady Facebook page. "She came out petrified with her Piggy Bank, HER PIGGY BANK! hoping that the men would take it and leave her dad alone," one outraged officer wrote.</p>
      
      <blockquote class="border-l-4 border-[#0072ff] pl-6 italic text-xl text-gray-700 my-8">
        "As a consultant executing two projects for a large multinational, I realise how very difficult it sometimes can be on the receiving end."
      </blockquote>
      
      <p class="mb-6">We are committed to bringing our top-tier services closer to you. Check our website regularly for updates on new office openings in your area.</p>
    `
  }
};

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts[slug as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center flex-col">
        <h1 className="text-4xl font-bold text-[#062265] mb-4">Post Not Found</h1>
        <Link to="/" className="text-[#0072ff] hover:underline flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Return Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <div className="relative h-[400px] lg:h-[500px]">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center text-white">
            <span className="bg-[#0072ff] px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide mb-4 inline-block">
              {post.category}
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight max-w-4xl mx-auto">
              {post.title}
            </h1>
            <div className="flex items-center justify-center gap-6 text-sm lg:text-base">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                {post.date}
              </div>
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                {post.author}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                5 min read
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <article className="lg:w-2/3">
            <div 
              className="prose prose-lg max-w-none text-gray-600 prose-headings:text-[#062265] prose-a:text-[#0072ff]"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            {/* Share Section */}
            <div className="border-t border-gray-100 mt-12 pt-8 flex items-center justify-between">
              <div className="font-bold text-[#062265]">Share this post:</div>
              <div className="flex gap-4">
                <button className="p-2 rounded-full bg-gray-100 hover:bg-[#0072ff] hover:text-white transition-colors">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:w-1/3 space-y-8">
            {/* Search Widget */}
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-[#062265] mb-4">Search</h3>
              <input 
                type="text" 
                placeholder="Search..." 
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#0072ff]"
              />
            </div>

            {/* Categories Widget */}
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-[#062265] mb-4">Categories</h3>
              <ul className="space-y-3">
                {['Tips', 'Services', 'News', 'Cleaning', 'Maintenance'].map((cat) => (
                  <li key={cat} className="flex items-center justify-between group cursor-pointer">
                    <span className="text-gray-600 group-hover:text-[#0072ff] transition-colors">{cat}</span>
                    <span className="bg-white px-2 py-1 rounded text-xs text-gray-400 group-hover:bg-[#0072ff] group-hover:text-white transition-colors">
                      {Math.floor(Math.random() * 10) + 1}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recent Posts Widget */}
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-[#062265] mb-6">Recent Posts</h3>
              <div className="space-y-6">
                {Object.entries(blogPosts).map(([key, p]) => (
                  key !== slug && (
                    <Link key={key} to={`/blog/${key}`} className="flex gap-4 group">
                      <img src={p.image} alt={p.title} className="w-20 h-20 object-cover rounded-lg" />
                      <div>
                        <span className="text-xs text-[#0072ff] font-medium block mb-1">{p.date}</span>
                        <h4 className="font-bold text-[#062265] text-sm leading-snug group-hover:text-[#0072ff] transition-colors">
                          {p.title}
                        </h4>
                      </div>
                    </Link>
                  )
                ))}
              </div>
            </div>
          </aside>
        </div>
      </main>

      <ContactCTA />
      <Footer />
    </div>
  );
}
