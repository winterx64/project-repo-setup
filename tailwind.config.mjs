/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				neon: "#00f7ff",
				neon2: "#a855f7",
			},
			fontFamily: {
				monoHead: ["Share Tech Mono", "ui-monospace", "SFMono-Regular"],
				body: ["Inter", "sans-serif"],
			},
		},
	},
	plugins: [],
}
