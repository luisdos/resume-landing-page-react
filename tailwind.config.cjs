// tailwind.config.cjs
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  safelist: [
    // Necesario si usas la clase arbitraria del gradiente en JSX
    'dark:[background:radial-gradient(1200px_600px_at_80%_-10%,rgba(124,156,255,.15),transparent_60%),_radial-gradient(1000px_600px_at_-10%_20%,rgba(109,240,194,.10),transparent_60%),_#0b0f17]'
  ],
  theme: { extend: {} },
  plugins: [],
}