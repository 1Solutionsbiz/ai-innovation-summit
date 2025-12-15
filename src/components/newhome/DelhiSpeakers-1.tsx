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
      name: "Ranganathan Vaidyanathan Iyer",
      role: "Group CIO, DPO, Sr. EVP-ICTS, JBM Group",
      linkedin: "https://www.linkedin.com/in/manishchandegara/",
      image: "/speakers/delhi26/Ragannathan.png",
    },
    {
      name: "Kapil Mahajan",
      role: "Global & Group CITO, Allcargo Logistics",
      linkedin: "https://www.linkedin.com/in/kapil-mahajan-cio/",
      image: "/speakers/delhi26/kapil mahajan.png",
    },
    {
      name: "Nishit Shrivastava",
      role: "CITO, Muthoot FinCorp",
      linkedin: "https://www.linkedin.com/in/nishit-shrivastava/",
      image: "/speakers/delhi26/nishit.png",
    },
    {
      name: "Manish Chandegara",
      role: "Group CIO, Simpolo Ceramics",
      linkedin: "https://www.linkedin.com/in/manishchandegara/",
      image: "/speakers/delhi26/manish.png",
    },
    {
      name: "Tarun Aggarwal",
      role: "Group Chief Technology Officer, Capri Global Capital",
      linkedin: "https://www.linkedin.com/in/tarun-aggarwal8/?originalSubdomain=in",
      image: "/speakers/delhi26/tarun agrawal.png",
    },
    {
      name: "Harsh Vardhan",
      role: "Global Head- Digital Innovation, Apollo Tyres",
      linkedin: "https://www.linkedin.com/in/harshvardhan-ai/?originalSubdomain=in",
      image: "/speakers/delhi26/harsh vardhan.png",
    },
    {
      name: "Mohit Malik",
      role: "CTO, Chaayos",
      linkedin: "https://www.linkedin.com/in/mohit-malik-8517784/",
      image: "/speakers/delhi26/mohit malik.png",
    },
    {
      name: "Varun Bansal",
      role: "Vice President, Head IT, Bata India",
      linkedin: "https://www.linkedin.com/in/varunbansal10/?originalSubdomain=in",
      image: "/speakers/delhi26/varun bansal.png",
    },
    {
      name: "Animesh Srrivastava",
      role: "Senior Vice President of Technology, Moglix",
      linkedin: "https://www.linkedin.com/in/animeshs/",
      image: "/speakers/delhi26/animesh.png",
    },
    {
      name: "Jagannath Sahoo",
      role: "Chief Information Security Officer, Gujarat Fluorochemicals Limited",
      linkedin: "https://www.linkedin.com/in/dr-jagannath-sahoo-94880622/",
      image: "/speakers/delhi26/jagannathan.png",
    },

  ];

  return (
    <section id="speakers" className="py-16 md:py-24 bg-background">
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
