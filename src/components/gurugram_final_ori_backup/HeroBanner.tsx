import { useRef, useState } from "react";
import { CalendarDays, MapPin, Pause, Play } from "lucide-react";

const HeroBanner = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };


  
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-950 herosection">
      {/* Background video, lightly brand-tinted to read as a duotone */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/Promo-21-August.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
     

      <div className="absolute inset-0 bg-[#000] opacity-70" />
      <div className="" />

      
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 pt-32 pb-20 md:pt-40 w-full">
        <p className="text-sm md:text-base font-semibold text-white">
          AI Innovation Summit - Delhi 2026
        </p>

        <h1 className="font-inter font-black text-white leading-[0.9] tracking-[-3.5px] text-6xl sm:text-7xl md:text-[88px]">
          From Assistance 
          <br />
          to Autonomy.
        </h1>

        <p className="mt-8 max-w-xl text-lg md:text-xl text-slate-300">
          Where Agentic AI Meets Enterprise-Scale Execution
        </p>

        <div className="mt-10 flex gap-x-8 gap-y-3 text-slate-200 hero-info-venue">
          <span className="flex items-center gap-2 text-lg md:text-base font-medium">
            <CalendarDays className="w-5 h-5 text-white" />
            December 2, 2026
          </span>
          <span className="flex items-center gap-2 text-lg md:text-base font-medium">
            <MapPin className="w-5 h-5 text-white" />
            The Leela Ambience Gurugram, Delhi-NCR
          </span>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-5">
          <a
            href="#mumbairegistrationform"
            className="inline-flex items-center rounded-full font-semibold px-7 py-3 text-sm md:text-base hover:scale-105 transition-transform duration-300 shadow-lg btn-bg"
          >
            Registrations Open Soon
          </a>
          <a
            href="#mumbairegistrationform"
            className="inline-flex items-center rounded-full font-semibold px-7 py-3 text-sm md:text-base hover:scale-105 transition-transform duration-300 shadow-lg btn-bg-hover"
          >
            Registrations Open Soon
          </a>
        </div>
      </div>

      <button
        type="button"
        onClick={togglePlayback}
        aria-label={isPlaying ? "Pause background video" : "Play background video"}
        className="absolute bottom-6 right-6 md:bottom-10 md:right-10 z-10 w-11 h-11 rounded-full bg-white/15 backdrop-blur-sm border border-white/30 text-white flex items-center justify-center hover:bg-white/25 transition-colors"
      >
        {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
      </button>
    </section>
  );
};

export default HeroBanner;
