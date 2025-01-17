import Navbar from "src/app/components/traineeNavbar";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function TraineeLayout({
  children,
  noNavbar = false, // Default to false if noNavbar is not passed
}: any) {  // Using `any` for props if typing continues to cause issues
  return (
    <html lang="en">
      <body>
        <div>
          {!noNavbar && <Navbar />} {/* Conditionally render Navbar */}
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
