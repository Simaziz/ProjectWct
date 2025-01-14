'use client';

import React from 'react';
import Image from 'next/image';
import { Play } from 'lucide-react';
import bg1 from "public/images/pfworkout.png";
import pf1 from "public/images/pf1workout.png";

const WorkoutInterface = () => {
  const workoutItems = [
    { icon: "🧘‍♀️", title: "Stretch", time: "At 08:00", progress: "10/20 Sets" },
    { icon: "🧘‍♀️", title: "Back Stretch", time: "At 09:00", progress: "6/10 Round" },
    { icon: "🧘‍♀️", title: "Yoga", time: "At 10:00", progress: "04/20 min" },
    { icon: "🧘‍♀️", title: "Yoga", time: "At 11:00", progress: "20 min" }
  ];

  const achievements = [
    { icon: "⏰", label: "hours", value: "15" },
    { icon: "🔥", label: "Kcal", value: "550" },
    { icon: "🧘‍♀️", label: "Poses", value: "15" },
    { icon: "💪", label: "Sets", value: "5" },
    { icon: "👟", label: "Sets", value: "5" }
  ];

  return (
    <div className="  p-4">
      {/* Main Card */}
     <div className='flex gap-[3rem]'>
     <div className="relative bg-gradient-to-br from-indigo-900 to-purple-700 rounded-3xl p-6 mb-6 w-[400px]">
        <div className="flex items-center gap-4 mb-8">
          <div className="relative w-12 h-12 rounded-full overflow-hidden">
            <Image 
              src={pf1}
              alt="Trainer profile"
              width={48}
              height={48}
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-white font-semibold">Mellissa Doe</h2>
            <p className="text-gray-300 text-sm">Yoga Trainer</p>
          </div>
        </div>

        <div className="mb-8">
          <h1 className="text-white text-2xl font-bold mb-1">Legs</h1>
          <h2 className="text-white text-3xl font-bold">Workout</h2>
        </div>

        <div className="flex gap-4">
          <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2">
            <span className="text-white">💪</span>
            <span className="text-white">Lower Body</span>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2">
            <span className="text-white">📊</span>
            <span className="text-white">Beginner</span>
          </div>
        </div>
      </div>

      {/* Workout Items */}
      <div className="space-y-4 mb-8">
        {workoutItems.map((item, index) => (
          <div key={index} className="bg-white rounded-2xl p-4 flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
                <span className="text-xl">{item.icon}</span>
              </div>
              <div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.time}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-gray-600 text-sm">{item.progress}</span>
              <button 
                className="hover:bg-gray-100 p-2 rounded-full transition-colors"
                aria-label={`Play ${item.title}`}
              >
                <Play className="w-6 h-6 text-gray-700" />
              </button>
            </div>
          </div>
        ))}
      </div>
     </div>

      {/* Achievements */}
      <h2 className="text-xl font-bold mb-4">Achievements</h2>
      <div className="grid grid-cols-5 gap-2">
        {achievements.map((achievement, index) => (
          <div key={index} className="bg-gray-900 rounded-3xl p-4 flex flex-col items-center justify-center aspect-[3/4]">
            <span className="text-2xl mb-1">{achievement.icon}</span>
            <span className="text-white text-2xl font-bold mb-1">{achievement.value}</span>
            <span className="text-gray-400 text-xs">{achievement.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkoutInterface;