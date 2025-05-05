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

const SPEAKERS = [
  {
    name: "(Moderator) Anup Purohit",
    role: "Ex-Global CIO, Wipro",
    panel: "Data, AI & the New Age of Business Intelligence",
    time: "12:45 – 01:30 PM",
    linkedin: "https://www.linkedin.com/in/anup-purohit-8958b21/",
    image: "/speakers/anup-purohit.png",
  },
  {
    name: "Aashish Kshetry",
    role: "CIO & VP-IT, Asian Paints",
    panel:
      "From AI Vision to Enterprise Value: Scaling with Strategy, Governance & ROI",
    time: "10:15 – 11:00 AM",
    linkedin: "https://www.linkedin.com/in/aashish-kshetry-9090234/",
    image: "/speakers/ashish-kshetry.png",
  },
  {
    name: "Mukesh Jain",
    role: "CTO, Executive Vice President, Capgemini",
    panel: "Data, AI & the New Age of Business Intelligence",
    time: "12:45 – 01:30 PM",
    linkedin: "https://www.linkedin.com/in/mukeshjaincoach/",
    image: "/speakers/mukesh-jain.png",
  },
];

export const Speakers = () => {
  const isMobile = useIsMobile();

  return (
    <section id="speakers" className="py-[80px] lg:py-[150px] sm:py-[60px] bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-6xl md:text-4xl sm:text-4xl font-bold mb-4 font-orbitron">
            Visionary Speakers
          </h2>
          {/* <p className="text-lg max-w-2xl mx-auto text-white">
            Learn from industry leaders who are pioneering the future of
            artificial intelligence.
          </p> */}
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
              <CarouselPrevious className="static translate-y-0 mr-2 w-4 h-4 text-sm" />
              <CarouselNext className="static translate-y-0 ml-2 w-4 h-4 text-sm" />
            </div>

          </Carousel>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SPEAKERS.map((speaker) => (
              <SpeakerCard key={speaker.name} speaker={speaker} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

const SpeakerCard = ({ speaker }: { speaker: typeof SPEAKERS[0] }) => (
  <Card className="overflow-hidden hover:shadow-lg transition-shadow hover:scale-105 transition-all ease-in-out  ">
    <CardContent className="p-0">
      <div className="w-full h-64 bg-purple-500 flex items-center justify-center">
        <img
          src={speaker.image}
          alt={speaker.name}
          className="w-full h-full object-cover "
        />
      </div>
      <div className="p-4 md:p-6">
        <h3 className="font-bold text-lg md:text-xl mb-1 font-orbitron ">
          {speaker.name}
        </h3>
        <p className=" text-sm md:text-base">{speaker.role}</p>
        <p className="text-sm  mt-2 ">{speaker.time}</p>
        <p className="text-sm  mb-3 ">
          Panel: "{speaker.panel}"
        </p>
        <a
          href={speaker.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 text-sm hover:underline"
        >
          View LinkedIn
        </a>
      </div>
    </CardContent>
  </Card>
);
