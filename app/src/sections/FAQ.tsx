import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

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
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Content */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <HelpCircle className="w-5 h-5 text-[#00c853]" />
              <span className="text-[#0072ff] font-medium">FAQ</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0a1a3a] mb-4">
              You will learn more from<br />
              <span className="text-[#0072ff]">our FAQ.</span>
            </h2>
            <p className="text-gray-600 mb-8">
              Follow our latest news and thoughts which focuses exclusively on design, art, vintage, and also work updates.
            </p>

            {/* FAQ Items */}
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div 
                  key={faq.id}
                  className="bg-white rounded-lg shadow-sm overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-medium text-[#0a1a3a] pr-4">{faq.question}</span>
                    <ChevronDown 
                      className={`w-5 h-5 text-[#0072ff] flex-shrink-0 transition-transform duration-300 ${
                        openId === faq.id ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div 
                    className={`overflow-hidden transition-all duration-300 ${
                      openId === faq.id ? 'max-h-48' : 'max-h-0'
                    }`}
                  >
                    <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative lg:sticky lg:top-24">
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="/images/service-bathroom.jpg" 
                alt="Cleaning Service FAQ"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a3a]/60 to-transparent" />
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-[#0072ff] text-white p-6 rounded-lg shadow-xl max-w-xs">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-white/80 text-sm">Customer Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
