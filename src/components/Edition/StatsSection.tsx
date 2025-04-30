import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';

gsap.registerPlugin(Draggable);

const StatsSection = ({ stats = [], images = [] }) => {
  const imageRefs = useRef([]);
  const containerRef = useRef(null);

  // Adjusted positions to be more mobile friendly
  const positions = [
    { top: '15%', left: '25%' },
    { top: '30%', left: '70%' },
    { top: '55%', left: '20%' },
    { top: '65%', left: '75%' },
    { top: '40%', left: '50%' },
  ];

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;

    imageRefs.current.forEach((img, index) => {
      if (!img) return;

      gsap.to(img, {
        y: isMobile ? -10 : -15,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        duration: 1.5 + index * 0.2,
        delay: index * 0.1,
      });

      Draggable.create(img, {
        type: 'x,y',
        bounds: containerRef.current,
        inertia: true,
        onPress() {
          gsap.killTweensOf(img, "x,y");
        }
      });
    });
  }, [images]);

  return (
    <div className="bg-gray-900 text-white py-16 px-4 sm:px-6 md:px-12 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
      {/* Left Section */}
      <div className="w-full md:w-1/2 z-10">
        <div className="grid grid-cols-2 gap-6 sm:gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-orbitron font-bold text-gradient">
                {stat.value}
              </h2>
              <p className="text-gray-300 text-lg sm:text-xl md:text-2xl">{stat.label}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10 sm:mt-12">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white font-orbitron">
            Let's join together
          </h3>
        </div>
      </div>

      {/* Right Section */}
      <div
        ref={containerRef}
        className="w-full md:w-1/2 relative h-[300px] sm:h-[350px] mt-12 md:mt-0"
      >
        {images.map((imageUrl, idx) => {
          const size = 80 + idx * 10; // Base size
          const responsiveSize = `min(${size}px, 25vw)`; // Limit size for small screens

          return (
            <div
              key={idx}
              ref={(el) => (imageRefs.current[idx] = el)}
              className="absolute rounded-full overflow-hidden border-2 border-white shadow-md cursor-move transition-all"
              style={{
                width: responsiveSize,
                height: responsiveSize,
                top: positions[idx]?.top || '50%',
                left: positions[idx]?.left || '50%',
                transform: 'translate(-50%, 0%)',
              }}
            >
              <img
                src={imageUrl}
                alt={`Stat ${idx + 1}`}
                className="w-full h-full object-cover pointer-events-none"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StatsSection;
