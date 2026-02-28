import { useState } from 'react';
import { ChevronDown, Sparkles, X } from 'lucide-react';

const faqs = [
  {
    id: 1,
    question: 'What should I include in my personal statement?',
    answer: 'Lorem ipsum dolor sit amet consecte tur adipiscing elit sed do eiusmod tempor incididunt ut labore. Our team will guide you through the entire process to ensure your space is cleaned to the highest standards.',
  },
  {
    id: 2,
    question: 'What will happen when I\'ve sent my application?',
    answer: 'Once we receive your application, our team will review it within 24 hours and contact you to schedule a consultation. We will discuss your specific needs and provide a customized cleaning plan.',
  },
  {
    id: 3,
    question: 'How can I make a change to my application?',
    answer: 'You can easily make changes to your application by contacting our customer service team via phone or email. We are always happy to accommodate changes to ensure your complete satisfaction.',
  },
  {
    id: 4,
    question: 'How can I consult with the cleaning team?',
    answer: 'You can consult with our cleaning team by scheduling an appointment through our website or by calling our customer service line. Our experts are available 24/7 to answer your questions.',
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Content - Image */}
          <div className="relative lg:sticky lg:top-24 order-2 lg:order-1">
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="/images/service-bathroom.jpg" 
                alt="Cleaning Service FAQ"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a3a]/60 to-transparent" />
            </div>
            
            {/* Floating Card - Moved to right side for balance since image is on left */}
            <div className="absolute -bottom-6 -right-6 lg:-right-10 bg-[#0072ff] text-white p-6 rounded-lg shadow-xl max-w-xs z-10">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-white/80 text-sm">Customer Support Available</div>
            </div>
          </div>

          {/* Right Content - FAQ */}
          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-[#0072ff]" />
              <span className="text-[#0a1a3a] font-bold uppercase tracking-wider text-sm">FAQ</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#062265] mb-6 leading-tight">
              You will learn more from<br />
              our FAQ.
            </h2>
            <p className="text-gray-500 mb-10 text-lg">
              Follow our latest news and thoughts which focuses exclusively on design, art, vintage, and also work updates.
            </p>

            {/* FAQ Items */}
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div 
                  key={faq.id}
                  className={`rounded-lg transition-all duration-300 overflow-hidden ${
                    openId === faq.id 
                      ? 'bg-white shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] border-l-4 border-[#0072ff]' 
                      : 'bg-white border border-gray-100 hover:border-gray-200'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full flex items-center justify-between p-6 text-left transition-colors"
                  >
                    <span className={`font-bold text-lg pr-4 ${
                        openId === faq.id ? 'text-[#062265]' : 'text-[#062265]'
                    }`}>
                        {faq.question}
                    </span>
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                        openId === faq.id ? 'bg-gray-100' : 'bg-transparent'
                    }`}>
                        {openId === faq.id ? (
                            <X className="w-4 h-4 text-gray-400" />
                        ) : (
                            <ChevronDown className="w-5 h-5 text-[#0072ff]" />
                        )}
                    </div>
                  </button>
                  <div 
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openId === faq.id ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 pb-6 text-gray-500 text-base leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
