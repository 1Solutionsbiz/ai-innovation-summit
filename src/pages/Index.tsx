import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import MovingStrip from "@/components/MovingStrip";
import { About } from "@/components/About";
import { KeyPoints } from "@/components/KeyPoints";
import { PastHighlights } from "@/components/PastHighlights";
import { Footer } from "@/components/Footer";
import { Register } from "@/components/RegisterForm";
import KeyTheme from "@/components/KeyTheme";
import StickyWrapper from "@/components/StickyWrapper";
import  ShouldAttend  from "@/components/ShouldAttend";
import {WhoShouldSponsor} from "@/components/WhoShouldSponsor";
import { Features } from "@/components/Features";
import AudienceProfile from "@/components/AudienceProfile";
import Agenda, { AgendaItem } from "@/components/Agenda"; // Import Agenda and AgendaItem type
import { PartnershipCTA } from "@/components/PartnershipCTA";

const agendaData: AgendaItem[] = [
  {
    time: "09:00 AM - 09:45 AM",
    title: "Registration",
    description: "Arrive at the venue, collect your badges, and get ready for the day ahead.",
    color: "purple",
  },
  {
    time: "10:00 AM - 11:00 AM",
    title: "Cloud, AI and Digital Transformation: The Whole Is Greater Than the Sum of Its Parts.",
    description: "Explore how integrating AI with cloud technologies can amplify digital transformation.",
    color: "blue",
  },
  {
    time: "11:00 AM - 11:30 AM",
    title: "Networking Tea/Coffee Break",
    description: "Relax and network with fellow attendees over tea or coffee.",
    color: "purple",
  },
  {
    time: "11:30 AM - 12:15 PM",
    title: "Rethinking Zero-Trust: An AI-Based Approach to Cybersecurity",
    description: "A modern take on cybersecurity using AI-powered zero-trust frameworks.",
    color: "blue",
  },
  {
    time: "12:15 PM - 12:45 PM",
    title: "How Humans and AI-Driven Agents Propel Work Success",
    description: "Insights into how human-AI collaboration enhances workplace productivity.",
    color: "purple",
  },
  {
    time: "12:45 PM - 01:30 PM",
    title: "Re-imagining the Future of Work: AI-driven Collaboration and Remote Productivity",
    description: "Learn about the future of remote work driven by AI collaboration tools.",
    color: "blue",
  },
  {
    time: "01:30 PM - 02:15 PM",
    title: "Networking Luncheon",
    description: "Enjoy lunch and continue networking with industry peers.",
    color: "purple",
  },
  {
    time: "02:15 PM - 03:00 PM",
    title: "Data+AI: Building an End-To-End Data Strategy for Analytics and Generative AI",
    description: "Developing a complete data pipeline to power generative AI capabilities.",
    color: "blue",
  },
  {
    time: "03:00 PM - 03:45 PM",
    title: "Responsible AI: Navigating Complexities in Ethical AI Implementation",
    description: "Discussing fairness, accountability, and transparency in AI systems.",
    color: "purple",
  },
  {
    time: "03:45 PM - 05:00 PM",
    title: "Networking Hi Tea & Conclusion",
    description: "Wrap up the day with refreshments and meaningful connections.",
    color: "blue",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <MovingStrip color="bg-neon-purple" />
      <About />
      <MovingStrip color="bg-neon-blue" />
      <KeyPoints />
      <PastHighlights />
      
      <div className=" bg-black">
        <StickyWrapper />
      </div>
      
      {/* Include the Agenda component with agendaData as prop */}
      <Agenda items={agendaData} />

      <PartnershipCTA />
      <KeyTheme />
      <ShouldAttend />
      <WhoShouldSponsor />
      <Register />
      <Footer />
    </div>
  );
};

export default Index;
