import React, { useEffect, useRef, useState } from "react";

const partners = [
  {
    title: "PRESENTING PARTNER",
    image: "/gurugram/partners/partner_1.png",
    alt: "Partner 1",
  },
  {
    title: "CO-POWERED BY",
    image: "/gurugram/partners/partner_2.png",
    alt: "Partner 2",
  },
  {
    title: "CYBER RESILIENCE PARTNER",
    image: "/gurugram/partners/partner_3.png",
    alt: "Partner 3",
  },
  {
    title: "AI DATA CLOUD PARTNER",
    image: "/gurugram/partners/partner_4.png",
    alt: "Partner 4",
  },
  {
    title: "ENGAGEMENT PARTNER",
    image: "/gurugram/partners/partner_5.png",
    alt: "Partner 5",
  },
];

const PartnersSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [sectionVisible, setSectionVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSectionVisible(true);
          observer.unobserve(section);
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="partners-section">
      <div className="partners-container">

        {/* LEFT CONTENT */}
        <div className="partners-content">
          <span
            className={`partners-small-title partners-reveal-up ${sectionVisible ? "is-visible" : ""}`}
          >
            Our Partners
          </span>

          <h2>
            <span
              className={`block partners-reveal-up partners-delay-1 ${sectionVisible ? "is-visible" : ""}`}
            >
              The partners
            </span>
            <span
              className={`block partners-reveal-up partners-delay-2 ${sectionVisible ? "is-visible" : ""}`}
            >
              powering the summit
            </span>
          </h2>

          <p>
            <span
              className={`block partners-reveal-up partners-delay-3 ${sectionVisible ? "is-visible" : ""}`}
            >
              Meet the partners shaping how enterprises think,
            </span>
            <span
              className={`block partners-reveal-up partners-delay-4 ${sectionVisible ? "is-visible" : ""}`}
            >
              deploy, and scale AI.
            </span>
          </p>

          <br />
          <a
            href="#become-partner"
            className={`partners-btn partners-reveal-up partners-delay-5 ${sectionVisible ? "is-visible" : ""}`}
          >
            Become a Partner
          </a>
        </div>


        {/* RIGHT PARTNER PANEL */}
        <div
          className={`partners-visual partners-reveal-right ${sectionVisible ? "is-visible" : ""}`}
        >

          <div className="partners-bg">

            <div className="partners-scroll">

              {/* FIRST SET */}
              <div className="partners-list">
                {partners.map((partner, index) => (
                  <div
                    className="partner-logo partner-logo-new"
                    key={`first-${index}`}
                  >
                    <h3 className="partner-title text-white">
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
              <div className="partners-list">
                {partners.map((partner, index) => (
                  <div
                    className="partner-logo partner-logo-new"
                    key={`second-${index}`}
                  >
                    <h3 className="partner-title text-white">
                      {partner.title}
                    </h3>

                    <img
                      src={partner.image}
                      alt={partner.alt}
                    />
                  </div>
                ))}
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default PartnersSection;