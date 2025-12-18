import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { WhyThisTour } from "@/components/sections/WhyThisTour";
import { SocialProof } from "@/components/sections/SocialProof";
import { MomentCards } from "@/components/sections/MomentCards";
import { CTASection } from "@/components/sections/CTASection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <WhyThisTour />
      <SocialProof />
      <MomentCards />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
