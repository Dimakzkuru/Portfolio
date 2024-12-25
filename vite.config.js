import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  root: "./",
  base: "/",
  plugins: [react()],
  resolve: {
    alias: {
      "@components": "/src/components", // Alias for "src" directory
    },
  },
});
