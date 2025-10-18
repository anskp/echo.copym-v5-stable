import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  GiRoundStar, 
  GiChart, 
  GiShield, 
  GiGlobe, 
  GiPerson 
} from "react-icons/gi";
import { Link } from "react-router-dom";

import ChromaGrid from "../../../components/ChromaGrid";

// Custom CSS for hiding scrollbars
const scrollbarHideStyles = `
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
`;

// --- Asset data for ChromaGrid ----
const mockAssets = [
  { 
    id: "real-estate-1", 
    title: "Premium Office Building", 
    subtitle: "Real Estate Investment", 
    location: "New York, USA", 
    roi: "8.5% ROI", 
    expectedRoi: "8.5%",
    image: "/assets/Images/premium-office-building-1.png",
    url: "/market/real-estate/",
    description: "A Class A office building in Manhattan's financial district, offering stable rental income and long-term appreciation potential.",
    marketCap: "$25M",
    riskLevel: "Low-Medium",
    minInvestment: "$10,000",
    price: 25000000,
    category: "Real Estate"
  },
  { 
    id: "art-1", 
    title: "Digital Art Collection", 
    subtitle: "Art Investment", 
    location: "Digital", 
    roi: "Variable ROI", 
    expectedRoi: "Variable",
    image: "/assets/Images/digital-art-collection-1.png",
    url: "/market/art/",
    description: "Curated collection of digital artworks from emerging and established artists, leveraging blockchain technology for provenance.",
    marketCap: "$5M",
    riskLevel: "Medium-High",
    minInvestment: "$1,000",
    price: 5000000,
    category: "Art"
  },
  { 
    id: "commodities-1", 
    title: "Gold Reserve", 
    subtitle: "Commodities Investment", 
    location: "Switzerland", 
    roi: "5.2% ROI", 
    expectedRoi: "5.2%",
    image: "/assets/Images/gold-reserve.png",
    url: "/market/gold/",
    description: "Physical gold reserves stored in Swiss vaults, providing a hedge against inflation and economic uncertainty.",
    marketCap: "$50M",
    riskLevel: "Low",
    minInvestment: "$5,000",
    price: 50000000,
    category: "Commodities"
  },
  { 
    id: "infrastructure-1", 
    title: "Solar Farm Project", 
    subtitle: "Infrastructure Investment", 
    location: "Arizona, USA", 
    roi: "7.3% ROI", 
    expectedRoi: "7.3%",
    image: "/assets/Images/solar-farm-project-2.png",
    url: "/market/carbon-credits/",
    description: "Large-scale solar energy project generating clean electricity and carbon credits, with government incentives.",
    marketCap: "$15M",
    riskLevel: "Medium",
    minInvestment: "$25,000",
    price: 15000000,
    category: "Infrastructure"
  },
  { 
    id: "startups-1", 
    title: "Tech Startup Equity", 
    subtitle: "Startup Investment", 
    location: "San Francisco, USA", 
    roi: "High Risk/Reward", 
    expectedRoi: "High Risk/Reward",
    image: "/assets/Images/tech-2.png",
    url: "/market/private-equity/",
    description: "Early-stage technology startup with innovative AI solutions, offering high growth potential in emerging markets.",
    marketCap: "$2M",
    riskLevel: "High",
    minInvestment: "$50,000",
    price: 2000000,
    category: "Startup"
  },
  { 
    id: "real-estate-2", 
    title: "Luxury Apartment Complex", 
    subtitle: "Real Estate Investment", 
    location: "Miami, USA", 
    roi: "6.8% ROI", 
    expectedRoi: "6.8%",
    image: "/assets/Images/apartment-complex.png",
    url: "/market/real-estate/",
    description: "Premium residential complex in Miami Beach, featuring luxury amenities and high-end rental units.",
    marketCap: "$30M",
    riskLevel: "Medium",
    minInvestment: "$15,000",
    price: 30000000,
    category: "Real Estate"
  }
];

