import Navbar from "src/app/components/navbarMylearning";

// Define metadata
export const metadata = {
  title: "Admin Dashboard",
  description: "Admin dashboard layout",
};

// Define the layout component
export default function AdminDashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div>
          {/* Always render the Navbar */}
          <Navbar />

          {/* Render the children (page content) */}
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
