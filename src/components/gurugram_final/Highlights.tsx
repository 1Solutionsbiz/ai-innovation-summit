import { User, Handshake, Users, Lightbulb } from "lucide-react";
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
      number: "700+",
      label: "Attendees",
      icon: User,
    },
    {
      number: "45+",
      label: "CXO Speakers & Moderators",
      icon: Users,
    },
    {
      number: "12+",
      label: "Sessions",
      icon: Handshake,
    },
    {
      number: "10+",
      label: "Industry Sectors",
      icon: Lightbulb,
    },
    {
      number: "3+",
      label: "Parallel Tracks",
      icon: Lightbulb,
    },
  ];


  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-32 overflow-hidden"
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

      <div className="container mx-auto px-4 relative z-10">

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-5
            gap-5
            max-w-[1400px]
            mx-auto
          "
        >

          {highlights.map((item, index) => {

            const delays = [
              "",
              "animation-delay-200",
              "animation-delay-400",
              "animation-delay-600",
              "animation-delay-800",
            ];

            return (

              <div
                key={index}
                className={`
                      flex
                      flex-col
                      items-center
                      justify-center
                      text-center

                      border-r-2
                      border-[#022158]
                      last:border-r-0
                    `}
              >

                {/* =========================
                    Number
                ========================= */}

                <div
                  className="
                    text-5xl
                    xl:text-6xl
                    font-bold
                    text-[#022158]
                    drop-shadow-lg
                    leading-none

                    h-[1.1em]

                    flex
                    items-center
                    justify-center

                    overflow-hidden
                  "
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
                  className="
                    text-sm
                    xl:text-base
                    font-medium
                    text-[#000]
                    tracking-wide
                    leading-snug
                    max-w-[220px]
                  "
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