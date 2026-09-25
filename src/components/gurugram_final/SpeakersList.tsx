import { Plus, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const speakers = [
  {
    name: "Gaurav Gulati",
    role: "Group CIO, Motherson Group",
    description:"",
    image: "gurugram/speakers/Gaurav-Gulati.png",
    linkedin: "#",
  },
  {
    name: "Parna Ghosh",
    role: "President, Group CIO and Data Protection Officer, Uno Minda",
    description:"",
    image: "gurugram/speakers/Parna-Ghosh.png",
    linkedin: "#",
  },
  {
    name: "Supriya Kaul",
    role: "Regional IT CIO, CNH Industrial",
    description:"",
    image: "gurugram/speakers/Supriya-Kaul.png",
    linkedin: "#",
  },
  {
    name: "Yogesh Kumar Sharma",
    role: "Chief Information Security Officer, Jindal Stainless",
    description:"",
    image: "gurugram/speakers/Yogesh-Kumar-Sharma.png",
    linkedin: "#",
  },
  {
    name: "Sanjiv Jain",
    role: "Group Chief Information Officer, Krishna Maruti Group",
    description:"",
    image: "gurugram/speakers/Sanjiv-Jain.png",
    linkedin: "#",
  },
  {
    name: "Vivek Madan",
    role: "Chief Technology Officer, Hero Fincorp - Housing Entity",
    description:"",
    image: "gurugram/speakers/Vivek-Madan.png",
    linkedin: "#",
  },
];

const FeaturedSpeakers = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const [sectionVisible, setSectionVisible] =
    useState(false);

  const [selectedSpeaker, setSelectedSpeaker] =
    useState<(typeof speakers)[number] | null>(null);

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
        style={{
            background: "repeating-linear-gradient(180deg, #ec262d9c, #592fa9 100%)",
          }}
      >

        <div
          className="
            w-full
            max-w-[1400px]
            mx-auto
            px-4
            sm:px-6
            lg:px-8
          "
        >

          <div
            className="
              flex
              flex-col
              gap-10
            "
          >

            {/* =================================================
                LEFT CONTENT
            ================================================= */}

            <div className="pt-2 text-center">


              <p
                className={`
                  text-[18px]
                  md:text-[20px]
                  font-bold
                  text-[#fff]
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
                  text-[#fff]
                  font-black

                  text-2xl
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
                {/* </span>
                <span
                  className={`block opacity-0 translate-y-8 transition-all duration-[1400ms] delay-200 ease-[cubic-bezier(0.16,1,0.3,1)] ${sectionVisible ? "opacity-100 translate-y-0" : ""}`}
                > */}
                  India&apos;s AI Future
                </span>
              </h2>


            </div>


            {/* =================================================
                RIGHT CONTENT
            ================================================= */}

            <div
              className={`
                w-full
                transition-all
                duration-[1700ms]
                delay-150
                ease-[cubic-bezier(0.16,1,0.3,1)]
                ${sectionVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
                }
              `}
            >
              <div
                className="
                  grid
                  grid-cols-1
                  sm:grid-cols-2
                  md:grid-cols-3
                  lg:grid-cols-5
                  gap-5
                  pt-2
                "
              >

                {speakers.map(
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
                        w-full

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
                            absolute left-3 right-3 bottom-3
                            sm:left-4 sm:right-4 sm:bottom-4
                          "
                        >

                          <h3
                            className="
                              text-white

                              font-bold

                              text-[16px]
                              sm:text-[19px]

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

            p-3
            sm:p-5

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
              max-w-5xl

              max-h-[calc(100vh-1.5rem)]
              sm:max-h-[90vh]

              overflow-y-auto

              rounded-3xl

              bg-white

              shadow-2xl

              animate-[popupScale_0.6s_cubic-bezier(0.16,1,0.3,1)]
              flex
              flex-col
              md:flex-row
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
                md:w-1/2

                aspect-[4/3]
                md:aspect-auto
                md:min-h-[420px]

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

            <div className="p-5 sm:p-6 md:w-1/2 md:p-8">

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