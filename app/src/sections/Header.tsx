import { useState, useEffect } from 'react';
import { Phone, Mail, Facebook, Twitter, Linkedin, Instagram, Search, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Blog', href: '#blog' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-[#0a1a3a] text-white py-2.5">
        <div className="container mx-auto px-4 flex flex-wrap items-center justify-between">
          <div className="flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#00c853]" />
              <span className="text-gray-400">Call for help:</span>
              <a href="tel:+12354623257" className="hover:text-[#00c853] transition-colors">
                (+123) 5462 3257
              </a>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#00c853]" />
              <span className="text-gray-400">Mail to us:</span>
              <a href="mailto:info@optimalx.com" className="hover:text-[#00c853] transition-colors">
                info@optimalx.com
              </a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#0072ff] transition-colors">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#0072ff] transition-colors">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#0072ff] transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#0072ff] transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className={`transition-all duration-300 ${isScrolled ? 'fixed top-0 left-0 right-0 z-50 shadow-lg' : ''}`}>
        <div className={`${isScrolled ? 'bg-white' : 'bg-[#0072ff]'}`}>
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-20">
              {/* Logo */}
              <a href="#home" className="flex items-center">
                <img 
                  src="/images/logo-optimal-x.jpg" 
                  alt="Optimal X" 
                  className="h-14 w-auto object-contain"
                />
              </a>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center gap-1">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.href)}
                    className={`px-4 py-2 text-sm font-medium transition-colors ${
                      isScrolled 
                        ? 'text-gray-700 hover:text-[#0072ff]' 
                        : 'text-white hover:text-white/80'
                    }`}
                  >
                    {link.name}
                  </button>
                ))}
              </nav>

              {/* Search & Mobile Menu */}
              <div className="flex items-center gap-3">
                {/* Search */}
                <div className="relative hidden md:block">
                  {isSearchOpen ? (
                    <div className="flex items-center">
                      <Input 
                        type="text" 
                        placeholder="Search..." 
                        className="w-48 h-9 text-sm"
                        autoFocus
                      />
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="ml-1"
                        onClick={() => setIsSearchOpen(false)}
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  ) : (
                    <Button 
                      variant="ghost" 
                      size="icon"
                      onClick={() => setIsSearchOpen(true)}
                      className={isScrolled ? 'text-gray-700' : 'text-white hover:text-white/80'}
                    >
                      <Search className="w-5 h-5" />
                    </Button>
                  )}
                </div>

                {/* Mobile Menu Button */}
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="lg:hidden"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  {isMobileMenuOpen ? (
                    <X className={`w-6 h-6 ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
                  ) : (
                    <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white shadow-lg">
            <nav className="flex flex-col py-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="px-6 py-3 text-left text-gray-700 hover:bg-gray-50 hover:text-[#0072ff] transition-colors"
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
