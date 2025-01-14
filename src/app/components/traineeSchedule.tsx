'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ScheduleItem {
  day: string;
  activity: string;
  time: string;
  metric: string;
  icon: string;
}

const SchedulePage = () => {
  const timeSlots = ['8am-9am', '10am-11am', '1pm-2am', '3pm-5pm', '7pm-9pm'];
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  
  const scheduleItems: ScheduleItem[] = [
    {
      day: 'Monday',
      activity: 'Stretch',
      time: 'At 08:00',
      metric: '20 Sets',
      icon: '/api/placeholder/40/40'
    },
    {
      day: 'Tuesday',
      activity: 'Back Stretch',
      time: 'At 08:00',
      metric: '10 Round',
      icon: '/api/placeholder/40/40'
    },
    {
      day: 'Wednesday',
      activity: 'Yoga',
      time: 'At 08:00',
      metric: '20 min',
      icon: '/api/placeholder/40/40'
    },
    {
      day: 'Thursday',
      activity: 'Yoga',
      time: 'At 08:00',
      metric: '20 min',
      icon: '/api/placeholder/40/40'
    }
  ];

  return (
    <div className=" bg-white p-6">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4 animate-fadeIn">
          <h6 className="text-base font-semibold text-black">SCHEDULES</h6>
          <h1 className="text-4xl font-bold text-black">GymMotive Schedules</h1>
          <p className="text-xl text-black">Select the best plan that fits your needs and start learning today!</p>
        </div>

        {/* Schedule Grid */}
        <div className="overflow-x-auto rounded-lg shadow-lg border-2 border-black animate-fadeIn">
          <table className="w-full">
            <thead>
              <tr className="divide-x-2 divide-black">
                <th className="bg-[#102248] text-white py-6 px-8 text-left font-bold">Time</th>
                {days.map((day) => (
                  <th key={day} className="bg-[#102248] text-white py-6 px-8 text-left font-bold">{day}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y-2 divide-[#102248] bg-[#102248] ">
              {timeSlots.map((time, idx) => (
                <tr key={time} className="divide-x-2 divide-black">
                  <td className="bg-[#102248] text-white py-6 px-8 font-bold">{time}</td>
                  {days.map((day, dayIdx) => (
                    <td 
                      key={`${time}-${day}`}
                      className={`py-6 px-8 ${dayIdx % 2 === 1 ? 'bg-zinc-100' : 'bg-white'}`}
                    ></td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* My Schedule */}
        <div className="space-y-4 animate-fadeIn">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-black">My Schedule</h2>
            <Link href="/schedule/all" className="text-black hover:text-zinc-700 flex items-center gap-1">
              View All
              <span className="text-lg">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {scheduleItems.map((item) => (
              <div key={`${item.day}-${item.activity}`} className="bg-white rounded-lg shadow-lg border-2 border-[#102248] p-4">
                <h3 className="font-bold text-black mb-4">{item.day}</h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10">
                      <Image
                        src={item.icon}
                        alt={item.activity}
                        fill
                        className="rounded-lg object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-bold text-[#102248]">{item.activity}</p>
                      <p className="text-sm font-medium text-[#102248]">{item.time}</p>
                    </div>
                  </div>
                  <span className="bg-black text-white px-3 py-1 rounded-full text-sm font-medium">
                    {item.metric}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchedulePage;