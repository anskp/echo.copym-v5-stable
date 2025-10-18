import React, { useRef } from 'react';
import { GiPlayButton, GiRoundStar, GiArrowDunk } from 'react-icons/gi';
import { QrCodeIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import useGSAP from '../../../hooks/useGSAPAnimations';

export default function TrackYourCrypto() {
  const imageRef = useRef();
  useGSAP(imageRef, () => {
    gsap.fromTo(
      imageRef.current,
      { y: 250, opacity: 0, scale: 0.95, rotate: 2 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        rotate: 0,
        ease: 'power3.out',
        duration: 1,
        immediateRender: false,
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top 90%',
          end: 'top 40%',
          scrub: 0.6,
          once: false
        }
      }
    );
  });

  return (
    <section className="relative py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-cyan-400/20"></div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/10 to-transparent rounded-t-[100px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Phone Mockup */}
          <div ref={imageRef} className="relative flex justify-center lg:justify-start lg:ml-40">
            <div className="relative">
              {/* Hologram Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 via-blue-500/20 to-cyan-400/30 rounded-3xl blur-xl transform scale-110 -rotate-6"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-blue-300/20 via-blue-400/15 to-cyan-300/20 rounded-3xl blur-lg transform scale-105 rotate-3"></div>
              
              {/* Main Phone Mockup */}
              <div className="relative">
                <img 
                  src="/assets/Images/mobile-ads.png" 
                  alt="Copym App Interface" 
                  className="w-40 lg:w-56 xl:w-64 h-auto drop-shadow-2xl relative z-10"
                />
              </div>
            </div>
          </div>
          
          {/* Right Side - Marketing Content */}
          <div className="space-y-10 text-center lg:text-left">
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight anton-regular">
                Track your Assets. <span className="text-emerald-600">Anywhere.</span>
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Stay connected to your portfolio across all your devices. Copym is available on iOS, Android, Windows, and Mac, so you can track every move, get insights, and stay ahead — wherever you are.
              </p>
            </div>
            
            {/* Action Buttons */}
            <div className="space-y-6">
              {/* Download Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-900 flex items-center justify-center space-x-3 px-8 py-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                  <img src="/assets/Images/apple-black-logo.png" alt="Apple" className="w-6 h-6" />
                  <div className="text-left">
                    <div className="text-xs text-gray-500">Download on the</div>
                    <div className="font-semibold">App Store</div>
                  </div>
                </button>
                <button className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-900 flex items-center justify-center space-x-3 px-8 py-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                  <img src="/assets/Images/android.png" alt="Android" className="w-6 h-6" />
                  <div className="text-left">
                    <div className="text-xs text-gray-500">Get it on</div>
                    <div className="font-semibold">Google Play</div>
                  </div>
                </button>
              </div>
              
              {/* Marketplace Button and QR Code Row */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center">
                <Link
                  to="/marketplace"
                  className="btn-gradient inline-flex items-center justify-center px-8 py-4 font-semibold text-black shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Explore Marketplace
                  
                </Link>
                
                                 {/* QR Code Card - Moved to right side and made bigger */}
                 <div className="bg-white p-6 rounded-xl shadow-2xl border border-gray-100 hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
                   <QrCodeIcon className="w-24 h-24 text-gray-900" />
                   <p className="text-sm text-gray-600 mt-3 text-center font-medium">Scan to download</p>
                 </div>
              </div>
            </div>
            
            {/* Rating and Trust */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8">
              <div className="flex items-center space-x-3">
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <GiRoundStar key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="text-gray-600 font-medium">Rated 4.5 in app stores</span>
              </div>
              <div className="text-gray-600 font-medium">
                Trusted by 5 Million+ users
              </div>
            </div>
            
            {/* Platform Availability */}
            <div className="flex items-center justify-center lg:justify-start space-x-8 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <img src="/assets/Images/apple-black-logo.png" alt="Apple" className="w-4 h-4" />
                <span>iOS</span>
              </div>
              <div className="flex items-center space-x-2">
                <img src="/assets/Images/android.png" alt="Android" className="w-4 h-4" />
                <span>Android</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
