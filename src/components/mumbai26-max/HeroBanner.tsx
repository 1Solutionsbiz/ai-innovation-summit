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
    <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-950">
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
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/50 via-purple-950/20 to-fuchsia-950/30 mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/10 to-transparent" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 pt-32 pb-20 md:pt-40 w-full">
        <p className="text-sm md:text-base font-semibold uppercase tracking-[0.2em] text-fuchsia-400 mb-6">
          AI Innovation Summit — Mumbai 2026
        </p>

        <h1 className="font-inter font-black text-white leading-[0.9] tracking-[-3.5px] text-6xl sm:text-7xl md:text-[88px]">
          Built to
          <br />
          lead.
        </h1>

        <p className="mt-8 max-w-xl text-lg md:text-xl text-slate-300">
          Get ready for what&apos;s next — a day of enterprise AI strategy,
          hands-on sessions, and the leaders putting agentic AI to work.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-slate-200">
          <span className="flex items-center gap-2 text-sm md:text-base font-medium">
            <CalendarDays className="w-5 h-5 text-fuchsia-400" />
            Date to be announced
          </span>
          <span className="flex items-center gap-2 text-sm md:text-base font-medium">
            <MapPin className="w-5 h-5 text-fuchsia-400" />
            Mumbai
          </span>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-5">
          <a
            href="#mumbairegistrationform"
            className="inline-flex items-center rounded-full bg-white text-slate-900 font-semibold px-7 py-3 text-sm md:text-base hover:scale-105 transition-transform duration-300 shadow-lg"
          >
            Notify me when registration opens
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
