import { Target, Network, Zap, Eye, Scale, Radio } from "lucide-react";

const BeThePartner = () => {
  const benefits = [
    {
      icon: Target,
      title: "Shape the Dialogue",
      description:
        "Drive strategic discourse and influence transformative industry paradigms.",
      image: "/delhi26/techinnovation/tech-innov-1.png",
    },
    {
      icon: Radio,
      title: "Amplify Your Brand",
      description:
        "Elevate your organization's profile through thought leadership and strategic visibility.",
      image: "/delhi26/techinnovation/tech-innov-6.png",
    },
    {
      icon: Scale,
      title: "Champion Responsible AI",
      description:
        "Advocate for ethical, inclusive, and human-centric AI implementation.",
      image: "/delhi26/techinnovation/tech-innov-5.png",
    },
    {
      icon: Zap,
      title: "Showcase Your Innovations",
      description:
        "Showcase your solutions and breakthroughs to a curated, forward-thinking audience.",
      image: "/delhi26/techinnovation/tech-innov-3.png",
    },
    {
      icon: Network,
      title: "Connect Across Ecosystems",
      description:
        "Build high-value alliances with innovators, decision-makers, cross-sector collaborators.",
      image: "/delhi26/techinnovation/tech-innov-2.png",
    },
    {
      icon: Eye,
      title: "Spot Disruptive Trends",
      description:
        "Access pioneering research, market intelligence, and innovations before the curve.",
      image: "/delhi26/techinnovation/tech-innov-4.png",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#BF1C88] via-[#5343FF] to-[#1A1C2E] overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-white drop-shadow-lg">
          Be the Partner Driving Tech Innovation
        </h2>

        <p className="text-center text-white/90 max-w-4xl mx-auto mb-12 text-xl md:text-2xl leading-relaxed">
          As a partner at the AI Innovation Summit, you go beyond participation—immerse yourself in
          breakthroughs, shape transformative solutions, and help define the future of innovation.
        </p>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative bg-white border border-white/20 rounded-2xl overflow-hidden duration-300 hover:scale-105"
              style={{
                backgroundImage: `url(${benefit.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "320px", // fixed total card height
              }}
            >
              {/* Overlay for better contrast */}
              <div className="absolute inset-0 bg-black/20"></div>

              {/* Content wrapper */}
              <div className="absolute bottom-0 left-0 right-0 transition-all duration-500 ease-in-out">
                <div className="bg-white/90 backdrop-blur-md p-4 mx-4 mb-4 rounded-lg shadow-lg transition-all duration-500 ease-in-out group-hover:bg-white">
                  <h3 className="text-xl font-bold text-black mb-2
                  bg-gradient-to-r from-slate-800 via-slate-700 to-slate-900 bg-clip-text text-transparent
                  ">
                    {benefit.title}
                  </h3>

                  {/* Description hidden by default */}
                  <p
                    className="text-black text-sm leading-relaxed overflow-hidden opacity-0 max-h-0 
                    group-hover:opacity-100 group-hover:max-h-40 transition-all duration-500 ease-in-out
                    bg-gradient-to-r from-slate-800 via-slate-700 to-slate-900 bg-clip-text text-transparent"
                  >
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeThePartner;
