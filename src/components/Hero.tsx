
import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <section className="gradient-bg particles-bg min-h-screen pt-16 flex items-center relative">
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="font-orbitron text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Shaping the Future <span className="text-gradient">with AI</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 font-light">
            Join the brightest minds in Artificial Intelligence and Innovation.
          </p>
          <p className="text-lg md:text-xl mb-10 font-medium">
            August 21–23, 2025 | San Francisco, CA
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Button size="lg" className="btn-gradient w-full md:w-auto text-white font-medium text-lg px-8 py-6">
              Register Now
            </Button>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
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
