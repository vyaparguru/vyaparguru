module.exports = {
    darkMode: ['class'],
    content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
  	extend: {
  		colors: {
  			primary: '#0D47A1',
  			secondary: '#FF5722',
  			blue: {
  				'600': '#3b82f6',
  				'700': '#2563eb',
  				'900': '#1e3a8a'
  			},
  			green: {
  				'500': '#10b981'
  			},
  			yellow: {
  				'500': '#f59e0b'
  			},
  			red: {
  				'500': '#ef4444'
  			}
  		},
  		fontFamily: {
  			sans: ['Inter', 'sans-serif'],
  			heading: ['Roboto', 'sans-serif']
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
