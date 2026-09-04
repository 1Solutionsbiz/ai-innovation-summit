import { useEffect, useRef, useState } from "react";

const focusAreas = [
  {
    title: "Enterprise AI",
    heading: "INNOVATING THE FUTURE. AT ENTERPRISE SPEED.",
    description:
      "Ideas. Technology. Transformation. The AI conversation enterprises are having now.",
    image: "/gurugram/focus/Image_1.png",
    position: "top-left",
  },
  {
    title: "Leadership",
    heading: "STRONGER TOGETHER FOR TOMORROW.",
    description:
      "Where India's most senior technology and business leaders build what's next.",
    image: "/gurugram/focus/Image_2.png",
    position: "top-right",
  },
  {
    title: "Agentic AI",
    heading:
      "FROM PILOT TO PRODUCTION. FROM ASSISTANCE TO AUTONOMY.",
    description:
      "The systems that decide. The leaders who define.",
    image: "/gurugram/focus/Image_3.png",
    position: "bottom-center",
  },
  {
    title: "AI Transformation",
    heading: "",
    description: "",
    image: "/gurugram/focus/Image_4.png",
    position: "bottom-left",
  },
  {
    title: "AI Infrastructure",
    heading: "",
    description: "",
    image: "/gurugram/focus/Image_5.png",
    position: "center",
  },
  {
    title: "Future of AI",
    heading: "",
    description: "",
    image: "/gurugram/focus/Image_6.png",
    position: "bottom-right",
  },
];

const FocusAreasSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const [isVisible, setIsVisible] = useState(false);

  /* =====================================================
     INTERSECTION OBSERVER
  ===================================================== */

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          /*
           * Reset animation
           */
          setIsVisible(false);

          /*
           * Restart animation
           */
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              setIsVisible(true);
            });
          });
        } else {
          /*
           * Reset when section leaves viewport
           */
          setIsVisible(false);
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

  return (
    <section
      ref={sectionRef}
      id="focus"
      className="
        relative
        w-full
        overflow-hidden
        bg-[#03091F]
      "
    >
      <div
        className="
          flex
          flex-col
          lg:flex-row
          min-h-[650px]
          lg:min-h-[790px]
        "
      >

        {/* =====================================================
            LEFT CONTENT
        ===================================================== */}

        <div
          className={`
            relative
            z-20

            w-full
            lg:w-[32%]

            shrink-0

            bg-[#03091F]

            flex
            items-center

            px-8
            sm:px-12
            lg:px-14
            xl:px-20

            py-16
            lg:py-20

            transition-all
            duration-[1600ms]
            ease-[cubic-bezier(0.16,1,0.3,1)]

            ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-20"
            }
          `}
        >

          <div className="max-w-[430px]">

            {/* Small Heading */}

            <p
              className="
                text-[#EF3340]

                text-lg
                md:text-xl

                font-bold

                mb-4
              "
            >
              Discover what's possible
            </p>


            {/* Main Heading */}

            <h2
              className="
                text-white

                font-black

                text-[48px]
                sm:text-[58px]
                md:text-[64px]
                xl:text-[72px]

                leading-[0.94]

                tracking-[-3px]
              "
            >
              Explore
              <br />
              focus areas
            </h2>


            {/* Description */}

            <p
              className="
                mt-8

                text-white/90

                text-[18px]
                md:text-[20px]

                leading-[1.45]

                max-w-[400px]
              "
            >
              Deep-dive into the themes shaping
              enterprise AI adoption across India
            </p>


            {/* Button */}

            <button
              type="button"
              className="
                relative

                mt-10

                px-7
                py-3.5

                rounded-full

                text-white

                text-base
                md:text-lg

                font-medium

                bg-gradient-to-r
                from-[#7B4DFF]
                to-[#EF3340]

                border
                border-white/60

                shadow-lg

                overflow-hidden

                transition-all
                duration-500

                hover:scale-105
                hover:shadow-[0_10px_40px_rgba(239,51,64,0.35)]
              "
            >
              <span className="relative z-10">
                View Full Agenda
              </span>

              <span
                className="
                  absolute
                  inset-0

                  bg-white/20

                  translate-x-[-100%]

                  hover:translate-x-[100%]

                  transition-transform
                  duration-700
                "
              />
            </button>

          </div>

        </div>


        {/* =====================================================
            RIGHT IMAGE MOSAIC
        ===================================================== */}

        <div
          className="
            relative

            w-full
            lg:w-[68%]

            min-h-[650px]
            lg:min-h-[790px]

            overflow-hidden

            bg-[#03091F]
          "
        >

          {/* =================================================
              TOP LEFT
          ================================================= */}

          <div
            className={`
              focus-tile
              focus-tile-top-left

              ${
                isVisible
                  ? "focus-tile-visible"
                  : "focus-tile-hidden"
              }
            `}
            style={{
              transitionDelay: "250ms",
            }}
          >

            <img
              src={focusAreas[0].image}
              alt={focusAreas[0].title}
            />

            <div className="focus-overlay-purple" />

            <div className="focus-copy">
              <p className="focus-small-title">
                ENTERPRISE AI
              </p>

              <h3>
                INNOVATING THE
                <br />
                FUTURE. AT
                <br />
                ENTERPRISE SPEED.
              </h3>

              <p className="focus-description">
                Ideas. Technology. Transformation.
                <br />
                The AI conversation enterprises
                <br />
                are having now.
              </p>
            </div>

          </div>


          {/* =================================================
              TOP CENTER / MAP
          ================================================= */}

          <div
            className={`
              focus-tile
              focus-tile-top-center

              ${
                isVisible
                  ? "focus-tile-visible"
                  : "focus-tile-hidden"
              }
            `}
            style={{
              transitionDelay: "400ms",
            }}
          >

            <img
              src={focusAreas[1].image}
              alt={focusAreas[1].title}
            />

          </div>


          {/* =================================================
              TOP RIGHT
          ================================================= */}

          <div
            className={`
              focus-tile
              focus-tile-top-right

              ${
                isVisible
                  ? "focus-tile-visible"
                  : "focus-tile-hidden"
              }
            `}
            style={{
              transitionDelay: "550ms",
            }}
          >

            <img
              src={focusAreas[2].image}
              alt={focusAreas[2].title}
            />

            <div className="focus-overlay-blue" />

            <div className="focus-copy focus-copy-right">

              <p className="focus-small-title">
                LEADERSHIP
              </p>

              <h3>
                STRONGER
                <br />
                TOGETHER
                <br />
                FOR TOMORROW.
              </h3>

              <p className="focus-description">
                Where India's most senior
                <br />
                technology and business
                <br />
                leaders build what's next.
              </p>

            </div>

          </div>


          {/* =================================================
              BOTTOM LEFT
          ================================================= */}

          <div
            className={`
              focus-tile
              focus-tile-bottom-left

              ${
                isVisible
                  ? "focus-tile-visible"
                  : "focus-tile-hidden"
              }
            `}
            style={{
              transitionDelay: "700ms",
            }}
          >

            <img
              src={focusAreas[3].image}
              alt={focusAreas[3].title}
            />

          </div>


          {/* =================================================
              BOTTOM CENTER
          ================================================= */}

          <div
            className={`
              focus-tile
              focus-tile-bottom-center

              ${
                isVisible
                  ? "focus-tile-visible"
                  : "focus-tile-hidden"
              }
            `}
            style={{
              transitionDelay: "850ms",
            }}
          >

            <img
              src={focusAreas[4].image}
              alt={focusAreas[4].title}
            />

            <div className="focus-overlay-agentic" />

            <div className="focus-copy focus-copy-agentic">

              <p className="focus-small-title">
                AGENTIC AI
              </p>

              <h3>
                FROM PILOT TO
                <br />
                PRODUCTION. FROM
                <br />
                ASSISTANCE TO
                <br />
                AUTONOMY.
              </h3>

              <p className="focus-description">
                The systems that decide.
                <br />
                The leaders who define.
              </p>

            </div>

          </div>


          {/* =================================================
              BOTTOM RIGHT
          ================================================= */}

          <div
            className={`
              focus-tile
              focus-tile-bottom-right

              ${
                isVisible
                  ? "focus-tile-visible"
                  : "focus-tile-hidden"
              }
            `}
            style={{
              transitionDelay: "1000ms",
            }}
          >

            <img
              src={focusAreas[5].image}
              alt={focusAreas[5].title}
            />

          </div>

        </div>

      </div>


      {/* =====================================================
          CSS
      ===================================================== */}

      <style>{`

        /* ===================================================
           RIGHT MOSAIC
        =================================================== */

        .focus-tile {
          position: absolute;
          overflow: hidden;

          opacity: 1;

          transition-property:
            opacity,
            transform;

          transition-duration: 1500ms;

          transition-timing-function:
            cubic-bezier(0.16, 1, 0.3, 1);
        }


        .focus-tile-hidden {
          opacity: 0;

          transform:
            translateX(100px)
            scale(1.03);
        }


        .focus-tile-visible {
          opacity: 1;

          transform:
            translateX(0)
            scale(1);
        }


        .focus-tile img {
          position: absolute;

          inset: 0;

          width: 100%;
          height: 100%;

          object-fit: cover;

          transition:
            transform 1.5s ease;
        }


        .focus-tile:hover img {
          transform: scale(1.06);
        }


        /* ===================================================
           TOP LEFT
        =================================================== */

        .focus-tile-top-left {
          top: 0;
          left: 0;

          width: 43%;
          height: 50%;

          clip-path:
            polygon(
              12% 0,
              100% 0,
              88% 100%,
              0 100%
            );
        }


        /* ===================================================
           TOP CENTER
        =================================================== */

        .focus-tile-top-center {
          top: 0;
          left: 38%;

          width: 39%;
          height: 50%;

          clip-path:
            polygon(
              12% 0,
              100% 0,
              88% 100%,
              0 100%
            );
        }


        /* ===================================================
           TOP RIGHT
        =================================================== */

        .focus-tile-top-right {
          top: 0;
          right: 0;

          width: 39%;
          height: 50%;

          clip-path:
            polygon(
              12% 0,
              100% 0,
              100% 100%,
              0 100%
            );
        }


        /* ===================================================
           BOTTOM LEFT
        =================================================== */

        .focus-tile-bottom-left {
          left: 0;
          bottom: 0;

          width: 43%;
          height: 50%;

          clip-path:
            polygon(
              0 0,
              88% 0,
              100% 100%,
              0 100%
            );
        }


        /* ===================================================
           BOTTOM CENTER
        =================================================== */

        .focus-tile-bottom-center {
          left: 38%;
          bottom: 0;

          width: 39%;
          height: 50%;

          clip-path:
            polygon(
              12% 0,
              100% 0,
              88% 100%,
              0 100%
            );
        }


        /* ===================================================
           BOTTOM RIGHT
        =================================================== */

        .focus-tile-bottom-right {
          right: 0;
          bottom: 0;

          width: 39%;
          height: 50%;

          clip-path:
            polygon(
              12% 0,
              100% 0,
              100% 100%,
              0 100%
            );
        }


        /* ===================================================
           OVERLAYS
        =================================================== */

        .focus-overlay-purple {
          position: absolute;

          inset: 0;

          background:
            linear-gradient(
              135deg,
              rgba(108, 0, 130, 0.82),
              rgba(91, 0, 110, 0.45)
            );
        }


        .focus-overlay-blue {
          position: absolute;

          inset: 0;

          background:
            linear-gradient(
              135deg,
              rgba(75, 50, 180, 0.80),
              rgba(40, 35, 130, 0.45)
            );
        }


        .focus-overlay-agentic {
          position: absolute;

          inset: 0;

          background:
            linear-gradient(
              135deg,
              rgba(0, 69, 160, 0.90),
              rgba(20, 60, 160, 0.55)
            );
        }


        /* ===================================================
           TEXT
        =================================================== */

        .focus-copy {
          position: absolute;

          z-index: 5;

          left: 14%;
          top: 10%;

          color: white;

          max-width: 470px;
        }


        .focus-copy-right {
          left: 15%;
          top: 10%;
        }


        .focus-copy-agentic {
          left: 14%;
          top: 12%;
        }


        .focus-small-title {
          margin: 0 0 8px;

          font-size: 20px;

          font-weight: 800;

          font-style: italic;

          letter-spacing: -0.5px;
        }


        .focus-copy h3 {
          margin: 0;

          font-size: clamp(
            25px,
            2.2vw,
            42px
          );

          line-height: 1.06;

          font-weight: 900;

          font-style: italic;

          letter-spacing: -1.2px;
        }


        .focus-description {
          margin-top: 8px;

          font-size: clamp(
            14px,
            1.25vw,
            21px
          );

          line-height: 1.18;

          font-style: italic;

          font-weight: 500;
        }


        /* ===================================================
           TABLET
        =================================================== */

        @media (max-width: 1023px) {

          .focus-tile-top-left,
          .focus-tile-top-center,
          .focus-tile-top-right,
          .focus-tile-bottom-left,
          .focus-tile-bottom-center,
          .focus-tile-bottom-right {
            position: relative;

            top: auto;
            left: auto;
            right: auto;
            bottom: auto;

            width: 100%;
            height: auto;

            min-height: 320px;

            clip-path: none;

            display: block;
          }


          .focus-tile-top-left,
          .focus-tile-top-center,
          .focus-tile-top-right,
          .focus-tile-bottom-left,
          .focus-tile-bottom-center,
          .focus-tile-bottom-right {
            margin-bottom: 2px;
          }


          .focus-tile img {
            position: absolute;
          }


          .focus-copy {
            left: 8%;
            right: 8%;
            top: 12%;
          }


          .focus-copy h3 {
            font-size: 32px;
          }


          .focus-description {
            font-size: 17px;
          }

        }


        /* ===================================================
           MOBILE
        =================================================== */

        @media (max-width: 640px) {

          .focus-tile-top-left,
          .focus-tile-top-center,
          .focus-tile-top-right,
          .focus-tile-bottom-left,
          .focus-tile-bottom-center,
          .focus-tile-bottom-right {
            min-height: 280px;
          }


          .focus-copy {
            left: 7%;
            right: 7%;
            top: 10%;
          }


          .focus-small-title {
            font-size: 16px;
          }


          .focus-copy h3 {
            font-size: 26px;

            letter-spacing: -0.7px;
          }


          .focus-description {
            font-size: 14px;
          }

        }

      `}</style>
    </section>
  );
};

export default FocusAreasSection;