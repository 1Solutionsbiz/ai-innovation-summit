import RedesignNavigation from "@/components/gurugram26/RedesignNavigation";
import RedesignHero from "@/components/gurugram26/RedesignHero";
import StatsSection from "@/components/gurugram26/StatsSection";
import VisionarySpeakers from "@/components/gurugram26/VisionarySpeakers";
import FocusAreasSection from "@/components/gurugram26/FocusAreasSection";
import LeadersSection from "@/components/gurugram26/LeadersSection";
import SponsorsSection from "@/components/gurugram26/SponsorsSection";
import TestimonialSection from "@/components/gurugram26/TestimonialSection";
import InnovationEverywhere from "@/components/gurugram26/InnovationEverywhere";
import FeaturedSpeakers from "@/components/gurugram26/FeaturedSpeakers";
import OnDemandVideos from "@/components/gurugram26/OnDemandVideos";
import IndustryRepresentation from "@/components/gurugram26/IndustryRepresentation";
import PoweredPartners from "@/components/gurugram26/PoweredPartners";
import RedesignFooter from "@/components/gurugram26/RedesignFooter";

import SpeakersSection from "@/components/gurugram26/SpeakersSection";


import "@/styles/gurugram-26.css";

const GurugramEdition26 = () => {
  return (
    <main className="gurugram-redesign">
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

export default GurugramEdition26;