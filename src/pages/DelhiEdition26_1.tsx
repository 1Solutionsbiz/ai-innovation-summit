import ScrollToHash from "@/components/ScrollToHash";


import Navigation from "@/components/delhi26_1/Navigation";
import HeroBanner from "@/components/delhi26_1/HeroBanner";
import Highlights from "@/components/delhi26_1/Highlights";
import Socailwall from "@/components/delhi26_1/Socailwall";
import Overview from "@/components/delhi26_1/Overview";
import WhatAwaits from "@/components/delhi26_1/WhatAwaits";
import Speakers from "@/components/delhi26_1/Speakers";
import PastSpeakers from "@/components/delhi26_1/PastSpeakers";
import Agenda from "@/components/delhi26_1/Agenda"; 
import Partners from "@/components/delhi26_1/Partners";
import BlastFromPast from "@/components/delhi26_1/BlastFromPast";
import LeadersReflect from "@/components/delhi26_1/LeadersReflect";
import WatchOnDemand from "@/components/delhi26_1/WatchOnDemand";
import ContactDetails from "@/components/delhi26_1/ContactDetails";


import FocusAreas from "@/components/delhi26/FocusAreas";
import SeriesPartnersNew from "@/components/delhi26/SeriesPartnersNew";
import IndustryRepresentation from "@/components/delhi26/IndustryRepresentation";
import WhoShouldAttend from "@/components/delhi26/WhoShouldAttend";
import BeThePartner from "@/components/delhi26/BeThePartner";
import AboutTheGuild from "@/components/delhi26/AboutTheGuild";
import WhiteStrip from "@/components/delhi26/WhiteStrip";
import Footer from "@/components/delhi26/Footer";


import { BengaluruJune26RegisterForm } from "@/components/Delhi26_1_RegisterForm";
import RegistrationFormClosedform from "@/components/RegistrationForm_msg";


import "@/styles/mystyle.css";





const DelhiEdition26 = () => {
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
      <Speakers />
      <PastSpeakers />
      {/* <Partners /> */}
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

export default DelhiEdition26;