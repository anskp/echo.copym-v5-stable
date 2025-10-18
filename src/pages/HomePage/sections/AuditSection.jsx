import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// Import blockchain icons
import { 
  ethereum, 
  polygon, 
  bitcoin, 
  solana, 
  avalanche, 
  optimism, 
  near, 
  stellar
} from '../../CopymAI/assets';

// Import audit icons
import hIcon from '/assets/svg/h.png';
import icIcon from '/assets/svg/ic.png';
import zIcon from '/assets/svg/z.png';
import cervikIcon from '/assets/svg/cervik.png';
import audit0Icon from '/assets/svg/audit0.png';

// Blockchain icons with real logos
const BlockchainIcon = ({ icon, name }) => (
  <div className="flex flex-col items-center justify-center">
    <div className="w-8 h-8 flex items-center justify-center">
      <img
        src={icon}
        alt={`${name} blockchain logo`}
        className="w-full h-full object-contain"
        onError={(e) => {
          e.target.style.display = 'none';
          console.warn('Failed to load blockchain logo:', name);
        }}
      />
    </div>
  </div>
);

const slides = [
  { icon: bitcoin, name: "BTC" },
  { icon: ethereum, name: "ETH" },
  { icon: solana, name: "SOL" },
  { icon: polygon, name: "MATIC" },
  { icon: avalanche, name: "AVAX" },
  { icon: optimism, name: "OP" },
  { icon: near, name: "NEAR" },
  { icon: stellar, name: "XLM" },
];

const auditSlides = [
  { icon: hIcon, name: "H" },
  { icon: icIcon, name: "IC" },
  { icon: zIcon, name: "Z" },
  { icon: cervikIcon, name: "Cervik" },
  { icon: audit0Icon, name: "Audit0" },
];

