import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FAQItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="border-b border-white/20 last:border-b-0 mb-2">
      <button
        onClick={onToggle}
        className="w-full text-left py-4 px-0 flex justify-between items-center hover:text-green-400 transition-colors duration-200"
      >
        <h3 className="text-lg font-semibold text-white pr-4">{question}</h3>
        <div className="flex-shrink-0 transition-transform duration-300">
          <span className="w-5 h-5 inline-block text-green-400">{isOpen ? '▾' : '▸'}</span>
        </div>
      </button>
             <div 
         className={`overflow-hidden transition-all duration-300 ease-in-out ${
           isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
         }`}
       >
         <div className="pb-4">
           <p className="text-white/80 leading-relaxed">{answer}</p>
         </div>
       </div>
    </div>
  );
};

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState(0);

  const faqs = [
    {
      question: "What is Copym and how does it work?",
      answer: "Copym is a real-world asset tokenization platform that allows you to invest in fractional ownership of high-value assets like real estate, commodities, carbon credits, and luxury items. Our marketplace connects investors with exclusive investment opportunities."
    },
    {
      question: "What types of assets can I invest in on Copym?",
      answer: "Our marketplace offers diverse real-world assets including commercial and residential real estate, precious metals, renewable energy projects, carbon credits, fine art, and luxury collectibles - all available for fractional ownership starting from small amounts."
    },
    {
      question: "How secure is my investment on Copym?",
      answer: "Your investments are protected with institutional-grade security, blockchain transparency, and regulatory compliance. All assets are legally tokenized and backed by real-world value, with your ownership recorded on secure blockchain technology."
    },
    {
      question: "What are the benefits of investing through Copym?",
      answer: "Enjoy passive income from rental yields and asset appreciation, diversify your portfolio with institutional-grade investments, access previously unavailable opportunities, and trade your fractional ownership anytime through our integrated marketplace."
    }
  ];

  return (
    <section className="relative">


      {/* Main Content */}
      <div className="relative z-10 bg-gradient-to-br from-emerald-600 to-emerald-700 backdrop-blur-sm rounded-t-[2rem] sm:rounded-t-[3rem] lg:rounded-t-[4rem] rounded-b-[2rem] sm:rounded-b-[3rem] lg:rounded-b-[4rem] pt-10 sm:pt-12 lg:pt-14 pb-12 sm:pb-14 lg:pb-16 overflow-hidden">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* FAQ Content */}
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-10 relative z-10">
                         {/* Left Side - FAQ List */}
            <div className="lg:col-span-2">
              {faqs.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openFAQ === index}
                  onToggle={() => setOpenFAQ(openFAQ === index ? -1 : index)}
                />
              ))}
            </div>

           {/* Right Side - Support Info */}
           <div className="lg:col-span-1 flex flex-col justify-center">
             <div className="text-center lg:text-left">
               <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                 FAQs
               </h3>
               <p className="text-white/80 text-lg mb-6">
                 Still got questions?
               </p>
               <p className="text-white/70 text-base mb-8 leading-relaxed">
                 These frequently asked questions might have the answer, but if not, our support team is just a message away!
               </p>
               <Link
                 to="/contact"
                 className="inline-flex items-center justify-center px-6 py-3 bg-white hover:bg-gray-100 text-gray-900 font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
               >
                 Contact Support
                 <span className="ml-2">→</span>
               </Link>
             </div>
           </div>
         </div>
        </div>
      </div>
    </section>
  );
}
