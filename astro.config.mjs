import image from "@astrojs/image";
import prefetch from "@astrojs/prefetch";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import compress from "astro-compress";
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: "https://www.my-site.dev", // set your site URL.
  base: "/",
  server: {
    host: true,
    open: true,
  },
  build: {
    inlineStylesheets: "auto",
  },
  integrations: [
    sitemap(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    robotsTxt(),
    prefetch(),
    compress({
      img: false,
    }),
  ],
});
