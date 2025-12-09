import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutWebsiteSection from "@/components/AboutWebsiteSection";
import AboutCandidateSection from "@/components/AboutCandidateSection";
import PrioritiesSection from "@/components/PrioritiesSection";
import NewsSection from "@/components/NewsSection";
import VolunteerSection from "@/components/VolunteerSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutWebsiteSection />
        <AboutCandidateSection />
        <PrioritiesSection />
        <NewsSection />
        <VolunteerSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
