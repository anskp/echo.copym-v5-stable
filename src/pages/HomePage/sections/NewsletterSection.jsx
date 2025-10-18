import React, { useState } from 'react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [updates, setUpdates] = useState(true);
  const [sneakPeeks, setSneakPeeks] = useState(true);
  const [deals, setDeals] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', { email, updates, sneakPeeks, deals });
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 relative overflow-hidden">
          {/* Decorative shapes */}
          <div className="absolute top-0 left-0 w-24 h-24 sm:w-32 sm:h-32 bg-orange-500/20 dark:bg-orange-400/30 transform -rotate-45 translate-x-[-30%] translate-y-[-20%]"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 sm:w-40 sm:h-40 bg-blue-200/20 dark:bg-blue-300/30 rounded-full transform translate-x-[20%] translate-y-[20%]"></div>
          <div className="absolute top-1/2 right-1/4 w-20 h-20 sm:w-24 sm:h-24 bg-blue-300/20 dark:bg-blue-400/30 rounded-full transform -translate-y-1/2"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 anton-regular">JOIN OUR NEWSLETTER</h2>
              <p className="text-white/90 text-base sm:text-lg">Get exclusive insights straight to your mailbox</p>
            </div>
            
            <div className="w-full lg:w-1/2">
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row mb-4 gap-2">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-grow px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-l-3xl sm:rounded-r-none text-gray-800 dark:text-white bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 dark:focus:ring-green-400 text-sm sm:text-base"
                  required
                />
                <button 
                  type="submit"
                  className="bg-green-500 dark:bg-green-600 text-black dark:text-white font-bold px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-l-none sm:rounded-r-3xl whitespace-nowrap hover:bg-green-600 dark:hover:bg-green-700 transition-colors duration-300 text-sm sm:text-base"
                >
                  Subscribe
                </button>
              </form>
              
              <p className="text-white/80 text-xs sm:text-sm mb-4 text-center sm:text-left">
                By clicking Sign Up you're confirming that you agree with our 
                <a href="#" className="underline ml-1"> Terms and Conditions</a>.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
                <label className="flex items-center cursor-pointer justify-center sm:justify-start">
                  <input 
                    type="checkbox" 
                    className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 dark:text-green-400 rounded focus:ring-green-500 dark:focus:ring-green-400"
                    checked={updates}
                    onChange={(e) => setUpdates(e.target.checked)}
                  />
                  <span className="ml-2 text-white dark:text-gray-100 text-sm sm:text-base">Quarterly Product Updates</span>
                </label>
                <label className="flex items-center cursor-pointer justify-center sm:justify-start">
                  <input 
                    type="checkbox" 
                    className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 dark:text-green-400 rounded focus:ring-green-500 dark:focus:ring-green-400"
                    checked={sneakPeeks}
                    onChange={(e) => setSneakPeeks(e.target.checked)}
                  />
                  <span className="ml-2 text-white dark:text-gray-100 text-sm sm:text-base">Sneak Peeks</span>
                </label>
                <label className="flex items-center cursor-pointer justify-center sm:justify-start">
                  <input 
                    type="checkbox" 
                    className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 dark:text-green-400 rounded focus:ring-green-500 dark:focus:ring-green-400"
                    checked={deals}
                    onChange={(e) => setDeals(e.target.checked)}
                  />
                  <span className="ml-2 text-white dark:text-gray-100 text-sm sm:text-base">Exclusive Deals</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
