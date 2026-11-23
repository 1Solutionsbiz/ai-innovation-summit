import {
  ArrowRight,
  BarChart3,
  Building2,
  CheckCircle2,
  Cpu,
  Factory,
  Globe2,
  Handshake,
  HeartPulse,
  Landmark,
  Lightbulb,
  Network,
  Rocket,
  Sparkles,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";

const stats = [
  { number: "700+", label: "Enterprise Leaders", icon: Users },
  { number: "2,100+", label: "Registrations", icon: Building2 },
  { number: "40+", label: "Thought Leaders", icon: Lightbulb },
  { number: "400+", label: "Industry Experts", icon: Globe2 },
  { number: "8+", label: "Strategic Sessions", icon: BarChart3 },
];

const industries = [
  {
    title: "Automotive",
    text: "AI-powered manufacturing, autonomous technologies, predictive maintenance and connected mobility.",
    icon: Cpu,
  },
  {
    title: "Banking, Financial Services and Insurance (BFSI)",
    text: "Fraud detection, intelligent risk assessment, financial automation and customer intelligence.",
    icon: Landmark,
  },
  {
    title: "Manufacturing",
    text: "Smart factories, industrial automation, predictive analytics and AI-driven quality control.",
    icon: Factory,
  },
  {
    title: "Healthcare",
    text: "AI-assisted diagnostics, healthcare analytics, intelligent patient management and medical innovation.",
    icon: HeartPulse,
  },
  {
    title: "Technology",
    text: "Enterprise AI infrastructure, Generative AI, Agentic AI, cloud computing and next-generation digital solutions.",
    icon: Network,
  },
];

const missionPoints = [
  "Connect enterprise technology leaders with AI innovators, solution providers and industry experts.",
  "Encourage discussions around real-world AI applications, challenges and opportunities.",
  "Explore how organisations can move beyond AI experimentation towards scalable enterprise adoption.",
  "Highlight emerging technologies, including Generative AI, Agentic AI, intelligent automation and advanced analytics.",
  "Create opportunities for strategic partnerships, business networking and technology collaboration.",
  "Support organisations in understanding the business impact of AI adoption.",
];

const whyAttend = [
  {
    title: "Discover Emerging Technologies",
    text: "Understand the latest developments in Artificial Intelligence and enterprise technology.",
  },
  {
    title: "Gain Industry Insights",
    text: "Learn how organisations across sectors are approaching AI adoption and business transformation.",
  },
  {
    title: "Connect with Decision-Makers",
    text: "Engage with CIOs, CTOs, CDOs, CISOs, CAIOs and senior business leaders.",
  },
  {
    title: "Explore Business Opportunities",
    text: "Discover AI solutions, technology partnerships and potential collaborations.",
  },
  {
    title: "Understand Enterprise Challenges",
    text: "Discuss AI governance, data security, infrastructure, implementation and scalability.",
  },
  {
    title: "Build Strategic Relationships",
    text: "Connect with technology providers, enterprise buyers, innovators and industry stakeholders.",
  },
];

const SectionHeading = ({
  eyebrow,
  title,
  centered = false,
}: {
  eyebrow: string;
  title: string;
  centered?: boolean;
}) => (
  <div className={centered ? "text-center" : ""}>
    <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#ec262d]">
      {eyebrow}
    </p>
    <h2 className="text-2xl font-bold leading-tight text-slate-950 md:text-3xl lg:text-[36px]">
      {title}
    </h2>
    <div
      className={`mt-5 h-1 w-14 rounded-full bg-[#ec262d] ${
        centered ? "mx-auto" : ""
      }`}
    />
  </div>
);

const AboutUs = () => {
  return (
    <main className="zindex2 w-full overflow-hidden bg-white">
      {/* Hero */}
      
      <section className="relative isolate overflow-hidden bg-slate-950 px-4 pb-14 pt-32 text-white sm:px-6 md:pb-20 md:pt-36 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_rgba(236,38,45,0.24),_transparent_32%),linear-gradient(135deg,_#07111f_0%,_#101827_55%,_#17111a_100%)]" />
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/10" />
        <div className="absolute right-10 top-28 h-24 w-24 rounded-full border border-[#ec262d]/20" />
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/90 backdrop-blur">
              <Sparkles size={14} className="text-[#dd01b7]" />
              About
            </div>
            <h1 className="text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-[64px]">
              AI Innovation Summit
            </h1>
          </div>
        </div>
      </section>




      {/* Intro */}
      <section className="px-8 py-16 sm:px-6 md:py-20 lg:px-20">
        <div className="mx-auto grid  lg:items-start">
          <div>
            <SectionHeading
              eyebrow=""
              title="Bringing Enterprise AI and Business Innovation Together"
            />
            <div className="mt-7 space-y-5 text-[15px] leading-7 text-slate-600 md:text-base md:leading-8">
              <p>
                Artificial Intelligence is transforming how businesses operate, compete and grow. From Generative AI and intelligent automation to predictive analytics and enterprise-wide AI adoption, organisations are increasingly exploring new ways to integrate AI into their business strategies.
              </p>
              <p>
                AI Innovation Summit is a platform dedicated to bringing together technology leaders, business decision-makers, AI experts and industry innovators to explore the evolving landscape of Artificial Intelligence.
              </p>
              <p>
                As an emerging destination for enterprise AI conversations, the summit aims to bridge the gap between technological innovation and real-world business applications. It creates opportunities for meaningful discussions, knowledge exchange and collaboration around the technologies shaping the future of businesses.
              </p>
              <p>
                Positioned within the growing landscape of{" "}
                <a
                  href="https://www.aiinnovationsummit.in/"
                  className="font-semibold text-[#17458f] underline decoration-[#3b82f680]/30 underline-offset-4 hover:decoration-[#ec262d]"
                >
                  AI Events in India
                </a>
                , AI Innovation Summit brings enterprise perspectives, industry insights and practical discussions to the forefront of India's AI ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>








      {/* Stats */}
      <section className="bg-slate-50 px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow=""
            title="AI Innovation Summit: By the Numbers"
          />
          <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5 md:gap-4">
            {stats.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="group rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_8px_30px_rgba(15,23,42,0.04)] transition duration-300 hover:-translate-y-1 hover:border-[#ec262d]/30 hover:shadow-[0_16px_36px_rgba(15,23,42,0.08)] md:p-6"
                >
                  <div className="mb-4 flex h-9 w-9 abouticon items-center justify-center rounded-lg bg-[#3b82f626] text-[#17458f]">
                    <Icon size={18} />
                  </div>
                  <p className="text-2xl font-bold text-slate-950 md:text-3xl">
                    {item.number}
                  </p>
                  <p className="mt-2 text-xs font-semibold leading-5 text-slate-500 md:text-sm">
                    {item.label}
                  </p>
                </div>
              );
            })}
          </div>
          <p className="mt-7 max-w-3xl text-[15px] leading-7 text-slate-600 md:text-base">
            These milestones reflect the growing interest in enterprise AI and the importance of creating platforms where industry leaders can learn, connect and collaborate.
          </p>
        </div>
      </section>








      {/* Landscape */}
      <section className="px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <SectionHeading
              eyebrow="India's AI ecosystem"
              title="India's Growing AI Landscape"
            />
          </div>
          <div>
            <p className="mb-6 text-[15px] leading-8 text-slate-600 md:text-base">
              India is emerging as a major player in artificial intelligence, with growing enterprise adoption, investment and AI talent.
            </p>
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                ["87%", "of enterprises actively use AI solutions"],
                ["3rd", "in Stanford University's 2025 Global AI Vibrancy Ranking"],
                ["6M+", "people employed in India's technology and AI ecosystem"],
              ].map(([value, label]) => (
                <div
                  key={value}
                  className="rounded-xl border border-slate-200 p-5"
                >
                  <p className="text-3xl font-bold text-[#214c94]">{value}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {label}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-[15px] leading-8 text-slate-600 md:text-base">
              As Artificial Intelligence becomes an important part of business strategy, organisations are looking beyond experimentation towards practical implementation, responsible adoption and enterprise-wide transformation.
              <br />
              AI Innovation Summit aims to support these conversations by bringing together the leaders, experts and organisations driving this change.
            </p>
          </div>
        </div>
      </section>














      {/* Vision and mission */}
      <section className="bg-slate-950 px-4 py-16 text-white sm:px-6 md:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          
          <p className="dflex flex align-center gap-5 mb-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#ec262d]">
              <Target size={22} />
            </div>
            <h2 className="text-3xl font-bold">Our Vision</h2>
          </p>

          <div className="grid gap-5 lg:grid-cols-2">
            <article className="rounded-2xl border border-white/10 bg-white/[0.05] p-6 md:p-8">
              <p className="mt-4 text-md font-semibold ">
                To create a connected ecosystem where enterprise leaders,
                technology innovators and industry experts can exchange ideas,
                explore emerging technologies and accelerate meaningful AI
                adoption.
              </p>
            </article>
            <article className="rounded-2xl border border-white/10 bg-white/[0.05] p-6 md:p-8">
              
              <p className="mt-4 text-md font-semibold">
                We envision a future where Artificial Intelligence becomes a
                strategic driver of business transformation, operational
                efficiency, innovation and sustainable growth across industries.
              </p>
            </article>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[0.55fr_1.45fr]">
            <div>

<p className="dflex flex gap-5 align-center mb-5"> 
<div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#ec262d]">
  <TrendingUp size={22} />
</div>
<h2 className="text-3xl font-bold">Our Mission</h2>
</p>

              <p className="mt-4 leading-7 text-slate-300">
                Our mission is to make enterprise AI conversations more practical, collaborative and outcome-driven.
              </p>
            </div>
            
            <div className="grid gap-3 sm:grid-cols-2">
              <h2 className="font-[800] text-[20px]">We aim to:</h2>
              <p></p>
              {missionPoints.map((point) => (
                <div
                  key={point}
                  className="flex gap-3 rounded-xl border border-white/10 p-4"
                >
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 text-[#ff5b62]"
                  />
                  <p className="text-sm leading-6 text-slate-200">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>





      {/* Audience */}
      <section className="px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 rounded-2xl border border-slate-200 bg-slate-50 p-6 md:p-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <SectionHeading
                eyebrow="Join the community"
                title="Who Should Attend?"
              />
            </div>
            <div className="text-[15px] leading-8 text-slate-600 md:text-base">
              <p>
                AI Innovation Summit brings together senior decision-makers, including CIOs, CTOs, CDOs, CISOs and CAIOs, along with business leaders and technology professionals.
              </p>
              <p className="mt-4">
                Discussions cover AI applications and challenges across automotive, BFSI, manufacturing, healthcare and other industries.
              </p>
            </div>
          </div>
        </div>
      </section>








      {/* Industries */}
      <section className="bg-slate-50 px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Cross-industry impact"
            title="Exploring AI Across Industries"
          />
          <p className="mt-7  text-[15px] leading-8 text-slate-600 md:text-base">
            Artificial Intelligence is no longer limited to the technology sector. Its applications are expanding across traditional industries, creating new opportunities for efficiency, innovation and business growth.
          </p>
          <p className="mt-7  text-[15px] leading-8 text-slate-600 md:text-base">
            AI Business Summit explores the role of AI across key industry verticals, including:
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => {
              const Icon = industry.icon;
              return (
                <article
                  key={industry.title}
                  className="rounded-2xl border border-slate-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-red-200 md:p-6"
                >
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-slate-950 text-white">
                    <Icon size={21} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-950">
                    {industry.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {industry.text}
                  </p>
                </article>
              );
            })}
          </div>
          <p className="mt-7 text-[15px] leading-8 text-slate-600 md:text-base">
            These industry-focused conversations help organisations understand how AI can address sector-specific challenges and unlock new business opportunities.
          </p>
        </div>
      </section>










      {/* Why attend */}
      <section className="px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Why attend"
            title="Why Be Part of the AI Innovation Summit?"
          />
          <p className="mt-7 text-[15px] leading-8 text-slate-600 md:text-base">
            As organisations move from AI experimentation to enterprise-wide implementation, the need for practical knowledge, strategic direction and industry collaboration continues to grow.
          </p>
          <p className="mt-7 text-[15px] leading-8 text-slate-600 md:text-base">
            AI Innovation Summit aims to create an environment where participants can:
          </p>
          <div className="mt-8 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {whyAttend.map((item, index) => (
              <article
                key={item.title}
                className="rounded-xl border border-slate-200 p-5 md:p-6"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#3b82f626] text-xs font-bold text-[#17458f]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-bold text-slate-950">{item.title}</h3>
                </div>
                <p className="text-sm leading-7 text-slate-600">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>










      {/* Sponsors */}
      <section className="bg-slate-950 px-4 py-16 text-white sm:px-6 md:py-20 lg:px-8">


        <div className="mx-auto grid gap-4 px-9">


            <h2 className="mt-3 text-3xl font-bold leading-tight">
              Opportunities for Sponsors and Technology Partners
            </h2>
            <p className="text-[15px] leading-8 text-slate-300 md:text-base">
              AI Innovation Summit also provides opportunities for organisations operating in the enterprise technology and AI ecosystem to connect with relevant business audiences.
            </p>
            <p className="text-[15px] leading-8 text-slate-300 md:text-base">
              For AI companies, technology providers, consulting firms and enterprise solution vendors, the summit offers a platform to explore brand visibility, industry engagement and business networking opportunities.
            </p>
        
          
          <div>
            <p className="text-[15px] leading-8 text-slate-300 md:text-base">
              Organisations interested in AI Conference Sponsorship in India can explore opportunities to:
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "Showcase AI products, platforms and enterprise solutions.",
                "Connect with senior technology and business decision-makers.",
                "Build relationships with potential enterprise customers and partners.",
                "Strengthen brand positioning within India's growing AI ecosystem.",
                "Participate in conversations around enterprise AI innovation and digital transformation.",
              ].map((point) => (
                <div
                  key={point}
                  className="flex gap-3 rounded-xl border border-white/10 p-4"
                >
                  <Handshake
                    size={18}
                    className="mt-0.5 shrink-0 text-[#ff5b62]"
                  />
                  <p className="text-sm leading-6 text-slate-200">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>









      {/* CTA */}
      <section className="px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[linear-gradient(135deg,#17458f_0%,#083587_55%,#17458f_100%)] px-5 py-12 text-center text-white sm:px-8 md:px-12 md:py-16">
          <div className="absolute left-[-70px] top-[-70px] h-44 w-44 rounded-full border border-white/15" />
          <div className="absolute bottom-[-90px] right-[-50px] h-56 w-56 rounded-full border border-white/10" />
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#da05b4]">
            Join the conversation
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold leading-tight md:text-4xl">
            Be Part of the AI Conversation
          </h2>
          <p className="mx-auto mt-5 max-w-7xl text-sm leading-7 text-red-50 md:text-base">
            Artificial Intelligence is shaping the next phase of enterprise innovation. As businesses continue to explore its potential, collaboration between technology leaders, industry experts and solution providers will play an important role in determining how AI creates real business value.
          </p>
          <p className="mx-auto mt-5 max-w-7xl text-sm leading-7 text-red-50 md:text-base">
AI Innovation Summit aims to be part of this journey by bringing together the people, ideas and technologies driving the future of enterprise AI.
          </p>
          <p className="mx-auto mt-5 max-w-7xl text-sm leading-7 text-red-50 md:text-base">
Whether you are a technology leader, business decision-maker, AI innovator or organisation exploring new business opportunities, be part of the conversation shaping the future of Artificial Intelligence.
          </p>
          <p className="mt-5 text-base font-semibold md:text-lg">
            Explore. Connect. Innovate. Transform.
          </p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="https://www.aiinnovationsummit.in/#delhincrregistrationform"
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-slate-100"
            >
              Register
            </a>
            <a
              href="https://www.aiinnovationsummit.in/partner-form"
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-slate-100"
            >
              Become a Partner
            </a>
            <a
              href="mailto:guildconferences@guildlive.com"
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-slate-100"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
