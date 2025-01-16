import React from 'react';
import { LayoutDashboard, UserCircle, Users, Briefcase, CreditCard, Calendar, MessageSquare, Contact, Settings, LogOut } from 'lucide-react';
import Sidebar from "src/app/components/SidebarAdmin"
import Images from 'next/image';
import im from 'public/images/PF2dasboard.png';
const TrainerCard = ({ name, role, email }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm">
    <div className="flex flex-col items-center">
      <div className="w-24 h-24 mb-4">
        <Images
          src={im}
          alt={name}
          className="w-full h-full rounded-full object-cover"
        />
      </div>
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-sm text-gray-500 mb-2">{role}</p>
      <p className="text-sm text-gray-600">{email}</p>
    </div>
  </div>
);

const SidebarItem = ({ icon: Icon, label, active = false }) => (
  <div className={`flex items-center space-x-3 px-4 py-3 rounded-lg cursor-pointer ${active ? 'bg-gray-900 text-white' : 'hover:bg-gray-100'}`}>
    <Icon className="w-5 h-5" />
    <span>{label}</span>
  </div>
);

const TrainerPage = () => {
  const trainers = [
    {
      name: 'Jason Price',
      role: 'Admin',
      email: 'janick_parisian@yahoo.com'
    },
    {
      name: 'Jukkoe Sisao',
      role: 'CEO',
      email: 'sibyl_kozey@gmail.com'
    },
    {
      name: 'Harriet King',
      role: 'CTO',
      email: 'nadia_block@hotmail.com'
    },
    {
      name: 'Lenora Benson',
      role: 'Lead',
      email: 'feil.wallace@kunde.us'
    }
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar/>
      {/* <aside className="w-64 bg-white border-r border-gray-200 p-4">
        <div className="mb-8">
          <div className="flex items-center space-x-2 px-4">
            <LayoutDashboard className="w-5 h-5" />
            <span className="text-xl">Dashboard</span>
          </div>
        </div>
        
        <nav className="space-y-1">
          <SidebarItem icon={UserCircle} label="Trainer" active />
          <SidebarItem icon={Users} label="Trainee" />
          <SidebarItem icon={Briefcase} label="Stuff" />
          <SidebarItem icon={UserCircle} label="Membership" />
          <SidebarItem icon={LayoutDashboard} label="Classes" />
          
          <div className="py-4">
            <p className="px-4 text-xs font-semibold text-gray-500 uppercase">Pages</p>
          </div>
          
          <SidebarItem icon={CreditCard} label="Pricing" />
          <SidebarItem icon={Calendar} label="Calendar" />
          <SidebarItem icon={MessageSquare} label="Feedback" />
          <SidebarItem icon={Contact} label="Contact" />
          <SidebarItem icon={CreditCard} label="Payment" />
          <SidebarItem icon={Users} label="Team" />
          
          <div className="pt-4 mt-4 border-t border-gray-200">
            <SidebarItem icon={Settings} label="Settings" />
            <SidebarItem icon={LogOut} label="Logout" />
          </div>
        </nav>
      </aside> */}

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-8">Trainer</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainers.map((trainer, index) => (
            <TrainerCard
              key={index}
              name={trainer.name}
              role={trainer.role}
              email={trainer.email}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default TrainerPage;