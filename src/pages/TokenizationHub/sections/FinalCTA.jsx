import React from 'react';
import {GiCheckMark } from 'react-icons/gi';
import { Link } from 'react-router-dom';

export default function FinalCTA() {
  const analyticsFeatures = [
    'ROI Tracking & Performance Analytics',
    'SEC Compliance & Tax Reporting',
    'Investor Behavior & Demographics',
    'Market Trends & Competitive Analysis'
  ];

  return (
    <section className="relative py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-cyan-400/20"></div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/10 to-transparent rounded-t-[100px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Analytics Features */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Data-Driven Decisions</h3>
            <div className="space-y-4">
              {analyticsFeatures.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <GiCheckMark className="w-5 h-5 text-green-400" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Final CTA */}
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to Build the Future?</h3>
            <p className="text-gray-700 mb-8">
              Join thousands of issuers who trust our platform for their tokenization needs.
            </p>
            <button className="inline-flex items-center justify-center px-8 py-4 font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Start Tokenizing
            
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
