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
      title: "Keynote Session: 'From Innovation to Impact – Rewiring the Enterprise with AI'",
      description: "Examine strategies to transform AI projects from experimental investments into measurable business outcomes. Understand the key principles of aligning AI initiatives closely with strategic priorities to ensure tangible impact on enterprise performance and decision-making.",
      color: "purple",
    },
    {
      time: "10:15 – 11:00 AM",
      title: "Panel Discussion: 'From AI Vision to Enterprise Value: Scaling with Strategy, Governance & ROI'",
      description: "A focused discussion on the frameworks needed for scaling AI beyond pilot phases. Panellists share practical insights on strategic alignment, robust governance structures, overcoming implementation challenges, and defining clear metrics to ensure measurable returns from AI investments.",
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
      title: "CXO Fireside Chat: 'Bridging the Expectation Gap: CEO-CIO Conversations on AI Impact'",
      description: "A candid conversation between a leading CEO and CIO, uncovering how they align AI strategies with business priorities. Gain insights on managing executive expectations, measuring success, and collaboratively driving AI-enabled growth across the organization.",
      color: "blue",
    },
    {
      time: "12:00 – 12:45 PM",
      title: "Panel: 'Agentic AI & the Future of Autonomous Workflows'",
      description: "Explore the implementation and operationalization of autonomous AI agents in enterprise processes. Panellists will discuss practical applications, real‑world case studies, potential barriers to adoption, and measurable benefits in terms of efficiency, accuracy, and reduced human intervention.",
      color: "purple",
    },
    {
      time: "12:45 – 01:30 PM",
      title: "Panel: 'Data, AI & the New Age of Business Intelligence'",
      description: "Discuss how leading enterprises leverage AI‑driven analytics to enhance business intelligence. Panellists will cover data strategies, predictive and prescriptive analytics, and transforming traditional BI functions into proactive, intelligent decision‑support systems.",
      color: "blue",
    },
    {
      time: "01:30 – 02:30 PM",
      title: "Networking Lunch",
      description: "",
      color: "purple",
    },
    {
      time: "02:30 – 03:15 PM",
      title: "Panel: 'Securing the AI Stack: Cybersecurity in the Age of GenAI'",
      description: "Examine the cybersecurity implications of widespread Generative AI adoption. Panellists address critical security concerns, risks associated with AI‑generated code and data, and best practices to ensure secure and responsible deployment of AI across enterprise IT infrastructures.",
      color: "blue",
    },
    {
      time: "03:15 – 04:00 PM",
      title: "Panel: 'AI Readiness Across Industries: What’s Working, What’s Not'",
      description: "An industry‑focused discussion highlighting experiences from manufacturing, BFSI, retail, and pharma sectors. Understand successful approaches, common pitfalls, and practical recommendations for building AI readiness and maturity within diverse organizational contexts.",
      color: "purple",
    },
    {
      time: "04:00 – 04:45 PM",
      title: "Closing Panel: 'Agentic AI, Strategic Analytics & the Road Ahead'",
      description: "Gain forward‑looking insights into the evolving role of Agentic AI and strategic analytics in business. Speakers will explore anticipated trends, emerging opportunities, regulatory considerations, and outline key priorities enterprises must embrace for future AI‑driven success.",
      color: "blue",
    },
    {
      time: "04:45 – 05:00 PM",
      title: "Closing Note & Call to Action",
      description: "",
      color: "purple",
    },
    {
      time: "05:00 – 07:00 PM",
      title: "Cocktails, Networking & CXO Mixer",
      description: "Unwind and connect over cocktails in a casual CXO‑only networking environment.",
      color: "blue",
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
                isRegistrationActive={false}
                registrationButtonName="Registration Closed"
                disabledButtonName="Register Now"
            />
            <Hero
                backgroundImage="/hero-banner.png"
                contentBackgroundImage="/hero-banner-image.svg"
                contentPosition="right"
                heading="Shaping the Future with AI"
                subheading="From prompt to impact"
                body="Join the brightest minds in Artificial Intelligence and Innovation at the most impactful AI Summit mastering AI and securing the future."
                date="October 2025 | Bangalore "

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
            <PastHighlights />

            {/* <div className=" bg-black">
        <StickyWrapper />
      </div> */}
            <DemandVideoHome />

            {/* Include the Agenda component with agendaData as prop */}
            <Agenda items={agendaData} eventDetails={{
                date: "09 July 2025",
                venue: "Taj Santacruz, Mumbai",
                audience: "200+ Enterprise Technology Leaders"
            }} />

            <PartnershipCTA />
            <KeyTheme />
            <ShouldAttend />
            <WhoShouldSponsor />
            <Footer socialLinks={socialLinks} />
        </div>
    );
};

export default BangaloreEdition;
