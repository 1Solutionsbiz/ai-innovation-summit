const FeaturedSpeakers = () => {
    // 🔥 Added your full Delhi 26 speakers list
  const delhispeakers = [
// Bangalore 26 Speakers List Starts Here
    {
      name: "Dr. N. Manjula",
      role: "IAS, Hon'ble Secretary to Government, Department of Electronics, IT, BT and S&T, Government of Karnataka ",
      linkedin: "",
      image: "/speakers/bengaluru26/Dr-N-Manjula.jpg",
    },
    {
      name: "Kunal Mehta",
      role: "CIO, Arvind Fashions",
      linkedin: "https://www.linkedin.com/in/kunal-mehta-1377516/",
      image: "/speakers/bengaluru26/Kunal-Mehta.jpg",
    },
    {
      name: "Kumar Nitesh",
      role: "CEO- Ajio Business and Trends Footwear, Reliance Retail",
      linkedin: "https://www.linkedin.com/in/kumar-nitesh1/",
      image: "/speakers/bengaluru26/Kumar-Nitesh.jpg",
    },
    {
      name: "Amit Atri",
      role: "	Sr. VP & Global Chief Information Officer, Tata Consumer Products",
      linkedin: "https://www.linkedin.com/in/amit-atri-414797/",
      image: "/speakers/bengaluru26/Amit.jpg",
    },
    {
      name: "Dhivya Kumar Bansal",
      role: "CDTO, Diageo India",
      linkedin: "https://www.linkedin.com/in/dhivya-kumar-bansal/",
      image: "/speakers/bengaluru26/Dhivya-Kumar-Bansal.jpg",
    },
    {
      name: "Sudeep Dey",
      role: "CIO & CISO, Aster DM Healthcare",
      linkedin: "https://www.linkedin.com/in/deysudeep/",
      image: "/speakers/bengaluru26/Sudeep-Dey.jpg",
    },
    {
      name: "Krishnan Venkateswaran",
      role: "Chief Digital & Information Officer, Titan Company",
      linkedin: "",
      image: "/speakers/bengaluru26/Krishnan-Venkateswaran.jpg",
    },
    {
      name: "Amrish Kumar Jain",
      role: "CIO & CISO, Tally Solutions",
      linkedin: "https://www.linkedin.com/in/amrishjain/ ",
      image: "/speakers/bengaluru26/Amrish Kumar-Jain.jpg",
    },
    {
      name: "Ashley DSouza",
      role: "Chief Digital Officer, Hindustan Coca-Cola Beverages",
      linkedin: "https://www.linkedin.com/in/ashleydsouza/ ",
      image: "/speakers/bengaluru26/Ashley-Dsouza.jpg",
    },
    {
      name: "Rohit Kilam",
      role: "CTO, HDFC Life ",
      linkedin: "https://www.linkedin.com/in/rohitkilam/",
      image: "/speakers/bengaluru26/Rohit-Kilam.jpg",
    },
    {
      name: "Sambit Sarangi",
      role: "CTO - Tech Platform, MakeMyTrip",
      linkedin: "https://www.linkedin.com/in/sambitsarangi/",
      image: "/speakers/bengaluru26/Sambit-Sarangi.jpg",
    },
    {
      name: "Akilur Rahman",
      role: "CTO, Hitachi Energy India",
      linkedin: "https://www.linkedin.com/in/akilurrahman/",
      image: "/speakers/bengaluru26/Akilur-Rahman.jpg",
    },
    {
      name: "Rajesh Ramachandran",
      role: "Global Chief Digital Officer & MD, ABB Automation",
      linkedin: "https://www.linkedin.com/in/rajeshramachandranurl/",
      image: "/speakers/bengaluru26/Rajesh-Ramachandran.jpg",
    },
    {
      name: "Narendra Babu",
      role: "CTO, PayU",
      linkedin: "https://www.linkedin.com/in/narendra-babu-4780444/",
      image: "/speakers/bengaluru26/Narendra-Babu.jpg",
    },
    {
      name: "Krishnendu Majumdar",
      role: "CPTO, Yubi Group",
      linkedin: "https://www.linkedin.com/in/krishnendum",
      image: "/speakers/bengaluru26/Krishnendu-Majumdar.jpg",
    },    
    {
      name: "Umesh Bude",
      role: "CTO, Pocket FM",
      linkedin: "https://www.linkedin.com/in/umesh-bude/",
      image: "/speakers/bengaluru26/Umesh-Bude.jpg",
    },
    {
      name: "Chandan Vijay",
      role: "Global Chief Data Officer, ABB Energy Industries",
      linkedin: "https://www.linkedin.com/in/chandanvijay/",
      image: "/speakers/bengaluru26/Chandan-Vijay.jpg",
    },
    {
      name: "Kumar S",
      role: "CTO, Head of AI Strategy and Business, Newgen Digital",
      linkedin: "https://www.linkedin.com/in/kumar-subramani/",
      image: "/speakers/bengaluru26/Kumar-S.jpg",
    },
    {
      name: "Shashi Mohan Singh",
      role: "CDO, Reliance Consumer Products",
      linkedin: "https://www.linkedin.com/in/shashi-mohan-singh-13a9344/",
      image: "/speakers/bengaluru26/Shashi-Mohan-Singh.jpg",
    },
    {
      name: "Siddharth Sureka",
      role: "Chief AI Officer, Motilal Oswal Financial Services",
      linkedin: "https://www.linkedin.com/in/siddharth-sureka/",
      image: "/speakers/bengaluru26/Siddharth-Sureka.jpg",
    },
    {
      name: "Kuldeep Singh Tomar",
      role: "CISO, BigBasket",
      linkedin: "https://www.linkedin.com/in/kuldeep-t-5b21316/",
      image: "/speakers/bengaluru26/Kuldeep-Tomar.jpg",
    },
    {
      name: "Sharmistha Chatterjee",
      role: "Vice President, Data & AI Shared Capabilities Digital Workspace, American Express",
      linkedin: "https://www.linkedin.com/in/sharmistha-chatterjee-7a186310/",
      image: "/speakers/bengaluru26/Sharmistha-Chatterjee.jpg",
    },
    {
      name: "Santosh Kumar",
      role: "CISO, Mphasis",
      linkedin: "https://www.linkedin.com/in/santoshkumarpro/",
      image: "/speakers/bengaluru26/Santosh-Kumar.jpg",
    },
    {
      name: "Ishita De",
      role: "CISO, Diageo India",
      linkedin: "https://www.linkedin.com/in/ishita-de-cissp-pmp-a91b3640/",
      image: "/speakers/bengaluru26/Ishita-de.jpg",
    },
    {
      name: "Biswajit Biswas",
      role: "Chief Data Scientist, Tata Elxsi",
      linkedin: "https://www.linkedin.com/in/biswasbiswajit/",
      image: "/speakers/bengaluru26/Biswajit-Biswas.jpg",
    },
    {
      name: "Venkataprasanna G",
      role: "VP & Head- Technology Risks, HCL Tech",
      linkedin: "https://www.linkedin.com/in/venkataprasannaghadamchetty/ ",
      image: "/speakers/bengaluru26/Venkataprasanna-G.jpg",
    },
    {
      name: "Suvodip Chatterjee",
      role: "Global Head of AI Data science & MLOps, Signify",
      linkedin: "https://www.linkedin.com/in/suvodip-chatterjee-1396096/",
      image: "/speakers/bengaluru26/Suvodip-Chatterjee.jpg",
    },
    {
      name: "Nishant Chandra",
      role: "SVP Engineering, Angel One",
      linkedin: "https://www.linkedin.com/in/nishantchandra/",
      image: "/speakers/bengaluru26/Nishant-Chandra.jpg",
    },
    {
      name: "Jyothi Kodenkiri",
      role: "VP Cloud Engineering, Deutsche Bank",
      linkedin: "https://www.linkedin.com/in/jyothi-k-89bb423/",
      image: "/speakers/bengaluru26/Jyothi-Kodenkiri.png",
    },
    {
      name: "Anil Yadav",
      role: "VP Engineering, HDFC Securities",
      linkedin: "https://www.linkedin.com/in/anilyadav/",
      image: "/speakers/bengaluru26/Anil-Yadav.jpg",
    },
    {
      name: "Syed Atif Umar",
      role: "Head of Analytics, Meesho",
      linkedin: "https://www.linkedin.com/in/syed-atif-umar-819b191/",
      image: "/speakers/bengaluru26/Syed-Atif-Umar.jpg",
    },
    {
      name: "Sruti Sivaraman",
      role: "Head of Engineering Automation, Nokia",
      linkedin: "https://www.linkedin.com/in/sruti-sivaraman/",
      image: "/speakers/bengaluru26/Sruti-Sivaraman.jpg",
    },
    {
      name: "Sundareshwar Krishnamurthy",
      role: "Partner and India Cyber leader, PwC India",
      linkedin: "https://www.linkedin.com/in/sundareshwar/",
      image: "/speakers/bengaluru26/Sundareshwar-Krishnamurthy.jpg",
    },
    {
      name: "Sundar Ram",
      role: "Partner & Leader - Cloud Engineering and Data Analytics, PwC India",
      linkedin: "https://www.linkedin.com/in/sundar-ram-9557b32/",
      image: "/speakers/bengaluru26/Sundar-Ram.jpg",
    },
    {
      name: "Sreyssha George",
      role: "Managing Director & Partner, BCG",
      linkedin: "https://www.linkedin.com/in/sreyssha/ ",
      image: "/speakers/bengaluru26/Sreyssha-George.jpg",
    },
    {
      name: "Akbar Ali Shaikh",
      role: "Partner, Deloitte",
      linkedin: "https://www.linkedin.com/in/akbar-ali-shaikh-2b182137?originalSubdomain=in",
      image: "/speakers/bengaluru26/Akbar-Ali-Shaikh.jpg",
    },
    {
      name: "Anuj Kumar",
      role: "Partner, KPMG India",
      linkedin: "",
      image: "/speakers/bengaluru26/Anuj-Kumar.jpg",
    },
    {
      name: "Sundeep Kamath",
      role: "Regional Vice President, Salesforce",
      linkedin: "https://www.linkedin.com/in/sundeepkamath/",
      image: "/speakers/bengaluru26/Sundeep-Kamath.jpg",
    },
    {
      name: "Tulasi Menon",
      role: "Head of Product, AI Strategy for Jira Service Management, Atlassian",
      linkedin: "https://www.linkedin.com/in/tulasi-menon-08b5aa26/",
      image: "/speakers/bengaluru26/Tulasi-Menon.jpg",
    },
    {
      name: "Rohan Pagey",
      role: "Regional Vice President Sales, Salesforce",
      linkedin: "",
      image: "/speakers/bengaluru26/Rohan-Pagey.jpg",
    },
    {
      name: "Bhaskar Bose",
      role: "Senior Manager Sales, Salesforce",
      linkedin: "",
      image: "/speakers/bengaluru26/Bhaskar-Bose.jpg",
    },
    {
      name: "Rajiv Garg",
      role: "Speialist Solution Engineer, Salesforce",
      linkedin: "",
      image: "/speakers/bengaluru26/Rajiv-Garg.jpg",
    },
    {
      name: "Sumit Sharma",
      role: "Director, Solution Engineering, Salesforce",
      linkedin: "",
      image: "/speakers/bengaluru26/Sumit-Sharma.jpg",
    },
    {
      name: "Jothi Kumar",
      role: "Global Sales Leader - Emerging Regions / APAC, Atlassian",
      linkedin: "",
      image: "/speakers/bengaluru26/Jothi-Kumar.jpg",
    },
// Bangalore 26 Speakers List Ends Here
    {
      name: "Raghav Aggarwal",
      role: "Co-Founder, Fluid AI",
      linkedin: "https://www.linkedin.com/in/trutech/?originalSubdomain=in",
      image: "/speakers/delhi26/raghav.png",
    },
    {
      name: "Ved Goel",
      role: "Group CFO & CEO – International Business, Dr. Lal PathLabs",
      linkedin: "https://www.linkedin.com/in/vedgoel/",
      image: "/speakers/delhi26/Ved Goel.png",
    },
    {
      name: "Narottam Sharma",
      role: "CIO, Jubilant Foodworks",
      linkedin: "https://www.linkedin.com/in/narottamsharma/",
      image: "/speakers/delhi26/Narrottam-Sharma.png",
    },
    {
      name: "Ranganathan Vaidyanathan Iyer",
      role: "Group CIO, JBM Group",
      linkedin: "https://www.linkedin.com/in/ranganathaniyer/?originalSubdomain=in",
      image: "/speakers/delhi26/Ragannathan.png",
    },
    {
      name: "Kapil Mahajan",
      role: "Global & Group CITO, Allcargo Logistics",
      linkedin: "https://www.linkedin.com/in/kapil-mahajan-cio/",
      image: "/speakers/delhi26/kapil mahajan.png",
    },
    {
      name: "Manish Chandegara",
      role: "Group CIO, Simpolo Ceramics",
      linkedin: "https://www.linkedin.com/in/manishchandegara/",
      image: "/speakers/delhi26/manish.png",
    },
    {
      name: "Mukul Jain",
      role: "CTO, Axis Max Life Insurance",
      linkedin: "https://www.linkedin.com/in/mukuljain1/",
      image: "/speakers/delhi26/mukul-jain.png",
    },
    {
      name: "Tarun Aggarwal",
      role: "Group CTO, Capri Global Capital",
      linkedin: "https://www.linkedin.com/in/tarun-aggarwal8/?originalSubdomain=in",
      image: "/speakers/delhi26/tarun agrawal.png",
    },
    {
      name: "Mukesh Sharma",
      role: "CTO,Paisabazaar",
      linkedin: "https://www.linkedin.com/in/mokesh/",
      image: "/speakers/delhi26/mukesh-sharma.png",
    },
    {
      name: "Mohit Malik",
      role: "CTO, Chaayos",
      linkedin: "https://www.linkedin.com/in/mohit-malik-8517784/",
      image: "/speakers/delhi26/mohit malik.png",
    },
    {
      name: "Sunil Kumar",
      role: "CTO, Shiprocket",
      linkedin: "	https://www.linkedin.com/in/ksunil/",
      image: "/speakers/delhi26/Sunil Kumar.png",
    },
    {
      name: "Anurag Jain",
      role: "CDTO - KFC India and Partner Countries, Yum Brands",
      linkedin: "https://www.linkedin.com/in/anuragjain25/",
      image: "/speakers/delhi26/Anurag Jain.png",
    },
    {
      name: "Harsh Vardhan",
      role: "Global Head- Digital Innovation, Apollo Tyres",
      linkedin: "https://www.linkedin.com/in/harshvardhan-ai/?originalSubdomain=in",
      image: "/speakers/delhi26/harsh vardhan.png",
    },
    {
      name: "Jagannath Sahoo",
      role: "CISO, Gujarat Fluorochemicals Limited",
      linkedin: "https://www.linkedin.com/in/dr-jagannath-sahoo-94880622/",
      image: "/speakers/delhi26/jagannathan.png",
    },
    {
      name: "Vivek Shankar",
      role: "CITSO & VP, Axis Max Life Insurance Limited",
      linkedin: "https://www.linkedin.com/in/vivek-shankar-70a2ba22/",
      image: "/speakers/delhi26/Vivek Shankar.png",
    },
    {
      name: "Amit Sharma",
      role: "Sr. VP - Enterprise Information Management and Analytics, Canara HSBC Life Insurance",
      linkedin: "https://www.linkedin.com/in/amisharma/?originalSubdomain=in",
      image: "/speakers/delhi26/amit-sharma.png",
    },
    {
      name: "Varun Bansal",
      role: "VP, Head IT, Bata India",
      linkedin: "https://www.linkedin.com/in/varunbansal10/?originalSubdomain=in",
      image: "/speakers/delhi26/varun bansal.png",
    },
    {
      name: "Animesh Srrivastava",
      role: "	Senior VP of Technology, Moglix",
      linkedin: "https://www.linkedin.com/in/animeshs/",
      image: "/speakers/delhi26/animesh.png",
    },
    {
      name: "Ritesh Rathod",
      role: "Chief Strategy & Data Officer, Canara HSBC Life Insurance",
      linkedin: "	https://www.linkedin.com/in/ritesh-rathod-b9633313/",
      image: "/speakers/delhi26/Ritesh-Rathod.png",
    },
    {
      name: "Atul Govil",
      role: "Chief Transformation Officer & Head (SAP & IT) - Corporate , India Glycols Limited",
      linkedin: "https://www.linkedin.com/in/atul-govil-48042410/",
      image: "/speakers/delhi26/Atul-Givil.png",
    },
    {
      name: "Raman Srinivasan",
      role: "Chief Digital Officer, InMobi Group",
      linkedin: "https://www.linkedin.com/in/raman-srinivasan-3364b12/",
      image: "/speakers/delhi26/Raman Srinivasan.png",
    },
    {
      name: "Rajat Wadhwa",
      role: "Head- Customer Applications, Hero FinCorp",
      linkedin: "https://www.linkedin.com/in/rajatwadhwa/?originalSubdomain=in",
      image: "/speakers/delhi26/rajat wadhwa.png",
    },
    {
      name: "Anjali Dutta",
      role: "Head of Experience Design & Digital Studio | BORN Service Line, Tech Mahindra",
      linkedin: "https://www.linkedin.com/in/anjali-dutta-b5204219/",
      image: "/speakers/delhi26/Anjali Dutta.png",
    },
    {
      name: "Pankaj Gupta",
      role: "Chief AI Officer, Jindal Stainless",
      linkedin: "https://www.linkedin.com/in/pankajmath/",
      image: "/speakers/delhi26/Pankaj Gupta.png",
    },    
    {
      name: "Ritesh Jain",
      role: "Partner- Agentic Automation, PwC India",
      linkedin: "https://www.linkedin.com/in/ritesh-jain-2435451/",
      image: "/speakers/delhi26/Ritesh Jain.png",
    },
    {
      name: "Ankit Garg",
      role: "Partner- Risk Consulting, PwC",
      linkedin: "https://www.linkedin.com/in/ankgarg/",
      image: "/speakers/delhi26/Ankit Garg.png",
    },
    {
      name: "Vinod Kumar",
      role: "Senior Partner & Leader- Manufacturing, PwC India",
      linkedin: "https://www.linkedin.com/in/vinod-kumar-pathak-19305b2/",
      image: "/speakers/delhi26/Vinod Pathak.png",
    },
    {
      name: "Ayush Gupta",
      role: "Partner, KPMG",
      linkedin: "https://www.linkedin.com/in/ayushg11/",
      image: "/speakers/delhi26/ayush-agrawal.png",
    },
    {
      name: "Abhishek Das",
      role: "Partner- Consulting, EY",
      linkedin: "https://www.linkedin.com/in/abhishekdas17/",
      image: "/speakers/delhi26/Abhishek Das.png",
    },
    {
      name: "Manpreet Singh Ahuja",
      role: "Partner, Chief Client and Alliance & TMT Sector Leader, PwC India",
      linkedin: "https://www.linkedin.com/in/manpreet-singh-6710788/",
      image: "/speakers/delhi26/Manpreet Ahuja.png",
    },
    {
      name: "Vyshak Venugopalan",
      role: "Sr Director, Solution Consulting, India and JAPAC Partner Solution Leader, Adobe",
      linkedin: "https://www.linkedin.com/in/vyshakv/",
      image: "/speakers/delhi26/Vyash-V.png",
    },
    {
      name: "Gowthamram C. Nallan",
      role: "Solutions Consulting Lead, Adobe India",
      linkedin: "https://www.linkedin.com/in/gowthamram-nallan-8b27731b/?originalSubdomain=in",
      image: "/speakers/delhi26/Gowthamram-C.-Nallan.png",
    },
    {
      name: "Siddharth Sikand",
      role: "Customer Transformation Advisor (Distinguished Enterprise Architect), Salesforce",
      linkedin: "https://www.linkedin.com/in/siddharthsikand/",
      image: "/speakers/delhi26/siddharth-sikand.png",
    },
    {
      name: "Rachit Bhatnagar",
      role: "Solutions Consulting Practice Lead, Adobe",
      linkedin: "https://www.linkedin.com/in/rachitbhatnagar/",
      image: "/speakers/delhi26/Rachit-Bhatnagar.png",
    },

  ];

  // 🔥 Added your full Bengaluru speakers list
  const speakers = [
    {
      name: "Debashis Singh",
      role: "Chief Information Officer, Persistent Systems",
      linkedin: "https://www.linkedin.com/in/debashissingh/",
      image: "/speakers/bengaluru/debashis.png",
    },
    {
      name: "Rejin Surendran",
      role: "Global CIO, Wipro Enterprises Limited",
      linkedin: "https://www.linkedin.com/in/rejins/",
      image: "/speakers/bengaluru/rejin.png",
    },
    {
      name: "Anand V",
      role: "Chief Information Officer, APAC - Randstad",
      linkedin: "https://www.linkedin.com/in/anandvaitheeswaran/",
      image: "/speakers/bengaluru/anand.png",
    },
    {
      name: "Srinivas Jaggumantri",
      role: "Unit Technology Officer, Financial Services, Infosys",
      linkedin: "https://www.linkedin.com/in/srinivas1jaggumantri/",
      image: "/speakers/bengaluru/srinivas.png",
    },
    {
      name: "Geetha Adinarayan",
      role: "CTO, IBM Consulting",
      linkedin: "https://www.linkedin.com/in/geetha-adinarayan-618aa84/",
      image: "/speakers/bengaluru/geetha.png",
    },
    {
      name: "Raman Srinivasan",
      role: "Chief Digital Officer, Inmobi Group",
      linkedin:
        "https://www.linkedin.com/in/raman-srinivasan-3364b12/?originalSubdomain=in",
      image: "/speakers/bengaluru/raman.png",
    },
    {
      name: "Nandkishor Dhomne",
      role: "CIO, Manipal Hospitals",
      linkedin: "https://www.linkedin.com/in/ndhomne/",
      image: "/speakers/bengaluru/nandkishor.png",
    },
    {
      name: "Dr. Avnish Kshatriya",
      role: "Chief Digital and Information Officer, Trilegal",
      linkedin:
        "https://www.linkedin.com/in/avnishkshatriya/?originalSubdomain=in",
      image: "/speakers/bengaluru/avnish.png",
    },
    {
      name: "Koushik Kadidal",
      role: "Chief Data Officer, PayU",
      linkedin: "https://www.linkedin.com/in/kkadidal/",
      image: "/speakers/bengaluru/koushik.png",
    },
    {
      name: "Chandramouli Godhandaraman",
      role: "Head of Architecture (Retail), HDFC Bank",
      linkedin:
        "https://www.linkedin.com/in/cgodhandaraman/?originalSubdomain=in",
      image: "/speakers/bengaluru/chandramouli.png",
    },
    {
      name: "Vivek Rajagopal",
      role: "Group Chief Analytics and AI Officer, Narayana Health",
      linkedin: "https://www.linkedin.com/in/vivek-rajagopal/",
      image: "/speakers/bengaluru/vivek.png",
    },
    {
      name: "Mathangi Sri Ramachandran",
      role: "Chief Data Officer, Yubi",
      linkedin: "https://www.linkedin.com/in/mathangisri/",
      image: "/speakers/bengaluru/mathangi.png",
    },
    {
      name: "Jason Joseph",
      role: "Chief Information Security Officer, mPokket",
      linkedin: "https://www.linkedin.com/in/jasonjoseph5/",
      image: "/speakers/bengaluru/jason.png",
    },
    {
      name: "Sheela Siddappa",
      role: "Leader - AI, Commonwealth Bank",
      linkedin: "https://www.linkedin.com/in/dr-sheela-siddappa-2997619/",
      image: "/speakers/bengaluru/sheela.png",
    },
    {
      name: "Manish Shukla",
      role: "Head of Generative AI Platform, NatWest Group",
      linkedin: "https://www.linkedin.com/in/manishshukla10/",
      image: "/speakers/bengaluru/manish.png",
    },
    {
      name: "Shashwat Singh",
      role: "Chief Information Officer, boAt",
      linkedin: "https://www.linkedin.com/in/shashwatsinh/",
      image: "/speakers/bengaluru/shashwat.png",
    },
    {
      name: "Preetam Hazarika (Moderator)",
      role: "Partner, PwC India",
      linkedin:
        "https://www.linkedin.com/in/preetamhazarika/?originalSubdomain=in",
      image: "/speakers/bengaluru/preetam.png",
    },
    {
      name: "Suchin Sudhakaran",
      role: "Cyber Security Leader, BP",
      linkedin:
        "https://www.linkedin.com/in/dr-suchin-sudhakaran-ph-d-71b40720/",
      image: "/speakers/bengaluru/suchin.png",
    },
    {
      name: "Sridhar Jonnala",
      role: "Chief Technology Officer - AI, IBM India",
      linkedin:
        "https://www.linkedin.com/in/sridhar-jonnala-12157116/?originalSubdomain=in",
      image: "/speakers/bengaluru/sridhar.png",
    },
    {
      name: "Vikas Singh Yadav",
      role: "CISO, Flipkart",
      linkedin: "https://www.linkedin.com/in/vikassinghyadav/",
      image: "/speakers/bengaluru/vikas.png",
    },
    {
      name: "Vishwesh Pai",
      role: "Head of Product, Atlassian",
      linkedin:
        "https://www.linkedin.com/in/vishweshpai/?originalSubdomain=in",
      image: "/speakers/bengaluru/vishwesh.png",
    },
    {
      name: "Amit Atri",
      role: "Global CIO, Tata Consumer Products",
      linkedin: "https://www.linkedin.com/in/amit-atri-414797/",
      image: "/speakers/bengaluru/amit.png",
    },
    {
      name: "Venkat Iyer",
      role: "Partner, PwC",
      linkedin: "https://www.linkedin.com/in/iyervn/",
      image: "/speakers/bengaluru/venkat.png",
    },
    {
      name: "Mithun Appaiah",
      role: "CEO, WoW! Momo FMCG",
      linkedin:
        "https://www.linkedin.com/in/mithun-appaiah-57237225/",
      image: "/speakers/bengaluru/mithun.png",
    },
    {
      name: "Rajnil Mallik",
      role: "Partner & GenAI GTM Leader, PwC India",
      linkedin: "https://www.linkedin.com/in/rajnil-mallik-5a5226/",
      image: "/speakers/bengaluru/rajnil.png",
    },
    {
      name: "Pragati (Kushwah) Chakraborty",
      role: "Partner, Deloitte",
      linkedin:
        "https://www.linkedin.com/in/pragati-chakraborty-a5b9465/",
      image: "/speakers/bengaluru/pragati.png",
    },
    {
      name: "Rupesh Lochan Gupta",
      role: "Head - AI Platform & AI CoE, TCS",
      linkedin: "https://www.linkedin.com/in/rupeshlochan/",
      image: "/speakers/bengaluru/rupesh.png",
    },
    {
      name: "Dhruv Rastogi",
      role: "SVP & Head of Data Science, Medi Assist",
      linkedin: "https://www.linkedin.com/in/dhruvarastogi/",
      image: "/speakers/bengaluru/dhruv.png",
    },
    {
      name: "Prasanna",
      role: "VP, Global Patient Safety, Novo Nordisk",
      linkedin:
        "https://www.linkedin.com/in/prasanna-kumar-subbanna-846980a/",
      image: "/speakers/bengaluru/prasanna.png",
    },
    {
      name: "Shalini Sriram",
      role: "Regional Sales Director, Salesforce",
      linkedin:
        "https://www.linkedin.com/in/shalini-sriram-5a1139a/",
      image: "/speakers/bengaluru/shalini.png",
    },
  ];

    // 🔥 Added your full Mumbai speakers list
  const mspeakers = [
   {
    name: "Parvez Mulla",
    role: "MD & CEO, Fedbank Financial Services Ltd. ",
    linkedin: "https://www.linkedin.com/in/parvez-mulla-b796044/",
    image: "/speakers/parvez-mulla.png",
  },
  {
    name: "Dipu KV",
    role: "Senior President, Bajaj Allianz General Insurance",
    linkedin: "https://www.linkedin.com/in/kvdipu/",
    image: "/speakers/dipu-kv.png",
  },
  {
    name: "Sumit Garg",
    role: "Global CIO, Piramal Pharma Solutions",
    linkedin: "https://www.linkedin.com/in/sumit-garg-375706/",
    image: "/speakers/Sumit-Garg.png",
  },
   {
    name: "Amit Ray",
    role: "CIO Advisory and Customer Success Leader, Jio",
    linkedin: "https://www.linkedin.com/in/amit-ray-360831156/",
    image: "/speakers/amit-ray.png",
  },
  {
    name: "Aashish Kshetry",
    role: "CIO & VP-IT, Asian Paints",
    linkedin: "https://www.linkedin.com/in/aashish-kshetry-9090234/",
    image: "/speakers/ashish-kshetry.png",
  },
  {
    name: "Tarun Pandey",
    role: "Chief Technology Officer, Aditya Birla Health Insurance",
    linkedin: "https://www.linkedin.com/in/tarunpandey/",
    image: "/speakers/tarun-pandey.png",
  },
  {
    name: "Nikhil Malhotra",
    role: "Chief Innovation Officer & Global Head of AI and Emerging Technologies, Tech Mahindra",
    linkedin: "https://www.linkedin.com/in/nikhilmalhotra2009/",
    image: "/speakers/nikhil-malhotra.png",
  },
  {
    name: "Mukesh Jain",
    role: "CTO, Executive Vice President, Capgemini",
    linkedin: "https://www.linkedin.com/in/mukeshjaincoach/",
    image: "/speakers/mukesh-jain.png",
  },
  {
    name: "Suman Guha",
    role: "CTO, Tata CLiQ Fashion",
    linkedin: "https://www.linkedin.com/in/guha-suman/",
    image: "/speakers/suman-guha.png",
  },
 {
    name: "Vivek Sharma",
    role: "Chief Information and Digital Officer, Pidilite Industries",
    linkedin: "https://www.linkedin.com/in/vivek-sharma1222a66/",
    image: "/speakers/vivek-sharma.png",
  },

  {
    name: "Vineet Shukla",
    role: "CTO – Mahindra Teqo",
    linkedin: "https://www.linkedin.com/in/shuklavineet/",
    image: "/speakers/vineet-shukla.png",
  },

  {
    name: "Sudip Mazumder ",
    role: "Global CDIO, PGP Glass",
    linkedin: "https://www.linkedin.com/in/mazumdersudip/",
    image: "/speakers/sudip-mazumdar.png",
  },
  {
    name: "Sivakumar Nandipati",
    role: "Chief Digital Officer, Fedbank Financial Services",
    linkedin: "https://www.linkedin.com/in/sivakumarnandipati/",
    image: "/speakers/siva-kumar-nandipati.png",
  },
   {
    name: "Namrita Mahindro",
    role: "Chief Digital Officer, Aditya Birla Chemicals",
    linkedin: "https://www.linkedin.com/in/namritasehgal/",
    image: "/speakers/namrita-mahindro.png",
  },
  {
    name: "Nishant Pradhan",
    role: "Chief AI Officer, Mirae Asset Mutual Fund (India)",
    linkedin: "https://www.linkedin.com/in/pradhannishant/",
    image: "/speakers/nishant-pradhan.png",
  },
  {
    name: "Vijaya Kadiyala",
    role: " Executive Director, India Head of Enterprise Architecture and Data/AI Platform and Cloud Engineering, DBS Bank ",
    linkedin: "https://www.linkedin.com/in/vijaya-kadiyala/",
    image: "/speakers/vijaya.png",
  },


  {
    name: "Tejasvi Addagada",
    role: " Senior Vice President, Head- Enterprise Data Management, Data Office, HDFC Bank",
    linkedin: "https://www.linkedin.com/in/tejasviaddagada/",
    image: "/speakers/tejaswi.png",
  },
  {
    name: "Dr. Durga Prasad Dube",
    role: "EVP & Group Head - Cybersecurity & Information Risk Management, Reliance Industries Ltd.",
    linkedin: "https://www.linkedin.com/in/dr-durga-prasad-dube-ph-d-072a407/",
    image: "/speakers/durga-prasad-dube.png",
  },
   {
    name: "Amit Joshi",
    role: "CISO, Hindalco Industries",
    linkedin: "https://www.linkedin.com/in/amit-joshi-ba7a886/",
    image: "/speakers/amit-joshi.png",
  },
  {
    name: "Aliasgar Karachiwala",
    role: "EVP & IT Head - Applications, Automation, AI and Business Solutions Group RBL Bank",
    linkedin: "https://www.linkedin.com/in/aliasgarkarachiwala/",
    image: "/speakers/aliasgar-karachiwala.png",
  },



  {
    name: "Hetal Presswala",
    role: "Chief Information Security Officer, Kalpatru Projects International ",
    linkedin: "https://www.linkedin.com/in/hetal-presswala/",
    image: "/speakers/hetal-presswala.png",
  },

  {
    name: "Chaitanya Gogineni",
    role: "Partner - Lighthouse (Data, Analytics and AI), KPMG India",
    linkedin: "https://www.linkedin.com/in/chaitanyagogineni/",
    image: "/speakers/chaitanya-gogineni.png",
  },
  {
    name: "Rajat Mathur",
    role: "Partner, BCG (Boston Consulting Group)",
    linkedin: "https://www.linkedin.com/in/rajat2000/",
    image: "/speakers/rajat-mathur.png",
  },
  {
    name: "Sankarson Banerjee",
    role: "Director, Dialoqa and Former CIO, RBL",
    linkedin: "https://www.linkedin.com/in/sankarson/",
    image: "/speakers/sankarson-banerjee.png",
  },
  {
    name: "Sudipta Ghosh",
    role: " Partner, PwC India",
    linkedin: "https://www.linkedin.com/in/sudiptaghosh/",
    image: "/speakers/sudipta-ghosh.png",
  },
 {
    name: "Mubin Shaikh",
    role: "Partner, Technology Consulting – Cybersecurity EY",
    linkedin: "https://www.linkedin.com/in/mubinshaikh/",
    image: "/speakers/mubin-shaikh.png",
  },
  
  ];

  return (
    <section id="speakers" className="py-16 md:py-24 bg-background">
      <div className="container  mx-auto px-4">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-900 bg-clip-text text-transparent">
          Featured Speakers: Past Editions
        </h2>

        <p className="text-foreground/70 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed mb-16 text-center">
          Industry leaders who have shared their insights
        </p>

        <div className="overflow-x-auto  scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
          <div className="flex gap-6 md:gap-8 px-2 w-max">

              {/* ⭐ EXTRA LAST BLOCK */}
              {/* <div className="w-[160px] sm:w-[200px] md:w-[280px] lg:w-[240px] flex items-center justify-center">
                <span className="text-xl md:text-2xl font-bold text-[#b70b76] whitespace-nowrap">
                  Bengaluru <br />2025 Speakers →
                </span>
              </div> */}


              {delhispeakers.map((speaker, index) => (
                <div key={index} className="w-[160px] sm:w-[200px] md:w-[280px] lg:w-[240px] flex flex-col items-center text-center singhniaya-spkrsection">
                  {/* Speaker Card */}
                  <div className="relative w-full aspect-square speakerimgradis overflow-hidden mb-4 singhspkrg hover:shadow-xl duration-300">
                    <img src={speaker.image} alt={speaker.name} className="w-full h-full object-cover" />
                  </div>

                  <div className="space-y-1">
                    <h4 className="text-base md:text-lg font-bold text-foreground">{speaker.name}</h4>
                    <p className="text-sm text-foreground/70">{speaker.role}</p>
                    {speaker.linkedin && (
                      <a href={speaker.linkedin} target="_blank" className="text-xs text-blue-600 hover:underline">
                        LinkedIn →
                      </a>
                    )}
                  </div>
                </div>
              ))}


              {speakers.map((speaker, index) => (
                <div key={index} className="w-[160px] sm:w-[200px] md:w-[280px] lg:w-[240px] flex flex-col items-center text-center singhniaya-spkrsection">
                  {/* Speaker Card */}
                  <div className="relative w-full aspect-square speakerimgradis overflow-hidden mb-4 bg-gradient-to-b from-[#b72fd5] to-[#b70b76] hover:shadow-xl duration-300">
                    <img src={speaker.image} alt={speaker.name} className="w-full h-full object-cover" />
                  </div>

                  <div className="space-y-1">
                    <h4 className="text-base md:text-lg font-bold text-foreground">{speaker.name}</h4>
                    <p className="text-sm text-foreground/70">{speaker.role}</p>
                    {speaker.linkedin && (
                      <a href={speaker.linkedin} target="_blank" className="text-xs text-blue-600 hover:underline">
                        LinkedIn →
                      </a>
                    )}
                  </div>
                </div>
              ))}

              {/* ⭐ EXTRA LAST BLOCK */}
              {/* <div className="w-[160px] sm:w-[200px] md:w-[280px] lg:w-[240px] flex items-center justify-center">
                <span className="text-xl md:text-2xl font-bold text-[#b70b76] whitespace-nowrap">
                  Mumbai <br />2025 Speakers →
                </span>
              </div> */}

              {mspeakers.map((speaker, index) => (
                <div key={index} className="w-[160px] sm:w-[200px] md:w-[280px] lg:w-[240px] flex flex-col items-center text-center singhniaya-spkrsection">
                  {/* Speaker Card */}
                  <div className="relative w-full aspect-square speakerimgradis overflow-hidden mb-4 bg-gradient-to-b from-[#b72fd5] to-[#b70b76] hover:shadow-xl duration-300">
                    <img src={speaker.image} alt={speaker.name} className="w-full h-full object-cover" />
                  </div>

                  <div className="space-y-1">
                    <h4 className="text-base md:text-lg font-bold text-foreground">{speaker.name}</h4>
                    <p className="text-sm text-foreground/70">{speaker.role}</p>
                    {speaker.linkedin && (
                      <a href={speaker.linkedin} target="_blank" className="text-xs text-blue-600 hover:underline">
                        LinkedIn →
                      </a>
                    )}
                  </div>
                </div>
              ))}


          </div>
        </div>


      </div>
    </section>
  );


};

export default FeaturedSpeakers;






