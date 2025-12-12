const FeaturedSpeakers = () => {
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






