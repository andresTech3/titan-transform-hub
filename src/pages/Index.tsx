import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import GallerySection from "@/components/GallerySection";
import ArticlesSection from "@/components/ArticlesSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <BenefitsSection />
      <GallerySection />
      <PricingSection />
      <TestimonialsSection />
      <ArticlesSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
