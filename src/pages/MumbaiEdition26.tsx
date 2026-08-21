import ScrollToHash from "@/components/ScrollToHash";


import Navigation from "@/components/mumbai26/Navigation";
import HeroBanner from "@/components/mumbai26/HeroBanner";
import Highlights from "@/components/mumbai26/Highlights";
import Socailwall from "@/components/mumbai26/Socailwall";
import Overview from "@/components/mumbai26/Overview";
import WhatAwaits from "@/components/mumbai26/WhatAwaits";
import FeaturedSpeakers from "@/components/mumbai26/FeaturedSpeakers";
import Agenda from "@/components/mumbai26/Agenda"; 
import Partners from "@/components/mumbai26/Partners";
import BlastFromPast from "@/components/mumbai26/BlastFromPast";
import LeadersReflect from "@/components/mumbai26/LeadersReflect";
import WatchOnDemand from "@/components/mumbai26/WatchOnDemand";


import FocusAreas from "@/components/delhi26/FocusAreas";
import SeriesPartnersNew from "@/components/delhi26/SeriesPartnersNew";
import IndustryRepresentation from "@/components/delhi26/IndustryRepresentation";
import WhoShouldAttend from "@/components/delhi26/WhoShouldAttend";
import BeThePartner from "@/components/delhi26/BeThePartner";
import ContactDetails from "@/components/delhi26/ContactDetails";
import AboutTheGuild from "@/components/delhi26/AboutTheGuild";
import WhiteStrip from "@/components/delhi26/WhiteStrip";
import Footer from "@/components/delhi26/Footer";


import { BengaluruJune26RegisterForm } from "@/components/BengaluruJune26RegisterForm";
import RegistrationFormClosedform from "@/components/RegistrationFormClosed";


import "@/styles/mystyle.css";
import BengaluruSpeakers from "@/components/mumbai26/BengaluruSpeakers";





const MumbaiEditionNew = () => {
  return (
    <div className="min-h-screen">
       <ScrollToHash />
       
      <Navigation />
      <HeroBanner />
      <WhiteStrip />
      <Highlights />
      <Socailwall />
      <Overview />
      <WhatAwaits />
      <FocusAreas />
      <BengaluruSpeakers />
      <FeaturedSpeakers />
      <Partners />
      <Agenda />
      <SeriesPartnersNew />
      <IndustryRepresentation />
      <WhoShouldAttend />
      <BeThePartner />
      <BlastFromPast />
      <LeadersReflect />
      <WatchOnDemand />
      <ContactDetails />
      <AboutTheGuild />
      
      <section id="bengalururegistrationform" ></section>
      {/* <BengaluruJune26RegisterForm /> */}
      <RegistrationFormClosedform />
      
      <Footer />
    </div>
  );
};

export default MumbaiEditionNew;