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
   
   <Head>
        {/* Google Tag Manager Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-PW46WDTW');`,
          }}
        />
      </Head>

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
