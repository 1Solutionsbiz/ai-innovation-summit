import React, { useEffect, useRef } from "react";
import { Clock } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type AgendaItem = {
  time: string;
  title: string;
  description?: string;
  color: "purple" | "blue";
};

const agenda: AgendaItem[] = [
  {
    time: "09:00 AM - 09:45 AM",
    title: "Registration",
    color: "purple",
  },
  {
    time: "10:00 AM - 11:00 AM",
    title: "Cloud, AI and Digital Transformation: The Whole Is Greater Than the Sum of Its Parts.",
    color: "blue",
  },
  {
    time: "11:00 AM - 11:30 AM",
    title: "Networking Tea/Coffee Break",
    color: "purple",
  },
  {
    time: "11:30 AM - 12:15 PM",
    title: "Rethinking Zero-Trust: An AI-Based Approach to Cybersecurity",
    color: "blue",
  },
  {
    time: "12:15 PM - 12:45 PM",
    title: "How Humans and AI-Driven Agents Propel Work Success",
    color: "purple",
  },
  {
    time: "12:45 PM - 01:30 PM",
    title: "Re-imagining the Future of Work: AI-driven Collaboration and Remote Productivity",
    color: "blue",
  },
  {
    time: "01:30 PM - 02:15 PM",
    title: "Networking Luncheon",
    color: "purple",
  },
  {
    time: "02:15 PM - 03:00 PM",
    title: "Data+AI: Building an End-To-End Data Strategy for Analytics and Generative AI",
    color: "blue",
  },
  {
    time: "03:00 PM - 03:45 PM",
    title: "Responsible AI: Navigating Complexities in Ethical AI Implementation",
    color: "purple",
  },
  {
    time: "03:45 PM - 05:00 PM",
    title: "Networking Hi Tea & Conclusion",
    color: "blue",
  },
];

const Agenda: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);

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

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-[#0d0d16] to-[#1a1a2e] py-16 px-4 sm:px-6 md:px-16 lg:px-24 font-orbitron"
      aria-labelledby="agenda-heading"
    >
      <h2
        id="agenda-heading"
        className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-12 text-center uppercase tracking-widest"
      >
        🗓 Event Agenda
      </h2>
      <div className="max-w-4xl mx-auto space-y-6">
        {agenda.map((item, index) => (
          <div
            key={index}
            ref={(el) => {
              if (el) itemsRef.current[index] = el;
            }}
            className={`relative transform-gpu rounded-xl p-6 sm:p-8 border border-opacity-50 border-l-4 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl
              ${
                item.color === "purple"
                  ? "border-[#e6ceff] border-l-[#d8b4fe] bg-[#e6ceff] text-black"
                  : "border-[#bde5f3] border-l-[#a5e8ff] bg-[#bde5f3] text-black"
              }`}
            role="listitem"
            tabIndex={0}
            aria-label={`Agenda item: ${item.title} from ${item.time}`}
          >
            <div className="flex items-center gap-3 text-sm sm:text-base text-black mb-2">
              <Clock size={20} aria-hidden="true" />
              <span>{item.time}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-2">{item.title}</h3>
            {item.description && (
              <p className="text-black text-sm sm:text-base">{item.description}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Agenda;
