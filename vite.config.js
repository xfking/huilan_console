import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: "./",
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src")
      }
    },
    server: {
      host: "0.0.0.0",
      open: true,
      proxy: {
        "/api": {
          target: "https://api.shsn.top",
          secure: false,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        }
      }
    },
})
