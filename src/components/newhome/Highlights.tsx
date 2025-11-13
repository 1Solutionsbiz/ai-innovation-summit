import { Layers, User, Handshake, Users, Lightbulb, Satellite } from "lucide-react";
import audienceStats from "@/assets/audience-stats.png";

const Highlights = () => {
  const higlitbanner = "/delhi26/highlight.png"; // background image path

  const highlights = [
    { 
      number: "30+", 
      label: "Thought Leaders",
      icon: User,
      color: "text-[#FF1493]" // Deep Pink
    },
    { 
      number: "400+", 
      label: "Industry Experts",
      icon: Users,
      color: "text-[#00BFFF]" // Deep Sky Blue
    },
    { 
      number: "8+", 
      label: "Strategic Sessions",
      icon: Handshake,
      color: "text-[#FFA500]" // Orange
    },
    { 
      number: "6+", 
      label: "Hours of Networking",
      icon: Lightbulb,
      color: "text-[#32CD32]" // Lime Green
    },
  ];

  return (
    <section
      className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-[#8B7AB8]/90 via-[#9B86BD]/80 to-[#B695C0]/90 bg-blend-overlay bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${higlitbanner})` }}
    >
      {/* Colorful gradient overlays for aurora effect */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-purple-400/30 to-transparent blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-blue-400/30 to-transparent blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-gradient-to-r from-pink-400/20 via-purple-400/20 to-blue-400/20 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            const delays = ['', 'animation-delay-200', 'animation-delay-400', 'animation-delay-600'];
            return (
              <div 
                key={index} 
                className={`relative rounded-3xl backdrop-blur-2xl bg-white/15 border border-white/40 p-8 py-12 px-8 text-center space-y-3 opacity-0 animate-fade-in-up ${delays[index]} hover:bg-white/20 transition-all duration-300 hover:scale-105 shadow-2xl`}
                style={{
                  backdropFilter: 'blur(20px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                }}
              >
                <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-lg">
                  {item.number}
                </div>
                <div className="text-sm md:text-base lg:text-lg font-medium text-white/95 tracking-wide">
                  {item.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
