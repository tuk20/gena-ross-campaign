import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhyRunningSection from "@/components/WhyRunningSection";
import VideoSection from "@/components/VideoSection";
import AboutWebsiteSection from "@/components/AboutWebsiteSection";
import AboutCandidateSection from "@/components/AboutCandidateSection";
import PrioritiesSection from "@/components/PrioritiesSection";
import VotingSection from "@/components/VotingSection";
import NewsSection from "@/components/NewsSection";
import VolunteerSection from "@/components/VolunteerSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <WhyRunningSection />
        <VideoSection />
        <AboutWebsiteSection />
        <AboutCandidateSection />
        <PrioritiesSection />
        <VotingSection />
        <NewsSection />
        <VolunteerSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
