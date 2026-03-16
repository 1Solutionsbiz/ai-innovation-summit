import Navigation from "@/components/bengaluru26/Navigation";

import Agenda from "@/components/bengaluru26/Agenda"; 

import { BengaluruJune26RegisterForm } from "@/components/BengaluruJune26RegisterForm";

import Footer from "@/components/newhome/Footer";


import "@/styles/mystyle.css";





const DelhiEditionNew = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <Agenda />
      
      <section id="bengalururegistrationform" ></section>
      <BengaluruJune26RegisterForm />
      
      <Footer />
    </div>
  );
};

export default DelhiEditionNew;