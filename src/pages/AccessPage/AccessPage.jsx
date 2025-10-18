import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useGSAP } from '../../hooks/useGSAPAnimations';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  GiRocket, 
  GiPresent, 
  GiPerson, 
  GiTicket, 
  GiShield, 
  GiWallet, 
  GiGlobe, 
  GiDiamonds, 
  GiLockedChest, 
  GiCrown, 
  
  GiCoins,
 
} from 'react-icons/gi';

import CredentialCard from '../../components/CredentialCard';
import { LavaLamp } from '../../components/ui/fluid-blob';

// Import blockchain logos
import EthereumLogo from '/assets/blockchains/ethereum-eth-logo.svg';
import SolanaLogo from '/assets/blockchains/solana-sol-logo.svg';
import PolygonLogo from '/assets/blockchains/polygon-matic-logo.svg';
import AvalancheLogo from '/assets/blockchains/avalanche-avax-logo.svg';
import OptimismLogo from '/assets/blockchains/optimism-ethereum-op-logo.svg';
import BitcoinLogo from '/assets/blockchains/bitcoin-btc-logo.svg';
import { Box } from '@mui/material';

export default function AccessPage() {

  const pageRef = useRef(null);
  const heroRef = useRef(null);
  const benefitsRef = useRef(null);
  const featuresRef = useRef(null);
  const networksRef = useRef(null);
  const credentialRef = useRef(null);
  const ctaRef = useRef(null);

  const networks = [
    { key: 'ethereum', name: 'Ethereum', ticker: 'ETH', gradient: 'from-[#627EEA] to-[#3C5FAD]', logo: EthereumLogo },
    { key: 'solana', name: 'Solana', ticker: 'SOL', gradient: 'from-[#14F195] to-[#9945FF]', logo: SolanaLogo },
    { key: 'polygon', name: 'Polygon', ticker: 'POL', gradient: 'from-[#8247E5] to-[#6C3BB4]', logo: PolygonLogo },
    { key: 'avalanche', name: 'Avalanche', ticker: 'AVAX', gradient: 'from-[#E84142] to-[#B03334]', logo: AvalancheLogo },
    { key: 'optimism', name: 'Optimism', ticker: 'OP', gradient: 'from-[#FF0420] to-[#B30216]', logo: OptimismLogo },
    { key: 'ripple', name: 'Ripple', ticker: 'XRP', gradient: 'from-[#0A74FF] to-[#003366]', icon: '💎' }, // Keep emoji for Ripple as no logo available
    { key: 'bitcoin', name: 'Bitcoin', ticker: 'BTC', gradient: 'from-[#F7931A] to-[#C06A00]', logo: BitcoinLogo },
    { key: 'sepolia', name: 'Sepolia', ticker: 'SEP', gradient: 'from-[#8E8E8E] to-[#5A5A5A]', icon: '🔗' } // Keep emoji for Sepolia as no logo available
  ];

  const benefits = [
    { icon: GiRocket, title: "Priority Drops", description: "First in line for high-demand real-world asset listings", color: "from-blue-500 to-cyan-500" },
    { icon: GiPresent, title: "Exclusive Rewards", description: "Special NFT airdrops, discounts, and fee reductions", color: "from-purple-500 to-pink-500" },
    { icon: GiPerson, title: "Community Power", description: "Vote on future asset listings & platform features", color: "from-emerald-500 to-teal-500" },
    { icon: GiTicket, title: "VIP Events", description: "Access to private IRL & virtual events", color: "from-orange-500 to-red-500" }
  ];

  const features = [
    { icon: GiShield, title: "Compliance-first", description: "KYC/AML, transfer restrictions, whitelisting and audit trails", color: "from-blue-500 to-cyan-500" },
    { icon: GiWallet, title: "Utility & Access", description: "Early allocations, fee discounts, governance & staking perks", color: "from-purple-500 to-pink-500" },
    { icon: GiGlobe, title: "Multi-asset Support", description: "Equity, debt, real estate, commodities, carbon & more", color: "from-emerald-500 to-teal-500" },
    { icon: GiDiamonds, title: "Institutional Rails", description: "Custody, settlement, and data rooms integrated", color: "from-orange-500 to-red-500" }
  ];

  const unlockFeatures = [
    { icon: "/assets/Images/icons/a1.png", text: "Token-gated content and insider market reports" },
    { icon: "/assets/Images/icons/t4.png", text: "Lower platform trading fees" },
    { icon: "/assets/Images/icons/rwa2.png", text: "Limited-edition NFT collectibles" },
    { icon: "/assets/Images/icons/a4.png", text: "Invitations to COPYM IRL meetups and global summits" },
    { icon: "/assets/Images/icons/a5.png", text: "Early access to new asset tokenizations" },
    { icon: "/assets/Images/icons/a6.png", text: "Governance voting rights in COPYM DAO decisions" }
  ];

  // Advanced GSAP Animations
  useGSAP(pageRef, () => {
    // Register ScrollTrigger if not already registered
    if (!gsap.plugins.ScrollTrigger) {
      gsap.registerPlugin(ScrollTrigger);
    }

    // Hero section animations
    gsap.fromTo(heroRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top 80%',
          end: 'top 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Benefits cards stagger animation
    gsap.fromTo('.benefit-card',
      { opacity: 0, y: 50, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: benefitsRef.current,
          start: 'top 80%',
          end: 'top 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Features section slide-in
    gsap.fromTo('.feature-item',
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: featuresRef.current,
          start: 'top 80%',
          end: 'top 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Network cards 3D effect
    gsap.fromTo('.network-card',
      { opacity: 0, rotationY: 45, scale: 0.8 },
      {
        opacity: 1,
        rotationY: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.05,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: networksRef.current,
          start: 'top 80%',
          end: 'top 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Credential card floating animation
    gsap.to(credentialRef.current, {
      y: -20,
      duration: 3,
      ease: 'power2.inOut',
      yoyo: true,
      repeat: -1,
      scrollTrigger: {
        trigger: credentialRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    });



    // Text reveal animations
    gsap.fromTo('.reveal-text',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.reveal-text',
          start: 'top 90%',
          end: 'top 60%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Comparison table row animations
    gsap.fromTo('.comparison-row',
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.comparison-table',
          start: 'top 80%',
          end: 'top 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Unlock features stagger
    gsap.fromTo('.unlock-feature',
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        stagger: 0.08,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: '.unlock-features',
          start: 'top 80%',
          end: 'top 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  });

  return (
    <div ref={pageRef} className="min-h-screen bg-blue-100">
      {/* Hero Section with TokenizationHub Style */}
      <section className="relative min-h-[80vh] sm:min-h-[65vh] lg:min-h-[70vh] max-h-[90vh] sm:max-h-[85vh] lg:max-h-[90vh] overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-cyan-400/20"></div>
        </div>

        {/* Fluid Blob Background */}
        <div className="absolute inset-0 opacity-30">
          <LavaLamp />
        </div>

        {/* Hero Content */}
        <div ref={heroRef} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-12 lg:pb-16">
          {/* AI-Powered Badge - Top of Content */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium text-gray-700">
              <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></span>
              Exclusive Access Portal
            </div>
          </div>

          <div className="text-center">
            {/* Main Title - Full Width with Homepage Font Styles */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-4 sm:mb-6 uppercase anton-regular reveal-text">
              <span className="text-gray-900">YOUR GATEWAY TO </span>
              <span className="text-emerald-600">COPYM'S</span>
              <br />
              <span className="text-gray-900">EXCLUSIVE WORLD</span>
            </h1>

            {/* Description with Homepage Style */}
            <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed mb-6 sm:mb-8 max-w-4xl mx-auto reveal-text">
              Unlock premium access to real-world assets, member-only rewards, and
              the next wave of Web3 innovation with your exclusive access pass.
            </p>

                         {/* Glass Pill Layer - Curved div style */}
             <div
               className="relative w-full max-w-[400px] h-16 bg-emerald-600/80 backdrop-blur-[10px] rounded-[40px] flex justify-center items-center text-white text-lg font-semibold shadow-[0_10px_30px_rgba(16,185,129,0.5)] z-20 border border-emerald-500/50 mx-auto mt-8 px-6"
               style={{
                 WebkitBackdropFilter: 'blur(10px)',
                 backdropFilter: 'blur(10px)'
               }}
             >
               Mint Your Token Now ➡
             </div>

            {/* Additional UI Elements */}
            <div className="mt-16 flex justify-center space-x-8 opacity-60">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Exclusive</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Premium</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-sm text-gray-600">VIP Access</span>
              </div>
            </div>
          </div>
        </div>
             </section>

               {/* Unlock Features - Reimagined with Platform Features Style */}
       <section className="relative">
         {/* Main Content with Curved Background */}
         <div className="relative z-10 bg-emerald-600 rounded-t-[2rem] sm:rounded-t-[3rem] lg:rounded-t-[4rem] rounded-b-[2rem] sm:rounded-b-[3rem] lg:rounded-b-[4rem] pt-16 sm:pt-20 lg:pt-24 pb-20 sm:pb-24 lg:pb-32">
           {/* Background Pattern */}
           <div className="absolute inset-0 opacity-10">
             <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-emerald-500/20"></div>
           </div>

           {/* Content Container */}
           <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             {/* Section Title */}
             <div className="text-center mb-8 sm:mb-12 lg:mb-16">
               <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 anton-regular">
                 <span className="text-white">EVERYTHING YOUR</span>
                 <br />
                 <span className="text-black">PASS UNLOCKS</span>
               </h2>
               <p className="text-white/80 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 px-4">
                 Discover the exclusive benefits and features that come with your COPYM Access Pass
               </p>
             </div>

             {/* Feature Cards Grid - Platform Features Style */}
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mt-8 sm:mt-12 lg:mt-16">
               {unlockFeatures.map((feature, index) => (
                 <div key={index} className="text-center">
                 <div className="flex flex-col items-center mb-3 sm:mb-4">
                     <div className="flex items-center justify-center mb-3 sm:mb-4">
                       <img 
                         src={feature.icon} 
                         alt={`Feature ${index + 1}`}
                         className="w-8 h-8 object-contain filter brightness-0 invert"
                       />
                   </div>
                     <h3 className="text-white font-semibold text-sm sm:text-base lg:text-lg mb-2">
                       {feature.text.split(' ').slice(0, 2).join(' ')}
                     </h3>
                 </div>
                 <p className="text-white/80 text-xs sm:text-sm lg:text-base">
                     {feature.text}
                 </p>
               </div>
               ))}
             </div>

                           {/* Credential Card Section */}
              <div className="text-center mt-12 sm:mt-16 lg:mt-20">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Your Access Credential</h3>
                <p className="text-white/80 mb-6 sm:mb-8 text-sm sm:text-base">
                  Your digital identity that unlocks exclusive access to the COPYM ecosystem.
                </p>
                <div className="flex justify-center">
                  <div className="w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[350px]">
                    <CredentialCard
                      user={{
                        name: "Alex Morgan",
                        employeeNumber: "C-2028",
                        passNumber: "56",
                        points: "1,250",
                        qrImage: "/assets/svg/copym_qr.svg",
                      }}
                      variant="bottleGreen"
                      stacked
                      backVariant="darkBlue"
                      logoSrc="/assets/copym/png/Copym-05-1.png"
                      logoSize={24}
                    />
                  </div>
                </div>
              </div>
           </div>
         </div>
               </section>

        {/* Breathing Space After Unlock Features */}
        <div className="py-16 sm:py-20 lg:py-24"></div>

        {/* Benefits Section */}
       <div id="benefits-section" ref={benefitsRef} className="mb-20">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="space-y-8">
             {/* Section Title */}
             <div className="text-center">
               <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-gray-900 mb-4 uppercase anton-regular reveal-text">
                 Why Get the COPYM Access Pass?
               </h2>
               <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full mx-auto"></div>
               <p className="text-gray-700 mt-6 text-lg leading-relaxed max-w-3xl mx-auto">
                 Unlock exclusive benefits and early access to the most promising real-world asset opportunities in the Web3 ecosystem.
               </p>
             </div>

                           {/* Benefits Cards */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="text-center group"
                  >
                    {/* Icon with enhanced styling */}
                    <div className="flex justify-center mb-6">
                      <Box
                        className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl card-icon group-hover:scale-110 transition-transform duration-300"
                        sx={{
                          background: "linear-gradient(135deg, #10b981, #059669)",
                          boxShadow: "0 8px 32px rgba(16, 185, 129, 0.3)",
                        }}
                      >
                        <benefit.icon className="h-8 w-8 text-white" />
                      </Box>
                    </div>

                    {/* Content */}
                    <h3 className="font-black text-xl mb-4 text-gray-900 group-hover:text-emerald-600 transition-colors uppercase anton-regular">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-base">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
           </div>
         </div>
       </div>

              {/* Platform Features - TokenizationHub Style Cards */}
       <section className="relative">
         {/* Main Content with Curved Background */}
         <div className="relative z-10 bg-emerald-600 rounded-t-[2rem] sm:rounded-t-[3rem] lg:rounded-t-[4rem] rounded-b-[2rem] sm:rounded-b-[3rem] lg:rounded-b-[4rem] pt-16 sm:pt-20 lg:pt-24 pb-20 sm:pb-24 lg:pb-32">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             {/* Section Title */}
             <div className="text-center mb-8 sm:mb-12 lg:mb-16">
               <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 anton-regular">
                 <span className="text-white">PLATFORM</span>
                 <br />
                 <span className="text-black">FEATURES</span>
               </h2>
               <p className="text-white/80 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 px-4">
                 Enterprise-grade features designed for institutional-grade tokenization and compliance.
               </p>
             </div>

                           {/* Feature Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mt-8 sm:mt-12 lg:mt-16">
                {/* Card 1: Compliance-first */}
                <div className="text-center">
                  <div className="flex flex-col items-center mb-3 sm:mb-4">
                    <div className="flex items-center justify-center mb-3 sm:mb-4">
                      <img src="/assets/Images/icons/t6.png" alt="Compliance-first" className="w-6 h-6 sm:w-10 sm:h-10 lg:w-12 lg:h-12 object-contain filter brightness-0 invert" />
                    </div>
                    <h3 className="text-white font-semibold text-sm sm:text-base lg:text-lg mb-2">Compliance-first</h3>
                  </div>
                  <p className="text-white/80 text-xs sm:text-sm lg:text-base">
                    KYC/AML, transfer restrictions, whitelisting and audit trails for regulatory compliance.
                  </p>
                </div>

                {/* Card 2: Utility & Access */}
                <div className="text-center">
                  <div className="flex flex-col items-center mb-3 sm:mb-4">
                    <div className="flex items-center justify-center mb-3 sm:mb-4">
                      <img src="/assets/Images/icons/agraph.png" alt="Utility & Access" className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 object-contain filter brightness-0 invert" />
                    </div>
                    <h3 className="text-white font-semibold text-sm sm:text-base lg:text-lg mb-2">Utility & Access</h3>
                  </div>
                  <p className="text-white/80 text-xs sm:text-sm lg:text-base">
                    Early allocations, fee discounts, governance & staking perks for token holders.
                  </p>
                </div>

                {/* Card 3: Multi-asset Support */}
                <div className="text-center">
                  <div className="flex flex-col items-center mb-3 sm:mb-4">
                    <div className="flex items-center justify-center mb-3 sm:mb-4">
                      <img src="/assets/Images/icons/m1.png" alt="Multi-asset Support" className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 object-contain filter brightness-0 invert" />
                    </div>
                    <h3 className="text-white font-semibold text-sm sm:text-base lg:text-lg mb-2">Multi-asset Support</h3>
                  </div>
                  <p className="text-white/80 text-xs sm:text-sm lg:text-base">
                    Equity, debt, real estate, commodities, carbon & more asset classes supported.
                  </p>
                </div>

                {/* Card 4: Institutional Rails */}
                <div className="text-center">
                  <div className="flex flex-col items-center mb-3 sm:mb-4">
                    <div className="flex items-center justify-center mb-3 sm:mb-4">
                      <img src="/assets/Images/icons/adetails.png" alt="Institutional Rails" className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 object-contain filter brightness-0 invert" />
                    </div>
                    <h3 className="text-white font-semibold text-sm sm:text-base lg:text-lg mb-2">Institutional Rails</h3>
                  </div>
                  <p className="text-white/80 text-xs sm:text-sm lg:text-base">
                    Custody, settlement, and data rooms integrated for institutional investors.
                  </p>
                </div>

                {/* Card 5: Security & Trust */}
                <div className="text-center">
                  <div className="flex flex-col items-center mb-3 sm:mb-4">
                    <div className="flex items-center justify-center mb-3 sm:mb-4">
                      <img src="/assets/Images/icons/a5.png" alt="Security & Trust" className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 object-contain filter brightness-0 invert" />
                    </div>
                    <h3 className="text-white font-semibold text-sm sm:text-base lg:text-lg mb-2">Security & Trust</h3>
                  </div>
                  <p className="text-white/80 text-xs sm:text-sm lg:text-base">
                    Enterprise-grade security with multi-layer protection and audit trails.
                  </p>
                </div>

                {/* Card 6: Global Access */}
                <div className="text-center">
                  <div className="flex flex-col items-center mb-3 sm:mb-4">
                    <div className="flex items-center justify-center mb-3 sm:mb-4">
                      <img src="/assets/Images/icons/t3.png" alt="Global Access" className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 object-contain filter brightness-0 invert" />
                    </div>
                    <h3 className="text-white font-semibold text-sm sm:text-base lg:text-lg mb-2">Global Access</h3>
                  </div>
                  <p className="text-white/80 text-xs sm:text-sm lg:text-base">
                    24/7 global access to tokenized assets with real-time market data.
                  </p>
                </div>
              </div>
           </div>
         </div>
               </section>

        {/* Breathing Space After Platform Features */}
        <div className="py-16 sm:py-20 lg:py-24"></div>

       {/* Supported Networks */}
      <div ref={networksRef} className="mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-gray-900 mb-9 uppercase anton-regular reveal-text">
              Supported Networks
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {networks.map((network) => (
              <motion.div
                key={network.key}
                className="network-card group relative text-center"
                whileHover={{ y: -4, scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="relative">
                  <div className="flex items-center justify-center mx-auto mb-4 transition-all duration-300">
                    {network.logo ? (
                      <img
                        src={network.logo}
                        alt={`${network.name} logo`}
                        className="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300"
                      />
                    ) : (
                      <span className="text-4xl group-hover:scale-110 transition-transform duration-300">
                        {network.icon}
                      </span>
                    )}
                  </div>
                  <div className="font-bold text-lg text-gray-900 mb-1">
                    {network.name}
                  </div>
                  <div className="text-sm text-gray-500">{network.ticker}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div ref={ctaRef} className="text-center my-16 sm:my-24 lg:my-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-emerald-500 to-blue-500 rounded-3xl p-12 sm:p-16 lg:p-20 text-white">
            <GiCrown className="w-16 h-16 mx-auto mb-6 text-white/80" />
            <h3 className="text-3xl font-black mb-4 uppercase anton-regular">
              Ready to Join the Elite?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Don't miss out on exclusive access to the future of real-world
              asset tokenization.
            </p>
            <button className="bg-blue-100 text-emerald-600 hover:bg-gray-50 magnetic-button group px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg transition-all duration-300 flex items-center mx-auto transform hover:scale-105">
                              
                Get Your Access Pass Now
                
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}