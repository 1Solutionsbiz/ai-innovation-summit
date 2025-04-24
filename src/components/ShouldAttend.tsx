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
    <section ref={sectionRef} className="bg-gray-900 text-white px-6 md:px-16 py-8">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold font-orbitron text-gradient">
          Why Should Attend?
        </h2>
      </div>

      <div className="flex flex-col md:flex-row gap-8 mx-auto">
        <div className="flex-[2]">
          <h2 className="text-3xl font-orbitron pl-10 font-bold text-gradient mb-6">
            Audience Profile
          </h2>

          <div className="pb-20 px-10">
            <div>
              <h3 className="text-lg font-semibold mb-4 hover:scale-105 transition-transform duration-300 flex items-center gap-2">
                <img src="/decision-making-icon.png" alt="Decision Makers" className="w-10 h-10" />
                Key Decision Makers
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-sm">
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
              <h3 className="text-lg font-semibold mb-4 hover:scale-105 transition-transform duration-300 flex items-center gap-2">
                <img src="/industry-icon.png" alt="Industries" className="w-10 h-10" />
                Key Industries
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-4 text-sm">
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

        <div className="flex-1 flex justify-center pb-20">
          <img
            src="/attend.png"
            alt="Audience Visual"
            className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ShouldAttend;
