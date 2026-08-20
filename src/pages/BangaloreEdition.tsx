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
<<<<<<< HEAD
import RegistrationClosed from "@/components/RegistrationClosed";
import PastPartnersSpnser from "@/components/PastPartnersSpnser";
=======
import ShortAgenda from "@/components/ShortAgenda";
>>>>>>> 85ab05d138a48cb3d16253c15a4668cbde1e27ce
import PastPartners from "@/components/PastPartners";
import { Speakers } from "@/components/Speakers";
import { BENGALURU_SPEAKERS } from "@/data/bengaluruSpeakers";


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
<<<<<<< HEAD
    time: "09:45 – 10:00 AM",
    title: "Keynote Address: The India AI Story: Scaling Innovation with Purpose",
    description: "India is shaping a purposeful AI narrative—balancing innovation with scale, ethics, and impact. This keynote outlines the nation’s strategic edge in AI adoption, homegrown capabilities, and its role in global AI leadership. Speaker: • Amit Atri, Global CIO, Tata Consumer Products",
    color: "purple",
  },
  {
    time: "10:00 – 10:45 AM",
    title: "Session 1: Architecting AI-First Enterprises – From Cloud to Culture",
    description: "A focused discussion on how leading enterprises is reimagining their architecture, infrastructure, and culture to become truly AI-first. From cloud-native foundations to data pipelines and workforce readiness, this session unveils the strategic blueprint to scale AI responsibly. Moderator: • Venkat Iyer, Partner, PwC Panelists: • Rejin Surendran, Global CIO, Wipro Enterprises Limited • Shashwat Singh, Chief Information Officer, boAt • Debashis Singh, Chief Information Officer, Persistent Systems • Anand V, Chief Information Officer- APAC, Randstad • Vishwesh Pai, Head of Product, JSM Service & AI, Atlassian",
    color: "blue",
  },
  {
    time: "10:45 – 11:00 AM",
    title: "Partner Session: Technology Foundations to Power Your AI Transformation",
    description: "Speaker: Jaideep F John, Asia Lead- Dev Platform, Microsoft Corp",
    color: "purple",
  },
  {
    time: "11:00 – 11:15 AM",
    title: "Tea / Coffee Break",
    description: "",
    color: "blue",
  },
  {
    time: "11:15 – 11:35 AM",
    title: "Partner Session: Agentic AI in Real-World IT, Software, and Support",
    description: "Speaker: Vishwesh Pai, Head of Product, JSM Service & AI, Atlassian",
    color: "purple",
  },
  {
    time: "11:35 – 12:20 PM",
    title: "Session 2: Agentic Automation – Beyond GenAI to Self-Driving Workflows",
    description: "Move beyond prompt-based AI to autonomous, self-learning workflows.Industry leaders discuss how agentic automation is redefining enterprise operations, boosting decision velocity, and reshaping business processes in a world where AI can act, decide, and evolve. Moderator: Rajnil Mallik, Partner and GenAI GTM Leader, PwC India Panelists: • Raman Srinivasan, Chief Digital Officer, Inmobi Group • Geetha Adinarayan, CTO, IBM Consulting, India and South Asia, IBM • Bhargab Dutta, Chief Digital Officer, Century Plyboards • Srinivas Jaggumantri, UTO, Financial Services, Infosys • Jaideep F John, Asia Lead- Dev Platform, Microsoft Corp",
    color: "blue",
  },
  {
    time: "12:20 – 12:40 PM",
    title: "Partner Session: Becoming an Agentforce Company: Humans and AI Agents Driving Customer Success Together",
    description: "• Shalini Sriram, Regional Sales Director, Salesforce",
    color: "purple",
  },
  {
    time: "12:40 – 01:30 PM",
    title: "Session 3: Data, AI & the New Age of Business Intelligence",
    description: "This session examines how leading enterprises leverage AI-driven analytics to enhance business intelligence. Panelists will cover data strategies, predictive and prescriptive analytics, and the transformation of traditional BI functions into proactive, intelligent decision-support systems. Moderator: Pragati (Kushwah) Chakraborty, Partner, Deloitte Panelists: • Sridhar Jonnala – Chief Technology Officer, AI, Strategy, Delivery and Governance, IBM • Vivek Rajagopal – Group Chief Analytics & AI Officer, Narayana Health • Koushik Kadidal – Chief Data Officer & Head of Insights Business, PayU • Chandramouli Godhandaraman – Head of Architecture (Retail) and Program Engineering, HDFC Bank • Mathangi Sri Ramachandran, Chief Data Officer, Yubi",
    color: "blue",
  },
  {
    time: "01:30 – 02:15 PM",
    title: "Networking Lunch",
    description: "",
    color: "purple",
  },
  {
    time: "02:20 – 02:30 PM",
    title: "Special Address: From Code to Culture: Building a Secure AI Strategy",
    description: "Speaker: Vikas Singh Yadav, CISO, Flipkart",
    color: "blue",
  },
  {
    time: "02:30 – 03:15 PM",
    title: "Session 4: Securing the AI Stack: Cybersecurity in the Age of GenAI",
    description: "This session examines the cybersecurity implications of widespread Generative AI adoption. Panelists will address critical security concerns, risks associated with AI-generated code and data, and best practices to ensure secure and responsible deployment of AI across enterprise IT infrastructures. Moderator: • Preetam Hazarika, Partner, PwC India Panelists: • Vikas Singh Yadav, CISO, Flipkart • Yogesh Kumar, CISO, Fanuc India • Jason Joseph, CISO, mPokket Financial Services Pvt Ltd",
    color: "purple",
  },
  {
    time: "03:15 – 04:00 PM",
    title: "Session 5: GCC Leaders on Global AI Delivery from India",
    description: "Global Capability Centers (GCCs) are driving enterprise AI innovation at scale from India. This session gathers GCC heads to discuss delivery models, talent strategy, and India’s growing leadership in building global AI platforms from the ground up. Moderator: • Pragati (Kushwah) Chakraborty, Partner, Deloitte Panelists: • Prasanna Kumar Subbanna – VP, Global Patient Safety, Novo Nordisk • Manish Shukla – Head of Generative AI Platform, NatWest Group • Dr. Suchin Sudhakaran – Cyber Security Leader, BP",
    color: "blue",
  },
  {
    time: "04:00 – 04:45 PM",
    title: "Session 6: CXO Fireside Chat- The CEO-CIO Playbook for Disruptive Growth",
    description: "A candid conversation decodes how visionary CEOs and CIOs align technology, strategy, and culture to unlock non-linear growth. From AI bets to agile reinvention—discover leadership lessons from the frontlines of enterprise transformation. Speakers: • Mithun Appaiah, CEO, Wow! Momo FMCG • Nandkishor Dhomne, CIO, Manipal Hospitals",
    color: "purple",
  },
  {
    time: "04:45 – 05:30 PM",
    title: "Session 7: AI Readiness Across Industries: What’s Working, What’s Not",
    description: "This session presents an industry-focused discussion featuring experiences from the services, manufacturing, BFSI, retail, and pharma sectors. Panelists will highlight successful approaches, common pitfalls, and practical recommendations for building AI readiness and maturity  across diverse organizational contexts. Moderator: • Rajnil Mallik, Partner and GenAI GTM Leader, PwC India Panelists: • Dr. Avnish Kshatriya – Chief Digital & Information Officer (CDIO), Trilega • Dr. Sheela Siddappa – Sr. Vice President – AI CBA, Commonwealth Bank • Dhruv Rastogi – SVP & Head of Data Science, Medi Assist • Rupesh Lochan Gupta – Head – AI Platform and AI CoE, Tata  Consultancy Services",
    color: "blue",
  },
  {
    time: "05:30 – 05:45 PM",
    title: "Closing Note & Call to Action",
    description: " ",
    color: "purple",
=======
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
>>>>>>> 85ab05d138a48cb3d16253c15a4668cbde1e27ce
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
<<<<<<< HEAD
  // {
  //   time: "01:45 – 02:30 PM",
  //   title: "Networking Lunch",
  //   description: " ",
  //   color: "purple",
  // },
  // {
  //   time: "02:30 – 02:45 PM",
  //   title: "Distinguished Speaker Address",
  //   description: "",
  //   color: "blue",
  // },
  // {
  //   time: "02:45 – 03:30 PM",
  //   title: "Session 5: Securing the AI Stack: Cybersecurity in the Age of GenAI",
  //   description: "This session examines the cybersecurity implications of widespread Generative AI adoption. Panelists will address ritical security concerns, risks associated with AI-generated code and data, and best practices to ensure secure and responsible deployment of AI across enterprise IT infrastructures.Moderator: • Preetam Hazarika, Partner, PwC India Panelists:• Vikas Singh Yadav, CISO, Flipkart • Yogesh Kumar, CISO, Fanuc India • Jason Joseph, Chief Information Security Officer (CISO), mPokket Financial Services Pvt Ltd • Sudeep Dey, CIO-CISO, Aster DM Healthcare, India.",
  //   color: "purple",
  // },
  // {
  //   time: "03:30 – 04:15 PM",
  //   title: "Session 6: GCC Leaders on Global AI Delivery from India",
  //   description: " Global Capability Centers (GCCs) are driving enterprise AI innovation at scale from India. This session gathers GCC heads to discuss delivery models, talent strategy, and India’s growing leadership in building global AI platforms from the ground up.Moderator:• Pragati (Kushwah) Chakraborty, Partner, Deloitte Panelists:• Vikram Balakrishna, CTO and Head of Transformation – Technology Centers India & Philippines, Atos • Dr. Suchin Sudhakaran, Cyber Security Leader, BP • Tanushree Dutta, Executive Director - Risk and Information Management, Morgan Stanley*",
  //   color: "blue",
  // },
  // {
  //   time: "04:15 – 05:00 PM",
  //   title: "Session 7: AI Readiness Across Industries: What’s Working, What’s Not",
  //   description: "This session presents an industry-focused discussion featuring experiences from the services, manufacturing, BFSI, retail, and pharma sectors. Panelists will highlight successful approaches, common pitfalls, and practical ecommendations for building AI readiness and maturity across diverse organizational contexts.Moderator:• Kamesh Srinivasan, Partner, KPMG India Panelists:• Manish Shukla, Head of Generative AI Platform, NatWest Group • Dr. Avnish Kshatriya, Chief Digital & Information Officer (CDIO), Trilegal • Dr. Sheela Siddappa, Leader-AI, Commonwealth Bank",
  //   color: "purple",
  // },
  // {
  //   time: "05:00 – 05:15 PM",
  //   title: "Closing Note & Call to Action",
  //   description: " ",
  //   color: "purple",
  // }
=======
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
>>>>>>> 85ab05d138a48cb3d16253c15a4668cbde1e27ce
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
        date="3 September 2025 | The Leela Palace, Bengaluru"

        stats={[
<<<<<<< HEAD
          { value: "30+", label: "Speakers" },
=======
          { value: "25+", label: "Speakers" },
>>>>>>> 85ab05d138a48cb3d16253c15a4668cbde1e27ce
          { value: "8+", label: "Hrs" },
          { value: "200+", label: "Attendees" },
        ]}

      />
      <MovingStrip color="bg-neon-purple" />
      <About />
      <MovingStrip color="bg-neon-blue" />
      <KeyPoints />
<<<<<<< HEAD

      <div className="bengspekr">
        <Speakers data={BENGALURU_SPEAKERS} />
      </div>



      <div className="text-center bg-black text-white mt-[-50px] pb-[50px] text-2xl md:text-3xl lg:text-4xl font-orbitron underline underline-offset-4 decoration-white ">
        AND<span className="text-gradient font-bold"> MORE</span>
      </div>


      <PastPartnersSpnser />

      <PastPartners />

=======
      <Speakers data={BENGALURU_SPEAKERS} />
      <div className="text-center bg-black text-white mt-[-50px] pb-[50px] text-2xl md:text-3xl lg:text-4xl font-orbitron underline underline-offset-4 decoration-white ">
        AND<span className="text-gradient font-bold"> MORE</span> 
      </div>

      <PastPartners />
>>>>>>> 85ab05d138a48cb3d16253c15a4668cbde1e27ce
      {/* Include the Agenda component with agendaData as prop */}
      <Agenda items={agendaData} eventDetails={{
        date: "03 September 2025 ",
        venue: "The Leela Palace, Bengaluru",
        audience: "200+ Enterprise Technology Leaders"
      }} />




<<<<<<< HEAD




      {/* <div className="bg-black text-white p-4 "> */}
      {/* Common Header */}
      {/* <div className="text-center">
=======
      <div className="bg-black text-white p-4 ">
        {/* Common Header */}
        <div className="text-center">
>>>>>>> 85ab05d138a48cb3d16253c15a4668cbde1e27ce
          <h1 className="text-neon-purple font-bold text-2xl md:text-3xl font-orbitron">
            02:30 – 04:00 PM | AI in Action: Sector-Focused & Thematic Parallel Tracks
          </h1>
          <p className="mt-2">These sessions will run in parallel across different halls</p>
<<<<<<< HEAD
        </div> */}

      {/* Parallel Tracks - Side by Side */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 px-10"> */}
      {/* Track 1 */}
      {/* <div className="border border-gray-700 p-4 ">
=======
        </div>

        {/* Parallel Tracks - Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 px-10">
          {/* Track 1 */}
          <div className="border border-gray-700 p-4 ">
>>>>>>> 85ab05d138a48cb3d16253c15a4668cbde1e27ce
            <h3 className="font-bold text-lg text-center font-orbitron text-neon-blue">
              Track 1: Fintech & Financial Services Innovation
            </h3>
            <p className="text-center mb-4">Shaping the Future of BFSI with AI & Automation</p>
            <ShortAgenda items={shortAgendaData1} />
<<<<<<< HEAD
          </div> */}

      {/* Track 2 */}
      {/* <div className="border border-gray-700 p-4 ">
=======
          </div>

          {/* Track 2 */}
          <div className="border border-gray-700 p-4 ">