const SliderDesign2 = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const duplicatedSlides = [...slides, ...slides, ...slides]; // Triple the slides for seamless loop
  const containerRef = useRef(null);
  const itemsRef = useRef([]);
  
  // Continuously check which item is closest to the center
  useEffect(() => {
    const checkActive = () => {
      if (!containerRef.current) return;
      const containerCenter =
        containerRef.current.getBoundingClientRect().left +
        containerRef.current.offsetWidth / 2;
      let closestIndex = 0;
      let closestDistance = Infinity;
      itemsRef.current.forEach((el, i) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const itemCenter = rect.left + rect.width / 2;
        const distance = Math.abs(containerCenter - itemCenter);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = i % slides.length;
        }
      });
      setActiveIndex(closestIndex);
      requestAnimationFrame(checkActive); // keep updating in sync with animation
    };
    requestAnimationFrame(checkActive);
  }, []);

        return (
          <div
      ref={containerRef}
      className="relative h-full overflow-hidden py-12 mx-auto"
    >
      {/* Fade edges - transparent to match section background */}
      <div className="absolute inset-0 z-20 before:absolute before:left-0 before:top-0 before:w-1/4 before:h-full before:bg-gradient-to-r before:from-transparent before:to-transparent after:absolute after:right-0 after:top-0 after:w-1/4 after:h-full after:bg-gradient-to-l after:from-transparent after:to-transparent"></div>
      <motion.div
        className="flex items-center justify-center"
        animate={{
          x: ["0%", "-33.33%"],
        }}
        transition={{
          ease: "linear",
          duration: 15,
          repeat: Infinity,
        }}
      >
        {duplicatedSlides.map((slide, index) => {
          const slideIndex = index % slides.length;
          const isActive = slideIndex === activeIndex;
          return (
            <div
              key={index}
              ref={(el) => (itemsRef.current[index] = el)}
              className="flex-shrink-0 px-8"
            >
              <div className="flex items-center justify-center">
                <div
                  className={`w-20 h-20 rounded-full border-2 flex items-center justify-center transition-all duration-300 ease-in-out ${
                    isActive
                      ? "border-blue-500 bg-blue-50 scale-125"
                      : "border-gray-300 bg-white scale-90"
                  }`}
                >
                  <div
                    className={`flex items-center justify-center transition-colors duration-300 ${
                      isActive ? "text-blue-600" : "text-gray-700"
                    }`}
                  >
                    <BlockchainIcon icon={slide.icon} name={slide.name} />
                  </div>
                </div>
          </div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

const AuditSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const duplicatedSlides = [...auditSlides, ...auditSlides, ...auditSlides]; // Triple the slides for seamless loop
  const containerRef = useRef(null);
  const itemsRef = useRef([]);
  
  // Continuously check which item is closest to the center
  useEffect(() => {
    const checkActive = () => {
      if (!containerRef.current) return;
      const containerCenter =
        containerRef.current.getBoundingClientRect().left +
        containerRef.current.offsetWidth / 2;
      let closestIndex = 0;
      let closestDistance = Infinity;
      itemsRef.current.forEach((el, i) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const itemCenter = rect.left + rect.width / 2;
        const distance = Math.abs(containerCenter - itemCenter);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = i % auditSlides.length;
        }
      });
      setActiveIndex(closestIndex);
      requestAnimationFrame(checkActive); // keep updating in sync with animation
    };
    requestAnimationFrame(checkActive);
  }, []);
 
  return (
    <div
      ref={containerRef}
      className="relative h-full overflow-hidden py-12 mx-auto"
    >
      {/* Fade edges - transparent to match section background */}
      <div className="absolute inset-0 z-20 before:absolute before:left-0 before:top-0 before:w-1/4 before:h-full before:bg-gradient-to-r before:from-transparent before:to-transparent after:absolute after:right-0 after:top-0 after:w-1/4 after:h-full after:bg-gradient-to-l after:from-transparent after:to-transparent"></div>
      <motion.div
        className="flex items-center justify-center"
        animate={{
          x: ["0%", "33.33%"],
        }}
        transition={{
          ease: "linear",
          duration: 15,
          repeat: Infinity,
        }}
      >
        {duplicatedSlides.map((slide, index) => {
          const slideIndex = index % auditSlides.length;
          const isActive = slideIndex === activeIndex;
              return (
            <div
              key={index}
              ref={(el) => (itemsRef.current[index] = el)}
              className="flex-shrink-0 px-8"
            >
              <div className="flex items-center justify-center">
                <div
                  className={`w-20 h-20 rounded-full border-2 flex items-center justify-center transition-all duration-300 ease-in-out ${
                    isActive
                      ? "border-emerald-500 bg-emerald-50 scale-125"
                      : "border-gray-300 bg-white scale-90"
                  }`}
                >
                  <div
                    className={`flex items-center justify-center transition-colors duration-300 ${
                      isActive ? "text-emerald-600" : "text-gray-700"
                    }`}
                  >
                    <BlockchainIcon icon={slide.icon} name={slide.name} />
                  </div>
                </div>
              </div>
            </div>
        );
      })}
      </motion.div>
          </div>
        );
};

export default function AuditSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-cyan-400/20"></div>
      </div>
      
      <div className="relative z-10 py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 anton-regular">
              <span className="text-gray-900">SECURE & </span>
              <span className="text-emerald-600">AUDITED</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our smart contracts have been audited by the world's most trusted security firms and integrated with leading blockchain networks, ensuring maximum protection and seamless interoperability.
          </p>
        </div>

          {/* Blockchain Section */}
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 anton-regular">
              <span className="text-gray-900">BLOCKCHAIN</span>
            </h3>
          </div>

          {/* Blockchain Slider */}
          <div className="flex justify-center items-center">
            <SliderDesign2 />
            </div>

                    {/* Audit Section */}
          <div className="text-center mb-12 mt-16">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 anton-regular">
              <span className="text-emerald-600">AUDIT</span>
            </h3>
            </div>

          {/* Audit Slider */}
          <div className="flex justify-center items-center">
            <AuditSlider />
          </div>

        {/* Legend */}
        <div className="flex justify-center items-center space-x-8 mt-12">
          </div>
        </div>
      </div>
    </section>
  );
}