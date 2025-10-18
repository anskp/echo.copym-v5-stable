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
          isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="pb-4">
          <p className="text-white/80 leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default function FAQsection() {
  const [openFAQ, setOpenFAQ] = useState(0);

  const faqs = [
    {
      question: "How do I start investing on the marketplace?",
      answer: "Create an account, complete KYC in minutes, connect a wallet (or use custodial onboarding), and browse assets. Each listing shows minimum investment, risk band, and expected ROI."
    },
    {
      question: "What currencies and wallets are supported?",
      answer: "We support USDC on major chains and popular wallets like MetaMask and WalletConnect. Custodial wallets are available for beginners—fund with card or bank transfer."
    },
    {
      question: "Are these assets really backed by real-world value?",
      answer: "Yes. All listings are legally structured and backed by off-chain asset documentation. Title, custody and cash flows are handled by regulated partners with on-chain proofs where available."
    },
    {
      question: "Can I sell my position later?",
      answer: "Many offerings enable secondary trading during open windows. Liquidity varies by asset class. Check each listing’s ‘Liquidity & Exit’ section for specific rules and timelines."
    },
    {
      question: "What are the fees?",
      answer: "Fees are asset-specific and shown up-front: issuance fee, platform fee, and network fees if applicable. We avoid hidden charges—your net expected yield is always summarized before you confirm."
    },
    {
      question: "Is this compliant and safe?",
      answer: "We implement KYC/AML, restricted jurisdictions, and transfer rules at the token level. Smart contracts are audited, custody is institutional-grade, and investor data is protected with bank‑grade security."
    }
  ];

  return (
    <section className="relative">
      {/* Main Content */}
      <div className="relative z-10 bg-emerald-600 rounded-t-[2rem] sm:rounded-t-[3rem] lg:rounded-t-[4rem] rounded-b-[2rem] sm:rounded-b-[3rem] lg:rounded-b-[4rem] pt-10 sm:pt-12 lg:pt-14 pb-12 sm:pb-14 lg:pb-16 overflow-hidden mx-[-1px] sm:mx-[-2px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-10 relative z-10">
            {/* Left - FAQ List */}
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

            {/* Right - Help CTA */}
            <div className="lg:col-span-1 flex flex-col justify-center">
              <div className="text-center lg:text-left">
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                  FAQs
                </h3>
                <p className="text-white/80 text-lg mb-6">
                  Need more details about listings, custody or exits?
                </p>
                <p className="text-white/70 text-base mb-8 leading-relaxed">
                  Our support team can walk you through due‑diligence docs, liquidity terms, and taxes for your region.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white hover:bg-gray-100 text-gray-900 font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  Talk to Support
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


