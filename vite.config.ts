import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import version from "vite-plugin-package-version";

// https://vitejs.dev/config/
export default defineConfig({
  base: '/manhh.github.io/',
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // manualChunks(id) {
        //   if (id.includes("node_modules")) {
        //     return id
        //       .toString()
        //       .split("node_modules/")[1]
        //       .split("/")[0]
        //       .toString();
        //   }
        // },
        manualChunks: {
          // Specify manual chunk names and modules
          react: ["react", "react-dom"],
          lottie: ["react-lottie"],
        },
      },
    },
  },
});

