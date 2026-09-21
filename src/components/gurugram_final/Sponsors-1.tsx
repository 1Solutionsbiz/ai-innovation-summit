import { useEffect, useRef, useState } from "react";
import { getScrollDirection } from "@/hooks/useScrollDirection";

const placeholderLogos = [
  { src: "/gurugram/pastsponsers/past-partner-logo-stip.png", alt: "" },
  // { src: "/gurugram/pastsponsers/Atlassian.png", alt: "" },
  // { src: "/gurugram/pastsponsers/aws.png", alt: "" },
  // { src: "/gurugram/pastsponsers/boom.png", alt: "" },
  // { src: "/gurugram/pastsponsers/cohesity.png", alt: "" },
  // { src: "/gurugram/pastsponsers/Couchbase.png", alt: "" },
  // { src: "/gurugram/pastsponsers/Equateme.png", alt: "" },
  // { src: "/gurugram/pastsponsers/microsoft.png", alt: "" },
  // { src: "/gurugram/pastsponsers/salesforce.png", alt: "" },
];

const Sponsors = () => {
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
    `${(revealDirection === "up" ? total - 1 - order : order) * 180}ms`;

  return (
    <section ref={sectionRef} id="partners" className="bg-[#fff] py-12 sm:py-20 md:py-28">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 text-center">
        <p className={`partners-reveal-up font-extrabold text-[20px] text-[#e92630] mb-2 ${sectionVisible ? "is-visible" : ""}`} style={{ animationDelay: upDelay(0, 4) }}>
          Past Partners
        </p>
        <h2 className={`partners-reveal-up text-[#022158]
                  font-black
                  text-[34px]
                  sm:text-[48px]
                  md:text-[64px]
                  xl:text-[42px]
                  leading-[0.94] ${sectionVisible ? "is-visible" : ""}`} style={{ animationDelay: upDelay(1, 4) }}>
          Partners Who Powered the Journey
        </h2>
        <p className={`partners-reveal-up mt-4 sm:mt-6 sponser-description mx-auto ${sectionVisible ? "is-visible" : ""}`} style={{ animationDelay: upDelay(2, 4) }}>
          Celebrating the organisations that came on board to support ideas, innovation, and industry connections
        </p>

        {/* <div className={`partners-reveal-up mt-8 flex flex-wrap items-center justify-center gap-4 ${sectionVisible ? "is-visible" : ""}`} style={{ animationDelay: upDelay(3, 4) }}>
          <a
            href="#partners"
            className="view-all-speakers"
          >
            View all sponsors
          </a>
        </div> */}
      </div>

      <div className={`mt-10 sm:mt-16 overflow-hidden partners-reveal-up ${sectionVisible ? "is-visible" : ""}`} style={{ animationDelay: upDelay(3, 4) }}>
        <div className="flex items-center justify-center px-4 sm:px-8">
          {placeholderLogos.map((logo) => (
            <img
              key={logo.src}
              src={logo.src}
              alt={logo.alt}
              className="h-auto max-h-20 w-full max-w-[1200px] object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;

