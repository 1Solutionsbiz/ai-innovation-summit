import { useRef, useState } from "react";
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
          name: "Chaitanya Gogineni",
          role: "Partner - Lighthouse (Data, Analytics and AI), KPMG India",
          company: "",
          image: "/speakers/chaitanya-gogineni.png",
        },
        {
          name: "Rajat Mathur",
          role: "Partner, BCG (Boston Consulting Group)",
          company: "",
          image: "/speakers/rajat-mathur.png",
        },
        {
          name: "Sankarson Banerjee",
          role: "Director, Dialoqa and Former CIO, RBL",
          company: "",
          image: "/speakers/sankarson-banerjee.png",
        },
        {
          name: "Sudipta Ghosh",
          role: " Partner, PwC India",
          company: "",
          image: "/speakers/sudipta-ghosh.png",
        },
      {
          name: "Mubin Shaikh",
          role: "Partner, Technology Consulting – Cybersecurity EY",
          company: "",
          image: "/speakers/mubin-shaikh.png",
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
  const [activeEventIndex, setActiveEventIndex] = useState(0);

  const activeSpeakers = EVENTS[activeEventIndex].speakers;

  const scrollCarousel = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;
    const amount = 220;
    container.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
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

  return (
    <section className="bg-white py-16 px-6 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-10">
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
              className="flex w-full min-w-0 gap-5 overflow-x-auto scroll-smooth pb-2 no-scrollbar"
            >
              {activeSpeakers.map((speaker, idx) => (
                <div
                  key={idx}
                  className="speaker-card group flex-shrink-0 w-[190px] rounded-2xl border border-blue-950 p-0 bg-white transition-colors duration-300 hover:bg-blue-950"
                  style={{ animationDelay: `${idx * 90}ms` }}
                >
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full aspect-square object-cover rounded-xl grayscale transition-transform duration-500 ease-out group-hover:scale-[0.96]"
                  />
                  <p className="mt-3 px-2 text-sm font-bold text-blue-950 transition-colors duration-300 group-hover:text-white">{speaker.name}</p>
                  <p className="mt-1 px-2 py-2 text-xs leading-tight text-slate-600 transition-colors duration-300 group-hover:text-white/70">
                    {speaker.role}
                    <br />
                    {speaker.company}
                  </p>
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