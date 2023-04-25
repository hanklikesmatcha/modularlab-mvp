module.exports = {
	plugins: [require('daisyui')],
	daisyui: {
		styled: true,
		themes: ['cmyk', 'dark'],
		base: true,
		utils: true,
		logs: true,
		rtl: false,
		prefix: '',
		darkTheme: 'dark'
	},
	content: [
		'./src/routes/**/*.{html,svelte,js,ts}',
		'./src/routes/*.{html,svelte,js,ts}',
		'./src/lib/components/**/*.{html,svelte,js,ts}'
	]
};
