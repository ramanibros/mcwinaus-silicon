import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';

import 'swiper/css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/swiper-bundle.css';
import '@/assets/scss/theme.scss';
import AppWrapper from '../components/AppWrapper';
import favicon from '@/assets/favicon/favicon.ico';

const geistSans = Manrope({
  variable: '--font-geist-sans',
  subsets: ['cyrillic', 'cyrillic-ext', 'greek', 'latin', 'latin-ext', 'vietnamese'],
  display: 'swap',
  style: 'normal',
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Silicon | Multipurpose Business | Technology Template',
  description: 'Silicon - Multipurpose Technology Bootstrap Template',
  icons: favicon.src,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable}`} suppressHydrationWarning>

        <AppWrapper>{children}</AppWrapper>
      </body>
    </html>
  );
}
