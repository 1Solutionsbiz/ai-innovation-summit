export type VideoItem = {
  id: string;
  image?: string;
  link: string;
  title: string;
  description: string;
};

export const watchVideos: VideoItem[] = [
  {
    id: "karnataka-ai-digital-innovation-vision",
    link: "https://youtu.be/Q1jh_EXeIF0?si=V7q2Oe6TzlAEyAc7",
    title: "Karnataka’s AI & Digital Innovation Vision",
    description:
      "Dr. N. Manjula, IAS, Hon'ble Secretary, Government of Karnataka, shares Karnataka's vision for AI, deep tech and digital innovation.",
  },
  {
    id: "ai-experimentation-to-business-impact",
    link: "https://youtu.be/zqVcqrTrrKI?si=FLfUx7LudUw-a-TA",
    title: "From AI Experimentation to Measurable Business Impact",
    description:
      "CXOs and senior industry leaders share practical lessons on moving AI from experimentation to measurable business impact.",
  },
  {
    id: "ai-maturity-enterprise-adoption-bfsi",
    link: "https://youtu.be/aym63ZXFHqU?si=QcjPbssuo9hgH9dH",
    title: "AI Maturity & Enterprise AI Adoption in BFSI",
    description:
      "Insights on the evolving maturity of AI models, their growing applications in BFSI, and the challenges of scaling AI across legacy enterprise systems.",
  },
  {
    id: "autonomous-finance-future-of-b2b",
    link: "https://youtu.be/mE-YiCnwzHA?si=gVCkH2li3M-rwnMC",
    title: "Autonomous Finance: The Future of B2B",
    description:
      "Akbar Ali Shaikh, Partner - Autonomous Finance, Deloitte, explores how AI, interoperability and real-time data are reshaping finance.",
  },
  {
    id: "ai-pilots-to-enterprise-wide-value",
    link: "https://youtu.be/jRHSGJcoAkE?si=GwSOnmpf83a8YNcR",
    title: "From AI Pilots to Enterprise-Wide Value",
    description:
      "Manpreet Singh Ahuja, Partner and Chief Client & TMT Sector Leader, PwC India, shares how organisations can move from pilots to transformation.",
  },
];
