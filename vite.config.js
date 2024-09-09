import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

const dirname = path.resolve();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // 절대 경로 설정
      "@": path.resolve(dirname, "src"),
      "@components": path.resolve(dirname, "src/components"),
      "@pages": path.resolve(dirname, "src/pages"),
    },
  },
});
