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
import KnowYourPowerSection from "@/components/KnowYourPowerSection";

import VolunteerSection from "@/components/VolunteerSection";
import Footer from "@/components/Footer";
import LeadershipCommitmentSection from "@/components/LeadershipCommitmentSection";
import ManageItWiselySection from "@/components/ManageItWiselySection";
import WeeklyRecapSection from "@/components/WeeklyRecapSection";
import VolunteerAskPopup from "@/components/VolunteerAskPopup";

const Index = () => {
  return (
    <div className="min-h-screen">
      <VolunteerAskPopup />
      <Header />
      <main>
        <HeroSection />
        <div className="h-2 bg-campaign-red/80" aria-hidden="true" />
        <LeadershipCommitmentSection />
        <div className="h-2 bg-navy/80" aria-hidden="true" />
        <WhyRunningSection />
        <div className="h-2 bg-campaign-red/80" aria-hidden="true" />
        <HighParticipationSection />
        <div className="h-2 bg-navy/80" aria-hidden="true" />
        <GovernmentListensSection />
        <div className="h-2 bg-campaign-red/80" aria-hidden="true" />
        <AboutWebsiteSection />
        <div className="h-2 bg-campaign-red/80" aria-hidden="true" />
        <AboutCandidateSection />
        <div className="h-2 bg-campaign-red/80" aria-hidden="true" />
        <VideoSection />
        <div className="h-2 bg-navy/80" aria-hidden="true" />
        <PrioritiesSection />
        <div className="h-2 bg-campaign-red/80" aria-hidden="true" />
        <ManageItWiselySection />
        <div className="h-2 bg-navy/80" aria-hidden="true" />
        <KnowYourPowerSection />
        <div className="h-2 bg-navy/80" aria-hidden="true" />
        <VotingSection />
        <div className="h-2 bg-campaign-red/80" aria-hidden="true" />
        <VolunteerSection />
        <div className="h-2 bg-navy/80" aria-hidden="true" />
        <WeeklyRecapSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
