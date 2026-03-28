import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from 'react-hot-toast';
import TanStackProvider from '../components/TanStackProvider/TanStackProvider';
import AuthProvider from '@/components/AuthProvider/AuthProvider';
import Header from '@/components/Header/Header';
import ModalProvider from '@/components/ModalProvider/ModalProvider';

export const metadata: Metadata = {
  title: 'NannyServices',
  description:
    'App allows users to browse available nannies, add them to favorites, and use personalized features after authentication.',
  icons: {
    icon: '/favicon.svg',
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
    title: 'NannyServices - managing babysitters',
    description: '',
    // url: 'https://nannyservices.com',
    siteName: 'NannyServices',
    images: [
      {
        url: '/img/hero.webp',
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
        <TanStackProvider>
          <AuthProvider>
            <Header />
            <main>
              {children}
              <ModalProvider />
            </main>
          </AuthProvider>
        </TanStackProvider>
        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{
            duration: 3000,
            style: {
              background: '#363636',
              color: '#fff',
              fontSize: '16px',
              borderRadius: '10px',
              maxWidth: '100%',
            },
          }}
        />
      </body>
    </html>
  );
}
