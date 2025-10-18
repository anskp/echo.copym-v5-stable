import React from 'react';
import { GiBrain } from 'react-icons/gi';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function AIInvestingSection() {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 py-4 sm:py-6 lg:py-8 overflow-visible">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
          {/* Left Side - Content */}
          <div className="text-center lg:text-left space-y-4 flex-1">
            {/* Section Label */}
            <div className="inline-flex items-center space-x-2 text-green-400 font-medium text-sm">
              <GiBrain className="w-4 h-4" />
              <span>Copym AI</span>
            </div>
            
            {/* Main Headline */}
            <div className="space-y-2">
              <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-white leading-tight anton-regular">
                AI That Invests
                <br />
                <span className="text-green-400">With You</span>
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                From real-time insights to smarter decisions, let AI guide your journey to growing wealth effortlessly.
              </p>
            </div>
            
            {/* CTA Button */}
            <div className="flex justify-center lg:justify-start">
              <Link
                to="/marketplace"
                className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 font-semibold text-green-400 bg-transparent border-2 border-green-400 hover:bg-green-400 hover:text-black rounded-full transition-all duration-300 transform hover:scale-105"
              >
                See the Reveal
              </Link>
            </div>
          </div>
          
          {/* Right Side - AI Interface Image with Extended Effect */}
          <div className="relative -my-20 lg:-my-32 w-80 sm:w-96 lg:w-[32rem] xl:w-[36rem] h-auto px-12 sm:px-0 py-16 sm:py-0">
            <img 
              src="/assets/Images/aiagentphones99.png" 
              alt="Copym AI Voice Assistant Interface" 
              className="w-full h-auto rounded-2xl object-contain transform scale-125 sm:translate-y-0 translate-y-8"
              style={{
                zIndex: 20
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}