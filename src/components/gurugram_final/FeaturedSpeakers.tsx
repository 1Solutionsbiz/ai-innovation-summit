import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getScrollDirection } from "@/hooks/useScrollDirection";

// ---------- Types ----------
type Speaker = {
  name: string;
  role: string;
  company: string;
  image: string;
};

type EventGroup = {
  location: string;
  year: string;
  speakers: Speaker[];
};

// ---------- Sample data (swap with real data) ----------
const EVENTS: EventGroup[] = [


  {
    location: "Bangalore",
    year: "2026",
    speakers: [
      {
        name: "Dr. N. Manjula",
        role: "IAS, Hon'ble Secretary to Government, Department of Electronics, IT, BT and S&T, Government of Karnataka ",
        company: "",
        image: "/speakers/bengaluru26/Dr-N-Manjula.jpg",
      },
      {
        name: "Kunal Mehta",
        role: "CIO, Arvind Fashions",
        company: "",
        image: "/speakers/bengaluru26/Kunal-Mehta.jpg",
      },
      {
        name: "Kumar Nitesh",
        role: "CEO- Ajio Business and Trends Footwear, Reliance Retail",
        company: "",
        image: "/speakers/bengaluru26/Kumar-Nitesh.jpg",
      },
      {
        name: "Amit Atri",
        role: "	Sr. VP & Global CIO, Tata Consumer Products",
        company: "",
        image: "/speakers/bengaluru26/Amit.jpg",
      },
      {
        name: "Dhivya Kumar Bansal",
        role: "CDTO, Diageo India",
        company: "",
        image: "/speakers/bengaluru26/Dhivya-Kumar-Bansal.jpg",
      },
      {
        name: "Sudeep Dey",
        role: "CIO & CISO, Aster DM Healthcare",
        company: "",
        image: "/speakers/bengaluru26/Sudeep-Dey.jpg",
      },
      {
        name: "Krishnan Venkateswaran",
        role: "Chief Digital & Information Officer, Titan Company",
        company: "",
        image: "/speakers/bengaluru26/Krishnan-Venkateswaran.jpg",
      },
      {
        name: "Amrish Kumar Jain",
        role: "CIO & CISO, Tally Solutions",
        company: "",
        image: "/speakers/bengaluru26/Amrish Kumar-Jain.jpg",
      },
      {
        name: "Ashley DSouza",
        role: "Chief Digital Officer, Hindustan Coca-Cola Beverages",
        company: "",
        image: "/speakers/bengaluru26/Ashley-Dsouza.jpg",
      },
      {
        name: "Rohit Kilam",
        role: "CTO, HDFC Life ",
        company: "",
        image: "/speakers/bengaluru26/Rohit-Kilam.jpg",
      },
      {
        name: "Sambit Sarangi",
        role: "CTO - Tech Platform, MakeMyTrip",
        company: "",
        image: "/speakers/bengaluru26/Sambit-Sarangi.jpg",
      },
      {
        name: "Akilur Rahman",
        role: "CTO, Hitachi Energy India",
        company: "",
        image: "/speakers/bengaluru26/Akilur-Rahman.jpg",
      },
      {
        name: "Rajesh Ramachandran",
        role: "Global CDO & MD, ABB Automation",
        company: "",
        image: "/speakers/bengaluru26/Rajesh-Ramachandran.jpg",
      },
      {
        name: "Narendra Babu",
        role: "CTO, PayU",
        company: "",
        image: "/speakers/bengaluru26/Narendra-Babu.jpg",
      },
      {
        name: "Krishnendu Majumdar",
        role: "CPTO, Yubi Group",
        company: "",
        image: "/speakers/bengaluru26/Krishnendu-Majumdar.jpg",
      },
      {
        name: "Umesh Bude",
        role: "CTO, Pocket FM",
        company: "",
        image: "/speakers/bengaluru26/Umesh-Bude.jpg",
      },
      {
        name: "Chandan Vijay",
        role: "Global Chief Data Officer, ABB Energy Industries",
        company: "",
        image: "/speakers/bengaluru26/Chandan-Vijay.jpg",
      },
      {
        name: "Kumar S",
        role: "CTO, Head of AI Strategy and Business, Newgen Digital",
        company: "",
        image: "/speakers/bengaluru26/Kumar-S.jpg",
      },
      {
        name: "Shashi Mohan Singh",
        role: "CDO, Reliance Consumer Products",
        company: "",
        image: "/speakers/bengaluru26/Shashi-Mohan-Singh.jpg",
      },
      {
        name: "Siddharth Sureka",
        role: "Chief AI Officer, Motilal Oswal Financial Services",
        company: "",
        image: "/speakers/bengaluru26/Siddharth-Sureka.jpg",
      },
      {
        name: "Kuldeep Singh Tomar",
        role: "CISO, BigBasket",
        company: "",
        image: "/speakers/bengaluru26/Kuldeep-Tomar.jpg",
      },
      {
        name: "Sharmistha Chatterjee",
        role: "Vice President, Data & AI Shared Capabilities Digital Workspace, American Express",
        company: "",
        image: "/speakers/bengaluru26/Sharmistha-Chatterjee.jpg",
      },
      {
        name: "Santosh Kumar",
        role: "CISO, Mphasis",
        company: "",
        image: "/speakers/bengaluru26/Santosh-Kumar.jpg",
      },
      {
        name: "Ishita De",
        role: "CISO, Diageo India",
        company: "",
        image: "/speakers/bengaluru26/Ishita-de.jpg",
      },
      {
        name: "Biswajit Biswas",
        role: "Chief Data Scientist, Tata Elxsi",
        company: "",
        image: "/speakers/bengaluru26/Biswajit-Biswas.jpg",
      },
      {
        name: "Venkataprasanna G",
        role: "VP & Head- Technology Risks, HCL Tech",
        company: "",
        image: "/speakers/bengaluru26/Venkataprasanna-G.jpg",
      },
      {
        name: "Suvodip Chatterjee",
        role: "Global Head of AI Data science & MLOps, Signify",
        company: "",
        image: "/speakers/bengaluru26/Suvodip-Chatterjee.jpg",
      },
      {
        name: "Nishant Chandra",
        role: "SVP Engineering, Angel One",
        company: "",
        image: "/speakers/bengaluru26/Nishant-Chandra.jpg",
      },
      {
        name: "Jyothi Kodenkiri",
        role: "VP Cloud Engineering, Deutsche Bank",
        company: "",
        image: "/speakers/bengaluru26/Jyothi-Kodenkiri.png",
      },
      {
        name: "Anil Yadav",
        role: "VP Engineering, HDFC Securities",
        company: "",
        image: "/speakers/bengaluru26/Anil-Yadav.jpg",
      },
      {
        name: "Syed Atif Umar",
        role: "Head of Analytics, Meesho",
        company: "",
        image: "/speakers/bengaluru26/Syed-Atif-Umar.jpg",
      },
      {
        name: "Sruti Sivaraman",
        role: "Head of Engineering Automation, Nokia",
        company: "",
        image: "/speakers/bengaluru26/Sruti-Sivaraman.jpg",
      },
      {
        name: "Sundareshwar Krishnamurthy",
        role: "Partner and India Cyber leader, PwC India",
        company: "",
        image: "/speakers/bengaluru26/Sundareshwar-Krishnamurthy.jpg",
      },
      {
        name: "Sundar Ram",
        role: "Partner & Leader - Cloud Engineering and Data Analytics, PwC India",
        company: "",
        image: "/speakers/bengaluru26/Sundar-Ram.jpg",
      },
      {
        name: "Sreyssha George",
        role: "Managing Director & Partner, BCG",
        company: "",
        image: "/speakers/bengaluru26/Sreyssha-George.jpg",
      },
      {
        name: "Akbar Ali Shaikh",
        role: "Partner, Deloitte",
        company: "",
        image: "/speakers/bengaluru26/Akbar-Ali-Shaikh.jpg",
      },
      {
        name: "Anuj Kumar",
        role: "Partner, KPMG India",
        company: "",
        image: "/speakers/bengaluru26/Anuj-Kumar.jpg",
      },
      {
        name: "Sundeep Kamath",
        role: "Regional Vice President, Salesforce",
        company: "",
        image: "/speakers/bengaluru26/Sundeep-Kamath.jpg",
      },
      {
        name: "Tulasi Menon",
        role: "Head of Product, AI Strategy for Jira Service Management, Atlassian",
        company: "",
        image: "/speakers/bengaluru26/Tulasi-Menon.jpg",
      },
      {
        name: "Rohan Pagey",
        role: "Regional Vice President Sales, Salesforce",
        company: "",
        image: "/speakers/bengaluru26/Rohan-Pagey.jpg",
      },
      {
        name: "Bhaskar Bose",
        role: "Senior Manager Sales, Salesforce",
        company: "",
        image: "/speakers/bengaluru26/Bhaskar-Bose.jpg",
      },
      {
        name: "Rajiv Garg",
        role: "Speialist Solution Engineer, Salesforce",
        company: "",
        image: "/speakers/bengaluru26/Rajiv-Garg.jpg",
      },
      {
        name: "Sumit Sharma",
        role: "Director, Solution Engineering, Salesforce",
        company: "",
        image: "/speakers/bengaluru26/Sumit-Sharma.jpg",
      },
      {
        name: "Jothi Kumar",
        role: "Global Sales Leader - Emerging Regions / APAC, Atlassian",
        company: "",
        image: "/speakers/bengaluru26/Jothi-Kumar.jpg",
      },
    ],
  },



  {
    location: "Delhi",
    year: "2025",
    speakers: [
      {
        name: "Raghav Aggarwal",
        role: "Co-Founder, Fluid AI",
        company: "",
        image: "/speakers/delhi26/raghav.png",
      },
      {
        name: "Ved Goel",
        role: "Group CFO & CEO – International Business, Dr. Lal PathLabs",
        company: "",
        image: "/speakers/delhi26/Ved Goel.png",
      },
      {
        name: "Narottam Sharma",
        role: "CIO, Jubilant Foodworks",
        company: "",
        image: "/speakers/delhi26/Narrottam-Sharma.png",
      },
      {
        name: "Ranganathan Vaidyanathan Iyer",
        role: "Group CIO, JBM Group",
        company: "",
        image: "/speakers/delhi26/Ragannathan.png",
      },
      {
        name: "Kapil Mahajan",
        role: "Global & Group CITO, Allcargo Logistics",
        company: "",
        image: "/speakers/delhi26/kapil mahajan.png",
      },
      {
        name: "Manish Chandegara",
        role: "Group CIO, Simpolo Ceramics",
        company: "",
        image: "/speakers/delhi26/manish.png",
      },
      {
        name: "Mukul Jain",
        role: "CTO, Axis Max Life Insurance",
        company: "",
        image: "/speakers/delhi26/mukul-jain.png",
      },
      {
        name: "Tarun Aggarwal",
        role: "Group CTO, Capri Global Capital",
        company: "",
        image: "/speakers/delhi26/tarun agrawal.png",
      },
      {
        name: "Mukesh Sharma",
        role: "CTO,Paisabazaar",
        company: "",
        image: "/speakers/delhi26/mukesh-sharma.png",
      },
      {
        name: "Mohit Malik",
        role: "CTO, Chaayos",
        company: "",
        image: "/speakers/delhi26/mohit malik.png",
      },
      {
        name: "Sunil Kumar",
        role: "CTO, Shiprocket",
        company: "",
        image: "/speakers/delhi26/Sunil Kumar.png",
      },
      {
        name: "Anurag Jain",
        role: "CDTO - KFC India and Partner Countries, Yum Brands",
        company: "",
        image: "/speakers/delhi26/Anurag Jain.png",
      },
      {
        name: "Harsh Vardhan",
        role: "Global Head- Digital Innovation, Apollo Tyres",
        company: "",
        image: "/speakers/delhi26/harsh vardhan.png",
      },
      {
        name: "Jagannath Sahoo",
        role: "CISO, Gujarat Fluorochemicals Limited",
        company: "",
        image: "/speakers/delhi26/jagannathan.png",
      },
      {
        name: "Vivek Shankar",
        role: "CITSO & VP, Axis Max Life Insurance Limited",
        company: "",
        image: "/speakers/delhi26/Vivek Shankar.png",
      },
      {
        name: "Amit Sharma",
        role: "Sr. VP - Enterprise Information Management and Analytics, Canara HSBC Life Insurance",
        company: "",
        image: "/speakers/delhi26/amit-sharma.png",
      },
      {
        name: "Varun Bansal",
        role: "VP, Head IT, Bata India",
        company: "",
        image: "/speakers/delhi26/varun bansal.png",
      },
      {
        name: "Animesh Srrivastava",
        role: "	Senior VP of Technology, Moglix",
        company: "",
        image: "/speakers/delhi26/animesh.png",
      },
      {
        name: "Ritesh Rathod",
        role: "Chief Strategy & Data Officer, Canara HSBC Life Insurance",
        company: "",
        image: "/speakers/delhi26/Ritesh-Rathod.png",
      },
      {
        name: "Atul Govil",
        role: "Chief Transformation Officer & Head (SAP & IT) - Corporate , India Glycols Limited",
        company: "",
        image: "/speakers/delhi26/Atul-Givil.png",
      },
      {
        name: "Raman Srinivasan",
        role: "Chief Digital Officer, InMobi Group",
        company: "",
        image: "/speakers/delhi26/Raman Srinivasan.png",
      },
      {
        name: "Rajat Wadhwa",
        role: "Head- Customer Applications, Hero FinCorp",
        company: "",
        image: "/speakers/delhi26/rajat wadhwa.png",
      },
      {
        name: "Anjali Dutta",
        role: "Head of Experience Design & Digital Studio | BORN Service Line, Tech Mahindra",
        company: "",
        image: "/speakers/delhi26/Anjali Dutta.png",
      },
      {
        name: "Pankaj Gupta",
        role: "Chief AI Officer, Jindal Stainless",
        company: "",
        image: "/speakers/delhi26/Pankaj Gupta.png",
      },
      {
        name: "Ritesh Jain",
        role: "Partner- Agentic Automation, PwC India",
        company: "",
        image: "/speakers/delhi26/Ritesh Jain.png",
      },
      {
        name: "Ankit Garg",
        role: "Partner- Risk Consulting, PwC",
        company: "",
        image: "/speakers/delhi26/Ankit Garg.png",
      },
      {
        name: "Vinod Kumar",
        role: "Senior Partner & Leader- Manufacturing, PwC India",
        company: "",
        image: "/speakers/delhi26/Vinod Pathak.png",
      },
      {
        name: "Ayush Gupta",
        role: "Partner, KPMG",
        company: "",
        image: "/speakers/delhi26/ayush-agrawal.png",
      },
      {
        name: "Abhishek Das",
        role: "Partner- Consulting, EY",
        company: "",
        image: "/speakers/delhi26/Abhishek Das.png",
      },
      {
        name: "Manpreet Singh Ahuja",
        role: "Partner, Chief Client and Alliance & TMT Sector Leader, PwC India",
        company: "",
        image: "/speakers/delhi26/Manpreet Ahuja.png",
      },
      {
        name: "Vyshak Venugopalan",
        role: "Sr Director, Solution Consulting, India and JAPAC Partner Solution Leader, Adobe",
        company: "",
        image: "/speakers/delhi26/Vyash-V.png",
      },
      {
        name: "Gowthamram C. Nallan",
        role: "Solutions Consulting Lead, Adobe India",
        company: "",
        image: "/speakers/delhi26/Gowthamram-C.-Nallan.png",
      },
      {
        name: "Siddharth Sikand",
        role: "Customer Transformation Advisor (Distinguished Enterprise Architect), Salesforce",
        company: "",
        image: "/speakers/delhi26/siddharth-sikand.png",
      },
      {
        name: "Rachit Bhatnagar",
        role: "Solutions Consulting Practice Lead, Adobe",
        company: "",
        image: "/speakers/delhi26/Rachit-Bhatnagar.png",
      },
    ],
  },



  {
    location: "Bangalore",
    year: "2025",
    speakers: [
      {
        name: "Bhargab Dutta",
        role: "Chief Digital Officer, Century Plyboards",
        company: "",
        image: "/speakers/bengaluru/bhargab.png",
      },
      {
        name: "Debashis Singh",
        role: "Chief Information Officer, Persistent Systems",
        company: "",
        image: "/speakers/bengaluru/debashis.png",
      },
      {
        name: "Rejin Surendran",
        role: "Global CIO, Wipro Enterprises Limited",
        company: "",
        image: "/speakers/bengaluru/rejin.png",
      },
      {
        name: "Anand V",
        role: "Chief Information Officer, APAC - Randstad",
        company: "",
        image: "/speakers/bengaluru/anand.png",
      },
      {
        name: "Srinivas Jaggumantri",
        role: "Unit Technology Officer, Financial Services, Infosys",
        company: "",
        image: "/speakers/bengaluru/srinivas.png",
      },
      {
        name: "Geetha Adinarayan",
        role: "CTO, IBM Consulting, India and South Asia, IBM",
        company: "",
        image: "/speakers/bengaluru/geetha.png",
      },
      {
        name: "Raman Srinivasan",
        role: "Chief Digital Officer, Inmobi Group",
        company: "",
        image: "/speakers/bengaluru/raman.png",
      },
      {
        name: "Nandkishor Dhomne",
        role: "CIO, Manipal Hospitals",
        company: "",
        image: "/speakers/bengaluru/nandkishor.png",
      },
      {
        name: "Dr. Avnish Kshatriya",
        role: "Chief Digital and Information Officer, Trilegal",
        company: "",
        image: "/speakers/bengaluru/avnish.png",
      },
      {
        name: "Koushik Kadidal",
        role: "Chief Data Officer, PayU",
        company: "",
        image: "/speakers/bengaluru/koushik.png",
      },
      {
        name: "Chandramouli Godhandaraman",
        role: "Head of Architecture (Retail) and Program Engineering, HDFC Bank",
        company: "",
        image: "/speakers/bengaluru/chandramouli.png",
      },
      {
        name: "Vivek Rajagopal",
        role: "Group Chief Analytics and AI Officer, Narayana Health",
        company: "",
        image: "/speakers/bengaluru/vivek.png",
      },
      {
        name: "Mathangi Sri Ramachandran",
        role: "Chief Data Officer, Yubi",
        company: "",
        image: "/speakers/bengaluru/mathangi.png",
      },
      {
        name: "Jason Joseph",
        role: "Chief Information Security Officer, mPokket Financial Services Pvt Ltd",
        company: "",
        image: "/speakers/bengaluru/jason.png",
      },
      {
        name: "Vikram Balakrishna",
        role: "CTO and head of transformation - Technology Centers India & Ph, Atos",
        company: "",
        image: "/speakers/bengaluru/vikram.png",
      },
      {
        name: "Sheela Siddappa,",
        role: "Leader-AI, Commonwealth Bank",
        company: "",
        image: "/speakers/bengaluru/sheela.png",
      },
      {
        name: "Manish Shukla",
        role: "Head of Generative AI Platform, NatWest Group",
        company: "",
        image: "/speakers/bengaluru/manish.png",
      },
      {
        name: "Shashwat Singh",
        role: "Chief Information Officer, boAt",
        company: "",
        image: "/speakers/bengaluru/shashwat.png",
      },
      {
        name: "Sudarshan Rajagopal",
        role: "Partner Technology Consulting - Cyber Security, EY",
        company: "",
        image: "/speakers/bengaluru/sudharshan.png",
      },
      {
        name: "Sudeep Dey",
        role: "CIO-CISO, Aster DM Healthcare, India",
        company: "",
        image: "/speakers/bengaluru/sudeep.png",
      },
      {
        name: "Yogesh Kumar",
        role: "CISO, Fanuc India",
        company: "",
        image: "/speakers/bengaluru/yogesh.png",
      },
      {
        name: "Preetam Hazarika (Moderator)",
        role: "Partner, PwC India",
        company: "",
        image: "/speakers/bengaluru/preetam.png",
      },
      {
        name: "Suchin Sudhakaran",
        role: "Cyber Security Leader, BP",
        company: "",
        image: "/speakers/bengaluru/suchin.png",
      },
      {
        name: "Sridhar Jonnala",
        role: "CTO, AI, Strategy, Delivery and Governance, IBM, India",
        company: "",
        image: "/speakers/bengaluru/sridhar.png",
      },
      {
        name: "Vikas Singh Yadav",
        role: "CISO, Flipkart",
        company: "",
        image: "/speakers/bengaluru/vikas.png",
      },
      {
        name: "Vishwesh Pai",
        role: "Head of Product, JSM Service & AI, Atlassian",
        company: "",
        image: "/speakers/bengaluru/vishwesh.png",
      },
      {
        name: "Amit Atri",
        role: "Global CIO, Tata Consumer Products",
        company: "",
        image: "/speakers/bengaluru/amit.png",
      },
      {
        name: "Venkat Iyer",
        role: "Partner, PwC",
        company: "",
        image: "/speakers/bengaluru/venkat.png",
      },
      {
        name: "Mithun Appaiah",
        role: "CEO, WoW! Momo FMCG",
        company: "",
        image: "/speakers/bengaluru/mithun.png",
      },
      {
        name: "Rajnil Mallik",
        role: "Partner and GenAI GTM Leader, PwC India",
        company: "",
        image: "/speakers/bengaluru/rajnil.png",
      },
      {
        name: "Ganapathy V",
        role: "VP, & Head- Global Advanced Analytics CoE, Holcim",
        company: "",
        image: "/speakers/bengaluru/ganapathy.png",
      },
      {
        name: "Mallikarjun Kandkuru",
        role: "Partner, KPMG India",
        company: "",
        image: "/speakers/bengaluru/mallikarjun.png",
      },
      {
        name: "Pragati (Kushwah) Chakraborty",
        role: "Partner, Deloitte",
        company: "",
        image: "/speakers/bengaluru/pragati.png",
      },
      {
        name: "Rupesh Lochan Gupta",
        role: "Head- AI Platform and AI CoE, Tata Consultancy Services",
        company: "",
        image: "/speakers/bengaluru/rupesh.png",
      },
      {
        name: "Dhruv Rastogi",
        role: "SVP & Head of Data Science, Medi Assist",
        company: "",
        image: "/speakers/bengaluru/dhruv.png",
      },
      {
        name: "Prasanna",
        role: "Prasanna Kumar Subbanna – VP, Global Patient Safety, Novo Nordisk",
        company: "",
        image: "/speakers/bengaluru/prasanna.png",
      },
      {
        name: "Shalini Sriram",
        role: "Regional Sales Director, Salesforce",
        company: "",
        image: "/speakers/bengaluru/shalini.png",
      },
    ],
  },



  {
    location: "Mumbai",
    year: "2025",
    speakers: [

      {
        name: "Parvez Mulla ",
        role: "MD & CEO, Fedbank Financial Services Ltd. ",
        company: "",
        image: "/speakers/parvez-mulla.png",
      },
      {
        name: "Dipu KV",
        role: "Senior President, Bajaj Allianz General Insurance",
        company: "",
        image: "/speakers/dipu-kv.png",
      },
      {
        name: "Sumit Garg",
        role: "Global CIO, Piramal Pharma Solutions",
        company: "",
        image: "/speakers/Sumit-Garg.png",
      },
      {
        name: "Amit Ray",
        role: "CIO Advisory and Customer Success Leader, Jio",
        company: "",
        image: "/speakers/amit-ray.png",
      },
      {
        name: "Aashish Kshetry",
        role: "CIO & VP-IT, Asian Paints",
        company: "",
        image: "/speakers/ashish-kshetry.png",
      },
      {
        name: "Tarun Pandey",
        role: "Chief Technology Officer, Aditya Birla Health Insurance",
        company: "",
        image: "/speakers/tarun-pandey.png",
      },
      {
        name: "Nikhil Malhotra",
        role: "Chief Innovation Officer & Global Head of AI and Emerging Technologies, Tech Mahindra",
        company: "",
        image: "/speakers/nikhil-malhotra.png",
      },
      {
        name: "Mukesh Jain",
        role: "CTO, Executive Vice President, Capgemini",
        company: "",
        image: "/speakers/mukesh-jain.png",
      },
      {
        name: "Suman Guha",
        role: "CTO, Tata CLiQ Fashion",
        company: "",
        image: "/speakers/suman-guha.png",
      },
      {
        name: "Vivek Sharma",
        role: "Chief Information and Digital Officer, Pidilite Industries",
        company: "",
        image: "/speakers/vivek-sharma.png",
      },
      {
        name: "Vineet Shukla",
        role: "CTO – Mahindra Teqo",
        company: "",
        image: "/speakers/vineet-shukla.png",
      },
      {
        name: "Sudip Mazumder ",
        role: "Global CDIO, PGP Glass",
        company: "",
        image: "/speakers/sudip-mazumdar.png",
      },
      {
        name: "Sivakumar Nandipati",
        role: "Chief Digital Officer, Fedbank Financial Services",
        company: "",
        image: "/speakers/siva-kumar-nandipati.png",
      },
      {
        name: "Namrita Mahindro",
        role: "Chief Digital Officer, Aditya Birla Chemicals",
        company: "",
        image: "/speakers/namrita-mahindro.png",
      },
      {
        name: "Nishant Pradhan",
        role: "Chief AI Officer, Mirae Asset Mutual Fund (India)",
        company: "",
        image: "/speakers/nishant-pradhan.png",
      },
      {
        name: "Vijaya Kadiyala",
        role: " Executive Director, India Head of Enterprise Architecture and Data/AI Platform and Cloud Engineering, DBS Bank ",
        company: "",
        image: "/speakers/vijaya.png",
      },
      {
        name: "Tejasvi Addagada",
        role: " Senior Vice President, Head- Enterprise Data Management, Data Office, HDFC Bank",
        company: "",
        image: "/speakers/tejaswi.png",
      },
      {
        name: "Dr. Durga Prasad Dube",
        role: "EVP & Group Head - Cybersecurity & Information Risk Management, Reliance Industries Ltd.",
        company: "",
        image: "/speakers/durga-prasad-dube.png",
      },
      {
        name: "Amit Joshi",
        role: "CISO, Hindalco Industries",
        company: "",
        image: "/speakers/amit-joshi.png",
      },
      {
        name: "Aliasgar Karachiwala",
        role: "EVP & IT Head - Applications, Automation, AI and Business Solutions Group RBL Bank",
        company: "",
        image: "/speakers/aliasgar-karachiwala.png",
      },
      {
        name: "Hetal Presswala",
        role: "Chief Information Security Officer, Kalpatru Projects International ",
        company: "",
        image: "/speakers/hetal-presswala.png",
      },
      {
        name: "Chaitanya Gogineni",
        role: "Partner - Lighthouse (Data, Analytics and AI), KPMG India",
        company: "",
        image: "/speakers/chaitanya-gogineni.png",
      },
      {
        name: "Rajat Mathur",
        role: "Partner, BCG (Boston Consulting Group)",
        company: "",
        image: "/speakers/rajat-mathur.png",
      },
      {
        name: "Sankarson Banerjee",
        role: "Director, Dialoqa and Former CIO, RBL",
        company: "",
        image: "/speakers/sankarson-banerjee.png",
      },
      {
        name: "Sudipta Ghosh",
        role: " Partner, PwC India",
        company: "",
        image: "/speakers/sudipta-ghosh.png",
      },
      {
        name: "Mubin Shaikh",
        role: "Partner, Technology Consulting – Cybersecurity EY",
        company: "",
        image: "/speakers/mubin-shaikh.png",
      },


    ],
  },



  {
    location: "Mumbai",
    year: "2024",
    speakers: [
      { name: 'Khushru M. Mistry', role: 'Chief Technology Officer', company: '', image: '/edition/speakers/mumbai/khushru.png' },

      { name: 'Naved Hussain', role: 'Chief Technology Officer', company: '', image: '/edition/speakers/mumbai/naved.png' },

      { name: 'Vineet Shukla', role: 'Vice President (Head of Data)', company: '', image: '/edition/speakers/mumbai/vineet.png' },

      { name: 'Milind Khamkar', role: 'Group CIO', company: '', image: '/edition/speakers/mumbai/milind.png' },

      { name: 'Sudhir Kanvinde', role: 'Chief Information Officer', company: '', image: '/edition/speakers/mumbai/sudhir.png' },

      { name: 'Nishant Pradhan', role: 'Chief AI Officer', company: '', image: '/edition/speakers/mumbai/nishant.png' },

      { name: 'Bhawesh Chourasia', role: 'Global Head- Operations Excellence', company: '', image: '/edition/speakers/mumbai/bhawesh.png' },

      { name: 'Dr. Puneet Kohli', role: 'President IT & Data (CIO)', company: '', image: '/edition/speakers/mumbai/dr-puneet.png' },

      { name: 'Mukesh Jain', role: 'CTO & VP', company: '', image: '/edition/speakers/mumbai/mukesh.png' },

      { name: 'Prashant Thakkar', role: 'Chief of Operations and Technology Officer', company: '', image: '/edition/speakers/mumbai/prashant.png' },

      { name: 'Amit Joshi', role: 'CISO Adani Cement Business', company: '', image: '/edition/speakers/mumbai/amit.png' },

      { name: 'Haresh Ambaliya', role: 'General Manager, Automation, Data Science & Machine Learning', company: '', image: '/edition/speakers/mumbai/haresh.png' },

      { name: 'Kiran Belsekar', role: 'Executive VP- CISO & IT Governance', company: '', image: '/edition/speakers/mumbai/kiran.png' },

      { name: 'Jitendra Jadhwani', role: 'Head - Business Transformation & CISO', company: '', image: '/edition/speakers/mumbai/jitendra.png' },

      { name: 'Kulbhooshan Patil', role: 'VP and Head of Data Science', company: '', image: '/edition/speakers/mumbai/kulbhooshan.png' },

      { name: 'Amit Sharma', role: 'VP Lead - AI-ML Central Data Science', company: '', image: '/edition/speakers/mumbai/amit-sharma.png' },

      { name: 'Binita Prasad', role: 'Head- IT and Digital', company: '', image: '/edition/speakers/mumbai/binita.png' },

      { name: 'Anubhab Goel', role: 'Head- Digital Innovation', company: '', image: '/edition/speakers/mumbai/anubhab.png' },

      { name: 'Narendra K Saini', role: 'CDO | Chief Digital and Data Officer', company: '', image: '/edition/speakers/mumbai/narendra.png' },

      { name: 'Sachin Kawalkar', role: 'Global CISO, Head Info Sec, Cyber and Quality Management', company: '', image: '/edition/speakers/mumbai/sachin.png' },

      { name: 'Arun Gupta', role: 'IT Strategy Consultant Independent Director & Board Member', company: '', image: '/edition/speakers/mumbai/arun.png' },

      { name: 'Muralidharan Ramachandran', role: 'CIO', company: '', image: '/edition/speakers/mumbai/muralidharan.png' },

      { name: 'Rohan Padhi', role: 'Partner, Advisory', company: '', image: '/edition/speakers/mumbai/rohan.png' },
    ],
  },



  {
    location: "Bangalore",
    year: "2024",
    speakers: [
      { name: 'Rejin Surendran', role: 'Global CIO', company: '', image: '/edition/speakers/rejin-surendran.jpg' },

      { name: 'Sudeep Dey', role: 'Chief Information Officer', company: '', image: '/edition/speakers/sudeep-dey.jpg' },

      { name: 'Siva Perubotla', role: 'CIO & CISO', company: '', image: '/edition/speakers/siva-perubotla.jpg' },

      { name: 'Kamesh Babu R', role: 'CISO, Global Head of IT and Cybersecurity', company: '', image: '/edition/speakers/kamesh-babu-r.jpg' },

      { name: 'Dr. Shivani Rai Gupta', role: 'Chief Data Scientist', company: '', image: '/edition/speakers/dr.-shivani-rai-gupta.jpg' },

      { name: 'Ajay Chawla', role: 'Global Head of IT and Infosec', company: '', image: '/edition/speakers/ajay-chawla.jpg' },

      { name: 'Anbu David', role: 'Vice President & Head- Information Security, IT Ops & ITSM, DPO and Regional CISO for APAC', company: '', image: '/edition/speakers/anbu-david.jpg' },

      { name: 'Prakash Narayanan', role: 'Head of Intelligent Automation', company: '', image: '/edition/speakers/prakash-narayanan.jpg' },

      { name: 'Sudarshan Rajagopal', role: 'Partner Technology Consulting - Cyber Security', company: '', image: '/edition/speakers/sudharshan.jpg' },

      { name: 'Sunil David', role: 'Ex-Regional Director(IOT)', company: '', image: '/edition/speakers/sunil-david.jpg' },

      { name: 'Rakesh Ravuri', role: 'CTO - SVP Engineering', company: '', image: '/edition/speakers/rakesh-ravuri.jpg' },

      { name: 'Philip Varughese Vayarakunnil', role: 'Global Head - Cyber Risk & Compliance, Applied Intelligence, Platforms & Engineering ; DXC Security', company: '', image: '/edition/speakers/philip-varughese.jpg' },

      { name: 'Mandar Joshi', role: 'Partner - Management Consulting Leader Digital and Technology Implementation', company: '', image: '/edition/speakers/mandar-joshi.jpg' },

      { name: 'Vijay Gurumurthy', role: 'Director IT', company: '', image: '/edition/speakers/vijay-gurumurthy.jpg' },

      { name: 'Syed Ehsan Amanulla', role: 'SVP & CISO', company: '', image: '/edition/speakers/syed-ehsan.jpg' },

      { name: 'Mrinmoy Dey', role: 'Vice President - Chief Information Security Officer', company: '', image: '/edition/speakers/mrinmoy-dey.jpg' },

      { name: 'Sameer Salunke', role: 'Partner', company: '', image: '/edition/speakers/sameer-salunke.jpg' },

      { name: 'Dinesh Kumar Kotha', role: 'CEO', company: '', image: '/edition/speakers/dinesh-kumar.jpg' },

      { name: 'Md Zeeshan Ali', role: 'Lead Solutions Engineering', company: '', image: '/edition/speakers/zeeshan.jpg' },

      { name: 'Nithyalakshmi Subramanian', role: 'Head of Data & Analytics – AMEA', company: '', image: '/edition/speakers/nithy.png' },

      { name: 'Paras Nigam', role: 'Vice President, Data Science & Engineering', company: '', image: '/edition/speakers/paras-nigam.png' },

      { name: 'Shilpa Singh', role: 'Director of Cloud Technology', company: '', image: '/edition/speakers/shilpa.png' },

      { name: 'Kamesh Srinivasan', role: 'Partner- Data, AI, Automation', company: '', image: '/edition/speakers/kamesh-babu-r.jpg' },

      { name: 'Manish Shukla', role: 'Head of Generative AI Platform', company: '', image: '/edition/speakers/manish-shukla.png' },
    ],
  },



  {
    location: "Delhi",
    year: "2024",
    speakers: [
      { name: 'Himanshu Sharma', role: 'GM-Head of ICDC (Integrated Cyber Defence Center)', company: '', image: '/edition/speakers/gurugram/himanshu.png' },

      { name: 'Rajiv Sikka', role: 'CIO', company: '', image: '/edition/speakers/gurugram/rajiv.png' },

      { name: 'Shiva Singh', role: 'Director Technology', company: '', image: '/edition/speakers/gurugram/shiva.png' },

      { name: 'Vinod Bhat', role: 'CIO', company: '', image: '/edition/speakers/gurugram/vinod.png' },

      { name: 'Himaghna Banerjee', role: 'Business Value Services Manager', company: '', image: '/edition/speakers/gurugram/himaghna.png' },

      { name: 'Amit Singh', role: 'Partner', company: '', image: '/edition/speakers/gurugram/amit.png' },

      { name: 'Manish Sehgal', role: 'Partner, Risk Advisory', company: '', image: '/edition/speakers/gurugram/manish.png' },

      { name: 'Daya Prakash', role: 'Founder', company: '', image: '/edition/speakers/gurugram/daya.png' },

      { name: 'Aakash Bhutani', role: 'Head of Enterprise Application', company: '', image: '/edition/speakers/gurugram/akash.png' },

      { name: 'Puneet Wadwa', role: 'Head IT & Digital', company: '', image: '/edition/speakers/gurugram/puneet.png' },

      { name: 'Ekhlaque Bari', role: 'Founder', company: '', image: '/edition/speakers/gurugram/ekhlaque.png' },

      { name: 'Rajnish Virmani', role: 'CIO Advisor', company: '', image: '/edition/speakers/gurugram/rajnish.png' },

      { name: 'Nitin Dhingra', role: 'CDO & Vice President', company: '', image: '/edition/speakers/gurugram/nitin.png' },

      { name: 'Mohit Malik', role: 'CTO', company: '', image: '/edition/speakers/gurugram/mohit.png' },

      { name: 'Ambuj Bhalla', role: 'CISO', company: '', image: '/edition/speakers/gurugram/ambuj.png' },

      { name: 'Vinay Kumar', role: 'CIO', company: '', image: '/edition/speakers/gurugram/vinay.png' },

      { name: 'Rishi Aggarwal', role: 'Senior Director IT', company: '', image: '/edition/speakers/gurugram/rishi.png' },
    ],
  },


];

