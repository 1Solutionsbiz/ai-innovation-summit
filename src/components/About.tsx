import { Card, CardContent } from "./ui/card";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-dark">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-orbitron">
              About <span className="text-gradient">AI Innovation Summit</span>
            </h2>
            <p className="text-lg text-white mb-8">
              The AI Innovation Summit brings together global AI leaders, researchers, and innovators for three days of learning, networking, and inspiration. Discover how AI is transforming industries and shaping tomorrow.
            </p>
            <p className="text-lg text-white mb-8">
              Join us for an immersive experience featuring keynotes from AI pioneers, hands-on workshops, networking events, and a showcase of cutting-edge AI startups and technologies.
            </p>
          </div>

          {/* Right Image - No Border, Blended, Enlarged */}
          <div className="lg:ml-auto overflow-hidden">
            <img
              src="https://framerusercontent.com/images/DpwqUDZsnXXSt5sKSdZdfBPLPg.png?scale-down-to=1024"
              alt="AI Conference"
              className="w-full h-full object-cover mix-blend-screen scale-100"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
