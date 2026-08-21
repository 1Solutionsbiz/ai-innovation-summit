import Navigation from "@/components/delhi26/Navigation";
import HeroBanner from "@/components/delhi26/HeroBanner";
import WhiteStrip from "@/components/delhi26/WhiteStrip";
import Highlights from "@/components/delhi26/Highlights";
import Overview from "@/components/delhi26/Overview";
import WhatAwaits from "@/components/delhi26/WhatAwaits";
import FocusAreas from "@/components/delhi26/FocusAreas";
import DelhiSpeakers from "@/components/delhi26/DelhiSpeakers";
import FeaturedSpeakers from "@/components/delhi26/FeaturedSpeakers";
import SeriesPartnersNew from "@/components/delhi26/SeriesPartnersNew";
import Partners from "@/components/delhi26/Partners";
import IndustryRepresentation from "@/components/delhi26/IndustryRepresentation";
import WhoShouldAttend from "@/components/delhi26/WhoShouldAttend";
import Agenda from "@/components/delhi26/Agenda"; 
import BeThePartner from "@/components/delhi26/BeThePartner";
import BlastFromPast from "@/components/delhi26/BlastFromPast";
import LeadersReflect from "@/components/delhi26/LeadersReflect";
import Socailwall from "@/components/delhi26/Socailwall";
import WatchOnDemand from "@/components/delhi26/WatchOnDemand";
import ContactDetails from "@/components/delhi26/ContactDetails";
import AboutTheGuild from "@/components/delhi26/AboutTheGuild";
import RegistrationFormClosedform from "@/components/RegistrationFormClosed";
import Footer from "@/components/delhi26/Footer";


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
      <DelhiSpeakers />
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
      
      <section id="delhiregistrationform" ></section>
      {/* <DelhiJune26RegisterForm /> */}
      <RegistrationFormClosedform />
      
      <Footer />
    </div>
  );
};

export default DelhiEditionNew;