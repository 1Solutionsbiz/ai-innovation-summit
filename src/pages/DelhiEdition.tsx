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

import PastPartners from "@/components/PastPartners";

import DemandVideoHome from "@/components/DemandVideoHome";
import { useEffect } from "react";
// import { Speakers } from "@/components/Speakers";

import SocialWall from "@/components/SocialWall";



const agendaData: AgendaItem[] = [
    {
        time: "09:00 – 10:00 AM",
        title: "Registration & Networking Breakfast",
        description: "",
        color: "purple",
    },
    {
        time: "10:00 – 10:15 AM",
        title: "Keynote Address: AI Made in India – Innovation for 1.4 billion and beyond",
        description: "Explores how India is pioneering scalable, purpose-driven AI solutions for 1.4 billion people while creating models that can influence global industries and societies.",
        color: "blue",
    },
    {
        time: "10:35 – 11:20 AM",
        title: "Session 1: From Prompt to Impact – Scaling AI Across the Enterprise",
        description: "How leading enterprises are moving beyond experimentation into scaled AI adoption. Covers cultural shifts, cloud-native foundations, workforce readiness, and governance models.",
        color: "purple",
    },
    {
        time: "11:20 – 11:50 AM",
        title: "Partner Innovation Showcase",
        description: "Technology partners share live case studies and enterprise AI deployments.",
        color: "blue",
    },
    {
        time: "11:50 – 12:35 PM",
        title: "Session 2: Beyond GenAI – Towards Self-Learning Workflows",
        description: "A deep dive into intelligent automation: from RPA to agentic automation. Industry leaders discuss how self-learning workflows boost decision velocity and reshape operations.",
        color: "purple",
    },
    {
        time: "12:35 – 01:05 PM",
        title: "CEO–CIO Leadership Dialogue: The AI Imperative",
        description: "An exclusive fireside conversation on aligning AI investments with enterprise growth, resilience, and long-term transformation.",
        color: "blue",
    },
    {
        time: "01:05 – 02:00 PM",
        title: "Networking Lunch",
        description: "",
        color: "purple",
    },
    {
        time: "02:00 – 02:45 PM (Parallel Track)",
        title: "Delhi Spotlight Parallel Tracks",
        description: "Track A: AI in BFSI – Trust, Risk & Digital Transformation How BFSI leaders are using AI for fraud etection, risk modelling, credit scoring, and customer engagement.Track B: AI in Manufacturing – Smart Factories & redictive Supply Chains Automotive and electronics giants discuss predictive maintenance, quality assurance, digital twins, and AI in supply chain optimization.Track C: AI in Customer Experience – Hyper-Personalization at Scale FMCG, retail, and consumer goods leaders explore personalization, omnichannel strategies, demand forecasting, and AI-driven product innovation.",
        color: "blue",
    },
    {
        time: "02:45 – 03:30 PM (Parallel Track)",
        title: "Partner Case Studies & Demos",
        description: "Focused showcases from partners on applied AI solutions for BFSI, manufacturing, and CX.",
        color: "purple",
    },
    {
        time: "03:30 – 04:15 PM",
        title: "Session 3: Fortifying the AI Enterprise – Risks & Defenses in the GenAI Era",
        description: "Examines AI-driven vulnerabilities — from generated code risks to data security. Panelists share frameworks for building secure, trustworthy AI ecosystems.",
        color: "blue",
    },
    {
        time: "04:15 – 05:00 PM",
        title: "Session 4: The India AI Playbook – Lessons from Industry Leaders",
        description: "CXOs from services, manufacturing, BFSI, and consumer goods share what’s working, what’s failing, and practical roadmaps for building AI maturity.",
        color: "purple",
    },
    {
        time: "05:00 – 05:15 PM	",
        title: "Closing Note & Call to Action",
        description: " ",
        color: "blue",
    },
    {
        time: "06:00 – 09:00 PM",
        title: "Exclusive CIO/CTO Gala Dinner & Networking Cocktails (Invite-only, 50 Leaders)",
        description: "An intimate evening of dialogue with India’s top technology leaders on “Leading the AI-First Enterprise.",
        color: "purple",
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

{/* Embed Social Wall Show here */}
<SocialWall />


            <About />
            <MovingStrip color="bg-neon-blue" />
            <KeyPoints />
             {/* <Speakers /> */}

            <div id="partners"></div>
              <PastPartners />

            {/* Include the Agenda component with agendaData as prop */}
            <Agenda items={agendaData} eventDetails={{
                date: "Dec 2025",
                venue: "To be Announced ",
                audience: "250+ Enterprise Technology Leaders"
            }} />
           
            <KeyTheme />

            <PastHighlights videoSrc="/videos/Yt_promo_10_sept.mp4" />

            <DemandVideoHome />
            <PartnershipCTA />


            <ShouldAttend />
            <WhoShouldSponsor />

            <Footer socialLinks={socialLinks} />
        </div>
    );
};

export default DelhiEdition;
