
import { Card, CardContent } from "./ui/card";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-orbitron">
              About <span className="text-gradient">AI Innovation Summit</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              The AI Innovation Summit brings together global AI leaders, researchers, and innovators for three days of learning, networking, and inspiration. Discover how AI is transforming industries and shaping tomorrow.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Join us for an immersive experience featuring keynotes from AI pioneers, hands-on workshops, networking events, and a showcase of cutting-edge AI startups and technologies.
            </p>
          </div>
          <Card className="lg:ml-auto overflow-hidden">
            <CardContent className="p-0">
              <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1200&q=80"
                  alt="AI Conference"
                  className="w-full h-full object-cover"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
