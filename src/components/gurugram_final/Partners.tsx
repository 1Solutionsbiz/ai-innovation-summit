import React, { useEffect, useRef, useState } from "react";
import { getScrollDirection } from "@/hooks/useScrollDirection";

// const partners = [
//   {
//     title: "PRESENTING PARTNER",
//     image: "/gurugram/partners/salesforce.png",
//     alt: "salesforce",
//   },
//   {
//     title: "CLOUD PARTNER",
//     image: "/gurugram/partners/Akamai.png",
//     alt: "Akamai",
//   },
// ];

import { partners } from "@/data/partners";


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
    <section ref={sectionRef} id="partners" className="partners-section">


      <div className="row text-center">
        
        <div className="col-md-6">

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
                  leading-[0.94]
                  text-[#092c63]">
            <span
              className={`block partners-reveal-up ${sectionVisible ? "is-visible" : ""}`}
              style={{ animationDelay: delayFor(1, 6) }}
            >
              The Partners Powering The Summit
            </span>
          </h2>

          <p className="text-[#161616] md:text-[21px] mt-4 mb-8" >
            <span
              className={`block partners-reveal-up ${sectionVisible ? "is-visible" : ""}`}
              style={{ animationDelay: delayFor(3, 6) }}
            >
              Meet the partners shaping how enterprises think, deploy, and scale AI.
            </span>
          </p>

        </div>
        
        <div className="col-md-6">

          <div className="text-center">

            {/* <div className="partners-scroll"> */}
            <div className="">

              {/* FIRST SET */}
              <div className="partners-list" style={{ gap: "50px" }}>
                {partners.map((partner, index) => (
                  <div
                    className="partner-logo 
                    partner-logo-new 
                    md:w-[25%] 
                    md:min-h-[150px] 
                    bg-[#f0f0f0] 
                    rounded-[20px] 
                    hover:shadow-[0px_0px_20px_#fbe2e4] 
                    pt-4
                    pb-4
                    "
                    key={`first-${index}`}
                  >
                    <h3 className="
                    partner-title 
                    text-[#092c64]
                    text-[12px]
                    tracking-[0.02em]
                    mb-2
                    font-[400]"
                    style={{  fontStyle: "normal" }}
                  >
                      {partner.title}
                    </h3>

                    <img
                      className={`${partner.alt}-guru26-image`}
                      src={partner.image}
                      alt={partner.alt}
                    />
                  </div>
                ))}
              </div>

            </div>

          </div>


          <a
            href="partner-form"
            target="_blank"
            className={`partners-btn mt-8 partners-reveal-up inline-block ${sectionVisible ? "is-visible" : ""}`}
            style={{ animationDelay: delayFor(5, 6) }}
          >
            Become a Partner
          </a>

          
        </div>
      </div>












    </section>
  );
};

export default PartnersSection;