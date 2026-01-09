const FeaturedSpeakers = () => {
  // 🔥 Added your full Bengaluru speakers list
  const speakers = [
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
      name: "Dr. Chander Shekhar Devra",
      role: "SRF, CIO & Vice President, Specialty Chemicals Business & Chemicals Technology Group",
      linkedin: "https://www.linkedin.com/in/drchandershekhardevra/",
      image: "/speakers/delhi26/Dr.-Chander-Shekhar-Devra.png",
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
      name: "Nishit Shrivastava",
      role: "CITO, Muthoot FinCorp",
      linkedin: "https://www.linkedin.com/in/nishit-shrivastava/",
      image: "/speakers/delhi26/nishit.png",
    },
    // {
    //   name: "Mukul Jain",
    //   role: "CTO, Axis Max Life Insurance",
    //   linkedin: "https://www.linkedin.com/in/mukuljain1/",
    //   image: "#",
    // },
    {
      name: "Tarun Aggarwal",
      role: "Group CTO, Capri Global Capital",
      linkedin: "https://www.linkedin.com/in/tarun-aggarwal8/?originalSubdomain=in",
      image: "/speakers/delhi26/tarun agrawal.png",
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
      role: "	Sr. VP - Enterprise Information Management and Analytics, Canara HSBC Life Insurance",
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
      name: "Rahul Sangal",
      role: "Chief Strategy & Digital Officer, Dixon Technologies India Limited",
      linkedin: "https://www.linkedin.com/in/sangalrahul/",
      image: "/speakers/delhi26/Rahul Sangal.png",
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
      name: "Pankaj Gupta",
      role: "Chief AI Officer, Jindal Stainless",
      linkedin: "https://www.linkedin.com/in/pankajmath/",
      image: "/speakers/delhi26/Pankaj Gupta.png",
    },
    {
      name: "Rajat Wadhwa",
      role: "Head- Customer Applications, Hero FinCorp",
      linkedin: "https://www.linkedin.com/in/rajatwadhwa/?originalSubdomain=in",
      image: "/speakers/delhi26/rajat wadhwa.png",
    },
            // {
            //   name: "Chanchal Saxena",
            //   role: "Business Partner IT & Digital Experience, Kohler India",
            //   linkedin: "https://www.linkedin.com/in/chanchal-saxena/",
            //   image: "#",
            // },
    {
      name: "Anjali Dutta",
      role: "Head of Experience Design & Digital Studio | BORN Service Line, Tech Mahindra",
      linkedin: "https://www.linkedin.com/in/anjali-dutta-b5204219/",
      image: "/speakers/delhi26/Anjali Dutta.png",
    },
            // {
            //   name: "Himanshu Ghawri",
            //   role: "Partner, PwC India",
            //   linkedin: "https://www.linkedin.com/in/himanshu-ghawri-a7b906a/",
            //   image: "/speakers/delhi26/Himanshu-Ghawri.png",
            // },
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
      name: "Ankit Garg",
      role: "Partner- Risk Consulting, PwC",
      linkedin: "https://www.linkedin.com/in/ankgarg/",
      image: "/speakers/delhi26/Ankit Garg.png",
    },
    {
      name: "Rituparno Mukhopadhyay",
      role: "Partner, PwC India",
      linkedin: "https://www.linkedin.com/in/rituparnomukhopadhyay",
      image: "/speakers/delhi26/Ritupurano.png",
    },
    // {
    //   name: "Siddharth Gupta",
    //   role: "Partner, KPMG India",
    //   linkedin: "https://www.linkedin.com/in/siddharth-gupta-37410617/",
    //   image: "/speakers/delhi26/",
    // },
    {
      name: "Vinod Kumar Pathak",
      role: "PwC India, Senior Partner & Leader- Manufacturing Sector, India",
      linkedin: "https://www.linkedin.com/in/vinod-kumar-pathak-19305b2/",
      image: "/speakers/delhi26/Vinod Pathak.png",
    },
    {
      name: "Ritesh Jain",
      role: "Partner- Agentic Automation, PwC India",
      linkedin: "https://www.linkedin.com/in/ritesh-jain-2435451/",
      image: "/speakers/delhi26/Ritesh Jain.png",
    },
    {
      name: "Vyshak Venugopalan",
      role: "Sr Director, Solution Consulting, India and JAPAC Partner Solution Leader, Adobe",
      linkedin: "https://www.linkedin.com/in/vyshakv/",
      image: "/speakers/delhi26/Vyash-V.png",
    },

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

        <div className="grid singhaniyanewdspkr grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-7 max-w-7xl mx-auto">
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
