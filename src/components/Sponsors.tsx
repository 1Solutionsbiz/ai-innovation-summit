
import { Card, CardContent } from "./ui/card";

export const Sponsors = () => {
  const sponsorTiers = [
    {
      tier: "Platinum",
      logos: [
        "Google", "Microsoft", "Amazon"
      ]
    },
    {
      tier: "Gold",
      logos: [
        "IBM", "Meta", "NVIDIA", "Intel"
      ]
    },
    {
      tier: "Silver",
      logos: [
        "Oracle", "Salesforce", "Adobe", "Samsung", "Cisco", "Dell"
      ]
    }
  ];

  return (
    <section id="sponsors" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-orbitron">Our Partners & Sponsors</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Leading technology companies supporting the AI Innovation Summit.
          </p>
        </div>

        <div className="space-y-12">
          {sponsorTiers.map((tier) => (
            <div key={tier.tier} className="mb-10">
              <h3 className="text-center text-xl font-orbitron mb-6">{tier.tier} Sponsors</h3>
              <div className={`grid grid-cols-2 md:grid-cols-${Math.min(tier.logos.length, 4)} gap-6 items-center justify-items-center`}>
                {tier.logos.map((logo) => (
                  <Card key={logo} className="w-full max-w-[180px] h-24 flex items-center justify-center bg-white shadow-sm hover:shadow-md transition-shadow">
                    <CardContent className="p-4 flex items-center justify-center">
                      <span className="text-xl font-bold text-muted-foreground">{logo}</span>
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
