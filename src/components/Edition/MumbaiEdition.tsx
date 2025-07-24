import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PastHighlights } from "@/components/PastHighlights";
import { Footer } from "@/components/Footer";

import Objectives from "./Objectives";
import StatsSection from "./StatsSection";
import SpeakersSection from "./SpeakersSection";


import ShouldAttend from "../ShouldAttend";
import LeaderQuotes from "./LeaderQuotes";
import WatchDemand from "./DemadVideos";
import { PastEventHero } from "./PastEventHero";
import { useEffect } from "react";



const sections = [
  {
    city: 'Mumbai',
    imageName: 'mumbai',
    videoLinks: [
      'https://www.youtube.com/watch?v=glzVZO7u7rY',
      'https://www.youtube.com/watch?v=udD6TSasVGE',
      'https://www.youtube.com/watch?v=PZ3mbxs4Mx4',
      'https://youtu.be/Ob8fN8ox0aQ?list=TLGGKAfd5aznV9AyMzA0MjAyNQ',
      'https://youtu.be/QDXYOeRKOa0?list=TLGGZudhCP6fE98yMzA0MjAyNQ',
      'https://youtu.be/RA3ujjieS5U?list=TLGGLWh9HrQ4t_cyMzA0MjAyNQ',
      'https://youtu.be/VmpLIrGSooo?list=TLGGIlODjU8dzfQyMzA0MjAyNQ',
      'https://youtu.be/2LMzP3kCzqQ?list=TLGGM4JUFuMnrOEyMzA0MjAyNQ',
      'https://youtu.be/5lJ0Y8xHfX8?list=TLGGG55aGMO-tewyMzA0MjAyNQ',
      'https://youtu.be/enCwuw4Az8g?list=TLGGLTlYnhS6D7cyMzA0MjAyNQ',
      'https://youtu.be/x6l9CRqgdoY?list=TLGGusPJqiJvaqMyMzA0MjAyNQ',
      'https://youtu.be/yru8hzRPU6k?list=TLGGXh6w5rapJssyMzA0MjAyNQ',
      'https://youtu.be/ekCyjZq0q7U?list=TLGGjqw6Kye3KkQyMzA0MjAyNQ',
      'https://youtu.be/f9FT0ffJujo?list=TLGGIkZHhJ5aZ9MyMzA0MjAyNQ',
      'https://youtu.be/kTa_Gn0rUqk?list=TLGGTdqBnjuXu0MyMzA0MjAyNQ',
      'https://youtu.be/VTQiS82jPwc?list=TLGGNN2ez95RcPUyMzA0MjAyNQ',
      'https://youtu.be/lVCjTm5sSKI?list=TLGGGUkzoIINyAQyMzA0MjAyNQ',
    ],
  },
];

