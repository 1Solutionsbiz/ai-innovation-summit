import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';

gsap.registerPlugin(Draggable);

const StatsSection = () => {
  const imageRefs = useRef([]);
  const containerRef = useRef(null);

  const stats = [
    { label: 'Attendees', value: '200+' },
    { label: 'Speakers', value: '30+' },
    { label: 'Sessions', value: '5+' },
    { label: 'Networking Hrs', value: '8+ hrs' },
  ];

  const images = [1, 2, 3, 4, 5];

  // Spread out more (non-overlapping, unique zones)
  const positions = [
    { top: '15%', left: '25%' },
    { top: '25%', left: '70%' },
    { top: '55%', left: '20%' },
    { top: '65%', left: '75%' },
    { top: '35%', left: '50%' },
  ];

  useEffect(() => {
    imageRefs.current.forEach((img, index) => {
      if (!img) return;

      // Bounce animation
      gsap.to(img, {
        y: -15,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        duration: 1.5 + index * 0.2,
        delay: index * 0.1,
      });

      // Make draggable inside container
      Draggable.create(img, {
        type: 'x,y',
        bounds: containerRef.current,
        inertia: true,
        onPress() {
          gsap.killTweensOf(img, "x,y"); // avoid drag conflict, keep bounce
        }
      });
    });
  }, []);

  return (
    <div className="bg-gray-900 text-white py-16 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
      {/* Left Section */}
      <div className="w-full md:w-1/2 z-10">
        <div className="grid grid-cols-2 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <h2 className="text-6xl font-orbitron font-bold text-gradient">
                {stat.value}
              </h2>
              <p className=" text-gray-300 text-2xl">{stat.label}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <h3 className="text-3xl font-semibold text-white font-orbitron">
            Let's join together
          </h3>
        </div>
      </div>

      {/* Right Section */}
      <div
        ref={containerRef}
        className="w-full md:w-1/2 relative h-[350px] mt-16 md:mt-0"
      >
        {images.map((num, idx) => (
          <div
            key={idx}
            ref={(el) => (imageRefs.current[idx] = el)}
            className="absolute rounded-full overflow-hidden border-2 border-white shadow-md cursor-move"
            style={{
              width: `${(60 + idx * 5) * 2}px`, // smaller gap increases spacing
              height: `${(60 + idx * 5) * 2}px`,
              top: positions[idx].top,
              left: positions[idx].left,
              transform: 'translate(-50%, 0%)',
            }}
          >
            <img
              src={`/edition/stats/${num}.png`}
              alt={`Stat ${num}`}
              className="w-full h-full object-cover pointer-events-none"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;
