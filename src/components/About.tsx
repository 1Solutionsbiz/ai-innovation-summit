
import { Card, CardContent } from "./ui/card";
import { CheckCircle } from "lucide-react";

export const About = () => {
  const highlights = [
    "20+ Industry-Leading Speakers",
    "Interactive Workshops & Sessions",
    "Networking Opportunities",
    "Latest Design & Development Trends",
    "Q&A Sessions with Experts",
    "Exclusive Conference Materials"
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Attend DIBI Conference 2025?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              DIBI Conference brings together the brightest minds in design and development for two days of learning, sharing, and networking. Whether you're a designer, developer, or leader, you'll find valuable insights to take your skills to the next level.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {highlights.map((highlight) => (
                <div key={highlight} className="flex items-center gap-2">
                  <CheckCircle className="text-primary h-5 w-5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>
          <Card className="lg:ml-auto">
            <CardContent className="p-6">
              <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=1200&q=80"
                  alt="Conference"
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
