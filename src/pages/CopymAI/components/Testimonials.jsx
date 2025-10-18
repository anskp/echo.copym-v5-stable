import Section from "./Section";
import Heading from "./Heading";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Chief Investment Officer",
    company: "Global Asset Management",
    content: "Cora AI has transformed our daily market analysis. The intelligent insights and predictive alerts have increased our trading accuracy by 23% while saving us hours of research time.",
    avatar: "/path-to-avatar-1.jpg"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Blockchain Director",
    company: "TechVentures Capital",
    content: "Cora AI's smart price alerts and portfolio insights are game-changing. The AI-powered recommendations help us make data-driven decisions across multiple blockchain networks seamlessly.",
    avatar: "/path-to-avatar-2.jpg"
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    role: "Head of DeFi Strategy",
    company: "CryptoBridge Fund",
    content: "Cora AI's real-time market intelligence and crypto analytics give us a significant competitive advantage. The daily market recaps and trend predictions are incredibly accurate.",
    avatar: "/path-to-avatar-3.jpg"
  }
];

const Testimonials = () => {
  return (
    <Section id="testimonials">
      <div className="container">
        <Heading
          title={
            <>
              <span className="text-gray-900">Trusted by </span>
              <span className="text-emerald-600">Industry Leaders</span>
            </>
          }
          text="See what leading financial institutions say about Cora AI"
        />
        
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="p-6 bg-gray-50 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-color-1 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4 flex-shrink-0">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-lg font-black tracking-tight leading-tight text-black uppercase anton-regular break-words">{testimonial.name}</h4>
                  <p className="text-sm text-black break-words">{testimonial.role}</p>
                  <p className="text-xs text-color-1 break-words">{testimonial.company}</p>
                </div>
              </div>
              <p className="text-black italic text-sm leading-relaxed break-words">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;