>>>>>>> 85ab05d138a48cb3d16253c15a4668cbde1e27ce
            <h3 className="font-bold text-lg text-center font-orbitron text-neon-blue">
              Track 2: AI x Startups – Scaling Ambitions with Intelligence
            </h3>
            <p className="text-center mb-4">How India's Boldest Startups are Leveraging AI for Disruption</p>
            <ShortAgenda items={shortAgendaData2} />
          </div>
        </div>
<<<<<<< HEAD
      </div> */}


      {/* Main Hall Section */}
      {/* <div className="bg-black text-white p-4  pb-20"> */}
      {/* <h1 className="text-neon-purple font-bold text-2xl md:text-3xl text-center font-orbitron">
          Main Hall Programming
        </h1> */}
      {/* <ShortAgenda items={shortAgendaData3} /> */}
      {/* </div> */}
      <KeyTheme />
      <PastHighlights videoSrc="/videos/Yt_promo_10_sept.mp4" />
=======
      </div>

      {/* Main Hall Section */}
      <div className="bg-black text-white p-4  pb-20">
        <h1 className="text-neon-purple font-bold text-2xl md:text-3xl text-center font-orbitron">
          Main Hall Programming
        </h1>
        <ShortAgenda items={shortAgendaData3} />
      </div>
      <KeyTheme />
<PastHighlights videoSrc="/videos/Post_Event_Montage.mp4" />
>>>>>>> 85ab05d138a48cb3d16253c15a4668cbde1e27ce

      <DemandVideoHome />
      <PartnershipCTA />

      <ShouldAttend />
      <WhoShouldSponsor />
<<<<<<< HEAD
      <RegistrationClosed />
=======
      <BengaloreRegisterForm />
>>>>>>> 85ab05d138a48cb3d16253c15a4668cbde1e27ce
      <Footer socialLinks={socialLinks} />
    </div>
  );
};

export default BangaloreEdition;
