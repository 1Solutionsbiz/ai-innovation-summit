const FeaturedSpeakers = () => {
  // 🔥 Added your full Bengaluru speakers list
  const speakers = [
    {
      name: "Krishnan Venkateswaran",
      role: "Chief Digital & Information Officer, Titan Company",
      linkedin: "",
      image: "/speakers/bengaluru26/Krishnan-Venkateswaran.png",
    },
    {
      name: "Amit Atri",
      role: "Sr. VP & Global Chief Information Officer	Tata Consumer Products",
      linkedin: "https://www.linkedin.com/in/amit-atri-414797/",
      image: "/speakers/bengaluru26/Amit.jpg",
    },
    {
      name: "Narendra Babu",
      role: "CTO, PayU",
      linkedin: "https://www.linkedin.com/in/narendra-babu-4780444/",
      image: "/speakers/bengaluru26/Narendra-Babu.png",
    },
    {
      name: "Vikram Sridharan",
      role: "Chief Digital & IT Officer, Crompton Greaves Consumer Electricals",
      linkedin: "https://www.linkedin.com/in/sridharanvikram/",
      image: "/speakers/bengaluru26/Vikram-Sridharan.png",
    },
    {
      name: "Sudeep Dey",
      role: "CIO & CISO, Aster DM Healthcare",
      linkedin: "https://www.linkedin.com/in/deysudeep/",
      image: "/speakers/bengaluru26/Sudeep-Dey.png",
    },
    {
      name: "Rajesh Ramachandran",
      role: "Global Chief Digital Officer & MD, ABB Automation, ABB",
      linkedin: "https://www.linkedin.com/in/rajeshramachandranurl/?originalSubdomain=in",
      image: "/speakers/bengaluru26/Rajesh-Ramachandran.png",
    },
    {
      name: "Chandan Vijay",
      role: "Global Chief Data Officer, ABB Energy Industries",
      linkedin: "https://www.linkedin.com/in/chandanvijay/",
      image: "/speakers/bengaluru26/Chandan-Vijay.png",
    },
    // {
    //   name: "Amit Kapur",
    //   role: "VP- Applied AI, Data & Analytics, Lowe's India",
    //   linkedin: "https://www.linkedin.com/in/amit-kapur-ak/",
    //   image: "/speakers/bengaluru26/Amit-Kapur.png",
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
