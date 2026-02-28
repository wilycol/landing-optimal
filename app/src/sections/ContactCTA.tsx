import { Phone, Mail } from 'lucide-react';

export default function ContactCTA() {
  return (
    <section id="contact" className="relative py-20 lg:py-28 bg-[#062265] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="circlePattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" className="text-white fill-current" />
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#circlePattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              Want to <span className="text-white">Contact with us?</span>
            </h2>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 pt-4">
              {/* Call Us */}
              <div className="group">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-full bg-white/10 group-hover:bg-[#0072ff] transition-colors">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white/60 font-medium text-sm uppercase tracking-wide">Call us:</span>
                </div>
                <a 
                  href="tel:+12588455421" 
                  className="text-2xl font-bold text-white hover:text-[#00c853] transition-colors block"
                >
                  +125-8845-5421
                </a>
              </div>

              {/* Divider */}
              <div className="hidden sm:flex flex-col items-center self-stretch justify-center px-4">
                <div className="h-full border-l-2 border-dashed border-white/20 relative">
                  <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#062265] text-white/40 text-xs font-bold px-1">
                    or
                  </span>
                </div>
              </div>

              {/* Mail Us */}
              <div className="group">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-full bg-white/10 group-hover:bg-[#0072ff] transition-colors">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white/60 font-medium text-sm uppercase tracking-wide">Mail us:</span>
                </div>
                <a 
                  href="mailto:info@optimalx.com" 
                  className="text-2xl font-bold text-white hover:text-[#00c853] transition-colors block"
                >
                  info@optimalx.com
                </a>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative hidden lg:block">
            <div className="relative z-10 rounded-[3rem] overflow-hidden border-4 border-white/10 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
              <img 
                src="/images/about-team.jpg" 
                alt="Support Team" 
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#062265]/60 to-transparent" />
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-[#0072ff]/30 rounded-[3rem] -z-10" />
          </div>
        </div>
      </div>

      {/* Floating Logo Badge removed from here to be placed in Footer for better overlap control */}
    </section>
  );
}
