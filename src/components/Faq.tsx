import ScrollToHash from "@/components/ScrollToHash";


import Navigation from "@/components/gurugram_final/RedesignNavigationStatic";

import AboutUs from "@/components/Pages/FAQ";


import Footer from "@/components/gurugram_final/Footer";
import "@/styles/mystyle.css";


const GurugramEdition2026 = () => {
  return (
      <div className="min-h-screen">
        <ScrollToHash />
        <Navigation />


        <AboutUs />


        <Footer />

          {/* <h1>Delhi Gurugram Edition 2026</h1> */}
      </div>
  );
};

export default GurugramEdition2026;
