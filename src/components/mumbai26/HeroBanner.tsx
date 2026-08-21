import { Button } from "@/components/ui/button";
import guildLogo from "@/assets/guild-logo.png";
import aiinvationlogo from "/logo/logo-26.png";
import { MapPin, CalendarDays } from "lucide-react"; // ✅ Added icons

const HeroBanner = () => {
  const videoSrc = "/videos/Delhi-2026_video.mp4";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 🔹 Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>


<div className="row text-white absolute top-4 right-20 p-4 md:p-8 lg:p-12 singhaniya-badge">
    {/* Logo + Edition Badge */}
    <div className="mb-8 flex justify-center items-center gap-6 opacity-0 animate-fade-in">
        {/* 6th Edition Badge */}
        <div
        className="relative glass-button-clr h100 text-white font-semibold text-lg px-6 py-3 text-center uppercase shadow-lg"
        style={{
            clipPath: "polygon(0 0, 100% 0, 100% 80%, 50% 100%, 0 80%)",
            padding: "10px",
        }}
        >
        <span className="pt10 block leading-tight">
            7<sup>th</sup>
            <br />
            EDITION
        </span>
        </div>
    </div>
</div>

      {/* 🔹 Content */}
      <div className="relative z-10 container nwdglm mx-auto px-4 py-20 text-center">
        {/* Logo + Edition Badge */}
        
        
        {/* Guild Logo */}
        {/* <div className="flex justify-center items-center gap-6 opacity-0 animate-fade-in guild-mb-logo">
          <img
            src={guildLogo}
            alt="The Guild"
            className="h-auto w-auto mt-5 object-contain"
          />
        </div> */}

        {/* Main Title */}
        <div className="opacity-0 animate-fade-in animation-delay-200">
          <h1 className="text-white">
            <img
              src={aiinvationlogo}
              alt="Ai Innovation Summit"
              className=" mx-auto h-24 md:h-32 lg:h-40 ailogmain-bang26 object-contain"
            />
            {/* <span className="block text-5xl md:text-7xl lg:text-8xl font-bold mb-2">
              <span className="text-white">AI</span>
              <span className="bg-gradient-to-r from-purple-500 to-fuchsia-600 bg-clip-text text-transparent">
                Innovation
              </span>
            </span>
            <span className="block text-6xl md:text-8xl lg:text-9xl font-black tracking-wider">
              SUMMIT
            </span> */}
          </h1>
        </div>

        {/* Event Details */}
        <div className="space-y-3 mb-0 moblocationbeng26 opacity-0 animate-fade-in-up animation-delay-600">
          <p className="text-white text-xl md:text-2xl font-normal tracking-wide flex items-center justify-center gap-4">
            
            {/* Date Icon + Month */}
            {/* <span className="flex items-center gap-2">
              <CalendarDays className="w-6 h-6 text-fuchsia-400" />
              21st January 2026 
            </span> */}
            {/* <span className="mobldidr">|</span> */}
            {/* Location Icon + Delhi */}
            <span className="bega26 items-center mobbega26">
              <span>
                <CalendarDays className="w-6 h-6 text-fuchsia-400" /> 11<sup>th</sup> June 2026 |
              </span>
              <span>
                <MapPin className="w-6 h-6 text-fuchsia-400" /> Conrad Hotel, Bengaluru
              </span>
            </span>

          </p>

          <h2 className="text-white text-2xl md:text-4xl lg:text-3xl font-bold tracking-tight mt-2i mb-2i">
            From Assistance to Autonomy
          </h2>
          <p className="text-white text-2xl mb-4i">
            Where Agentic AI Meets Enterprise-Scale Execution
          </p>

          
          <a
            href="#bengalururegistrationform"
            className="md:hidden text-white hover:scale-105 transition-all duration-300 text-xl px-4 py-2 mt-2i rounded-[5px] font-semibold tracking-wide shadow-lg hover:shadow-xl"
            style={{ background: "#bf1c88" }}
          >
            Registrations Closed 
          </a>
          
        </div>

        {/* CTA Button */}
        {/* <div className="mt-12 opacity-0 animate-scale-in animation-delay-800">
          <a href="#delhiregistrationform">
            <Button
              size="lg"
              className=" text-white hover:scale-105 transition-all duration-300 text-lg px-8 py-6 rounded-[5px] font-semibold tracking-wide shadow-lg hover:shadow-xl backdrop-blur-sm"
                style={{ background: "#bf1c88" }}
            >
              Registrations Closed
            </Button>
          </a>
        </div> */}

      </div>
    </section>
  );
};

export default HeroBanner;
