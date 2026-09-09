import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// ---------- Types ----------
type Speaker = {
  name: string;
  role: string;
  company: string;
  image: string;
};

type EventGroup = {
  location: string;
  year: string;
  speakers: Speaker[];
};

// ---------- Sample data (swap with real data) ----------
const EVENTS: EventGroup[] = [
  {
    location: "Delhi",
    year: "2024",
    speakers: [
      // {
      //   name: "Siddharth Sureka",
      //   role: "Chief AI Officer",
      //   company: "Motilal Oswal Financial Services",
      //   image: "/gurugram/featuredspeakers/speaker_0.png",
      // },
        {
          name: "Hetal Presswala",
          role: "Chief Information Security Officer, Kalpatru Projects International ",
          company: "",
          image: "/speakers/hetal-presswala.png",
        },
        {
          name: "Hetal Presswala",
          role: "Chief Information Security Officer, Kalpatru Projects International ",
          company: "",
          image: "/speakers/hetal-presswala.png",
        },
        {
          name: "Hetal Presswala",
          role: "Chief Information Security Officer, Kalpatru Projects International ",
          company: "",
          image: "/speakers/hetal-presswala.png",
        },
        {
          name: "Hetal Presswala",
          role: "Chief Information Security Officer, Kalpatru Projects International ",
          company: "",
          image: "/speakers/hetal-presswala.png",
        },
        {
          name: "Hetal Presswala",
          role: "Chief Information Security Officer, Kalpatru Projects International ",
          company: "",
          image: "/speakers/hetal-presswala.png",
        },
        {
          name: "Hetal Presswala",
          role: "Chief Information Security Officer, Kalpatru Projects International ",
          company: "",
          image: "/speakers/hetal-presswala.png",
        },
        {
          name: "Hetal Presswala",
          role: "Chief Information Security Officer, Kalpatru Projects International ",
          company: "",
          image: "/speakers/hetal-presswala.png",
        },
        {
          name: "Hetal Presswala",
          role: "Chief Information Security Officer, Kalpatru Projects International ",
          company: "",
          image: "/speakers/hetal-presswala.png",
        },
        {
          name: "Hetal Presswala",
          role: "Chief Information Security Officer, Kalpatru Projects International ",
          company: "",
          image: "/speakers/hetal-presswala.png",
        },
        {
          name: "Hetal Presswala",
          role: "Chief Information Security Officer, Kalpatru Projects International ",
          company: "",
          image: "/speakers/hetal-presswala.png",
        },
        {
          name: "Hetal Presswala",
          role: "Chief Information Security Officer, Kalpatru Projects International ",
          company: "",
          image: "/speakers/hetal-presswala.png",
        },
        {
          name: "Hetal Presswala",
          role: "Chief Information Security Officer, Kalpatru Projects International ",
          company: "",
          image: "/speakers/hetal-presswala.png",
        },
        {
          name: "Hetal Presswala",
          role: "Chief Information Security Officer, Kalpatru Projects International ",
          company: "",
          image: "/speakers/hetal-presswala.png",
        },
        {
          name: "Hetal Presswala",
          role: "Chief Information Security Officer, Kalpatru Projects International ",
          company: "",
          image: "/speakers/hetal-presswala.png",
        },
        {
          name: "Hetal Presswala",
          role: "Chief Information Security Officer, Kalpatru Projects International ",
          company: "",
          image: "/speakers/hetal-presswala.png",
        },
        {
          name: "Hetal Presswala",
          role: "Chief Information Security Officer, Kalpatru Projects International ",
          company: "",
          image: "/speakers/hetal-presswala.png",
        },
        {
          name: "Hetal Presswala",
          role: "Chief Information Security Officer, Kalpatru Projects International ",
          company: "",
          image: "/speakers/hetal-presswala.png",
        },
        {
          name: "Hetal Presswala",
          role: "Chief Information Security Officer, Kalpatru Projects International ",
          company: "",
          image: "/speakers/hetal-presswala.png",
        },
    ],
  },


  
  {
    location: "Bangalore",
    year: "2024",
    speakers: [
      {
        name: "Suvodip Chatterjee",
        role: "Global Head of AI Data Science & MLOps",
        company: "Signify",
        image: "/gurugram/featuredspeakers/speaker_1.png",
      },
    ],
  },
  {
    location: "Mumbai",
    year: "2024",
    speakers: [
      {
        name: "Jyothi Kodenkiri",
        role: "VP Cloud Engineering",
        company: "Deutsche Bank",
        image: "/gurugram/featuredspeakers/speaker_2.png",
      },
    ],
  },
  {
    location: "Mumbai",
    year: "2025",
    speakers: [
      {
        name: "Siddharth Sureka",
        role: "Chief AI Officer",
        company: "Motilal Oswal Financial Services",
        image: "/gurugram/featuredspeakers/speaker_3.png",
      },
    ],
  },
  {
    location: "Bangalore",
    year: "2025",
    speakers: [
      {
        name: "Suvodip Chatterjee",
        role: "Global Head of AI Data Science & MLOps",
        company: "Signify",
        image: "/gurugram/featuredspeakers/speaker_4.png",
      },
    ],
  },
  {
    location: "Delhi",
    year: "2026",
    speakers: [
      {
        name: "Suvodip Chatterjee",
        role: "Global Head of AI Data Science & MLOps",
        company: "Signify",
        image: "/gurugram/featuredspeakers/speaker_5.png",
      },
    ],
  },
  {
    location: "Bangalore",
    year: "2026",
    speakers: [
      {
        name: "Suvodip Chatterjee",
        role: "Global Head of AI Data Science & MLOps",
        company: "Signify",
        image: "/gurugram/featuredspeakers/speaker_0.png",
      },
    ],
  },
];

