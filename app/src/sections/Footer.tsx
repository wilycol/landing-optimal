import { useState } from 'react';
import { MapPin, Phone, Mail, Send, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for subscribing!');
    setEmail('');
  };

  const instagramImages = [
    '/images/portfolio-car.jpg',
    '/images/portfolio-furniture.jpg',
    '/images/portfolio-kitchen.jpg',
    '/images/portfolio-window.jpg',
    '/images/service-bathroom.jpg',
    '/images/service-house.jpg',
  ];

  return (
    <footer className="relative bg-[#030e29] text-white pt-24 mt-0">
       {/* Floating Logo Badge Overlapping Contact Section */}
       <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
        <div className="w-32 h-32 bg-white rounded-full shadow-2xl flex items-center justify-center p-5 border-[8px] border-[#030e29]">
          <img 
            src="/images/logo-optimal-x.jpg" 
            alt="Optimal X Logo" 
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 pb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Col 1: We are Optimal X */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">We are Optimal X!</h3>
            <p className="text-gray-400 text-sm mb-8 leading-relaxed">
              We work with a passion of taking challenges and creating new ones in advertising sector.
            </p>
            <div className="space-y-4">
              <div className="mb-2">
                 <span className="text-white font-bold block mb-1">Open Hours:</span>
                 <span className="text-gray-400 text-sm">Mon – Sat: 8 am – 5 pm,<br />Sunday: CLOSED</span>
              </div>
            </div>
          </div>

          {/* Col 2: Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-6">
              Subscribe our newsletter to get our latest update & news
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2 mb-8">
                <Input
                  type="email"
                  placeholder="Your mail address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-[#0b1a3b] border-none text-white placeholder:text-gray-500 h-12 rounded-none focus:ring-1 focus:ring-[#0072ff]"
                  required
                />
                <Button 
                  type="submit"
                  className="h-12 w-12 rounded-none bg-[#0072ff] hover:bg-[#005bb5] flex items-center justify-center p-0"
                >
                  <Send className="w-4 h-4 text-white" />
                </Button>
            </form>
            <div className="flex gap-4">
                {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                  <a key={i} href="#" className="text-[#0072ff] hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
            </div>
          </div>

          {/* Col 3: Official Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Official info:</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-3 group">
                <MapPin className="w-5 h-5 text-[#0072ff] mt-1 shrink-0" />
                <span className="text-gray-400 text-sm leading-relaxed">30 Commercial Road Fratton, Australia</span>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone className="w-5 h-5 text-[#0072ff] shrink-0" />
                <span className="text-gray-400 text-sm">1-888-452-1505</span>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail className="w-5 h-5 text-[#0072ff] shrink-0" />
                <span className="text-gray-400 text-sm">info@optimalx.com</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Instagram Gallery */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Instagram</h3>
            <div className="grid grid-cols-3 gap-2">
              {instagramImages.map((src, index) => (
                <a key={index} href="#" className="block aspect-square overflow-hidden group relative">
                  <img 
                    src={src} 
                    alt={`Gallery ${index}`} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[#0072ff]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Instagram className="w-4 h-4 text-white" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="bg-[#020817] py-8 border-t border-white/5">
        <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
          <p>2026 © All rights reserved by <span className="text-[#0072ff] font-medium cursor-pointer hover:underline">Optimal X Themes</span></p>
        </div>
      </div>
    </footer>
  );
}
