import Navbar from "src/app/components/traineeNavbar";
// import Footer from "src/app/components/footer"

export const metadata = {
  title: "Trainee Dashboard",
  description: "Trainee dashboard powered by Next.js",
};

export default function TraineeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      {/* <Footer /> */}
    </div>
  );
}

