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

        <Script id="meta-pixel" strategy="afterInteractive">
                  {`
                    !function(f,b,e,v,n,t,s)
                    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                    n.queue=[];t=b.createElement(e);t.async=!0;
                    t.src=v;s=b.getElementsByTagName(e)[0];
                    s.parentNode.insertBefore(t,s)}(window, document,'script',
                    'https://connect.facebook.net/en_US/fbevents.js');
                    fbq('init', '1607730610467245');
                    fbq('track', 'PageView');
                  `}
                </Script>
                <noscript>
                  <img height="1" width="1" style={{ display: 'none' }}
                    src="https://www.facebook.com/tr?id=1607730610467245&ev=PageView&noscript=1"
                  />
                </noscript>
    </head>
    <body className={`${geistSans.variable}`} suppressHydrationWarning>
        <AppWrapper>{children}</AppWrapper>
    </body>
    </html>
);
}
