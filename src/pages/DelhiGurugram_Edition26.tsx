import ScrollToHash from "@/components/ScrollToHash";

import Navigation from "@/components/gurugram_final/RedesignNavigation";
import HeroBanner from "@/components/gurugram_final/HeroBanner";
import Highlights from "@/components/gurugram_final/Highlights";
import Speakers from "@/components/gurugram_final/SpeakersFinal";
import OperatingModel from "@/components/gurugram_final/OperatingModel";
import Overview from "@/components/gurugram_final/Overview";
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


import StickyPartnersBar from "@/components/gurugram_final/StickyPartnersBar";



import { BengaluruJune26RegisterForm } from "@/components/BengaluruJune26RegisterForm";

import "@/styles/gurugram_final.css";


const GurugramEdition2026 = () => {
  return (
    <div className="min-h-screen">
      <ScrollToHash />
      <Navigation />
      {/* Hero stays pinned only inside this wrapper while the sections below slide up
          over it. The wrapper must hold at least a viewport of content after the hero,
          otherwise the pin releases before the hero is fully covered. */}
      <div className="hero-sticky-wrap">
        <HeroBanner />
        <Highlights />
        <Speakers />
        <Overview />
      </div>
      <ExploreFocusAreas />
      <RoomMatters />
      <Partners />
      {/* <Sponsors /> */}

  <StickyPartnersBar />


      <Leaders />
      <Innovation />
      <TestimonialsNew />
      <FeaturedSpeakers />
      <WatchOnDemand />
      <Glimpse />
      <EventInfo />
      <Sponsors />
      
      <hr />

            <section id="delhincrregistrationform" ></section>
            <BengaluruJune26RegisterForm />

      <Footer />
    </div>
  );
};

export default GurugramEdition2026;
