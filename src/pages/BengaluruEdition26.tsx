import Navigation from "@/components/bengaluru26/Navigation";
import HeroBanner from "@/components/bengaluru26/HeroBanner";
import WhiteStrip from "@/components/newhome/WhiteStrip";
import Highlights from "@/components/bengaluru26/Highlights";
import Socailwall from "@/components/newhome/Socailwall";
import Overview from "@/components/bengaluru26/Overview";
import WhatAwaits from "@/components/bengaluru26/WhatAwaits";
import FocusAreas from "@/components/newhome/FocusAreas";

import FeaturedSpeakers from "@/components/bengaluru26/FeaturedSpeakers";
import Agenda from "@/components/bengaluru26/Agenda"; 

import SeriesPartnersNew from "@/components/newhome/SeriesPartnersNew";

import IndustryRepresentation from "@/components/newhome/IndustryRepresentation";
import WhoShouldAttend from "@/components/newhome/WhoShouldAttend";

import BeThePartner from "@/components/newhome/BeThePartner";
import BlastFromPast from "@/components/bengaluru26/BlastFromPast";
import LeadersReflect from "@/components/bengaluru26/LeadersReflect";

import WatchOnDemand from "@/components/bengaluru26/WatchOnDemand";
import ContactDetails from "@/components/newhome/ContactDetails";
import AboutTheGuild from "@/components/newhome/AboutTheGuild";

import { BengaluruJune26RegisterForm } from "@/components/BengaluruJune26RegisterForm";

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
      {/* <Agenda /> */}
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
      
      {/* <section id="bengalururegistrationform" ></section> */}
      {/* <BengaluruJune26RegisterForm /> */}
      {/* <RegistrationFormClosedform /> */}
      
      <Footer />
    </div>
  );
};

export default DelhiEditionNew;