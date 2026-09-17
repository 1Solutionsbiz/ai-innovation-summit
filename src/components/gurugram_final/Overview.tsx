import { useEffect, useRef, useState } from "react";

type OperatingModelProps = {
  showCta?: boolean;
};

const OperatingModel = ({ showCta = true }: OperatingModelProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(section);
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-12 px-4 sm:py-20 sm:px-6" id="overview">
      <div className="w-full max-w-[720px] lg:max-w-[80%] mx-auto text-center">
        <h2 className={`partners-reveal-up text-[#022158]
                  font-black
                  text-[34px]
                  sm:text-[48px]
                  md:text-[64px]
                  xl:text-[42px]
                  leading-[0.94] ${isVisible ? "is-visible" : ""}`}>
          AI is no longer an experimentation agenda. It is becoming an operating model.
        </h2>

        <p className="mt-6 sm:mt-8 text-blue-950/80 text-[15px] sm:text-base md:text-lg leading-relaxed">
          AI Innovation Summit brings together the technology leaders responsible for making that transition happen inside large enterprises: CIOs, CTOs, CDOs, CISOs, AI leaders and transformation heads.
        </p>
        <p className="mb-0 sm:mb-8 text-blue-950/80 text-[15px] sm:text-base md:text-lg leading-relaxed">
          Across one day, the conversation moves beyond AI demos and pilots to the harder questions of deployment, governance, security, infrastructure, organisational readiness and enterprise-scale execution.
        </p>


      </div>
    </section>
  );
};

export default OperatingModel;
