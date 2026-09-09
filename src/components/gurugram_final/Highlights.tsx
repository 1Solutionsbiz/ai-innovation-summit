import { useEffect, useRef, useState } from "react";

/* =========================
   Rolling Digit
========================= */

const RollingDigit = ({
  digit,
  delay = 0,
  startAnimation,
}: {
  digit: number;
  delay?: number;
  startAnimation: boolean;
}) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (!startAnimation) {
      setAnimate(false);
      return;
    }

    const timer = setTimeout(() => {
      setAnimate(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [startAnimation, delay]);

  const numbers = Array.from(
    { length: 40 },
    (_, i) => i % 10
  );

  const finalPosition = 30 + digit;

  return (
    <span
      className="relative inline-block overflow-hidden h-[1em]"
      style={{
        width: "0.65em",
      }}
    >
      <span
        className="absolute left-0 top-0 flex flex-col"
        style={{
          transform: animate
            ? `translateY(-${finalPosition}em)`
            : "translateY(0)",
          transition:
            "transform 2.2s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        {numbers.map((num, index) => (
          <span
            key={index}
            className="flex items-center justify-center h-[1em]"
          >
            {num}
          </span>
        ))}
      </span>
    </span>
  );
};


/* =========================
   Animated Number
========================= */

const AnimatedNumber = ({
  value,
  startAnimation,
}: {
  value: string;
  startAnimation: boolean;
}) => {
  return (
    <span className="inline-flex items-center justify-center">
      {value.split("").map((char, index) => {

        // + sign remains static
        if (!/\d/.test(char)) {
          return (
            <span
              key={`${char}-${index}`}
              className="inline-block"
            >
              {char}
            </span>
          );
        }

        return (
          <RollingDigit
            key={`${char}-${index}`}
            digit={Number(char)}
            delay={index * 220}
            startAnimation={startAnimation}
          />
        );
      })}
    </span>
  );
};


/* =========================
   Highlights
========================= */

const Highlights = () => {

  /* =========================
     Section Reference
  ========================= */

  const sectionRef = useRef<HTMLElement | null>(null);

  const [isVisible, setIsVisible] = useState(false);


  /* =========================
     Intersection Observer
  ========================= */

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {

        if (entry.isIntersecting) {
          setIsVisible(true);

          // Once animation starts,
          // observer is no longer required
          observer.unobserve(section);
        }

      },
      {
        threshold: 0.25,
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);


  /* =========================
     Highlights Data
  ========================= */

  const highlights = [
    {
      number: "8",
      label: "Editions",
    },
    {
      number: "4,800+",
      label: "Enterprises Represented",
    },
    {
      number: "250+",
      label: "Enterprise Speakers",
    },
    {
      number: "10,000+",
      label: "Registrations",
    },
    {
      number: "3+",
      label: "Parallel Tracks",
    },
  ];


  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-white py-14 md:py-16"
    >

      {/* =========================
          Background Video
      ========================= */}

      {/* <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/bg-animation2.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      /> */}


      {/* =========================
          Dark Overlay
      ========================= */}

      <div className="absolute inset-0 " />


      {/* =========================
          Gradient Overlay
      ========================= */}

      <div className="absolute inset-0" />


      {/* =========================
          Aurora Effects
      ========================= */}

      <div className="absolute inset-0 pointer-events-none">

        <div
          className="
            absolute
            top-0
            left-0
            w-1/2
            h-1/2
          "
        />

        <div
          className="
            absolute
            bottom-0
            right-0
            w-1/2
            h-1/2
          "
        />

        <div
          className="
            absolute
            top-1/2
            left-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-3/4
            h-3/4
            
          "
        />

      </div>


      {/* =========================
          Content
      ========================= */}

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto mb-20 max-w-4xl text-center">
          <h2 className="text-xl font-black leading-tight text-[#022158] sm:text-5xl md:text-[3.5rem]">
            <span className={`highlights-line line-delay-1 ${isVisible ? "is-visible" : ""}`}>
              The Room That Matters
            </span>
          </h2>
        </div>

        <div
          className="
            grid grid-cols-1 gap-y-10
            sm:grid-cols-2
            lg:grid-cols-5
            max-w-[1600px]
            mx-auto
          "
        >

          {highlights.map((item, index) => {

            return (

              <div
                key={index}
                className={`
                      flex
                      flex-col
                      items-center
                      justify-center
                      text-center

                      border-[#234478]
                      lg:border-r
                      lg:last:border-r-0
                    `}
              >

                {/* =========================
                    Number
                ========================= */}

                <div
                  className={`
                    highlights-line line-delay-${index + 2}
                    text-5xl
                    font-black
                    sm:text-6xl
                    md:text-[3.5rem]
                    text-[#022158]
                    leading-none

                    h-[1.1em]

                    flex
                    items-center
                    justify-center

                    overflow-hidden
                    ${isVisible ? "is-visible" : ""}
                  `}
                >
                  <AnimatedNumber
                    value={item.number}
                    startAnimation={isVisible}
                  />
                </div>


                {/* =========================
                    Label
                ========================= */}

                <div
                  className={`
                    highlights-line line-delay-${index + 6}
                    mt-4 text-base
                    font-normal
                    text-[#171717]
                    tracking-normal
                    leading-snug
                    max-w-[240px]
                    ${isVisible ? "is-visible" : ""}
                  `}
                >
                  {item.label}
                </div>

              </div>
            );
          })}

        </div>

      </div>

      <style>{`
        @keyframes highlightsLineReveal {
          from {
            opacity: 0;
            clip-path: inset(0 0 100% 0);
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            clip-path: inset(0 0 0 0);
            transform: translateY(0);
          }
        }

        .highlights-line {
          display: inline-block;
          opacity: 0;
        }

        .highlights-line.is-visible {
          animation: highlightsLineReveal 850ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .line-delay-0 { animation-delay: 0ms; }
        .line-delay-1 { animation-delay: 140ms; }
        .line-delay-2 { animation-delay: 280ms; }
        .line-delay-3 { animation-delay: 420ms; }
        .line-delay-4 { animation-delay: 560ms; }
        .line-delay-5 { animation-delay: 700ms; }
        .line-delay-6 { animation-delay: 840ms; }
        .line-delay-7 { animation-delay: 980ms; }
        .line-delay-8 { animation-delay: 1120ms; }
        .line-delay-9 { animation-delay: 1260ms; }

        @media (prefers-reduced-motion: reduce) {
          .highlights-line.is-visible {
            animation-duration: 1ms;
          }
        }
      `}</style>

    </section>
  );
};

export default Highlights;