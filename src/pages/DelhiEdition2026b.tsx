import ScrollToHash from "@/components/ScrollToHash";

import Navigation from "@/components/mumbai26-max/Navigation";
import HeroBanner from "@/components/mumbai26-max/HeroBanner";
import CreativityEverywhere from "@/components/mumbai26-max/CreativityEverywhere";
import FeaturedSpeakers from "@/components/mumbai26-max/FeaturedSpeakers";
import SessionTracks from "@/components/mumbai26-max/SessionTracks";
import Testimonials from "@/components/mumbai26-max/Testimonials";
import Sponsors from "@/components/mumbai26-max/Sponsors";
import Footer from "@/components/delhi26/Footer";
import Socailwall from "@/components/delhi26_1/Socailwall";
import Highlights from "@/components/delhi26_1/Highlights";
import WhiteStrip from "@/components/delhi26/WhiteStrip";
import SeriesPartnersNew from "@/components/delhi26/SeriesPartnersNew";
import PastSpeakers from "@/components/delhi26_1/PastSpeakers";
import AboutTheGuild from "@/components/delhi26/AboutTheGuild";
import ContactDetails from "@/components/delhi26_1/ContactDetails";
import WatchOnDemand from "@/components/delhi26_1/WatchOnDemand";
import RegistrationFormClosedform from "@/components/RegistrationForm_msg";

const MumbaiEdition2026 = () => {
  return (
    <div className="min-h-screen">
      <ScrollToHash />

      <Navigation />
      <HeroBanner />
      
      
      <WhiteStrip />
      <Highlights />
      {/* <Socailwall /> */}
      <CreativityEverywhere />


      <FeaturedSpeakers />
      <PastSpeakers />


      <Testimonials />

      {/* <Sponsors /> */}
      <SeriesPartnersNew />
      <SessionTracks />

      <WatchOnDemand />
      <ContactDetails />
      <AboutTheGuild />
      <RegistrationFormClosedform />

      <Footer />
    </div>
  );
};

export default MumbaiEdition2026;
