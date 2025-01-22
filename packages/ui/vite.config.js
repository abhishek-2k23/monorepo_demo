import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'happy-dom',
    coverage: {
      reporter: ['text', 'html'],
      include: ['src/**/*.{jsx,js,ts,vue}'],
    },
    setupFiles: './setupTest.js',
  },
});
