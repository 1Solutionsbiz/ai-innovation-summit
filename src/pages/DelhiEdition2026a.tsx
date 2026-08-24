import ScrollToHash from "@/components/ScrollToHash";

import Navigation from "@/components/mumbai26-max/Navigation";
import HeroBanner from "@/components/mumbai26-max/HeroBanner";
import CreativityEverywhere from "@/components/mumbai26-max/CreativityEverywhere";
import FeaturedSpeakers from "@/components/mumbai26-max/FeaturedSpeakers";
import SessionTracks from "@/components/mumbai26-max/SessionTracks";
import Testimonials from "@/components/mumbai26-max/Testimonials";
import Sponsors from "@/components/mumbai26-max/Sponsors";
import Footer from "@/components/delhi26/Footer";

const MumbaiEdition2026 = () => {
  return (
    <div className="min-h-screen">
      <ScrollToHash />

      <Navigation />
      <HeroBanner />
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
