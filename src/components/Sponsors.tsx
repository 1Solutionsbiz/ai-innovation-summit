import { Card, CardContent } from "./ui/card";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

export const Sponsors = () => {
  const sponsorTiers = [
    {
      tier: "Co-Partner",
      logos: [
        { name: "Microsoft", url: "/sponsers/microsoft.webp" },
      ],
    },
    {
      tier: "Robotics Partner",
      logos: [
        { name: "Xboom", url: "/sponsers/xboom.png" },
      ],
    },
    {
      tier: "Associate Partner",
      logos: [
        { name: "Snowflake", url: "/sponsers/snowflake.png" },
      ],
    },
  ];

  useEffect(() => {
    gsap.fromTo(
      ".sponsor-logo",
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "bounce.out",
        scrollTrigger: {
          trigger: "#partners",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section id="partners" className="pb-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-6xl md:text-4xl font-bold mb-4 font-orbitron text-neon-blue">
            Our Partners
          </h2>
          <p className=" text-lg max-w-2xl mx-auto text-white-300">
            Leading enterprises supporting the AI Innovation Summit.
          </p>
        </div>

        <div className="space-y-12">
          {sponsorTiers.map((tier) => (
            <div key={tier.tier} className="mb-10">
              <h2 className="text-center text-4xl font-orbitron mb-6">
                {tier.tier}
              </h2>

              <div className="flex flex-wrap justify-center gap-5">
                {tier.logos.map((logo) => (
                  <Card
                    key={logo.name}
                    className="w-full max-w-[220px] h-24 flex items-center justify-center border-none bg-black shadow-sm hover:shadow-md transition-shadow transform hover:scale-105 duration-300 sponsor-logo "
                  >
                    <CardContent className="p-4 flex items-center justify-center">
                      <img
                        src={logo.url}
                        alt={logo.name}
                        className="max-h-24 object-contain"
                      />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};