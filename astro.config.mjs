import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import { astroImageTools } from "astro-imagetools";
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
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "src/styles/global" as *;`,
        },
      },
    },
  },
  integrations: [astroImageTools, sitemap(), robotsTxt()],
});
