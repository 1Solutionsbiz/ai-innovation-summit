import React, { useEffect, useRef, useState } from "react";
import { getScrollDirection } from "@/hooks/useScrollDirection";

const EventInfo: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [sectionVisible, setSectionVisible] = useState(false);
  const [revealDirection, setRevealDirection] = useState<"up" | "down">("down");

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealDirection(getScrollDirection());
          setSectionVisible(false);
          requestAnimationFrame(() => {
            requestAnimationFrame(() => setSectionVisible(true));
          });
        } else {
          setSectionVisible(false);
        }
      },
      { threshold: 0, rootMargin: "-15% 0px -15% 0px" },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const upDelay = (order: number, total: number) =>
    `${(revealDirection === "up" ? total - 1 - order : order) * 220}ms`;

  return (
    <section ref={sectionRef} className="event-info-section">
      <div className="event-info-container">

        {/* LEFT CONTENT */}
        <div className="event-info-left">
          <h2 className="text-white
                  font-black
                  text-[34px]
                  sm:text-[48px]
                  md:text-[64px]
                  xl:text-[42px]
                  leading-[0.94]">
            <span className={`event-reveal-line partners-reveal-up ${sectionVisible ? "is-visible" : ""}`} style={{ animationDelay: upDelay(0, 5) }}>
              The Future is
            </span>
            <span className={`event-reveal-line partners-reveal-up ${sectionVisible ? "is-visible" : ""}`} style={{ animationDelay: upDelay(1, 5) }}>
              Intelligent. India
            </span>
            <span className={`event-reveal-line partners-reveal-up ${sectionVisible ? "is-visible" : ""}`} style={{ animationDelay: upDelay(2, 5) }}>
              is Ready.
            </span>
          </h2>

          <p className="event-info-subtext">
            <span className={`event-reveal-line partners-reveal-up ${sectionVisible ? "is-visible" : ""}`} style={{ animationDelay: upDelay(3, 5) }}>
              Be part of the movement shaping
            </span>
            <span className={`event-reveal-line partners-reveal-up ${sectionVisible ? "is-visible" : ""}`} style={{ animationDelay: upDelay(4, 5) }}>
              Enterprise AI tomorrow
            </span>
          </p>
        </div>

        {/* RIGHT CONTENT */}
        <div className="event-info-right">
          <div className="event-info-meta">
            <span className={`event-info-date partners-reveal-up ${sectionVisible ? "is-visible" : ""}`} style={{ animationDelay: upDelay(0, 4) }}>
              December 2, 2026
            </span>
            <span className={`event-info-venue partners-reveal-up ${sectionVisible ? "is-visible" : ""}`} style={{ animationDelay: upDelay(1, 4) }}>
              The Leela Ambience Gurugram, Delhi-NCR
            </span>
          </div>

          <div className="event-info-actions">
            <a
              href="#delhincrregistrationform"
              className={`event-info-btn-primary btn-bg partners-reveal-up ${sectionVisible ? "is-visible" : ""}`}
              style={{ animationDelay: upDelay(2, 4) }}
            >
              Attend AIIS 2026
            </a>
            <a
              href="#focus"
              className={`event-info-btn-secondary btn-bg-hover partners-reveal-up ${sectionVisible ? "is-visible" : ""}`}
              style={{ animationDelay: upDelay(3, 4) }}
            >
              Explore More
            </a>
          </div>
        </div>

      </div>

      <style>{`
        .event-reveal-line {
          display: block;
        }

        .event-info-date,
        .event-info-venue,
        .event-info-btn-primary,
        .event-info-btn-secondary {
          display: inline-block;
        }
      `}</style>
    </section>
  );
};

export default EventInfo;