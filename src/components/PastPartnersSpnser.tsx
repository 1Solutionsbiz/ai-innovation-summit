// temp
import { Card, CardContent } from "./ui/card";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// temp
// 


import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";


const sponsorTiers = [
    {
      tier: "Co-Partner",
      logos: [
        { name: "Atlassian", url: "/sponsers/atlassian.png" },
      ],
      isCoPartner: true // Add this flag
    },
    // {
    //   tier: "Robotics Partner",
    //   logos: [
    //     { name: "Xboom", url: "/sponsers/xboom.png" },
    //   ],
    //   isCoPartner: false
    // },
    {
      tier: "Agentic AI Partner",
      logos: [
        { name: "Salesforce", url: "/sponsers/salesforce.png" },
      ],
      isCoPartner: false
    },
  ];


const PastPartners: React.FC = () => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    drag: true,
    slides: {
      perView: 1,
      spacing: 16,
    },
    created(slider) {
      setInterval(() => {
        if (slider) slider.next();
      }, 3000);
    },
  });

  return (
    <section id="partners" className="py-16 bg-black">

        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-6xl md:text-4xl font-bold mb-4 font-orbitron text-neon-blue">
            Summit Partners
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-white-300 text-white">
            Leading enterprises supporting the AI Innovation Summit.
          </p>
        </div>

        <div className="space-y-12">
            {sponsorTiers.map((tier) => (
            <div key={tier.tier} className="mb-10">
                <h2 className="text-center text-4xl font-orbitron mb-6 text-white">
                {tier.tier}
                </h2>

                <div className="flex flex-wrap justify-center gap-5">
                {tier.logos.map((logo) => (
                    <Card
                    key={logo.name}
                    className={`w-full ${tier.isCoPartner ? 'max-w-[300px] h-32' : 'max-w-[220px] h-24'} flex items-center justify-center border-none bg-black shadow-sm hover:shadow-md transition-shadow transform hover:scale-105 duration-300 sponsor-logo`}
                    >
                    <CardContent className="p-4 flex items-center justify-center">
                        <img
                        src={logo.url}
                        alt={logo.name}
                        className={`${tier.isCoPartner ? 'max-h-32' : 'max-h-24'} object-contain`}
                        />
                    </CardContent>
                    </Card>
                ))}
                </div>
            </div>
            ))}
        </div>

    </section>
  );
};




export default PastPartners;
