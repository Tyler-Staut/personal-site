// @ts-check
import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://tylerstaut.com",
  integrations: [icon()],
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
});