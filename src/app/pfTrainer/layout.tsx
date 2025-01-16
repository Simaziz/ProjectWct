import localFont from "next/font/local";

import Image from "next/image";
import Link from "next/link";
import Navbar from "src/app/components/navbarTrainer";
import Footer from "src/app/components/footer";

// import "./globals.css";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function traineeLayout({ children, noNavbar }) {
  return (
    <html lang="en">
      <body>
        <div>
          <Navbar />

          <main>{children}</main>
          <Footer/>
        </div>
      </body>
    </html>
  );
}
