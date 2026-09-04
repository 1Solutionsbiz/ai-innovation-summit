import RedesignNavigation from "@/components/gurugram26_redesign/RedesignNavigation";
import RedesignHero from "@/components/gurugram26_redesign/RedesignHero";
import StatsSection from "@/components/gurugram26_redesign/StatsSection";
import VisionarySpeakers from "@/components/gurugram26_redesign/VisionarySpeakers";
import FocusAreasSection from "@/components/gurugram26_redesign/FocusAreasSection";
import LeadersSection from "@/components/gurugram26_redesign/LeadersSection";
import SponsorsSection from "@/components/gurugram26_redesign/SponsorsSection";
import TestimonialSection from "@/components/gurugram26_redesign/TestimonialSection";
import InnovationEverywhere from "@/components/gurugram26_redesign/InnovationEverywhere";
import FeaturedSpeakers from "@/components/gurugram26_redesign/FeaturedSpeakers";
import OnDemandVideos from "@/components/gurugram26_redesign/OnDemandVideos";
import IndustryRepresentation from "@/components/gurugram26_redesign/IndustryRepresentation";
import PoweredPartners from "@/components/gurugram26_redesign/PoweredPartners";
import RedesignFooter from "@/components/gurugram26_redesign/RedesignFooter";

// import ScrollReveal from "@/components/gurugram26_redesign/ScrollReveal";
import SpeakersSection from "@/components/gurugram26_redesign/SpeakersSection";


import "@/styles/delhi-redesign.css";

const DelhiEdition26Redesign = () => {
  return (
    <main className="delhi-redesign">
      <RedesignNavigation />
	    <RedesignHero />
      <StatsSection />

      <SpeakersSection />
      						{/* <VisionarySpeakers /> */}
      
      <FocusAreasSection />
      <LeadersSection />
      <SponsorsSection />
      {/* <ScrollReveal>
        <h2>Our Visionary Speakers</h2>
      </ScrollReveal> */}
      <TestimonialSection />
      <InnovationEverywhere />
      <FeaturedSpeakers />
      <OnDemandVideos />
      <IndustryRepresentation />
      <PoweredPartners />
      <RedesignFooter />
    </main>
  );
};

export default DelhiEdition26Redesign;