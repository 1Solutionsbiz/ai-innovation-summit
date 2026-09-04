import { Layers, User, Handshake, Users, Lightbulb, Satellite } from "lucide-react";
import audienceStats from "@/assets/audience-stats.png";

const Highlights = () => {
  const higlitbanner = "/delhi26/highlight.png"; // background image path

  const highlights = [
    {
      number: "700+",
      label: "Delhi Edition Attendees",
      icon: User,
      color: "text-[#FF1493]" // Deep Pink
    },
    {
      number: "45+",
      label: "CXO Speakers & Moderators",
      icon: Users,
      color: "text-[#00BFFF]" // Deep Sky Blue
    },
    {
      number: "12+",
      label: "Sessions",
      icon: Handshake,
      color: "text-[#FFA500]" // Orange
    },
    {
      number: "10+ ",
      label: "Industry Sectors",
      icon: Lightbulb,
      color: "text-[#32CD32]" // Lime Green
    },
    {
      number: "3+ ",
      label: "Parallel Tracks",
      icon: Lightbulb,
      color: "text-[#32CD32]" // Lime Green
    },
    {
      number: "1",
      label: "Day That Redefines Enterprise AI",
      icon: Lightbulb,
      color: "text-[#32CD32]" // Lime Green
    },
  ];

  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-[#050817]">

      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/bg-animation2.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#050817]/55" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-transparent to-blue-900/30" />

      {/* Aurora Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-purple-400/20 to-transparent blur-3xl" />

        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-blue-400/20 to-transparent blur-3xl" />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-gradient-to-r from-pink-400/10 via-purple-400/10 to-blue-400/10 blur-3xl" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">

        <div className="
      grid
      grid-cols-1
      sm:grid-cols-2
      lg:grid-cols-3
      xl:grid-cols-6
      gap-5
      max-w-[1600px]
      mx-auto
    ">

          {highlights.map((item, index) => {
            const Icon = item.icon;

            const delays = [
              '',
              'animation-delay-200',
              'animation-delay-400',
              'animation-delay-600',
              'animation-delay-800',
              'animation-delay-1000',
            ];

            return (
              <div
                key={index}
                className={`
              relative
              rounded-3xl
              backdrop-blur-2xl
              bg-white/15
              border border-white/40
              p-5 md:p-6
              min-h-[230px]
              flex flex-col
              items-center
              justify-center
              text-center
              space-y-3
              opacity-0
              animate-fade-in-up
              ${delays[index]}
              hover:bg-white/20
              transition-all
              duration-300
              hover:scale-105
              hover:-translate-y-2
              shadow-2xl
            `}
                style={{
                  backdropFilter: 'blur(20px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                }}
              >
                <div className="text-4xl xl:text-5xl font-bold text-white drop-shadow-lg">
                  {item.number}
                </div>

                <div className="text-sm xl:text-base font-medium text-white/95 tracking-wide leading-snug">
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
