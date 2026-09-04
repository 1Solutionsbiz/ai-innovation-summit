import { ArrowRight, Play } from "lucide-react";

const RedesignHero = () => {
  return (
    <section className="redesign-hero relative">

      {/* Hero Video */}
      <video
        className="redesign-hero-video"
        autoPlay
        muted
        loop
        playsInline
        poster="/delhi26_redesign/logo.pngx"
      >
        <source
          src="/videos/Promo-21-August.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay */}
      <div className="redesign-hero-overlay" />

      {/* Hero Content */}
      <div className="redesign-hero-content">

        <span className="hero-eyebrow">
          AI INNOVATION SUMMIT | DELHI 2026
        </span>

        <h1>
          From Assistance
          <br />
          <span>to Autonomy.</span>
        </h1>

        <p>
          Where Agentic AI Meets Enterprise-Scale Execution.
        </p>

        <div className="hero-meta">
          <span>2 December 2026</span>
          <span>•</span>
          <span>The Leela Ambience Gurugram</span>
        </div>

        <div className="hero-actions">

          <button className="hero-primary-btn hero-register-btn">
            Register
          </button>

        </div>

      </div>


    </section>
  );
};

export default RedesignHero;