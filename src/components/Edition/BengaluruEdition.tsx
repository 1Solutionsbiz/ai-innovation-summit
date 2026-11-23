import { Header } from "@/components/Header";

import { PastHighlights } from "@/components/PastHighlights";
import { Footer } from "@/components/Footer";

import Objectives from "./Objectives";
import StatsSection from "./StatsSection";
import SpeakersSection from "./SpeakersSection";
import Glimpses from "./Glimpses";
import Agenda, { AgendaItem } from "../Agenda";
import ShouldAttend from "../ShouldAttend";
import LeaderQuotes from "./LeaderQuotes";
import WatchDemand from "./DemadVideos";
import { PastEventHero } from "./PastEventHero";
import { useEffect } from "react";

import PastPartners from "@/components/PastPartners";


const sections = [
  {
    city: 'Bengaluru',
    imageName: 'bangaluru',
    videoLinks: [
      'https://www.youtube.com/watch?v=wBaEOg_21bM',
      'https://www.youtube.com/watch?v=UozBEohA7Qg',
      'https://www.youtube.com/watch?v=hY7Axj-B7jo',
      'https://www.youtube.com/watch?v=WVaRQYI-ROI',
      'https://www.youtube.com/watch?v=hQlpZrvsdZ4',
      'https://www.youtube.com/watch?v=3lvxHZ4TG0Y',
      'https://www.youtube.com/watch?v=twjvz-eNo-8',
    ],
  },
];

