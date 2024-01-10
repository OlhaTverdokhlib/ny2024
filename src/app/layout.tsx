import type { Metadata } from 'next';
import { Ubuntu_Mono, Inter } from 'next/font/google'
import './globals.scss';
import Navbar from './components/Navbar';


const ubuntuMono = Ubuntu_Mono({
  weight: '400',
subsets: ['latin'],});
const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: 'New Year 2024',
//   description: 'Games for kids',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head></head>

      <body className={ubuntuMono.className}>
      
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
