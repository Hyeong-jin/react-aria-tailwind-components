import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  css: {
    postcss: "./postcss.config.js",
  },

  optimizeDeps: {
    include: ["@heroicons/react"],
  },

  build: {
    outDir: "dist",
    sourcemap: true,
    minify: "esbuild",
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "postcss",
        "tailwindcss",
        "tailwindcss-animate",
      ],
      output: {
        globals: {
          react: "React",
        },
      },
    },
    lib: {
      entry: resolve(__dirname, "src", "index.tsx"),
      name: "GSUI",
      fileName: "gsui",
    },
  },
});
