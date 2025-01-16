import React from 'react';
import Navbar from "src/app/components/NavbarMylearningTrainee"
import Sidebar from "src/app/components/SidebarAdmin"
import { LayoutDashboard, UserCircle, Users, Briefcase, CreditCard, Calendar, MessageSquare, Contact, Settings, LogOut } from 'lucide-react';
import SideBarAdmin from 'src/app/components/SidebarAdmin';
import Navbar1 from "src/app/components/navbarMylearning"

const DashboardCard = ({ title, count, icon: Icon }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center justify-center">
    <div className="bg-gray-200 p-4 rounded-full mb-4">
      <Icon className="w-6 h-6 text-gray-600" />
    </div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-2xl font-bold text-gray-700">{count}</p>
  </div>
);



const Dashboard = () => {
  const dashboardData = [
    { title: 'Trainer', count: 4, icon: UserCircle },
    { title: 'Trainee', count: 20, icon: Users },
    { title: 'Stuff', count: 10, icon: Briefcase },
    { title: 'Membership', count: 4, icon: UserCircle },
    { title: 'Classes', count: 3, icon: LayoutDashboard },
    { title: 'Pricing', count: 3, icon: CreditCard },
    { title: 'Feedback', count: 10, icon: MessageSquare },
    { title: 'Contact', count: 5, icon: Contact },
    { title: 'Payment', count: 6, icon: CreditCard },
    { title: 'Team', count: 4, icon: Users }
  ];

  return (
    <header className="text-black">
      <Navbar1/>
     
       <div className="flex min-h-screen bg-gray-50">

{/* Sidebar */}
<SideBarAdmin/>

{/* Main Content */}
<main className="flex-1 p-8">
  <h1 className="text-2xl font-bold mb-8">Dashboard</h1>
  
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    {dashboardData.map((item, index) => (
      <DashboardCard
        key={index}
        title={item.title}
        count={item.count}
        icon={item.icon}
      />
    ))}
  </div>
</main>
</div>
    </header>

   
  );
};

export default Dashboard;