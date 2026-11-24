import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

interface SEOData {
  title: string;
  description: string;
  focusKeyphrase: string;
}

const seoData: Record<string, SEOData> = {
  "/": {
    title: "AI Innovation Summit 2026 | Enterprise AI Conference India",
    description:
      "Discover the AI Innovation Summit, bringing together business leaders, technology experts and industry professionals to explore AI, innovation and digital transformation.",
    focusKeyphrase: "AI Innovation Summit",
  },

  "/delhi-gurugram_edition-26-agenda": {
    title: "AI Summit Delhi NCR Gurugram 2026 | Agenda and Speakers",
    description:
      "Join the AI Innovation Summit 2026 at The Leela Ambience Gurugram, Delhi-NCR on 2 December. Connect with enterprise leaders and explore AI, GenAI and business transformation.",
    focusKeyphrase: "AI Summit in Delhi NCR Gurugram 2026",
  },

  "/previous/bangalore-2026": {
    title: "AI Summit in Bengaluru 2026 | AI Conference Highlights",
    description:
      "Explore the AI Innovation Summit 2026 in Bengaluru, featuring enterprise AI discussions, industry leaders, expert sessions and insights on AI-driven business transformation.",
    focusKeyphrase: "AI Conference Bengaluru 2026",
  },

  "/previous/delhi-2026": {
    title: "AI Business Conference in Delhi 2026 | Edition Highlights",
    description:
      "Explore the AI Conference Summit 2026 in Delhi. Discover enterprise AI sessions, industry leaders, key discussions and highlights from the Delhi edition.",
    focusKeyphrase: "Enterprise AI Conference Delhi",
  },

  "/previous/bangalore-2025": {
    title: "AI Business Event in Bengaluru 2025 | Event Highlights",
    description:
      "Relive the AI Event 2025 in Bengaluru. Explore key sessions, industry insights, speakers and discussions on enterprise AI and digital transformation.",
    focusKeyphrase: "AI Business Event Bengaluru 2025",
  },

  "/previous/mumbai-2025": {
    title: "Artificial Intelligence Innovation Summit Mumbai Edition 2025",
    description:
      "Explore conference highlights from the AI Innovation Summit in Mumbai 2025, featuring enterprise AI discussions, industry leaders, key sessions and networking opportunities.",
    focusKeyphrase: "Artificial Intelligence Summit in Mumbai 2025",
  },

  "/previous/mumbai-2024": {
    title: "Cloud and AI Innovation Summit Mumbai 2024",
    description:
      "Explore the Cloud + AI Innovation Summit 2024 in Mumbai. Discover the event recap, key discussions, industry insights and highlights from the enterprise technology event.",
    focusKeyphrase: "Cloud AI Summit Mumbai",
  },

  "/previous/bangalore-2024": {
    title: "AI Conference Summit Bengaluru 2024 | Business Event",
    description:
      "Explore the Cloud AI Business Summit 2024 in Bengaluru. Discover industry discussions, technology leaders and key insights from the previous edition.",
    focusKeyphrase: "AI Conference Summit Bengaluru 2024",
  },

  "/previous/delhi-ncr-2024": {
    title: "AI Summit in Delhi NCR | Artificial Intelligence Innovation Summit",
    description:
      "Discover the Artificial Intelligence Innovation Summit in Delhi-NCR in 2024. Explore enterprise technology discussions, industry leaders and highlights from the event.",
    focusKeyphrase: "AI Events in Delhi NCR",
  },

  "/watch-On-Demand-videos": {
    title: "AI Conference Summit Videos | Watch On Demand Sessions",
    description:
      "Watch on-demand videos from the AI Innovation Summit featuring expert insights, enterprise AI discussions, Generative AI, business transformation and industry trends.",
    focusKeyphrase: "AI Innovation Summit Videos",
  },

  "/about-us": {
    title: "AI Conference Summit About Us",
    description:
      "",
    focusKeyphrase: "AI Innovation Summit Videos",
  },

  "/faq": {
    title: "AI Conference Summit FAQs",
    description:
      "",
    focusKeyphrase: "AI Innovation Summit Videos",
  },
};

const SEO = () => {
  const location = useLocation();

  // Remove trailing slash, except for homepage
  const pathname =
    location.pathname === "/"
      ? "/"
      : location.pathname.replace(/\/+$/, "");

  const pageSEO = seoData[pathname];

  // Unknown routes ke liye incorrect metadata set nahi karenge
  if (!pageSEO) {
    return null;
  }

  const canonicalURL = `https://www.aiinnovationsummit.in${pathname}`;

  return (
    <Helmet prioritizeSeoTags>
      <title>{pageSEO.title}</title>

      <meta
        name="description"
        content={pageSEO.description}
      />

      <meta
        name="focus-keyphrase"
        content={pageSEO.focusKeyphrase}
      />

      <link rel="canonical" href={canonicalURL} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalURL} />
      <meta property="og:title" content={pageSEO.title} />
      <meta
        property="og:description"
        content={pageSEO.description}
      />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageSEO.title} />
      <meta
        name="twitter:description"
        content={pageSEO.description}
      />
    </Helmet>
  );
};

export default SEO;