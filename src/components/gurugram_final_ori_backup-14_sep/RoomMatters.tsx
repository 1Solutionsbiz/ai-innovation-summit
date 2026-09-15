import { Users, BrainCircuit, Workflow, Network, Factory } from "lucide-react";

// ---------- Types ----------
type Category = {
  icon: React.ElementType;
  iconBg: string;
  iconColor: string;
  label: string;
};

// ---------- Data ----------
const CATEGORIES: Category[] = [
  {
    icon: Users,
    iconBg: "bg-purple-600",
    iconColor: "gurugram/icons/cio.png",
    label: "CIO / CTO / CDO / CISO / CAIO",
  },
  {
    icon: BrainCircuit,
    iconBg: "bg-blue-100",
    iconColor: "gurugram/icons/data_leads.png",
    label: "AI & Data Leaders",
  },
  {
    icon: Workflow,
    iconBg: "bg-emerald-100",
    iconColor: "gurugram/icons/transformation.png",
    label: "Digital Transformation Leaders",
  },
  {
    icon: Network,
    iconBg: "bg-orange-100",
    iconColor: "gurugram/icons/enterprise.png",
    label: "Enterprise Architecture & Cloud Leaders",
  },
  {
    icon: Factory,
    iconBg: "bg-rose-100",
    iconColor: "gurugram/icons/manufacturing.png",
    label: "Manufacturing & Industry Technology Leaders",
  },
];

const INDUSTRIES = [
  "BFSI",
  "Manufacturing",
  "Automotive",
  "Consumer",
  "Retail",
  "Telecom",
  "Healthcare",
  "Energy",
  "Technology",
];

const RoomThatMatters = () => {
  return (
    <section className="relative overflow-hidden border-t-[5px] border-[#07163d] bg-[#f2f4ff] px-5 py-12 sm:px-8 md:py-16 lg:px-12">
      {/* Top accent bar */}
      <div className="absolute left-0 right-0 top-0 h-1 bg-[#07163d]" />

      <div className="mx-auto max-w-[1700px] text-center">
        <h2 className="font-black uppercase leading-[0.95] tracking-[-2px] text-[#06245d] text-4xl sm:text-5xl md:text-6xl lg:text-[3.2rem]">
          THE ROOM THAT MATTERS
        </h2>
        <p className="mt-6 text-lg font-normal text-[#171717] sm:text-xl md:text-1xl">
          700+ enterprise technology &amp; transformation leaders
        </p>

        {/* Category cards */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-12 xl:gap-14">
          {CATEGORIES.map((category, idx) => {
            const Icon = category.icon;
            return (
              <div
                key={idx}
                className="flex min-h-[300px] flex-col items-center justify-start rounded-[24px] border-2 border-[#d8d9ee] bg-white/75 px-5 py-7 shadow-[0_2px_8px_rgba(36,51,110,0.03)] transition-shadow hover:shadow-[0_8px_24px_rgba(36,51,110,0.12)]"
              >
                <div
                  className={`flex h-[126px] w-[126px] shrink-0 items-center justify-center rounded-full ${category.iconBg}`}
                >
                  {/* <Icon className={`h-[72px] w-[72px] ${category.iconColor}`} strokeWidth={1.65} /> */}
                  <img src={`${category.iconColor}`} alt="" />
                </div>
                <p className="mt-6 max-w-[260px] text-lg font-semibold leading-[1.35] text-[#06245d] sm:text-xl">
                  {category.label}
                </p>
              </div>
            );
          })}
        </div>

        {/* Industries strip */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-4 gap-y-3 lg:flex-nowrap lg:gap-x-5">
          {INDUSTRIES.map((industry, idx) => (
            <span key={idx} className="flex items-center gap-3">
              <span className="whitespace-nowrap text-lg font-semibold text-[#06245d] sm:text-xl">{industry}</span>
              {idx < INDUSTRIES.length - 1 && (
                <span className="text-xl leading-none text-[#ef3340]">&bull;</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomThatMatters;