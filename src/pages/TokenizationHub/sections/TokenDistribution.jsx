// src/pages/TokenizationHub/sections/TokenDistribution.jsx

import React from 'react';
import { motion } from 'framer-motion';
import t3Image from '/assets/Images/icons/t3.png';
import t8Image from '/assets/Images/icons/t8.png';
import t9Image from '/assets/Images/icons/t9.png';
import t6Image from '/assets/Images/icons/t6.png';

export default function TokenDistribution() {
  const features = [
    {
      icon: t3Image,
      title: "Global Distribution",
      description: "Reach investors worldwide with automated compliance and multi-jurisdictional support.",
      color: "from-pink-500 to-teal-500"
    },
    {
      icon: t8Image,
      title: "Investor Onboarding",
      description: "Streamlined KYC/AML verification with instant investor qualification and onboarding.",
      color: "from-yellow-500 to-green-500"
    },
    {
      icon: t9Image,
      title: "Liquidity Management",
      description: "Automated market making and liquidity provision for seamless trading experience.",
      color: "from-pink-500 via-blue-500 to-green-500"
    },
    {
      icon: t6Image,
      title: "Regulatory Compliance",
      description: "Built-in compliance frameworks ensuring adherence to global securities regulations.",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="relative">
      {/* Main Content */}
      <div className="relative z-10 bg-emerald-600 rounded-t-[2rem] sm:rounded-t-[3rem] lg:rounded-t-[4rem] rounded-b-[2rem] sm:rounded-b-[3rem] lg:rounded-b-[4rem] pt-16 sm:pt-20 lg:pt-24 pb-20 sm:pb-24 lg:pb-32 overflow-hidden">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Title */}
          <div className="text-center mb-16 sm:mb-20 lg:mb-24">
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight anton-regular mb-6">
              <span className="text-white">TOKEN</span>
              <br />
              <span className="text-black">DISTRIBUTION</span>
            </h2>
            <p className="text-white/80 text-lg sm:text-xl max-w-3xl mx-auto">
              Reach global investors with automated compliance, seamless onboarding, and intelligent liquidity management.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group relative"
              >
                {/* Icon */}
                <div className="flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  {feature.icon ? (
                    <img src={feature.icon} 
                    alt={feature.title} 
                    className="icon filter brightness-125 contrast-125"/>
                  ) : (
                    <feature.icon className="w-8 h-8 text-white" />
                  )}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-white/80 leading-relaxed mb-6">{feature.description}</p>

                {/* CTA Link */}
                <button className="inline-flex items-center text-white font-semibold text-sm hover:text-white/80 transition-colors duration-200">
                  Learn More <span className="ml-2">→</span>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}