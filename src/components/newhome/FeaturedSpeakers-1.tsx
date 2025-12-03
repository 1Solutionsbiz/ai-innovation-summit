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

  return (
    <section id="speakers" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-900 bg-clip-text text-transparent">
          Featured Speakers: Past Editions
        </h2>

        <p className="text-foreground/70 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed mb-16 text-center">
          Industry leaders who have shared their insights
        </p>

        <div className="grid singhaniyanewdspkr grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-7 max-w-7xl mx-auto">
          {speakers.map((speaker, index) => (
            <div key={index} className="flex singhspkrg flex-col items-center text-center">
              <div className="relative w-full aspect-square speakerimgradis overflow-hidden mb-4 bg-gradient-to-b from-[#b72fd5] to-[#b70b76] hover:shadow-xl duration-300">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name + Role + LinkedIn */}
              <div className="space-y-1">
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
