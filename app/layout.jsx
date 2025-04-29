import { Outfit } from 'next/font/google';
import './globals.css';
import { GA_MEASUREMENT_ID } from '../lib/gtag';
import Script from 'next/script';
import Analytics from '..app/analytics'

// components
import Header from '@/components/Header';
import Footer from '@/components/Footer';
// theme provider
import { ThemeProvider } from '@/components/ThemeProvider';

const outfit = Outfit({ subsets: ['latin'] });

export const metadata = {
  title: 'About | jiping space',
  description: 'Know me more information.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' suppressHydrationWarning>
   
      <head>
        {/* GA4 Script */}
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}');
            `,
          }}
        />
      </head>

      <body className={outfit.className}>
        <Analytics />
        <ThemeProvider attribute='class' defaultTheme='light'>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
