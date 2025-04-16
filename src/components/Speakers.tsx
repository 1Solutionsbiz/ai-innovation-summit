
import { Card, CardContent } from "./ui/card";

const SPEAKERS = [
  {
    name: "Sarah Johnson",
    role: "UX Director, Google",
    image: "photo-1494891848038-7bd202a2afeb",
    topic: "The Future of User Experience Design"
  },
  {
    name: "Michael Chen",
    role: "Senior Developer, Microsoft",
    image: "photo-1488590528505-98d2b5aba04b",
    topic: "Building Scalable Web Applications"
  },
  {
    name: "Emma Wilson",
    role: "Design Systems Lead, Apple",
    image: "photo-1551038247-3d9af20df552",
    topic: "Creating Effective Design Systems"
  },
  {
    name: "David Brown",
    role: "Tech Lead, Amazon",
    image: "photo-1460574283810-2aab119d8511",
    topic: "Cloud Architecture Patterns"
  },
  {
    name: "Rachel Martinez",
    role: "Product Designer, Meta",
    image: "photo-1496307653780-42ee777d4833",
    topic: "Design for Social Impact"
  },
  {
    name: "James Wilson",
    role: "Engineering Lead, Netflix",
    image: "photo-1473177104440-ffee2f376098",
    topic: "Streaming Architecture at Scale"
  }
];

export const Speakers = () => {
  return (
    <section id="speakers" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Speakers</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Learn from industry leaders who are shaping the future of design and development.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SPEAKERS.map((speaker) => (
            <Card key={speaker.name} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <img
                  src={`https://images.unsplash.com/${speaker.image}?auto=format&fit=crop&w=800&q=80`}
                  alt={speaker.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-1">{speaker.name}</h3>
                  <p className="text-muted-foreground mb-3">{speaker.role}</p>
                  <p className="font-medium">{speaker.topic}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
