import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import MovingStrip from "@/components/MovingStrip";
import { About } from "@/components/About";
import { KeyPoints } from "@/components/KeyPoints";
import { PastHighlights } from "@/components/PastHighlights";
import { Footer } from "@/components/Footer";

import KeyTheme from "@/components/KeyTheme";

import ShouldAttend from "@/components/ShouldAttend";
import { WhoShouldSponsor } from "@/components/WhoShouldSponsor";

import Agenda, { AgendaItem } from "@/components/Agenda"; // Import Agenda and AgendaItem type
import { PartnershipCTA } from "@/components/PartnershipCTA";
import DemandVideoHome from "@/components/DemandVideoHome";
import { useEffect } from "react";
import { BengaloreRegisterForm } from "@/components/BengaloreRegisterForm";
import ShortAgenda from "@/components/ShortAgenda";


const agendaData: AgendaItem[] = [
  {
    time: "09:00 – 09:30 AM",
    title: "Registration & Networking Breakfast",
    description: "",
    color: "purple",
  },
  {
    time: "09:30 – 09:45 AM",
    title: "Welcome Note & Opening Remarks",
    description: "",
    color: "blue",
  },
  {
    time: "09:45 – 10:15 AM",
    title: "Keynote Address: The India AI Story: Scaling Innovation with Purpose",
    description: "India is shaping a purposeful AI narrative—balancing innovation with scale, ethics, and impact. This keynote outlines the nation's strategic edge in AI adoption, homegrown capabilities, and its role in global AI leadership.",
    color: "purple",
  },
  {
    time: "10:15 – 11:00 AM",
    title: "Session 1: Architecting AI-First Enterprises – From Cloud to Culture",
    description: "A focused discussion on how leading enterprises is reimagining their architecture, infrastructure, and culture to become truly AI-first. From cloud-native foundations to data pipelines and workforce readiness, this session unveils the strategic blueprint to scale AI responsibly.",
    color: "blue",
  },
  {
    time: "11:00 – 11:15 AM",
    title: "Tea / Coffee Break",
    description: "",
    color: "purple",
  },
  {
    time: "11:15 – 12:00 PM",
    title: "Session 2: CXO Fireside Chat- The CEO-CIO Playbook for Disruptive Growth",
    description: "A candid conversation decodes how visionary CEOs and CIOs align technology, strategy, and culture to unlock non-linear growth. From AI bets to agile reinvention—discover leadership lessons from the frontlines of enterprise transformation.",
    color: "blue",
  },
  {
    time: "12:00 – 12:45 PM",
    title: "Session 3: Agentic Automation – Beyond GenAI to Self-Driving Workflows",
    description: "Move beyond prompt-based AI to autonomous, self-learning workflows. Industry leaders discuss how agentic automation is redefining enterprise operations, boosting decision velocity, and reshaping business processes in a world where AI can act, decide, and evolve.",
    color: "purple",
  },
  {
    time: "12:45 – 01:30 PM",
    title: "Session 4: Data, AI & the New Age of Business Intelligence",
    description: "This session examines how leading enterprises leverage AI-driven analytics to enhance business intelligence. Panelists will cover data strategies, predictive and prescriptive analytics, and the transformation of traditional BI functions into proactive, intelligent decision-support systems.",
    color: "blue",
  },
  {
    time: "01:30 – 02:30 PM",
    title: "Networking Lunch",
    description: "",
    color: "purple",
  }
];
const shortAgendaData1: AgendaItem[] = [
  {
    time: "02:30 – 03:10 PM",
    title: "Special Session 1: AI-Powered Lending & Risk – Rewiring BFSI DNA",
    description: "A high-impact discussion with BFSI leaders on how AI is transforming credit underwriting, fraud management, and operational risk, while enabling faster, more inclusive financial services.",
    color: "purple",
  },
  {
    time: "03:10 – 04:00 PM",
    title: "Spotlight Session 1: GenAI for FinTech, InsurTech & Customer Personalization",
    description: "Partner Spotlight",
    color: "blue",
  },

];
const shortAgendaData2: AgendaItem[] = [
  {
    time: "02:30 – 03:10 PM",
    title: "Special Session 2: Founders’ Playbook: Building AI-Native Startups",
    description: " Fast-growing founders share how they embed AI at the core of their products and culture—from real-time decision-making to LLM-driven platforms—and what it takes to scale responsibly.",
    color: "purple",
  },
  {
    time: "03:10 – 04:00 PM",
    title: "Spotlight Session 2: AI-Powered Growth Engines – Martech, Sales, and Ops",
    description: "Partner Spotlight",
    color: "blue",
  },

];

