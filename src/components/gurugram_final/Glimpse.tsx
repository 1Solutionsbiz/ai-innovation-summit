import { useEffect, useRef, useState } from "react";
import { getScrollDirection } from "@/hooks/useScrollDirection";

// Add / remove / rename logos freely here.
// "src" is the image path, "alt" is the accessible name for that logo.
const placeholderLogos = [
  { src: "/gurugram/GlimpseLogos/1.png", alt: "" },
  { src: "/gurugram/GlimpseLogos/2.png", alt: "" },
  { src: "/gurugram/GlimpseLogos/3.png", alt: "" },
  { src: "/gurugram/GlimpseLogos/4.png", alt: "" },
  { src: "/gurugram/GlimpseLogos/5.png", alt: "" },
  { src: "/gurugram/GlimpseLogos/6.png", alt: "" },
  { src: "/gurugram/GlimpseLogos/7.png", alt: "" },
  { src: "/gurugram/GlimpseLogos/8.png", alt: "" },
  { src: "/gurugram/GlimpseLogos/9.png", alt: "" },
  { src: "/gurugram/GlimpseLogos/10.png", alt: "" },
  { src: "/gurugram/GlimpseLogos/11.png", alt: "" },
  { src: "/gurugram/GlimpseLogos/12.png", alt: "" },
  { src: "/gurugram/GlimpseLogos/13.png", alt: "" },
  { src: "/gurugram/GlimpseLogos/14.png", alt: "" },
  { src: "/gurugram/GlimpseLogos/15.png", alt: "" },
  { src: "/gurugram/GlimpseLogos/16.png", alt: "" },
  { src: "/gurugram/GlimpseLogos/17.png", alt: "" },
  { src: "/gurugram/GlimpseLogos/18.png", alt: "" },
  { src: "/gurugram/GlimpseLogos/19.png", alt: "" },
  { src: "/gurugram/GlimpseLogos/20.png", alt: "" },
  { src: "/gurugram/GlimpseLogos/21.png", alt: "" },
  { src: "/gurugram/GlimpseLogos/22.png", alt: "" },
  { src: "/gurugram/GlimpseLogos/23.png", alt: "" },
  { src: "/gurugram/GlimpseLogos/24.png", alt: "" },
  { src: "/gurugram/GlimpseLogos/25.png", alt: "" },
  { src: "/gurugram/GlimpseLogos/26.png", alt: "" },
  { src: "/gurugram/GlimpseLogos/27.png", alt: "" },
  { src: "/gurugram/GlimpseLogos/28.png", alt: "" },
  { src: "/gurugram/GlimpseLogos/29.png", alt: "" },
  { src: "/gurugram/GlimpseLogos/30.png", alt: "" },
  { src: "/gurugram/GlimpseLogos/31.png", alt: "" },
  { src: "/gurugram/GlimpseLogos/32.png", alt: "" },
  { src: "/gurugram/GlimpseLogos/33.png", alt: "" },
  { src: "/gurugram/GlimpseLogos/34.png", alt: "" },
  { src: "/gurugram/GlimpseLogos/35.png", alt: "" },
  { src: "/gurugram/GlimpseLogos/36.png", alt: "" },
];

// Scroll speed in seconds — lower number = faster scroll, higher = slower.
const SCROLL_DURATION_SECONDS = 50;

const Sponsors = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [sectionVisible, setSectionVisible] = useState(false);
  const [revealDirection, setRevealDirection] = useState<"up" | "down">("down");
  const scrollingLogos = [...placeholderLogos, ...placeholderLogos];

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
    <section
      ref={sectionRef}
      id="partners"
      className="glimpse-section bg-slate-50 py-12 sm:py-20 md:py-28"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 text-center">
        <p
          className={`partners-reveal-up font-extrabold text-[20px] text-[#e92630] mb-2 ${sectionVisible ? "is-visible" : ""}`}
          style={{ animationDelay: upDelay(0, 3) }}
        >
          7 Editions. Trusted by the Best.
        </p>
        <h2
          className={`partners-reveal-up text-[#022158]
                  text-[#022158]
                  font-black
                  text-[34px]
                  sm:text-[48px]
                  md:text-[64px]
                  xl:text-[42px]
                  leading-[0.94] ${sectionVisible ? "is-visible" : ""}`}
          style={{ animationDelay: upDelay(1, 3) }}
        >
          A Glimpse of the Participating Enterprises
        </h2>
      </div>

      <div
        className={`mt-10 sm:mt-16 overflow-hidden partners-reveal-up ${sectionVisible ? "is-visible" : ""}`}
        style={{ animationDelay: upDelay(2, 3) }}
      >
        <div
          className="sponsor-auto-scroll gap-10 sm:gap-16 md:gap-24 px-4 sm:px-8"
          style={{ animationDuration: `${SCROLL_DURATION_SECONDS}s` }}
        >
          {scrollingLogos.map((logo, i) => (
            <img
              key={`${logo.src}-${i}`}
              src={logo.src}
              alt={logo.alt}
              className="shrink-0 h-7 sm:h-8 md:h-10 w-auto object-contain grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition"
            />
          ))}
        </div>
      </div>

      <style>{`
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

        @media (prefers-reduced-motion: reduce) {
          .partners-reveal-up.is-visible {
            animation-duration: 1ms;
            animation-delay: 0ms;
          }
        }
      `}</style>
    </section>
  );
};

export default Sponsors;