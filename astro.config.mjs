import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: "https://www.my-site.dev", // set your site URL.
  base: "/",
  prefetch: {
    prefetchAll: true,
  },
  server: {
    host: true,
    open: true,
  },
  integrations: [sitemap(), robotsTxt()],
});
