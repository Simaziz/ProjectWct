import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
// import Navbar from "src/app/components/traineeNavbar";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function TraineeLayout({ 
  children 
}: { 
  children: ReactNode 
}) {
  return (
    <html lang="en">
      <body>
        <div>
          
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}