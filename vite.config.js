import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  root: "src/",
  publicDir: "../public/",
  base: "./",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    sourcemap: true,
    assetsInlineLimit: 0,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
      },
    },
  },
  server: {
    host: true,
  },
});
