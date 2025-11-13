import {
  Landmark,
  Factory,
  ShoppingBag,
  Cpu,
  Truck,
  Pill,
  Car,
  Network,
  Zap,
  Building2,
} from "lucide-react";

const IndustryRepresentation = () => {
  const industries = [
    { icon: <Landmark className="w-12 h-12 text-[#D94C67]" />, name: "BFSI & Fintech", desc: "" },
    { icon: <Factory className="w-12 h-12 text-[#D94C67]" />, name: "Manufacturing & Engineering", desc: "" },
    { icon: <ShoppingBag className="w-12 h-12 text-[#D94C67]" />, name: "FMCG & Consumer Goods", desc: "" },
    { icon: <Cpu className="w-12 h-12 text-[#D94C67]" />, name: "IT & SaaS", desc: "" },
    { icon: <Truck className="w-12 h-12 text-[#D94C67]" />, name: "E-commerce & Online Retail", desc: "" },
    { icon: <Pill className="w-12 h-12 text-[#D94C67]" />, name: "Pharma & Healthcare", desc: "" },
    { icon: <Car className="w-12 h-12 text-[#D94C67]" />, name: "Automotive & Mobility", desc: "" },
    { icon: <Network className="w-12 h-12 text-[#D94C67]" />, name: "Telecom & Digital Infrastructure", desc: "" },
    { icon: <Zap className="w-12 h-12 text-[#D94C67]" />, name: "Energy & Utilities", desc: "" },
    { icon: <Building2 className="w-12 h-12 text-[#D94C67]" />, name: "Real Estate & Hospitality", desc: "" },
  ];

  return (
    <section className="py-[150px] bg-gradient-to-br from-[#1A1C2E] via-[#3E2F8A] to-[#BF1C88] text-center relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-16 drop-shadow-lg">
          Industry Representation
        </h2>

        {/* Icon Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 text-center">
          {industries.map((item, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 text-white shadow-xl transition-all duration-300 hover:scale-105 hover:bg-white/20"
            >
              <div className="flex flex-col items-center justify-center space-y-4">
                {item.icon}
                <h3 className="text-lg font-semibold">{item.name}</h3>
                {item.desc && (
                  <p className="text-sm text-white/80 max-w-[200px]">{item.desc}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Optional background gradient overlay */}
      <div className="absolute inset-0 bg-[url('/delhi26/bg-pattern.png')] bg-cover bg-center opacity-10"></div>
    </section>
  );
};

export default IndustryRepresentation;
