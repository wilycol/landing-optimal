import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Blog', href: '#blog' },
];

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for subscribing!');
    setEmail('');
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0a1a3a] text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <img 
                src="/images/logo-optimal-x.jpg" 
                alt="Optimal X" 
                className="h-16 w-auto object-contain bg-white rounded-lg p-2"
              />
            </div>
            <h3 className="text-xl font-bold mb-4">We are Optimal X!</h3>
            <p className="text-white/70 text-sm mb-6 leading-relaxed">
              We work with a passion of taking challenges and creating new ones in advertising sector.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Clock className="w-4 h-4 text-[#00c853]" />
                <span className="text-white/70">Open Hours:</span>
              </div>
              <p className="text-white/70 text-sm pl-7">
                Mon – Sat: 8 am – 5 pm,<br />
                Sunday: CLOSED
              </p>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-6">Newsletter</h3>
            <p className="text-white/70 text-sm mb-4">
              Subscribe our newsletter to get our latest update & news
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="relative">
                <Input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 pr-12 h-12"
                  required
                />
                <Button 
                  type="submit"
                  size="icon"
                  className="absolute right-1 top-1 h-10 w-10 bg-[#0072ff] hover:bg-[#005bb5]"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </form>

            {/* Social Links */}
            <div className="mt-6">
              <p className="text-white/70 text-sm mb-3">Follow us:</p>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#0072ff] transition-colors">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#0072ff] transition-colors">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#0072ff] transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#0072ff] transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Official Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Official info:</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#00c853] flex-shrink-0 mt-0.5" />
                <p className="text-white/70 text-sm">
                  30 Commercial Road Fratton,<br />
                  Australia
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#00c853] flex-shrink-0" />
                <a href="tel:+18884521505" className="text-white/70 text-sm hover:text-[#00c853] transition-colors">
                  1-888-452-1505
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#00c853] flex-shrink-0" />
                <a href="mailto:info@optimalx.com" className="text-white/70 text-sm hover:text-[#00c853] transition-colors">
                  info@optimalx.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#00c853] flex-shrink-0" />
                <a href="mailto:support@optimalx.com" className="text-white/70 text-sm hover:text-[#00c853] transition-colors">
                  support@optimalx.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/70 text-sm hover:text-[#00c853] transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm text-center md:text-left">
              © {new Date().getFullYear()} All rights reserved by{' '}
              <a href="#" className="text-[#0072ff] hover:text-[#00c853] transition-colors">
                Optimal X
              </a>
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-white/60 text-sm hover:text-[#00c853] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/60 text-sm hover:text-[#00c853] transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
