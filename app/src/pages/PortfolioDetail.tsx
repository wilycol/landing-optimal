import { useParams, Link } from 'react-router-dom';
import { Calendar, MapPin, User, CheckCircle, ArrowLeft } from 'lucide-react';
import { portfolioItems } from '@/data/portfolio';
import Header from '@/sections/Header';
import Footer from '@/sections/Footer';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';

export default function PortfolioDetail() {
  const { slug } = useParams();
  const item = portfolioItems.find(p => p.slug === slug);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!item) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <div className="flex-1 flex flex-col items-center justify-center py-20">
            <h1 className="text-4xl font-bold mb-4 text-[#0a1a3a]">Project Not Found</h1>
            <p className="text-gray-600 mb-8">The portfolio item you are looking for does not exist.</p>
            <Link to="/">
                <Button className="bg-[#0072ff] hover:bg-[#005bb5]">Go Back Home</Button>
            </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Page Header */}
      <div className="bg-[#062265] py-24 lg:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl">
                <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">{item.title}</h1>
                <div className="flex items-center gap-3 text-white/80 text-sm font-medium tracking-wide">
                    <Link to="/" className="hover:text-white transition-colors">HOME</Link>
                    <span>/</span>
                    <span className="text-white">PORTFOLIO</span>
                    <span>/</span>
                    <span className="text-[#00c853]">{item.title.toUpperCase()}</span>
                </div>
            </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#00c853]/10 rounded-full translate-y-1/2 -translate-x-1/3 blur-2xl" />
      </div>

      <main className="py-20 lg:py-24">
        <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
                {/* Main Content */}
                <div className="lg:col-span-2">
                    <div className="rounded-2xl overflow-hidden shadow-xl mb-10 group">
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-full h-auto transition-transform duration-700 group-hover:scale-105" 
                        />
                    </div>
                    
                    <h2 className="text-3xl font-bold text-[#0a1a3a] mb-6">Project Description</h2>
                    <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                        {item.description}
                        We take pride in delivering exceptional results for every client. Our team uses state-of-the-art equipment and eco-friendly products to ensure a safe and thorough cleaning process.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-10 text-lg">
                        Whether it's a residential property or a commercial space, we approach each project with the same level of dedication and attention to detail. Our goal is not just to clean, but to transform your environment into a healthier, more inviting space.
                    </p>

                    <h3 className="text-2xl font-bold text-[#0a1a3a] mb-6">Key Challenges & Solutions</h3>
                    <div className="grid sm:grid-cols-2 gap-6 mb-10">
                        {[
                          'Stain removal from delicate fabrics',
                          'High-reach window cleaning',
                          'Eco-friendly sanitization',
                          'Rapid turnaround time'
                        ].map((challenge, i) => (
                            <div key={i} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                                <div className="w-8 h-8 rounded-full bg-[#00c853]/10 flex items-center justify-center flex-shrink-0">
                                  <CheckCircle className="w-5 h-5 text-[#00c853]" />
                                </div>
                                <span className="text-gray-700 font-medium pt-1">{challenge}</span>
                            </div>
                        ))}
                    </div>
                    
                    {/* Navigation Buttons */}
                    <div className="flex justify-between items-center pt-8 border-t border-gray-100">
                        <Link to="/" className="inline-flex items-center gap-2 text-[#0072ff] font-bold hover:underline">
                            <ArrowLeft className="w-4 h-4" /> Back to Portfolio
                        </Link>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-1">
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 sticky top-28">
                        <h3 className="text-xl font-bold text-[#0a1a3a] mb-6 pb-4 border-b border-gray-100">Project Information</h3>
                        
                        <div className="space-y-6">
                            <div className="flex items-start gap-4 group">
                                <div className="w-10 h-10 rounded-full bg-[#0072ff]/5 flex items-center justify-center group-hover:bg-[#0072ff] transition-colors duration-300">
                                  <User className="w-5 h-5 text-[#0072ff] group-hover:text-white transition-colors duration-300" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#0a1a3a] text-sm uppercase tracking-wider mb-1">Client</h4>
                                    <p className="text-gray-600 font-medium">{item.client || 'Private Client'}</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start gap-4 group">
                                <div className="w-10 h-10 rounded-full bg-[#0072ff]/5 flex items-center justify-center group-hover:bg-[#0072ff] transition-colors duration-300">
                                  <MapPin className="w-5 h-5 text-[#0072ff] group-hover:text-white transition-colors duration-300" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#0a1a3a] text-sm uppercase tracking-wider mb-1">Location</h4>
                                    <p className="text-gray-600 font-medium">{item.location || 'London, UK'}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 group">
                                <div className="w-10 h-10 rounded-full bg-[#0072ff]/5 flex items-center justify-center group-hover:bg-[#0072ff] transition-colors duration-300">
                                  <Calendar className="w-5 h-5 text-[#0072ff] group-hover:text-white transition-colors duration-300" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#0a1a3a] text-sm uppercase tracking-wider mb-1">Date</h4>
                                    <p className="text-gray-600 font-medium">{item.date || '2024'}</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10 pt-8 border-t border-gray-100">
                            <h4 className="font-bold text-[#0a1a3a] mb-4 text-center">Need a similar service?</h4>
                            <Link to="/#contact" className="block">
                                <Button className="w-full bg-[#0072ff] hover:bg-[#005bb5] text-white font-bold py-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
                                    Get a Free Quote
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
