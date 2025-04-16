import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface MovingStripProps {
  color?: string;
}

const MovingStrip: React.FC<MovingStripProps> = ({ color = "bg-neon-purple" }) => {
  const stripRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!stripRef.current) return;

    // Set strip to be center-aligned initially
    gsap.set(stripRef.current, {
      xPercent: -50,
    });

    // Animate strip to move left slowly on scroll
    gsap.to(stripRef.current, {
      xPercent: -10,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: stripRef.current,
        start: "top bottom",    // Start animation when strip is at center of viewport
        end: "bottom top",      // End when strip goes out of view
        scrub: 0.5,             // Slow scroll-based animation
        markers: false,
      },
    });

    // Optional: Duplicate handling on resize (can be expanded in future)
    const calculateDuplicates = () => {
      if (!contentRef.current) return;
      const contentWidth = contentRef.current.offsetWidth;
      const viewportWidth = window.innerWidth;
      return Math.ceil(viewportWidth / (contentWidth / 5)) + 2;
    };

    window.addEventListener("resize", calculateDuplicates);
    return () => window.removeEventListener("resize", calculateDuplicates);
  }, []);

  const textItems = [
    "50+ Expert Speakers",
    "Interactive Workshops",
    "Global Networking",
    "Startup Showcase",
    "Industry Insights",
  ];

  return (
    <div className={`${color} overflow-hidden h-32 flex items-center`}>
      <div
        ref={stripRef}
        className="whitespace-nowrap text-white text-5xl font-bold flex"
      >
        {/* Original Content */}
        <div ref={contentRef} className="flex">
          {textItems.map((text, index) => (
            <span key={`original-${index}`} className="mx-8">
              {text}
            </span>
          ))}
        </div>

        {/* Duplicates for seamless effect */}
        {Array.from({ length: 9 }).map((_, duplicateIndex) => (
          <div key={`duplicate-${duplicateIndex}`} className="flex">
            {textItems.map((text, index) => (
              <span key={`${duplicateIndex}-${index}`} className="mx-8">
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
