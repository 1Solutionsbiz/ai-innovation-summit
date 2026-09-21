import React, { useEffect, useRef, useState } from "react";
import { getScrollDirection } from "@/hooks/useScrollDirection";

const LeadersNumbers = () => {
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
    `${(revealDirection === "up" ? total - 1 - order : order) * 200}ms`;

  return (
    <section ref={sectionRef} className="leaders-section-new">
      <div className="leaders-container-new">

        {/* LEFT CONTENT */}
        <div className="leaders-left">

          <span
            className={`leaders-label partners-reveal-up ${sectionVisible ? "is-visible" : ""}`}
            style={{ animationDelay: upDelay(0, 5) }}
          >
            Reach
          </span>

          <h2 className="
                  font-black
                  text-[34px]
                  sm:text-[48px]
                  md:text-[64px]
                  xl:text-[42px]
                  leading-[0.94]">
            <span
              className={`leaders-line partners-reveal-up ${sectionVisible ? "is-visible" : ""}`}
              style={{ animationDelay: upDelay(1, 5) }}
            >
              Most Influential
            </span>
            <span
              className={`leaders-line partners-reveal-up ${sectionVisible ? "is-visible" : ""}`}
              style={{ animationDelay: upDelay(2, 5) }}
            >
              Enterprise AI
              Leaders
            </span>
          </h2>


          <div className="event-info-meta mt-3">
            <span className={`partners-reveal-up ${sectionVisible ? "is-visible" : ""}`} style={{ animationDelay: upDelay(0, 4) }}>
              2nd December, 2026
            </span>
            <span className={`partners-reveal-up ${sectionVisible ? "is-visible" : ""}`} style={{ animationDelay: upDelay(1, 4) }}>
              The Leela Ambience, Gurugram
            </span>
          </div>



          <a
            href="#delhincrregistrationform"
            className={`leaders-btn btn-bg partners-reveal-up ${sectionVisible ? "is-visible" : ""}`}
            style={{ animationDelay: upDelay(4, 5) }}
          >
            Register Interest
          </a>

        </div>


        {/* DIVIDER */}
        <div className="leaders-divider"></div>


        {/* RIGHT CONTENT */}
        <div className="leaders-right">

          <p
            className={`leaders-description partners-reveal-up ${sectionVisible ? "is-visible" : ""}`}
            style={{ animationDelay: upDelay(0, 3) }}
          >
            AI Innovation Summit brings together the decision-makers
            and change-makers shaping the future of enterprise AI
            across industries from the boardroom to the enterprise floor
          </p>


          {/* NUMBER */}
          <div className="leaders-stat">

            <div
              className={`leaders-number partners-reveal-up ${sectionVisible ? "is-visible" : ""}`}
              style={{ animationDelay: upDelay(1, 3) }}
            >
              700+
            </div>

            <div
              className={`leaders-stat-text partners-reveal-up ${sectionVisible ? "is-visible" : ""}`}
              style={{ animationDelay: upDelay(2, 3) }}
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
        .leaders-line {
          display: block;
        }

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
          max-width: 450px;
        }

        .leaders-label {
          display: block;
          font-size: 24px;
          letter-spacing: 1px;
          margin-bottom: 16px;
          color: #e0242c;
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
          font-size: 20px;
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
          .leaders-section-new {
            padding: 56px 20px;
          }

          .leaders-container-new {
            flex-direction: column;
            align-items: flex-start;
            gap: 32px;
          }

          .leaders-left {
            width: 100%;
            max-width: none;
          }

          .leaders-label {
            font-size: 18px;
            margin-bottom: 12px;
          }

          .leaders-divider {
            display: none;
          }

          .leaders-left h2 {
            font-size: 32px;
            letter-spacing: -1.5px;
          }

          .leaders-btn {
            padding: 13px 24px;
            font-size: 16px;
          }

          .leaders-right {
            width: 100%;
          }

          .leaders-description {
            margin-bottom: 28px;
            font-size: 17px;
            line-height: 1.45;
          }

          .leaders-stat {
            align-items: flex-start;
            gap: 16px;
          }

          .leaders-number {
            font-size: 48px;
            flex-shrink: 0;
          }

          .leaders-stat-text {
            font-size: 16px;
            line-height: 1.3;
          }
        }

        @media (max-width: 400px) {
          .leaders-section-new {
            padding-left: 16px;
            padding-right: 16px;
          }

          .leaders-left h2 {
            font-size: 28px;
          }

          .leaders-stat {
            flex-direction: column;
            gap: 10px;
          }
        }
      `}</style>
    </section>
  );
};

export default LeadersNumbers;