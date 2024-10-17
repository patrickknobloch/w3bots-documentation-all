module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Hier werden alle JS/TS-Dateien im src-Ordner berücksichtigt
    './docs/**/*.mdx',             // Tailwind auch für MDX-Dateien in den Docs anwenden
    './src/pages/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
