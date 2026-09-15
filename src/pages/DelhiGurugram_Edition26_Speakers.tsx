import ScrollToHash from "@/components/ScrollToHash";

import Navigation from "@/components/gurugram_final/RedesignNavigation";
import SpeakersList from "@/components/gurugram_final/SpeakersList";
import Speakers from "@/components/gurugram_final/Speakers";
import Footer from "@/components/gurugram_final/Footer";

import "@/styles/gurugram_final.css";


const GurugramEdition2026 = () => {
  return (
    <div className="min-h-screen">
      <ScrollToHash />
      <Navigation />
      {/* <Speakers /> */}
      <SpeakersList />
      <Footer />
    </div>
  );
};

export default GurugramEdition2026;
