"use client";
import Image from "next/image";
import pfTrainee from "public/images/pfTrainee.jpg";
import ChartGoal from "src/app/components/goalProgressChart";
import Sidebar from "src/app/components/sidebar";
import Navbar from "src/app/components/navbarMylearning"
// import React from 'react';
export default function traineeMylearning() {
  return (
    <header className="">
      {/* nav bar */}
      <Navbar />
      {/* ////// */}
      <div className="flex  bg-white ">
        {/* ////////// */}
       <div className="w-[250px] ">
       <Sidebar />
       </div>

        

        <div className="   font-sans  flex flex-wrap text-black animate-fadeInUp ">
          {/* Yoga Classes Section */}
          {/* <header className= "bg-blue-700 rounded-2xl bg-no-repeat bg-right bg-[url('/images/YOGACLASS.png')] overflow-hidden bg-opacity-50 z-10  p-6  m-[20px] w-[700px]">
      

        <h1 className="text-2xl text-white font-bold">Yoga Classes</h1>
        <p className="text-white">
          Achieve balance, flexibility, and inner peace with our yoga classes. Designed for all fitness levels, these sessions promote mindfulness and physical well-being.
        </p>
      </header>
       */}
          <div className="relative flex items-center  p-[2rem] bg-cover bg-center bg-no-repeat h-[150px] w-[700px] m-[2rem] rounded-lg overflow-hidden bg-[url('/images/YOGACLASS.png')] ">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-transparent"></div>

            <div className="relative z-10 flex flex-col text-white pl-8 w-1/2">
              <h2 className="text-3xl font-bold">Yoga Classes</h2>
              <p className="mt-2 text-sm">
                Achieve balance, flexibility, and inner peace with our yoga
                classes. Designed for all fitness levels, these sessions promote
                mindfulness and physical well-being.
              </p>
            </div>
          </div>

          {/* Main Content */}
          <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Statistics Cards */}
            <div className="grid grid-cols-3 gap-4 col-span-3">
              <div className="bg-blue-600 text-white p-4 rounded-lg shadow ">
                <h2 className="text-xl font-bold">Workout</h2>
                <p className="text-sm">4 hrs</p>
              </div>
              <div className="bg-orange-500 text-white p-4 rounded-lg shadow">
                <h2 className="text-xl font-bold">Calories</h2>
                <p className="text-sm">1800 kcal</p>
              </div>
              <div className="bg-purple-600 text-white p-4 rounded-lg shadow">
                <h2 className="text-xl font-bold">Steps</h2>
                <p className="text-sm">2200 steps</p>
              </div>
            </div>

            {/* Schedule */}
            <div className="bg-white p-6 rounded-lg shadow col-span-1 lg:col-span-1">
              <h2 className="text-lg font-bold">My Schedule</h2>
              <ul className="mt-4 space-y-4">
                <li className="flex justify-between">
                  <span>Monday - Stretch</span>
                  <span className="text-gray-500">20 Sets</span>
                </li>
                <li className="flex justify-between">
                  <span>Tuesday - Back Stretch</span>
                  <span className="text-gray-500">10 Rounds</span>
                </li>
                <li className="flex justify-between">
                  <span>Wednesday - Yoga</span>
                  <span className="text-gray-500">20 min</span>
                </li>
              </ul>
            </div>

            {/* Goal Progress */}
          </div>
          <ChartGoal />
        </div>
      </div>
    </header>
  );
}
