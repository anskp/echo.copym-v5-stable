import React, { useState, useEffect } from 'react';
import { GiHamburgerMenu, GiArrowDunk } from 'react-icons/gi';
import { IoClose } from 'react-icons/io5';
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  // Check if we're on the agent page
  const isAgentPage = location.pathname === "/agent";
  // Check if we're on the copym-ai page
  const isCopymAIPage = location.pathname === "/copym-ai";

  // Function to get header background color based on current page
  const getHeaderBackground = () => {
    const pathname = location.pathname;
    
    // Tokenization page has white background
    if (pathname.includes('/tokenization')) {
      return 'bg-white';
    }
    
    // Marketplace page has white/transparent background
    if (pathname.includes('/marketplace')) {
      return 'bg-white';
    }
    
    // All other pages use blue-100 background
    return 'bg-blue-100';
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100); // Show fixed nav after 100px scroll
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation data with dropdown content and images
  const navigationData = {
    Products: [
      {
        title: "Tokenization",
        description: "Create and manage digital tokens with advanced blockchain technology.",
        path: "/tokenization",
        image: "/assets/Images/navbar/1.png",
        iconBg: "icon-tokenization"
      },
      {
        title: "Marketplace",
        description: "Trade and discover unique digital assets in our secure marketplace.",
        path: "/marketplace",
        image: "/assets/Images/navbar/2.png",
        iconBg: "icon-marketplace"
      }
    ],
    Services: [
      {
        title: "AccessPass",
        description: "Secure authentication and access management for your digital assets.",
        path: "/access",
        image: "/assets/Images/navbar/3.png",
        iconBg: "icon-accesspass"
      },
      {
        title: "CORA AI",
        description: "Advanced AI-powered content generation and automation tools.",
        path: "/copym-ai",
        image: "/assets/Images/navbar/4.png",
        iconBg: "icon-copymi"
      }
    ],
    Company: [
      {
        title: "About Us",
        description: "Learn about our mission, vision, and the team behind the innovation.",
        path: "/about",
        image: "/assets/Images/navbar/5.png",
        iconBg: "icon-about"
      },

      {
        title: "Contact Us",
        description: "Get in touch with our team for support and business inquiries.",
        path: "/contact",
        image: "/assets/Images/navbar/8.png",
        iconBg: "icon-contact"
      }
    ]
  };

  return (
    <>
      {/* Desktop Navigation Pills - Fixed */}
      <div className="nav-pills">
        {Object.keys(navigationData).map((navItem) => (
            <div
              key={navItem}
            className="nav-item"
              onMouseEnter={() => setActiveDropdown(navItem)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
            <a href="#" className="nav-link">
              {navItem}
              <svg className="dropdown-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="6,9 12,15 18,9"></polyline>
              </svg>
            </a>
            
            {/* Dropdown Menu */}
            <AnimatePresence>
              {activeDropdown === navItem && (
                <motion.div
                  className="dropdown"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  {/* Removed Silk Background */}
                  
                  <div className="dropdown-grid relative z-10">
                    {navigationData[navItem].map((item, index) => (
                      <Link
                        key={index}
                        to={item.path}
                        className="dropdown-item"
                        onClick={() => setActiveDropdown(null)}
                      >
                        <div className={`dropdown-icon-wrapper ${item.iconBg}`}>
                          <img 
                            src={item.image} 
                            alt={item.title}
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>
                        <div className="dropdown-content">
                          <div className="dropdown-title">{item.title}</div>
                          <div className="dropdown-description">{item.description}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            </div>
          ))}
        
        {/* Fixed Download Button - Shows when scrolled */}
        {isScrolled && (
          <motion.div
            className="nav-item hidden md:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <button className="nav-link bg-green-500 hover:bg-green-600 text-white border-0">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM10 3a1 1 0 01-1 1v7.586L7.707 10.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V4a1 1 0 00-1-1z"/>
              </svg>
              Download
            </button>
          </motion.div>
        )}
      </div>

      {/* Delta-Style Navbar */}
      <nav className={`navbar ${getHeaderBackground()}`}>
        <div className="nav-container px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          {/* Logo */}
          <Link to="/" className="flex items-center mr-8">
              <img
                src={isCopymAIPage ? "/assets/copym/png/Copym-01-1.png" : isAgentPage ? "/assets/copym/png/Copym-02-1.png" : "/assets/copym/png/Copym-01-1.png"}
                alt="COPYM"
                className="h-16 w-auto object-contain sm:h-18 md:h-20"
              />
            </Link>

          {/* Download Button - Desktop Only */}
          <div className="hidden lg:flex items-center ml-auto">
            <button className="btn-gradient flex items-center justify-center px-6 py-4 font-semibold text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl rounded-full" style={{ minHeight: '56px' }}>
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM10 3a1 1 0 01-1 1v7.586L7.707 10.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V4a1 1 0 00-1-1z"/>
              </svg>
              Download
            </button>
          </div>

            {/* Mobile Toggle */}
            <button
            className="md:hidden ml-6 text-white hover:text-gray-300 transition-colors duration-200 p-3 rounded-lg"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <IoClose className="h-6 w-6" /> : <GiHamburgerMenu className="h-6 w-6" />}
            </button>
          </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
      {isMenuOpen && (
        <motion.div 
          className="fixed inset-0 z-50 md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Backdrop */}
          <div 
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* Menu Container */}
          <motion.div 
              className="absolute top-20 left-4 right-4 bg-gradient-to-br from-emerald-500 to-emerald-600 backdrop-blur-md rounded-2xl border border-[rgba(255,255,255,0.2)] overflow-hidden max-h-[80vh] flex flex-col"
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
              {/* Mobile Navigation Items */}
            <div className="py-6 px-4 flex-1 overflow-y-auto">
              {Object.keys(navigationData).map((navItem, index) => (
                <motion.div
                  key={navItem}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                    className="mb-6 last:mb-0"
                  >
                    <h3 className="text-white font-semibold text-lg mb-4">{navItem}</h3>
                    <div className="space-y-3">
                          {navigationData[navItem].map((item, itemIndex) => (
                            <Link
                              key={itemIndex}
                          to={item.path}
                              className="block"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              <motion.div
                            className="flex items-start gap-4 p-4 rounded-xl bg-[rgba(255,255,255,0.1)] backdrop-blur-sm border border-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.2)] transition-all duration-200"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: itemIndex * 0.05, duration: 0.2 }}
                                whileHover={{ x: 4 }}
                                whileTap={{ scale: 0.98 }}
                              >
                            <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                              <img 
                                src={item.image} 
                                alt={item.title}
                                className="w-full h-full object-cover"
                              />
                                  </div>
                                  <div className="flex-1 min-w-0">
                              <h4 className="font-semibold text-white text-sm leading-tight mb-1">
                                      {item.title}
                                    </h4>
                              <p className="text-xs text-white/80 leading-relaxed line-clamp-2">
                                      {item.description}
                                    </p>
                                </div>
                              </motion.div>
                            </Link>
                          ))}
                        </div>
                </motion.div>
              ))}
            </div>
            
              {/* Mobile Menu Footer */}
              <div className="border-t border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.05)] px-4 py-4 flex-shrink-0">
                {/* Mobile Download Button */}
                <div className="mb-4">
                  <button className="btn-gradient w-full flex items-center justify-center px-6 py-5 font-semibold text-white transition-all duration-300 transform hover:scale-105 shadow-lg rounded-full" style={{ minHeight: '56px' }}>
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    Download
                  </button>
                </div>
                <div className="flex items-center justify-center">
                  <div className="text-sm text-white/60">
                    © 2024 Copym
                  </div>
                </div>
              </div>
          </motion.div>
        </motion.div>
      )}
      </AnimatePresence>
    </>
  );
}