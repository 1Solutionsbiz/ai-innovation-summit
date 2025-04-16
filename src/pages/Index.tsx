
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Features } from "@/components/Features";
import { Speakers } from "@/components/Speakers";
import { Schedule } from "@/components/Schedule";
import { Sponsors } from "@/components/Sponsors";
import { Venue } from "@/components/Venue";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Features />
      <Speakers />
      <Schedule />
      <Sponsors />
      <Venue />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
