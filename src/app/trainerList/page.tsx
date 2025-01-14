"use client";
import { layouts } from "chart.js";
import Image from "next/image";
import pfList from "public/images/pfListTainer.png"
import { useState } from "react"; 
import Layout from "src/app/layout";


export default function TrainerList() {
   
  return (
 
          <header className="bg-black m-0">
      <div className=" bg-[url('/images/trainerListbg.png')] bg-cover h-[856px] ">
        <h1 className="font-extrabold text-white flex justify-center h-full items-center text-[4rem]">
          Client List
        </h1>
      </div>
      {/* search */}
      <div className="flex items-center m-[1rem] p-[2rem] bg-[#1E293B] text-gray-400 rounded-lg  w-[500px]">
        {/* Search Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 16l-4-4m0 0l4-4m-4 4h16"
          />
        </svg>

        {/* Input Field */}
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none flex-1 text-sm"
        />

        {/* Clear Button */}
        <button type="button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      {/* list */}
      <div className="flex items-center ml-[rem] justify-between bg-black text-white rounded-lg p-[1rem] w-full max-w-[900px]  ">
      {/* Profile Info */}
      <div className="flex items-center">
        {/* Profile Image */}
        <Image
          src={pfList}
          alt="Profile"
          className="w-16 h-16 rounded-full object-cover mr-4"
        />

        {/* Name and Details */}
        <div>
          <h2 className="text-[2rem] font-bold">Renee Winters</h2>
          <div className="text-sm text-gray-400 flex items-center space-x-2">
            <span className="text-blue-500">Beginner</span>
            <span>|</span>
            <span>Nutrition coaching</span>
          </div>
        </div>
      </div>

      {/* Dots Icon */}
      <button >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-gray-400"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="5" r="1.5" />
          <circle cx="12" cy="12" r="1.5" />
          <circle cx="12" cy="19" r="1.5" />
        </svg>
      </button>

      {/* Dropdown Menu */}
   
    </div>
      <div className="flex items-center ml-[rem] justify-between bg-black text-white rounded-lg p-[1rem] w-full max-w-[900px] ">
      {/* Profile Info */}
      <div className="flex items-center">
        {/* Profile Image */}
        <Image
          src={pfList}
          alt="Profile"
          className="w-16 h-16 rounded-full object-cover mr-4"
        />

        {/* Name and Details */}
        <div>
          <h2 className="text-[2rem] font-bold">Renee Winters</h2>
          <div className="text-sm text-gray-400 flex items-center space-x-2">
            <span className="text-blue-500">Beginner</span>
            <span>|</span>
            <span>Nutrition coaching</span>
          </div>
        </div>
      </div>

      {/* Dots Icon */}
      <button >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-gray-400"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="5" r="1.5" />
          <circle cx="12" cy="12" r="1.5" />
          <circle cx="12" cy="19" r="1.5" />
        </svg>
      </button>

      {/* Dropdown Menu */}
   
    </div>
      <div className="flex items-center ml-[rem] justify-between bg-black text-white rounded-lg p-[1rem] w-full max-w-[900px] ">
      {/* Profile Info */}
      <div className="flex items-center">
        {/* Profile Image */}
        <Image
          src={pfList}
          alt="Profile"
          className="w-16 h-16 rounded-full object-cover mr-4"
        />

        {/* Name and Details */}
        <div>
          <h2 className="text-[2rem] font-bold">Renee Winters</h2>
          <div className="text-sm text-gray-400 flex items-center space-x-2">
            <span className="text-blue-500">Beginner</span>
            <span>|</span>
            <span>Nutrition coaching</span>
          </div>
        </div>
      </div>

      {/* Dots Icon */}
      <button >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-gray-400"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="5" r="1.5" />
          <circle cx="12" cy="12" r="1.5" />
          <circle cx="12" cy="19" r="1.5" />
        </svg>
      </button>

      {/* Dropdown Menu */}
    
    </div>
      <div className="flex items-center ml-[rem] justify-between bg-black text-white rounded-lg p-[1rem] w-full max-w-[900px] ">
      {/* Profile Info */}
      <div className="flex items-center">
        {/* Profile Image */}
        <Image
          src={pfList}
          alt="Profile"
          className="w-16 h-16 rounded-full object-cover mr-4"
        />

        {/* Name and Details */}
        <div>
          <h2 className="text-[2rem] font-bold">Renee Winters</h2>
          <div className="text-sm text-gray-400 flex items-center space-x-2">
            <span className="text-blue-500">Beginner</span>
            <span>|</span>
            <span>Nutrition coaching</span>
          </div>
        </div>
      </div>

      {/* Dots Icon */}
      <button >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-gray-400"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="5" r="1.5" />
          <circle cx="12" cy="12" r="1.5" />
          <circle cx="12" cy="19" r="1.5" />
        </svg>
      </button>

      {/* Dropdown Menu */}
     
    </div>
      <div className="flex items-center ml-[rem] justify-between bg-black text-white rounded-lg p-[1rem] w-full max-w-[900px] ">
      {/* Profile Info */}
      <div className="flex items-center">
        {/* Profile Image */}
        <Image
          src={pfList}
          alt="Profile"
          className="w-16 h-16 rounded-full object-cover mr-4"
        />

        {/* Name and Details */}
        <div>
          <h2 className="text-[2rem] font-bold">Renee Winters</h2>
          <div className="text-sm text-gray-400 flex items-center space-x-2">
            <span className="text-blue-500">Beginner</span>
            <span>|</span>
            <span>Nutrition coaching</span>
          </div>
        </div>
      </div>

      {/* Dots Icon */}
      <button >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-gray-400"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="5" r="1.5" />
          <circle cx="12" cy="12" r="1.5" />
          <circle cx="12" cy="19" r="1.5" />
        </svg>
      </button>

      {/* Dropdown Menu */}
    
    </div>
    </header>

 
  
  );
}
