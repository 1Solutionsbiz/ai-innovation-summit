import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';

gsap.registerPlugin(Draggable);

const StatsSection = ({ stats = [], images = [] }) => {
  const imageRefs = useRef([]);
  const containerRef = useRef(null);

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

      gsap.to(img, {
        y: -15,
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
    <div className="bg-gray-900 text-white py-16 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
      {/* Left Section */}
      <div className="w-full md:w-1/2 z-10">
        <div className="grid grid-cols-2 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <h2 className="text-6xl font-orbitron font-bold text-gradient">
                {stat.value}
              </h2>
              <p className="text-gray-300 text-2xl">{stat.label}</p>
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
        {images.map((imageUrl, idx) => (
          <div
            key={idx}
            ref={(el) => (imageRefs.current[idx] = el)}
            className="absolute rounded-full overflow-hidden border-2 border-white shadow-md cursor-move"
            style={{
              width: `${(60 + idx * 5) * 2}px`,
              height: `${(60 + idx * 5) * 2}px`,
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
        ))}
      </div>
    </div>
  );
};

export default StatsSection;
