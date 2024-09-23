import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // 절대 경로 설정
      '@': path.resolve(__dirname, 'src'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@common': path.resolve(__dirname, 'src/components/common'),
      '@detail': path.resolve(__dirname, 'src/components/detail'),
      '@home': path.resolve(__dirname, 'src/components/home')
    }
  },
  server: {
    // Proxy 설정
    proxy: {
      // 경로가 "/api" 로 시작하는 요청을 대상으로 proxy 설정
      '/api': {
        // 요청 전달 대상 서버 주소 설정
        target: 'http://211.237.50.150:7080',
        // 요청 헤더 host 필드 값을 대상 서버의 호스트 이름으로  변경
        changeOrigin: true,
        // 요청 경로에서 '/api' 제거
        rewrite: proxyPath => proxyPath.replace(/^\/api/, ''),
        // SSL 인증서 검증 무시
        secure: false,
        // WebSocket 프로토콜 사용
        ws: true
      }
    }
  }
});
