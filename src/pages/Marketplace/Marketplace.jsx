import Hero from "./sections/Hero";
import MarketSlider from "./sections/MarketSlider";
import WhyInvestWithUs from "./sections/WhyInvestWithUs";
import AppPeekSection from "./sections/AppPeekSection";
import FAQsection from "./sections/FAQsection";
import { Link } from "react-router-dom";

export default function Marketplace() {
  return (
    <div className="min-h-screen bg-blue-100">
      <Hero />
      <AppPeekSection />
      <WhyInvestWithUs />
      <div className="text-center">
        <MarketSlider />
      </div>
      <FAQsection />

      {/* Mini CTA Section */}
      <section className="bg-blue-100 py-12 md:py-16 text-center text-gray-900">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-6 uppercase anton-regular">
             <span className="text-gray-900">READY TO EXPLORE </span>
             <span className="text-emerald-600">TOKENIZED ASSETS?</span>
           </h2>
           <p className="text-gray-600 text-lg md:text-xl mb-6 max-w-2xl mx-auto">
             Browse live offerings or join our investor community to get early access drops.
           </p>
          <Link
            to="/access"
            className="inline-flex items-center justify-center px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:scale-105"
          >
            Get Early Access <span className="ml-2">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
