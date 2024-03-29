/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./plugins/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		extend: {
			fontFamily: {
				display: ['var(--font-libre-franklin)', 'system-ui', 'sans-serif'],
				default: ['var(--font-libre-franklin)', 'system-ui', 'sans-serif']
			},
      colors: {
        white: {
          DEFAULT: '#f1f1f1',
          100: '#ffffff',
        },
        isi: {
          DEFAULT: '#B07C83',
          dark: '#86656a',
          light: '#C6969C'
        },
        black: {
          DEFAULT: '#292727',
          50: "#414141"
        }
      },
		},
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
	},
	plugins: []
};
