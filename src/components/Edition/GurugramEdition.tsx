import { Header } from "@/components/Header";

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



const sections = [
  {
    city: 'Gurugram',
    imageName: 'gurugram',
    videoLinks: [
      'https://www.youtube.com/watch?v=nNL8q-FzTJY',
      'https://youtu.be/8xY2-fVdkMc',
      'https://www.youtube.com/watch?v=gz5LfjyRBM0',
      'https://www.youtube.com/watch?v=oWnCSnK35kU&list=TLGG2hVAM1ls04YyMzA0MjAyNQ',
    ],
  },
];

const speakers = [
  { name: 'Himanshu Sharma', designation: 'GM-Head of ICDC (Integrated Cyber Defence Center)', company: 'Gramax (Subsidiary of GMR Group)', image: '/edition/speakers/gurugram/himanshu.png' },
  { name: 'Rajiv Sikka', designation: 'CIO', company: 'Medanta', image: '/edition/speakers/gurugram/rajiv.png' },
  { name: 'Shiva Singh', designation: 'Director Technology', company: 'Moglix', image: '/edition/speakers/gurugram/shiva.png' },
  { name: 'Vinod Bhat', designation: 'CIO', company: 'Vistara', image: '/edition/speakers/gurugram/vinod.png' },
  { name: 'Himaghna Banerjee', designation: 'Business Value Services Manager', company: 'Salesforce', image: '/edition/speakers/gurugram/himaghna.png' },
  { name: 'Amit Singh', designation: 'Partner', company: 'EY', image: '/edition/speakers/gurugram/amit.png' },
  { name: 'Manish Sehgal', designation: 'Partner, Risk Advisory', company: 'Deloitte India', image: '/edition/speakers/gurugram/manish.png' },
  { name: 'Daya Prakash', designation: 'Founder', company: 'Talent On Lease', image: '/edition/speakers/gurugram/daya.png' },
  { name: 'Aakash Bhutani', designation: 'Head of Enterprise Application', company: 'HT Media', image: '/edition/speakers/gurugram/akash.png' },
  { name: 'Puneet Wadwa', designation: 'Head IT & Digital', company: 'Hatch', image: '/edition/speakers/gurugram/puneet.png' },
  { name: 'Ekhlaque Bari', designation: 'Founder', company: 'XdotO Consulting and Coaching', image: '/edition/speakers/gurugram/ekhlaque.png' },
  { name: 'Rajnish Virmani', designation: 'CIO Advisor', company: 'Zoom Video Communication', image: '/edition/speakers/gurugram/rajnish.png' },
  { name: 'Nitin Dhingra', designation: 'CDO & Vice President', company: 'Hindware', image: '/edition/speakers/gurugram/nitin.png' },
  { name: 'Mohit Malik', designation: 'CTO', company: 'Chaayos', image: '/edition/speakers/gurugram/mohit.png' },
  { name: 'Ambuj Bhalla', designation: 'CISO', company: 'BharatPe', image: '/edition/speakers/gurugram/ambuj.png' },
  { name: 'Vinay Kumar', designation: 'CIO', company: "McDonald's India", image: '/edition/speakers/gurugram/vinay.png' },
  { name: 'Rishi Aggarwal', designation: 'Senior Director IT', company: 'Concentrix', image: '/edition/speakers/gurugram/rishi.png' },
];

const quotesData = [
  {
    image: "/edition/leaders/mohit-malik.png",
    name: "Mohit Malik",
    title: "CIO, Chaayos",
    quote:
      "Over the next 5 years, Gen AI will eliminate the repetitive aspects. While all manual tasks will be automated, the creative aspect will remain untouched.",
  },
  {
    image: "/edition/leaders/vinod-bhat.png",
    name: "Vinod Bhat",
    title: "CIO, Vistara",
    quote:
      "The way tons of data is getting created in the last 3-4 years, the amount of data which is getting generated is humongous, so what we need is an infrastructure which can basically manage on-demand situation, and the infrastructure which is a secure infrastructure and has a lot of inbuilt facilities.",
  },
];
const socialLinks = {
  twitter: "https://x.com/CloudAiSummit",
  facebook: "https://www.facebook.com/people/CloudAi-Innovation-Summit/61555887803398/",
  instagram: "https://www.instagram.com/cloudaiinnovationsummit/",
  linkedin: "https://www.linkedin.com/company/cloud-ai-innovation-summit/",
};
const GurugramEdition = () => {
  const section = sections[0];

  return (
    <div className="min-h-screen">
      <Header
        isRegistrationActive={false}
        registrationButtonName="Registration Closed"
        disabledButtonName="Registration Closed"
      />
      <PastEventHero
        backgroundImage="/past-hero-banner.png"
        contentPosition="left"
        contentBackgroundImage=""
        heroImage="/cloud_new.png"
        subheading="Unlocking the Future: Navigating the Confluence of Cloud and AI"
        date="5th March 2024, Gurugram"
      />

      <StatsSection
        stats={[
          { label: 'Attendees', value: '200+' },
          { label: 'Speakers', value: '30+' },
          { label: 'Sessions', value: '5+' },
          { label: 'Networking Hrs', value: '8+ hrs' },
        ]}
        images={[
          '/edition/stats/gurugram/1.png',
          '/edition/stats/gurugram/2.png',
          '/edition/stats/gurugram/3.png',
          '/edition/stats/gurugram/4.png',
          '/edition/stats/gurugram/5.png',
        ]}
      />


      <SpeakersSection speakers={speakers} />


      <WatchDemand {...section} />
      <LeaderQuotes quotes={quotesData} />
      <Footer socialLinks={socialLinks} />
    </div>
  );
};

export default GurugramEdition;
