import type {Metadata} from 'next';
import {Manrope} from 'next/font/google';

import 'swiper/css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/swiper-bundle.css';
import '@/assets/scss/theme.scss';
import Script from "next/script";
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
    title: 'McWIN iTECH',
    description: 'Accelerate business growth in Perth | Expert IT Development & Digital Marketing Services',
    icons: favicon.src,
     verification: {
        google: 'rDjxnSmaSCQi0feic3CHUxmf5Ou2L0AA5kLIuYxxS8A',
      },
};


export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
return (
    <html lang="en">
    <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-D1KG76VGK0"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-D1KG76VGK0');
            `,
          }}
        />
    </head>
    <body className={`${geistSans.variable}`} suppressHydrationWarning>
        <AppWrapper>{children}</AppWrapper>
    </body>
    </html>
);
}
