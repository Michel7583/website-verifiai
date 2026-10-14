/** Company name and brand copy. Change `name` / `legalName` to replace the company name site-wide. */
export const site = {
  name: "VeriFi AI",
  legalName: "VeriFi AI",
  tagline: "AI × Blockchain × Fintech",
  headline: "Engineering the Future of Finance and Intelligent Software",
  heroSupport:
    "We build production-ready software at the intersection of AI, blockchain, and fintech.",
  description:
    "VeriFi AI builds intelligent financial products and scalable software using AI, blockchain, Web3, and modern fintech technologies.",
  positioning:
    "We build intelligent financial products and next-generation software powered by AI, blockchain, and modern financial infrastructure.",
  mission:
    "To design and build production-ready software at the intersection of AI, blockchain, and financial infrastructure—so ambitious companies can turn complex ideas into systems that ship, operate, and scale.",
  vision:
    "A financial software landscape where intelligence is infrastructure: reliable, transparent, and accountable. The next generation of money products should be engineered with the same rigor as the institutions that depend on them.",
  copyrightFrom: 2022,
  copyrightYear: 2026,
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://verifi-ai.dev",
  email: "hiring@verifi-ai.dev",
  responseTime: "We typically respond within 1 business day.",
  location: {
    title: "International",
    lines: ["Remote-first studio", "Europe · Asia · Americas"],
  },
  logo: "/icon.svg",
  social: {
    telegram: "https://t.me/VeriFiAI_Official",
  },
} as const;

export type SiteConfig = typeof site;
