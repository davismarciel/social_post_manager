// Font
import { Inter } from 'next/font/google';

// Styles
import './globals.css';

// Components
import NavBar from '@/components/navbar/NavBar';
import Footer from '@/components/footer/Footer';

// Lang
const inter = Inter({ subsets: ['latin'] });

// Metadata
export const metadata = {
  title: {
    default: 'Homepage | Webgram',
    template: '%s | Webgram',
  },
  description: 'Webgram page',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          <NavBar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
