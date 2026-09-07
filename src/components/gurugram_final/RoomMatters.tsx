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
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    label: "CIO / CTO / CDO / CISO / CAIO",
  },
  {
    icon: BrainCircuit,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    label: "AI & Data Leaders",
  },
  {
    icon: Workflow,
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    label: "Digital Transformation Leaders",
  },
  {
    icon: Network,
    iconBg: "bg-orange-100",
    iconColor: "text-orange-500",
    label: "Enterprise Architecture & Cloud Leaders",
  },
  {
    icon: Factory,
    iconBg: "bg-rose-100",
    iconColor: "text-rose-500",
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
    <section className="relative bg-gradient-to-br from-indigo-50 via-blue-50 to-indigo-50 py-16 px-6 overflow-hidden">
      {/* Top accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 via-blue-900 to-sky-300" />

      <div className="max-w-[1200px] mx-auto text-center">
        <h2 className="font-black text-blue-950 text-4xl md:text-5xl tracking-tight">
          The Room That Matters
        </h2>
        <p className="mt-3 text-slate-600 text-lg">
          700+ enterprise technology &amp; transformation leaders
        </p>

        {/* Category cards */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
          {CATEGORIES.map((category, idx) => {
            const Icon = category.icon;
            return (
              <div
                key={idx}
                className="bg-white/70 backdrop-blur-sm border border-white rounded-2xl p-6 flex flex-col items-center gap-5 shadow-sm hover:shadow-md transition-shadow"
              >
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center ${category.iconBg}`}
                >
                  <Icon className={`w-7 h-7 ${category.iconColor}`} strokeWidth={1.75} />
                </div>
                <p className="font-semibold text-blue-950 leading-snug">
                  {category.label}
                </p>
              </div>
            );
          })}
        </div>

        {/* Industries strip */}
        <div className="mt-10 flex flex-wrap justify-center items-center gap-x-3 gap-y-2">
          {INDUSTRIES.map((industry, idx) => (
            <span key={idx} className="flex items-center gap-3">
              <span className="font-bold text-blue-950">{industry}</span>
              {idx < INDUSTRIES.length - 1 && (
                <span className="text-red-500 text-lg leading-none">&middot;</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomThatMatters;