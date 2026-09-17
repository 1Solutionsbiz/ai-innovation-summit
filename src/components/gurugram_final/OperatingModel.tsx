import { useEffect, useRef, useState } from "react";
import { getScrollDirection } from "@/hooks/useScrollDirection";

type OperatingModelProps = {
  showCta?: boolean;
};

const OperatingModel = ({ showCta = true }: OperatingModelProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [direction, setDirection] = useState<"up" | "down">("down");

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setDirection(getScrollDirection());
          setIsVisible(false);
          requestAnimationFrame(() => {
            requestAnimationFrame(() => setIsVisible(true));
          });
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const total = showCta ? 3 : 2;
  const delayFor = (index: number) => {
    const order = direction === "up" ? total - 1 - index : index;
    return isVisible ? `${order * 160}ms` : undefined;
  };

  return (
    <section ref={sectionRef} className="bg-white py-16 px-6 sm:py-20">
      <div className="mx-auto max-w-5xl text-left">
        {/* <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.25em] text-[#EF3340]">
          Concept Note
        </p> */}

        <h2
          className={`partners-reveal-up text-center font-black text-blue-950 text-2xl sm:text-3xl md:text-4xl leading-snug ${isVisible ? "is-visible" : ""}`}
          style={{ animationDelay: delayFor(0) }}
        >
          The AI Innovation Summit returns for its 8th Edition in Delhi NCR
        </h2>

        <div
          className={`partners-reveal-up mt-4 space-y-2 text-base leading-relaxed text-blue-950/80 md:text-[16px] ${isVisible ? "is-visible" : ""}`}
          style={{ animationDelay: delayFor(1) }}
        >
          <p>
            The <strong className="font-bold text-blue-950">AI Innovation Summit</strong> returns for its <strong className="font-bold text-blue-950">8th Edition in Delhi NCR</strong> at a defining moment for enterprise AI, bringing together <strong className="font-bold text-blue-950">CIOs, CTOs, Chief Data Officers, CISOs, Chief AI Officers, IT Heads, and senior business and technology leaders</strong> for high-impact conversations on AI-driven transformation.
          </p>

          <p>
            Across seven editions, the Summit has created a platform for <strong className="font-bold text-blue-950">interactive panels, expert-led sessions, live audience engagement, sponsor showcases, and curated networking</strong>, enabling meaningful collaboration, practical insights, and business connections.
          </p>

          <p>
            The <strong className="font-bold text-blue-950">8th Edition</strong> moves the conversation from AI adoption to <strong className="font-bold text-blue-950">enterprise-scale execution</strong>, exploring how organisations can take <strong className="font-bold text-blue-950">Agentic AI from the demo to production</strong> while addressing the infrastructure, governance, security, risk, responsible AI, and ROI required to scale.
          </p>

          <p>
            With leaders from <strong className="font-bold text-blue-950">manufacturing, automotive, BFSI, FMCG, retail, electronics &amp; electricals, fintech, telecom, and other major sectors</strong>, the Summit focuses on the <strong className="font-bold text-blue-950">five burning questions every CXO is grappling with today</strong> and what it takes to build an AI-first enterprise.
          </p>

          <p>
            The <strong className="font-bold text-blue-950">AI Innovation Summit 8th Edition</strong> brings together the leaders shaping India’s AI-first future. <strong className="font-bold text-blue-950">Join the conversation defining what enterprise AI looks like at scale.</strong>
          </p>

          <p className="text-center text-lg font-black text-blue-950 md:text-xl">
            #YesAICan
          </p>
        </div>

        {showCta && (
          <div
            className={`partners-reveal-up mt-10 text-center ${isVisible ? "is-visible" : ""}`}
            style={{ animationDelay: delayFor(2) }}
          >
            <a href="#know-more" className="rounded-full px-10 py-4 btn-bg-w">
              Know more...
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default OperatingModel;
