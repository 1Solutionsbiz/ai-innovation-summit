import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface MovingStripProps {
  color?: string;
}

const MovingStrip: React.FC<MovingStripProps> = ({ color = "bg-neon-purple" }) => {
  const stripRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [duplicates, setDuplicates] = useState(2);

  const textItems = [
    "AI Solutions’ Showcase",
    "Industry Insights",
    "25+ World-Class Visionary Speakers",
    "Focused Networking",
    "Keynote Addresses and Workshops",
    "200+ Tech Leaders",
  ];

  useEffect(() => {
    if (!stripRef.current) return;

    gsap.set(stripRef.current, {
      xPercent: -50,
    });

    gsap.to(stripRef.current, {
      xPercent: -100,
      ease: "none",
      scrollTrigger: {
        trigger: stripRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 0.5,
        markers: false,
      },
    });

    const updateDuplicates = () => {
      if (!contentRef.current) return;
      const contentWidth = contentRef.current.offsetWidth;
      const viewportWidth = window.innerWidth;
      const count = Math.max(2, Math.ceil(viewportWidth / contentWidth) + 1);
      setDuplicates(count);
    };

    updateDuplicates();
    window.addEventListener("resize", updateDuplicates);
    return () => window.removeEventListener("resize", updateDuplicates);
  }, []);

  return (
    <div className={`${color} overflow-hidden h-20 sm:h-24 md:h-32 flex items-center w-full`}>
      <div
        ref={stripRef}
        className="whitespace-nowrap text-white flex font-bold min-w-max"
      >
        {/* Original Content */}
        <div ref={contentRef} className="flex">
          {textItems.map((text, index) => (
            <span
              key={`original-${index}`}
              className="mx-2 sm:mx-4 md:mx-6 lg:mx-8 text-lg sm:text-xl md:text-2xl lg:text-4xl font-orbitron"
            >
              {text}
            </span>
          ))}
        </div>

        {/* Duplicates for seamless effect */}
        {Array.from({ length: duplicates }).map((_, duplicateIndex) => (
          <div key={`duplicate-${duplicateIndex}`} className="flex">
            {textItems.map((text, index) => (
              <span
                key={`${duplicateIndex}-${index}`}
                className="mx-2 sm:mx-4 md:mx-6 lg:mx-8 text-lg sm:text-xl md:text-2xl lg:text-4xl font-orbitron"
              >
                {text}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovingStrip;