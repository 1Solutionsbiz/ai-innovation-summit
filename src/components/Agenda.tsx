// Agenda.tsx
import React, { useEffect, useRef, useState } from "react";
import { Clock } from "lucide-react";
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
}

const Agenda: React.FC<AgendaProps> = ({ items }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      itemsRef.current.forEach((el) => {
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
              start: "top 70%",
              end: "top 40%",
              scrub: true,
            },
          }
        );
      });
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
      <h2
        id="agenda-heading"
        className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-12 text-center uppercase tracking-widest font-orbitron"
      >
        Event Agenda
      </h2>
      <div className="max-w-4xl mx-auto space-y-6">
        {items.map((item, index) => (
          <div
            key={index}
            ref={(el) => {
              if (el) itemsRef.current[index] = el;
            }}
            className={`relative transform-gpu rounded-xl p-6 sm:p-8 border border-opacity-50 border-l-4 shadow-lg transition-all duration-300 
              ${item.color === "purple"
                ? "border-[#e6ceff] border-l-[#d8b4fe] bg-[#e6ceff] text-black"
                : "border-[#bde5f3] border-l-[#a5e8ff] bg-[#bde5f3] text-black"
              }
              ${activeIndex === index ? "scale-105 shadow-2xl" : "hover:scale-105 hover:shadow-2xl"}`}
          >
            <div className="flex items-center gap-3 text-sm sm:text-base text-black mb-2">
              <Clock size={20} aria-hidden="true" />
              <span>{item.time}</span>
            </div>
            <h3
              onClick={() => toggleDescription(index)}
              className="text-xl sm:text-2xl font-semibold mb-2 cursor-pointer"
            >
              {item.title}
            </h3>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                activeIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              {item.description && (
                <p className="text-black text-sm sm:text-base mt-2">{item.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Agenda;
