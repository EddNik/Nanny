import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'NannyServices - finding and managing babysitters',
  description:
    'App allows users to browse available nannies, add them to favorites, and use personalized features after authentication.',
  icons: {
    icon: '/favicon.ico',
  },
  keywords: [
    'babysitters',
    'babysitters Ukraine',
    'nanny services',
    'childcare',
    'family support',
    'nanny management',
    'babysitter finder',
  ],

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'uk_UA',
    title: 'NannyServices - finding and managing babysitters',
    description: '',
    // url: 'https://nannyservices.com',
    siteName: 'NannyServices',
    images: [
      {
        url: '/img/hero-bg.webp',
        width: 1200,
        height: 630,
        alt: 'NannyServices',
      },
    ],
  },
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        {modal}
      </body>
    </html>
  );
}
