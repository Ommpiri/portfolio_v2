import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

const cleanUrlPlugin = () => ({
  name: "clean-urls",
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      if (req.url === "/2026" || req.url === "/2026/") {
        req.url = "/2026.html";
      }
      next();
    });
  },
});

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), cleanUrlPlugin()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        spatial: resolve(__dirname, "2026.html"),
      },
    },
  },
});
