import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [react(), dts({ include: ['src'] })],
  css: {
    postcss: './postcss.config.js',
  },

  optimizeDeps: {
    include: ['@heroicons/react'],
  },

  build: {
    outDir: 'dist',
    sourcemap: true,
    minify: 'esbuild',
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        'postcss',
        'tailwindcss',
        'tailwindcss-animate',
      ],
      output: {
        globals: {
          react: 'React',
        },
      },
    },
    lib: {
      entry: resolve(__dirname, 'src', 'index.tsx'),
      name: 'gss-ui',
      fileName: 'gss-ui',
    },
  },
})
