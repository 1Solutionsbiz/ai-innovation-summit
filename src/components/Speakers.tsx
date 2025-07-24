import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { useIsMobile } from "@/hooks/use-mobile";
import { FaLinkedin } from "react-icons/fa";

interface Speaker {
  name: string;
  role: string;
  linkedin: string;
  image: string;
}

interface SpeakersProps {
  data: Speaker[];
}

export const Speakers = ({ data }: SpeakersProps) => {
  const isMobile = useIsMobile();

  return (
    <section
      id="speakers"
      className="py-[80px] lg:py-[150px] sm:py-[60px] bg-black text-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-6xl md:text-4xl sm:text-4xl font-bold mb-4 font-orbitron">
            Visionary Speakers
          </h2>
        </div>

        {isMobile ? (
          <Carousel className="w-full max-w-xs mx-auto">
            <CarouselContent>
              {data.map((speaker) => (
                <CarouselItem key={speaker.name}>
                  <SpeakerCard speaker={speaker} />
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="flex justify-center mt-4">
              <CarouselPrevious className="static translate-y-0 mr-2 w-4 h-4 text-sm" />
              <CarouselNext className="static translate-y-0 ml-2 w-4 h-4 text-sm" />
            </div>
          </Carousel>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.map((speaker) => (
              <SpeakerCard key={speaker.name} speaker={speaker} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

const SpeakerCard = ({ speaker }: { speaker: Speaker }) => (
  <Card className="overflow-hidden hover:shadow-lg transition-shadow hover:scale-105 transition-all ease-in-out">
    <CardContent className="p-0">
      <div className="w-full h-64 bg-purple-500 flex items-center justify-center">
        <img
          src={speaker.image}
          alt={speaker.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4 md:p-6">
        <h3 className="font-bold text-lg md:text-xl mb-1 font-orbitron">
          {speaker.name}
        </h3>
        <p className="text-sm md:text-base">{speaker.role}</p>
        <a
          href={speaker.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 text-lg inline-flex items-center mt-2 hover:text-blue-600"
        >
          <FaLinkedin className="mr-2" />
          <span className="sr-only">LinkedIn</span>
        </a>
      </div>
    </CardContent>
  </Card>
);