// --- Theme and Routing (unchanged) ---
const theme = {
  greenIcon: '#15a36e',
  blueButton: '#255f99',
  whiteText: '#ffffff',
};

// Assets are formatted for ChromaGrid
const allCardData = mockAssets;

// ====================================================================
// --- THE ENHANCED ASSET CARD COMPONENT WITH BOLDER DESIGN ---
// ====================================================================
const AssetCard = ({ card, layoutId, isPopup = false }) => {
  const handleNavigate = (link) => {
    console.log(`Navigating to ${link}`);
    // Your navigation logic here
  };
  
  return (
    <motion.div
      layoutId={layoutId}
      className="w-full h-[400px] rounded-2xl flex flex-col justify-end overflow-hidden shadow-2xl relative bg-black group"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Enhanced Aura Effect on Hover */}
      <div className="absolute inset-0 bg-green-500/30 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
      
      <motion.img
        src={card.image}
        alt={card.title}
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      
      {/* Enhanced Gradient for Better Readability */}
      <div className={`absolute inset-0 bg-gradient-to-t z-10 ${isPopup ? 'from-black/95 via-black/80' : 'from-black/90 via-black/70'} to-transparent`} />
      
      {/* Removed Blue Header - Cleaner Design */}
      <div className="relative z-20 p-6 space-y-4 text-white">
        <h3 className="text-2xl font-bold leading-tight">{card.title}</h3>
        <div className="flex flex-col gap-2 text-base font-semibold border-t border-b border-white/20 py-3">
          <p className="flex items-center gap-2"><span className="text-green-400">📍</span>{card.location}</p>
          <p className="flex items-center gap-2"><GiChart size={20} className="text-green-400" />{card.expectedRoi} ROI</p>
        </div>
        <div className="flex items-end justify-between pt-2">
          <div>
            <p className="text-sm opacity-70">Price</p>
            <p className="text-2xl font-bold">${card.price.toLocaleString()}</p>
          </div>
          <motion.button 
            className="px-6 py-3 text-white rounded-lg font-semibold shadow-lg text-sm bg-green-500 hover:bg-green-600 transition-colors duration-300" 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }} 
            onClick={(e) => { 
              e.stopPropagation(); 
              handleNavigate(card.link); 
            }}
          >
            Invest
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

