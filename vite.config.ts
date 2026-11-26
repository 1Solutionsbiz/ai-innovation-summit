import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Keep all CSS in one file, as before code splitting. Some page
    // stylesheets (mystyle.css, aboutfaq.css) currently apply site-wide,
    // so splitting CSS per page could change how pages look.
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        // Core libraries rarely change, so give them their own file whose
        // name stays the same across deploys (stays in the browser cache).
        manualChunks(id) {
          if (!id.includes("node_modules")) return;
          if (/[\\/]node_modules[\\/](react|react-dom|scheduler|react-router|react-router-dom|@remix-run)[\\/]/.test(id)) return "vendor-react";
          if (/[\\/]node_modules[\\/]gsap[\\/]/.test(id)) return "vendor-gsap";
        },
      },
    },
  },
}));
