import { Outfit } from 'next/font/google';
import './globals.css';
// components
import Header from '@/components/Header';
import Footer from '@/components/Footer';
// theme provider
import { ThemeProvider } from '@/components/ThemeProvider';
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google'




const outfit = Outfit({ subsets: ['latin'] });

export const metadata = {
  title: 'About | jiping space',
  description: 'Know me more information.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' suppressHydrationWarning>

      <head>
        {/* Inject GTM/GA */}
        <GoogleTagManager gtmId="GTM-PW46WDTW" />
        <GoogleAnalytics gaId="G-8LNVSY1WCC" />
      </head>

      <body className={outfit.className}>
        <ThemeProvider attribute='class' defaultTheme='light'>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
