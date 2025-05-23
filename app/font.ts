// app/font.ts
import localFont from 'next/font/local';

export const sportypo = localFont({
  src: './fonts/Sportypo.ttf', // Adjust this path
  display: 'swap',
});

export const figtreeSemibold = localFont({
  src: './fonts/Figtree-SemiBold.ttf', // Adjust this path
  display: 'swap',
});

export const sfProDisplay = localFont({
  src: [
    {
      path: './fonts/SF-Pro-Display-Regular.otf', // Ajustez le chemin selon votre structure de dossiers
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/SFPRODISPLAYMEDIUM.otf', // Ajustez le chemin selon votre structure de dossiers
      weight: '500',
      style: 'normal',
    },
    // Vous pouvez ajouter d'autres variantes si nécessaire
    // {
    //   path: '../../fonts/SF-Pro-Display-Bold.otf',
    //   weight: '700',
    //   style: 'normal',
    // },
    // Ajoutez d'autres variantes selon vos besoins
  ],
  variable: '--font-sf-pro',
  display: 'swap',
});