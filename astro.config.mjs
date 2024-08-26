import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://joyful-mooncake-5f038f.netlify.app/",
  integrations: [preact()]
});