import type { Metadata, Viewport } from 'next';
import { Old_Standard_TT, Nunito } from 'next/font/google';
import './globals.css';

// Matches the app: Nunito for body/labels, Old Standard TT for headings.
const sans = Nunito({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
});

const display = Old_Standard_TT({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});

const SITE_URL = 'https://echo.app';
const TITLE = 'Echo — Wake up already caught up';
const DESCRIPTION =
  'Echo captures your notifications, messages and calendar all day, then reads you one calm spoken briefing every morning. Ask it anything, and keep everything on-device. Private by default, free, no account needed.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  applicationName: 'Echo',
  alternates: { canonical: '/' },
  icons: {
    icon: [
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/logo.png', type: 'image/png' },
    ],
    apple: [{ url: '/logo.png' }],
  },
  openGraph: {
    type: 'website',
    siteName: 'Echo',
    title: TITLE,
    description: DESCRIPTION,
    url: '/',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Echo — your notifications, summarized.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: ['/og-image.png'],
  },
};

export const viewport: Viewport = {
  themeColor: '#0c0c0c',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable}`}>
      <body>{children}</body>
    </html>
  );
}
