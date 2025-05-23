// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      backgroundImage: {
        'gamein': 'linear-gradient(180.22deg, #6C12E5 0.19%, #EC5ABA 59.3%)',
      },
      fontFamily: {
        futura: ['Futura', 'Arial', 'sans-serif'],
      },
      fontSize: {
        'custom-heading': ['48px', { lineHeight: '1.88' }],
      },
      fontWeight: { // ⚠️ PAS OBLIGATOIRE Ici, tu peux utiliser font-bold ou font-medium natifs
        futuraMedium: '500',
        futuraBold: '700',
      },
    },
  },
  // ... autres options éventuelles
}
