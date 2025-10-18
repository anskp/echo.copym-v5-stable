import Hero from "./sections/Hero";
import CurvedSectionDivider from "./sections/CurvedSectionDivider";
import TrackYourCrypto from "./sections/TrackYourCrypto";
import AIInvestingSection from "./sections/AIInvestingSection";
import RWAAssetsSection from "./sections/RWAAssetsSection";
import AuditSection from "./sections/AuditSection";
import FAQSection from "./sections/FAQSection";
import NewsletterSection from "./sections/NewsletterSection";
import Testimonials from "./sections/Testimonials";
import SupportedAssets from "./sections/SupportedAssets";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-blue-100 p-0 m-0">
      <Hero />
      <CurvedSectionDivider />
      <TrackYourCrypto />
      <AIInvestingSection />
      <RWAAssetsSection />
      <AuditSection />
      <FAQSection />
      <Testimonials />
      <NewsletterSection />
      {/* <SupportedAssets /> */}
    </div>
  );
}