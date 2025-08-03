// @ts-check
import { defineConfig } from "astro/config";
import starlight from '@astrojs/starlight';
import cloudflare from "@astrojs/cloudflare";
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: "https://tylerstaut.com",
  integrations: [
    tailwind(),
    starlight({
      title: 'Tyler Staut',
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/Tyler-Staut' },
      ],
      sidebar: [
        {
          label: 'Docs',
          autogenerate: { directory: 'docs' },
        },
        {
          label: 'Blog',
          autogenerate: { directory: 'blog' },
        },
      ],
    }),
  ],
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
});

