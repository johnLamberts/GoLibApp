import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
// import dts from "vite-plugin-dts";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },

    // alias: [
    //   {
    //     find: "@",
    //     replacement: path.resolve(__dirname, "./src"),
    //   },
    //   {
    //     find: "@/components",
    //     replacement: path.resolve(__dirname, "./src/components"),
    //   },
    //   {
    //     find: "@/lib",
    //     replacement: path.resolve(__dirname, "./src/lib"),
    //   },
    // ],
  },
});
