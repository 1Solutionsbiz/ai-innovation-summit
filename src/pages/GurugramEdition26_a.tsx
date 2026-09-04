import ScrollToHash from "@/components/ScrollToHash";

import Navigation from "@/components/gurugram26-a/Navigation";
import HeroBanner from "@/components/gurugram26-a/HeroBanner";
import Highlights from "@/components/gurugram26-a/Highlights";
import CreativityEverywhere from "@/components/gurugram26-a/CreativityEverywhere";
import FeaturedSpeakers from "@/components/gurugram26-a/FeaturedSpeakers";
import SessionTracks from "@/components/gurugram26-a/SessionTracks";
import Testimonials from "@/components/gurugram26-a/Testimonials";
import Sponsors from "@/components/gurugram26-a/Sponsors";
import Footer from "@/components/delhi26/Footer";

const MumbaiEdition2026 = () => {
  return (
    <div className="min-h-screen">
      <ScrollToHash />

      <Navigation />
      <HeroBanner />
      <Highlights />
      <FeaturedSpeakers />
      <SessionTracks />
      <CreativityEverywhere />
      <Testimonials />
      <Sponsors />

      <Footer />
    </div>
  );
};

export default MumbaiEdition2026;
