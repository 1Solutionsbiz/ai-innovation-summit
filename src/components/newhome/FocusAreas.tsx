import { useState } from "react";

const WhatAwaits = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const features = [
    {
      title: "C-Suite Al Imperatives",
      description:
        "Strategic AI priorities for business transformation.",
      image: "/elements/C-Suite-Al-Imperatives.png",
    },
    {
      title: "India's Al Leadership & Global Influence",
      description:
        "India’s pivotal role in shaping the global AI era.",
      image: "/elements/India's-Al-Leadership-&-Global-Influence.png",
    },
    {
      title: "Industry Transformation",
      description:
        "AI-driven disruption across key sectors.",
      image: "/elements/Industry-Transformation.png",
    },
    {
      title: "Next-Gen Automation",
      description:
        "Autonomous enterprises through intelligent automation.",
      image: "/elements/Next-Gen-Automation.png",
    },
    {
      title: "Resilient & Secure Al",
      description:
        "Security, trust & compliance in AI adoption.",
      image: "/elements/Resilient-&-Secure-Al.png",
    },
    {
      title: "Scaling Enterprise Intelligence",
      description:
        "AI capability expansion for sustainable growth.",
      image: "/elements/Scaling-Enterprise-Intelligence.png",
    },
  ];

  return (
    <section className="py-[80px]">


<div className="absolute inset-0  from-white via-gray-50 to-slate-100" />

<div className="container mx-auto px-4 relative z-10">
  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-900 bg-clip-text text-transparent opacity-0 animate-fade-in-up">
    Focus Areas
  </h2>


      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white shadow-xl transition group hover:shadow-2xl"
            >
              <div className="flex flex-col items-center text-center  bg-gradient-to-r from-pink-100 via-blue-100 to-pink-100 p-6 rounded-2xl h-full">
                <div className="overflow-hidden rounded-xl fiwidthimgctr p-4">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="fiwidth object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  <h3 className="text-xl font-bold mt-4 text-center">{feature.title}</h3>
                  <p className="text-gray-600 mt-2">{feature.description}</p>
                </div>
              </div>
          ))}
        </div>

      </div>
    
  </div>

    </section>
  );
};

export default WhatAwaits;
