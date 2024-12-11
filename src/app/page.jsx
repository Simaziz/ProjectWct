// import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {} from "@fortawesome/free-solid-svg-icons"
export default function Home() {
  return (
    <header className="bg-white">
      <div >
       <h1 className="text-black flex justify-center font-bold text-[2rem] p-[10px]">Explore Our Program</h1>
      </div>
      {/* box 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
  {/* Card 1 */}
  <div className="bg-white shadow-md rounded-lg p-6 text-center">
    <div className="text-blue-900 text-3xl mb-4">
      <i className="fas fa-apple-alt"></i> {/* Replace with FontAwesome or other icon */}
    </div>
    <h3 className="text-xl font-bold text-blue-900 mb-2">Nutritions</h3>
 <p className="text-gray-500">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, nunc a pretium viverra.
    </p>
  </div>

  {/* Card 2 */}
  <div className="bg-white shadow-md rounded-lg p-6 text-center">
    <div className="text-blue-900 text-3xl mb-4">
      <i className="fas fa-heartbeat"></i> {/* Replace with FontAwesome or other icon */}
    </div>
    <h3 className="text-xl font-bold text-blue-900 mb-2">Cardio Strength</h3>
    <p className="text-gray-500">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, nunc a pretium viverra.
    </p>
  </div>

  {/* Card 3 */}
  <div className="bg-white shadow-md rounded-lg p-6 text-center">
    <div className="text-blue-900 text-3xl mb-4">
      <i className="fas fa-weight"></i> {/* Replace with FontAwesome or other icon */}
    </div>
    <h3 className="text-xl font-bold text-blue-900 mb-2">Fat Lose</h3>
    <p className="text-gray-500">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, nunc a pretium viverra.
    </p>
  </div>

  {/* Card 4 */}
  <div className="bg-white shadow-md rounded-lg p-6 text-center">
    <div className="text-blue-900 text-3xl mb-4">
      <i className="fas fa-dumbbell"></i> {/* Replace with FontAwesome or other icon */}
    </div>
    <h3 className="text-xl font-bold text-blue-900 mb-2">Muscle Gain</h3>
    <p className="text-gray-500">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, nunc a pretium viverra.
    </p>
  </div>
</div>
{/* after card */}

<div className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16 py-12 bg-white">
  {/* Left Section with Images */}
  <div className="flex flex-col space-y-4 lg:space-y-0 lg:space-x-4 lg:flex-row">
    <div className="flex-shrink-0">
      <img
        src="image1.jpg"
        alt="Woman Lifting Weights"
        className="rounded-lg shadow-lg w-60 h-40 object-cover"
      />
    </div>
    <div className="flex-shrink-0">
      <img
        src="image2.jpg"
        alt="Man Working Out"
        className="rounded-lg shadow-lg w-60 h-40 object-cover"
      />
    </div>
    <div className="flex-shrink-0">
      <img
        src="image3.jpg"
        alt="Woman Squatting Weights"
        className="rounded-lg shadow-lg w-60 h-40 object-cover"
      />
    </div>
  </div>

  {/* Right Section with Text */}
  <div className="mt-8 lg:mt-0 lg:ml-8 text-center lg:text-left">
    <h2 className="text-4xl font-bold text-gray-900 mb-4">
      Transform your physique with our <span className="text-blue-700">fitness plan.</span>
    </h2>
    <p className="text-gray-600 mb-6">
      We are an online-based Gym E-Commerce website, and also provide the best personal training
      experts as training planner, diet planner, and more. We have a really wide range of gym
      equipment and also supplements.
    </p>
    <ul className="list-none space-y-2 mb-6">
      <li className="flex items-center">
        <span className="text-blue-600 mr-2">
          <i className="fas fa-check-circle"></i>
        </span>
        <span className="text-gray-800">Increase Muscle and Strength</span>
      </li>
      <li className="flex items-center">
        <span className="text-blue-600 mr-2">
          <i className="fas fa-check-circle"></i>
        </span>
        <span className="text-gray-800">Be Healthier than before</span>
      </li>
      <li className="flex items-center">
        <span className="text-blue-600 mr-2">
          <i className="fas fa-check-circle"></i>
        </span>
        <span className="text-gray-800">Increase Stamina</span>
      </li>
    </ul>
    <button className="bg-white text-blue-600 border border-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-blue-600 hover:text-white transition duration-300">
      Get Started
    </button>
  </div>
</div>
{/* after card 2 */}
<div className="bg-gray-50 py-12 px-4 lg:px-16 mt-[10px]">
  {/* Heading Section */}
  <div className="text-center mb-8">
    <h4 className="text-blue-600 text-lg font-semibold">Why choose us?</h4>
    <h2 className="text-3xl font-bold text-gray-800 mt-2">Our Key Features See Some</h2>
    <p className="text-gray-600 mt-2">
      Let's join our famous class, the GymMotive provided will definitely be useful for you.
    </p>
  </div>

  {/* Features Section */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {/* Card 1 */}
    <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
      <img
        src="image1.jpg"
        alt="Get In The Groove"
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">GET IN THE GROOVE</h3>
        <p className="text-gray-600">
          Use a past defeat as a motivator. Remind yourself you have.
        </p>
      </div>
    </div>

    {/* Card 2 */}
    <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
      <img
        src="image2.jpg"
        alt="Get Fit Don't Quit"
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">GET FIT DON'T QUIT</h3>
        <p className="text-gray-600">
          Success isn’t really that difficult. There is a significant?
        </p>
      </div>
    </div>

    {/* Card 3 */}
    <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
      <img
        src="image3.jpg"
        alt="Work Your Butt Off"
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">WORK YOUR BUTT OFF</h3>
        <p className="text-gray-600">
          For those of you who are serious about having more.
        </p>
      </div>
    </div>
  </div>
</div>
{/* after card3 */}
<div className='text-black mt-[10px]'>
<h2 className='flex justify-center font-bold text-[2rem]'>Our GymMotive Classes</h2>
<p className='flex justify-center'> Let's join our famous class, the GymMotive provided will definitely be useful for you.</p>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
  {/* Body Building */}
  <div className="bg-white shadow-md rounded-lg overflow-hidden">
    <img
      src="/path-to-body-building-image.jpg"
      alt="Body Building"
      className="w-full h-48 object-cover"
    />
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2">BODY BUILDING</h3>
      <p className="text-gray-600 mb-4">
        Build your strength and sculpt your physique through structured
        workout plans. Achieve your fitness goals with expert trainers guiding
        you every step.
      </p>
      <p className="text-gray-800 font-medium">
        Hanzo <span className="text-gray-500 text-sm">Trainer</span>
      </p>
      <a href="#" className="text-blue-600 font-semibold mt-2 inline-block">
        View
      </a>
    </div>
  </div>

  {/* Weight Lifting */}
  <div className="bg-white shadow-md rounded-lg overflow-hidden">
    <img
      src="/path-to-weight-lifting-image.jpg"
      alt="Weight Lifting"
      className="w-full h-48 object-cover"
    />
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2">WEIGHT LIFTING</h3>
      <p className="text-gray-600 mb-4">
        Master the art of weightlifting with personalized training sessions.
        Focus on improving technique, building power, and increasing overall
        strength under the supervision of our professional trainers.
      </p>
      <p className="text-gray-800 font-medium">
        Hanzo <span className="text-gray-500 text-sm">Trainer</span>
      </p>
      <a href="#" className="text-blue-600 font-semibold mt-2 inline-block">
        View
      </a>
    </div>
  </div>

  {/* Cardio */}
  <div className="bg-white shadow-md rounded-lg overflow-hidden">
    <img
      src="/path-to-cardio-image.jpg"
      alt="Cardio"
      className="w-full h-48 object-cover"
    />
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2">CARDIO</h3>
      <p className="text-gray-600 mb-4">
        Boost your heart health and stamina with our cardio-focused sessions.
        Engage in high-intensity exercises that improve endurance, burn
        calories, and promote a healthy lifestyle.
      </p>
      <p className="text-gray-800 font-medium">
        Badang <span className="text-gray-500 text-sm">Trainer</span>
      </p>
      <a href="#" className="text-blue-600 font-semibold mt-2 inline-block">
        View
      </a>
    </div>
  </div>

  {/* Martial Arts */}
  <div className="bg-white shadow-md rounded-lg overflow-hidden">
    <img
      src="/path-to-martial-arts-image.jpg"
      alt="Martial Arts"
      className="w-full h-48 object-cover"
    />
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2">MARTIAL ARTS</h3>
      <p className="text-gray-600 mb-4">
        Learn discipline, self-defense, and mental focus through martial arts.
        Our program covers various techniques and training styles, suitable
        for all skill levels.
      </p>
      <p className="text-gray-800 font-medium">
        Hanzo <span className="text-gray-500 text-sm">Trainer</span>
      </p>
      <a href="#" className="text-blue-600 font-semibold mt-2 inline-block">
        View
      </a>
    </div>
  </div>

  {/* Yoga */}
  <div className="bg-white shadow-md rounded-lg overflow-hidden">
    <img
      src="/path-to-yoga-image.jpg"
      alt="Yoga"
      className="w-full h-48 object-cover"
    />
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2">YOGA</h3>
      <p className="text-gray-600 mb-4">
        Achieve balance, flexibility, and inner peace with our yoga classes.
        Designed for all fitness levels, these sessions promote mindfulness
        and physical well-being.
      </p>
      <p className="text-gray-800 font-medium">
        Hanzo <span className="text-gray-500 text-sm">Trainer</span>
      </p>
      <a href="#" className="text-blue-600 font-semibold mt-2 inline-block">
        View
      </a>
    </div>
  </div>

  {/* Cycling */}
  <div className="bg-white shadow-md rounded-lg overflow-hidden">
    <img
      src="/path-to-cycling-image.jpg"
      alt="Cycling"
      className="w-full h-48 object-cover"
    />
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2">CYCLING</h3>
      <p className="text-gray-600 mb-4">
        Pedal your way to fitness with our high-energy cycling sessions. Build
        lower-body strength, improve endurance, and enjoy a fun and dynamic
        workout experience.
      </p>
      <p className="text-gray-800 font-medium">
        Badang <span className="text-gray-500 text-sm">Trainer</span>
      </p>
      <a href="#" className="text-blue-600 font-semibold mt-2 inline-block">
        View
      </a>
    </div>
  </div>
</div>

</div>
{/* after card 4 */}
 <div className='text-black'>
 <div className="bg-gray-50 py-16 px-8">
  <div className="text-center mb-12">
    <h2 className="text-3xl font-bold mb-2">Pricing & Packages</h2>
    <p className="text-gray-600">Select the best plan that fits your needs and start learning today!</p>
  </div>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
    {/* Basic Plan */}
    <div className="bg-white shadow-md rounded-lg p-6 text-center">
      <h3 className="text-lg font-bold mb-2">Basic Plan</h3>
      <p className="text-4xl font-extrabold text-blue-900 mb-4">$49</p>
      <ul className="text-gray-600 mb-6 space-y-2">
        <li>Personal Trainer</li>
        <li>Convenient Time</li>
        <li>Special Class</li>
        <li>Group Training</li>
        <li>Free Fitness Training</li>
      </ul>
      <button className="px-6 py-2 text-blue-900 font-semibold border border-blue-300 rounded-lg hover:bg-blue-100">
        Get Started
      </button>
    </div>

    {/* Beginner Plan */}
    <div className="bg-white shadow-md rounded-lg p-6 text-center">
      <h3 className="text-lg font-bold mb-2">Beginner Plan</h3>
      <p className="text-4xl font-extrabold text-blue-900 mb-4">$79</p>
      <ul className="text-gray-600 mb-6 space-y-2">
        <li>Personal Trainer</li>
        <li>Convenient Time</li>
        <li>Special Class</li>
        <li>Group Training</li>
        <li>Free Fitness Training</li>
      </ul>
      <button className="px-6 py-2 text-blue-900 font-semibold border border-blue-300 rounded-lg hover:bg-blue-100">
        Get Started
      </button>
    </div>

    {/* Premium Plan */}
    <div className="bg-white shadow-md rounded-lg p-6 text-center">
      <h3 className="text-lg font-bold mb-2">Premium Plan</h3>
      <p className="text-4xl font-extrabold text-blue-900 mb-4">$109</p>
      <ul className="text-gray-600 mb-6 space-y-2">
        <li>Personal Trainer</li>
        <li>Convenient Time</li>
        <li>Special Class</li>
        <li>Group Training</li>
        <li>Free Fitness Training</li>
      </ul>
      <button className="px-6 py-2 text-blue-900 font-semibold border border-blue-300 rounded-lg hover:bg-blue-100">
        Get Started
      </button>
    </div>

    {/* Ultimate Plan */}
    <div className="bg-white shadow-md rounded-lg p-6 text-center">
      <h3 className="text-lg font-bold mb-2">Ultimate Plan</h3>
      <p className="text-4xl font-extrabold text-blue-900 mb-4">$149</p>
      <ul className="text-gray-600 mb-6 space-y-2">
        <li>Personal Trainer</li>
        <li>Convenient Time</li>
        <li>Special Class</li>
        <li>Group Training</li>
        <li>Free Fitness Training</li>
      </ul>
      <button className="px-6 py-2 text-blue-900 font-semibold border border-blue-300 rounded-lg hover:bg-blue-100">
        Get Started
      </button>
    </div>
  </div>
</div>

 </div>
 {/* after card 5 */}
 
  <div className=''>
  <div className="max-w-4xl mx-auto">
    <h2 className="text-2xl font-semibold text-gray-800 text-center mb-8">
      What Our Member Say About Us?
    </h2>
    <div className="flex items-center justify-between">
      {/* Avatar Section */}
      <div className="flex items-center">
        <img
          src="https://via.placeholder.com/40"
          alt="User 1"
          className="w-10 h-10 rounded-full border-2 border-gray-300 -ml-2"
        />
        <img
          src="https://via.placeholder.com/40"
          alt="User 2"
          className="w-10 h-10 rounded-full border-2 border-gray-300 -ml-2"
        />
        <img
          src="https://via.placeholder.com/40"
          alt="User 3"
          className="w-10 h-10 rounded-full border-2 border-gray-300 -ml-2"
        />
        <span className="ml-4 text-gray-500 text-sm">10k+ Satisfied Customer</span>
      </div>

      {/* Testimonial Card */}
      <div className="relative bg-white shadow-lg rounded-lg p-6 max-w-md">
        <p className="text-gray-700 mb-4">
          “Join this fitness member, the best choice that I’ve. They’re very
          professional and give you suggestion about what food and nutrition that
          you can eat”
        </p>
        <div className="flex items-center">
          <img
            src="https://via.placeholder.com/40"
            alt="Jonathan Edward"
            className="w-10 h-10 rounded-full"
          />
          <div className="ml-4">
            <h3 className="text-gray-800 font-semibold">Jonathan Edward</h3>
            <p className="text-sm text-gray-500">Office Worker</p>
          </div>
        </div>
        {/* Dots */}
        <div className="absolute bottom-4 right-4 flex items-center space-x-2">
          <span className="w-2 h-2 bg-black rounded-full"></span>
          <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
          <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
        </div>
        {/* Arrow */}
        <span className="absolute top-1/2 right-4 transform -translate-y-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </span>
      </div>
    </div>
  </div>
  </div>


   
   
    </header>
  );
}
