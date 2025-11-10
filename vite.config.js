import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
	plugins: [react()],
	build: {
		outDir: "build", // CRA's default build output
	},
	server: {
		host: true,
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		}
	}
});
