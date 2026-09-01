import React, { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const speakers = [
  {
    name: "Siddharth Sureka",
    designation: "Chief AI Officer",
    company: "Motilal Oswal Financial Services",
    image: "/delhi26_redesign/speakers/a.png",
  },
  {
    name: "Siddharth Sureka",
    designation: "Chief AI Officer",
    company: "Motilal Oswal Financial Services",
    image: "/delhi26_redesign/speakers/a.png",
  },
  {
    name: "Siddharth Sureka",
    designation: "Chief AI Officer",
    company: "Motilal Oswal Financial Services",
    image: "/delhi26_redesign/speakers/a.png",
  },
  {
    name: "Siddharth Sureka",
    designation: "Chief AI Officer",
    company: "Motilal Oswal Financial Services",
    image: "/delhi26_redesign/speakers/a.png",
  },
  {
    name: "Siddharth Sureka",
    designation: "Chief AI Officer",
    company: "Motilal Oswal Financial Services",
    image: "/delhi26_redesign/speakers/a.png",
  },
  {
    name: "Siddharth Sureka",
    designation: "Chief AI Officer",
    company: "Motilal Oswal Financial Services",
    image: "/delhi26_redesign/speakers/a.png",
  },
  {
    name: "Siddharth Sureka",
    designation: "Chief AI Officer",
    company: "Motilal Oswal Financial Services",
    image: "/delhi26_redesign/speakers/a.png",
  },
];

const SpeakersSection = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({
      left: -350,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({
      left: 350,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="speakers"
      className="relative overflow-hidden bg-white"
    >
      {/* =========================================================
          SPEAKERS SECTION
      ========================================================= */}

      <div
        className="
          px-5
          pb-20
          pt-10
          md:px-8
          md:pt-14
        "
      >

        {/* =====================================================
            HEADING
        ===================================================== */}

        <div className="text-center">

          <p
            className="
              mb-2
              text-[18px]
              font-bold
              text-[#6332b9]
              md:text-[20px]
            "
          >
            Featured Voices
          </p>

          <h2
            className="
              text-[38px]
              font-extrabold
              leading-tight
              tracking-[-1.5px]
              text-[#062861]
              md:text-[46px]
              lg:text-[48px]
            "
          >
            Our Visionary Speakers
          </h2>

          {/* View All Speakers */}

          <button
            className="
              group
              relative
              mt-5
              overflow-hidden
              rounded-full
              border
              border-[#6332b9]
              px-5
              py-2
              text-[14px]
              font-medium
              text-[#173b91]
              transition-all
              duration-300
              hover:text-white
            "
          >
            <span
              className="
                absolute
                inset-0
                -z-0
                translate-x-[-105%]
                bg-gradient-to-r
                from-[#6332b9]
                to-[#ff4055]
                transition-transform
                duration-300
                group-hover:translate-x-0
              "
            />

            <span className="relative z-10">
              View all speakers →
            </span>
          </button>

        </div>

        {/* =====================================================
            SLIDER CONTROLS
        ===================================================== */}

        <div className="mb-2 mt-6 flex justify-end gap-2">

          {/* Previous */}

          <button
            onClick={scrollLeft}
            aria-label="Previous speakers"
            className="
              flex
              h-8
              w-8
              items-center
              justify-center
              rounded-full
              border
              border-[#062861]
              bg-white
              text-[#062861]
              transition-all
              duration-300
              hover:-translate-x-1
              hover:bg-[#062861]
              hover:text-white
            "
          >
            <ArrowLeft size={17} />
          </button>

          {/* Next */}

          <button
            onClick={scrollRight}
            aria-label="Next speakers"
            className="
              flex
              h-8
              w-8
              items-center
              justify-center
              rounded-full
              bg-[#062861]
              text-white
              transition-all
              duration-300
              hover:translate-x-1
              hover:bg-[#173f94]
            "
          >
            <ArrowRight size={17} />
          </button>

        </div>

        {/* =====================================================
            SPEAKERS SLIDER
        ===================================================== */}

        <div
          ref={sliderRef}
          className="
            flex
            gap-3
            overflow-x-auto
            scroll-smooth
            pb-3
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
          "
        >

          {speakers.map((speaker, index) => (

            <article
              key={speaker.name}
              className="
                group
                min-w-[205px]
                max-w-[220px]
                flex-1
                overflow-hidden
                rounded-[15px]
                bg-white
                transition-all
                duration-500
                hover:-translate-y-2
                hover:shadow-xl
              "
            >

              {/* =================================================
                  SPEAKER IMAGE
              ================================================= */}

              <div
                className="
                  relative
                  h-[245px]
                  overflow-hidden
                  rounded-[15px]
                  bg-[#062861]
                "
              >

                {/* Blue Background */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-[radial-gradient(circle_at_80%_20%,rgba(0,125,255,.5),transparent_35%),linear-gradient(145deg,#00358e,#071e68)]
                  "
                />

                {/* Decorative Line */}

                <div
                  className="
                    absolute
                    right-[-20px]
                    top-[-20px]
                    h-[150px]
                    w-[180px]
                    rotate-[-18deg]
                    rounded-[50%]
                    border-b-2
                    border-[#168cff]/60
                    transition-transform
                    duration-700
                    group-hover:rotate-[-25deg]
                    group-hover:scale-110
                  "
                />

                {/* Decorative Line */}

                <div
                  className="
                    absolute
                    bottom-[-30px]
                    left-[-30px]
                    h-[130px]
                    w-[180px]
                    rotate-[-15deg]
                    rounded-[50%]
                    border-t-2
                    border-[#ff4055]/60
                    transition-transform
                    duration-700
                    group-hover:rotate-[-5deg]
                    group-hover:scale-110
                  "
                />

                {/* Speaker Image */}

                <img
                  src={speaker.image}
                  alt={speaker.name}
                  loading="lazy"
                  className="
                    absolute
                    bottom-0
                    left-1/2
                    h-full
                    w-full
                    -translate-x-1/2
                    object-contain
                    object-bottom
                    grayscale
                    transition-all
                    duration-500
                    group-hover:scale-[1.04]
                    group-hover:grayscale-0
                  "
                />

              </div>

              {/* =================================================
                  SPEAKER DETAILS
              ================================================= */}

              <div className="px-2 pb-3 pt-3">

                <h3
                  className="
                    text-[20px]
                    font-extrabold
                    leading-[22px]
                    tracking-[-0.5px]
                    text-[#062861]
                  "
                >
                  {speaker.name}
                </h3>

                <p
                  className="
                    mt-2
                    text-[11px]
                    font-semibold
                    leading-[14px]
                    text-[#173f94]
                  "
                >
                  {speaker.designation}
                </p>

                <p
                  className="
                    text-[11px]
                    font-medium
                    leading-[14px]
                    text-[#173f94]
                  "
                >
                  {speaker.company}
                </p>

              </div>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
};

export default SpeakersSection;