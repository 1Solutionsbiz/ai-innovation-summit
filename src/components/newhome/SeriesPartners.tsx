import seriesPartnersBg from "@/assets/series-partners-bg.jpg";

const partnersData = [
  {
    tier: "Co-Partner",
    logos: [{ name: "Atlassian", url: "/sponsers/atlassian-1.png" }],
    isCoPartner: true,
  },
  {
    tier: "Agentic AI Partner",
    logos: [{ name: "Salesforce", url: "/sponsers/salesforce.png" }],
    isCoPartner: false,
  },
  {
    tier: "Associate Partner",
    logos: [{ name: "Microsoft", url: "/sponsers/microsoft-1.png" }],
    isCoPartner: false,
  },
  {
    tier: "Robotics Partner",
    logos: [{ name: "Xboom", url: "/sponsers/xboom-1.png" }],
    isCoPartner: false,
  },
];

const SeriesPartners = () => {
  return (
    <section
      id="partners"
      className="py-16 md:py-24 bg-white relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={seriesPartnersBg}
          alt=""
          className="w-full h-full object-cover opacity-50"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-900 bg-clip-text text-transparent opacity-0 animate-fade-in-up">
          Series Partners
        </h2>
        <p className="text-slate-600 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed mb-12 text-center opacity-0 animate-fade-in-up animation-delay-200">
          Partnering with industry leaders to drive innovation
        </p>

        {/* Partner Blocks (Dynamic) */}
        <div className="max-w-6xl mx-auto space-y-10">
          {partnersData.map((partner, index) => (
            <div
              key={index}
              className={`py-6 opacity-0 animate-fade-in-up animation-delay-${
                400 + index * 200
              }`}
            >
              <p className="text-sm font-semibold text-center mb-4 tracking-wide text-gray-700 uppercase">
                {partner.tier}
              </p>

              {/* LOGOS (Always Center Aligned) */}
              <div className="flex flex-wrap justify-center sspastprnrlogomain items-center gap-8">
                {partner.logos.map((logo, i) => (
                  <div
                    key={i}
                    className="transition-transform sspastprnrlogo duration-300 hover:scale-105"
                  >
<img
  src={logo.url}
  alt={logo.name}
  className={`object-contain ${partner.isCoPartner ? "h-20" : "h-16"} ${logo.name.toLowerCase().replace(/\s+/g, "-")}`}
  loading="lazy"
/>

                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SeriesPartners;
