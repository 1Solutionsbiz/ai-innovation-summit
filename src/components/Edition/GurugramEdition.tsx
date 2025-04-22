
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";

import { PastHighlights } from "@/components/PastHighlights";




import { Footer } from "@/components/Footer";

import Agenda from "@/components/Agenda";
const GurugramEdition = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
   
    
      <PastHighlights />
     
      <Agenda/>
   


      <Footer />
    </div>
  );
};

export default GurugramEdition;
