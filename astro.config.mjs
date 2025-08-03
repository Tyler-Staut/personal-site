// @ts-check
import { defineConfig } from "astro/config";
import starlight from '@astrojs/starlight';
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://tylerstaut.com",
  integrations: [
    starlight({
      title: 'Tyler Staut',
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/Tyler-Staut' },
      ],
      sidebar: [
        {
          label: 'Notes',
          autogenerate: { directory: 'notes' },
        },
        {
          label: 'Cloud',
          autogenerate: { directory: 'cloud' },
        },
        {
          label: 'Tools',
          autogenerate: { directory: 'tools' },
        },
        {
          label: 'Pentesting',
          autogenerate: { directory: 'pentesting' },
        },
        {
          label: 'LeetCode',
          autogenerate: { directory: 'leetcode' },
        },
        {
          label: 'CTF',
          autogenerate: { directory: 'ctf' },
        },
      ],
    }),
  ],
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
  vite: {
    ssr: {
      noExternal: ['free-astro-components'],
    },
  },
});

