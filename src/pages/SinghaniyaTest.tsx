import Navigation from "@/components/gurugram_final/RedesignNavigation";

import Agenda from "@/components/bengaluru26/Agenda"; 

import { PartnerSectionForm } from "@/components/PartnerSectionForm";
import { BengaluruJune26RegisterForm } from "@/components/BengaluruJune26RegisterForm";

import Footer from "@/components/gurugram_final/Footer";


import "@/styles/mystyle.css";





const EditionNew = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* <Agenda /> */}
      
      <section id="bengalururegistrationform" ></section>
      <BengaluruJune26RegisterForm />

      {/* <PartnerSectionForm /> */}
      
      <Footer />
    </div>
  );
};

export default EditionNew;