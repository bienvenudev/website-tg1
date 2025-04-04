import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        imprint: resolve(__dirname, "imprint.html"),
        privacy: resolve(__dirname, "privacy.html"),
      },
    },
  },
});
