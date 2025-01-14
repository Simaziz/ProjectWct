import Navbar from "src/app/components/navbarMylearning";
import Sidebar from "src/app/components/sidebar";
import Schedule from "src/app/components/traineeSchedule";
export default function traineeSchedule() {
  return (
    <header className="bg-white">
      {/* navbar */}
      <Navbar />
      <div className="flex gap-[1rem]">
        {/* sidebar */}
        <div className="">
        <Sidebar />
        </div>
        {/* trainee Schedule */}
       <div>
         <Schedule />
       </div>
      </div>
    </header>
  );
}
