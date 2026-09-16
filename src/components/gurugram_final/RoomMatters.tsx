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
    <section className="relative overflow-hidden border-t-[5px] border-[#07163d] bg-[#f2f4ff] px-4 py-10 sm:px-8 sm:py-12 md:py-16 lg:px-12">
      {/* Top accent bar */}
      <div className="absolute left-0 right-0 top-0 h-1 bg-[#07163d]" />

      <div className="mx-auto max-w-[1700px] text-center">
        <h2 className="text-[#06245d] 
                  font-black
                  text-[34px]
                  sm:text-[48px]
                  md:text-[64px]
                  xl:text-[42px]
                  leading-[0.94]">
          The Room That Matters
        </h2>
        <p className="mt-4 text-base font-normal text-[#171717] sm:mt-6 sm:text-xl md:text-1xl">
          700+ enterprise technology &amp; transformation leaders
        </p>

        {/* Category cards */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-6 lg:grid-cols-5 lg:gap-12 xl:gap-14">
          {CATEGORIES.map((category, idx) => {
            const Icon = category.icon;
            return (
              <div
                key={idx}
                className="flex min-h-[240px] flex-col items-center justify-start rounded-[18px] border-2 border-[#d8d9ee] bg-white/75 px-4 py-6 shadow-[0_2px_8px_rgba(36,51,110,0.03)] transition-shadow hover:shadow-[0_8px_24px_rgba(36,51,110,0.12)] sm:min-h-[300px] sm:rounded-[24px] sm:px-5 sm:py-7"
              >
                <div
                  className={`flex h-24 w-24 shrink-0 items-center justify-center rounded-full sm:h-[126px] sm:w-[126px] ${category.iconBg}`}
                >
                  {/* <Icon className={`h-[60px] w-[60px] ${category.iconColor}`} strokeWidth={1.65} /> */}
                  <img src={`${category.iconColor}`} alt="" />
                </div>
                <p className="mt-4 max-w-[260px] text-base font-semibold leading-[1.35] text-[#06245d] sm:mt-6 sm:text-xl">
                  {category.label}
                </p>
              </div>
            );
          })}
        </div>

        {/* Industries strip */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 sm:mt-10 sm:gap-x-4 sm:gap-y-3 lg:flex-nowrap lg:gap-x-5">
          {INDUSTRIES.map((industry, idx) => (
            <span key={idx} className="flex items-center gap-3">
              <span className="whitespace-nowrap text-sm font-semibold text-[#06245d] sm:text-lg">{industry}</span>
              {idx < INDUSTRIES.length - 1 && (
                <span className="text-lg leading-none text-[#ef3340] sm:text-xl">&bull;</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomThatMatters;