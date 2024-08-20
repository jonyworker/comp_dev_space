import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';
import svgLoader from 'vite-svg-loader'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),svgLoader()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // 使用 path.resolve 创建绝对路径
    },
  },
})
