
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";

import { PastHighlights } from "@/components/PastHighlights";




import { Footer } from "@/components/Footer";


import Objectives from "./Objectives";
import StatsSection from "./StatsSection";
import SpeakersSection from "./SpeakersSection";
const MumbaiEdition = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
   
    
      <PastHighlights />
      <Objectives/>
     <StatsSection/>
     <SpeakersSection/>
  
   


      <Footer />
    </div>
  );
};

export default MumbaiEdition;
