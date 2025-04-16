import { useEffect } from "react";
import { Card, CardContent } from "./ui/card";

export const About = () => {
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      .tilt-wrapper {
        perspective: 1000px;
      }
      .tilt-img {
        transform-style: preserve-3d;
        will-change: transform;
        transition: transform 0.4s ease;
      }
      .tilt-wrapper:hover .tilt-img {
        transform: rotateY(10deg) rotateX(5deg) scale(1.05);
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-dark text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-orbitron">
              About <span className="text-gradient">AI Innovation Summit</span>
            </h2>
            <p className="text-lg mb-8">
              The AI Innovation Summit brings together global AI leaders, researchers, and innovators for three days of learning, networking, and inspiration. Discover how AI is transforming industries and shaping tomorrow.
            </p>
            <p className="text-lg mb-8">
              Join us for an immersive experience featuring keynotes from AI pioneers, hands-on workshops, networking events, and a showcase of cutting-edge AI startups and technologies.
            </p>
          </div>

          {/* Right Image with Tilt Hover */}
          <div className="lg:ml-auto overflow-hidden">
            <div className="tilt-wrapper w-full h-full p-10">
              <img
                src="https://framerusercontent.com/images/DpwqUDZsnXXSt5sKSdZdfBPLPg.png?scale-down-to=1024"
                alt="AI Conference"
                className="tilt-img w-full h-full object-cover mix-blend-screen"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
