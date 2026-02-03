import { useState } from "react";

const WhatAwaits = () => {
  const whatswaits = "/delhi26/whatswaits.jpg"; // background image path

  const features = [
    {
      title: "Where AI Meets Reality",
      description:"Step into interactive demos bringing cutting-edge experiences to life.",
      image: "/delhi26/Power-Networking.jpg",
    },
    {
      title: "Connections That Shape Tomorrow",
      description:"Connect with top industry leaders and forge meaningful connections.",
      image: "/delhi26/Immersive-Tech.jpg",
    },
    {
      title: "Ideas That Shift Perspectives",
      description:"Gain sharp perspectives from visionary voices shaping the future of tech.",
      image: "/delhi26/Insightful-Talks.jpg",
    },
    {
      title: "Real Voices. Real Impact.",
      description:"Hear experts decode emerging trends, challenges, and real-world AI applications.",
      image: "/delhi26/Expert-Panels-1.jpg",
    },
    {
      title: "Machines That Learn. Systems That Think.",
      description:"Explore innovations pushing the boundaries of intelligent automation.",
      image: "/delhi26/AI-Robotics.jpg",
    },
  ];

  return (
    <section
      className="relative py-16 md:py-28 bg-gradient-to-br from-[#BF1C88] via-[#5343FF] to-[#1A1C2E] overflow-hidden"
      style={{
        backgroundImage: `url(${whatswaits})`,
        backgroundSize: "cover",
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-3">
            What Awaits You at the<br /> AI Innovation Summit
          </h2>

          <p className="text-white/90 text-lg md:text-2xl max-w-3xl mx-auto">
            Experience innovation, insights, and impact at India’s premier AI summit
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto">

          {/* First two cards (mobile: stack, desktop: 2-column) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:col-span-2 gap-4">
            {features.slice(0, 2).map((feature, index) => (
              <FeatureCard key={index} feature={feature} large={false} />
            ))}
          </div>

          {/* Large card */}
          <div className="md:row-span-2">
            <FeatureCard feature={features[2]} large={true} />
          </div>

          {/* Bottom two cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:col-span-2 gap-4">
            {features.slice(3).map((feature, index) => (
              <FeatureCard key={index} feature={feature} large={false} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ feature, large }) => {
  return (
    <div
      className={`relative whatsawaitsbg cursor-pointer overflow-hidden rounded-xl group 
        ${
          large
            ? "h-[300px] sm:h-[400px] md:h-[615px]"
            : "h-auto min-h-[220px] sm:min-h-[260px] md:h-[300px]"
        }
        transition-all duration-500`}
    >
      {/* Background Image */}
      <img
        src={feature.image}
        alt={feature.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Overlay */}
      <div className="absolute bgclr inset-0 bg-gradient-to-b from-black/70 via-black/30 to-transparent"></div>

      {/* Text Content */}
      <div className="absolute top-4 left-4 right-4 text-white z-10">
        <h3 className="text-lg sm:text-xl font-bold mb-1 fs22 leading-tight">
          {feature.title}
        </h3>

        <p
          className="text-white/80 text-xs sm:text-sm opacity-100 sm:opacity-0 sm:-translate-y-2 
                     transition-all duration-500 sm:group-hover:opacity-100 sm:group-hover:translate-y-0 fs15"
        >
          {feature.description}
        </p>
      </div>
    </div>
  );
};

export default WhatAwaits;
