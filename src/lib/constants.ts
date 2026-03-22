// ============================================
// Ryan Sim — Financial Advisor Website
// All customizable content lives here.
// Update text, links, and stats in one place.
// ============================================

export const SITE = {
  name: "Ryan Sim",
  title: "Ryan Sim | Financial Advisor · Singapore",
  description:
    "Helping you build wealth with clarity and confidence. Schedule a conversation with Ryan Sim today.",
  url: "https://ryansim.com",
} as const;

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export const HERO = {
  headline: "Helping You Build Wealth With Clarity & Confidence",
  subtitle: "Financial Advisor · Singapore",
  primaryCta: { label: "Schedule a Conversation", href: "#contact" },
  secondaryCta: { label: "Learn More", href: "#about" },
} as const;

export const ABOUT = {
  heading: "About Ryan",
  paragraphs: [
    "I'm Ryan — a financial advisor based in Singapore with a genuine passion for helping people gain clarity over their finances. I didn't get into this industry to push products or chase sales targets. I got into it because I believe everyone deserves a clear, honest plan for their financial future.",
    "My approach is simple: listen first, advise second. Before I recommend anything, I take the time to understand your unique situation — your goals, your concerns, your life stage. Whether you're a young professional just starting out or a family planning for the next generation, I meet you where you are.",
    "I believe the best financial relationships are built on trust, transparency, and a long-term perspective. No jargon, no pressure — just straightforward guidance to help you make confident decisions about your money and your future.",
  ],
  highlightStat: {
    value: "100+",
    label: "families guided toward financial freedom",
  },
} as const;

export const CONTACT = {
  heading: "Let's Start a Conversation",
  subtext:
    "Whether you're just starting your financial journey or looking to optimise your existing plans, I'd love to hear from you.",
  methods: [
    {
      platform: "Telegram",
      label: "Message on Telegram",
      href: "https://t.me/ryansim",
      icon: "telegram",
    },
    {
      platform: "WhatsApp",
      label: "WhatsApp Me",
      href: "https://wa.me/6591234567",
      icon: "whatsapp",
    },
  ],
  note: "All conversations are confidential. No obligations.",
} as const;

export const FOOTER = {
  copyright: `© ${new Date().getFullYear()} Ryan Sim. All rights reserved.`,
  disclaimer:
    "Ryan Sim is an authorised representative of [Company Name]. This website is not an official company website.",
  socials: [
    { label: "LinkedIn", href: "#", icon: "linkedin" },
    { label: "Telegram", href: "#", icon: "telegram" },
    { label: "Instagram", href: "#", icon: "instagram" },
  ],
} as const;
