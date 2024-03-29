/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}", "./src/components/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			typography: (theme) => ({
				DEFAULT: {
					css: {
						color: theme("colors.gray.100"),
						h1: {
							color: theme("colors.gray.100"),
						},
						h2: {
							color: theme("colors.gray.100"),
						},
						h3: {
							color: theme("colors.gray.100"),
						},
						strong: {
							color: theme("colors.gray.100"),
							fontWeight: theme("fontWeight.bold"),
						},
						code: {
							color: theme("colors.green.500"),
						},
						a: {
							color: theme("colors.green.500"),
							"&:hover": {
								color: theme("colors.green.600"),
							},
						},
					},
				},
			}),
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
