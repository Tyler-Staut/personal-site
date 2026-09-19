export interface NavLink {
  href: string;
  label: string;
}

export interface HeroContent {
  eyebrow: string;
  paragraph: string;
  primaryCta: NavLink;
  secondaryCta: NavLink;
  utilityLabel: string;
}

export interface MissionCardProps {
  description: string;
  href: string;
  icon: "satellite" | "rocket" | "star";
  status: string;
  statusTone: "green" | "blue" | "gold";
  title: string;
}

export interface StatBlockProps {
  label: string;
  value: string;
}

export interface DiscoveryContent {
  archiveHref: string;
  archiveLabel: string;
  body: string;
  cta: NavLink;
  image: string;
  label: string;
  rangeEnd: string;
  rangeStart: string;
  title: string;
}

export interface FooterMeta {
  description: string;
  title: string;
}

export const siteNav: NavLink[] = [
  { label: "Projects", href: "/projects/" },
  { label: "Grounds Control", href: "/coffee/" },
  { label: "About", href: "/about/" },
];

export const heroLeftNav: NavLink[] = [
  { label: "Projects", href: "/projects/" },
];

export const heroRightNav: NavLink[] = [
  { label: "Grounds Control", href: "/coffee/" },
  { label: "About", href: "/about/" },
];

export const mobileNav: NavLink[] = [
  ...heroLeftNav,
  ...heroRightNav,
];

export const heroContent: HeroContent = {
  eyebrow: "THE BOUNDARY IS",
  paragraph:
    "AI & ML Expert, Security Engineer, and Professional Production Disruptor. I navigate the intersection of infrastructure, software, and security by pushing systems to their limits.",
  primaryCta: {
    href: "/projects/",
    label: "Explore Projects",
  },
  secondaryCta: {
    href: "/about/",
    label: "About Me",
  },
  utilityLabel: "",
};

export const stats: StatBlockProps[] = [
  { value: `${new Date().getFullYear() - 2019}+`, label: "Years in Security" },
  { value: "25+", label: "Projects Built" },
  { value: "15+", label: "CTF Competitions" },
  { value: "Yes", label: "Cups of Coffee" },
];

export const footerMeta: FooterMeta = {
  title: "Tyler Staut",
  description:
    "Security Engineer focused on application and infrastructure security, machine learning and AI, and building resilient systems.",
};

export const footerDirectory: NavLink[] = [...siteNav];

export const footerPolicies: string[] = ["Privacy", "Terms"];
