import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for subscribing!');
    setEmail('');
  };

  return (
    <footer className="bg-primary text-white pt-20">
      {/* Main Footer */}
      <div className="container mx-auto px-4 pb-16 border-b border-white/10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg">
                <img 
                  src="/images/logo-optimal-x.jpg" 
                  alt="Optimal X" 
                  className="h-8 w-auto object-contain" 
                />
              </div>
            </div>
            <p className="text-gray-300 text-base mb-8 leading-relaxed">
              We work with a passion of taking challenges and creating new ones in advertising sector.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                   <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="text-white font-bold block mb-1">Open Hours:</span>
                  <span className="text-gray-300 text-sm">Mon – Sat: 8 am – 5 pm,<br />Sunday: CLOSED</span>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-2 lg:pl-12">
            <h3 className="text-2xl font-bold mb-8 relative inline-block">
              Newsletter
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-secondary rounded-full"></span>
            </h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Subscribe our newsletter to get our latest update & news
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-4 max-w-md mb-10">
              <div className="relative flex-1">
                <Input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-400 h-14 rounded-full px-6 w-full focus:border-secondary focus:ring-secondary"
                  required
                />
                <Button 
                  type="submit"
                  className="absolute right-1 top-1 h-12 w-12 rounded-full bg-secondary hover:bg-secondary/80 flex items-center justify-center p-0"
                >
                  <Send className="w-5 h-5 text-white" />
                </Button>
              </div>
            </form>

            {/* Social Links */}
            <div>
              <p className="text-white font-bold mb-4">Follow us:</p>
              <div className="flex gap-3">
                {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all duration-300 group">
                    <Icon className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Official Info */}
          <div>
            <h3 className="text-2xl font-bold mb-8 relative inline-block">
              Official info:
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-secondary rounded-full"></span>
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 group">
                <MapPin className="w-6 h-6 text-secondary mt-1 group-hover:animate-bounce" />
                <span className="text-gray-300 leading-relaxed">30 Commercial Road Fratton, Australia</span>
              </li>
              <li className="flex items-center gap-4 group">
                <Phone className="w-6 h-6 text-secondary group-hover:rotate-12 transition-transform" />
                <span className="text-gray-300">1-888-452-1505</span>
              </li>
              <li className="flex items-center gap-4 group">
                <Mail className="w-6 h-6 text-secondary group-hover:scale-110 transition-transform" />
                <span className="text-gray-300">info@optimalx.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="bg-[#041644] py-8">
        <div className="container mx-auto px-4 text-center text-gray-400 text-sm">
          <p>© 2024 Optimal X. All Rights Reserved by <span className="text-white font-medium">WilyCol</span></p>
        </div>
      </div>
    </footer>
  );
}
