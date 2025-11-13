import { Lightbulb, Globe2, Building2, Briefcase, UserCheck } from "lucide-react";

const IndustryRepresentation = () => {
  const points = [
    {
      icon: <Lightbulb className="w-12 h-12 text-[#D94C67]" />,
      title: "Drive strategic conversations",
      desc: "On innovation, talent, AI, leadership and ESG.",
    },
    {
      icon: <Globe2 className="w-12 h-12 text-[#D94C67]" />,
      title: "Spotlight Delhi’s role",
      desc: "As a global capability hub.",
    },
    {
      icon: <Building2 className="w-12 h-12 text-[#D94C67]" />,
      title: "Showcase GCCs",
      desc: "That shape enterprise outcomes, not just enable them.",
    },
    {
      icon: <Briefcase className="w-12 h-12 text-[#D94C67]" />,
      title: "Amplify India’s growth",
      desc: "With 40,000 new GCC jobs projected by 2026.",
    },
    {
      icon: <UserCheck className="w-12 h-12 text-[#D94C67]" />,
      title: "Focus on AI & cybersecurity",
      desc: "Next-gen talent, analytics and sustainable growth.",
    },
  ];

  return (
    <section className="py-[150px] bg-gradient-to-br from-white via-gray-50 to-slate-100 text-center">
      <div className="container mx-auto px-6 md:px-12">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
          Inside the 10th Edition of the Summit
        </h2>
        <p className="text-gray-600 text-lg md:text-xl max-w-4xl mx-auto mb-14 leading-relaxed">
          The 10th Edition of the ET Edge GCC Summit will bring together industry leaders,
          policymakers, technologists, and innovators to{" "}
          <strong>decode the next chapter of GCC evolution</strong> and{" "}
          <strong>co-design future-ready, high-impact centres.</strong>
        </p>

        {/* Icon Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 text-center">
          {points.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-gray-800 hover:scale-105 transition-all duration-300"
            >
              <div className="mb-5 industryicon">{item.icon}</div>
              <h3 className="text-lg font-semibold mb-2 lh14remi">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed max-w-[220px] lh14remi">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryRepresentation;
