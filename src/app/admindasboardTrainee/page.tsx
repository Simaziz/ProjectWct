"use client"

import React from 'react';
import Sidebar from 'src/app/components/SidebarAdmin';
import Image from 'next/image';
import im from 'public/images/meat_ 2.png';

const TraineeTable = () => {
  const trainees = [
    { id: '001', name: 'Meat', class: 'YOGA', pricing: 'Basic Plan', trainer: 'Mellissa Doe' },
    { id: '002', name: 'Burger', class: 'YOGA', pricing: 'Basic Plan', trainer: 'Mellissa Doe' },
    { id: '003', name: 'Burrito', class: 'YOGA', pricing: 'Basic Plan', trainer: 'Mellissa Doe' },
    { id: '004', name: 'Ice Cream', class: 'YOGA', pricing: 'Basic Plan', trainer: 'Mellissa Doe' },
    { id: '005', name: 'Pizza Slice', class: 'BODY BUILDING', pricing: 'Basic Plan', trainer: 'Gwen Bass' },
    { id: '006', name: 'Cookies', class: 'BODY BUILDING', pricing: 'Basic Plan', trainer: 'Gwen Bass' },
    { id: '007', name: 'Fries', class: 'BODY BUILDING', pricing: 'Basic Plan', trainer: 'Gwen Bass' },
    { id: '008', name: 'Egg & Bacon', class: 'BODY BUILDING', pricing: 'Basic Plan', trainer: 'Gwen Bass' },
    { id: '009', name: 'Cup Cake', class: 'BODY BUILDING', pricing: 'Basic Plan', trainer: 'Gwen Bass' },
    { id: '010', name: 'Taco', class: 'BODY BUILDING', pricing: 'Basic Plan', trainer: 'Gwen Bass' },
  ];

  return (
    <header>
      <div className='flex gap-[3rem]'>
        <Sidebar/> 
      <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Trainee</h1>
      <div className="bg-white rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">ID</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Full Name</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Class</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Pricing</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Trainer</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {trainees.map((trainee) => (
              <tr key={trainee.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm text-gray-900">{trainee.id}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="h-8 w-8 flex-shrink-0">
                      <Image
                        className="h-8 w-8 rounded-full"
                        src={im}
                        alt=""
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{trainee.name}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">{trainee.class}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{trainee.pricing}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{trainee.trainer}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
      </div>
    </header>
  );
};

export default TraineeTable;