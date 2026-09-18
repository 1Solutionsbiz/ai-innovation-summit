import React, { useEffect, useRef, useState } from "react";
import { getScrollDirection } from "@/hooks/useScrollDirection";

const partners = [
  {
    title: "PRESENTING PARTNER",
    image: "/gurugram/partners/salesforce.png",
    alt: "Partner 1",
  },
  {
    title: "CO-POWERED BY",
    image: "/gurugram/partners/Atlassian.png",
    alt: "Partner 2",
  },
  {
    title: "CYBER RESILIENCE PARTNER",
    image: "/gurugram/partners/cohesity.png",
    alt: "Partner 3",
  },
  {
    title: "AI DATA CLOUD PARTNER",
    image: "/gurugram/partners/snowflake.png",
    alt: "Partner 4",
  },
  {
    title: "ENGAGEMENT PARTNER",
    image: "/gurugram/partners/Equateme.png",
    alt: "Partner 5",
  },
];

const PartnersSection = () => {
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

  const delayFor = (order: number, total: number) =>
    `${(revealDirection === "up" ? total - 1 - order : order) * 150}ms`;

  return (
    <section ref={sectionRef} className="partners-section">
      <div className="partners-container">

        {/* LEFT CONTENT */}
        <div className="partners-content">
          <span
            className={`partners-small-title partners-reveal-up ${sectionVisible ? "is-visible" : ""}`}
            style={{ animationDelay: delayFor(0, 6) }}
          >
            Our Partners
          </span>

          <h2 className="
                  font-black
                  text-[34px]
                  sm:text-[48px]
                  md:text-[64px]
                  xl:text-[42px]
                  leading-[0.94]">
            <span
              className={`block partners-reveal-up ${sectionVisible ? "is-visible" : ""}`}
              style={{ animationDelay: delayFor(1, 6) }}
            >
              The Partners
            </span>
            <span
              className={`block partners-reveal-up ${sectionVisible ? "is-visible" : ""}`}
              style={{ animationDelay: delayFor(2, 6) }}
            >
              Powering The Summit
            </span>
          </h2>

          <p>
            <span
              className={`block partners-reveal-up ${sectionVisible ? "is-visible" : ""}`}
              style={{ animationDelay: delayFor(3, 6) }}
            >
              Meet the partners shaping how enterprises think,
            </span>
            <span
              className={`block partners-reveal-up ${sectionVisible ? "is-visible" : ""}`}
              style={{ animationDelay: delayFor(4, 6) }}
            >
              deploy, and scale AI.
            </span>
          </p>

          <a
            href="partner-form"
            target="_blank"
            className={`partners-btn partners-reveal-up inline-block ${sectionVisible ? "is-visible" : ""}`}
            style={{ animationDelay: delayFor(5, 6) }}
          >
            Become a Partner
          </a>
        </div>


        {/* RIGHT PARTNER PANEL */}
        <div
          className={`partners-visual partners-reveal-right ${sectionVisible ? "is-visible" : ""}`}
        >

          <div className="partners-bg">

            {/* <div className="partners-scroll"> */}
            <div className="">

              {/* FIRST SET */}
              <div className="partners-list">
                {partners.map((partner, index) => (
                  <div
                    className="partner-logo partner-logo-new"
                    key={`first-${index}`}
                  >
                    <h3 className="partner-title text-black font-[600]">
                      {partner.title}
                    </h3>

                    <img
                      src={partner.image}
                      alt={partner.alt}
                    />
                  </div>
                ))}
              </div>


              {/* DUPLICATE SET FOR SEAMLESS LOOP */}
              {/* <div className="partners-list">
                {partners.map((partner, index) => (
                  <div
                    className="partner-logo partner-logo-new"
                    key={`second-${index}`}
                  >
                    <h3 className="partner-title text-black">
                      {partner.title}
                    </h3>

                    <img
                      src={partner.image}
                      alt={partner.alt}
                    />
                  </div>
                ))}
              </div> */}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default PartnersSection;