const FeaturedSpeakers = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const autoScrollFrame = useRef<number | null>(null);
  const lastScrollTime = useRef<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [activeEventIndex, setActiveEventIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isArrowMoving, setIsArrowMoving] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [revealDirection, setRevealDirection] = useState<"up" | "down">("down");

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealDirection(getScrollDirection());
          setIsVisible(false);
          requestAnimationFrame(() => {
            requestAnimationFrame(() => setIsVisible(true));
          });
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0, rootMargin: "-15% 0px -15% 0px" },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const upDelay = (order: number, total: number) =>
    `${(revealDirection === "up" ? total - 1 - order : order) * 160}ms`;

  const activeSpeakers = EVENTS[activeEventIndex].speakers;
  const loopSpeakers = [
    ...activeSpeakers,
    ...activeSpeakers,
    ...activeSpeakers,
  ];

  const getCardWidth = () => {
    const container = scrollRef.current;
    const card = container?.querySelector<HTMLElement>('[data-speaker-card]');
    if (!container || !card) return 140;

    const styles = window.getComputedStyle(container);
    const gap = parseFloat(styles.columnGap || styles.gap) || 20;
    return card.offsetWidth + gap;
  };

  const normalizeScrollPosition = () => {
    const container = scrollRef.current;
    if (!container || activeSpeakers.length === 0) return;

    const oneSetWidth = getCardWidth() * activeSpeakers.length;
    if (container.scrollLeft >= oneSetWidth * 2) {
      container.scrollLeft -= oneSetWidth;
    }
    if (container.scrollLeft <= 0) {
      container.scrollLeft += oneSetWidth;
    }
  };

  const scrollCarousel = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;

    setIsArrowMoving(true);
    lastScrollTime.current = null;
    container.scrollBy({
      left: direction === "left" ? -220 : 220,
      behavior: "smooth",
    });

    window.setTimeout(() => {
      normalizeScrollPosition();
      setIsArrowMoving(false);
    }, 500);
  };

  const goToEvent = (eventIndex: number) => {
    setActiveEventIndex(eventIndex);
    // reset carousel scroll position whenever the selected event changes
    scrollRef.current?.scrollTo({ left: 0, behavior: "smooth" });
  };

  const scrollYears = (direction: "left" | "right") => {
    const newIndex =
      direction === "left"
        ? Math.max(0, activeEventIndex - 1)
        : Math.min(EVENTS.length - 1, activeEventIndex + 1);
    goToEvent(newIndex);
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container || activeSpeakers.length === 0) return;

    container.scrollLeft = getCardWidth() * activeSpeakers.length;
  }, [activeEventIndex, activeSpeakers.length]);

  useEffect(() => {
    if (autoScrollFrame.current !== null) {
      cancelAnimationFrame(autoScrollFrame.current);
      autoScrollFrame.current = null;
    }

    lastScrollTime.current = null;
    if (isHovering || isArrowMoving || activeSpeakers.length === 0) return;

    const scrollContinuously = (timestamp: number) => {
      const container = scrollRef.current;
      if (!container) return;

      const previousTimestamp = lastScrollTime.current ?? timestamp;
      const elapsed = Math.min(timestamp - previousTimestamp, 40);
      container.scrollLeft += elapsed * 1;
      lastScrollTime.current = timestamp;
      normalizeScrollPosition();
      autoScrollFrame.current = requestAnimationFrame(scrollContinuously);
    };

    autoScrollFrame.current = requestAnimationFrame(scrollContinuously);

    return () => {
      if (autoScrollFrame.current !== null) {
        cancelAnimationFrame(autoScrollFrame.current);
        autoScrollFrame.current = null;
      }
    };
  }, [activeEventIndex, activeSpeakers.length, isArrowMoving, isHovering]);

  return (
    <section ref={sectionRef} className="bg-white py-12 px-4 sm:py-16 sm:px-6 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 gap-8 sm:gap-10 lg:grid-cols-[250px_1fr]">
          {/* Left column */}
          <div className="flex flex-col justify-center">
            <p
              className={`partners-reveal-up text-red-600 font-semibold text-lg ${isVisible ? "is-visible" : ""}`}
              style={{ animationDelay: upDelay(0, 3) }}
            >
              Retrospective
            </p>
            <h2
              className={`partners-reveal-up text-[#022158]
                  font-black
                  text-[34px]
                  sm:text-[48px]
                  md:text-[64px]
                  xl:text-[42px]
                  leading-[0.94] ${isVisible ? "is-visible" : ""}`}
              style={{ animationDelay: upDelay(1, 3) }}
            >
              Past
              <br />
              Speakers
            </h2>
            <a
              target="_blank"
              href="#"
              type="button"
              className={`view-all-speakers inline-block mt-8 sm:mt-14 partners-reveal-up ${isVisible ? "is-visible" : ""}`}
              style={{ animationDelay: upDelay(2, 3) }}
            >
              View all speakers
            </a>
          </div>

          {/* Right column */}
          <div className="relative min-w-0">
            {/* Carousel nav arrows */}
            <div className="flex justify-end gap-2 mb-4 sm:gap-3 sm:mb-6">
              <button
                type="button"
                onClick={() => scrollCarousel("left")}
                aria-label="Scroll speakers left"
                className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center text-slate-600 hover:bg-slate-50 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => scrollCarousel("right")}
                aria-label="Scroll speakers right"
                className="w-10 h-10 rounded-full bg-blue-950 flex items-center justify-center text-white hover:bg-blue-900 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Speaker cards — only the selected event's speakers */}
            <div
              key={activeEventIndex}
              ref={scrollRef}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              className="flex w-full min-w-0 gap-5 overflow-x-auto scroll-smooth pb-2 no-scrollbar"
            >
              {loopSpeakers.map((speaker, idx) => (
                <div
                  key={idx}
                  data-speaker-card
                  className="speaker-card group flex h-[260px] flex-shrink-0 w-[min(42vw,160px)] flex-col overflow-hidden rounded-2xl border border-blue-950 bg-white p-0 transition-colors duration-300 hover:bg-black sm:h-[230px] hover:sm:h-[auto] sm:w-[120px]"
                  style={{ animationDelay: `${idx * 90}ms` }}
                >
                  <div
                    className="aspect-square w-full overflow-hidden bg-cover bg-center bg-no-repeat transition-colors duration-300 group-hover:bg-black"
                    style={{
                      backgroundImage: "url('/gurugram/pastspeakers/bg.jpg')",
                    }}
                  >
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      className="h-full w-full object-cover grayscale transition-transform duration-500 ease-out group-hover:scale-[0.96]"
                    />
                  </div>
                  <div className="flex min-h-0 flex-1 flex-col bg-white px-2 pb-2 pt-3 transition-colors duration-300 group-hover:bg-black">
                    <p className="text-[13px] font-bold text-black transition-colors duration-300 group-hover:text-white sm:text-sm">{speaker.name}</p>
                    <div className="mt-1 max-h-[60px] overflow-hidden pr-1 text-[11px] leading-tight text-black transition-all duration-300 group-hover:max-h-[150px] group-hover:overflow-visible group-hover:text-white sm:text-xs">
                      <p>{speaker.role}</p>
                      {speaker.company && <p className="mt-1">{speaker.company}</p>}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Year / location selector */}
            <div className="mt-6 flex items-center gap-3 sm:mt-8 sm:gap-6">
              <button
                type="button"
                onClick={() => scrollYears("left")}
                aria-label="Previous event"
                className="text-slate-400 hover:text-slate-700 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex min-w-0 flex-1 gap-6 overflow-x-auto no-scrollbar sm:gap-10">
                {EVENTS.map((event, idx) => {
                  const isActive = idx === activeEventIndex;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => goToEvent(idx)}
                      className={`flex-shrink-0 text-left font-semibold leading-tight transition-colors ${isActive ? "text-red-600" : "text-blue-950"
                        }`}
                    >
                      {event.location}
                      <br />
                      {event.year}
                    </button>
                  );
                })}
              </div>

              <button
                type="button"
                onClick={() => scrollYears("right")}
                aria-label="Next event"
                className="text-slate-400 hover:text-slate-700 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes speakerCardReveal {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .speaker-card {
          opacity: 0;
          animation: speakerCardReveal 650ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        @media (prefers-reduced-motion: reduce) {
          .speaker-card {
            animation-duration: 1ms;
          }
        }
      `}</style>
    </section>
  );
};

export default FeaturedSpeakers;