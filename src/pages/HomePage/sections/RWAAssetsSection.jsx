import React from 'react';
import { motion } from 'framer-motion';
import { 
  
  GiLockedChest
} from 'react-icons/gi';

export default function RWAAssetsSection() {
  return (
    <section className="relative py-16 bg-blue-100 mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading - Outside Container */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight anton-regular mb-6">
            Tokenize <span className="text-emerald-600">Real Assets</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Gold, Art, Carbon Credits, Real Estate & more. Transform physical assets into digital tokens for global investment access.
          </p>
        </div>

        <motion.div 
          className="relative bg-gradient-to-br from-emerald-600 to-emerald-700 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-emerald-500/30 shadow-xl overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
           
           <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
             {/* Left Side - Content */}
             <div className="space-y-8">
               {/* Premium Badge */}
               <div className="flex items-center gap-4">
                                   
                 <div>
                   <span className="text-sm font-semibold text-white">Real World Assets</span>
                 </div>
               </div>
               
               {/* Content Description */}
               <div>
                 <p className="text-lg text-white/90 leading-relaxed font-light">
                   Discover a diverse portfolio of real-world assets tokenized for digital ownership. From precious metals to fine art, we're democratizing access to premium investments.
                 </p>
               </div>
               
               {/* Premium CTA */}
               <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                 <button className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center gap-3 backdrop-blur-sm border border-white/20">
                   Explore Assets
                  
                 </button>
                 <div className="flex items-center gap-3 text-white/70">
                   <span className="text-sm">Gold</span>
                   <span className="w-1 h-1 bg-white/50 rounded-full"></span>
                   <span className="text-sm">Art</span>
                   <span className="w-1 h-1 bg-white/50 rounded-full"></span>
                   <span className="text-sm">Carbon</span>
                   <span className="w-1 h-1 bg-white/50 rounded-full"></span>
                   <span className="text-sm">Real Estate</span>
                 </div>
               </div>
             </div>
             
             {/* Right Side - Premium Asset Cards */}
             <div className="grid grid-cols-2 gap-6">
               <div className="group text-center">
                 <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg filter brightness-125 contrast-125">
                   <img src="/assets/Images/icons/rwa1.png" alt="Gold & Metals" style={{ width: 72, height: 72 }} />
                 </div>
                 <p className="font-semibold text-white">Gold & Metals</p>
               </div>
               
               <div className="group text-center">
                 <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg filter brightness-125 contrast-125">
                   <img src="/assets/Images/icons/rwa2.png" alt="Fine Art" style={{ width: 72, height: 72 }} />
                 </div>
                 <p className="font-semibold text-white">Fine Art</p>
               </div>
               
               <div className="group text-center">
                 <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg filter brightness-125 contrast-125">
                   <img src="/assets/Images/icons/rwa3.png" alt="Carbon Credits" style={{ width: 72, height: 72 }} />
                 </div>
                 <p className="font-semibold text-white">Carbon Credits</p>
               </div>
               
               <div className="group text-center">
                 <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg filter brightness-125 contrast-125">
                   <img src="/assets/Images/icons/rwa4.png" alt="Real Estate" style={{ width: 78, height: 78 }} />
                 </div>
                 <p className="font-semibold text-white">Real Estate</p>
               </div>
             </div>
           </div>
        </motion.div>
      </div>
    </section>
  );
}
