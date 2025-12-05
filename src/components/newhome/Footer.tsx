import { Linkedin } from "lucide-react";
import aiLogo from "@/assets/ai-innovation-logo.png";
import aiinvationlogo from "/logo/Ai-Innovation_Logo_White.png";
import guildLogo from "@/assets/guild-logo.png";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-16">

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 mb-12">

          {/* LEFT SECTION */}
          <div className="space-y-6">
            <div>
              <img
                src={aiinvationlogo}
                alt="Ai Innovation Summit"
                className="h-9 sm:h-10 md:h-12 lg:h-24 object-contain"
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
            <h4 className="text-xl font-bold mb-5 sm:mb-6">Quick Links</h4>

            <ul className="space-y-3">
              <li>
                <a
                  href="#about"
                  className="text-slate-300 hover:text-white transition-colors text-sm sm:text-base"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#speakers"
                  className="text-slate-300 hover:text-white transition-colors text-sm sm:text-base"
                >
                  Speakers
                </a>
              </li>
              <li>
                <a
                  href="#partners"
                  className="text-slate-300 hover:text-white transition-colors text-sm sm:text-base"
                >
                  Partners
                </a>
              </li>
            </ul>
          </div>

          {/* RIGHT SECTION */}
          <div>
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
        <div className="border-t border-slate-700 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">

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
    </footer>
  );
};

export default Footer;
