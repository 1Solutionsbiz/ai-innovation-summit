import Navigation from "@/components/newhome/Navigation";
import HeroBanner from "@/components/mumbai26/HeroBanner";
import WhiteStrip from "@/components/newhome/WhiteStrip";
import Highlights from "@/components/newhome/Highlights";
import Overview from "@/components/mumbai26/Overview";
import WhatAwaits from "@/components/mumbai26/WhatAwaits";
import FocusAreas from "@/components/mumbai26/FocusAreas";

import FeaturedSpeakers from "@/components/mumbai26/FeaturedSpeakers";
import SeriesPartners from "@/components/mumbai26/SeriesPartners";
import SeriesPartnersNew from "@/components/mumbai26/SeriesPartnersNew";
import Partners from "@/components/newhome/Partners";
import IndustryRepresentation from "@/components/mumbai26/IndustryRepresentation";
import WhoShouldAttend from "@/components/mumbai26/WhoShouldAttend";
import Agenda from "@/components/newhome/Agenda"; 
import BeThePartner from "@/components/mumbai26/BeThePartner";
import BlastFromPast from "@/components/mumbai26/BlastFromPast";
import LeadersReflect from "@/components/mumbai26/LeadersReflect";
import DelegateExperienceRewards from "@/components/mumbai26/DelegateExperienceRewards";
import Socailwall from "@/components/mumbai26/Socailwall";
import WatchOnDemand from "@/components/mumbai26/WatchOnDemand";
import ContactDetails from "@/components/mumbai26/ContactDetails";
import AboutTheGuild from "@/components/mumbai26/AboutTheGuild";
import { DelhiJune26RegisterForm } from "@/components/DelhiJune26RegisterFormNew";
import RegistrationFormClosedform from "@/components/RegistrationFormClosed";
import Footer from "@/components/newhome/Footer";


import "@/styles/mystyle.css";





const DelhiEditionNew = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroBanner />
      <WhiteStrip />
      <Highlights />
      <Socailwall />
      <Overview />
      <WhatAwaits />
      <FocusAreas />
      <FeaturedSpeakers />
      <SeriesPartnersNew />
      <IndustryRepresentation />
      <WhoShouldAttend />
      {/* <DelegateExperienceRewards /> */}
      <BeThePartner />
      <BlastFromPast />
      <LeadersReflect />
      <WatchOnDemand />
      <ContactDetails />
      <AboutTheGuild />
      
      {/* <section id="delhiregistrationform" ></section> */}
      {/* <DelhiJune26RegisterForm /> */}
      {/* <RegistrationFormClosedform /> */}
      
      <Footer />
    </div>
  );
};

export default DelhiEditionNew;