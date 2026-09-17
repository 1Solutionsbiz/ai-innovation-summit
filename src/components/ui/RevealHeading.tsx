import { useLayoutEffect, useRef, ElementType } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface RevealHeadingProps {
  children: React.ReactNode;
  className?: string;
  as?: ElementType;
  delay?: number;
  distance?: number;
}

/**
 * Wraps a heading/section title so it rises up in slow motion as it
 * scrolls into view (matches the Adobe MAX "Featured speakers" reveal:
 * ~1.2s, eased, triggered once when the element enters the viewport).
 */
const RevealHeading = ({
  children,
  className = "",
  as: Tag = "h2",
  delay = 0,
  distance = 60,
}: RevealHeadingProps) => {
  const ref = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    gsap.set(el, { opacity: 0, y: distance });

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: "top 85%",
      once: true,
      onEnter: () =>
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 1.2,
          delay,
          ease: "power3.out",
        }),
    });

    return () => trigger.kill();
  }, [delay, distance]);

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
};

export default RevealHeading;
