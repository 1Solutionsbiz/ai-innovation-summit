import React, { useEffect, useRef, useState } from "react";

const EventInfo: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
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

  return (
    <section ref={sectionRef} className="event-info-section">
      <div className="event-info-container">

        {/* LEFT CONTENT */}
        <div className="event-info-left">
          <h1>
            <span className={`event-reveal-up event-delay-0 ${sectionVisible ? "is-visible" : ""}`}>
              The Future is
            </span>
            <span className={`event-reveal-up event-delay-1 ${sectionVisible ? "is-visible" : ""}`}>
              Intelligent. India
            </span>
            <span className={`event-reveal-up event-delay-2 ${sectionVisible ? "is-visible" : ""}`}>
              is Ready.
            </span>
          </h1>

          <p className="event-info-subtext">
            <span className={`event-reveal-up event-delay-3 ${sectionVisible ? "is-visible" : ""}`}>
              Be part of the movement shaping
            </span>
            <span className={`event-reveal-up event-delay-4 ${sectionVisible ? "is-visible" : ""}`}>
              Enterprise AI tomorrow
            </span>
          </p>
        </div>

        {/* RIGHT CONTENT */}
        <div className="event-info-right">
          <div className="event-info-meta">
            <span className={`event-info-date event-reveal-down event-delay-1 ${sectionVisible ? "is-visible" : ""}`}>
              December 2, 2026
            </span>
            <span className={`event-info-venue event-reveal-down event-delay-2 ${sectionVisible ? "is-visible" : ""}`}>
              The Leela Ambience Gurugram, Delhi-NCR
            </span>
          </div>

          <div className="event-info-actions">
            <a
              href="#attend"
              className={`event-info-btn-primary btn-bg event-reveal-down event-delay-3 ${sectionVisible ? "is-visible" : ""}`}
            >
              Attend AIIS 2026
            </a>
            <a
              href="#explore"
              className={`event-info-btn-secondary btn-bg-hover event-reveal-down event-delay-4 ${sectionVisible ? "is-visible" : ""}`}
            >
              Explore More
            </a>
          </div>
        </div>

      </div>

      <style>{`
        @keyframes eventFadeInUp {
          from { opacity: 0; transform: translate3d(0, 38px, 0); }
          to { opacity: 1; transform: translate3d(0, 0, 0); }
        }

        @keyframes eventFadeInDown {
          from { opacity: 0; transform: translate3d(0, -30px, 0); }
          to { opacity: 1; transform: translate3d(0, 0, 0); }
        }

        .event-reveal-up,
        .event-reveal-down {
          display: block;
          opacity: 0;
          will-change: opacity, transform;
        }

        .event-reveal-up.is-visible {
          animation: eventFadeInUp 1.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .event-reveal-down.is-visible {
          animation: eventFadeInDown 1.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .event-delay-1 { animation-delay: 220ms; }
        .event-delay-2 { animation-delay: 440ms; }
        .event-delay-3 { animation-delay: 660ms; }
        .event-delay-4 { animation-delay: 880ms; }

        @media (prefers-reduced-motion: reduce) {
          .event-reveal-up.is-visible,
          .event-reveal-down.is-visible {
            animation-duration: 1ms;
            animation-delay: 0ms;
          }
        }
      `}</style>
    </section>
  );
};

export default EventInfo;