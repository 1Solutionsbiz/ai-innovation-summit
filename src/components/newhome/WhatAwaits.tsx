import { useState } from "react";

const WhatAwaits = () => {
  const whatswaits = "/delhi26/whatswaits.jpg"; // background image path

  const features = [
    {
      title: "AI Playground",
      description: "Explore hands-on experiences with AI prototypes and tools.",
      image: "/delhi26/AI-Playground.png",
    },
    {
      title: "Collaborative Corners",
      description:
        "Connect, collaborate, and exchange ideas with industry peers.",
      image: "/delhi26/Connect-Collaborate.png",
    },
    {
      title: "Tech in Action",
      description: "Watch real-time tech demos transforming industries.",
      image: "/delhi26/Tech-in-Action.png",
    },
    {
      title: "Actionable Insights",
      description:
        "Gain expert perspectives and data-driven strategies to apply AI effectively.",
      image: "/delhi26/Actionable-Insights.png",
    },
    {
      title: "Visionary Voices",
      description:
        "Hear visionary leaders redefining AI in business and society.",
      image: "/delhi26/Visionary-Voices.png",
    },
  ];

  return (
    <section
      className="relative py-20 md:py-28 bg-gradient-to-br from-[#BF1C88] via-[#5343FF] to-[#1A1C2E] overflow-hidden"
      style={{
        backgroundImage: `url(${whatswaits})`,
        backgroundSize: "cover",
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            What Awaits
          </h2>
          <p className="text-white/90 text-xl md:text-2xl max-w-3xl mx-auto">
            Experience innovation, insights, and impact at India’s premier AI summit
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {/* First 2 Cards */}
          <div className="col-span-2 grid grid-cols-2 gap-4">
            {features.slice(0, 2).map((feature, index) => (
              <FeatureCard key={index} feature={feature} large={false} />
            ))}
          </div>

          {/* Large Card */}
          <div className="row-span-2">
            <FeatureCard feature={features[2]} large={true} />
          </div>

          {/* Bottom 2 Cards */}
          {features.slice(3).map((feature, index) => (
            <FeatureCard key={index + 3} feature={feature} large={false} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ feature, large }) => {
  return (
    <div
      className={`relative cursor-pointer overflow-hidden rounded-xl group ${
        large ? "h-[615px]" : "h-[250px] md:h-[300px]"
      } transition-all duration-500`}
    >
      {/* Background Image */}
      <img
        src={feature.image}
        alt={feature.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-transparent"></div>

      {/* Text Content (TOP aligned now) */}
      <div className="absolute top-4 left-4 right-4 text-white z-10">
        <h3 className="text-xl font-bold mb-2 fs22">{feature.title}</h3>
        <p
          className="text-white/80 text-sm opacity-0 -translate-y-2 
                     transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 fs15"
        >
          {feature.description}
        </p>
      </div>
    </div>
  );
};

export default WhatAwaits;
