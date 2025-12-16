import seriesPartnersBg from "@/assets/series-partners-bg.jpg";

const partnersData = [
  {
    tier: "Presenting Partner",
    logos: [{ name: "Adobe", url: "/partners/Adobe_Logo_Red.png" }],
    isCoPartner: true,
  },
];

const SeriesPartners = () => {
  return (
    <section
      id="partners"
      className="py-16 md:py-24 pb-0 bg-white relative overflow-hidden"
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
          Partners
        </h2>
        {/* <p className="text-slate-600 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed mb-12 text-center opacity-0 animate-fade-in-up animation-delay-200">
            Presenting Partner  
        </p> */}

        {/* Partner Blocks (Dynamic) */}
        <div className="max-w-6xl mx-auto space-y-10">
          {partnersData.map((partner, index) => (
            <div
              key={index}
              className={`py-6 opacity-0 animate-fade-in-up pt-0 animation-delay-${
                400 + index * 200
              }`}
            >
              <p className="text-xl text-center mb-4 tracking-wide d26pb10 text-gray-700 uppercase">
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
                    className={`object-contain del26plo ${partner.isCoPartner ? "h-20" : "h-16"} ${logo.name.toLowerCase().replace(/\s+/g, "-")}`}
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
