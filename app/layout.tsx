import type { Metadata } from 'next';
import React from 'react';

import GoogleAnalytics from '@/components/Template/GoogleAnalytics';
import Navigation from '@/components/Template/Navigation';
import '@/static/css/main.scss';
import { Providers } from './providers';

export const metadata: Metadata = {
  title: {
    default: 'Doniyorbek Yarkinov ',
    template: '%s | Yarkinov',
  },
  description: 'Frontend developer and mentor',
  keywords: ['Doniyorbek Yarkinov', 'frontend developer', 'frontend mentor', 'student', 'startup founder'],
  authors: [{ name: 'Doniyorbek Yarkinov' }],
  creator: 'Doniyorbek Yarkinov',
  metadataBase: new URL('https://yarkinovd.uz'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yarkinovd.uz',
    siteName: 'Doniyorbek Yarkinov',
    title: 'Doniyorbek Yarkinov',
    description: 'Frontend developer and mentor',
    images: [
      {
        url: '/images/me.jpg',
        width: 1200,
        height: 630,
        alt: 'Doniyorbek Yarkinov',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;800;900&family=Source+Sans+3:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Providers>
          <div id="wrapper">
            <Navigation />
            {children}
          </div>
        </Providers>
        <GoogleAnalytics />
      </body>
    </html>
  );
}
