// https://astro.build/config
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import compress from "astro-compress";
import purgecss from "astro-purgecss";

export default defineConfig({
  // Your final, deployed URL
  site: "https://www.my-site.dev",
  // The base path to deploy to
  base: "/",
  server: {
    host: true,
  },
  integrations: [sitemap(), purgecss(), compress()],
});
