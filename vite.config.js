import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Deployed at the root of rolljee.github.io (user page).
  base: "/",
  build: {
    // Keep the historical output folder so the deploy workflow stays unchanged.
    outDir: "build",
  },
});
