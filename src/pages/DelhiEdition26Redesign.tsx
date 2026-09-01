import RedesignNavigation from "@/components/delhi26_redesign/RedesignNavigation";
import RedesignHero from "@/components/delhi26_redesign/RedesignHero";
import StatsSection from "@/components/delhi26_redesign/StatsSection";
import VisionarySpeakers from "@/components/delhi26_redesign/VisionarySpeakers";
import FocusAreasSection from "@/components/delhi26_redesign/FocusAreasSection";
import LeadersSection from "@/components/delhi26_redesign/LeadersSection";
import SponsorsSection from "@/components/delhi26_redesign/SponsorsSection";
import TestimonialSection from "@/components/delhi26_redesign/TestimonialSection";
import InnovationEverywhere from "@/components/delhi26_redesign/InnovationEverywhere";
import FeaturedSpeakers from "@/components/delhi26_redesign/FeaturedSpeakers";
import OnDemandVideos from "@/components/delhi26_redesign/OnDemandVideos";
import IndustryRepresentation from "@/components/delhi26_redesign/IndustryRepresentation";
import PoweredPartners from "@/components/delhi26_redesign/PoweredPartners";
import RedesignFooter from "@/components/delhi26_redesign/RedesignFooter";

// import ScrollReveal from "@/components/delhi26_redesign/ScrollReveal";
import SpeakersSection from "@/components/delhi26_redesign/SpeakersSection";

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