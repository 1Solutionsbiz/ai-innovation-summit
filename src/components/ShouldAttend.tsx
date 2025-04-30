import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ShouldAttend: React.FC = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.list-item', {
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reset',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-gray-900 text-white px-4 sm:px-6 md:px-16 py-10">
      <div className="text-center mb-12 px-2">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-orbitron text-gradient leading-tight">
          Why Should Attend?
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-10 mx-auto">
        {/* Left Column */}
        <div className="lg:flex-[2]">
          <h2 className="text-2xl sm:text-3xl font-orbitron font-bold text-gradient mb-6 px-2 sm:px-6">
            Audience Profile
          </h2>

          <div className="px-2 sm:px-6 lg:px-10 pb-10">
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-4 hover:scale-105 transition-transform duration-300 flex items-center gap-2">
                <img src="/decision-making-icon.png" alt="Decision Makers" className="w-8 sm:w-10 h-8 sm:h-10" />
                Key Decision Makers
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 text-sm">
                {[
                  "CIOs / COOs / CTOs / CFOs / IT & IS Directors",
                  "Chief of Digital Transformation (CDX)",
                  "Heads of DevOps",
                  "Heads of Enterprise Architecture",
                  "Heads of Innovation / Digital",
                  "Heads of Emerging Technology",
                  "Heads of Solution / Enterprise Architecture",
                  "Heads of Cloud Division",
                  "Heads of Analytics",
                  "Heads of Data",
                  "Heads of Architecture",
                  "Heads of IT Systems",
                  "Global Solutions Architect",
                  "Chief Internet of Things (IoT) Officer / CIoTO / Director",
                  "Other Cloud, DevOps & Data Center Decision Makers",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="list-item text-white hover:scale-105 transition-transform duration-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-12">
              <h3 className="text-base sm:text-lg font-semibold mb-4 hover:scale-105 transition-transform duration-300 flex items-center gap-2">
                <img src="/industry-icon.png" alt="Industries" className="w-8 sm:w-10 h-8 sm:h-10" />
                Key Industries
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-4 text-sm">
                {["BFSI", "Manufacturing", "Retail", "Healthcare", "IT Services", "SaaS"].map(
                  (item, index) => (
                    <li
                      key={index}
                      className="list-item text-white hover:scale-105 transition-transform duration-300"
                    >
                      {item}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>

        {/* Right Column Image */}
        <div className="lg:flex-1 flex justify-center px-4 sm:px-6 lg:px-0">
          <img
            src="/attend.png"
            alt="Audience Visual"
            className="rounded-lg shadow-lg w-full max-w-sm sm:max-w-md object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default ShouldAttend;
