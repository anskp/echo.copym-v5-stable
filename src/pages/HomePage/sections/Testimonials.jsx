import { GiRoundStar, GiHouse, GiSparkSpirit, GiPalette, GiCheckMark } from "react-icons/gi";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "CopymAI democratizes high-value asset investment. The AI predictions have consistently outperformed traditional analysis by 23%.",
    name: "Sarah Chen",
    title: "Investment Director",
    company: "Venture Capital Partners",
    rating: 5,
    icon: GiHouse,
  },
  {
    quote: "Finally, a platform that makes RWA investment accessible to everyone. CopymAI's tokenization process is seamless and secure.",
    name: "Michael Rodriguez",
    title: "Portfolio Manager",
    company: "Wealth Management Group",
    rating: 4,
    icon: GiSparkSpirit,
  },
  {
    quote: "The CopymAgent AI provides unprecedented insights into asset performance. This is the future of investment platforms.",
    name: "Emily Thompson",
    title: "Chief Technology Officer",
    company: "FinTech Solutions",
    rating: 5,
    icon: GiPalette,
  },
  {
    quote: "Revolutionary approach to real-world asset tokenization. The compliance automation saved us months of work.",
    name: "David Kim",
    title: "Head of Digital Assets",
    company: "Goldman Sachs",
    rating: 5,
    icon: GiHouse,
  },
  {
    quote: "Cross-chain intelligence and seamless DeFi integration make this the most comprehensive RWA platform available.",
    name: "Lisa Wang",
    title: "Blockchain Strategist", 
    company: "JPMorgan Chase",
    rating: 5,
    icon: GiSparkSpirit,
  },
  {
    quote: "The AI-driven portfolio optimization increased our returns by 31% while reducing risk exposure significantly.",
    name: "James Mitchell",
    title: "Fund Manager",
    company: "BlackRock",
    rating: 5,
    icon: GiPalette,
  },
  {
    quote: "Seamless tokenization process with institutional-grade security. This is the future of asset management.",
    name: "Amanda Foster",
    title: "Risk Management Director",
    company: "Morgan Stanley",
    rating: 5,
    icon: GiHouse,
  },
  {
    quote: "The analytics dashboard provides insights we never had before. ROI tracking is incredibly detailed.",
    name: "Robert Chen",
    title: "Portfolio Analyst",
    company: "Fidelity Investments",
    rating: 5,
    icon: GiSparkSpirit,
  },
];

/** Helper component rendering a single testimonial card */
function TestimonialCard({ testimonial }) {
  const IconComponent = testimonial.icon;
  
  return (
    <motion.div 
     className="flex-shrink-0 w-[320px] h-[280px] bg-gradient-to-r from-emerald-400/20 to-blue-500/20 backdrop-blur-xl border border-emerald-300/40 rounded-2xl shadow-xl p-6 flex flex-col justify-between overflow-hidden hover:from-emerald-400/25 hover:to-blue-500/25"


      whileHover={{ scale: 1.02, y: -2 }}
      transition={{ duration: 0.2 }}
    >
      {/* Rating */}
      <div className="flex items-center justify-start mb-4">
        <div className="flex text-yellow-400 gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <GiRoundStar 
              key={i} 
              className={`h-4 w-4 ${i < testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'text-slate-600'}`} 
            />
          ))}
        </div>
      </div>

      {/* Quote */}
      <div className="flex-1 mb-6 overflow-hidden">
        <p className="text-slate-800 text-sm leading-relaxed italic break-words">
          <span className="text-emerald-600 text-lg font-bold">"</span>
          {testimonial.quote}
          <span className="text-emerald-600 text-lg font-bold">"</span>
        </p>
      </div>

      {/* Reviewer Info */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <p className="text-gray-900 font-semibold text-base mb-1 break-words">{testimonial.name}</p>
          <p className="text-emerald-600 text-sm font-medium mb-1 break-words">{testimonial.title}</p>
          <p className="text-slate-600 text-xs break-words">{testimonial.company}</p>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <GiCheckMark className="h-4 w-4 text-emerald-600" />
          <span className="text-emerald-600 text-xs font-medium whitespace-nowrap">Verified</span>
        </div>
      </div>
    </motion.div>
  );
}

/** Infinite scrolling row component for train-like movement */
function InfiniteScrollingRow({ items, duration = 40 }) {
  // Duplicate items 6× to ensure seamless infinite scroll like a train
  const duplicatedItems = [
    ...items,
    ...items,
    ...items,
    ...items,
    ...items,
    ...items,
  ];
  
  return (
    <div className="overflow-hidden py-4">
      <motion.div
        className="flex gap-6"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          duration: duration,
        }}
      >
        {duplicatedItems.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} />
        ))}
      </motion.div>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="relative py-20">
      {/* heading */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 anton-regular">
            <span className="text-gray-900">Trusted by Industry </span>
            <span className="text-emerald-600">Leaders</span>
          </h2>
          <p className="text-black max-w-2xl mx-auto text-lg">
            See what top financial professionals are saying about our AI-powered RWA tokenization platform
          </p>
        </div>
      </div>
      
      {/* Infinite Scrolling Testimonials */}
      <InfiniteScrollingRow items={testimonials} duration={50} />
    </section>
  );
}
