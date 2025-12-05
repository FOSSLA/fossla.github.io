import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import astroIcon from "astro-icon";

export default defineConfig({
  site: "https://fossla.org",
  srcDir: "src",
  integrations: [tailwind({ applyBaseStyles: false }), astroIcon()],
  aliases: {
    "@": "./src"
  }
});
