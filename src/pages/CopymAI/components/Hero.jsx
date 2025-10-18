import React, { useRef } from "react";
import { ScrollParallax } from "react-just-parallax";
import Typewriter from "typewriter-effect";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

import { curve, robot } from "../assets";
import heroPhoneTilted from "../assets/hero/hero-phone-tilted.png";
import heroPhone from "../assets/hero/hero-phone.png";
import { heroIcons } from "../constants";
import "./HeroIconsBlack.css";
import Button from "./Button";
import CompanyLogos from "./CompanyLogos";
import { BackgroundCircles, Gradient } from "./design/Hero";
import Generating from "./Generating";
import Notification from "./Notification";
import Section from "./Section";
import StepRectangles from "./design/meetcora1";

const Hero = () => {
  const parallaxRef = useRef(null);
  const phoneRef = useRef(null);

  // Add CSS animation styles
  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes robotTurn {
        0% { transform: rotateY(0deg); }
        25% { transform: rotateY(-15deg); }
        50% { transform: rotateY(0deg); }
        75% { transform: rotateY(15deg); }
        100% { transform: rotateY(0deg); }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  // Phone animation effect
  React.useEffect(() => {
    // Wait for the next tick to ensure DOM is ready
    const timer = setTimeout(() => {
      if (phoneRef.current) {
        gsap.fromTo(
          phoneRef.current,
          { y: 250, opacity: 0, scale: 0.95, rotate: 2 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            rotate: 0,
            ease: 'power3.out',
            duration: 1.5,
            delay: 0.5,
            immediateRender: false,
            scrollTrigger: {
              trigger: phoneRef.current,
              start: 'top 90%',
              end: 'top 40%',
              scrub: 0.6,
              once: false
            }
          }
        );
      }
    }, 100);

    return () => {
      clearTimeout(timer);
      // Clean up ScrollTrigger
      if (phoneRef.current) {
        ScrollTrigger.getAll().forEach(trigger => {
          if (trigger.vars.trigger === phoneRef.current) {
            trigger.kill();
          }
        });
      }
    };
  }, []);

  return (
    <Section
      className="hero-section pt-16 sm:pt-20 lg:pt-20 pb-12 sm:pb-16 lg:pb-20"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div ref={parallaxRef} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Grid - Content */}
          <div className="relative z-1 text-left">
            <h1 className="h1 mb-6 text-left anton-regular">
              <span className="text-gray-900">Explore the Possibilities of</span>
              <br />
              <span className="text-emerald-600">
                <Typewriter
                  options={{
                    strings: [
                      "RWA Tokenization",
                      "AI Compliance",
                      "DeFi Integration",
                      "CrossChain Intelligence",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </h1>

            <p className="body-1 mb-6 text-black text-left lg:mb-6 ">
              Our AI Agent has shown <span className="text-color-1 font-bold">23% better accuracy</span> in predicting asset appreciation vs top market tools. 
              Experience the future of finance with{" "}
              <span className="inline-block relative font-semibold">
                CORA
                <img
                  src={curve}
                  className="absolute top-full left-0 w-full xl:-mt-2 pointer-events-none select-none"
                  width={624}
                  height={28}
                  alt="Curve"
                />
              </span>
              , the unified RWA tokenization AI platform.
            </p>

            {/* Market Potential Stats */}
            <div className="flex flex-wrap gap-8 mb-4">
              <div className="text-left animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <div className="text-2xl font-bold text-color-1 mb-1">$16T</div>
                <div className="text-sm text-black">Total RWA value by 2025</div>
              </div>
              <div className="text-left animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <div className="text-2xl font-bold text-color-4 mb-1">43%</div>
                <div className="text-sm text-black">Market CAGR</div>
              </div>
              <div className="text-left animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                <div className="text-2xl font-bold text-color-1 mb-1">$1.5B</div>
                <div className="text-sm text-black">Year 1 target market</div>
              </div>
            </div>

            <Button href="#pricing" black>
              Get started
            </Button>
          </div>

          {/* Right Grid - Phone Images */}
          <div ref={phoneRef} className="relative z-1 flex items-center justify-center">
            <div className="flex gap-2 items-center relative">
              {/* Meet Cora Component - Positioned on top */}
              <div className="absolute -top-[5rem] lg:top-[5rem] left-1/2 transform -translate-x-1/2 -translate-y-20 z-50 scale-75">
                <StepRectangles />
              </div>
              
              <img
                src={heroPhone}
                className="w-48 mt-48 scale-[2.1] -mb-64 h-auto pointer-events-none select-none drop-shadow-2xl"
                alt="Hero Phone"
              />
              {/* <img
                src={heroPhoneTilted}
                className="w-48 h-auto pointer-events-none select-none"
                alt="Hero Phone Tilted"
              /> */}
            </div>
          </div>
        </div>
      </div>

      
    </Section>
  );
};

export default Hero;