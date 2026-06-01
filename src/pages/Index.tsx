import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhyRunningSection from "@/components/WhyRunningSection";
import HighParticipationSection from "@/components/HighParticipationSection";
import GovernmentListensSection from "@/components/GovernmentListensSection";
import VideoSection from "@/components/VideoSection";
import AboutWebsiteSection from "@/components/AboutWebsiteSection";
import AboutCandidateSection from "@/components/AboutCandidateSection";
import PrioritiesSection from "@/components/PrioritiesSection";
import VotingSection from "@/components/VotingSection";
import NewsSection from "@/components/NewsSection";
import VolunteerSection from "@/components/VolunteerSection";
import Footer from "@/components/Footer";
import PSAVideoPopup from "@/components/PSAVideoPopup";

const Index = () => {
  return (
    <div className="min-h-screen">
      <PSAVideoPopup />
      <Header />
      <main>
        <HeroSection />
        <WhyRunningSection />
        <HighParticipationSection />
        <GovernmentListensSection />
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
