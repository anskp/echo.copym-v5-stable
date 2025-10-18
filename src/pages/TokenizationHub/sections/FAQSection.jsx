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

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState(0);

  const faqs = [
    {
      question: "What does the end‑to‑end tokenization flow look like?",
      answer: "Intake and due‑diligence → audited contract deployment → mint with transfer rules → investor onboarding → listing and lifecycle management. Most pilots complete in days."
    },
    {
      question: "Which assets are best suited for tokenization?",
      answer: "Income‑producing real estate, commodities, carbon credits, private equity, and revenue streams. If ownership and cash flows are verifiable, we can structure it."
    },
    {
      question: "What chains and standards can I choose from?",
      answer: "Ethereum, Polygon, Solana, Avalanche, BSC and L2s with ERC‑20/721/1155/1400 and SPL. We recommend based on cost, liquidity, and compliance needs."
    },
    {
      question: "How do compliance and investor eligibility work?",
      answer: "KYC/AML and jurisdiction checks are embedded. Allow/deny lists and accreditation are enforced at the token level so only eligible wallets can hold or trade."
    },
    {
      question: "How are payouts and reporting handled?",
      answer: "Dashboards automate pro‑rata USDC distributions with on‑chain receipts and downloadable statements for accounting and audits."
    },
    {
      question: "What security measures are in place for wallet infrastructure?",
      answer: "We implement enterprise-grade multi-signature wallet infrastructure featuring 256-bit encryption, hardware security modules, and comprehensive audit trails to ensure maximum protection of assets."
    },
    {
      question: "How are smart contracts secured?",
      answer: "All smart contracts undergo thorough third-party audits by leading security firms, including comprehensive vulnerability testing and compliance checks to ensure robust security."
    },
    {
      question: "What compliance frameworks are implemented?",
      answer: "Our platform incorporates built-in regulatory compliance and risk management protocols, including SEC compliance, KYC/AML procedures, and automated regulatory reporting systems."
    },
    {
      question: "How do you prevent fraud?",
      answer: "We employ advanced AI-powered fraud detection and prevention systems with real-time monitoring, sophisticated AI algorithms, and proactive threat prevention mechanisms."
    }
  ];

  return (
    <section className="relative">
      {/* Main Content */}
      <div className="relative z-10 bg-emerald-600 rounded-t-[2rem] sm:rounded-t-[3rem] lg:rounded-t-[4rem] rounded-b-[2rem] sm:rounded-b-[3rem] lg:rounded-b-[4rem] pt-10 sm:pt-12 lg:pt-14 pb-12 sm:pb-14 lg:pb-16 overflow-hidden">
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
                  Need guidance on structure, custody or compliance?
                </p>
                <p className="text-white/70 text-base mb-8 leading-relaxed">
                  Our specialists can review your asset, recommend a chain/standard, and outline legal options for your jurisdiction.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white hover:bg-gray-100 text-gray-900 font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  Talk to an Expert
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


