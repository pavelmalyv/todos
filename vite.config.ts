import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import checker from 'vite-plugin-checker';

// https://vite.dev/config/
export default defineConfig({
	base: '/todos/',
	resolve: {
		alias: {
			'@': '/src',
			'@components': '/src/components',
		},
	},
	plugins: [
		react(),
		checker({
			typescript: true,
			eslint: {
				lintCommand: 'eslint "./src/**/*.{ts,tsx}"',
				useFlatConfig: true,
			},
		}),
	],
});
