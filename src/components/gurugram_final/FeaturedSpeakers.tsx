import {
  ArrowLeft,
  ArrowRight,
  Plus,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const speakers = [
  {
    name: "Arjun Mehta",
    role: "Chief Technology Officer, Northbridge Retail",
    description:
      "Arjun is a technology leader focused on building scalable digital platforms, AI-powered solutions and enterprise technology strategies.",
    image: "gurugram/speakers/speaker_0.png",
    linkedin: "#",
  },
  {
    name: "Priya Nair",
    role: "VP of Data & AI, Meridian Financial",
    description:
      "Priya leads data and AI initiatives with a focus on intelligent automation, data-driven decision making and responsible AI adoption.",
    image: "gurugram/speakers/speaker_1.png",
    linkedin: "https://www.linkedin.com/in/priyanair",
  },
  {
    name: "Karan Malhotra",
    role: "Founder, Orbit AI Labs",
    description:
      "Karan is an entrepreneur building next-generation AI products focused on agentic systems, automation and enterprise intelligence.",
    image: "gurugram/speakers/speaker_2.png",
    linkedin: "https://www.linkedin.com/in/karanmalhotra",
  },
  {
    name: "Arjun Mehta",
    role: "Chief Technology Officer, Northbridge Retail",
    description:
      "Arjun is a technology leader focused on building scalable digital platforms, AI-powered solutions and enterprise technology strategies.",
    image: "gurugram/speakers/speaker_3.png",
    linkedin: "https://www.linkedin.com/in/arjunmehta",
  },
  {
    name: "Priya Nair",
    role: "VP of Data & AI, Meridian Financial",
    description:
      "Priya leads data and AI initiatives with a focus on intelligent automation, data-driven decision making and responsible AI adoption.",
    image: "gurugram/speakers/speaker_4.png",
    linkedin: "https://www.linkedin.com/in/priyanair",
  },
  {
    name: "Karan Malhotra",
    role: "Founder, Orbit AI Labs",
    description:
      "Karan is an entrepreneur building next-generation AI products focused on agentic systems, automation and enterprise intelligence.",
    image: "gurugram/speakers/speaker_5.png",
    linkedin: "https://www.linkedin.com/in/karanmalhotra",
  },
];

const FeaturedSpeakers = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);

  const autoScrollTimer = useRef<ReturnType<
    typeof setInterval
  > | null>(null);

  const [sectionVisible, setSectionVisible] =
    useState(false);

  const [isHovering, setIsHovering] =
    useState(false);

  const [selectedSpeaker, setSelectedSpeaker] =
    useState<(typeof speakers)[number] | null>(null);

  /*
   * Duplicate speakers for infinite scrolling
   */
  const loopSpeakers = [
    ...speakers,
    ...speakers,
    ...speakers,
  ];

  /* =====================================================
     SECTION VISIBILITY
  ===================================================== */

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          /*
           * Start animation
           */
          setSectionVisible(false);

          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              setSectionVisible(true);
            });
          });
        } else {
          /*
           * Reset animation.
           * When user comes back, animation starts again.
           */
          setSectionVisible(false);
        }
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  /* =====================================================
     GET CARD WIDTH
  ===================================================== */

  const getCardWidth = () => {
    const scroller = scrollerRef.current;

    if (!scroller) {
      return 240;
    }

    const card =
      scroller.querySelector<HTMLElement>(
        "[data-speaker-card]"
      );

    if (!card) {
      return 240;
    }

    const styles = window.getComputedStyle(scroller);

    const gap =
      parseFloat(styles.columnGap || styles.gap) || 12;

    return card.offsetWidth + gap;
  };

  /* =====================================================
     INFINITE LOOP
  ===================================================== */

  const normalizeScrollPosition = () => {
    const scroller = scrollerRef.current;

    if (!scroller) return;

    /*
     * Because we have 3 copies,
     * middle copy starts at speakers.length cards.
     */
    const oneSetWidth =
      getCardWidth() * speakers.length;

    /*
     * If user reaches third copy,
     * move back by one complete set.
     */
    if (
      scroller.scrollLeft >=
      oneSetWidth * 2
    ) {
      scroller.scrollLeft -= oneSetWidth;
    }

    /*
     * If user reaches before first copy,
     * move forward by one complete set.
     */
    if (scroller.scrollLeft <= 0) {
      scroller.scrollLeft += oneSetWidth;
    }
  };

  /* =====================================================
     START CAROUSEL FROM MIDDLE COPY
  ===================================================== */

  useEffect(() => {
    const scroller = scrollerRef.current;

    if (!scroller) return;

    /*
     * Start from middle set.
     *
     * This makes both left and right
     * infinite scrolling possible.
     */
    const startPosition =
      getCardWidth() * speakers.length;

    scroller.scrollLeft = startPosition;
  }, []);

  /* =====================================================
     AUTO SCROLL
  ===================================================== */

  useEffect(() => {
    if (autoScrollTimer.current) {
      clearInterval(autoScrollTimer.current);
    }

    if (!sectionVisible) return;

    autoScrollTimer.current = setInterval(() => {
      if (isHovering) return;

      const scroller = scrollerRef.current;

      if (!scroller) return;

      const cardWidth = getCardWidth();

      /*
       * Automatically move ONE speaker
       */
      scroller.scrollBy({
        left: cardWidth,
        behavior: "smooth",
      });

      /*
       * Check loop after animation
       */
      setTimeout(() => {
        normalizeScrollPosition();
      }, 650);
    }, 3500);

    return () => {
      if (autoScrollTimer.current) {
        clearInterval(autoScrollTimer.current);
      }
    };
  }, [sectionVisible, isHovering]);

  /* =====================================================
     MANUAL ARROW
     4 SPEAKERS AT A TIME
  ===================================================== */

  const moveSpeakers = (
    direction: "left" | "right"
  ) => {
    const scroller = scrollerRef.current;

    if (!scroller) return;

    const cardWidth = getCardWidth();

    /*
     * 4 speakers
     */
    const amount = cardWidth * 4;

    if (direction === "right") {
      scroller.scrollBy({
        left: amount,
        behavior: "smooth",
      });
    } else {
      scroller.scrollBy({
        left: -amount,
        behavior: "smooth",
      });
    }

    /*
     * Normalize after smooth scrolling
     */
    setTimeout(() => {
      normalizeScrollPosition();
    }, 700);
  };

  /* =====================================================
     POPUP
  ===================================================== */

  const openSpeaker = (
    speaker: (typeof speakers)[number]
  ) => {
    setSelectedSpeaker(speaker);
  };

  const closeSpeaker = () => {
    setSelectedSpeaker(null);
  };

  /* =====================================================
     RENDER
  ===================================================== */

  return (
    <>
      {/* =================================================
          FEATURED SPEAKERS
      ================================================= */}

      <section
        ref={sectionRef}
        id="speakers"
        className="
          relative
          bg-white
          py-16
          md:py-20
          overflow-hidden
        "
      >

        <div
          className="
            max-w-[100%]
            mx-auto
            px-6
          "
        >

          <div
            className="
              grid
              grid-cols-1
              lg:grid-cols-[25%_1fr]
              gap-10
              lg:gap-14
              items-start
              align-items-center
            "
          >

            {/* =================================================
                LEFT CONTENT
            ================================================= */}

            <div
              className="pt-2"
            >

              <p
                className={`
                  text-[18px]
                  md:text-[20px]
                  font-bold
                  text-[#EF3340]
                  mb-3
                  opacity-0
                  translate-y-8
                  transition-all
                  duration-[1200ms]
                  ease-[cubic-bezier(0.16,1,0.3,1)]
                  ${sectionVisible ? "opacity-100 translate-y-0" : ""}
                `}
              >
                AIIS 2026 Speakers
              </p>

              <h2
                className="
                  text-[#022158]
                  font-black

                  text-[38px]
                  sm:text-[44px]
                  md:text-[48px]

                  leading-[1.05]

                  tracking-[-1.5px]
                "
              >
                <span
                  className={`block opacity-0 translate-y-8 transition-all duration-[1400ms] delay-100 ease-[cubic-bezier(0.16,1,0.3,1)] ${sectionVisible ? "opacity-100 translate-y-0" : ""}`}
                >
                  Voices Leading
                </span>
                <span
                  className={`block opacity-0 translate-y-8 transition-all duration-[1400ms] delay-200 ease-[cubic-bezier(0.16,1,0.3,1)] ${sectionVisible ? "opacity-100 translate-y-0" : ""}`}
                >
                  India&apos;s AI Future
                </span>
              </h2>

              <button
                type="button"
                className={`view-all-speakers mt-5 opacity-0 translate-y-8 transition-all duration-[1200ms] delay-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${sectionVisible ? "opacity-100 translate-y-0" : ""}`}
              >
                View all speakers
              </button>

            </div>


            {/* =================================================
                RIGHT CONTENT
            ================================================= */}

            <div
              className={`
                min-w-0

                transition-all
                duration-[1700ms]
                delay-150

                ease-[cubic-bezier(0.16,1,0.3,1)]

                ${sectionVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-32"
                }
              `}
            >

              {/* =================================================
                  ARROW BUTTONS
                  
                  ALWAYS AT START / TOP OF SPEAKERS
              ================================================= */}

              <div
                className="
                  w-full

                  flex
                  justify-end
                  items-center

                  gap-3

                  mb-5
                "
              >

                {/* LEFT */}

                <button
                  type="button"
                  onClick={() =>
                    moveSpeakers("left")
                  }
                  aria-label="Previous speakers"
                  className="
                    flex
                    shrink-0

                    w-11
                    h-11

                    rounded-full

                    border
                    border-[#022158]

                    bg-white
                    text-[#022158]

                    items-center
                    justify-center

                    hover:bg-[#022158]
                    hover:text-white

                    active:scale-95
                    hover:scale-105

                    transition-all
                    duration-300

                    cursor-pointer

                    z-20
                  "
                >
                  <ArrowLeft
                    className="w-4 h-4"
                  />
                </button>


                {/* RIGHT */}

                <button
                  type="button"
                  onClick={() =>
                    moveSpeakers("right")
                  }
                  aria-label="Next speakers"
                  className="
                    flex
                    shrink-0

                    w-11
                    h-11

                    rounded-full

                    bg-[#022158]
                    text-white

                    items-center
                    justify-center

                    hover:bg-[#123d75]

                    active:scale-95
                    hover:scale-105

                    transition-all
                    duration-300

                    cursor-pointer

                    z-20
                  "
                >
                  <ArrowRight
                    className="w-4 h-4"
                  />
                </button>

              </div>


              {/* =================================================
                  SPEAKER SCROLLER
              ================================================= */}

              <div
                ref={scrollerRef}

                onMouseEnter={() =>
                  setIsHovering(true)
                }

                onMouseLeave={() =>
                  setIsHovering(false)
                }

                className="
                  w-full

                  flex
                  gap-3

                  overflow-x-auto
                  overflow-y-visible

                  scroll-smooth

                  pb-5
                  pt-5

                  snap-x
                  snap-mandatory

                  [scrollbar-width:none]
                  [&::-webkit-scrollbar]:hidden
                "
              >

                {loopSpeakers.map(
                  (speaker, index) => (
                    <div
                      key={`${speaker.name}-${index}`}

                      data-speaker-card

                      onClick={() =>
                        openSpeaker(speaker)
                      }

                      className="
                        group

                        relative
                        shrink-0

                        w-[220px]
                        sm:w-[230px]
                        md:w-[290px]

                        snap-start

                        cursor-pointer

                        rounded-[18px]

                        overflow-hidden

                        bg-[#022158]

                        transition-all
                        duration-700
                        ease-out

                        hover:-translate-y-3
                        hover:scale-[1.025]

                        hover:shadow-[0_25px_50px_rgba(2,33,88,0.30)]
                      "
                    >

                      {/* =================================================
                          IMAGE
                      ================================================= */}

                      <div
                        className="
                          relative

                          aspect-[3/4]

                          overflow-hidden

                          
                        "
                        style={{
                          backgroundImage: "url('/gurugram/speakers/bg.png')",
                        }}

                      >

                        <img
                          src={speaker.image}
                          alt={speaker.name}

                          className="
                            absolute
                            inset-0

                            w-full
                            h-full

                            object-cover

                            grayscale

                            transition-all
                            duration-[1200ms]
                            ease-out

                            group-hover:scale-100
                            group-hover:grayscale-0
                          "
                        />


                        {/* Gradient */}

                        <div
                          className="
                            absolute
                            inset-0

                            bg-gradient-to-t
                            from-[#000]
                            via-[#fff0]
                            to-transparent

                            opacity-95

                            group-hover:opacity-70

                            transition-opacity
                            duration-700
                          "
                        />


                        {/* PLUS */}

                        <span
                          className="
                            absolute
                            top-3
                            right-3

                            w-10
                            h-10

                            rounded-full

                            bg-white
                            text-[#022158]

                            flex
                            items-center
                            justify-center

                            opacity-0
                            scale-75

                            group-hover:opacity-100
                            group-hover:scale-100

                            transition-all
                            duration-500
                          "
                        >
                          <Plus className="w-4 h-4" />
                        </span>


                        {/* SPEAKER INFO */}

                        <div
                          className="
                            absolute
                            left-4
                            right-4
                            bottom-4
                          "
                        >

                          <h3
                            className="
                              text-white

                              font-bold

                              text-[19px]

                              leading-tight
                            "
                          >
                            {speaker.name}
                          </h3>

                          <p
                            className="
                              mt-1

                              text-white/85

                              text-[12px]

                              leading-[1.35]

                              line-clamp-3
                            "
                          >
                            {speaker.role}
                          </p>

                        </div>

                      </div>

                    </div>
                  )
                )}

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          SPEAKER POPUP
      ===================================================== */}

      {selectedSpeaker && (
        <div
          className="
            fixed
            inset-0

            z-[99999]

            flex
            items-center
            justify-center

            p-5

            bg-[#022158]/75

            backdrop-blur-md

            animate-[fadeIn_0.5s_ease-out]
          "

          onClick={closeSpeaker}
        >

          <div
            className="
              relative

              w-full
              max-w-[50%]

              min-h-[50vh]
              max-h-[90vh]

              overflow-y-auto

              rounded-3xl

              bg-white

              shadow-2xl

              animate-[popupScale_0.6s_cubic-bezier(0.16,1,0.3,1)]
              flex
            "

            onClick={(e) =>
              e.stopPropagation()
            }
          >

            {/* CLOSE */}

            <button
              type="button"
              onClick={closeSpeaker}
              aria-label="Close speaker"
              className="
                absolute
                top-4
                right-4

                z-20

                w-10
                h-10

                rounded-full

                bg-[#022158]
                text-white

                flex
                items-center
                justify-center

                hover:bg-[#123d75]

                hover:scale-105

                transition-all
                duration-300
              "
            >
              <X className="w-5 h-5" />
            </button>


            {/* IMAGE */}

            <div
              className="
                relative

                w-full

                aspect-[4/2]

                overflow-hidden
              "
            >

              <img
                src={selectedSpeaker.image}
                alt={selectedSpeaker.name}

                className="
                  w-full
                  h-full

                  object-cover
                "
              />

            </div>


            {/* CONTENT */}

            <div className="p-6 md:p-8">

              {/* NAME */}

              <h2
                className="
                  text-[#022158]

                  text-2xl
                  md:text-3xl

                  font-black

                  leading-tight
                "
              >
                {selectedSpeaker.name}
              </h2>


              {/* ROLE */}

              <p
                className="
                  mt-2

                  text-[#EF3340]

                  text-sm
                  md:text-base

                  font-semibold
                "
              >
                {selectedSpeaker.role}
              </p>


              {/* DESCRIPTION */}

              <p
                className="
                    mt-5

                    text-slate-600

                    text-sm
                    md:text-base

                    leading-7
                  "
              >
                {selectedSpeaker.description}
              </p>


              <a
                href={selectedSpeaker.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-4

                  inline-block

                  text-[#022158]

                  underline

                  hover:text-[#EF3340]
                "
              >
                View LinkedIn Profile
              </a>

            </div>

          </div>

        </div>
      )}


      {/* =====================================================
          POPUP ANIMATION
      ===================================================== */}

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }

          to {
            opacity: 1;
          }
        }

        @keyframes popupScale {
          from {
            opacity: 0;
            transform: scale(0.90) translateY(25px);
          }

          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default FeaturedSpeakers;