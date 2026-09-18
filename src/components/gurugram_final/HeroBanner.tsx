import { useEffect, useRef, useState } from "react";
import { CalendarDays, MapPin, Pause, Play } from "lucide-react";
import { getScrollDirection } from "@/hooks/useScrollDirection";

const HeroBanner = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [revealDirection, setRevealDirection] = useState<"up" | "down">("down");

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealDirection(getScrollDirection());
          setIsVisible(false);
          requestAnimationFrame(() => {
            requestAnimationFrame(() => setIsVisible(true));
          });
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0, rootMargin: "-15% 0px -15% 0px" },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const heroDelay = (order: number, total: number) =>
    `${(revealDirection === "up" ? total - 1 - order : order) * 150}ms`;

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
    <section
      ref={sectionRef}
      className="relative flex items-center overflow-hidden bg-slate-950 herosectiondguru26"
    >
      {/* Background video, lightly brand-tinted to read as a duotone */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/delhi-gurugram-26.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
     

      <div className="absolute inset-0 bg-[#000] opacity-70" />
      <div className="" />

      
      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 pt-24 pb-20 md:pt-20 w-full">
        <div className="grid items-center gap-8 lg:grid-cols-[60%_minmax(0,1fr)]">
          <div className="relative flex justify-center lg:justify-start">
            <img
              src="/gurugram/logo-conbain.png"
              alt="AI Innovation Summit partner showcase"
              className={`w-full max-w-[70%] lg:max-w-[50%] object-contain drop-shadow-[0_25px_50px_rgba(8,145,178,0.25)] partners-reveal-up ${isVisible ? "is-visible" : ""}`}
              style={{ animationDelay: heroDelay(0, 5) }}
            />
          </div>

          <div className="flex flex-col items-center lg:items-start">

            <div
              className="mt-10 mmt-35s flex gap-x-8 gap-y-3 text-slate-200 hero-info-venue"
            >
              <span
                className={`flex items-center gap-2 font-medium text-[15px] sm:text-[15px] md:text-[15px] xl:text-[18px] partners-reveal-up ${isVisible ? "is-visible" : ""}`}
                style={{ animationDelay: heroDelay(1, 5) }}
              >
                <CalendarDays className="w-5 h-5 text-white" />
                December 2, 2026
              </span>
              <span
                className={`flex items-center gap-2 font-medium text-[15px] sm:text-[15px] md:text-[15px] xl:text-[18px] partners-reveal-up ${isVisible ? "is-visible" : ""}`}
                style={{ animationDelay: heroDelay(2, 5) }}
              >
                <MapPin className="w-5 h-5 text-white" />
                The Leela Ambience Gurugram, Delhi-NCR
              </span>
            </div>

            <div
              className="mt-10 mmt-10 flex flex-wrap items-center gap-5"
            >
              <a
                href="#delhincrregistrationform"
                className={`inline-flex items-center rounded-full font-semibold px-5 py-2 md:px-7 md:py-3 text-sm md:text-base hover:scale-105 transition-transform duration-300 shadow-lg btn-bg partners-reveal-up ${isVisible ? "is-visible" : ""}`}
                style={{ animationDelay: heroDelay(3, 5) }}
              >
                Attend AIIS 2026
              </a>
              <a
                href="#focus"
                className={`inline-flex items-center rounded-full font-semibold px-5 py-2 md:px-7 md:py-3 text-sm md:text-base hover:scale-105 transition-transform duration-300 shadow-lg btn-bg-hover partners-reveal-up ${isVisible ? "is-visible" : ""}`}
                style={{ animationDelay: heroDelay(4, 5) }}
              >
                Explore Partnership
              </a>
            </div>
          </div>
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
