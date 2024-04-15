import { resolve } from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";
import removeConsole from "vite-plugin-remove-console";

import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/

export default defineConfig({
  //plugins: [react(), removeConsole()],

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
      //      input: {
      //        main: resolve(__dirname, 'index.html'),
      //        about: resolve(__dirname, 'about', 'index.html'),
      //      },
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
      name: "GsUI",
      fileName: "gsui",
    },
  },

  preview: {
    host: "localhost",
  },
});
