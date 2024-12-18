import type { Metadata } from "next";
import "./globals.css";
import Footer from '@/Components/footer'
import TopHeader from '@/Components/TopHeader'
import Header from '@/Components/Header'
import { Poppins} from 'next/font/google';

const poppins = Poppins({
    subsets: ['latin'], // Load only the required subsets
    weight: ['400', '500', '700'], // Specify the font weights you need
    variable: '--font-poppins', // Optional: Add a custom CSS variable
  });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}
      >
        <TopHeader/>
        <Header />
        {children}
        <Footer />

      </body>
    </html>
  );
}