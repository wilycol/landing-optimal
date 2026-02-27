import { Phone, Mail } from 'lucide-react';

export default function ContactCTA() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#0072ff]">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Want to<br />
              Contact with us?
            </h2>
            <p className="text-white/80 text-lg">
              We are here to help you with all your cleaning needs. Reach out to us today!
            </p>
          </div>

          {/* Right Content - Contact Info */}
          <div className="flex flex-col sm:flex-row gap-6">
            {/* Call Us */}
            <div className="flex-1 bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-colors">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-[#0072ff]" />
              </div>
              <p className="text-white/70 text-sm mb-2">Call us:</p>
              <a 
                href="tel:+12588455421" 
                className="text-white text-xl font-bold hover:text-[#00c853] transition-colors"
              >
                +125-8845-5421
              </a>
            </div>

            {/* Divider */}
            <div className="hidden sm:flex items-center">
              <div className="text-white/50 text-sm font-medium">or</div>
            </div>

            {/* Mail Us */}
            <div className="flex-1 bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-colors">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-[#0072ff]" />
              </div>
              <p className="text-white/70 text-sm mb-2">Mail us:</p>
              <a 
                href="mailto:info@optimalx.com" 
                className="text-white text-xl font-bold hover:text-[#00c853] transition-colors"
              >
                info@optimalx.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
