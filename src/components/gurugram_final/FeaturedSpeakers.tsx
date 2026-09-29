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
        role: "IAS, Hon'ble Secretary to Government, Department of Electronics, IT, BT and S&T",
        company: "Government of Karnataka, ",
        image: "/speakers/bengaluru26/Dr-N-Manjula.jpg",
      },
      {
        name: "Kunal Mehta",
        role: "CIO",
        company: "Arvind Fashions, ",
        image: "/speakers/bengaluru26/Kunal-Mehta.jpg",
      },
      {
        name: "Kumar Nitesh",
        role: "CEO- Ajio Business and Trends Footwear",
        company: "Reliance Retail, ",
        image: "/speakers/bengaluru26/Kumar-Nitesh.jpg",
      },
      {
        name: "Amit Atri",
        role: " Sr. VP & Global CIO",
        company: "Tata Consumer Products, ",
        image: "/speakers/bengaluru26/Amit.jpg",
      },
      {
        name: "Dhivya Kumar Bansal",
        role: "CDTO",
        company: "Diageo India, ",
        image: "/speakers/bengaluru26/Dhivya-Kumar-Bansal.jpg",
      },
      {
        name: "Sudeep Dey",
        role: "CIO & CISO",
        company: "Aster DM Healthcare, ",
        image: "/speakers/bengaluru26/Sudeep-Dey.jpg",
      },
      {
        name: "Krishnan Venkateswaran",
        role: "Chief Digital & Information Officer",
        company: "Titan Company, ",
        image: "/speakers/bengaluru26/Krishnan-Venkateswaran.jpg",
      },
      {
        name: "Amrish Kumar Jain",
        role: "CIO & CISO",
        company: "Tally Solutions, ",
        image: "/speakers/bengaluru26/Amrish Kumar-Jain.jpg",
      },
      {
        name: "Ashley DSouza",
        role: "Chief Digital Officer",
        company: "Hindustan Coca-Cola Beverages, ",
        image: "/speakers/bengaluru26/Ashley-Dsouza.jpg",
      },
      {
        name: "Rohit Kilam",
        role: "CTO",
        company: "HDFC Life, ",
        image: "/speakers/bengaluru26/Rohit-Kilam.jpg",
      },
      {
        name: "Sambit Sarangi",
        role: "CTO - Tech Platform",
        company: "MakeMyTrip, ",
        image: "/speakers/bengaluru26/Sambit-Sarangi.jpg",
      },
      {
        name: "Akilur Rahman",
        role: "CTO",
        company: "Hitachi Energy India, ",
        image: "/speakers/bengaluru26/Akilur-Rahman.jpg",
      },
      {
        name: "Rajesh Ramachandran",
        role: "Global CDO & MD",
        company: "ABB Automation, ",
        image: "/speakers/bengaluru26/Rajesh-Ramachandran.jpg",
      },
      {
        name: "Narendra Babu",
        role: "CTO",
        company: "PayU, ",
        image: "/speakers/bengaluru26/Narendra-Babu.jpg",
      },
      {
        name: "Krishnendu Majumdar",
        role: "CPTO",
        company: "Yubi Group, ",
        image: "/speakers/bengaluru26/Krishnendu-Majumdar.jpg",
      },
      {
        name: "Umesh Bude",
        role: "CTO",
        company: "Pocket FM, ",
        image: "/speakers/bengaluru26/Umesh-Bude.jpg",
      },
      {
        name: "Chandan Vijay",
        role: "Global Chief Data Officer",
        company: "ABB Energy Industries, ",
        image: "/speakers/bengaluru26/Chandan-Vijay.jpg",
      },
      {
        name: "Kumar S",
        role: "CTO, Head of AI Strategy and Business",
        company: "Newgen Digital, ",
        image: "/speakers/bengaluru26/Kumar-S.jpg",
      },
      {
        name: "Shashi Mohan Singh",
        role: "CDO",
        company: "Reliance Consumer Products, ",
        image: "/speakers/bengaluru26/Shashi-Mohan-Singh.jpg",
      },
      {
        name: "Siddharth Sureka",
        role: "Chief AI Officer",
        company: "Motilal Oswal Financial Services, ",
        image: "/speakers/bengaluru26/Siddharth-Sureka.jpg",
      },
      {
        name: "Kuldeep Singh Tomar",
        role: "CISO",
        company: "BigBasket, ",
        image: "/speakers/bengaluru26/Kuldeep-Tomar.jpg",
      },
      {
        name: "Sharmistha Chatterjee",
        role: "Vice President, Data & AI Shared Capabilities Digital Workspace",
        company: "American Express, ",
        image: "/speakers/bengaluru26/Sharmistha-Chatterjee.jpg",
      },
      {
        name: "Santosh Kumar",
        role: "CISO",
        company: "Mphasis, ",
        image: "/speakers/bengaluru26/Santosh-Kumar.jpg",
      },
      {
        name: "Ishita De",
        role: "CISO",
        company: "Diageo India, ",
        image: "/speakers/bengaluru26/Ishita-de.jpg",
      },
      {
        name: "Biswajit Biswas",
        role: "Chief Data Scientist",
        company: "Tata Elxsi, ",
        image: "/speakers/bengaluru26/Biswajit-Biswas.jpg",
      },
      {
        name: "Venkataprasanna G",
        role: "VP & Head- Technology Risks",
        company: "HCL Tech, ",
        image: "/speakers/bengaluru26/Venkataprasanna-G.jpg",
      },
      {
        name: "Suvodip Chatterjee",
        role: "Global Head of AI Data science & MLOps",
        company: "Signify, ",
        image: "/speakers/bengaluru26/Suvodip-Chatterjee.jpg",
      },
      {
        name: "Nishant Chandra",
        role: "SVP Engineering",
        company: "Angel One, ",
        image: "/speakers/bengaluru26/Nishant-Chandra.jpg",
      },
      {
        name: "Jyothi Kodenkiri",
        role: "VP Cloud Engineering",
        company: "Deutsche Bank, ",
        image: "/speakers/bengaluru26/Jyothi-Kodenkiri.png",
      },
      {
        name: "Anil Yadav",
        role: "VP Engineering",
        company: "HDFC Securities, ",
        image: "/speakers/bengaluru26/Anil-Yadav.jpg",
      },
      {
        name: "Syed Atif Umar",
        role: "Head of Analytics",
        company: "Meesho, ",
        image: "/speakers/bengaluru26/Syed-Atif-Umar.jpg",
      },
      {
        name: "Sruti Sivaraman",
        role: "Head of Engineering Automation",
        company: "Nokia, ",
        image: "/speakers/bengaluru26/Sruti-Sivaraman.jpg",
      },
      {
        name: "Sundareshwar Krishnamurthy",
        role: "Partner and India Cyber leader",
        company: "PwC India, ",
        image: "/speakers/bengaluru26/Sundareshwar-Krishnamurthy.jpg",
      },
      {
        name: "Sundar Ram",
        role: "Partner & Leader - Cloud Engineering and Data Analytics",
        company: "PwC India, ",
        image: "/speakers/bengaluru26/Sundar-Ram.jpg",
      },
      {
        name: "Sreyssha George",
        role: "Managing Director & Partner",
        company: "BCG, ",
        image: "/speakers/bengaluru26/Sreyssha-George.jpg",
      },
      {
        name: "Akbar Ali Shaikh",
        role: "Partner",
        company: "Deloitte, ",
        image: "/speakers/bengaluru26/Akbar-Ali-Shaikh.jpg",
      },
      {
        name: "Anuj Kumar",
        role: "Partner",
        company: "KPMG India, ",
        image: "/speakers/bengaluru26/Anuj-Kumar.jpg",
      },
      {
        name: "Sundeep Kamath",
        role: "Regional Vice President",
        company: "Salesforce, ",
        image: "/speakers/bengaluru26/Sundeep-Kamath.jpg",
      },
      {
        name: "Tulasi Menon",
        role: "Head of Product, AI Strategy for Jira Service Management",
        company: "Atlassian, ",
        image: "/speakers/bengaluru26/Tulasi-Menon.jpg",
      },
      {
        name: "Rohan Pagey",
        role: "Regional Vice President Sales",
        company: "Salesforce, ",
        image: "/speakers/bengaluru26/Rohan-Pagey.jpg",
      },
      {
        name: "Bhaskar Bose",
        role: "Senior Manager Sales, ",
        company: "Salesforce, ",
        image: "/speakers/bengaluru26/Bhaskar-Bose.jpg",
      },
      {
        name: "Rajiv Garg",
        role: "Speialist Solution Engineer",
        company: "Salesforce, ",
        image: "/speakers/bengaluru26/Rajiv-Garg.jpg",
      },
      {
        name: "Sumit Sharma",
        role: "Director, Solution Engineering",
        company: "Salesforce, ",
        image: "/speakers/bengaluru26/Sumit-Sharma.jpg",
      },
      {
        name: "Jothi Kumar",
        role: "Global Sales Leader - Emerging Regions / APAC",
        company: "Atlassian",
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
        role: "Co-Founder",
        company: "Fluid AI",
        image: "/speakers/delhi26/raghav.png",
      },
      {
        name: "Ved Goel",
        role: "Group CFO & CEO – International Business",
        company: "Dr. Lal PathLabs, ",
        image: "/speakers/delhi26/Ved Goel.png",
      },
      {
        name: "Narottam Sharma",
        role: "CIO",
        company: "Jubilant Foodworks, ",
        image: "/speakers/delhi26/Narrottam-Sharma.png",
      },
      {
        name: "Ranganathan Vaidyanathan Iyer",
        role: "Group CIO",
        company: "JBM Group, ",
        image: "/speakers/delhi26/Ragannathan.png",
      },
      {
        name: "Kapil Mahajan",
        role: "Global & Group CITO",
        company: "Allcargo Logistics, ",
        image: "/speakers/delhi26/kapil mahajan.png",
      },
      {
        name: "Manish Chandegara",
        role: "Group CIO",
        company: "Simpolo Ceramics, ",
        image: "/speakers/delhi26/manish.png",
      },
      {
        name: "Mukul Jain",
        role: "CTO",
        company: "Axis Max Life Insurance, ",
        image: "/speakers/delhi26/mukul-jain.png",
      },
      {
        name: "Tarun Aggarwal",
        role: "Group CTO",
        company: "Capri Global Capital, ",
        image: "/speakers/delhi26/tarun agrawal.png",
      },
      {
        name: "Mukesh Sharma",
        role: "CTO",
        company: "Paisabazaar, ",
        image: "/speakers/delhi26/mukesh-sharma.png",
      },
      {
        name: "Mohit Malik",
        role: "CTO",
        company: "Chaayos, ",
        image: "/speakers/delhi26/mohit malik.png",
      },
      {
        name: "Sunil Kumar",
        role: "CTO",
        company: "Shiprocket, ",
        image: "/speakers/delhi26/Sunil Kumar.png",
      },
      {
        name: "Anurag Jain",
        role: "CDTO - KFC India and Partner Countries",
        company: "Yum Brands, ",
        image: "/speakers/delhi26/Anurag Jain.png",
      },
      {
        name: "Harsh Vardhan",
        role: "Global Head- Digital Innovation",
        company: "Apollo Tyres, ",
        image: "/speakers/delhi26/harsh vardhan.png",
      },
      {
        name: "Jagannath Sahoo",
        role: "CISO",
        company: "Gujarat Fluorochemicals Limited",
        image: "/speakers/delhi26/jagannathan.png",
      },
      {
        name: "Vivek Shankar",
        role: "CITSO & VP",
        company: "Axis Max Life Insurance Limited, ",
        image: "/speakers/delhi26/Vivek Shankar.png",
      },
      {
        name: "Amit Sharma",
        role: "Sr. VP - Enterprise Information Management and Analytics",
        company: "Canara HSBC Life Insurance, ",
        image: "/speakers/delhi26/amit-sharma.png",
      },
      {
        name: "Varun Bansal",
        role: "VP, Head IT",
        company: "Bata India",
        image: "/speakers/delhi26/varun bansal.png",
      },
      {
        name: "Animesh Srrivastava",
        role: " Senior VP of Technology",
        company: "Moglix, ",
        image: "/speakers/delhi26/animesh.png",
      },
      {
        name: "Ritesh Rathod",
        role: "Chief Strategy & Data Officer",
        company: "Canara HSBC Life Insurance, ",
        image: "/speakers/delhi26/Ritesh-Rathod.png",
      },
      {
        name: "Atul Govil",
        role: "Chief Transformation Officer & Head (SAP & IT) - Corporate",
        company: "India Glycols Limited, ",
        image: "/speakers/delhi26/Atul-Givil.png",
      },
      {
        name: "Raman Srinivasan",
        role: "Chief Digital Officer",
        company: "InMobi Group, ",
        image: "/speakers/delhi26/Raman Srinivasan.png",
      },
      {
        name: "Rajat Wadhwa",
        role: "Head- Customer Applications",
        company: "Hero FinCorp, ",
        image: "/speakers/delhi26/rajat wadhwa.png",
      },
      {
        name: "Anjali Dutta",
        role: "Head of Experience Design & Digital Studio | BORN Service Line",
        company: "Tech Mahindra, ",
        image: "/speakers/delhi26/Anjali Dutta.png",
      },
      {
        name: "Pankaj Gupta",
        role: "Chief AI Officer",
        company: "Jindal Stainless, ",
        image: "/speakers/delhi26/Pankaj Gupta.png",
      },
      {
        name: "Ritesh Jain",
        role: "Partner- Agentic Automation",
        company: "PwC India",
        image: "/speakers/delhi26/Ritesh Jain.png",
      },
      {
        name: "Ankit Garg",
        role: "Partner- Risk Consulting",
        company: "PwC, ",
        image: "/speakers/delhi26/Ankit Garg.png",
      },
      {
        name: "Vinod Kumar",
        role: "Senior Partner & Leader- Manufacturing, ",
        company: "PwC India, ",
        image: "/speakers/delhi26/Vinod Pathak.png",
      },
      {
        name: "Ayush Gupta",
        role: "Partner",
        company: "KPMG",
        image: "/speakers/delhi26/ayush-agrawal.png",
      },
      {
        name: "Abhishek Das",
        role: "Partner- Consulting",
        company: "EY",
        image: "/speakers/delhi26/Abhishek Das.png",
      },
      {
        name: "Manpreet Singh Ahuja",
        role: "Partner, Chief Client and Alliance & TMT Sector Leader",
        company: "PwC India, ",
        image: "/speakers/delhi26/Manpreet Ahuja.png",
      },
      {
        name: "Vyshak Venugopalan",
        role: "Sr Director, Solution Consulting, India and JAPAC Partner Solution Leader",
        company: "Adobe, ",
        image: "/speakers/delhi26/Vyash-V.png",
      },
      {
        name: "Gowthamram C. Nallan",
        role: "Solutions Consulting Lead",
        company: "Adobe India, ",
        image: "/speakers/delhi26/Gowthamram-C.-Nallan.png",
      },
      {
        name: "Siddharth Sikand",
        role: "Customer Transformation Advisor (Distinguished Enterprise Architect)",
        company: "Salesforce",
        image: "/speakers/delhi26/siddharth-sikand.png",
      },
      {
        name: "Rachit Bhatnagar",
        role: "Solutions Consulting Practice Lead",
        company: "Adobe, ",
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
        role: "Chief Digital Officer",
        company: "Century Plyboards, ",
        image: "/speakers/bengaluru/bhargab.png",
      },
      {
        name: "Debashis Singh",
        role: "Chief Information Officer",
        company: "Persistent Systems, ",
        image: "/speakers/bengaluru/debashis.png",
      },
      {
        name: "Rejin Surendran",
        role: "Global CIO",
        company: "Wipro Enterprises Limited, ",
        image: "/speakers/bengaluru/rejin.png",
      },
      {
        name: "Anand V",
        role: "Chief Information Officer",
        company: "APAC - Randstad, ",
        image: "/speakers/bengaluru/anand.png",
      },
      {
        name: "Srinivas Jaggumantri",
        role: "Unit Technology Officer",
        company: "Financial Services, Infosys",
        image: "/speakers/bengaluru/srinivas.png",
      },
      {
        name: "Geetha Adinarayan",
        role: "CTO, IBM Consulting",
        company: "India and South Asia, IBM",
        image: "/speakers/bengaluru/geetha.png",
      },
      {
        name: "Raman Srinivasan",
        role: "Chief Digital Officer",
        company: "Inmobi Group",
        image: "/speakers/bengaluru/raman.png",
      },
      {
        name: "Nandkishor Dhomne",
        role: "CIO",
        company: "Manipal Hospitals",
        image: "/speakers/bengaluru/nandkishor.png",
      },
      {
        name: "Dr. Avnish Kshatriya",
        role: "Chief Digital and Information Officer",
        company: "Trilegal, ",
        image: "/speakers/bengaluru/avnish.png",
      },
      {
        name: "Koushik Kadidal",
        role: "Chief Data Officer",
        company: "PayU, ",
        image: "/speakers/bengaluru/koushik.png",
      },
      {
        name: "Chandramouli Godhandaraman",
        role: "Head of Architecture (Retail) and Program Engineering",
        company: "HDFC Bank, ",
        image: "/speakers/bengaluru/chandramouli.png",
      },
      {
        name: "Vivek Rajagopal",
        role: "Group Chief Analytics and AI Officer",
        company: "Narayana Health, ",
        image: "/speakers/bengaluru/vivek.png",
      },
      {
        name: "Mathangi Sri Ramachandran",
        role: "Chief Data Officer",
        company: "Yubi, ",
        image: "/speakers/bengaluru/mathangi.png",
      },
      {
        name: "Jason Joseph",
        role: "Chief Information Security Officer",
        company: "mPokket Financial Services Pvt Ltd, ",
        image: "/speakers/bengaluru/jason.png",
      },
      {
        name: "Vikram Balakrishna",
        role: "CTO and head of transformation - Technology Centers India & Ph",
        company: "Atos, ",
        image: "/speakers/bengaluru/vikram.png",
      },
      {
        name: "Sheela Siddappa,",
        role: "Leader-AI",
        company: "Commonwealth Bank, ",
        image: "/speakers/bengaluru/sheela.png",
      },
      {
        name: "Manish Shukla",
        role: "Head of Generative AI Platform",
        company: "NatWest Group, ",
        image: "/speakers/bengaluru/manish.png",
      },
      {
        name: "Shashwat Singh",
        role: "Chief Information Officer",
        company: "boAt, ",
        image: "/speakers/bengaluru/shashwat.png",
      },
      {
        name: "Sudarshan Rajagopal",
        role: "Partner Technology Consulting - Cyber Security",
        company: "EY, ",
        image: "/speakers/bengaluru/sudharshan.png",
      },
      {
        name: "Sudeep Dey",
        role: "CIO-CISO",
        company: "Aster DM Healthcare, India",
        image: "/speakers/bengaluru/sudeep.png",
      },
      {
        name: "Yogesh Kumar",
        role: "CISO",
        company: "Fanuc India, ",
        image: "/speakers/bengaluru/yogesh.png",
      },
      {
        name: "Preetam Hazarika (Moderator)",
        role: "Partner",
        company: "PwC India, ",
        image: "/speakers/bengaluru/preetam.png",
      },
      {
        name: "Suchin Sudhakaran",
        role: "Cyber Security Leader",
        company: "BP, ",
        image: "/speakers/bengaluru/suchin.png",
      },
      {
        name: "Sridhar Jonnala",
        role: "CTO, AI, Strategy, Delivery and Governance",
        company: "IBM, India, ",
        image: "/speakers/bengaluru/sridhar.png",
      },
      {
        name: "Vikas Singh Yadav",
        role: "CISO",
        company: "Flipkart",
        image: "/speakers/bengaluru/vikas.png",
      },
      {
        name: "Vishwesh Pai",
        role: "Head of Product, JSM Service & AI",
        company: "Atlassian, ",
        image: "/speakers/bengaluru/vishwesh.png",
      },
      {
        name: "Amit Atri",
        role: "Global CIO",
        company: "Tata Consumer Products, ",
        image: "/speakers/bengaluru/amit.png",
      },
      {
        name: "Venkat Iyer",
        role: "Partner",
        company: "PwC, ",
        image: "/speakers/bengaluru/venkat.png",
      },
      {
        name: "Mithun Appaiah",
        role: "CEO",
        company: "WoW! Momo FMCG, ",
        image: "/speakers/bengaluru/mithun.png",
      },
      {
        name: "Rajnil Mallik",
        role: "Partner and GenAI GTM Leader",
        company: "PwC India, ",
        image: "/speakers/bengaluru/rajnil.png",
      },
      {
        name: "Ganapathy V",
        role: "VP, & Head- Global Advanced Analytics CoE",
        company: "Holcim, ",
        image: "/speakers/bengaluru/ganapathy.png",
      },
      {
        name: "Mallikarjun Kandkuru",
        role: "Partner",
        company: "KPMG India, ",
        image: "/speakers/bengaluru/mallikarjun.png",
      },
      {
        name: "Pragati (Kushwah) Chakraborty",
        role: "Partner",
        company: "Deloitte, ",
        image: "/speakers/bengaluru/pragati.png",
      },
      {
        name: "Rupesh Lochan Gupta",
        role: "Head- AI Platform and AI CoE",
        company: "Tata Consultancy Services, ",
        image: "/speakers/bengaluru/rupesh.png",
      },
      {
        name: "Dhruv Rastogi",
        role: "SVP & Head of Data Science",
        company: "Medi Assist, ",
        image: "/speakers/bengaluru/dhruv.png",
      },
      {
        name: "Prasanna",
        role: "Prasanna Kumar Subbanna – VP, Global Patient Safety",
        company: "Novo Nordisk, ",
        image: "/speakers/bengaluru/prasanna.png",
      },
      {
        name: "Shalini Sriram",
        role: "Regional Sales Director",
        company: "Salesforce, ",
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
        role: "MD & CEO",
        company: "Fedbank Financial Services Ltd., ",
        image: "/speakers/parvez-mulla.png",
      },
      {
        name: "Dipu KV",
        role: "Senior President",
        company: "Bajaj Allianz General Insurance, ",
        image: "/speakers/dipu-kv.png",
      },
      {
        name: "Sumit Garg",
        role: "Global CIO",
        company: "Piramal Pharma Solutions, ",
        image: "/speakers/Sumit-Garg.png",
      },
      {
        name: "Amit Ray",
        role: "CIO Advisory and Customer Success Leader",
        company: "Jio, ",
        image: "/speakers/amit-ray.png",
      },
      {
        name: "Aashish Kshetry",
        role: "CIO & VP-IT",
        company: "Asian Paints, ",
        image: "/speakers/ashish-kshetry.png",
      },
      {
        name: "Tarun Pandey",
        role: "Chief Technology Officer",
        company: "Aditya Birla Health Insurance, ",
        image: "/speakers/tarun-pandey.png",
      },
      {
        name: "Nikhil Malhotra",
        role: "Chief Innovation Officer & Global Head of AI and Emerging Technologies",
        company: "Tech Mahindra, ",
        image: "/speakers/nikhil-malhotra.png",
      },
      {
        name: "Mukesh Jain",
        role: "CTO, Executive Vice President",
        company: "Capgemini, ",
        image: "/speakers/mukesh-jain.png",
      },
      {
        name: "Suman Guha",
        role: "CTO",
        company: "Tata CLiQ Fashion, ",
        image: "/speakers/suman-guha.png",
      },
      {
        name: "Vivek Sharma",
        role: "Chief Information and Digital Officer",
        company: "Pidilite Industries, ",
        image: "/speakers/vivek-sharma.png",
      },
      {
        name: "Vineet Shukla",
        role: "CTO",
        company: "Mahindra Teqo",
        image: "/speakers/vineet-shukla.png",
      },
      {
        name: "Sudip Mazumder ",
        role: "Global CDIO",
        company: "PGP Glass, ",
        image: "/speakers/sudip-mazumdar.png",
      },
      {
        name: "Sivakumar Nandipati",
        role: "Chief Digital Officer",
        company: "Fedbank Financial Services, ",
        image: "/speakers/siva-kumar-nandipati.png",
      },
      {
        name: "Namrita Mahindro",
        role: "Chief Digital Officer",
        company: "Aditya Birla Chemicals, ",
        image: "/speakers/namrita-mahindro.png",
      },
      {
        name: "Nishant Pradhan",
        role: "Chief AI Officer",
        company: "Mirae Asset Mutual Fund (India), ",
        image: "/speakers/nishant-pradhan.png",
      },
      {
        name: "Vijaya Kadiyala",
        role: " Executive Director, India Head of Enterprise Architecture and Data/AI Platform and Cloud Engineering",
        company: "DBS Bank, ",
        image: "/speakers/vijaya.png",
      },
      {
        name: "Tejasvi Addagada",
        role: " Senior Vice President, Head- Enterprise Data Management, Data Office",
        company: "HDFC Bank, ",
        image: "/speakers/tejaswi.png",
      },
      {
        name: "Dr. Durga Prasad Dube",
        role: "EVP & Group Head - Cybersecurity & Information Risk Management",
        company: "Reliance Industries Ltd., ",
        image: "/speakers/durga-prasad-dube.png",
      },
      {
        name: "Amit Joshi",
        role: "CISO",
        company: "Hindalco Industries, ",
        image: "/speakers/amit-joshi.png",
      },
      {
        name: "Aliasgar Karachiwala",
        role: "EVP & IT Head - Applications, Automation, AI and Business Solutions Group",
        company: "RBL Bank, ",
        image: "/speakers/aliasgar-karachiwala.png",
      },
      {
        name: "Hetal Presswala",
        role: "Chief Information Security Officer",
        company: "Kalpatru Projects International, ",
        image: "/speakers/hetal-presswala.png",
      },
      {
        name: "Chaitanya Gogineni",
        role: "Partner - Lighthouse (Data, Analytics and AI)",
        company: "KPMG India",
        image: "/speakers/chaitanya-gogineni.png",
      },
      {
        name: "Rajat Mathur",
        role: "Partner",
        company: "BCG (Boston Consulting Group), ",
        image: "/speakers/rajat-mathur.png",
      },
      {
        name: "Sankarson Banerjee",
        role: "Director, Dialoqa and Former CIO",
        company: "RBL, ",
        image: "/speakers/sankarson-banerjee.png",
      },
      {
        name: "Sudipta Ghosh",
        role: " Partner",
        company: "PwC India, ",
        image: "/speakers/sudipta-ghosh.png",
      },
      {
        name: "Mubin Shaikh",
        role: "Partner, Technology Consulting – Cybersecurity",
        company: "EY",
        image: "/speakers/mubin-shaikh.png",
      },


    ],
  },



  {
    location: "Mumbai",
    year: "2024",
    speakers: [
      { name: 'Khushru M. Mistry', role: 'Chief Technology Officer', company: 'GM Modular', image: '/edition/speakers/mumbai/khushru.png' },
      { name: 'Naved Hussain', role: 'Chief Technology Officer', company: 'Adani Capital', image: '/edition/speakers/mumbai/naved.png' },
      { name: 'Vineet Shukla', role: 'Vice President (Head of Data)', company: 'Mahindra Group', image: '/edition/speakers/mumbai/vineet.png' },
      { name: 'Milind Khamkar', role: 'Group CIO', company: 'SUPER-MAX', image: '/edition/speakers/mumbai/milind.png' },
      { name: 'Sudhir Kanvinde', role: 'Chief Information Officer', company: 'The Supreme Industries', image: '/edition/speakers/mumbai/sudhir.png' },
      { name: 'Nishant Pradhan', role: 'Chief AI Officer', company: 'Mirae Asset Global Investments', image: '/edition/speakers/mumbai/nishant.png' },
      { name: 'Bhawesh Chourasia', role: 'Global Head- Operations Excellence', company: 'Microland', image: '/edition/speakers/mumbai/bhawesh.png' },
      { name: 'Dr. Puneet Kohli', role: 'President IT & Data (CIO)', company: 'Liberty General Insurance', image: '/edition/speakers/mumbai/dr-puneet.png' },
      { name: 'Mukesh Jain', role: 'CTO & VP', company: 'Leading AI Based Innovation @ Capgemini', image: '/edition/speakers/mumbai/mukesh.png' },
      { name: 'Prashant Thakkar', role: 'Chief of Operations and Technology Officer', company: 'LIC Mutual Fund', image: '/edition/speakers/mumbai/prashant.png' },
      { name: 'Amit Joshi', role: 'CISO Adani Cement Business', company: 'Adani Enterprises', image: '/edition/speakers/mumbai/amit.png' },
      { name: 'Haresh Ambaliya', role: 'General Manager, Automation, Data Science & Machine Learning', company: 'Jio Platforms', image: '/edition/speakers/mumbai/haresh.png' },
      { name: 'Kiran Belsekar', role: 'Executive VP- CISO & IT Governance', company: 'Bandhan Life', image: '/edition/speakers/mumbai/kiran.png' },
      { name: 'Jitendra Jadhwani', role: 'Head - Business Transformation & CISO', company: 'Tata Motors Finance', image: '/edition/speakers/mumbai/jitendra.png' },
      { name: 'Kulbhooshan Patil', role: 'VP and Head of Data Science', company: 'TATA AIG General Insurance', image: '/edition/speakers/mumbai/kulbhooshan.png' },
      { name: 'Amit Sharma', role: 'VP Lead - AI-ML Central Data Science', company: 'Paytm', image: '/edition/speakers/mumbai/amit-sharma.png' },
      { name: 'Binita Prasad', role: 'Head- IT and Digital', company: 'Saint-Gobain Group India | Grindwell Norton', image: '/edition/speakers/mumbai/binita.png' },
      { name: 'Anubhab Goel', role: 'Head- Digital Innovation', company: 'HDFC ERGO General Insurance', image: '/edition/speakers/mumbai/anubhab.png' },
      { name: 'Narendra K Saini', role: 'CDO | Chief Digital and Data Officer', company: 'Lupin', image: '/edition/speakers/mumbai/narendra.png' },
      { name: 'Sachin Kawalkar', role: 'Global CISO, Head Info Sec, Cyber and Quality Management', company: 'Neeyamo', image: '/edition/speakers/mumbai/sachin.png' },
      { name: 'Arun Gupta', role: 'IT Strategy Consultant Independent Director & Board Member', company: 'Hemas Pharmaceuticals, Sri Lanka & Locuz Enterprise Solutions, India', image: '/edition/speakers/mumbai/arun.png' },
      { name: 'Muralidharan Ramachandran', role: 'CIO', company: 'Startek', image: '/edition/speakers/mumbai/muralidharan.png' },
      { name: 'Rohan Padhi', role: 'Partner, Advisory', company: 'KPMG India', image: '/edition/speakers/mumbai/rohan.png' },
    ],
  },



  {
    location: "Bangalore",
    year: "2024",
    speakers: [
      { name: 'Rejin Surendran', role: 'Global CIO', company: 'Wipro Enterprises Limited', image: '/edition/speakers/rejin-surendran.jpg' },
      { name: 'Sudeep Dey', role: 'Chief Information Officer', company: 'Healthcare Global Enterprises Limited', image: '/edition/speakers/sudeep-dey.jpg' },
      { name: 'Siva Perubotla', role: 'CIO & CISO', company: 'Brillio', image: '/edition/speakers/siva-perubotla.jpg' },
      { name: 'Kamesh Babu R', role: 'CISO, Global Head of IT and Cybersecurity', company: 'Subex', image: '/edition/speakers/kamesh-babu-r.jpg' },
      { name: 'Dr. Shivani Rai Gupta', role: 'Chief Data Scientist', company: 'Jio', image: '/edition/speakers/dr.-shivani-rai-gupta.jpg' },
      { name: 'Ajay Chawla', role: 'Global Head of IT and Infosec', company: 'Sterlite Technologies Limited', image: '/edition/speakers/ajay-chawla.jpg' },
      { name: 'Anbu David', role: 'Vice President & Head- Information Security, IT Ops & ITSM, DPO and Regional CISO for APAC', company: 'Holcim', image: '/edition/speakers/anbu-david.jpg' },
      { name: 'Prakash Narayanan', role: 'Head of Intelligent Automation', company: 'Cyient', image: '/edition/speakers/prakash-narayanan.jpg' },
      { name: 'Sudarshan Rajagopal', role: 'Partner Technology Consulting - Cyber Security', company: 'EY', image: '/edition/speakers/sudharshan.jpg' },
      { name: 'Sunil David', role: 'Ex-Regional Director(IOT)', company: 'AT&T', image: '/edition/speakers/sunil-david.jpg' },
      { name: 'Rakesh Ravuri', role: 'CTO - SVP Engineering', company: 'Publicis Sapient', image: '/edition/speakers/rakesh-ravuri.jpg' },
      { name: 'Philip Varughese Vayarakunnil', role: 'Global Head - Cyber Risk & Compliance, Applied Intelligence, Platforms & Engineering ; DXC Security', company: 'DXC Technology', image: '/edition/speakers/philip-varughese.jpg' },
      { name: 'Mandar Joshi', role: 'Partner - Management Consulting Leader Digital and Technology Implementation', company: 'KPMG', image: '/edition/speakers/mandar-joshi.jpg' },
      { name: 'Vijay Gurumurthy', role: 'Director IT', company: 'Capgemini', image: '/edition/speakers/vijay-gurumurthy.jpg' },
      { name: 'Syed Ehsan Amanulla', role: 'SVP & CISO', company: 'Amicorp Group', image: '/edition/speakers/syed-ehsan.jpg' },
      { name: 'Mrinmoy Dey', role: 'Vice President - Chief Information Security Officer', company: 'Lendingkart', image: '/edition/speakers/mrinmoy-dey.jpg' },
      { name: 'Sameer Salunke', role: 'Partner', company: 'KPMG', image: '/edition/speakers/sameer-salunke.jpg' },
      { name: 'Dinesh Kumar Kotha', role: 'CEO', company: 'Ixigo Trains and ConfirmTkt', image: '/edition/speakers/dinesh-kumar.jpg' },
      { name: 'Md Zeeshan Ali', role: 'Lead Solutions Engineering', company: 'Slack', image: '/edition/speakers/zeeshan.jpg' },
      { name: 'Nithyalakshmi Subramanian', role: 'Head of Data & Analytics – AMEA', company: 'Kellanova', image: '/edition/speakers/nithy.png' },
      { name: 'Paras Nigam', role: 'Vice President, Data Science & Engineering', company: 'KnowBe4', image: '/edition/speakers/paras-nigam.png' },
      { name: 'Shilpa Singh', role: 'Director of Cloud Technology', company: 'Virtusa', image: '/edition/speakers/shilpa.png' },
      { name: 'Kamesh Srinivasan', role: 'Partner- Data, AI, Automation', company: 'KPMG India', image: '/edition/speakers/kamesh-babu-r.jpg' },
      { name: 'Manish Shukla', role: 'Head of Generative AI Platform', company: 'NatWest Group', image: '/edition/speakers/manish-shukla.png' },
    ],
  },



  {
    location: "Delhi",
    year: "2024",
    speakers: [
      { name: 'Himanshu Sharma', role: 'GM-Head of ICDC (Integrated Cyber Defence Center)', company: 'Gramax (Subsidiary of GMR Group)', image: '/edition/speakers/gurugram/himanshu.png' },
      { name: 'Rajiv Sikka', role: 'CIO', company: 'Medanta', image: '/edition/speakers/gurugram/rajiv.png' },
      { name: 'Shiva Singh', role: 'Director Technology', company: 'Moglix', image: '/edition/speakers/gurugram/shiva.png' },
      { name: 'Vinod Bhat', role: 'CIO', company: 'Vistara', image: '/edition/speakers/gurugram/vinod.png' },
      { name: 'Himaghna Banerjee', role: 'Business Value Services Manager', company: 'Salesforce', image: '/edition/speakers/gurugram/himaghna.png' },
      { name: 'Amit Singh', role: 'Partner', company: 'EY', image: '/edition/speakers/gurugram/amit.png' },
      { name: 'Manish Sehgal', role: 'Partner, Risk Advisory', company: 'Deloitte India', image: '/edition/speakers/gurugram/manish.png' },
      { name: 'Daya Prakash', role: 'Founder', company: 'Talent On Lease', image: '/edition/speakers/gurugram/daya.png' },
      { name: 'Aakash Bhutani', role: 'Head of Enterprise Application', company: 'HT Media', image: '/edition/speakers/gurugram/akash.png' },
      { name: 'Puneet Wadwa', role: 'Head IT & Digital', company: 'Hatch', image: '/edition/speakers/gurugram/puneet.png' },
      { name: 'Ekhlaque Bari', role: 'Founder', company: 'XdotO Consulting and Coaching', image: '/edition/speakers/gurugram/ekhlaque.png' },
      { name: 'Rajnish Virmani', role: 'CIO Advisor', company: 'Zoom Video Communication', image: '/edition/speakers/gurugram/rajnish.png' },
      { name: 'Nitin Dhingra', role: 'CDO & Vice President', company: 'Hindware', image: '/edition/speakers/gurugram/nitin.png' },
      { name: 'Mohit Malik', role: 'CTO', company: 'Chaayos', image: '/edition/speakers/gurugram/mohit.png' },
      { name: 'Ambuj Bhalla', role: 'CISO', company: 'BharatPe', image: '/edition/speakers/gurugram/ambuj.png' },
      { name: 'Vinay Kumar', role: 'CIO', company: "McDonald's India", image: '/edition/speakers/gurugram/vinay.png' },
      { name: 'Rishi Aggarwal', role: 'Senior Director IT', company: 'Concentrix', image: '/edition/speakers/gurugram/rishi.png' },
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
                    <div className=" max-h-[60px] overflow-hidden pr-1 text-[11px] leading-tight text-black transition-all duration-300 group-hover:max-h-[150px] group-hover:overflow-visible group-hover:text-white sm:text-xs">
                      {speaker.company && <p className="">{speaker.company}</p>}
                      <p>{speaker.role}</p>

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