import Navigation from "@/components/newhome/Navigation";
import HeroBanner from "@/components/mumbai26/HeroBanner";
import WhiteStrip from "@/components/newhome/WhiteStrip";
import Highlights from "@/components/newhome/Highlights";
import Socailwall from "@/components/newhome/Socailwall";
import Overview from "@/components/mumbai26/Overview";
import WhatAwaits from "@/components/mumbai26/WhatAwaits";
import FocusAreas from "@/components/newhome/FocusAreas";

import FeaturedSpeakers from "@/components/mumbai26/FeaturedSpeakers";

import SeriesPartnersNew from "@/components/mumbai26/SeriesPartnersNew";

import IndustryRepresentation from "@/components/newhome/IndustryRepresentation";
import WhoShouldAttend from "@/components/newhome/WhoShouldAttend";

import BeThePartner from "@/components/newhome/BeThePartner";
import BlastFromPast from "@/components/mumbai26/BlastFromPast";
import LeadersReflect from "@/components/mumbai26/LeadersReflect";

import WatchOnDemand from "@/components/mumbai26/WatchOnDemand";
import ContactDetails from "@/components/newhome/ContactDetails";
import AboutTheGuild from "@/components/newhome/AboutTheGuild";

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