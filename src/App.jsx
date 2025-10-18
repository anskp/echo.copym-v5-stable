import React, { useEffect, useRef } from 'react';
import Header from './components/Header';
import Hero from './pages/HomePage/sections/Hero';

import Footer from './components/Footer';
import TokenizationHub from './pages/TokenizationHub/TokenizationHub';
import Marketplace from './pages/Marketplace/Marketplace';
import HomePage from './pages/HomePage/HomePage';

import CopymAI from './pages/CopymAI/CopymAI';
import Contact from './pages/Contact/Contact';
import AboutUs from './pages/aboutus/aboutus';
import ScrollToTop from "./components/ScrollToTop";
import { Box } from "@mui/material";
import { Routes, Route, useLocation } from "react-router-dom";

import Launchkit from './pages/Launchkit/Launchkit';
import AccessPage from './pages/AccessPage/AccessPage';
import { animate } from 'animejs';



function App() {
  const location = useLocation();
  const appRef = useRef(null);
  
  // Check if we're on the copym-ai page
  const isCopymAIPage = location.pathname === "/copym-ai";
  // Check if we're on the marketplace page (has its own header)
  const isMarketplacePage = location.pathname === "/marketplace";

  // Initial page load animation
  useEffect(() => {
    if (appRef.current) {
      animate('.bg-background', {
        opacity: [0, 1],
        duration: 800,
        easing: 'easeInOutQuad'
      });
    }
  }, []);

  // Animation for navbar
  useEffect(() => {
    animate('nav', {
      translateY: [-50, 0],
      opacity: [0, 1],
      duration: 1000,
      easing: 'easeOutExpo'
    });
  }, []);

  return (
    <Box
      ref={appRef} 
      className={`min-h-screen relative text-text-primary overflow-x-hidden`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-cyan-400/20"></div>
      </div>
      <ScrollToTop />
      <Header />
      <main className="relative z-20 overflow-x-hidden">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />

          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/tokenization" element={<TokenizationHub />} />
          <Route path="/launchkit" element={<Launchkit />} />

          <Route path="/copym-ai" element={<CopymAI />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/access" element={<AccessPage />} />
        </Routes>
        </main>
      <Footer />
    </Box>
  );
}

export default App;