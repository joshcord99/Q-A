import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    port: 5173,
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },

  e2e: {
    baseUrl: "http://localhost:3001",
    setupNodeEvents(on: any, config: any) {
      // implement node event listeners here
    },
  },
});
