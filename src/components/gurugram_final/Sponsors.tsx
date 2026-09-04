import { useEffect, useRef, useState } from "react";

const placeholderLogos = [
  { src: "/gurugram/pastsponsers/Atlassian.png", alt: "" },
  { src: "/gurugram/pastsponsers/aws.png", alt: "" },
  { src: "/gurugram/pastsponsers/cohesity.png", alt: "" },
  { src: "/gurugram/pastsponsers/Couchbase.png", alt: "" },
  { src: "/gurugram/pastsponsers/Equateme.png", alt: "" },
  { src: "/gurugram/pastsponsers/salesforce.png", alt: "" },
];

// Scroll speed in seconds — lower number = faster scroll, higher = slower.
const SCROLL_DURATION_SECONDS = 20;

const Sponsors = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [sectionVisible, setSectionVisible] = useState(false);
  const scrollingLogos = [...placeholderLogos, ...placeholderLogos];

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
    <section ref={sectionRef} id="partners" className="bg-slate-50 py-20 md:py-28">
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        <p className={`sponsors-reveal sponsors-delay-0 font-extrabold text-[20px] text-[#e92630] mb-2 ${sectionVisible ? "is-visible" : ""}`}>
          Past Sponsors
        </p>
        <h2 className={`sponsors-reveal sponsors-delay-1 font-black text-[#022158] text-[36px] sm:text-[44px] md:text-[56px] leading-[1.1] tracking-[-1.44px] ${sectionVisible ? "is-visible" : ""}`}>
          Partners Who Powered the Journey
        </h2>
        <p className={`sponsors-reveal sponsors-delay-2 mt-6 sponser-description mx-auto ${sectionVisible ? "is-visible" : ""}`}>
          Celebrating the organisations that came on board to support ideas, innovation, and industry connections
        </p>

        <div className={`sponsors-reveal sponsors-delay-3 mt-8 flex flex-wrap items-center justify-center gap-4 ${sectionVisible ? "is-visible" : ""}`}>
          <a
            href="#partners"
            className="view-all-speakers"
          >
            View all sponsors
          </a>
        </div>
      </div>

      <div className={`mt-16 overflow-hidden sponsors-reveal sponsors-delay-4 ${sectionVisible ? "is-visible" : ""}`}>
        <div
          className="sponsor-auto-scroll gap-16 md:gap-24 px-8"
          style={{ animationDuration: `${SCROLL_DURATION_SECONDS}s` }}
        >
          {scrollingLogos.map((logo, i) => (
            <img
              key={`${logo.src}-${i}`}
              src={logo.src}
              alt={logo.alt}
              className="shrink-0 h-8 md:h-10 w-auto object-contain grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition"
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes sponsorsFadeInUp {
          from { opacity: 0; transform: translate3d(0, 32px, 0); }
          to { opacity: 1; transform: translate3d(0, 0, 0); }
        }

        .sponsors-reveal {
          opacity: 0;
          will-change: opacity, transform;
        }

        .sponsors-reveal.is-visible {
          animation: sponsorsFadeInUp 1.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .sponsors-delay-1 { animation-delay: 180ms; }
        .sponsors-delay-2 { animation-delay: 360ms; }
        .sponsors-delay-3 { animation-delay: 540ms; }
        .sponsors-delay-4 { animation-delay: 720ms; }

        @keyframes sponsor-scroll-horizontal {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .sponsor-auto-scroll {
          display: flex;
          align-items: center;
          width: max-content;
          animation-name: sponsor-scroll-horizontal;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        .sponsor-auto-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Sponsors;