const speakers = [
  { name: 'Khushru M. Mistry', designation: 'Chief Technology Officer', company: 'GM Modular', image: '/edition/speakers/mumbai/khushru.png' },
  { name: 'Naved Hussain', designation: 'Chief Technology Officer', company: 'Adani Capital', image: '/edition/speakers/mumbai/naved.png' },
  { name: 'Vineet Shukla', designation: 'Vice President (Head of Data)', company: 'Mahindra Group', image: '/edition/speakers/mumbai/vineet.png' },
  { name: 'Milind Khamkar', designation: 'Group CIO', company: 'SUPER-MAX', image: '/edition/speakers/mumbai/milind.png' },
  { name: 'Sudhir Kanvinde', designation: 'Chief Information Officer', company: 'The Supreme Industries', image: '/edition/speakers/mumbai/sudhir.png' },
  { name: 'Nishant Pradhan', designation: 'Chief AI Officer', company: 'Mirae Asset Global Investments', image: '/edition/speakers/mumbai/nishant.png' },
  { name: 'Bhawesh Chourasia', designation: 'Global Head- Operations Excellence', company: 'Microland', image: '/edition/speakers/mumbai/bhawesh.png' },
  { name: 'Dr. Puneet Kohli', designation: 'President IT & Data (CIO)', company: 'Liberty General Insurance', image: '/edition/speakers/mumbai/dr-puneet.png' },
  { name: 'Mukesh Jain', designation: 'CTO & VP', company: 'Leading AI Based Innovation @ Capgemini', image: '/edition/speakers/mumbai/mukesh.png' },
  { name: 'Prashant Thakkar', designation: 'Chief of Operations and Technology Officer', company: 'LIC Mutual Fund', image: '/edition/speakers/mumbai/prashant.png' },
  { name: 'Amit Joshi', designation: 'CISO Adani Cement Business', company: 'Adani Enterprises', image: '/edition/speakers/mumbai/amit.png' },
  { name: 'Haresh Ambaliya', designation: 'General Manager, Automation, Data Science & Machine Learning', company: 'Jio Platforms', image: '/edition/speakers/mumbai/haresh.png' },
  { name: 'Kiran Belsekar', designation: 'Executive VP- CISO & IT Governance', company: 'Bandhan Life', image: '/edition/speakers/mumbai/kiran.png' },
  { name: 'Jitendra Jadhwani', designation: 'Head - Business Transformation & CISO', company: 'Tata Motors Finance', image: '/edition/speakers/mumbai/jitendra.png' },
  { name: 'Kulbhooshan Patil', designation: 'VP and Head of Data Science', company: 'TATA AIG General Insurance', image: '/edition/speakers/mumbai/kulbhooshan.png' },
  { name: 'Amit Sharma', designation: 'VP Lead - AI-ML Central Data Science', company: 'Paytm', image: '/edition/speakers/mumbai/amit-sharma.png' },
  { name: 'Binita Prasad', designation: 'Head- IT and Digital', company: 'Saint-Gobain Group India | Grindwell Norton', image: '/edition/speakers/mumbai/binita.png' },
  { name: 'Anubhab Goel', designation: 'Head- Digital Innovation', company: 'HDFC ERGO General Insurance', image: '/edition/speakers/mumbai/anubhab.png' },
  { name: 'Narendra K Saini', designation: 'CDO | Chief Digital and Data Officer', company: 'Lupin', image: '/edition/speakers/mumbai/narendra.png' },
  { name: 'Sachin Kawalkar', designation: 'Global CISO, Head Info Sec, Cyber and Quality Management', company: 'Neeyamo', image: '/edition/speakers/mumbai/sachin.png' },
  { name: 'Arun Gupta', designation: 'IT Strategy Consultant Independent Director & Board Member', company: 'Hemas Pharmaceuticals, Sri Lanka & Locuz Enterprise Solutions, India', image: '/edition/speakers/mumbai/arun.png' },
  { name: 'Muralidharan Ramachandran', designation: 'CIO', company: 'Startek', image: '/edition/speakers/mumbai/muralidharan.png' },
  { name: 'Rohan Padhi', designation: 'Partner, Advisory', company: 'KPMG India', image: '/edition/speakers/mumbai/rohan.png' },
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
const MumbaiEdition = () => {
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
        backgroundImage="/past-hero-banner.png"
        contentPosition="left"
        contentBackgroundImage=""
        heroImage="/cloud-new.png"
        subheading="Unlocking the Future: Navigating the Confluence of Cloud and AI"
        date="5th June 2024, Mumbai"
      />
      <PastHighlights videoSrc="/videos/Post_Event_Montage.mp4" />

      <Objectives />
      <StatsSection
        stats={[
          { label: 'Attendees', value: '200+' },
          { label: 'Speakers', value: '30+' },
          { label: 'Sessions', value: '5+' },
          { label: 'Networking Hrs', value: '8+ hrs' },
        ]}
        images={[
          '/edition/stats/1.png',
          '/edition/stats/2.png',
          '/edition/stats/3.png',
          '/edition/stats/4.png',
          '/edition/stats/5.png',
        ]}
      />


      <SpeakersSection speakers={speakers} />

      <ShouldAttend />

      <LeaderQuotes quotes={quotesData} />
      <WatchDemand {...section} />
      <Footer socialLinks={socialLinks} />
    </div>
  );
};

export default MumbaiEdition;
