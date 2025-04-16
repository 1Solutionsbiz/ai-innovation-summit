import { Card, CardContent } from "./ui/card";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

export const Sponsors = () => {
  const sponsorTiers = [
    {
      tier: "Platinum",
      logos: [
        { name: "Google", url: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
        { name: "Microsoft", url: "https://svgsilh.com/svg/80658.svg" },
        { name: "Amazon", url: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
      ],
    },
    {
      tier: "Gold",
      logos: [
        { name: "IBM", url: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
        { name: "Meta", url: "https://venturenixlab.co/wp-content/uploads/2025/02/Meta-Logo.png" },
        { name: "NVIDIA", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtVWdztLmxozDgFBhgErvuyjIuc5igGoWOXg&s" },
        { name: "Intel", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDLOhtSEKPhXW6uhqj-ybQMdlLACZRRv8xwg&s" },
      ],
    },
    {
      tier: "Silver",
      logos: [
        { name: "Oracle", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnduWsTuvxrhDFxmPZh0TzMQLL9Z4VCmCdbQ&s" },
        { name: "Salesforce", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrEngtm7EBVPBmkhBtma6iUIu4_xok2f1Gyw&s" },
        { name: "Adobe", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Adobe_Corporate_logo.svg/2560px-Adobe_Corporate_logo.svg.png" },
        { name: "Samsung", url: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Samsung_wordmark.svg" },
        { name: "Cisco", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqHxfp5_IxQLcw1D8CVTi6ouBWcTy2m6sxHw&s" },
        { name: "Dell", url: "https://upload.wikimedia.org/wikipedia/commons/4/48/Dell_Logo.svg" },
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
          trigger: "#sponsors",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section id="sponsors" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-orbitron">
            Our Partners & Sponsors
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-gray-300">
            Leading technology companies supporting the AI Innovation Summit.
          </p>
        </div>

        <div className="space-y-12">
          {sponsorTiers.map((tier) => (
            <div key={tier.tier} className="mb-10">
              <h3 className="text-center text-xl font-orbitron mb-6">
                {tier.tier} Sponsors
              </h3>

              <div className="flex flex-wrap justify-center gap-5">
                {tier.logos.map((logo) => (
                  <Card
                    key={logo.name}
                    className="w-full max-w-[180px] h-24 flex items-center justify-center bg-gray-900 shadow-sm hover:shadow-md transition-shadow transform hover:scale-105 duration-300 sponsor-logo"
                  >
                    <CardContent className="p-4 flex items-center justify-center">
                      <img
                        src={logo.url}
                        alt={logo.name}
                        className="max-h-12 object-contain bg-white p-2 rounded"
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
