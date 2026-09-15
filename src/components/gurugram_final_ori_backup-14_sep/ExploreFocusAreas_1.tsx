import { useEffect, useRef, useState } from "react";

const focusAreas = [
  {
    label: "Enterprise AI",
    headline: "Innovating the future. At enterprise speed.",
    sub: "Ideas. Technology. Transformation. The AI conversation enterprises are having now.",
    image: "/gurugram/focus/Image_1.png",
  },
  {
    label: "Leadership",
    headline: "Stronger together for tomorrow.",
    sub: "Where India's most senior technology and business leaders build what's next.",
    image: "/gurugram/focus/Image_2.png",
  },
  {
    label: "AI Infrastructure",
    headline: "The backbone behind every breakthrough.",
    sub: "Compute, data and platforms powering enterprise-scale AI.",
    image: "/gurugram/focus/Image_3.png",
  },
  {
    label: "Agentic AI",
    headline: "From pilot to production. From assistance to autonomy.",
    sub: "The systems that decide. The leaders who define.",
    image: "/gurugram/focus/Image_4.png",
  },
  {
    label: "AI Transformation",
    headline: "Rewiring the enterprise, function by function.",
    sub: "How real organisations are putting AI to work.",
    image: "/gurugram/focus/Image_5.png",
  },
  {
    label: "Future of Work",
    headline: "New roles. New rules. New teams.",
    sub: "What work looks like when humans and agents build together.",
    image: "/gurugram/focus/Image_6.png",
  },
];

const FocusAreasSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(false);
          requestAnimationFrame(() => {
            requestAnimationFrame(() => setIsVisible(true));
          });
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="focus"
      className="relative bg-[#050B22] py-16 md:py-20 overflow-hidden"
    >
      <div className="max-w-[1500px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-stretch gap-8 lg:gap-4">
          {/* =================================================
              LEFT TEXT PANEL
          ================================================= */}
          <div
            className={`
              lg:w-[26%]
              flex-shrink-0
              flex
              flex-col
              justify-center

              transition-all
              duration-[1200ms]
              ease-[cubic-bezier(0.16,1,0.3,1)]

              ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}
            `}
          >
            <p className="text-[#EF3340] text-[16px] font-bold mb-3">
              Discover what&apos;s possible
            </p>

            <h2 className="text-white font-black text-[44px] sm:text-[54px] leading-[0.98] tracking-[-1.5px]">
              Explore
              <br />
              focus areas
            </h2>

            <p className="mt-5 max-w-[320px] text-white/60 text-base leading-relaxed">
              Deep-dive into the themes shaping enterprise AI adoption across
              India
            </p>

            <button
              className="
                mt-8
                w-fit
                px-7
                py-3.5
                rounded-full
                text-white
                text-[15px]
                font-semibold

                bg-gradient-to-r
                from-[#5B2A86]
                via-[#B23A63]
                to-[#EF3340]

                transition-transform
                duration-300
                hover:scale-[1.04]
              "
            >
              View Full Agenda
            </button>
          </div>

          {/* =================================================
              RIGHT DIAGONAL PANEL GRID
          ================================================= */}
          <div className="lg:w-[74%] grid grid-rows-2 gap-3 md:gap-4">
            {/* Row 1 */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
              {focusAreas.slice(0, 3).map((area, index) => (
                <FocusPanel
                  key={area.label}
                  area={area}
                  index={index}
                  isVisible={isVisible}
                />
              ))}
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
              {focusAreas.slice(3, 6).map((area, index) => (
                <FocusPanel
                  key={area.label}
                  area={area}
                  index={index + 3}
                  isVisible={isVisible}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* =====================================================
   SINGLE PANEL
   Diagonal edges are created with a skewed wrapper and
   an un-skewed inner layer, so the image/text stay
   straight while the panel silhouette reads as angled.
===================================================== */

type Area = (typeof focusAreas)[number];

const FocusPanel = ({
  area,
  index,
  isVisible,
}: {
  area: Area;
  index: number;
  isVisible: boolean;
}) => {
  return (
    <div
      className={`
        group
        relative

        h-[260px]
        sm:h-[300px]
        md:h-[340px]

        overflow-hidden

        transition-all
        duration-[1000ms]
        ease-[cubic-bezier(0.16,1,0.3,1)]

        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
      style={{
        clipPath:
          "polygon(6% 0%, 100% 0%, 94% 100%, 0% 100%)",
        transitionDelay: isVisible ? `${180 + index * 120}ms` : "0ms",
      }}
    >
      {/* IMAGE */}
      <img
        src={area.image}
        alt={area.label}
        className="
          absolute inset-0
          w-full h-full
          object-cover

          transition-transform
          duration-[1200ms]
          ease-out

          group-hover:scale-110
        "
      />

      {/* DARK OVERLAY */}
      <div
        className="
          absolute inset-0

          bg-gradient-to-t
          from-[#050B22]
          via-[#050B22]/55
          to-[#050B22]/10

          transition-opacity
          duration-500

          group-hover:from-[#050B22]/95
        "
      />

      {/* CONTENT */}
      <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-7">
        <span className="text-white/80 text-[13px] font-bold tracking-[1px] uppercase">
          {area.label}
        </span>

        <div>
          <h3 className="text-white text-[22px] md:text-[26px] font-black leading-[1.05] tracking-[-0.5px]">
            {area.headline}
          </h3>
          <p className="mt-3 text-white/70 text-[13px] md:text-[14px] italic leading-snug max-w-[85%]">
            {area.sub}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FocusAreasSection;
