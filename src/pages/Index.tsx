
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import MovingStrip from "@/components/MovingStrip";
import { About } from "@/components/About";
import { KeyPoints } from "@/components/KeyPoints";
import { Features } from "@/components/Features";
import { Speakers } from "@/components/Speakers";
import { PastHighlights } from "@/components/PastHighlights";
import { Schedule } from "@/components/Schedule";
import { Sponsors } from "@/components/Sponsors";
import { PartnershipCTA } from "@/components/PartnershipCTA";

import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <MovingStrip  color="bg-neon-purple"/>
      <About />
      <MovingStrip color="bg-neon-blue"/>
      <KeyPoints />
      {/* <Features /> */}
      <Speakers />
      <PastHighlights />
      {/* <Schedule /> */}
      <Sponsors />
      <PartnershipCTA />
     
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
