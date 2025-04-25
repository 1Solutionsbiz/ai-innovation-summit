import React, { useEffect, useRef, useState } from "react";
import { Clock, Calendar, MapPin, Users } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export type AgendaItem = {
  time: string;
  title: string;
  description?: string;
  color: "purple" | "blue";
};

interface AgendaProps {
  items: AgendaItem[];
  eventDetails?: {
    date?: string;
    venue?: string;
    audience?: string;
  };
}

const Agenda: React.FC<AgendaProps> = ({ items, eventDetails }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);
  const detailsRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (detailsRef.current) {
        gsap.from(detailsRef.current, {
          opacity: 0,
          y: 50,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: detailsRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
      }

      itemsRef.current.forEach((el) => {
        if (el) {
          gsap.fromTo(
            el,
            { opacity: 0, x: 100 },
            {
              opacity: 1,
              x: 0,
              duration: 0.6,
              ease: "power2.out",
              scrollTrigger: {
                trigger: el,
                start: "top 90%",
                end: "top 20%",
                scrub: true,
              },
            }
          );
        }
      });

      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 300);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const toggleDescription = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section
      ref={sectionRef}
      className="bg-black py-16 px-4 sm:px-6 md:px-16 lg:px-24 pt-20"
      aria-labelledby="agenda-heading"
      id="agenda"
    >
      <div className="max-w-7xl mx-auto">
        <h2
          id="agenda-heading"
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 text-center uppercase tracking-widest font-orbitron"
        >
          Event Agenda
        </h2>

        {/* Conditionally Render Event Details */}
        {(eventDetails?.date || eventDetails?.venue || eventDetails?.audience) && (
          <div
            ref={detailsRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 bg-gradient-to-r from-purple-900/50 to-blue-900/50 p-6 rounded-xl border border-white/10 backdrop-blur-sm"
          >
            {eventDetails.date && (
              <div className="flex items-center gap-4">
                <div className="p-3 bg-purple-500 rounded-full">
                  <Calendar className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-sm text-white/70">Date</p>
                  <p className="text-lg font-semibold text-white">{eventDetails.date}</p>
                </div>
              </div>
            )}

            {eventDetails.venue && (
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-500 rounded-full">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-sm text-white/70">Venue</p>
                  <p className="text-lg font-semibold text-white">{eventDetails.venue}</p>
                </div>
              </div>
            )}

            {eventDetails.audience && (
              <div className="flex items-center gap-4">
                <div className="p-3 bg-purple-500 rounded-full">
                  <Users className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-sm text-white/70">Audience</p>
                  <p className="text-lg font-semibold text-white">{eventDetails.audience}</p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Agenda Items */}
        <div className="max-w-4xl mx-auto space-y-6">
          {items.map((item, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) itemsRef.current[index] = el;
              }}
              className={`relative transform-gpu rounded-xl p-6 sm:p-8 border border-opacity-100 border-l-4 shadow-lg transition-all duration-300 hover:shadow-xl
                ${
                  item.color === "purple"
                    ? "border-purple-200/30 border-l-purple-200 bg-gradient-to-r from-purple-900/20 to-purple-900/40 text-white"
                    : "border-blue-200/30 border-l-blue-200 bg-gradient-to-r from-blue-900/20 to-blue-900/40 text-white"
                }
                ${activeIndex === index ? "scale-[1.02] shadow-xl" : ""}`}
            >
              <div className="flex items-center gap-3 text-sm sm:text-base text-white/80 mb-2">
                <Clock size={20} aria-hidden="true" />
                <span>{item.time}</span>
              </div>
              <h3
                onClick={() => toggleDescription(index)}
                className="text-xl sm:text-2xl font-semibold mb-2 cursor-pointer hover:text-white transition-colors duration-200"
              >
                {item.title}
              </h3>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  activeIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                {item.description && (
                  <p className="text-white/80 text-sm sm:text-base mt-2">{item.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Agenda;
