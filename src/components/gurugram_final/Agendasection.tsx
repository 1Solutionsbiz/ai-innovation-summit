import { useState } from "react";

// ---------- Types ----------
type Speaker = {
  name: string;
  role: string; // can include \n for multi-line via array below instead
  roleLines?: string[]; // optional multi-line role/company breakup
  image: string;
};

type DescriptionBlock =
  | {
      type: "paragraph";
      text: string;
      tag?: "h2" | "h3" | "h4" | "h5" | "span" | "p";
      className?: string;
    }
  | { type: "list"; items: string[] };

type SpeakerSection = {
  title?: string;
  speakers: Speaker[];
};

type AgendaContentSection =
  | {
      type: "description";
      title?: string;
      description: string | DescriptionBlock[];
    }
  | {
      type: "speakers";
      title?: string;
      speakers: Speaker[];
    };

type AgendaItem = {
  time: string;
  title: string;
  section?: string;
  description?: string | DescriptionBlock[];
  descriptionTwo?: string | DescriptionBlock[];
  speakers?: Speaker[];
  speakerTitle?: string;
  speakerSections?: SpeakerSection[];
  contentSections?: AgendaContentSection[];
  isTrack?: boolean;
};

type DescriptionParts = {
  summary: string;
  details: DescriptionBlock[];
};

type Track = {
  id: string;
  label: string;
  items: AgendaItem[];
};

type DayData = {
  id: string;
  label: string;
  tracks: Track[];
};

const getDescriptionBlocks = (
  description: string | DescriptionBlock[],
): DescriptionBlock[] => {
  if (Array.isArray(description)) return description;

  return description
    .replace(/\\n/g, "\n")
    .split(/\n+/)
    .flatMap((paragraph) => {
      const parts = paragraph
        .split(/\s+-\s+/)
        .map((part) => part.trim())
        .filter(Boolean);

      if (parts.length <= 1) {
        return [{ type: "paragraph", text: paragraph.trim() }];
      }

      return [
        { type: "paragraph", text: parts[0] },
        { type: "list", items: parts.slice(1) },
      ];
    });
};

const getDescriptionParts = (
  description: string | DescriptionBlock[],
): DescriptionParts => {
  const blocks = getDescriptionBlocks(description);
  const firstParagraph = blocks.find((block) => block.type === "paragraph");

  if (!firstParagraph || firstParagraph.type !== "paragraph") {
    return { summary: "", details: blocks };
  }

  const summary = firstParagraph.text;
  const details = [
    ...blocks.slice(blocks.indexOf(firstParagraph) + 1),
  ];

  return { summary, details };
};

const AgendaDescription = ({
  title,
  description,
}: {
  title?: string;
  description: string | DescriptionBlock[];
}) => {
  const descriptionParts = getDescriptionParts(description);

  return (
    <div className="mt-2">
      {title && (
        <h4 className="mb-2 text-sm font-bold uppercase tracking-wide text-fuchsia-400">
          {title}
        </h4>
      )}
      <div className="max-w-3xl break-words text-sm leading-relaxed text-white/65">
        {descriptionParts.summary && <p>{descriptionParts.summary}</p>}
        {descriptionParts.details.length > 0 && (
          <div className="mt-3 space-y-4">
            {descriptionParts.details.map((block, blockIdx) =>
              block.type === "paragraph" ? (
                (() => {
                  const Tag = block.tag ?? "p";
                  return (
                    <Tag key={blockIdx} className={block.className}>
                      {block.text}
                    </Tag>
                  );
                })()
              ) : (
                <ul
                  key={blockIdx}
                  className="list-disc space-y-2 pl-5"
                >
                  {block.items.map((itemText, detailIdx) => (
                    <li key={detailIdx}>{itemText}</li>
                  ))}
                </ul>
              ),
            )}
          </div>
        )}
      </div>
    </div>
  );
};

