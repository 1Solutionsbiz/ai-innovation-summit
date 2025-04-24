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
            <p className="text-lg mb-6">
              After the overwhelming success of the Cloud + AI Innovation Summit 2024, we’re back with an even more impactful experience — the AI Innovation Summit 2025. Building on last year’s momentum, this summit is set to become India’s most influential platform for CIOs, CTOs, and AI leaders to explore the transformative power of artificial intelligence in business and technology.
            </p>
            <p className="text-lg mb-6">
              <strong className="text-neon-purple">Cloud + AI Innovation Summit – Previous 2024 Editions in Delhi, Mumbai and Bengaluru </strong><br></br> Over 750 CIOs, CTOs, IT Heads, and Technology & Business industry leaders joined us for this insightful event, besides drawing 2100+ registrations. The day-long event(s) witnessed active involvement from audience and industry leaders during the powerful panel discussions and other thought leadership sessions, besides the enthusiastic participation and engagement in Digital Sling Shot activity, opinion-forming poll questions, Sponsor booth interactions, and Scratch Card Lucky Draw contest, that contributed to the vibrant atmosphere and success of the summit.
            </p>
            <p className="text-lg mb-6">
              With a future-forward agenda, this year’s summit will dive deep into critical themes such as <strong className="text-neon-purple">AI-driven digital transformation, enterprise automation, cyber resilience, generative & Agentic AI</strong>, and <strong className="text-neon-purple">ethical AI governance</strong>. Designed for visionaries and decision-makers, the AI Innovation Summit 2025 is where cutting-edge ideas meet real-world enterprise applications — powering the AI-first future.
            </p>

          </div>

          {/* Right Image with Tilt Hover */}
          <div className="lg:ml-auto overflow-hidden">
            <div className="tilt-wrapper w-full h-full p-10">
              <img
                src="/about.png"
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
