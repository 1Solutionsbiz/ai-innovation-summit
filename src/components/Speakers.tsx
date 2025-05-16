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
import { FaLinkedin } from "react-icons/fa"; // LinkedIn icon

const SPEAKERS = [
  {
    name:"Parvez Mulla",
    role:"MD & CEO, Fedbank Financial Services Ltd. ",
    linkedin:"https://www.linkedin.com/in/parvez-mulla-b796044/",
    image:"/speakers/parvez-mulla.png",
  },
   {
    name: "Dipu KV",
    role: "Senior President, Bajaj Allianz General Insurance",
    linkedin: "https://www.linkedin.com/in/kvdipu/",
    image: "/speakers/dipu-kv.png",
  },
  {
    name: "Aashish Kshetry",
    role: "CIO & VP-IT, Asian Paints",
    linkedin: "https://www.linkedin.com/in/aashish-kshetry-9090234/",
    image: "/speakers/ashish-kshetry.png",
  },
  {
    name: "Mukesh Jain",
    role: "CTO, Executive Vice President, Capgemini",
    linkedin: "https://www.linkedin.com/in/mukeshjaincoach/",
    image: "/speakers/mukesh-jain.png",
  },
  {
    name: "Tarun Pandey",
    role: "Chief Technology Officer, Aditya Birla Health Insurance",
    linkedin: "https://www.linkedin.com/in/tarunpandey/",
    image: "/speakers/tarun-pandey.png",
  },
   {
    name: "Sudip Mazumder ",
    role: "Global CDIO, PGP Glass",
    linkedin: "https://www.linkedin.com/in/mazumdersudip/",
    image: "/speakers/sudip-mazumdar.png",
  },
   {
    name: "Vineet Shukla",
    role: "CTO – Mahindra Teqo",
    linkedin: "https://www.linkedin.com/in/shuklavineet/",
    image: "/speakers/vineet-shukla.png",
  },
   {
    name: "Nishant Pradhan",
    role: "Chief AI Officer, Mirae Asset Mutual Fund (India)",
    linkedin: "https://www.linkedin.com/in/pradhannishant/",
    image: "/speakers/nishant-pradhan.png",
  },
  {
    name: "Vijaya Kadiyala",
    role: " Executive Director, India Head of Enterprise Architecture, DBS Bank",
    linkedin: "https://www.linkedin.com/in/vijaya-kadiyala/",
    image: "/speakers/vijaya.png",
  },
    {
    name: "Tejasvi Addagada",
    role: " Senior Vice President, Head- Enterprise Data Management, Data Office, HDFC Bank",
    linkedin: "https://www.linkedin.com/in/tejasviaddagada/",
    image: "/speakers/tejaswi.png",
  },
 
  {
    name: "Aliasgar Karachiwala",
    role: "EVP & IT Head - Applications, Automation, AI and Business Solutions Group RBL Bank",
    linkedin: "https://www.linkedin.com/in/aliasgarkarachiwala/",
    image: "/speakers/aliasgar-karachiwala.png",
  },

  {
    name: "Amit Joshi",
    role: "CISO, Hindalco Industries",
    linkedin: "https://www.linkedin.com/in/amit-joshi-ba7a886/",
    image: "/speakers/amit-joshi.png",
  },

  {
    name: "Hetal Presswala",
    role: "Chief Information Security Officer, Kalpatru Projects International ",
    linkedin: "https://www.linkedin.com/in/hetal-presswala/",
    image: "/speakers/hetal-presswala.png",
  },
  
 
  
    {
    name: "Rajat Mathur",
    role: "Partner, BCG (Boston Consulting Group)",
    linkedin: "https://www.linkedin.com/in/rajat2000/",
    image: "/speakers/rajat-mathur.png",
  },
 
  
  {
    name: "Anup Purohit",
    role: "Ex-Global CIO, Wipro",
    linkedin: "https://www.linkedin.com/in/anup-purohit-8958b21/",
    image: "/speakers/anup-purohit.png",
  },
  {
    name: "Sudipta Ghosh",
    role: " Partner, PwC India",
    linkedin: "https://www.linkedin.com/in/sudiptaghosh/",
    image: "/speakers/sudipta-ghosh.png",
  },

];

export const Speakers = () => {
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
