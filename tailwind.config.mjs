/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	daisyui: {
    themes: [
      {
        mmaTheme: {
			"grn": "#1DCD8D",
			"lgrn": "#DEF1EB",
			"dgrn": "#19A28D",
			"neutral": "#F8F6F1",
			"dgray": "#545454",
			"ylw": "#FFC610",
			"orng": "#FFA044",
			"lblu": "#86C2F8",
			"lred": "#D8EBE5",
          },
        },
      ],
    },
	plugins: [
		require('daisyui'),
	],
}
