import React from 'react';
import Image from 'next/image';
import {
  LayoutDashboard,
  UserCircle,
  Users,
  Briefcase,
  CreditCard,
  Calendar,
  MessageSquare,
  Contact,
  Settings,
  LogOut
} from 'lucide-react';
import Sidebar from "src/app/components/SidebarAdmin";
import pf1 from "public/images/PF1Dasboard.png";

const TrainerCard = ({ name, role, email, picture }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm">
    <div className="flex flex-col items-center">
      <div className="w-24 h-24 mb-4">
        <Image
          src={picture}
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
  <div
    className={`flex items-center space-x-3 px-4 py-3 rounded-lg cursor-pointer ${
      active ? 'bg-gray-900 text-white' : 'hover:bg-gray-100'
    }`}
  >
    <Icon className="w-5 h-5" />
    <span>{label}</span>
  </div>
);

const TrainerPage = () => {
  const trainers = [
    {
      name: 'Jason Price',
      role: 'Admin',
      email: 'janick_parisian@yahoo.com',
      picture: "/images/PF1Dasboard.png"    },
    {
      name: 'Jukkoe Sisao',
      role: 'CEO',
      email: 'sibyl_kozey@gmail.com',
      picture: '/images/PF2dasboard.png'
    },
    {
      name: 'Harriet King',
      role: 'CTO',
      email: 'nadia_block@hotmail.com',
      picture: '/images/PF3dasboard.png'
    },
    {
      name: 'Lenora Benson',
      role: 'Lead',
      email: 'feil.wallace@kunde.us',
      picture: '/images/PF4dasboard.png'
    }
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

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
              picture={trainer.picture}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default TrainerPage;
