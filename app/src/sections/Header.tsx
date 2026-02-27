import { useState } from 'react';
import { Menu, X, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="w-full fixed top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <img 
              src="/images/logo-optimal-x.jpg" 
              alt="Optimal X" 
              className="h-14 w-auto object-contain" 
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-sm font-medium text-gray-600 hover:text-primary transition-colors"
              >
                {link.name}
              </button>
            ))}
            <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-6">
              Get Quote
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-600"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div 
          className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 lg:hidden ${
            isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Mobile Menu Sidebar */}
        <div 
          className={`fixed top-0 left-0 bottom-0 w-[300px] bg-white z-50 shadow-2xl transition-transform duration-300 ease-in-out lg:hidden ${
            isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="p-6 h-full overflow-y-auto">
            {/* Header: Logo & Close */}
            <div className="flex items-center justify-between mb-8">
              <img 
                src="/images/logo-optimal-x.jpg" 
                alt="Optimal X" 
                className="h-10 w-auto object-contain" 
              />
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-gray-500" />
              </button>
            </div>

            {/* Search Bar */}
            <div className="relative mb-8">
              <input 
                type="text" 
                placeholder="Search..." 
                className="w-full h-12 pl-4 pr-12 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-primary transition-colors"
              />
              <button className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary">
                <Search className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="py-4 border-b border-gray-100 text-gray-600 font-medium hover:text-primary transition-colors flex justify-between items-center group"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Contact Info */}
            <div className="mt-8 space-y-4">
              <div className="text-sm text-gray-500">
                <p className="mb-2 font-bold text-primary">Contact Us</p>
                <p>1-888-452-1505</p>
                <p>info@optimalx.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
