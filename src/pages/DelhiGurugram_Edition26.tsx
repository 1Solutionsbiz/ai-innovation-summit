import ScrollToHash from "@/components/ScrollToHash";

import Navigation from "@/components/gurugram_final/RedesignNavigation";
import HeroBanner from "@/components/gurugram_final/HeroBanner";
import Highlights from "@/components/gurugram_final/Highlights";
import Speakers from "@/components/gurugram_final/Speakers";
import OperatingModel from "@/components/gurugram_final/OperatingModel";
import ExploreFocusAreas from "@/components/gurugram_final/ExploreFocusAreas";
import RoomMatters from "@/components/gurugram_final/RoomMatters";
import Partners from "@/components/gurugram_final/Partners";
import Leaders from "@/components/gurugram_final/Leaders";
import Innovation from "@/components/gurugram_final/Innovation";
import TestimonialsNew from "@/components/gurugram_final/TestimonialsNew";
import FeaturedSpeakers from "@/components/gurugram_final/FeaturedSpeakers";
import WatchOnDemand from "@/components/gurugram_final/WatchOnDemand";
import Glimpse from "@/components/gurugram_final/Glimpse";
import EventInfo from "@/components/gurugram_final/EventInfo";
import Sponsors from "@/components/gurugram_final/Sponsors";
import Footer from "@/components/gurugram_final/Footer";

import "@/styles/gurugram_final.css";


const GurugramEdition2026 = () => {
  return (
    <div className="min-h-screen">
      <ScrollToHash />
      <Navigation />
      <HeroBanner />
      <Highlights />
      <Speakers />
      {/* <OperatingModel /> */}
      <ExploreFocusAreas />
      <RoomMatters />
      <Partners />
      <Leaders />
      <Innovation />
      <TestimonialsNew />
      <FeaturedSpeakers />
      <WatchOnDemand />
      <Glimpse />
      <EventInfo />
      <Sponsors />
      <Footer />
    </div>
  );
};

export default GurugramEdition2026;
