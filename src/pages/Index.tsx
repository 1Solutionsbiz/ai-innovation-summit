
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import MovingStrip from "@/components/MovingStrip";
import { About } from "@/components/About";
import { KeyPoints } from "@/components/KeyPoints";

import { Speakers } from "@/components/Speakers";
import { PastHighlights } from "@/components/PastHighlights";

import { Sponsors } from "@/components/Sponsors";
import { PartnershipCTA } from "@/components/PartnershipCTA";


import { Footer } from "@/components/Footer";
import { Register } from "@/components/RegisterForm";
import KeyTheme from "@/components/KeyTheme";
import StickyWrapper from "@/components/StickyWrapper";
import Agenda from "@/components/Agenda";
import {ShouldAttend} from "@/components/ShouldAttend";
import WhoShouldSponsor from "@/components/WhoShouldSponsor";
import { Features } from "@/components/Features";
import AudienceProfile from "@/components/AudienceProfile";
const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <MovingStrip color="bg-neon-purple" />
      <About />
      <MovingStrip color="bg-neon-blue" />
      <KeyPoints />
      {/* <Features /> */}
      {/* <Speakers /> */}
      <PastHighlights />
      <div className="min-h-screen bg-gray-100">
        <StickyWrapper />
      </div>
      <Agenda />
      {/* <Sponsors /> */}
      <PartnershipCTA />
      <KeyTheme />
      <ShouldAttend />
      {/* <AudienceProfile/> */}
      {/* <Features/> */}
      <WhoShouldSponsor />
      <Register />

      {/* <Newsletter /> */}
      <Footer />
    </div>
  );
};

export default Index;
