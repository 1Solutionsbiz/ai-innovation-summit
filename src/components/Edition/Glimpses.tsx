import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger once
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface GlimpseImageProps {
  src: string;
  alt: string;
}

const Glimpses: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const images: GlimpseImageProps[] = [
    { src: "/edition/glim/1-min.png", alt: "Edition 1" },
    { src: "/edition/glim/2-min.png", alt: "Edition 2" },
    { src: "/edition/glim/3-min.png", alt: "Edition 3" },
    { src: "/edition/glim/4-min.png", alt: "Edition 4" },
    { src: "/edition/glim/5-min.png", alt: "Edition 5" },
    { src: "/edition/glim/6-min.png", alt: "Edition 6" },
    { src: "/edition/glim/7-min.png", alt: "Edition 7" },
    { src: "/edition/glim/8-min.png", alt: "Edition 8" },
    { src: "/edition/glim/9-min.png", alt: "Edition 9" },
    { src: "/edition/glim/10-min.png", alt: "Edition 10" },
  ];

  useEffect(() => {
    const el = containerRef.current;
    const contentEl = contentRef.current;
    if (!el || !contentEl) return;

    const totalWidth = el.scrollWidth - window.innerWidth;

    const tween = gsap.to(el, {
      x: -totalWidth,
      ease: "none",
      scrollTrigger: {
        trigger: contentEl,
        start: "top 40%",
        end: () => `+=${totalWidth}`,
        scrub: 1,
        pin: true,
        pinSpacing: true,
        invalidateOnRefresh: true,
      },
    });

    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="container mx-auto p-4 overflow-hidden">
      <div ref={contentRef}>
        <h2 className="text-3xl font-bold text-center mb-8 sticky top-0 z-10 bg-white py-4">
          Glimpses from our Previous Editions
        </h2>
        <div
          ref={containerRef}
          className="flex flex-nowrap items-center space-x-6 overflow-x-hidden [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden pb-8"
        >
          {images.map((image, idx) => (
            <div key={idx} className="w-96 h-96 flex-shrink-0">
              <img
                src={image.src}
                alt={image.alt}
                className="object-cover w-full h-full rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Glimpses;