import { Linkedin } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import aiLogo from "@/assets/ai-innovation-logo.png";
import aiinvationlogo from "/logo/Ai-Innovation_Logo_White.png";
import guildLogo from "@/assets/guild-logo.png";

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFooterVisible(false);
          requestAnimationFrame(() => {
            requestAnimationFrame(() => setFooterVisible(true));
          });
        } else {
          setFooterVisible(false);
        }
      },
      { threshold: 0.5 },
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return (
    <footer ref={footerRef} className="footer-section bg-slate-900 text-white">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-16">

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 mb-12">

          {/* LEFT SECTION */}
          <div className={`space-y-6 footer-reveal footer-delay-1 ${footerVisible ? "is-visible" : ""}`}>
            <div>
              <img
                src={aiinvationlogo}
                alt="Ai Innovation Summit"
                className="h-9 sm:h-10 md:h-12 lg:h-24 object-contain ftrlogo"
              />
            </div>

            <p className="text-slate-300 text-sm leading-relaxed">
              From prompt to impact — the premier summit for artificial intelligence
              leaders and enthusiasts, making it the most impactful AI Summit.
            </p>

            <div className="pt-4">
              <img
                src={guildLogo}
                alt="The Guild"
                className="h-8 sm:h-10 md:h-12 w-auto object-contain"
              />
            </div>
          </div>

          {/* CENTER SECTION */}
          <div className="text-left sm:text-left">

          </div>

          {/* RIGHT SECTION */}
          <div className={`footer-reveal footer-delay-2 ${footerVisible ? "is-visible" : ""}`}>
            <h4 className="text-xl font-bold mb-5 sm:mb-6">Connect With Us</h4>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Linkedin className="text-cyan-400" size={20} />
              </div>

              <a
                href="mailto:guildconferences@guildlive.com"
                className="text-slate-300 hover:text-cyan-400 transition-colors text-sm sm:text-base block"
              >
                guildconferences@guildlive.com
              </a>

              <p className="text-slate-300 text-sm leading-relaxed">
                Smartworks Corporate Park Tower A, Second Floor Sector 125,
                Noida, Uttar Pradesh 201303
              </p>

              {/* Speakership */}
              <div className="pt-2 space-y-3">
                <div>
                  <p className="font-semibold text-sm sm:text-base mb-1">
                    For Speakership Opportunity,
                  </p>

                  <p className="text-sm text-slate-300">
                    Email at{" "}
                    <a
                      href="mailto:nishant.batra@guildlive.com"
                      className="text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      nishant.batra@guildlive.com
                    </a>{" "}
                    or{" "}
                    <a
                      href="mailto:aditi.malik@guildlive.com"
                      className="text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      aditi.malik@guildlive.com
                    </a>
                  </p>
                </div>

                {/* Partnerships */}
                <div>
                  <p className="font-semibold text-sm sm:text-base mb-1">
                    For Partnerships,
                  </p>

                  <p className="text-sm text-slate-300">
                    Email at{" "}
                    <a
                      href="mailto:partnership@guildlive.com"
                      className="text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      partnership@guildlive.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className={`border-t border-slate-700 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 footer-reveal footer-delay-3 ${footerVisible ? "is-visible" : ""}`}>

          <p className="text-slate-400 text-xs sm:text-sm text-center md:text-left">
            © Copyright 2025, The Guild
          </p>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
            <a
              href="#privacy"
              className="text-slate-400 hover:text-white transition-colors"
            >
              Privacy Policy
            </a>

            <a
              href="#terms"
              className="text-slate-400 hover:text-white transition-colors"
            >
              Terms & Conditions
            </a>

            <a
              href="#conduct"
              className="text-slate-400 hover:text-white transition-colors"
            >
              Code of Conduct
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes footerFadeInUp {
          from {
            opacity: 0;
            transform: translate3d(0, 32px, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }

        .footer-reveal {
          opacity: 0;
          will-change: opacity, transform;
        }

        .footer-reveal.is-visible {
          animation: footerFadeInUp 1.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .footer-delay-2 { animation-delay: 220ms; }
        .footer-delay-3 { animation-delay: 440ms; }

        @media (prefers-reduced-motion: reduce) {
          .footer-reveal.is-visible {
            animation-duration: 1ms;
            animation-delay: 0ms;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
