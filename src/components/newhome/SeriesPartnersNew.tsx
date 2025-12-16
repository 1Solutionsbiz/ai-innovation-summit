import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import seriesPartnersBg from "@/assets/series-partners-bg.jpg";

// Mumbai partner logos list
const logos = [
  "/sponsers/atlassian-1.png",
  "/sponsers/salesforce.png",
  "/sponsers/microsoft-1.png",
  "/sponsers/xboom-1.png"
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
      }, 3500);
    },
  });

  return (
    <section className="py-16 md:py-24 bg-white relative d26spsec-pt overflow-hidden">
        <div className="absolute inset-0">
            <img
            src={seriesPartnersBg}
            alt=""
            className="w-full h-full object-cover opacity-50"
            />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
        
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-900 bg-clip-text text-transparent">
              Series Partners
            </h2>
            <p className="text-slate-600 text-xl  mx-auto leading-relaxed mb-12 text-center">
            {/* <p className="text-slate-600 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed mb-12 text-center"> */}
              Partnering with industry leaders to drive innovation
            </p>

            <div ref={sliderRef} className="keen-slider px-4">
                {logos.map((logo, index) => (
                <div
                    key={index}
                    className="keen-slider__slide flex justify-center items-center"
                >
                    <img
                      src={logo}
                      alt={`Delhi Partner ${index + 1}`}
                      className="
                        h-10 sm:h-16 md:h-18 
                        w-auto object-contain 
                        transition-all duration-300 
                        grayscale opacity-70 
                        hover:grayscale-0 hover:opacity-100 hover:scale-105
                      "
                    />

                </div>
                ))}
            </div>
        </div>
        
    </section>
  );
};

export default PastPartners;
