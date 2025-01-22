"use client";
import Image from "next/image";
// import Link from "next/link";
// import { useState } from "react";
import OurGymMotiveClass from "src/app/components/OurGymMotiveClass";
import Pricing from "src/app/components/Pricing";
import OurGymMotiveTrainer from "src/app/components/OurGymMotiveTrainer";

// Importing images
import rectangle1 from "public/images/Rectangle1.png";
import rectangle2 from "public/images/Rectangle2.png";
import rectangle3 from "public/images/Rectangle3.png";
// import key1 from "public/images/key1.png";
// import key2 from "public/images/key2.png";
// import key3 from "public/images/key3.png";
import pf1 from "public/images/pf1.png";
import pf2 from "public/images/pf2.png";
import pf3 from "public/images/pf3.png";

export default function TraineeHome() {
  return (
    <div>
      {/* Header Section */}
      <div className="bg-white">
        <div className="h-screen bg-[url('/images/bgTraineeHome.png')] bg-cover bg-center max-sm:h-screen animate-fadeIn">
          <div className="p-[6rem] text-white">
            <h1 className="text-[3rem] font-bold leading-snug">
              GymMotive,
              <br /> Where Fitness <br /> Meets Motivation
            </h1>
            <p className="mt-[1rem] leading-relaxed">
              Transform your body and mind with personalized training programs.
              Achieve your goals, stay motivated, and embrace a healthier
              lifestyle—all with GymMotive by your side.
            </p>
          </div>
        </div>

        {/* Explore Program Section */}
        <div className="animate-fadeIn">
          <h1 className="text-black text-center font-bold text-[2rem] p-[10px]">
            Explore Our Program
          </h1>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
          {[
            {
              icon: "🍎",
              title: "Nutritions",
              description:
                "Personalized diet plans to help you achieve your fitness goals.",
            },
            {
              icon: "❤️",
              title: "Cardio Strength",
              description:
                "Cardio workouts to improve heart health and endurance.",
            },
            {
              icon: "🏋️‍♀️",
              title: "Fat Loss",
              description:
                "Targeted programs to burn fat and improve body composition.",
            },
            {
              icon: "💪",
              title: "Muscle Gain",
              description:
                "Build strength and muscle with expert-designed training.",
            },
          ].map((card, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 text-center"
            >
              <div className="text-blue-900 text-3xl mb-4">{card.icon}</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">
                {card.title}
              </h3>
              <p className="text-gray-500">{card.description}</p>
            </div>
          ))}
        </div>

        {/* Transform Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16 py-12 bg-white animate-slide-in-right">
          {/* Images */}
          <div className="space-y-4 lg:space-y-0 lg:space-x-4 lg:flex-row">
            <Image
              src={rectangle1}
              alt="Woman Lifting Weights"
              className="rounded-lg shadow-lg w-80 h-100 object-cover"
            />
            <Image
              src={rectangle2}
              alt="Man Working Out"
              className="rounded-lg shadow-lg w-60 h-40 object-cover ml-[9rem]"
            />
            <Image
              src={rectangle3}
              alt="Woman Squatting Weights"
              className="rounded-lg shadow-lg w-80 h-100 object-cover"
            />
          </div>

          {/* Text */}
          <div className="mt-8 lg:mt-0 ml-[10rem] text-center lg:text-left">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Transform your physique with our{" "}
              <span className="text-blue-700">fitness plan.</span>
            </h2>
            <p className="text-gray-600 mb-6">
              We are an online-based Gym E-Commerce website, providing personal
              training, diet plans, and a wide range of gym equipment.
            </p>
            <ul className="list-none space-y-2 mb-6">
              {[
                "Increase Muscle and Strength",
                "Be Healthier than Before",
                "Increase Stamina",
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <span className="text-blue-600 mr-2">✔️</span>
                  <span className="text-gray-800">{item}</span>
                </li>
              ))}
            </ul>
            <button className="bg-white text-blue-600 border border-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-blue-600 hover:text-white transition duration-300">
              Get Started
            </button>
          </div>
        </div>

        {/* Our GymMotive Classes */}
        <div className="text-center mt-8">
          <h1 className="text-[2rem] font-bold">Our GymMotive Classes</h1>
          <p>Join our famous classes tailored for your fitness needs.</p>
        </div>
        <OurGymMotiveClass />

        {/* Trainer and Pricing */}
        <OurGymMotiveTrainer />
        <Pricing />

        {/* Testimonials */}
        <div className="max-w-4xl mx-auto text-center py-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-8">
            What Our Members Say About Us
          </h2>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              {[pf1, pf2, pf3].map((pf, index) => (
                <Image
                  key={index}
                  src={pf}
                  alt={`User ${index + 1}`}
                  className="w-10 h-10 rounded-full border-2 border-gray-300 -ml-2"
                />
              ))}
              <span className="ml-4 text-gray-500 text-sm">
                10k+ Satisfied Customers
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
