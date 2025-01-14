"use client";
import Image from "next/image";
import pfTrainee from "public/images/pfTrainee.jpg";
import ChartGoal from "src/app/components/goalProgressChart";
import Sidebar from "src/app/components/sidebar";
import Workout from "src/app/components/workoutTrainee"
export default function traineeWorkout() {
    return (
       <header>
         <div className="flex items-center justify-between px-6 py-4 bg-white shadow-sm">
        {/* Left Section - Logo */}
        <div className="flex items-center space-x-[120px]">
          <h1 className="text-xl font-bold text-blue-900">GymMotive</h1>
          <hr className="w-px h-6 bg-gray-300" />
        </div>

        {/* Middle Section - Welcome Text */}
        <div className="flex flex-col">
          <span className="text-sm text-gray-400">Trainee</span>
          <span className="text-lg font-medium text-gray-900">
            Welcome Back!
          </span>
        </div>

        {/* Right Section - Search and Profile */}
        <div className="flex items-center space-x-4 ">
          {/* Search Input */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 text-sm text-gray-700 w-[700px] bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <svg
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z"
              />
            </svg>
          </div>

          {/* Notification Icon */}
          <button className="relative">
            <svg
              className="w-6 h-6 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0a3 3 0 11-6 0m6 0H9"
              />
            </svg>
          </button>

          {/* Profile Image */}
          <Image
            src={pfTrainee}
            alt="Profile"
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
      </div>
      {/* ////// */}
      <div className="flex gap-[2rem] bg-white">
        {/* ////////// */}

       <div className="w-[250px] ">
       <Sidebar />
       </div>
        <div className="   font-sans  flex flex-wrap text-black animate-fadeIn  ">
          {/* Yoga Classes Section */}
          {/* <header className= "bg-blue-700 rounded-2xl bg-no-repeat bg-right bg-[url('/images/YOGACLASS.png')] overflow-hidden bg-opacity-50 z-10  p-6  m-[20px] w-[700px]">
      

        <h1 className="text-2xl text-white font-bold">Yoga Classes</h1>
        <p className="text-white">
          Achieve balance, flexibility, and inner peace with our yoga classes. Designed for all fitness levels, these sessions promote mindfulness and physical well-being.
        </p>
      </header>
       */}
          <div className="relative flex items-center  p-[2rem] bg-cover bg-center bg-no-repeat h-[150px] w-[700px] m-[2rem] rounded-lg overflow-hidden bg-[url('/images/pfworkout.png')] ">
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
         <div className="float-left">
         <Workout />
         </div>
         
        </div>
      </div>
       </header>
    )
}