import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";

const cards = [
  {
    key: "ideas",
    label: "IDEAS",
    text: "Where Ideas Turn Into Action",
    image: "gurugram/innovation/innovation_2.jpg",
    className: "innovation-grid-ideas",
  },
  {
    key: "network",
    label: "NETWORK",
    text: "Connect With the People Shaping What's Next",
    image: "gurugram/innovation/innovation_1.jpg",
    className: "innovation-grid-network",
  },
  {
    key: "audience",
    label: "AUDIENCE",
    text: "Connect With the People Shaping What's Next",
    image: "gurugram/innovation/innovation_4.jpg",
    className: "innovation-grid-audience",
  },
  {
    key: "live",
    label: "Live Experience",
    text: "See the energy, ideas, and action that define our summit.",
    image: "gurugram/innovation/innovation_3.jpg",
    className: "innovation-grid-live",
  },
];

const InnovationSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [sectionVisible, setSectionVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSectionVisible(false);
          requestAnimationFrame(() => {
            requestAnimationFrame(() => setSectionVisible(true));
          });
        } else {
          setSectionVisible(false);
        }
      },
      { threshold: 0.5 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const togglePlay = () => {
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
      className="relative innovation-section-new bg-white py-16 md:py-28 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-12">
          {/* =================================================
              LEFT TEXT
          ================================================= */}
          <div className="lg:w-[30%] flex-shrink-0 lg:pl-2">
            <p
              className={`innovation-reveal-up innovation-delay-0 text-[#EF3340] text-[16px] md:text-[18px] font-bold uppercase tracking-wide mb-3 ${sectionVisible ? "is-visible" : ""}`}
            >
              Innovation Everywhere
            </p>

            <h2 className="text-[#022158] font-black text-[40px] sm:text-[50px] leading-[1.03] tracking-[-1px]">
              <span className={`innovation-line innovation-reveal-up innovation-delay-1 ${sectionVisible ? "is-visible" : ""}`}>
                More Than
              </span>
              <span className={`innovation-line innovation-reveal-up innovation-delay-2 ${sectionVisible ? "is-visible" : ""}`}>
                A Conference.
              </span>
              <span className={`innovation-line innovation-reveal-up innovation-delay-3 ${sectionVisible ? "is-visible" : ""}`}>
                An Experience.
              </span>
            </h2>
            
            <button
              type="button"
              className={`innovation-know-more mt-12 innovation-reveal-up innovation-delay-4 ${sectionVisible ? "is-visible" : ""}`}
            >
              Know More
            </button>

          </div>

          {/* =================================================
              RIGHT: VIDEO + OVERLAPPING CARDS
          ================================================= */}
          <div className="relative w-full lg:w-[70%] aspect-[1.65/1] innovation-mosaic">
            <div className="innovation-grid">
                {cards.map((card) => (
                  <div
                    key={card.key}
                      className={`
                      ${card.className}
                        innovation-card-reveal
                        innovation-card-${card.key}
                        ${sectionVisible ? "is-visible" : ""}

                      rounded-[10px]
                      overflow-hidden
                      group
                    `}
                  >
                    <img
                      src={card.image}
                      alt={card.label}
                      className="
                        absolute inset-0
                        w-full h-full
                        object-cover

                        transition-transform
                        duration-700

                        group-hover:scale-105
                      "
                    />

                    <div
                      className="
                        absolute inset-0

                        bg-gradient-to-b
                        from-black/70
                        via-black/10
                        to-black/60
                      "
                    />

                    <div className="absolute top-3 left-3 md:top-4 md:left-4 right-3 card-text-section">
                      <h3 className="text-white font-black text-[15px] md:text-[19px] leading-tight uppercase">
                        {card.label}
                      </h3>
                      <p className="text-white/85 text-[10px] md:text-[12px] leading-snug mt-1 max-w-[80%]">
                        {card.text}
                      </p>
                    </div>
                  </div>
                ))}
                <div className={`innovation-card innovation-grid-video innovation-card-reveal innovation-card-video ${sectionVisible ? "is-visible" : ""}`}>
                  <video ref={videoRef} className="absolute inset-0 w-full h-full object-cover" src="videos/innovation_gurugram_26.mp4" autoPlay muted loop playsInline />
                  <div className="absolute inset-0 bg-black/35" />
                  <button onClick={togglePlay} aria-label={isPlaying ? "Pause video" : "Play video"} className="absolute inset-0 m-auto z-20 w-12 h-12 rounded-full bg-white/20 border border-white/70 flex items-center justify-center text-white transition-transform duration-300 hover:scale-110">
                    {isPlaying ? <Pause size={18} fill="white" /> : <Play size={18} fill="white" className="ml-0.5" />}
                  </button>
                </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes innovationFadeInUp {
          from { opacity: 0; transform: translate3d(0, 42px, 0); }
          to { opacity: 1; transform: translate3d(0, 0, 0); }
        }

        @keyframes innovationCardsMerge {
          to { opacity: 1; transform: translate3d(0, 0, 0) scale(1); }
        }

        .innovation-reveal-up,
        .innovation-card-reveal {
          opacity: 0;
          will-change: opacity, transform;
        }

        .innovation-line {
          display: block;
        }

        .innovation-mosaic {
          min-height: 430px;
        }

        .innovation-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 2fr;
          grid-template-rows: 1fr 1.06fr;
          gap: 7px;
          width: 100%;
          height: 100%;
        }

        .innovation-grid > .innovation-card {
          position: relative;
          min-width: 0;
          min-height: 0;
        }

        .innovation-grid-ideas { grid-column: 1; grid-row: 1; }
        .innovation-grid-network { grid-column: 2; grid-row: 1; }
        .innovation-grid-audience { grid-column: 1 / span 2; grid-row: 2; }
        .innovation-grid-video { grid-column: 3; grid-row: 1; }
        .innovation-grid-live { grid-column: 3; grid-row: 2; }

        .innovation-know-more {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 180px;
          height: 48px;
          padding: 0 28px;
          border: 1.5px solid transparent;
          border-radius: 999px;
          background: linear-gradient(#fff, #fff) padding-box, linear-gradient(90deg, #9d6cf0, #ff6b6b) border-box;
          color: #3c63a5;
          font-size: 17px;
          font-weight: 500;
        }

        @media (max-width: 767px) {
          .innovation-mosaic { min-height: 360px; }
          .innovation-grid { gap: 5px; }
        }

        .innovation-reveal-up.is-visible {
          animation: innovationFadeInUp 1.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .innovation-card-reveal.is-visible {
          animation: innovationCardsMerge 1.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .innovation-card-audience { transform: translate3d(90px, -55px, 0) scale(0.82); animation-delay: 150ms; }
        .innovation-card-ideas { transform: translate3d(-70px, 70px, 0) scale(0.82); animation-delay: 300ms; }
        .innovation-card-network { transform: translate3d(95px, 0, 0) scale(0.82); animation-delay: 450ms; }
        .innovation-card-video { transform: translate3d(-70px, 70px, 0) scale(0.82); animation-delay: 550ms; }
        .innovation-card-live { transform: translate3d(70px, 70px, 0) scale(0.82); animation-delay: 600ms; }

        .innovation-delay-1 { animation-delay: 250ms; }
        .innovation-delay-2 { animation-delay: 550ms; }
        .innovation-delay-3 { animation-delay: 850ms; }
        .innovation-delay-4 { animation-delay: 1150ms; }

        @media (prefers-reduced-motion: reduce) {
          .innovation-reveal-up.is-visible,
          .innovation-card-reveal.is-visible {
            animation-duration: 1ms;
            animation-delay: 0ms;
          }
        }
      `}</style>
    </section>
  );
};

export default InnovationSection;