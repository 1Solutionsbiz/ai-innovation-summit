import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <section className="relative min-h-screen pt-16 flex items-center overflow-hidden">
      {/* Background Image */}
      <img
        src="/hero-banner.jpeg"
        alt="Hero Background"
        className="absolute top-0 left-0 w-full h-full object-cover object-left"
        style={{
          display: "block",
          borderRadius: "inherit",
          objectPosition: "left center",
          objectFit: "cover",
        }}
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-0"></div>

      {/* Content */}
      <div className="container p-0 mr-0 flex justify-end relative z-10 text-white">
        <div
          className="max-w-4xl w-full text-right p-10 bg-black/0 rounded-xl"
          style={{
            display: "block",
            width: "100%",
            height: "100vh",
            borderRadius: "inherit",
            backgroundImage: `url('/hero-banner-image.svg')`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right center",
            backgroundSize: "cover",
          }}
        >
          {/* Heading & Subheading */}
          <div className="bg-dark/80 p-3 mt-20 text-center items-center">
            <h1 className="font-orbitron text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Shaping the Future <span className="text-gradient">with AI</span>
            </h1>
            <p className="text-xl md:text-2xl mb-4 opacity-90 font-light">
              From prompt to impact
            </p>

            {/* ✅ Body Text */}
            <p className="text-lg md:text-xl mb-4 font-light">
              Join the brightest minds in Artificial Intelligence and Innovation at the most impactful AI Summit mastering AI and securing the future.
            </p>

            <p className="text-lg md:text-xl mb-10 font-medium">
              July 9, 2025 |Taj Santacruz, Mumbai, India
            </p>
          </div>

          {/* Stats Section */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center bg-dark/80 p-3">
            <div className="animate-float" style={{ animationDelay: "0s" }}>
              <h3 className="text-2xl font-bold mb-2 font-orbitron">25+</h3>
              <p className="opacity-90">Visionary Speakers</p>
            </div>
            <div className="animate-float" style={{ animationDelay: "0.5s" }}>
              <h3 className="text-2xl font-bold mb-2 font-orbitron">8+</h3>
              <p className="opacity-90">Hours of Innovation</p>
            </div>
            <div className="animate-float" style={{ animationDelay: "1s" }}>
              <h3 className="text-2xl font-bold mb-2 font-orbitron">200+</h3>
              <p className="opacity-90">Tech Leaders</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
