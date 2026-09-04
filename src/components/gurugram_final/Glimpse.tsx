import { useEffect, useRef, useState } from "react";

// Add / remove / rename logos freely here.
// "src" is the image path, "alt" is the accessible name for that logo.
const placeholderLogos = [
  { src: "/gurugram/GlimpseLogos/Glimpse_Logo_2.png", alt: "" },
  { src: "/gurugram/GlimpseLogos/Glimpse_Logo_3.png", alt: "" },
  { src: "/gurugram/GlimpseLogos/Glimpse_Logo_4.png", alt: "" },
  { src: "/gurugram/GlimpseLogos/Glimpse_Logo_5.png", alt: "" },
  { src: "/gurugram/GlimpseLogos/Glimpse_Logo_6.png", alt: "" },
  { src: "/gurugram/GlimpseLogos/Glimpse_Logo_7.png", alt: "" },
  { src: "/gurugram/GlimpseLogos/Glimpse_Logo_8.png", alt: "" },
  { src: "/gurugram/GlimpseLogos/Glimpse_Logo_9.png", alt: "" },
  { src: "/gurugram/GlimpseLogos/Glimpse_Logo_10.png", alt: "" },
  { src: "/gurugram/GlimpseLogos/Glimpse_Logo_11.png", alt: "" },
  { src: "/gurugram/GlimpseLogos/Glimpse_Logo_12.png", alt: "" },
  { src: "/gurugram/GlimpseLogos/Glimpse_Logo_13.png", alt: "" },
  { src: "/gurugram/GlimpseLogos/Glimpse_Logo_14.png", alt: "" },
  { src: "/gurugram/GlimpseLogos/Glimpse_Logo_15.png", alt: "" },
  { src: "/gurugram/GlimpseLogos/Glimpse_Logo_16.png", alt: "" },
  { src: "/gurugram/GlimpseLogos/Glimpse_Logo_17.png", alt: "" },
  { src: "/gurugram/GlimpseLogos/Glimpse_Logo_18.png", alt: "" },
  { src: "/gurugram/GlimpseLogos/Glimpse_Logo_19.png", alt: "" },
  { src: "/gurugram/GlimpseLogos/Glimpse_Logo_20.png", alt: "" },
  { src: "/gurugram/GlimpseLogos/Glimpse_Logo_21.png", alt: "" },
  { src: "/gurugram/GlimpseLogos/Glimpse_Logo_22.png", alt: "" },
  { src: "/gurugram/GlimpseLogos/Glimpse_Logo_23.png", alt: "" },
  { src: "/gurugram/GlimpseLogos/Glimpse_Logo_24.png", alt: "" },
  { src: "/gurugram/GlimpseLogos/Glimpse_Logo_25.png", alt: "" },
  { src: "/gurugram/GlimpseLogos/Glimpse_Logo_26.png", alt: "" },
  { src: "/gurugram/GlimpseLogos/Glimpse_Logo_27.png", alt: "" },
  { src: "/gurugram/GlimpseLogos/Glimpse_Logo_28.png", alt: "" },
  { src: "/gurugram/GlimpseLogos/Glimpse_Logo_29.png", alt: "" },
  { src: "/gurugram/GlimpseLogos/Glimpse_Logo_30.png", alt: "" },
  { src: "/gurugram/GlimpseLogos/Glimpse_Logo_31.png", alt: "" },
  { src: "/gurugram/GlimpseLogos/Glimpse_Logo_32.png", alt: "" },
  { src: "/gurugram/GlimpseLogos/Glimpse_Logo_33.png", alt: "" },
  { src: "/gurugram/GlimpseLogos/Glimpse_Logo_34.png", alt: "" },
  { src: "/gurugram/GlimpseLogos/Glimpse_Logo_35.png", alt: "" },
  { src: "/gurugram/GlimpseLogos/Glimpse_Logo_36.png", alt: "" },
  { src: "/gurugram/GlimpseLogos/Glimpse_Logo_37.png", alt: "" },
];

// Scroll speed in seconds — lower number = faster scroll, higher = slower.
const SCROLL_DURATION_SECONDS = 50;

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
    <section
      ref={sectionRef}
      id="partners"
      className="glimpse-section bg-slate-50 py-20 md:py-28"
    >
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        <p
          className={`glimpse-reveal-up glimpse-delay-0 font-extrabold text-[20px] text-[#e92630] mb-2 ${sectionVisible ? "is-visible" : ""}`}
        >
          7 Editions
        </p>
        <h2
          className={`glimpse-reveal-up glimpse-delay-1 font-black text-[#022158] text-[36px] sm:text-[44px] md:text-[56px] leading-[1.1] tracking-[-1.44px] ${sectionVisible ? "is-visible" : ""}`}
        >
          A Glimpse of Participating Enterprises
        </h2>
      </div>

      <div
        className={`mt-16 overflow-hidden glimpse-reveal-up glimpse-delay-2 ${sectionVisible ? "is-visible" : ""}`}
      >
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
        @keyframes glimpseFadeInUp {
          from {
            opacity: 0;
            transform: translate3d(0, 36px, 0) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0) scale(1);
          }
        }

        .glimpse-reveal-up {
          opacity: 0;
          will-change: opacity, transform;
        }

        .glimpse-reveal-up.is-visible {
          animation: glimpseFadeInUp 1.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .glimpse-delay-1 { animation-delay: 180ms; }
        .glimpse-delay-2 { animation-delay: 420ms; }

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
          .glimpse-reveal-up.is-visible {
            animation-duration: 1ms;
            animation-delay: 0ms;
          }
        }
      `}</style>
    </section>
  );
};

export default Sponsors;