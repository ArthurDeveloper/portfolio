/** @type {import('tailwindcss').Config} */
module.exports = {
	purge: true,
  	content: [
		'./src/**/*.{js,jsx,ts,tsx}'
  	],
  	theme: {	
		extend: {
			keyframes: {
				'topbar-show-up': {
					from: { transform: 'translateY(-200%)' },
					to: { transform: 'translateY(0)' }
				},
				'text-color-change': {
					from: { color: '#fff' },
					to: { color: '#00FF82' },
				},
				'text-wiggle': {
					'0%': { transform: 'scaleY(1)' },
					'55%': { transform: 'scaleY(2)' },
					'70%': { transform: 'scaleY(1.4)' },
					'100%': { transform: 'scaleY(1)' },
				},
				'fade-in-up': {
					from: { opacity: 0, transform: 'translateY(1.5rem)' },
					to: { opacity: 1, transform: 'translateY(0)' },
				},
			},
			animation: {
				'topbar-show-up': 'topbar-show-up 1.3s ease-in-out',

				'text-color-change-slow': 'text-color-change 3s cubic-bezier(0,.06,.28,1.61)',
				'text-color-change-mid': 'text-color-change 1.5s cubic-bezier(0,.06,.28,1.61)',
				'text-color-change-fast': 'text-color-change 750ms cubic-bezier(0,.06,.28,1.61)',

				'text-wiggle-slow': 'text-wiggle 1.2s cubic-bezier(0,.06,.28,1.81)',
				'text-wiggle-mid': 'text-wiggle 800ms cubic-bezier(0,.06,.28,1.81)',
				'text-wiggle-fast': 'text-wiggle 600ms cubic-bezier(0,.06,.28,1.81)',
				
				'fade-in-up': 'fade-in-up 750ms cubic-bezier(.21,.56,.57,1.12)',
			}
		},
		colors: {
			'green': '#00FF82',	
		}
	},
  	plugins: [],
}
