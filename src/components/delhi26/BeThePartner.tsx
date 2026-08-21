import { useState, useEffect } from "react";
import { Target, Network, Zap, Eye, Scale, Radio } from "lucide-react";

const BeThePartner = () => {
  const benefits = [
    {
      icon: Target,
      title: "Shape the Dialogue",
      description:
        "Drive strategic discourse and influence transformative industry paradigms.",
    },
    {
      icon: Network,
      title: "Connect Across Ecosystems",
      description:
        "Forge high-value alliances with innovators, decision-makers, and cross-sector collaborators.",
    },
    {
      icon: Zap,
      title: "Showcase Your Innovations",
      description:
        "Demonstrate your solutions and technological breakthroughs to a curated, forward-thinking audience.",
    },
    {
      icon: Scale,
      title: "Champion Responsible AI",
      description:
        "Advocate for ethical, inclusive, and human-centric AI implementation.",
    },
    {
      icon: Radio,
      title: "Amplify Your Brand",
      description:
        "Elevate your organization’s profile through thought leadership and strategic visibility.",
    },
    {
      icon: Eye,
      title: "Spot Disruptive Trends",
      description:
        "Access pioneering research, market intelligence, and innovations before the curve.",
    },
  ];

  // 🔥 Image array (Customize freely)
  const slideshowImages = [
    "/delhi26/bethepart/be-the-part-4.jpg",
    "/delhi26/bethepart/be-the-part-2.jpg",
    "/delhi26/bethepart/be-the-part-3.jpg",
    "/delhi26/bethepart/be-the-part-1.jpg",
  ];

  const [activeIndex, setActiveIndex] = useState(0); // Left hover active
  const [slideIndex, setSlideIndex] = useState(0);   // Auto slider index

  // 🔥 Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % slideshowImages.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-white via-gray-50 to-slate-100 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        
        <h2 className="text-4xl lh80px md:text-5xl lg:text-6xl font-bold text-center mb-6 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-900 bg-clip-text text-transparent">
          Be the Partner Driving Tech Innovation
        </h2>

        <p className="text-slate-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-12 text-center">
          Stand Out, Seize the Spotlight and Drive Innovation Today and Tomorrow
        </p>

        <div
          className="
            grid 
            grid-cols-1 
            md:grid-cols-[55%_45%] 
            lg:grid-cols-[60%_40%] 
            gap-10 
            max-w-7xl 
            mx-auto 
            items-center
          "
        >
          {/* LEFT LIST */}
          <div className="flex flex-col space-y-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              const isActive = index === activeIndex;

              return (
                <div
                  key={index}
                  onMouseEnter={() => setActiveIndex(index)}
                  className={`cursor-pointer transition-all border-l-4 pl-4 ${
                    isActive
                      ? "border-[#d94c67] text-slate-800"
                      : "border-transparent text-gray-400 hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon
                      className={`w-6 h-6 ${
                        isActive ? "text-[#d94c67]" : "text-gray-500"
                      }`}
                    />
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-slate-800 via-slate-700 to-slate-900 bg-clip-text text-transparent">
                      {benefit.title}
                    </h3>
                  </div>

                  <p
                    className={`text-lg mt-2 becolsec ${
                      isActive ? "text-slate-800 becolseci" : "text-gray-500"
                    }`}
                  >
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* RIGHT AUTO SLIDER IMAGE */}
          <div className="relative h-[550px] md:h-[700px] rounded-2xl overflow-hidden shadow-lg">
            <img
              src={slideshowImages[slideIndex]}
              alt="Slideshow"
              className="w-full h-full object-cover transition-all duration-500 ease-in-out"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeThePartner;
