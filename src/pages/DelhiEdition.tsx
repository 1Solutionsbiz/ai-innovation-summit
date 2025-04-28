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
        description: "Kickstart the day by connecting with fellow attendees over breakfast. A relaxed environment to meet peers, speakers, and industry leaders.",
        color: "purple",
    },
    {
        time: "09:30 – 09:45 AM",
        title: "Welcome Note & Opening Remarks",
        description: "A formal welcome from the hosts outlining the summit vision and the day's agenda.",
        color: "blue",
    },
    {
        time: "09:45 – 10:15 AM",
        title: "Keynote: 'From Prompt to Impact – Rewiring the Enterprise with AI'",
        description: "A visionary keynote on how AI is transforming business models, enabling enterprise agility, and reshaping leadership mindsets.",
        color: "purple",
    },
    {
        time: "10:15 – 11:00 AM",
        title: "Panel Discussion: 'From AI Vision to Enterprise Value: Scaling with Strategy, Governance & ROI'",
        description: "Senior leaders decode what it takes to scale AI initiatives from pilots to enterprise-wide deployment, with a focus on value realization.",
        color: "blue",
    },
    {
        time: "11:00 – 11:15 AM",
        title: "Tea / Coffee Break",
        description: "A short refreshment break and an opportunity for informal networking.",
        color: "purple",
    },
    {
        time: "11:15 – 12:00 PM",
        title: "CXO Fireside Chat: 'Bridging the Expectation Gap: CEO-CIO Conversations on AI Impact'",
        description: "A candid discussion between CEOs and CIOs on aligning innovation goals, investment expectations, and measuring real AI outcomes.",
        color: "blue",
    },
    {
        time: "12:00 – 12:45 PM",
        title: "Panel: 'Agentic AI & the Future of Autonomous Workflows'",
        description: "Experts explore how autonomous agents and generative models are redesigning business processes and unlocking new efficiencies.",
        color: "purple",
    },
    {
        time: "12:45 – 01:30 PM",
        title: "Panel: 'Data, AI & the New Age of Business Intelligence'",
        description: "An exploration of how AI is transforming BI—from predictive analytics to AI-driven decision-making across functions.",
        color: "blue",
    },
    {
        time: "01:30 – 02:30 PM",
        title: "Networking Lunch",
        description: "A seated networking lunch with curated table topics and hosted discussion zones.",
        color: "purple",
    },
    {
        time: "02:30 – 03:15 PM",
        title: "Panel: 'Securing the AI Stack: Cybersecurity in the Age of GenAI'",
        description: "With AI systems generating and processing critical enterprise data, cybersecurity is more crucial than ever. This panel explores how to secure GenAI tools, manage risks around AI-generated code, and ensure robust governance for enterprise-grade AI deployments.",
        color: "blue",
    },
    {
        time: "03:15 – 04:00 PM",
        title: "Panel: 'AI Readiness Across Industries: What's Working, What's Not'",
        description: "Sector leaders share key lessons and frameworks for successfully navigating the AI maturity curve.",
        color: "purple",
    },
    {
        time: "04:00 – 04:45 PM",
        title: "Fireside Chat: 'Agentic AI, Strategic Analytics & the Road Ahead'",
        description: "A forward-looking discussion on the enterprise AI roadmap for 2025 and beyond—covering regulation, scale, and responsible innovation.",
        color: "blue",
    },
    {
        time: "04:45 – 05:00 PM",
        title: "Closing Note & Call to Action",
        description: "Key takeaways, partner recognitions, and next steps for the AI Innovation community.",
        color: "purple",
    },
    {
        time: "05:00 – 07:00 PM",
        title: "Cocktails, Networking & CXO Mixer",
        description: "Unwind and connect over cocktails in a casual CXO-only networking environment.",
        color: "blue",
    }
];

const socialLinks = {
    linkedin: "https://www.linkedin.com/showcase/guild-ai-innovation-summit/about/?viewAsMember=true",
};
const DelhiEdition = () => {
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
                date="December 2025 | Delhi-NCR"
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

export default DelhiEdition;