// ====================================================================
// --- ENHANCED MARKETPLACE GLIMPSE COMPONENT ---
// ====================================================================
const MarketplaceGlimpse = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [kenBurnsOffset, setKenBurnsOffset] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Ken Burns effect for the header background
  useEffect(() => {
    const interval = setInterval(() => {
      setKenBurnsOffset(prev => (prev + 0.001) % 1);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Filter assets based on selected category
  const filteredAssets = selectedCategory === "all" 
    ? allCardData 
    : allCardData.filter(asset => asset.category.toLowerCase() === selectedCategory.toLowerCase());

  // Category filter options
  const categories = [
    { id: "all", label: "All Assets", count: allCardData.length },
    { id: "real-estate", label: "Real Estate", count: allCardData.filter(a => a.category === "Real Estate").length },
    { id: "art", label: "Art", count: allCardData.filter(a => a.category === "Art").length },
    { id: "commodities", label: "Commodities", count: allCardData.filter(a => a.category === "Commodities").length },
    { id: "infrastructure", label: "Infrastructure", count: allCardData.filter(a => a.category === "Infrastructure").length },
    { id: "startup", label: "Startup", count: allCardData.filter(a => a.category === "Startup").length }
  ];

  const handleAssetClick = (asset) => {
    console.log('Asset clicked:', asset.title);
    // Handle asset click - could open modal, navigate, etc.
  };

  return (
    <div className="w-full">
      <style dangerouslySetInnerHTML={{ __html: scrollbarHideStyles }} />
             {/* PART 2: ChromaGrid Section - The Centerpiece Refactor */}
       <section className="relative">
                   {/* Main Content with Curved Background - HomePage Style */}
          <div className="relative z-10 bg-emerald-600 rounded-t-[2rem] sm:rounded-t-[3rem] lg:rounded-t-[4rem] rounded-b-[2rem] sm:rounded-b-[3rem] lg:rounded-b-[4rem] pt-8 sm:pt-12 lg:pt-16 pb-0 overflow-hidden">
            
            {/* Content Container */}
            <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
          {/* Enhanced Section Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6 uppercase anton-regular">
              <span className="text-white">EXPLORE OUR </span>
              <span className="text-black">CURATED ASSETS</span>
            </h2>
            <p className="text-xl text-black/80 max-w-3xl mx-auto">
              Discover a diverse portfolio of tokenized real-world assets, each carefully selected for their potential returns and market stability.
            </p>
          </motion.div>

          {/* Smart Tabs - Enhanced Filter UI */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 border ${
                  selectedCategory === category.id
                    ? 'bg-[#255f99] text-white shadow-lg border-[#255f99]'
                    : 'bg-white/20 text-white hover:bg-white/30 border-white/30 hover:border-white/50 backdrop-blur-sm'
                }`}
              >
                {category.label}
                <span className="ml-2 text-xs opacity-70">({category.count})</span>
              </button>
            ))}
          </motion.div>

                     {/* Horizontally Scrollable Asset Cards */}
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
             viewport={{ once: true }}
             className="relative"
           >
             <div className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide">
               {filteredAssets.map((asset, index) => (
                 <motion.div
                   key={asset.id}
                   className="flex-shrink-0 w-[320px] h-[420px] rounded-2xl overflow-hidden shadow-2xl bg-white group cursor-pointer relative"
                   initial={{ opacity: 0, x: 50 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   transition={{ duration: 0.6, delay: index * 0.1 }}
                   viewport={{ once: true }}
                   whileHover={{ scale: 1.02, y: -5 }}
                   onClick={() => handleAssetClick(asset)}
                 >
                   {/* Image Section (Top 60%) */}
                   <div className="relative h-[60%] overflow-hidden">
                     <img 
                       src={asset.image} 
                       alt={asset.title}
                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                     />
                     
                     {/* Category Badge - Top Left */}
                     <div className="absolute top-3 left-3">
                       <span className="px-2 py-1 bg-green-600 text-white text-xs font-semibold rounded-full">
                         {asset.category}
                       </span>
                     </div>
                     
                     {/* Action Icons - Top Right */}
                     <div className="absolute top-3 right-3 flex gap-2">
                       <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                         <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                         </svg>
                       </div>
                       <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                         <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                         </svg>
                       </div>
                     </div>

                     {/* Image Carousel Indicators - Bottom Center */}
                     <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-1">
                       <div className="w-2 h-2 bg-white rounded-full"></div>
                       <div className="w-2 h-2 bg-white/50 rounded-full"></div>
                       <div className="w-2 h-2 bg-white/50 rounded-full"></div>
                     </div>
                   </div>

                   {/* Details Section (Bottom 40%) - Dark Green Background */}
                   <div className="h-[40%] bg-green-800 p-4 flex flex-col justify-between">
                     {/* Title and Location */}
                     <div>
                       <h3 className="text-lg font-bold text-white mb-1 line-clamp-1">
                         {asset.title}
                       </h3>
                       <p className="text-sm text-white/80 mb-2">
                         {asset.location}
                       </p>
                     </div>

                     {/* Price and Rating Row */}
                     <div className="flex items-center justify-between">
                       {/* Price */}
                       <div className="text-right">
                         <p className="text-lg font-bold text-white">
                           ${asset.price.toLocaleString()} USDC
                         </p>
                       </div>
                       
                       {/* Rating */}
                       <div className="flex items-center gap-1">
                         <div className="flex">
                           {[...Array(5)].map((_, i) => (
                             <svg key={i} className={`w-4 h-4 ${i < 4 ? 'text-yellow-400 fill-current' : 'text-white/30'}`} viewBox="0 0 20 20">
                               <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                             </svg>
                           ))}
                         </div>
                         <span className="text-sm text-white ml-1">4.5 (108)</span>
                       </div>
                     </div>
                   </div>
                 </motion.div>
               ))}
             </div>

            {/* Scroll Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              <div className="w-2 h-2 bg-white/50 rounded-full"></div>
              <div className="w-2 h-2 bg-white/50 rounded-full"></div>
              <div className="w-2 h-2 bg-white/50 rounded-full"></div>
            </div>
          </motion.div>
        </div>
        </div>
      </section>

             {/* PART 3: The Final CTA - A Grand Finale */}
       <section className="relative py-16 overflow-hidden mt-16">
         {/* Background Pattern - Same as WhyInvestWithUs */}
         <div className="absolute inset-0 opacity-10">
           <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-cyan-400/20"></div>
         </div>

         {/* Fluid Blob Background - Same as WhyInvestWithUs */}
         <div className="absolute inset-0 overflow-hidden">
           <motion.div
             className="absolute -top-40 -right-40 w-80 h-80 bg-green-400/20 rounded-full blur-3xl"
             animate={{
               x: [0, 30, 0],
               y: [0, -30, 0],
               scale: [1, 1.1, 1],
             }}
             transition={{
               duration: 20,
               repeat: Infinity,
               ease: "easeInOut",
             }}
           />
           <motion.div
             className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"
             animate={{
               x: [0, -40, 0],
               y: [0, 40, 0],
               scale: [1, 1.2, 1],
             }}
             transition={{
               duration: 25,
               repeat: Infinity,
               ease: "easeInOut",
               delay: 2,
             }}
           />
           <motion.div
             className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-400/15 rounded-full blur-3xl"
             animate={{
               x: [0, 20, 0],
               y: [0, -20, 0],
               scale: [1, 1.15, 1],
             }}
             transition={{
               duration: 18,
               repeat: Infinity,
               ease: "easeInOut",
               delay: 1,
             }}
           />
         </div>
         
         <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
             viewport={{ once: true }}
           >
             <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-6 uppercase anton-regular">
               <span className="text-gray-900">READY TO BUILD YOUR </span>
               <span className="text-emerald-600">FUTURE PORTFOLIO?</span>
             </h2>
             <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
               Join thousands of investors accessing exclusive real-world assets. The full marketplace awaits.
             </p>
             <Link 
               to="/marketplace"
               className="inline-flex items-center gap-3 text-lg px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-full shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 transform hover:scale-105"
             >
               Explore the Full Marketplace
               <span>→</span>
             </Link>
           </motion.div>
         </div>
       </section>

      {/* THE TAKEOVER POPUP MODAL (Enhanced) */}
      <AnimatePresence>
        {selectedCard && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
            initial={{ backgroundColor: 'rgba(0,0,0,0)' }}
            animate={{ backgroundColor: 'rgba(0,0,0,0.8)' }}
            exit={{ backgroundColor: 'rgba(0,0,0,0)' }}
            onClick={() => setSelectedCard(null)}
          >
            <div className="w-full max-w-xl h-[90vh] max-h-[600px]" onClick={(e) => e.stopPropagation()}>
              <AssetCard card={selectedCard} layoutId={`card-${selectedCard.id}`} isPopup={true} />
            </div>
            <motion.button 
              className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center text-white border border-white/20" 
              onClick={() => setSelectedCard(null)} 
              initial={{ scale: 0, rotate: -90 }} 
              animate={{ scale: 1, rotate: 0 }} 
              exit={{ scale: 0, rotate: -90 }}
              whileHover={{ scale: 1.1 }}
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MarketplaceGlimpse;