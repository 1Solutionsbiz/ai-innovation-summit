const FeaturedSpeakers = () => {
  // 🔥 Added your full Bengaluru speakers list
  const speakers = [

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
      role: "Sr. VP & Global CIO, Tata Consumer Products",
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
      role: "CDIO, Titan Company",
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
      role: "Global Chief Digital Officer, ABB Automation",
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
      role: "Chief Information Security Officer - Diageo India",
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
      role: "Global Head of AI Data science & MLOps",
      linkedin: "https://www.linkedin.com/in/suvodip-chatterjee-1396096/",
      image: "/speakers/bengaluru26/Suvodip-Chatterjee.jpg",
    },
    {
      name: "Nishant Chandra",
      role: "Senior Vice President - Engineering — Angel One",
      linkedin: "https://www.linkedin.com/in/nishantchandra/",
      image: "/speakers/bengaluru26/Nishant-Chandra.jpg",
    },
    {
      name: "Jyothi Kodenkiri",
      role: "Vice President - Cloud Engineering — Deutsche Bank",
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
      role: "Partner - Autonomous Finance, Deloitte",
      linkedin: "https://www.linkedin.com/in/akbar-ali-shaikh-2b182137?originalSubdomain=in",
      image: "/speakers/bengaluru26/Akbar-Ali-Shaikh.jpg",
    },
    // {
    //   name: "Rajat Gupta",
    //   role: "Managing Director, BCG",
    //   linkedin: "",
    //   image: "/speakers/bengaluru26/",
    // },
    {
      name: "Anuj Kumar",
      role: "Partner, KPMG India",
      linkedin: "",
      image: "/speakers/bengaluru26/Anuj-Kumar.jpg",
    },
    {
      name: "Divyansh Nasa",
      role: "Partner, EY Parthenon India, EY India",
      linkedin: "https://www.linkedin.com/in/divyanshnasa/",
      image: "/speakers/bengaluru26/Divyansh-Nasa.jpg",
    },
    // {
    //   name: "S Sathish",
    //   role: "Partner and National Sector Leader- Industrial Manufacturing, KPMG India",
    //   linkedin: "",
    //   image: "/speakers/bengaluru26/",
    // },
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

    
    // {
    //   name: "Rohan Pagey",
    //   role: "Regional Vice President Sales, Salesforce",
    //   linkedin: "",
    //   image: "/speakers/bengaluru26/",
    // },
    // {
    //   name: "Bhaskar Bose",
    //   role: "Senior Manager Sales, Salesforce",
    //   linkedin: "",
    //   image: "/speakers/bengaluru26/",
    // },
    // {
    //   name: "Rajiv Garg",
    //   role: "Speialist Solution Engineer, Salesforce",
    //   linkedin: "",
    //   image: "/speakers/bengaluru26/",
    // },
    // {
    //   name: "Sumit Sharma",
    //   role: "Director, Solution Engineering, Salesforce",
    //   linkedin: "",
    //   image: "/speakers/bengaluru26/",
    // },

    

  ];


  return (
    <section id="speakers" className="py-16 md:py-24 bg-gradient-to-br from-white via-gray-50 to-slate-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl lg:text-6xl lh-1-4 font-bold text-center mb-6 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-900 bg-clip-text text-transparent">
          Visionary Speakers
        </h2>
        <br />
        {/* <p className="text-foreground/70 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed mb-16 text-center">
          Industry leaders who have shared their insights
        </p> */}

        <div className="grid singhaniyabeng26spkr grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-7 max-w-7xl mx-auto">
          {speakers.map((speaker, index) => (
            <div key={index} className="flex singhspkrg flex-col items-center text-center hover:shadow-xl duration-300 pb-4 rounded-lg">
              {/* <div className="relative w-full aspect-square speakerimgradis overflow-hidden mb-4 bg-gradient-to-b from-[#b72fd5] to-[#b70b76] hover:shadow-xl duration-300"> */}
              <div className="relative w-full aspect-square speakerimgradis singhspkrgbdr overflow-hidden mb-4">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name + Role + LinkedIn */}
              <div className="space-y-1 plr10">
                <h4 className="text-base md:text-lg font-bold text-foreground">
                  {speaker.name}
                </h4>

                <p className="text-sm text-foreground/70">{speaker.role}</p>

                {speaker.linkedin && (
                  <a
                    href={speaker.linkedin}
                    target="_blank"
                    className="text-xs text-blue-600 hover:underline"
                  >
                    LinkedIn →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSpeakers;
