import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

const __dirname = path.resolve();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // 절대 경로 설정
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@pages': path.resolve(__dirname, 'src/pages'),
    }
  }
})
