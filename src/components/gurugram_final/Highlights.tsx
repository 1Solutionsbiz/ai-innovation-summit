import { useEffect, useRef, useState } from "react";
import { getScrollDirection } from "@/hooks/useScrollDirection";

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
  const [revealDirection, setRevealDirection] = useState<"up" | "down">("down");


  /* =========================
     Intersection Observer
     Re-triggers every time the section enters the
     viewport (scrolling down OR back up), instead of
     firing once and staying stuck "on". The direction is
     captured at the moment it enters so the stat columns
     can stagger in reverse order when scrolling up.
  ========================= */

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealDirection(getScrollDirection());
          setIsVisible(false);
          requestAnimationFrame(() => {
            requestAnimationFrame(() => setIsVisible(true));
          });
        } else {
          setIsVisible(false);
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

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <div className="mx-auto mb-12 max-w-4xl text-center sm:mb-20">
          <h2 className="text-[#022158]
                font-black
                text-[34px]
                sm:text-[48px]
                md:text-[54px]
                xl:text-[42px]
                leading-[0.94]">
            <span className={`inline-block partners-reveal-up ${isVisible ? "is-visible" : ""}`}>
              The Journey So Far
            </span>
          </h2>
        </div>

        <div
          className="
            grid grid-cols-2 gap-x-3 gap-y-8
            sm:grid-cols-2
            sm:gap-x-6 sm:gap-y-10
            lg:grid-cols-5
            max-w-[1600px]
            mx-auto
          "
        >

          {highlights.map((item, index) => {

            const order = revealDirection === "up" ? highlights.length - 1 - index : index;
            const delayMs = isVisible ? `${order * 160}ms` : undefined;

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
                      min-w-0
                    `}
              >

                {/* =========================
                    Number
                ========================= */}

                <div
                  className={`
                    partners-reveal-up
                    text-[clamp(1.5rem,7vw,2rem)]
                    font-black
                    sm:text-2xl
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
                  style={{ animationDelay: delayMs }}
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
                    partners-reveal-up
                    mt-2 text-sm
                    sm:mt-4
                    sm:text-base
                    font-normal
                    text-[#171717]
                    tracking-normal
                    leading-snug
                    max-w-[150px]
                    sm:max-w-[240px]
                    ${isVisible ? "is-visible" : ""}
                  `}
                  style={{ animationDelay: delayMs }}
                >
                  {item.label}
                </div>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
};

export default Highlights;
