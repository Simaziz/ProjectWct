"use client"

// aimport React from 'react';
import Sidebar from 'src/app/components/SidebarAdmin';
import Image from 'next/image';
import im from 'public/images/PF1Dasboard.png';

const StaffCard = ({ name, role, email }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm">
    <div className="flex flex-col items-center text-center">
      <div className="w-24 h-24 mb-4">
        <Image
          src={im}
          alt={name}
          className="w-full h-full rounded-full object-cover"
        />
      </div>
      <h3 className="text-lg font-semibold mb-1">{name}</h3>
      <p className="text-sm text-gray-500 mb-2">{role}</p>
      <p className="text-sm text-gray-600">{email}</p>
    </div>
  </div>
);

const StaffGrid = () => {
  const staffMembers = [
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
    },
    {
      name: 'Olivia Reese',
      role: 'Strategist',
      email: 'kemmer.hattie@cremin.us'
    },
    {
      name: 'Bertha Valdez',
      role: 'CEO',
      email: 'loraine.koelpin@tromp.io'
    },
    {
      name: 'Harriett Payne',
      role: 'Digital Marketer',
      email: 'nannie_west@estrella.tv'
    },
    {
      name: 'George Bryant',
      role: 'Social Media',
      email: 'delmer.kling@gmail.com'
    }
  ];

  return (
    <header>
        <div className='flex'>
            <Sidebar/>
        <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Stuff</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {staffMembers.map((member, index) => (
          <StaffCard
            key={index}
            name={member.name}
            role={member.role}
            email={member.email}
          />
        ))}
      </div>
    </div>
        </div>
    </header>
   
  );
};

export default StaffGrid;