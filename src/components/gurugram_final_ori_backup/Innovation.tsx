import { useRef, useState } from "react";
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
  const [isPlaying, setIsPlaying] = useState(true);

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
    <section className="relative innovation-section-new bg-white py-16 md:py-24 overflow-hidden">
      <div className="max-w-[1500px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
          {/* =================================================
              LEFT TEXT
          ================================================= */}
          <div className="lg:w-[30%] flex-shrink-0">
            <p className="text-[#EF3340] text-[16px] md:text-[18px] font-bold uppercase tracking-wide mb-3">
              Innovation Everwhere
            </p>

            <h2 className="text-[#022158] font-black text-[42px] sm:text-[52px] leading-[1.02] tracking-[-1px]">
              More Than
              <br />
              A Conference.
              <br />
              An Experience.
            </h2>
            
            <button type="button" className="view-all-speakers mt-5">
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
    </section>
  );
};

export default InnovationSection;