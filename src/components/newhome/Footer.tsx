import { Linkedin } from "lucide-react";
import aiLogo from "@/assets/ai-innovation-logo.png";
import guildLogo from "@/assets/guild-logo.png";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Left Section */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                <span className="italic">AI</span> Innovation
              </h3>
              <h3 className="text-2xl md:text-3xl font-bold">SUMMIT</h3>
            </div>
            
            <p className="text-slate-300 text-sm leading-relaxed">
              From prompt to impact — the premier summit for artificial intelligence leaders and
              enthusiasts, making it the most impactful AI Summit.
            </p>
            
            <div className="flex items-center gap-4 pt-4">
              {/* <img
                src={guildLogo}
                alt="The Guild"
                className="h-8 object-contain"
              />
              <div className="w-px h-8 bg-slate-600"></div>
                <img
                  src={aiLogo}
                  alt="Guild Live"
                  className="h-8 object-contain"
                /> */}
                
                <img 
                  src={guildLogo} 
                  alt="The Guild" 
                  className="h-auto w-auto mt-5 object-contain"
                />

              </div>
          </div>

          {/* Center Section - Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#about"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#speakers"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Speakers
                </a>
              </li>
              <li>
                <a
                  href="#partners"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Partners
                </a>
              </li>
            </ul>
          </div>

          {/* Right Section - Connect With Us */}
          <div>
            <h4 className="text-xl font-bold mb-6">Connect With Us</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Linkedin className="text-cyan-400" size={20} />
              </div>
              
              <a
                href="mailto:guildconferences@guildlive.com"
                className="text-slate-300 hover:text-cyan-400 transition-colors block"
              >
                guildconferences@guildlive.com
              </a>
              
              <p className="text-slate-300 text-sm leading-relaxed">
                Smartworks Corporate Park Tower A, Second Floor Sector 125, Noida
                Uttar Pradesh 201303
              </p>
              
              <div className="pt-4 space-y-3">
                <div>
                  <p className="font-semibold mb-2">For Speakership Opportunity,</p>
                  <p className="text-sm text-slate-300">
                    Email at{" "}
                    <a
                      href="mailto:surbhi@guildlive.com"
                      className="text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      surbhi@guildlive.com
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
                
                <div>
                  <p className="font-semibold mb-2">For Partnerships,</p>
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

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">© Copyright 2025, The Guild</p>
          
          <div className="flex flex-wrap gap-6 text-sm">
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
