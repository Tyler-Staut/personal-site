export type Social = {
  label: string;
  url: string;
  icon?: string;
};

export const site = {
  name: "Tyler Staut",
  role: "Security Engineer",
  tagline: "Boldly going where no hacker has gone before",
  description: "Boldly going where no hacker has gone before",
  location: "Earth, Remote",
  avatarUrl: "/assets/tyler.png", 
  bskyHandle: "tylerstaut.com",
  blueskyProfileUrl: "https://bsky.app/profile/tylerstaut.com",
  socials: [
    { label: "GitHub", url: "https://github.com/Tyler-Staut", icon: "simple-icons:github" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/tyler-staut/", icon: "simple-icons:linkedin" },
    { label: "Bluesky", url: "https://bsky.app/profile/tylerstaut.com", icon: "simple-icons:bluesky" },
  ] as Social[],
  githubRepo: "https://github.com/Tyler-Staut/personal-site",
  footerText: "Built by Tyler Staut with ❤️ using Astro, TypeScript, and Cloudflare Workers.",
  links: [],
  ogImage: "/assets/fujisan.jpg",
} as const;
