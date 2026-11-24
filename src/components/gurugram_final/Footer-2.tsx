const aiinvationlogo = "https://olive-elk-842602.hostingersite.com/logo/Ai-Innovation_Logo_White.png";
const guildLogo = "https://olive-elk-842602.hostingersite.com/logo/the-guild-dg26.png";
const Footer = () => {
  return (
    <footer className="bg-[#000019] text-white" id="contact">
      <div className="mx-auto max-w-[1680px] bg-[#000019]">
        <div className="grid grid-cols-1 gap-10 px-6 py-8 lg:grid-cols-[1.35fr_0.95fr] lg:items-start lg:gap-12 lg:px-10 lg:py-12 xl:px-14">
          <div className="flex items-center lg:min-h-[320px]">
            <div className="w-full">
              

              <div>
                <img
                  src={aiinvationlogo}
                  alt="Ai Innovation Summit"
                  className="h-9 sm:h-10 md:h-12 lg:h-24 object-contain ftrlogog26"
                />
              </div>

            </div>
          </div>

          <div className="flex items-start justify-start">
            <div className="w-full max-w-[560px] space-y-5 text-[15px] font-medium sm:text-[17px] lg:text-[18px]">
              
              
              
              <div className="">
                <img
                  src={guildLogo}
                  alt="The Guild"
                  className="h-8 sm:h-10 md:h-12 w-auto object-contain"
                />
              </div>

              <div className="flex items-center gap-3 text-white">
                <a href="https://www.linkedin.com/showcase/guild-ai-innovation-summit/" target="_blank">
                  <span className="text-[clamp(1.4rem,2vw,2.2rem)] font-black leading-none tracking-[-0.04em]">in</span>
                </a>
              </div>

              <a
                href="mailto:guildconferences@guildlive.com"
                className="block text-[#ff3333] transition-colors hover:text-[#d909b7]"
              >
                guildconferences@guildlive.com
              </a>

              <p className="max-w-[480px] leading-[1.45] text-white">
                Smartworks Corporate Park Tower A, Second Floor Sector 125,
                Noida, Uttar Pradesh 201303
              </p>

              <div className="space-y-4 pt-2">
                <div>
                  <p className="text-white">
                    For Speakership Opportunity,
                  </p>
                  <p className="mt-1 leading-[1.5] text-white">
                    Email at{" "}
                    <a
                      href="mailto:nishant.batra@guildlive.com"
                      className="text-[#ff3333] transition-colors hover:text-[#d909b7]"
                    >
                      nishant.batra@guildlive.com
                    </a>{" "}
                    or{" "}
                    <a
                      href="mailto:lavi@guildlive.com"
                      className="text-[#ff3333] transition-colors hover:text-[#d909b7]"
                    >
                      lavi@guildlive.com
                    </a>
                  </p>
                </div>

                <div>
                  <p className="text-white">
                    For Partnerships,
                  </p>
                  <p className="mt-1 leading-[1.5] text-white">
                    Email at{" "}
                    <a
                      href="mailto:partnership@guildlive.com"
                      className="text-[#ff3333] transition-colors hover:text-[#d909b7]"
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
        <div
          className={`border-t border-slate-700 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 footer-reveal footer-delay-3 ${
            footerVisible ? "is-visible" : ""
          }`}
        >
          <p className="text-slate-400 text-xs sm:text-sm text-center md:text-left">
            © Copyright 2026, The Guild
          </p>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
            <a
              href="/about-us"
              className="text-slate-400 hover:text-white transition-colors"
            >
              About Us
            </a>

            <a
              href="/faq"
              className="text-slate-400 hover:text-white transition-colors"
            >
              FAQs
            </a>

            <a
              href="/privacy-policy"
              className="text-slate-400 hover:text-white transition-colors"
            >
              Privacy Policy
            </a>

            <a
              href="/terms-and-conditions"
              className="text-slate-400 hover:text-white transition-colors"
            >
              Terms & Conditions
            </a>

            <a
              href="/code-of-conduct"
              className="text-slate-400 hover:text-white transition-colors"
            >
              Code of Conduct
            </a>
          </div>
        </div>
        {/* BOTTOM SECTION */}


      </div>
    </footer>
  );
};

export default Footer;
