import { ReactNode } from "react";
// import Navbar from "src/app/components/navbarMylearning";

// Define the props interface
interface TraineeLayoutProps {
  children: ReactNode;
  noNavbar?: boolean; // Optional prop to conditionally render the Navbar
}

// Define the layout component
export default function TraineeLayout({ children, noNavbar }: TraineeLayoutProps) {
  return (
    <html lang="en">
      <body>
        <div>
          {/* Conditionally render the Navbar based on the noNavbar prop */}
          {!noNavbar}

          {/* Render the children (page content) */}
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}