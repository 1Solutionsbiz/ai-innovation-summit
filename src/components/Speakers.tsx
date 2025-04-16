
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { useIsMobile } from "@/hooks/use-mobile";

const SPEAKERS = [
  {
    name: "Dr. Sarah Johnson",
    role: "AI Research Director, Google",
    image: "photo-1573496359142-b8d87734a5a2"
  },
  {
    name: "Michael Chen",
    role: "CTO, OpenAI",
    image: "photo-1560250097-0b93528c311a"
  },
  {
    name: "Emma Wilson",
    role: "AI Ethics Professor, MIT",
    image: "photo-1494790108377-be9c29b29330"
  },
  {
    name: "David Rodriguez",
    role: "Head of AI, Microsoft",
    image: "photo-1507003211169-0a1dd7228f2d"
  },
  {
    name: "Dr. Aisha Khan",
    role: "Neural Networks Specialist, Stanford",
    image: "photo-1580489944761-15a19d654956"
  },
  {
    name: "James Wilson",
    role: "Founder, AI Ventures",
    image: "photo-1531427186611-ecfd6d936c79"
  }
];

export const Speakers = () => {
  const isMobile = useIsMobile();

  return (
    <section id="speakers" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-orbitron">Meet the Speakers</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Learn from industry leaders who are pioneering the future of artificial intelligence.
          </p>
        </div>

        {isMobile ? (
          <Carousel className="w-full max-w-xs mx-auto">
            <CarouselContent>
              {SPEAKERS.map((speaker) => (
                <CarouselItem key={speaker.name}>
                  <SpeakerCard speaker={speaker} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-4">
              <CarouselPrevious className="static translate-y-0 mr-2" />
              <CarouselNext className="static translate-y-0 ml-2" />
            </div>
          </Carousel>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SPEAKERS.map((speaker) => (
              <SpeakerCard key={speaker.name} speaker={speaker} />
            ))}
          </div>
        )}

        <div className="text-center mt-12">
          <Button className="btn-gradient text-white">View Full Speaker Lineup</Button>
        </div>
      </div>
    </section>
  );
};

const SpeakerCard = ({ speaker }: { speaker: typeof SPEAKERS[0] }) => (
  <Card className="overflow-hidden hover:shadow-lg transition-shadow">
    <CardContent className="p-0">
      <img
        src={`https://images.unsplash.com/${speaker.image}?auto=format&fit=crop&w=800&q=80`}
        alt={speaker.name}
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h3 className="font-bold text-xl mb-1 font-orbitron">{speaker.name}</h3>
        <p className="text-muted-foreground mb-3">{speaker.role}</p>
        <Button variant="outline" size="sm">View Bio</Button>
      </div>
    </CardContent>
  </Card>
);
