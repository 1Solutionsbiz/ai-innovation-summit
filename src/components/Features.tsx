
import { Brain, Globe, Lightbulb, Rocket } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export const Features = () => {
  const features = [
    {
      icon: <Lightbulb className="h-10 w-10 text-neon-purple" />,
      title: "50+ Expert Speakers",
      description: "Learn from industry leaders and AI researchers shaping the future of technology."
    },
    {
      icon: <Brain className="h-10 w-10 text-neon-blue" />,
      title: "Hands-on AI Workshops",
      description: "Gain practical skills with interactive sessions led by AI practitioners."
    },
    {
      icon: <Globe className="h-10 w-10 text-neon-pink" />,
      title: "Global Networking",
      description: "Connect with peers, mentors, and potential collaborators from around the world."
    },
    {
      icon: <Rocket className="h-10 w-10 text-neon-green" />,
      title: "Startup Showcase",
      description: "Discover innovative AI startups and breakthrough technologies."
    }
  ];

  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-orbitron">Why Attend?</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Experience the future of AI through unique opportunities and connections.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <Card key={feature.title} className="card-hover gradient-border bg-white">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-xl mb-2 font-orbitron">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
