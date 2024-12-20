import localFont from 'next/font/local'

export const SpaceMono = localFont({
  src: [
    {
      path: '../../public/fonts/SpaceMono-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/SpaceMono-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-space-mono',
})

export const RightGrotesk = localFont({
  src: '../../public/fonts/RightGrotesk-SpatialBlack.woff2',
  variable: '--font-right-grotesk',
  weight: '900',
})
