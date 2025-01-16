// src/app/layout.tsx

import localFont from "next/font/local";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

interface RootLayoutProps {
  children: React.ReactNode;
  noNavbar?: boolean;
}

export default function RootLayout({ children, noNavbar }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div>
          {!noNavbar && <Navbar />}
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