const speakers = [
  { name: 'Rejin Surendran', designation: 'Global CIO', company: 'Wipro Enterprises Limited', image: 'https://olive-elk-842602.hostingersite.com/edition/speakers/rejin-surendran.jpg' },
  { name: 'Sudeep Dey', designation: 'Chief Information Officer', company: 'Healthcare Global Enterprises Limited', image: 'https://olive-elk-842602.hostingersite.com/edition/speakers/sudeep-dey.jpg' },
  { name: 'Siva Perubotla', designation: 'CIO & CISO', company: 'Brillio', image: 'https://olive-elk-842602.hostingersite.com/edition/speakers/siva-perubotla.jpg' },
  { name: 'Kamesh Babu R', designation: 'CISO, Global Head of IT and Cybersecurity', company: 'Subex', image: 'https://olive-elk-842602.hostingersite.com/edition/speakers/kamesh-babu-r.jpg' },
  { name: 'Dr. Shivani Rai Gupta', designation: 'Chief Data Scientist', company: 'Jio', image: 'https://olive-elk-842602.hostingersite.com/edition/speakers/dr.-shivani-rai-gupta.jpg' },
  { name: 'Ajay Chawla', designation: 'Global Head of IT and Infosec', company: 'Sterlite Technologies Limited', image: 'https://olive-elk-842602.hostingersite.com/edition/speakers/ajay-chawla.jpg' },
  { name: 'Anbu David', designation: 'Vice President & Head- Information Security, IT Ops & ITSM, DPO and Regional CISO for APAC', company: 'Holcim', image: 'https://olive-elk-842602.hostingersite.com/edition/speakers/anbu-david.jpg' },
  { name: 'Prakash Narayanan', designation: 'Head of Intelligent Automation', company: 'Cyient', image: 'https://olive-elk-842602.hostingersite.com/edition/speakers/prakash-narayanan.jpg' },
  { name: 'Sudarshan Rajagopal', designation: 'Partner Technology Consulting - Cyber Security', company: 'EY', image: 'https://olive-elk-842602.hostingersite.com/edition/speakers/sudharshan.jpg' },
  { name: 'Sunil David', designation: 'Ex-Regional Director(IOT)', company: 'AT&T', image: 'https://olive-elk-842602.hostingersite.com/edition/speakers/sunil-david.jpg' },
  { name: 'Rakesh Ravuri', designation: 'CTO - SVP Engineering', company: 'Publicis Sapient', image: 'https://olive-elk-842602.hostingersite.com/edition/speakers/rakesh-ravuri.jpg' },
  { name: 'Philip Varughese Vayarakunnil', designation: 'Global Head - Cyber Risk & Compliance, Applied Intelligence, Platforms & Engineering ; DXC Security', company: 'DXC Technology', image: 'https://olive-elk-842602.hostingersite.com/edition/speakers/philip-varughese.jpg' },
  { name: 'Mandar Joshi', designation: 'Partner - Management Consulting Leader Digital and Technology Implementation', company: 'KPMG', image: 'https://olive-elk-842602.hostingersite.com/edition/speakers/mandar-joshi.jpg' },
  { name: 'Vijay Gurumurthy', designation: 'Director IT', company: 'Capgemini', image: 'https://olive-elk-842602.hostingersite.com/edition/speakers/vijay-gurumurthy.jpg' },
  { name: 'Syed Ehsan Amanulla', designation: 'SVP & CISO', company: 'Amicorp Group', image: 'https://olive-elk-842602.hostingersite.com/edition/speakers/syed-ehsan.jpg' },
  { name: 'Mrinmoy Dey', designation: 'Vice President - Chief Information Security Officer', company: 'Lendingkart', image: 'https://olive-elk-842602.hostingersite.com/edition/speakers/mrinmoy-dey.jpg' },
  { name: 'Sameer Salunke', designation: 'Partner', company: 'KPMG', image: 'https://olive-elk-842602.hostingersite.com/edition/speakers/sameer-salunke.jpg' },
  { name: 'Dinesh Kumar Kotha', designation: 'CEO', company: 'Ixigo Trains and ConfirmTkt', image: 'https://olive-elk-842602.hostingersite.com/edition/speakers/dinesh-kumar.jpg' },
  { name: 'Md Zeeshan Ali', designation: 'Lead Solutions Engineering', company: 'Slack', image: 'https://olive-elk-842602.hostingersite.com/edition/speakers/zeeshan.jpg' },
  { name: 'Nithyalakshmi Subramanian', designation: 'Head of Data & Analytics – AMEA', company: 'Kellanova', image: 'https://olive-elk-842602.hostingersite.com/edition/speakers/nithy.png' },
  { name: 'Paras Nigam', designation: 'Vice President, Data Science & Engineering', company: 'KnowBe4', image: 'https://olive-elk-842602.hostingersite.com/edition/speakers/paras-nigam.png' },
  { name: 'Shilpa Singh', designation: 'Director of Cloud Technology', company: 'Virtusa', image: 'https://olive-elk-842602.hostingersite.com/edition/speakers/shilpa.png' },
  { name: 'Kamesh Srinivasan', designation: 'Partner- Data, AI, Automation', company: 'KPMG India', image: 'https://olive-elk-842602.hostingersite.com/edition/speakers/kamesh-babu-r.jpg' },
  { name: 'Manish Shukla', designation: 'Head of Generative AI Platform', company: 'NatWest Group', image: 'https://olive-elk-842602.hostingersite.com/edition/speakers/manish-shukla.png' },
];
const quotesData = [
  {
    image: "https://olive-elk-842602.hostingersite.com/edition/leaders/mukesh-jain.png",
    name: "Mukesh Jain",
    title: "CTO and VP - Leading Ai Based Innovation @ Capgemini",
    quote:
      "When we talk of digital transformation, it is not just about applications or being digital, it is about how we leverage data and the power of data to be able to get more value.",
  },
  {
    image: "https://olive-elk-842602.hostingersite.com/edition/leaders/amit-joshi.png",
    name: "Amit Joshi",
    title: "CISO Cement Business, Adani Enterprises",
    quote:
      "When you talk about building an Ai kind of a solution, it really depends on the data being considered, consumed and injected into the solution for correct prediction and generation of data-oriented solution.",
  },
];
const agendaData: AgendaItem[] = [
  {
    time: "09:00 – 09:45 AM",
    title: "Registration",
    description: "",
    color: "purple",
  },
  {
    time: "10:00 – 11:00 AM",
    title: "Cloud, AI and Digital Transformation: The Whole Is Greater Than the Sum of Its Parts.",
    description: "",
    color: "blue",
  },
  {
    time: "11:00 – 11:30 AM",
    title: "Networking Tea/Coffee Break",
    description: "",
    color: "purple",
  },
  {
    time: "11:30 – 12:15 PM",
    title: "Rethinking Zero-Trust: An AI-Based Approach to Cybersecurity",
    description: "",
    color: "blue",
  },
  {
    time: "12:15 – 12:45 PM",
    title: "How Humans and AI-Driven Agents Propel Work Success",
    description: "",
    color: "purple",
  },
  {
    time: "12:45 – 01:30 PM",
    title: "Re-imagining the Future of Work: AI-driven Collaboration and Remote Productivity",
    description: "",
    color: "blue",
  },
  {
    time: "01:30 – 02:15 PM",
    title: "Networking Luncheon",
    description: "",
    color: "purple",
  },
  {
    time: "02:15 – 03:00 PM",
    title: "Data+AI: Building an End-To-End Data Strategy for Analytics and Generative AI",
    description: "",
    color: "blue",
  },
  {
    time: "03:00 – 03:45 PM",
    title: "Responsible AI: Navigating Complexities in Ethical AI Implementation",
    description: "",
    color: "purple",
  },
  {
    time: "03:45 – 05:00 PM",
    title: "Networking Hi Tea & Conclusion",
    description: "",
    color: "blue",
  }
];
const socialLinks = {
  twitter: "https://x.com/CloudAiSummit",
  facebook: "https://www.facebook.com/people/CloudAi-Innovation-Summit/61555887803398/",
  instagram: "https://www.instagram.com/cloudaiinnovationsummit/",
  linkedin: "https://www.linkedin.com/company/cloud-ai-innovation-summit/",
};
const BengaluruEdition = () => {
  const section = sections[0];
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);

  return (
    <div className="min-h-screen">

      <Header
        isRegistrationActive={false}
        registrationButtonName="Registration Closed"
        disabledButtonName="Registration Closed"
      />
      <PastEventHero
        backgroundImage="https://olive-elk-842602.hostingersite.com/past-hero-banner.png"
        contentPosition="left"
        contentBackgroundImage=""
        heroImage="https://olive-elk-842602.hostingersite.com/cloud_new.png"
        subheading=""
        date="7th November 2024, Bengaluru"
      />
      <PastHighlights videoSrc="https://olive-elk-842602.hostingersite.com/videos/Yt_promo_10_sept.mp4" />

      <Objectives />
      <StatsSection
        stats={[
          { label: 'Attendees', value: '200+' },
          { label: 'Speakers', value: '30+' },
          { label: 'Sessions', value: '5+' },
          { label: 'Networking Hrs', value: '8+ hrs' },
        ]}
        images={[
          'https://olive-elk-842602.hostingersite.com/edition/stats/1.png',
          'https://olive-elk-842602.hostingersite.com/edition/stats/2.png',
          'https://olive-elk-842602.hostingersite.com/edition/stats/3.png',
          'https://olive-elk-842602.hostingersite.com/edition/stats/4.png',
          'https://olive-elk-842602.hostingersite.com/edition/stats/5.png',
        ]}
      />


      <SpeakersSection speakers={speakers} />

      <ShouldAttend />
      <Glimpses />

      <LeaderQuotes quotes={quotesData} />
      <WatchDemand {...section} />

      <PastPartners />

      <Agenda items={agendaData} />
      <Footer socialLinks={socialLinks} />
    </div>
  );
};

export default BengaluruEdition;
