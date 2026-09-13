import type { Metadata, Viewport } from 'next';
import { Old_Standard_TT, Nunito } from 'next/font/google';
import MascotDefs from '@/components/MascotDefs';
import './globals.css';

const serif = Old_Standard_TT({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
});

const sans = Nunito({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  variable: '--font-sans',
  display: 'swap',
});

const SITE_URL = 'https://echo.app';
const TITLE = 'Echo — Your private morning briefing, spoken aloud';
const DESCRIPTION =
  'Echo quietly captures your notifications, messages and calendar, then reads you a calm, personalized spoken briefing every morning. Processed on-device by default. Private, ad-free, and yours.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  applicationName: 'Echo',
  alternates: { canonical: '/' },
  icons: {
    icon: [
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-256.png', sizes: '256x256', type: 'image/png' },
    ],
    apple: [{ url: '/favicon-256.png' }],
  },
  openGraph: {
    type: 'website',
    siteName: 'Echo',
    title: TITLE,
    description:
      'Echo captures your notifications, messages and calendar, then reads you a calm spoken briefing. On-device by default. Private.',
    url: '/',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Echo — a calm spoken morning briefing.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description:
      'Echo captures your notifications, messages and calendar, then reads you a calm spoken briefing. On-device by default. Private.',
    images: ['/og-image.png'],
  },
};

export const viewport: Viewport = {
  themeColor: '#F4F2EE',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <MascotDefs />
        {children}
      </body>
    </html>
  );
}