const shortAgendaData3: AgendaItem[] = [
  {
    time: "02:30 – 03:15 PM",
    title: "Session 5: Securing the AI Stack: Cybersecurity in the Age of GenAI",
    description: "This session examines the cybersecurity implications of widespread Generative AI adoption. Panelists will address critical security concerns, risks associated with AI-generated code and data, and best practices to ensure secure and responsible deployment of AI across enterprise IT infrastructures.",
    color: "purple",
  },
  {
    time: "03:15 – 04:00 PM",
    title: "Session 6: GCC Leaders on Global AI Delivery from India",
    description: "Global Capability Centers (GCCs) are driving enterprise AI innovation at scale from India. This session gathers GCC heads to discuss delivery models, talent strategy, and India's growing leadership in building global AI platforms from the ground up.",
    color: "blue",
  },
  {
    time: "04:00 – 04:45 PM",
    title: "Session 7: AI Readiness Across Industries: What's Working, What's Not",
    description: "This session presents an industry-focused discussion featuring experiences from the manufacturing, BFSI, retail, and pharma sectors. Panelists will highlight successful approaches, common pitfalls, and practical recommendations for building AI readiness and maturity across diverse organizational contexts.",
    color: "purple",
  },
  {
    time: "04:45 – 05:00 PM",
    title: "Closing Note & Call to Action",
    description: "",
    color: "blue",
  },
  {
    time: "05:00 – 07:00 PM",
    title: "Networking & CXO Mixer",
    description: "Unwind and connect over cocktails in a casual CXO-only networking environment.",
    color: "purple",
  }
];
const socialLinks = {
  linkedin: "https://www.linkedin.com/showcase/guild-ai-innovation-summit/about/?viewAsMember=true",
};
const BangaloreEdition = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);
  return (
    <div className="min-h-screen">
      <Header

      />
      <Hero
        backgroundImage="/hero-banner.png"
        contentBackgroundImage="/hero-banner-image.svg"
        contentPosition="right"
        heading="Shaping the Future with AI"
        subheading="From prompt to impact"
        body="Join the brightest minds in Artificial Intelligence and Innovation at the most impactful AI Summit mastering AI and securing the future."
        date="August 2025 | The Leela Palace, Bengaluru"

        stats={[
          { value: "25+", label: "Speakers" },
          { value: "8+", label: "Hrs" },
          { value: "200+", label: "Attendees" },
        ]}

      />
      <MovingStrip color="bg-neon-purple" />
      <About />
      <MovingStrip color="bg-neon-blue" />
      <KeyPoints />

      {/* Include the Agenda component with agendaData as prop */}
      <Agenda items={agendaData} eventDetails={{
        date: "03 September 2025 ",
        venue: "The Leela Palace, Bengaluru",
        audience: "200+ Enterprise Technology Leaders"
      }} />




      <div className="bg-black text-white p-4 ">
        {/* Common Header */}
        <div className="text-center">
          <h1 className="text-neon-purple font-bold text-2xl md:text-3xl font-orbitron">
            02:30 – 04:00 PM | AI in Action: Sector-Focused & Thematic Parallel Tracks
          </h1>
          <p className="mt-2">These sessions will run in parallel across different halls</p>
        </div>

        {/* Parallel Tracks - Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 px-10">
          {/* Track 1 */}
          <div className="border border-gray-700 p-4 ">
            <h3 className="font-bold text-lg text-center font-orbitron text-neon-blue">
              Track 1: Fintech & Financial Services Innovation
            </h3>
            <p className="text-center mb-4">Shaping the Future of BFSI with AI & Automation</p>
            <ShortAgenda items={shortAgendaData1} />
          </div>

          {/* Track 2 */}
          <div className="border border-gray-700 p-4 ">
            <h3 className="font-bold text-lg text-center font-orbitron text-neon-blue">
              Track 2: AI x Startups – Scaling Ambitions with Intelligence
            </h3>
            <p className="text-center mb-4">How India's Boldest Startups are Leveraging AI for Disruption</p>
            <ShortAgenda items={shortAgendaData2} />
          </div>
        </div>
      </div>

      {/* Main Hall Section */}
      <div className="bg-black text-white p-4  pb-20">
        <h1 className="text-neon-purple font-bold text-2xl md:text-3xl text-center font-orbitron">
          Main Hall Programming
        </h1>
        <ShortAgenda items={shortAgendaData3} />
      </div>
      <KeyTheme />
      <PastHighlights />
      <DemandVideoHome />
      <PartnershipCTA />
      <ShouldAttend />
      <WhoShouldSponsor />
      <BengaloreRegisterForm />
      <Footer socialLinks={socialLinks} />
    </div>
  );
};

export default BangaloreEdition;
