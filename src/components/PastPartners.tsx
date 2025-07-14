import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

// Mumbai partner logos list
const logos = [
  "/sponsers/microsoft.png",
  "/sponsers/snowflake.png",
  "/sponsers/xboom.png",
];

const PastPartners: React.FC = () => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    drag: true,
    slides: {
      perView: 1,
      spacing: 16,
    },
    created(slider) {
      setInterval(() => {
        if (slider) slider.next();
      }, 3000);
    },
  });

  return (
    <section className="py-16 bg-black">
      <h2 className="text-5xl sm:text-6xl md:text-7xl font-orbitron text-gradient font-bold text-center mb-16">
        Past Partners
      </h2>

      <div ref={sliderRef} className="keen-slider px-4">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="keen-slider__slide flex justify-center items-center"
          >
            <img
              src={logo}
              alt={`Mumbai Partner ${index + 1}`}
              className="h-16 sm:h-20 md:h-24 w-auto object-contain transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PastPartners;