const AgendaSpeakers = ({
  title,
  speakers,
}: {
  title?: string;
  speakers: Speaker[];
}) => {
  if (speakers.length === 0) return null;

  return (
    <div className="mt-4">
      {title && (
        <h4 className="mb-3 text-sm font-bold uppercase tracking-wide text-fuchsia-400">
          {title}
        </h4>
      )}
      <div className="grid grid-cols-1 gap-x-10 gap-y-4 sm:grid-cols-2">
        {speakers.map((speaker, speakerIdx) => (
          <div key={speakerIdx} className="flex items-center gap-3">
            <img
              src={speaker.image}
              alt={speaker.name}
              className="w-12 h-16 rounded-md object-cover flex-shrink-0 bg-white/10"
            />
            <div className="text-sm">
              <p className="text-white font-semibold">{speaker.name}</p>
              {(speaker.roleLines ?? [speaker.role]).map((line, lineIdx) => (
                <p
                  key={lineIdx}
                  className="text-white/60 leading-tight"
                >
                  {line}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

type AgendaGroup = {
  time: string;
  items: AgendaItem[];
};

const normalizeTime = (time: string) =>
  time
    .trim()
    .replace(/\s+/g, " ")
    .replace(/\s*[-–—]\s*/g, "-");

const getAgendaGroups = (items: AgendaItem[]): AgendaGroup[] =>
  items.reduce<AgendaGroup[]>((groups, item) => {
    const lastGroup = groups[groups.length - 1];
    const normalizedTime = normalizeTime(item.time);

    if (
      lastGroup &&
      normalizeTime(lastGroup.time) === normalizedTime &&
      Boolean(lastGroup.items[0].isTrack) === Boolean(item.isTrack)
    ) {
      lastGroup.items.push(item);
      return groups;
    }

    groups.push({ time: item.time, items: [item] });
    return groups;
  }, []);

// ---------- Sample data (swap with real data) ----------
const AGENDA_DATA: DayData[] = [
  {
    id: "day1",
    label: "Day 1",
    tracks: [
      {
        id: "Detailed-Agenda",
        label: "Detailed Agenda",
        items: [
          {
            time: "08:30 AM - 09:30 AM",
            section: "Pre-Summit",
            title: "Registration & Networking Breakfast",
            description:
              "Delegate arrival. Engagement Zone opens in pre-function area. Sponsor booths open.",
            // contentSections: [
            //   {
            //     type: "description",
            //     description: "description section",
            //   },
            //   {
            //     type: "speakers",
            //     title: "Moderator",
            //     speakers: [
            //       {
            //         name: "Navnit Nakra",
            //         role: "",
            //         roleLines: ["Moderator", "Technology Leadership Panel"],
            //         image: "https://olive-elk-842602.hostingersite.com/avtar.png",
            //       },
            //     ],
            //   },
            //   {
            //     type: "description",
            //     title: "Key Discussion Points",
            //     description: "desciption test",
            //   },
            // ],
          },
          {
            time: "09:35 AM – 09:45 AM",
            section: "Opening",
            title: "Welcome Address",
            contentSections: [
              {
                type: "description",
                description:
                  "Welcome note by The Guild and Guild Live. Context setting for the day",
              },
              {
                type: "speakers",
                title: "Speaker",
                speakers: [
                  {
                    name: "Anushruti Singh",
                    role: "",
                    roleLines: ["Associate Editor", "The Guild"],
                    image: "https://olive-elk-842602.hostingersite.com/avtar.png",
                  },
                ],
              },
            ],
          },
          {
            time: "09:45 AM – 10:00 AM ",
            section: "Keynotes — First Half",
            title:
              "Opening Keynote From Assistance to Autonomy: The Enterprise AI Mandate for 2026",
            contentSections: [
              {
                type: "description",
                description:
                  "What enterprise AI leadership actually looks like when the boardroom demands ROI, the regulators demand governance, and the technology moves faster than either can keep up with - Where enterprise AI stands in India in 2026, the state of AI adoption across sectors - Why the shift from AI assistance to AI autonomy is a leadership decision, not just a technology decision - The structural choices, architectural, economic and cultural, that separate enduring AI deployments from those that stall - What the intelligent enterprise looks like from the inside and what leaders need to rethink",
              },
              {
                type: "speakers",
                title: "Keynote Address",
                speakers: [
                  {
                    name: "Neetan Chopra",
                    role: "",
                    roleLines: ["Chief Digital and Information Officer", "IndiGo"],
                    image: "https://olive-elk-842602.hostingersite.com/gurugram/speakers/Neetan-Chopra.png",
                  },
                ],
              },
            ],
          },
          {
            time: "10:00 AM – 10:15 AM ",
            title: "Partner Keynote Address",
            contentSections: [
              {
                type: "description",
                description: "Special Address by Salesforce",
              },
              {
                type: "speakers",
                title: "Speaker",
                speakers: [
                  {
                    name: "Sumit Sharma",
                    role: "",
                    roleLines: ["Director Solution Engineering", "Salesforce"],
                    image: "https://olive-elk-842602.hostingersite.com/avtar.png",
                  },
                ],
              },
            ],
          },
          {
            time: "10:15 AM – 10:30 AM ",
            title: "Inaugural / Dignitary Address",
            description: "[Guest of Honour, Government of Delhi NCT / MeitY]",
          },
          {
            time: "10:30 AM – 10:45 AM",
            title: "Tea & Coffee Break",
            description: "Sponsor booths and Engagement Zone.",
          },
          {
            time: "10:45 AM – 11:00 AM ",
            title: "Partner Keynote Address",
            contentSections: [
              {
                type: "description",
                description: "Special Address by Atlassian",
              },
              {
                type: "speakers",
                title: "Speaker",
                speakers: [
                  {
                    name: "Swapna Bapat",
                    role: "",
                    roleLines: ["Head of Sales, India", "Atlassian"],
                    image: "https://olive-elk-842602.hostingersite.com/avtar.png",
                  },
                ],
              },
            ],
          },
          {
            time: "11:00 AM – 11:45 AM",
            section: "Plenary Sessions — First Half ",
            title:
              "Session 1: Leadership Panel The Technology Mandate: Scaling AI Where the Board Is Watching",
            contentSections: [
              {
                type: "description",
                description:
                  "The role of Technology CXOs has been permanently rewritten. From technology custodians to enterprise intelligence architects. Accountable to boards for AI ROI. Accountable to regulators for AI governance. Accountable to the workforce for how AI reshapes their jobs. \n This panel brings together India's most senior Tech-CXOs from manufacturing, BFSI, pharma, FMCG, and cross-industry enterprises for a frank conversation on how they are navigating the most consequential mandate transformation in a generation.  - Turning AI investment into a board-level ROI narrative  - Governing GPU costs, model lifecycles and AI infrastructure at scale  - Solving legacy integration, architecture debt and vendor lock-in  - Redrawing AI accountability across the C-suite  - Building the intelligent enterprise operating model  - Leading the workforce through AI-driven change, trust and capability ",
              },
              {
                type: "speakers",
                title: "Moderator",
                speakers: [
                  {
                    name: "Navnit Nakra",
                    role: "",
                    roleLines: ["Partner & Technology Sector Leader", "PwC India "],
                    image: "https://olive-elk-842602.hostingersite.com/gurugram/speakers/Navnit-Nakra.png",
                  },
                ],
              },
              {
                type: "speakers",
                title: "Speakers",
                speakers: [
                  {
                    name: "Gaurav Gulati",
                    role: "",
                    roleLines: ["Group CIO", "Motherson Group"],
                    image: "https://olive-elk-842602.hostingersite.com/gurugram/speakers/Gaurav-Gulati.png",
                  },
                  {
                    name: "Supriya Kaul",
                    role: "",
                    roleLines: ["Regional IT CIO", "CNH Industrial"],
                    image: "https://olive-elk-842602.hostingersite.com/gurugram/speakers/Supriya-Kaul.png",
                  },
                  {
                    name: "Sanjiv Jain",
                    role: "",
                    roleLines: ["Group Chief Information Officer", "Krishna Maruti Group"],
                    image: "https://olive-elk-842602.hostingersite.com/gurugram/speakers/Sanjiv-Jain.png",
                  },
                  {
                    name: "Munender Soperna",
                    role: "",
                    roleLines: ["Group CDIO", "Dr Lal PathLabs"],
                    image: "https://olive-elk-842602.hostingersite.com/gurugram/speakers/Munender-Soperna.png",
                  },
                ],
              },
            ],
          },
          {
            time: "11:45 AM – 12:00 PM ",
            title: "Partner Keynote Address",

            contentSections: [
              {
                type: "description",
                description: "Inference at the edge",
              },
              {
                type: "description",
                description: "Special Address by Akamai",
              },
              {
                type: "speakers",
                title: "Speaker",
                speakers: [
                  {
                    name: "Jay Jenkins",
                    role: "",
                    roleLines: ["Field CTO", "Akamai"],
                    image: "https://olive-elk-842602.hostingersite.com/gurugram/speakers/Jay-Jenkins.png",
                  },
                ],
              },
            ],
          },
          {
            time: "12:00 PM – 12:45 PM",
            title: "Session 2: Agents at Work: From Pilot to Production",
            contentSections: [
              {
                type: "description",
                description: "Agentic AI is the most consequential shift in enterprise technology since cloud. The question in 2026 is no longer what it can do, it is whether enterprises have the architecture, governance, and leadership conviction to let it run. This session brings together India's most senior AI and technology leaders from across industries for the most execution-focused conversation of the day. \n The conversation will explore: - Moving agentic AI from pilots to production at enterprise scale  - Building production-grade agents through orchestration, memory and human-in-the-loop design  - Defining ownership and governance for agentic AI across the enterprise  - Scaling real-world use cases across quality, customer service, procurement, fraud and supply chains  - Measuring agentic AI ROI through cycle time, error reduction and workforce leverage  - Building leadership conviction, cross-functional alignment and workforce readiness for autonomous AI ",
              },
              {
                type: "speakers",
                title: "Moderator",
                speakers: [
                  {
                    name: "Sundar Ram Partner",
                    role: "",
                    roleLines: ["Partner & Leader – Cloud Engineering and Data Analytics", "PwC India"],
                    image: "https://olive-elk-842602.hostingersite.com/gurugram/speakers/Sundar-Ram-Partner.png",
                  },
                ],
              },
              {
                type: "speakers",
                title: "Speaker",
                speakers: [
                  {
                    name: "Vivek Madan",
                    role: "",
                    roleLines: ["Chief Technology Officer", "Hero Fincorp – Housing Entity"],
                    image: "https://olive-elk-842602.hostingersite.com/gurugram/speakers/Vivek-Madan.png",
                  },
                  {
                    name: "Arvind Heda",
                    role: "",
                    roleLines: ["Chief Technology Officer", "Info Edge India Ltd"],
                    image: "https://olive-elk-842602.hostingersite.com/gurugram/speakers/Arvind-Heda.png",
                  },
                  {
                    name: "Charit Agarwal",
                    role: "",
                    roleLines: ["Chief Data & AI Officer", "Niva Bupa Health Insurance"],
                    image: "https://olive-elk-842602.hostingersite.com/gurugram/speakers/Charit-Agarwal.png",
                  },
                  {
                    name: "Ankit Gupta",
                    role: "",
                    roleLines: ["Chief Technology Officer", "Policy bazaar for Business"],
                    image: "https://olive-elk-842602.hostingersite.com/gurugram/speakers/Ankit-Gupta.png",
                  },
                  {
                    name: "Ashu Gupta",
                    role: "",
                    roleLines: ["Senior Director – Digital & AI", "(Group CDO)- Jubilant Pharmova"],
                    image: "https://olive-elk-842602.hostingersite.com/gurugram/speakers/Ashu-Gupta.png",
                  },
                  {
                    name: "Rahul Gupta",
                    role: "",
                    roleLines: ["Distinguished, Enterprise Architect", "Salesforce"],
                    image: "https://olive-elk-842602.hostingersite.com/avtar.png",
                  },
                ],
              },
            ],
          },
          {
            time: "12:45 PM – 01:15 PM ",
            title:
              "Session 3: Fireside Chat The CEO x CIO Dialogue: When the Machine Takes the Wheel",
            contentSections: [
              {
                type: "description",
                description: "The most honest conversation of the day. A CEO and a CIO, unscripted, sitting across from each other, on what building an autonomous enterprise actually feels like from the inside. The governance moments that tested everything. The board conversations that changed the mandate. The architectural bets that defined where the enterprise stands today. - How the CEO-CIO relationship permanently changes when AI systems make decisions that used to require a committee - Governing AI that moves faster than your audit cycle, and what happens when it does not - The uncomfortable moment most enterprises discover they are not as AI-ready as they thought - The one structural decision each leader would reverse, knowing everything they now know ",
              },
              {
                type: "speakers",
                title: "Speaker",
                speakers: [
                  {
                    name: "Sumit Bhatnagar",
                    role: "",
                    roleLines: ["MD & CEO", "Freecharge"],
                    image: "https://olive-elk-842602.hostingersite.com/gurugram/speakers/Sumit-Bhatnagar.png",
                  },
                  {
                    name: "Parna Ghosh",
                    role: "",
                    roleLines: ["President, Group CIO and Data Protection Officer", "Uno Minda"],
                    image: "https://olive-elk-842602.hostingersite.com/gurugram/speakers/Parna-Ghosh.png",
                  },
                ],
              },
            ],
          },
          {
            time: "01:15 PM – 02:00 PM ",
            title:
              "Session 4: Data as Destiny: Building the Foundation Autonomous AI Runs On",
            contentSections: [
              {
                type: "description",
                description: "The most sophisticated AI model cannot outperform the data that feeds it. This panel brings together India's most senior data and AI leaders from across the country's most data-intensive sectors for a session on what it actually takes to build data infrastructure that can carry the weight of autonomous AI. - Lakehouse architecture, federated platforms and unified data fabrics replacing legacy warehouses - The India Stack advantage: DPI, Account Aggregator and ONDC reshaping enterprise data access - Turning data governance into a competitive advantage for faster, more confident AI deployment - Strengthening observability, lineage and explainability for boards, regulators and risk teams - Building AI-ready data infrastructure across manufacturing, pharma and supply chains - Making data ownership a shared, cross-functional responsibility for autonomous AI ",
              },
              {
                type: "speakers",
                title: "Moderator",
                speakers: [
                  {
                    name: "Nitin Raj",
                    role: "",
                    roleLines: ["Partner, Data and AI", "PwC India"],
                    image: "https://olive-elk-842602.hostingersite.com/gurugram/speakers/Nitin-Raj.png",
                  },
                ],
              },
              {
                type: "speakers",
                title: "Speaker",
                speakers: [
                  {
                    name: "Dr. Shakti Goel",
                    role: "",
                    roleLines: ["Chief Architect and Data Scientist", "Yatra Online"],
                    image: "https://olive-elk-842602.hostingersite.com/gurugram/speakers/Shakti-Goel.png",
                  },
                  {
                    name: "Vikram Khurana",
                    role: "",
                    roleLines: ["Head of Analytics ,Business Intelligence,Artificial Intelligence(VP)", "Delhivery"],
                    image: "https://olive-elk-842602.hostingersite.com/gurugram/speakers/Vikram-Khurana.png",
                  },
                  {
                    name: "Prashant Jha",
                    role: "",
                    roleLines: ["Senior Director of Data Science", "Gartner"],
                    image: "https://olive-elk-842602.hostingersite.com/gurugram/speakers/Prashant-Jha.png",
                  },
                  {
                    name: "Kushal Kumar Varshney",
                    role: "",
                    roleLines: ["Assistant Vice President Information Technology (CIO)", "Juniper Green Energy "],
                    image: "https://olive-elk-842602.hostingersite.com/avtar.png",
                  },
                ],
              },
            ],
          },
          {
            time: "02:00 PM – 02:45 PM",
            title: "Networking Lunch ",
            description:
              "Open networking. Sponsor exhibition and engagement zone active.",
          },
          {
            time: "02:45 PM – 03:45 PM",
            section: "Parallel Tracks — Post Lunch (2:45 PM – 3:45 PM)",
            title: "Track 1: AI Security ",



            contentSections: [
              {
                type: "description",
                description:"Security • Governance • Trust \n The Trust Layer: Securing, Governing, and Scaling AI Enterprises Can Actually Rely On",
              },
              {
                type: "description",
                description:"The dedicated AI security, governance, and trust track, where the enterprises deploying AI at scale are being forced to confront a hard truth: innovation without trust does not survive contact with the boardroom, the regulator, or the customer. This track brings together India's most senior CISOs, Heads of AI Governance, Chief Risk Officers, and security architects for a practitioner-level deep dive on what it takes to make enterprise AI safe, defensible, and durable in 2026. - Treating agent access as the new privileged access - Building AI inventories across models, datasets, APIs, agents and vector databases - Moving from responsible AI principles to enforceable runtime guardrails and continuous testing - Managing parallel AI compliance requirements across regulators and sectors - Aligning the board on acceptable AI risk and making security a business enabler - Building trust infrastructure through audit trails,access governance and zero-trust agents \n Keynote Address",
              },
              {
                type: "speakers",
                title: "Speaker",
                speakers: [
                  {
                    name: "Mansi Thapar",
                    role: "",
                    roleLines: ["Global Head - Cyber Security & Infra", "Apollo Tyres  (10 Mins) "],
                    image: "https://olive-elk-842602.hostingersite.com/avtar.png",
                  },
                ],
              },
              {
                type: "speakers",
                title: "Moderator",
                speakers: [
                  {
                    name: "Sumit Sharma",
                    role: "",
                    roleLines: ["Partner, Responsible AI", "KPMG in India "],
                    image: "https://olive-elk-842602.hostingersite.com/avtar.png",
                  },
                ],
              },
              {
                type: "speakers",
                title: "Panel Speakers",
                speakers: [
                  {
                    name: "Faizul Mufti",
                    role: "",
                    roleLines: ["Vice President, Global Leader Cyber Defense Operations", "Genpact "],
                    image: "https://olive-elk-842602.hostingersite.com/gurugram/speakers/Faizul-Mufti.png",
                  },
                  {
                    name: "Naveen Kumar Pareek",
                    role: "",
                    roleLines: ["IT Head & CISO", "Livpure India "],
                    image: "https://olive-elk-842602.hostingersite.com/gurugram/speakers/Naveen-Kumar-Pareek.png",
                  },
                  {
                    name: "Narendra Singh",
                    role: "",
                    roleLines: ["Director - Engineering & Cyber Security Practice Head, APAC", "Hitachi Digital "],
                    image: "https://olive-elk-842602.hostingersite.com/gurugram/speakers/Narendra-Singh.png",
                  },
                ],
              },
            ],
          },
          {
            time: "02:45 PM  – 03:45 PM",
            title: "Track 2: Autonomous Industry",
            description:
              "Manufacturing • Robotics • Industrial AI \n The Autonomous Factory: Where Agentic AI, Robotics, and Industrial Intelligence Are Rewriting How India Makes Things \n\n The dedicated autonomous industry track, and the most operationally grounded conversation of the day. India’s manufacturing sector is undergoing its most consequential transformation in a generation, moving from cost-led production to intelligence-led manufacturing. Agentic AI, advanced robotics, digital twins, and industrial IoT are converging to create factories where machines can plan, coordinate, and execute autonomously. This track brings together senior technology, AI, engineering, and operations leaders from enterprise manufacturing industry sectors , and industrial automation. - From automation to autonomy: intelligent production systems that adapt with less retooling - Physical AI on the factory floor: cloud robotics, software-defined automation and intelligent systems - Predictive maintenance and quality inspection: scaling proven AI use cases beyond pilots - Digital twins as live operational intelligence: optimising energy, output and quality in real time - AI-driven supply chain orchestration: autonomous forecasting, procurement and logistics - PLI-scheme readiness: using AI-driven process control to strengthen manufacturing competitiveness - The workforce shift: managing the human impact as AI takes on repetitive decisions \n Speakers:",

            contentSections: [
              {
                type: "description",
                description: "Manufacturing • Robotics • Industrial AI The Autonomous Factory: Where Agentic AI, Robotics, and Industrial Intelligence Are Rewriting How India Makes Things",
              },
              {
                type: "description",
                description: "The dedicated autonomous industry track, and the most operationally grounded conversation of the day. India’s manufacturing sector is undergoing its most consequential transformation in a generation, moving from cost-led production to intelligence-led manufacturing. Agentic AI, advanced robotics, digital twins, and industrial IoT are converging to create factories where machines can plan, coordinate, and execute autonomously. This track brings together senior technology, AI, engineering, and operations leaders from enterprise manufacturing industry sectors , and industrial automation. - From automation to autonomy: intelligent production systems that adapt with less retooling - Physical AI on the factory floor: cloud robotics, software-defined automation and intelligent systems - Predictive maintenance and quality inspection: scaling proven AI use cases beyond pilots - Digital twins as live operational intelligence: optimising energy, output and quality in real time - AI-driven supply chain orchestration: autonomous forecasting, procurement and logistics - PLI-scheme readiness: using AI-driven process control to strengthen manufacturing competitiveness - The workforce shift: managing the human impact as AI takes on repetitive decisions ",
              },
              {
                type: "description",
                title: "",
                description: "Special Address: - Rajal Bhatt, Director, AI Facility Management, Techseria (10 Mins) - Harsh Vardhan, Global Head, Digital Innovation, Apollo Tyres (10 Mins) ",
              },
              {
                type: "speakers",
                title: "Moderator:",
                speakers: [
                  {
                    name: "Vineet Shukla",
                    role: "",
                    roleLines: ["Founder", "Wayam AI"],
                    image: "https://olive-elk-842602.hostingersite.com/gurugram/speakers/Vineet-Shukla.png",
                  },
                ],
              },
              {
                type: "speakers",
                title: "Panel Speakers:",
                speakers: [
                  {
                    name: "Swastika Johorey",
                    role: "",
                    roleLines: ["CDO", "Varun Beverages"],
                    image: "https://olive-elk-842602.hostingersite.com/gurugram/speakers/Swastika-Johorey.png",
                  },
                  {
                    name: "Sivakumar Selva Ganapathy",
                    role: "",
                    roleLines: ["Country Head, Vice President – India Digital/IT, Board Member", "Johnson Controls GCC"],
                    image: "https://olive-elk-842602.hostingersite.com/gurugram/speakers/Sivakumar-Selva-Ganapathy.png",
                  },
                  {
                    name: "Harsh Vardhan",
                    role: "",
                    roleLines: ["Global Head - Digital Innovation", "Apollo Tyres "],
                    image: "https://olive-elk-842602.hostingersite.com/gurugram/speakers/Harsh-Vardhan.png",
                  },
                  {
                    name: "Rishi Jain",
                    role: "",
                    roleLines: ["Enterprise AI & Digital Transformation Leader", "Adani Group"],
                    image: "https://olive-elk-842602.hostingersite.com/gurugram/speakers/Rishi-Jain.png",
                  },
                ],
              },
            ],
          },
          {
            time: "02:45 PM – 03:45 PM",
            title: "Track 3: Enterprise AI in Action",
            
            contentSections: [
              {
                type: "description",
                description: "Agents • Automation • Enterprise Applications \n Agents in Production: How Enterprise AI Is Rewiring Work, Not Just Augmenting It ",
              },
              {
                type: "description",
                description: "The dedicated enterprise AI in action track, where the theoretical becomes operational. 79% of enterprises say AI agents are already being adopted; 66% report measurable productivity gains. Yet 88% of agent pilots never reach production. This track brings together the enterprise technology, AI, and business leaders who have crossed that gap, deploying agents that are actually shipping work across customer service, finance, procurement, engineering, and internal operations. Practical, in-production, with real ROI data. - Proven ROI zones: customer service, finance, document processing, engineering and internal operations  - Multi-agent orchestration: architecture, memory and hand-offs for production-scale deployments  - The observability mandate: tracing, cost, quality and human feedback across agent workflows  - From workflows to agent-native design: redesigning processes around agent capabilities  - Measuring agentic AI ROI: cycle time, error reduction and workforce leverage  -  Choosing enterprise agent platforms: application-layer and infrastructure-layer approaches  - Governance before scale: agent registries, least privilege access and human-in-the-loop controls ",
              },
              {
                type: "description",
                description: "Special Address by Salesforce (10 Mins) ",
              },
              {
                type: "speakers",
                title: "Special Address Speaker:",
                speakers: [
                  {
                    name: "Priyanka Sehgal",
                    role: "",
                    roleLines: ["Director, Solution Engineering - Manufacturing & Energy", "Salesforce"],
                    image: "https://olive-elk-842602.hostingersite.com/avtar.png",
                  },
                ],
              },
              {
                type: "speakers",
                title: "Moderator:",
                speakers: [
                  {
                    name: "Ashish Rathi Partner",
                    role: "",
                    roleLines: ["AI Architecture and Engineering", "KPMG in India"],
                    image: "https://olive-elk-842602.hostingersite.com/avtar.png",
                  },
                ],
              },
              {
                type: "speakers",
                title: "Panel Speakers:",
                speakers: [
                  {
                    name: "Praful Poddar",
                    role: "",
                    roleLines: ["CPO", "Shiprocket"],
                    image: "https://olive-elk-842602.hostingersite.com/gurugram/speakers/Praful-Poddar.png",
                  },
                  {
                    name: "Saurabh Gugnani",
                    role: "",
                    roleLines: ["Global Head of Cybersecurity Engineering, Architecture and Projects", "TMF Group"],
                    image: "https://olive-elk-842602.hostingersite.com/gurugram/speakers/Saurabh-Gugnani.png",
                  },
                  {
                    name: "Madhav Sharma",
                    role: "",
                    roleLines: ["Head- Tech & Digital Transformation", "Libas"],
                    image: "https://olive-elk-842602.hostingersite.com/gurugram/speakers/Madhav-Sharma.png",
                  },
                  {
                    name: "Priyanka Sehgal",
                    role: "",
                    roleLines: ["Director, Solution Engineering - Manufacturing & Energy", "Salesforce"],
                    image: "https://olive-elk-842602.hostingersite.com/avtar.png",
                  },
                ],
              },
            ],


          },
          {
            time: "03:45 PM – 03:55 PM",
            title: "Transition Break",
            description:
              "Delegates reconvene in main ballroom for afternoon plenary sessions.",
          },
          {
            time: "03:55 PM– 04:10 PM ",
            section: "Plenary Sessions — Second Half",
            title: "Partner Keynote Address",
            contentSections: [
              {
                type: "description",
                description: "Cyber Resilience: The foundation of AI-Powered Business Transformation",
              },
              {
                type: "description",
                description: "Special Address by Cohesity",
              },
            ],
          },
          {
            time: "04:10 PM – 04:55 PM",
            title:"Session 5: Securing the Autonomous Enterprise: When AI Becomes the Attack Surface",

            contentSections: [
              {
                type: "description",
                description: "As AI agents move from assistants to autonomous actors across enterprise workflows, the attack surface expands in ways traditional security architecture was not built to handle. Simultaneously, AI-native security is becoming the only viable defence against AI-powered adversaries. India's most senior CISOs across sectors. - Live AI threats: model poisoning, prompt injection, adversarial inputs, shadow AI and LLM-driven data exfiltration  - Securing the connected factory: protecting OT/IT convergence as AI expands the industrial attack surface  - AI-native threat detection: autonomous incident response at the speed of AI-powered attacks, with human oversight - Zero-trust for AI agents: model access governance and AI-specific audit trails - Preparing for AI compliance: how CISOs are shaping security and compliance investments for the AI era ",
              },
              {
                type: "speakers",
                title: "Moderator:",
                speakers: [
                  {
                    name: "Atishay Jain",
                    role: "",
                    roleLines: ["Partner, Digital Trust", "KPMG in India"],
                    image: "https://olive-elk-842602.hostingersite.com/avtar.png",
                  },
                ],
              },
              {
                type: "speakers",
                title: "Speakers:",
                speakers: [
                  {
                    name: "Adish Jain",
                    role: "",
                    roleLines: ["Chief Information Security Officer", "PB Pay"],
                    image: "https://olive-elk-842602.hostingersite.com/gurugram/speakers/Adish-Jain.png",
                  },
                  {
                    name: "Abhishek Bansal",
                    role: "",
                    roleLines: ["Chief Information Security Officer", "Max Life Insurance"],
                    image: "https://olive-elk-842602.hostingersite.com/gurugram/speakers/Abhishek-Bansal.png",
                  },
                  {
                    name: "Anil K Saraswat",
                    role: "",
                    roleLines: ["GM & Head – Information Security", "Samsung Electronics "],
                    image: "https://olive-elk-842602.hostingersite.com/gurugram/speakers/Anil-K-Saraswat.png",
                  },
                  {
                    name: "Shivkumar Pandey",
                    role: "",
                    roleLines: ["GCISO", "Adani Group "],
                    image: "https://olive-elk-842602.hostingersite.com/gurugram/speakers/Shivkumar-Pandey.png",
                  },
                  {
                    name: "Akash Singh",
                    role: "",
                    roleLines: ["CISO", "JK Cement"],
                    image: "https://olive-elk-842602.hostingersite.com/gurugram/speakers/Akash-Singh.png",
                  },
                ],
              },
            ],
          },
          {
            time: "04:55 PM – 05:40 PM ",
            title:"Session 6: Cross-Industry Power Conversation ",
            contentSections: [
              {
                type: "description",
                description: "From Assistance to Autonomy: What India's Enterprise AI Leaders Are Building Next ",
              },
              {
                type: "description",
                description: "The closing session of the 8th Edition, and the most forward-looking. Leaders from the major enterprise industry sectors in one room for a candid conversation that converges the day's insights into a declaration. - The frontier of enterprise AI in India: sectors and organisations pushing the boundaries - AI ambition vs. architecture: what the gap looks like inside enterprises today - Decisions with hindsight: the one structural AI decision leaders would make differently - Leadership responsibility: shaping how India’s enterprises deploy, govern and trust AI ",
              },
              {
                type: "speakers",
                title: "Moderator:",
                speakers: [
                  {
                    name: "Ayush Gupta",
                    role: "",
                    roleLines: ["Partner, Digital and AI Transformation", "KPMG in India"],
                    image: "https://olive-elk-842602.hostingersite.com/gurugram/speakers/Ayush-Gupta.png",
                  },
                ],
              },
              {
                type: "speakers",
                title: "Speakers:",
                speakers: [
                  {
                    name: "Madhur Bhardwaj",
                    role: "",
                    roleLines: ["Senior Technology Advisor & CTO RAN & Core Technology Strategy", "Nokia"],
                    image: "https://olive-elk-842602.hostingersite.com/gurugram/speakers/Madhur-Bhardwaj.png",
                  },
                  {
                    name: "Deepinder Singh Sethi",
                    role: "",
                    roleLines: ["Global Chief Information Officer", "Escorts Kubota"],
                    image: "https://olive-elk-842602.hostingersite.com/gurugram/speakers/Deepinder-Singh-Sethi.png",
                  },
                  {
                    name: "Himanshu Pant",
                    role: "",
                    roleLines: ["Group Head AI", "RPSG Group"],
                    image: "https://olive-elk-842602.hostingersite.com/gurugram/speakers/Himanshu.png",
                  },
                  {
                    name: "Namrita Mahindro",
                    role: "",
                    roleLines: ["Chief Digital & Information Officer", "Lumax World"],
                    image: "https://olive-elk-842602.hostingersite.com/gurugram/speakers/Namrita-Mahindro.png",
                  },
                ],
              },
            ],
          },
          {
            time: "05:40 PM – 05:55 PM ",
            section: "Close of Day ",
            title: "Closing Address & Vote of Thanks",
            description: "Closing address by The Guild and Guild Live. Acknowledgement of partners, speakers, and delegates. Lucky Draw prize reveal.",
          },
          {
            time: "05:55 PM onwards ",
            title: "Hi-Tea & Networking",
            description: "Open networking. Delegates collect attendee gift on submission of feedback form.",
          },
          {
            time: "Evening — By Invitation Only",
            title: "AI Leadership Exchange | Gala Dinner",
            description: "An exclusive CXO sundowner for a select group of technology leaders. Cocktails, keynote, fireside conversation, and a chef-curated dining experience. \n Brought to you by The Guild & Atlassian",
          },
        ],
      },
      // {
      //   id: "Detailed-Agenda-2",
      //   label: "Detailed Agenda 2",
      //   items: [
      //     {
      //       time: "Time",
      //       title: "Soon",
      //     },
      //   ],
      // },
    ],
  },
  // {
  //   id: "day2",
  //   label: "Day 2",
  //   tracks: [
  //     {
  //       id: "day2-track",
  //       label: "Main Stage",
  //       items: [
  //         {
  //           time: "10:00 AM - 10:15 AM",
  //           title: "Day 2 Welcome",
  //         },
  //       ],
  //     },
  //   ],
  // },
];

// ---------- Component ----------
const AgendaSection = () => {
  const [activeDayId, setActiveDayId] = useState(AGENDA_DATA[0].id);
  const activeDay =
    AGENDA_DATA.find((d) => d.id === activeDayId) ?? AGENDA_DATA[0];

  const [activeTrackId, setActiveTrackId] = useState(activeDay.tracks[0].id);
  const activeTrack =
    activeDay.tracks.find((t) => t.id === activeTrackId) ?? activeDay.tracks[0];
  const handleDayChange = (dayId: string) => {
    setActiveDayId(dayId);
    const newDay = AGENDA_DATA.find((d) => d.id === dayId);
    if (newDay) setActiveTrackId(newDay.tracks[0].id);
  };

  return (
    <section className="bg-black zindex2 py-20 px-6">
      <div className="max-w-[1080px] mx-auto">
        {/* Heading */}
        <h2 className="mt-10 text-center text-4xl font-black uppercase tracking-tight sm:text-5xl md:text-6xl">
          <span className="agendatitle">Agenda</span>
        </h2>

        {/* Day tabs */}
        {/* <div className="mt-10 flex justify-center gap-10">
          {AGENDA_DATA.map((day) => (
            <button
              key={day.id}
              onClick={() => handleDayChange(day.id)}
              className={`pb-2 text-lg font-semibold transition-colors border-b-2 ${
                activeDayId === day.id
                  ? "text-fuchsia-500 border-fuchsia-500"
                  : "text-white/30 border-transparent hover:text-white/50"
              }`}
            >
              {day.label}
            </button>
          ))}
        </div> */}

        {/* Track pills */}
        <div className="mt-10 flex justify-center">
          <div className="flex max-w-full overflow-x-auto rounded-full bg-white/10 p-1">
            {activeDay.tracks.map((track) => (
              <button
                key={track.id}
                onClick={() => setActiveTrackId(track.id)}
                className={`whitespace-nowrap rounded-full px-4 py-3 text-sm font-semibold transition-colors sm:px-6 ${
                  activeTrackId === track.id
                    ? "bg-color text-white"
                    : "text-white/60 hover:text-white/80"
                }`}
              >
                {track.label}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-14">
          {getAgendaGroups(activeTrack.items).map((group, idx) => (
            <div key={idx}>
              {group.items[0].section && (
                <div className="border-y border-white/15 bg-white/15 px-3 py-2 text-sm font-bold text-white sm:px-5 md:px-8 md:text-base">
                  {group.items[0].section}
                </div>
              )}
              <div className="grid min-w-0 grid-cols-[78px_minmax(0,1fr)] gap-x-3 border-t border-white/15 py-8 first:border-t-0 sm:gap-x-6 md:grid-cols-[auto_minmax(0,1fr)] md:gap-x-10">
                {/* Time column */}
                <div className="w-[78px] pt-1 text-sm font-semibold text-white sm:w-[110px] md:w-[190px] md:text-base">
                  {group.time}
                </div>

                {/* Content column */}
                <div className="min-w-0 border-l-2 border-fuchsia-600 pl-3 sm:pl-5 md:pl-8">
                  <div className="space-y-8">
                    {group.items.map((item, itemIdx) => (
                      <div
                        key={itemIdx}
                        className={`min-w-0 ${
                          item.isTrack
                            ? "rounded-lg border border-fuchsia-500/30 bg-fuchsia-500/5 p-4"
                            : ""
                        }`}
                      >
                        <h3 className="break-words text-base font-bold text-white md:text-lg">
                          {item.title}
                        </h3>

                        {item.contentSections ? (
                          <div className="space-y-5">
                            {item.contentSections.map((content, contentIdx) =>
                              content.type === "description" ? (
                                <AgendaDescription
                                  key={contentIdx}
                                  title={content.title}
                                  description={content.description}
                                />
                              ) : (
                                <AgendaSpeakers
                                  key={contentIdx}
                                  title={content.title}
                                  speakers={content.speakers}
                                />
                              ),
                            )}
                          </div>
                        ) : (
                          <>
                            {item.description && (
                              <AgendaDescription
                                description={item.description}
                              />
                            )}
                            {item.descriptionTwo && (
                              <AgendaDescription
                                description={item.descriptionTwo}
                              />
                            )}
                            {item.speakers && item.speakers.length > 0 && (
                              <AgendaSpeakers
                                title={item.speakerTitle}
                                speakers={item.speakers}
                              />
                            )}
                            {item.speakerSections?.map(
                              (speakerSection, sectionIdx) => (
                                <AgendaSpeakers
                                  key={sectionIdx}
                                  title={speakerSection.title}
                                  speakers={speakerSection.speakers}
                                />
                              ),
                            )}
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgendaSection;
