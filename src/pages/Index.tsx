
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Speakers } from "@/components/Speakers";
import { About } from "@/components/About";
import { Tickets } from "@/components/Tickets";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Speakers />
      <About />
      <Tickets />
      <Footer />
    </div>
  );
};

export default Index;
