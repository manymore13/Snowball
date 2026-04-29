import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://snowball.value888.site",
  integrations: [tailwind()],
});