const FeaturedSpeakers = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const autoScrollFrame = useRef<number | null>(null);
  const lastScrollTime = useRef<number | null>(null);
  const [activeEventIndex, setActiveEventIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isArrowMoving, setIsArrowMoving] = useState(false);

  const activeSpeakers = EVENTS[activeEventIndex].speakers;
  const loopSpeakers = [
    ...activeSpeakers,
    ...activeSpeakers,
    ...activeSpeakers,
  ];

  const getCardWidth = () => {
    const container = scrollRef.current;
    const card = container?.querySelector<HTMLElement>('[data-speaker-card]');
    if (!container || !card) return 140;

    const styles = window.getComputedStyle(container);
    const gap = parseFloat(styles.columnGap || styles.gap) || 20;
    return card.offsetWidth + gap;
  };

  const normalizeScrollPosition = () => {
    const container = scrollRef.current;
    if (!container || activeSpeakers.length === 0) return;

    const oneSetWidth = getCardWidth() * activeSpeakers.length;
    if (container.scrollLeft >= oneSetWidth * 2) {
      container.scrollLeft -= oneSetWidth;
    }
    if (container.scrollLeft <= 0) {
      container.scrollLeft += oneSetWidth;
    }
  };

  const scrollCarousel = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;

    setIsArrowMoving(true);
    lastScrollTime.current = null;
    container.scrollBy({
      left: direction === "left" ? -220 : 220,
      behavior: "smooth",
    });

    window.setTimeout(() => {
      normalizeScrollPosition();
      setIsArrowMoving(false);
    }, 500);
  };

  const goToEvent = (eventIndex: number) => {
    setActiveEventIndex(eventIndex);
    // reset carousel scroll position whenever the selected event changes
    scrollRef.current?.scrollTo({ left: 0, behavior: "smooth" });
  };

  const scrollYears = (direction: "left" | "right") => {
    const newIndex =
      direction === "left"
        ? Math.max(0, activeEventIndex - 1)
        : Math.min(EVENTS.length - 1, activeEventIndex + 1);
    goToEvent(newIndex);
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container || activeSpeakers.length === 0) return;

    container.scrollLeft = getCardWidth() * activeSpeakers.length;
  }, [activeEventIndex, activeSpeakers.length]);

  useEffect(() => {
    if (autoScrollFrame.current !== null) {
      cancelAnimationFrame(autoScrollFrame.current);
      autoScrollFrame.current = null;
    }

    lastScrollTime.current = null;
    if (isHovering || isArrowMoving || activeSpeakers.length === 0) return;

    const scrollContinuously = (timestamp: number) => {
      const container = scrollRef.current;
      if (!container) return;

      const previousTimestamp = lastScrollTime.current ?? timestamp;
      const elapsed = Math.min(timestamp - previousTimestamp, 40);
      container.scrollLeft += elapsed * 1;
      lastScrollTime.current = timestamp;
      normalizeScrollPosition();
      autoScrollFrame.current = requestAnimationFrame(scrollContinuously);
    };

    autoScrollFrame.current = requestAnimationFrame(scrollContinuously);

    return () => {
      if (autoScrollFrame.current !== null) {
        cancelAnimationFrame(autoScrollFrame.current);
        autoScrollFrame.current = null;
      }
    };
  }, [activeEventIndex, activeSpeakers.length, isArrowMoving, isHovering]);

  return (
    <section className="bg-white py-16 px-6 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-10">
          {/* Left column */}
          <div className="flex flex-col justify-center">
            <p className="text-red-600 font-semibold text-lg">Retrospective</p>
            <h2 className="mt-2 text-5xl font-black text-blue-950 leading-[1.05]">
              Featured
              <br />
              Speakers
            </h2>
            <button
              type="button"
              className="view-all-speakers mt-14"
            >
              View all speakers
            </button>
          </div>

          {/* Right column */}
          <div className="relative min-w-0">
            {/* Carousel nav arrows */}
            <div className="flex justify-start gap-3 mb-6">
              <button
                type="button"
                onClick={() => scrollCarousel("left")}
                aria-label="Scroll speakers left"
                className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center text-slate-600 hover:bg-slate-50 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => scrollCarousel("right")}
                aria-label="Scroll speakers right"
                className="w-10 h-10 rounded-full bg-blue-950 flex items-center justify-center text-white hover:bg-blue-900 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Speaker cards — only the selected event's speakers */}
            <div
              key={activeEventIndex}
              ref={scrollRef}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              className="flex w-full min-w-0 gap-5 overflow-x-auto scroll-smooth pb-2 no-scrollbar"
            >
              {loopSpeakers.map((speaker, idx) => (
                <div
                  key={idx}
                  data-speaker-card
                  className="speaker-card group flex-shrink-0 w-[120px] overflow-hidden rounded-2xl border border-blue-950 bg-white p-0 transition-colors duration-300 hover:bg-black"
                  style={{ animationDelay: `${idx * 90}ms` }}
                >
                  <div
                    className="aspect-square w-full overflow-hidden bg-cover bg-center bg-no-repeat transition-colors duration-300 group-hover:bg-black"
                    style={{
                      backgroundImage: "url('/gurugram/pastspeakers/bg.jpg')",
                    }}
                  >
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      className="h-full w-full object-cover grayscale transition-transform duration-500 ease-out group-hover:scale-[0.96]"
                    />
                  </div>
                  <div className="bg-white px-2 pb-2 pt-3 transition-colors duration-300 group-hover:bg-black">
                    <p className="text-sm font-bold text-black transition-colors duration-300 group-hover:text-white">{speaker.name}</p>
                    <p className="mt-1 text-xs leading-tight text-black transition-colors duration-300 group-hover:text-white">
                    {speaker.role}
                    <br />
                    {speaker.company}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Year / location selector */}
            <div className="mt-8 flex items-center gap-6">
              <button
                type="button"
                onClick={() => scrollYears("left")}
                aria-label="Previous event"
                className="text-slate-400 hover:text-slate-700 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex gap-10 overflow-x-auto no-scrollbar">
                {EVENTS.map((event, idx) => {
                  const isActive = idx === activeEventIndex;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => goToEvent(idx)}
                      className={`flex-shrink-0 text-left font-semibold leading-tight transition-colors ${
                        isActive ? "text-red-600" : "text-blue-950"
                      }`}
                    >
                      {event.location}
                      <br />
                      {event.year}
                    </button>
                  );
                })}
              </div>

              <button
                type="button"
                onClick={() => scrollYears("right")}
                aria-label="Next event"
                className="text-slate-400 hover:text-slate-700 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes speakerCardReveal {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .speaker-card {
          opacity: 0;
          animation: speakerCardReveal 650ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        @media (prefers-reduced-motion: reduce) {
          .speaker-card {
            animation-duration: 1ms;
          }
        }
      `}</style>
    </section>
  );
};

export default FeaturedSpeakers;