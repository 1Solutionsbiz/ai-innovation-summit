import seriesPartnersBg from "@/assets/series-partners-bg.jpg";

const partnersData = [
  {
    tier: "Presenting Partner",
    logos: [
      {
        name: "Salesforce",
        url: "/partners/salesforce.png",
        link: "https://www.salesforce.com/",
      },
    ],
    isCoPartner: true,
  },
  {
    tier: "Co-Powered by",
    logos: [
      {
        name: "Atlassian",
        url: "/partners/atlassian.png",
        link: "https://www.atlassian.com/",
      },
    ],
    isCoPartner: true,
  },
  {
    tier: "Cyber Resilience Partner",
    logos: [
      {
        name: "Cohesity",
        url: "/partners/cohesity.png",
        link: "https://www.cohesity.com/",
      },
    ],
    isCoPartner: true,
  },
  {
    tier: "AI Data Cloud Partner",
    logos: [
      {
        name: "Snowflake",
        url: "/partners/Snowflake.png",
        link: "https://www.snowflake.com/en/",
      },
    ],
    isCoPartner: true,
  },
  {
    tier: "Engagement Partner",
    logos: [
      {
        name: "EquateMe",
        url: "/partners/EquateMe.png",
        link: "https://equateme.com/",
      },
    ],
    isCoPartner: true,
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
          Partners
        </h2>

        {/* Partner Blocks */}
        <div className="max-w-6xl mx-auto space-y-10">
          {partnersData.map((partner, index) => (
            <div
              key={index}
              className={`py-6 pt-0 opacity-0 animate-fade-in-up animation-delay-${400 + index * 200
                }`}
            >
              <p className="text-xl text-center mb-4 tracking-wide d26pb10 text-gray-700 uppercase">
                {partner.tier}
              </p>

              <div className="flex flex-wrap justify-center sspastprnrlogomain items-center gap-8">
                {partner.logos.map((logo, i) => (
                  <a
                    key={i}
                    href={logo.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-transform sspastprnrlogo bang26prnrlogo duration-300 hover:scale-105 inline-block"
                    title={logo.name}
                  >
                    <img
                      src={logo.url}
                      alt={logo.name}
                      className={`object-contain del26plo ${partner.isCoPartner ? "h-20" : "h-16"
                        } ${logo.name
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                      loading="lazy"
                    />
                  </a>
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