import React, { useEffect, useRef, useState } from "react";

const LeadersNumbers = () => {
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
    <section ref={sectionRef} className="leaders-section-new">
      <div className="leaders-container-new">

        {/* LEFT CONTENT */}
        <div className="leaders-left">

          <span
            className={`leaders-label leaders-reveal-up ${sectionVisible ? "is-visible" : ""}`}
          >
            Reach
          </span>

          <h2>
            <span className={`leaders-line leaders-reveal-up leaders-delay-1 ${sectionVisible ? "is-visible" : ""}`}>
              Most Influential
            </span>
            <span className={`leaders-line leaders-reveal-up leaders-delay-2 ${sectionVisible ? "is-visible" : ""}`}>
              Enterprise AI
            </span>
            <span className={`leaders-line leaders-reveal-up leaders-delay-3 ${sectionVisible ? "is-visible" : ""}`}>
              Leaders
            </span>
          </h2>

          <a
            href="#become-partner"
            className={`leaders-btn btn-bg leaders-reveal-up leaders-delay-4 ${sectionVisible ? "is-visible" : ""}`}
          >
            Become a Partner
          </a>

        </div>


        {/* DIVIDER */}
        <div className="leaders-divider"></div>


        {/* RIGHT CONTENT */}
        <div className="leaders-right">

          <p
            className={`leaders-description leaders-reveal-down ${sectionVisible ? "is-visible" : ""}`}
          >
            AI Innovation Summit brings together the decision-makers
            and change-makers shaping the future of enterprise AI
            across industries from the boardroom to the enterprise floor
          </p>


          {/* NUMBER */}
          <div className="leaders-stat">

            <div
              className={`leaders-number leaders-reveal-down leaders-delay-1 ${sectionVisible ? "is-visible" : ""}`}
            >
              700+
            </div>

            <div
              className={`leaders-stat-text leaders-reveal-down leaders-delay-2 ${sectionVisible ? "is-visible" : ""}`}
            >
              CXOs &amp; Senior Business &amp;
              <br />
              Technology Leaders from
              <br />
              Leading Enterprise Sectors
            </div>

          </div>

        </div>

      </div>

      <style>{`
        @keyframes leadersFadeInUp {
          from { opacity: 0; transform: translate3d(0, 34px, 0); }
          to { opacity: 1; transform: translate3d(0, 0, 0); }
        }

        @keyframes leadersFadeInDown {
          from { opacity: 0; transform: translate3d(0, -34px, 0); }
          to { opacity: 1; transform: translate3d(0, 0, 0); }
        }

        .leaders-reveal-up,
        .leaders-reveal-down {
          opacity: 0;
          will-change: opacity, transform;
        }

        .leaders-line {
          display: block;
        }

        .leaders-reveal-up.is-visible {
          animation: leadersFadeInUp 1.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .leaders-reveal-down.is-visible {
          animation: leadersFadeInDown 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .leaders-delay-1 { animation-delay: 300ms; }
        .leaders-delay-2 { animation-delay: 650ms; }
        .leaders-delay-3 { animation-delay: 1000ms; }
        .leaders-delay-4 { animation-delay: 1350ms; }

        .leaders-section-new {
          background-image: url('/gurugram/leaders_info_bg.png');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          padding: 90px 40px;
          color: #ffffff;
        }

        .leaders-container-new {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
        }

        .leaders-left {
          flex: 0 0 auto;
          max-width: 340px;
        }

        .leaders-label {
          display: block;
          font-size: 24px;
          letter-spacing: 1px;
          margin-bottom: 16px;
          color: #e0242c;
        }

        .leaders-left h2 {
          font-size: 48px;
          line-height: 1.15;
          font-weight: 700;
          margin: 0 0 28px 0;
        }

        .leaders-btn {
          display: inline-block;
          padding: 15px 30px;
          font-size: 18px;
        }

        .leaders-divider {
          width: 1px;
          align-self: stretch;
          background: #fff;
        }

        .leaders-right {
          flex: 1;
        }

        .leaders-description {
          font-size: 23px;
          line-height: 1.4;
          color: #fff;
          margin: 0 0 40px 0;
        }

        .leaders-stat {
          display: flex;
          align-items: center;
          gap: 24px;
        }

        .leaders-number {
          font-size: 64px;
          font-weight: 800;
          line-height: 1;
        }

        .leaders-stat-text {
          font-size: 23px;
          line-height: 1.2;
          color: #fff;
        }

        @media (max-width: 768px) {
          .leaders-container-new {
            flex-direction: column;
            align-items: flex-start;
            gap: 32px;
          }
          .leaders-divider {
            display: none;
          }
          .leaders-left h2 {
            font-size: 32px;
          }
          .leaders-number {
            font-size: 48px;
          }
        }
      `}</style>
    </section>
  );
};

export default LeadersNumbers;