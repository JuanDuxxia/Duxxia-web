/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'duxxia-blue': '#0066FF',
				'duxxia-purple': '#7A3CFF',
				'duxxia-midnight': '#0A1020',
				'duxxia-graphite': '#121826',
				'duxxia-silver': '#C7CEDA',
				'duxxia-light': '#F5F7FA',
				'duxxia-cyan': '#00D4FF',
				'duxxia-magenta': '#FF3CF6',
				'duxxia-green': '#00F49A',
				'duxxia-orange': '#FF8A00',
			},
			fontFamily: {
				'space': ['"Space Grotesk"', 'sans-serif'],
				'inter': ['"Inter"', 'sans-serif'],
			}
		},
	},
	plugins: [],
}