import partnerA from "@/assets/partners/partner-a.svg";
import partnerB from "@/assets/partners/partner-b.svg";
import partnerC from "@/assets/partners/partner-c.svg";
import partnerD from "@/assets/partners/partner-d.svg";
import partnerE from "@/assets/partners/partner-e.svg";
import partnerF from "@/assets/partners/partner-f.svg";

import microsoftLogo from "@/assets/partners/microsoft.png";
import chatgptLogo from "@/assets/partners/chatgpt.png";
import amazonLogo from "@/assets/partners/amazon-logo.svg";
import nttLogo from "@/assets/partners/ntt.svg";
import accentureLogo from "@/assets/partners/accenture.svg";
import netflixLogo from "@/assets/partners/netflix.png";
import fedexLogo from "@/assets/partners/fedex.png";
import seriesPartnersBg from "@/assets/series-partners-bg.jpg";

const SeriesPartners = () => {
  return (
    <section id="partners" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={seriesPartnersBg} alt="" className="w-full h-full object-cover opacity-50" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-900 bg-clip-text text-transparent opacity-0 animate-fade-in-up">
          Series Partners
        </h2>
        <p className="text-slate-600 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed mb-12 text-center opacity-0 animate-fade-in-up animation-delay-200">
          Partnering with industry leaders to drive innovation
        </p>
        
          <div className="max-w-5xl mx-auto space-y-10">
            {/* Presenting Partner */}
            <div className="py-6 opacity-0 animate-fade-in-up animation-delay-400">
              <p className="text-sm font-semibold text-center mb-4 tracking-wide text-gray-700">
                PRESENTING PARTNER
              </p>
              <div className="flex justify-center transition-transform duration-300 hover:scale-105">
                <img src={microsoftLogo} alt="AI Innovation Summit Series Partners - Microsoft (Presenting Partner)" className="h-16 object-contain" loading="lazy" />
              </div>
            </div>

            {/* Co-Presenting Partner */}
            <div className="py-6 opacity-0 animate-fade-in-up animation-delay-600">
              <p className="text-sm font-semibold text-center mb-4 tracking-wide text-gray-700">
                CO-PRESENTING PARTNER
              </p>
              <div className="flex justify-center transition-transform duration-300 hover:scale-105">
                <img src={chatgptLogo} alt="AI Innovation Summit Series Partners - ChatGPT (Co-Presenting Partner)" className="h-16 object-contain" loading="lazy" />
              </div>
            </div>

            {/* Powered By */}
            <div className="py-6 opacity-0 animate-fade-in-up animation-delay-800">
              <p className="text-sm font-semibold text-center mb-4 tracking-wide text-gray-700">
                POWERED BY
              </p>
              <div className="flex justify-center transition-transform duration-300 hover:scale-105">
                <img src={amazonLogo} alt="AI Innovation Summit Series Partners - Amazon (Powered By)" className="h-14 object-contain" loading="lazy" />
              </div>
            </div>

            {/* Co-Powered By */}
            <div className="py-6 opacity-0 animate-fade-in-up animation-delay-1000">
              <p className="text-sm font-semibold text-center mb-4 tracking-wide text-gray-700">
                CO-POWERED BY
              </p>
              <div className="flex justify-center transition-transform duration-300 hover:scale-105">
                <img src={accentureLogo} alt="AI Innovation Summit Series Partners - Accenture (Co-Powered By)" className="h-16 object-contain" loading="lazy" />
              </div>
            </div>

            {/* In Association With */}
            <div className="py-6 opacity-0 animate-fade-in-up animation-delay-1200">
              <p className="text-sm font-semibold text-center mb-4 tracking-wide text-gray-700">
                IN ASSOCIATION WITH
              </p>
              <div className="flex flex-wrap justify-center gap-6 items-center">
                <div className="transition-transform duration-300 hover:scale-105">
                  <img src={netflixLogo} alt="AI Innovation Summit Series Partners - Netflix (Association Partner)" className="h-16 object-contain" loading="lazy" />
                </div>
                <div className="transition-transform duration-300 hover:scale-105">
                  <img src={fedexLogo} alt="AI Innovation Summit Series Partners - FedEx (Association Partner)" className="h-32 object-contain" loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default SeriesPartners;
