import Navigation from "@/components/newhome/Navigation";
import HeroBanner from "@/components/newhome/HeroBanner";
import WhiteStrip from "@/components/newhome/WhiteStrip";
import Highlights from "@/components/newhome/Highlights";
import Overview from "@/components/newhome/Overview";
import WhatAwaits from "@/components/newhome/WhatAwaits";
import FocusAreas from "@/components/newhome/FocusAreas";
import DelhiSpeakers from "@/components/newhome/DelhiSpeakers";
import FeaturedSpeakers from "@/components/newhome/FeaturedSpeakers";
import SeriesPartners from "@/components/newhome/SeriesPartners";
import SeriesPartnersNew from "@/components/newhome/SeriesPartnersNew";
import Partners from "@/components/newhome/Partners";
import IndustryRepresentation from "@/components/newhome/IndustryRepresentation";
import WhoShouldAttend from "@/components/newhome/WhoShouldAttend";
import Agenda from "@/components/newhome/Agenda"; 
import BeThePartner from "@/components/newhome/BeThePartner";
import BlastFromPast from "@/components/newhome/BlastFromPast";
import LeadersReflect from "@/components/newhome/LeadersReflect";
import WatchOnDemand from "@/components/newhome/WatchOnDemand";
import ContactDetails from "@/components/newhome/ContactDetails";
import AboutTheGuild from "@/components/newhome/AboutTheGuild";
import { DelhiJune26RegisterForm } from "@/components/DelhiJune26RegisterFormNew";
import Footer from "@/components/newhome/Footer";


import "@/styles/mystyle.css";





const DelhiEditionNew = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroBanner />
      <WhiteStrip />
      <Highlights />
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
      <DelhiJune26RegisterForm />
      
      <Footer />
    </div>
  );
};

export default DelhiEditionNew;