import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'node:path'
import svgLoader from 'vite-svg-loader'

// 解析 __dirname
const __dirname = path.resolve();

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		svgLoader({
			defaultImport: "component" // 確保 SVG 被當作 Vue 元件使用
		})
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
	build: {
		lib: {
			entry: path.resolve(__dirname, "src/index.ts"), // 入口文件
			name: "index", // UMD 格式需要一個全局名稱
			formats: ["es", "cjs", "umd"], // 記得加上 "cjs"，讓它可以正確輸出
			fileName: (format: string) => `index.${format}.js`,
		},
		rollupOptions: {
			// external 確保 Vue 不會被打包進去
			external: ["vue"],
			output: {
				globals: {
					vue: "Vue",
				},
				name: "index", // 這是 UMD 格式必要的
			},
		},
	},
})
