import { useEffect, useRef, useState, ElementType, ReactNode, CSSProperties } from "react";
import { getScrollDirection } from "@/hooks/useScrollDirection";

interface RevealProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  /** Position of this element within a staggered group (0-based). */
  index?: number;
  /** Total items in the group — used to reverse the stagger order when scrolling up. */
  total?: number;
  /** Delay between staggered items, in ms. */
  step?: number;
  threshold?: number;
  style?: CSSProperties;
}

/**
 * Wraps any heading, paragraph, or button so it rises up in slow motion
 * as it scrolls into view (Adobe MAX-style), and replays every time —
 * scrolling down or back up. When used with `index`/`total` on a group of
 * siblings, the stagger order reverses on scroll-up so the cascade always
 * follows the direction of travel.
 */
const Reveal = ({
  children,
  as: Tag = "div",
  className = "",
  index = 0,
  total = 1,
  step = 140,
  threshold = 0.2,
  style,
}: RevealProps) => {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [delay, setDelay] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const order = getScrollDirection() === "up" ? total - 1 - index : index;
          setDelay(order * step);
          setIsVisible(false);
          requestAnimationFrame(() => {
            requestAnimationFrame(() => setIsVisible(true));
          });
        } else {
          setIsVisible(false);
        }
      },
      { threshold },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [index, total, step, threshold]);

  return (
    <Tag
      ref={ref}
      className={`reveal-fade-up ${isVisible ? "is-visible" : ""} ${className}`}
      style={{ ...style, animationDelay: isVisible ? `${delay}ms` : undefined }}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
