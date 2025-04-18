import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <section className="relative min-h-screen pt-16 flex items-center overflow-hidden">
      {/* 1. Pure Hero Section Background Image */}
      <img
        src="https://framerusercontent.com/images/ljMQF4DEtvynG65tUOw8Pb1cgSY.png"
        alt="Hero Background"
        className="absolute top-0 left-0 w-full h-full object-cover object-left"
        style={{
          display: "block",
          borderRadius: "inherit",
          objectPosition: "left center",
          objectFit: "cover",
        }}
      />

      {/* Optional Overlay for contrast on the full hero background */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-0"></div>

      {/* 2. Content Container with its Background Image */}
      <div className="container p-0 mr-0    flex justify-end relative z-10 text-white">
        <div
          className="max-w-4xl w-full text-right p-10 bg-black/0 rounded-xl"
          style={{
            display: "block",
            width: "100%",
            height: "100vh",
            borderRadius: "inherit",
            backgroundImage: `url('https://framerusercontent.com/images/R9Cu3YeOQ2EMQDkLd7gaJUO4c0.svg')`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right center",
            backgroundSize: "cover",
          }}
        >

          <div className="bg-dark/80 p-3 mt-20 text-center items-center">
            <h1 className="font-orbitron text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight ">
              Shaping the Future <span className="text-gradient">with AI</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 font-light ">
              Join the brightest minds in Artificial Intelligence and Innovation.
            </p>
            <p className="text-lg md:text-xl mb-10 font-medium ">
              August 21–23, 2025 | San Francisco, CA
            </p>

          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center bg-dark/80 p-3" >
            <div className="animate-float" style={{ animationDelay: "0s" }}>
              <h3 className="text-2xl font-bold mb-2 font-orbitron">50+</h3>
              <p className="opacity-90">Expert Speakers</p>
            </div>
            <div className="animate-float" style={{ animationDelay: "0.5s" }}>
              <h3 className="text-2xl font-bold mb-2 font-orbitron">3 Days</h3>
              <p className="opacity-90">Of Innovation</p>
            </div>
            <div className="animate-float" style={{ animationDelay: "1s" }}>
              <h3 className="text-2xl font-bold mb-2 font-orbitron">1000+</h3>
              <p className="opacity-90">Attendees</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
