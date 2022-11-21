import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://wallet-new.polygon.technology/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
