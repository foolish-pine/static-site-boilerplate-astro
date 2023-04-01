// https://astro.build/config
import image from "@astrojs/image";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import compress from "astro-compress";
import purgecss from "astro-purgecss";
import robotsTxt from "astro-robots-txt";

export default defineConfig({
  // TODO: 公開URLに変更する
  site: "https://www.my-site.dev",
  base: "/",
  server: {
    host: true,
  },
  integrations: [
    sitemap(),
    purgecss(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    compress({
      css: false, // CSSをastro-compressで圧縮するとメディアクエリの記述順がおかしくなる
    }),
    robotsTxt(),
  ],
});
