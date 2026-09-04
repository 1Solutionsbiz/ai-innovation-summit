import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";

const cards = [
  {
    key: "audience",
    label: "AUDIENCE",
    text: "Connect With the People Shaping What's Next",
    image: "gurugram/innovation/innovation_4.jpg",
    className: "top-0 right-0 w-[58%] h-[45%]",
  },
  {
    key: "ideas",
    label: "IDEAS",
    text: "Where Ideas Turn Into Action",
    image: "gurugram/innovation/innovation_2.jpg",
    className: "bottom-0 right-[27%] w-[31%] h-[50%]",
  },
  {
    key: "network",
    label: "NETWORK",
    text: "Connect With the People Shaping What's Next",
    image: "gurugram/innovation/innovation_1.jpg",
    className: "top-[47%] right-0 w-[26%] h-[24%] network-card",
  },
  {
    key: "live",
    label: "Live Experience",
    text: "See the energy, ideas, and action that define our summit.",
    image: "gurugram/innovation/innovation_3.jpg",
    className: "bottom-0 right-0 w-[26%] h-[24%] live-card",
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
      className="relative innovation-section-new bg-white py-16 md:py-24 overflow-hidden"
    >
      <div className="max-w-[1500px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
          {/* =================================================
              LEFT TEXT
          ================================================= */}
          <div className="lg:w-[30%] flex-shrink-0">
            <p
              className={`innovation-reveal-up innovation-delay-0 text-[#EF3340] text-[16px] md:text-[18px] font-bold uppercase tracking-wide mb-3 ${sectionVisible ? "is-visible" : ""}`}
            >
              Innovation Everwhere
            </p>

            <h2 className="text-[#022158] font-black text-[42px] sm:text-[52px] leading-[1.02] tracking-[-1px]">
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
              className={`view-all-speakers mt-5 innovation-reveal-up innovation-delay-4 ${sectionVisible ? "is-visible" : ""}`}
            >
              Explore All Content
            </button>

          </div>

          {/* =================================================
              RIGHT: VIDEO + OVERLAPPING CARDS
          ================================================= */}
          <div
            className="
              relative
              w-full
              lg:w-[70%]

              aspect-[16/9]

              rounded-[24px]
              overflow-hidden

              bg-black
              shadow-2xl
              innovation-video-section
            "
          >
            <video
              ref={videoRef}
              className="absolute inset-0 w-full h-full object-cover"
              src="videos/Promo-21-August.mp4"
              autoPlay
              muted
              loop
              playsInline
            />

            {/* PLAY / PAUSE BUTTON */}
            <button
              onClick={togglePlay}
              aria-label={isPlaying ? "Pause video" : "Play video"}
              className="
                absolute
                left-[20%]
                top-1/2
                -translate-x-1/2
                -translate-y-1/2

                w-12
                h-12

                rounded-full

                bg-white/25
                backdrop-blur-sm

                border
                border-white/60

                flex
                items-center
                justify-center

                text-white

                transition-transform
                duration-300
                hover:scale-110

                z-20
              "
            >
              {isPlaying ? (
                <Pause size={18} fill="white" />
              ) : (
                <Play size={18} fill="white" className="ml-0.5" />
              )}
            </button>

            {/* CARD GRID OVERLAY */}
            <div className="absolute inset-0 p-3 md:p-0">
              <div className="relative w-full h-full">
                {cards.map((card) => (
                  <div
                    key={card.key}
                      className={`
                      absolute
                      ${card.className}

                        innovation-card-reveal
                        innovation-card-${card.key}
                        ${sectionVisible ? "is-visible" : ""}

                      m-1.5
                      md:m-2

                      rounded-[16px]
                      overflow-hidden

                      border
                      border-fuchsia-400/60

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

        .innovation-reveal-up.is-visible {
          animation: innovationFadeInUp 1.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .innovation-card-reveal.is-visible {
          animation: innovationCardsMerge 1.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .innovation-card-audience { transform: translate3d(90px, -55px, 0) scale(0.82); animation-delay: 150ms; }
        .innovation-card-ideas { transform: translate3d(-70px, 70px, 0) scale(0.82); animation-delay: 300ms; }
        .innovation-card-network { transform: translate3d(95px, 0, 0) scale(0.82); animation-delay: 450ms; }
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