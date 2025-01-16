// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
"use client";
import OurGymMotiveClass from "../components/OurGymMotiveClass";
import Pricing from "../components/Pricing";
import Image from "next/image";
import rectangle1 from "public/images/Rectangle1.png";
import rectangle2 from "public/images/Rectangle2.png";
import rectangle3 from "public/images/Rectangle3.png";
import key1 from "public/images/key1.png";
import key2 from "public/images/key2.png";
import key3 from "public/images/key3.png";
import OurGymMotiveTrainer from "../components/OurGymMotiveTrainer";
import pf1 from "public/images/pf1.png";
import pf2 from "public/images/pf2.png";
import pf3 from "public/images/pf3.png";
import Link from "next/link";
import { useEffect } from "react";

// import {} from "@fortawesome/free-solid-svg-icons"
export default function Home() {
  useEffect(() => {
    // Select all elements with the 'animate-on-scroll' class
    const elements = document.querySelectorAll(".animate-on-scroll");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add animation classes when element is visible
            entry.target.classList.add("opacity-100", "animate-fadeInUp");
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => {
      observer.observe(el);
    });

    // Cleanup observer on component unmount
    return () => observer.disconnect();
  }, []);

  return (
    <header className="bg-white ">
      {/* bg header */}
      <div className="  h-screen bg-[url('/images/bgTraineeHome.png')] bg-cover bg-center max-sm:h-screen animate-fadeIn  ">
        {/* text */}
        <div className="p-[6rem] text-white ">
          <h1 className="text-[3rem] font-bold">
            GymMotive,
            <br /> Where Fitness <br /> Meets Motivation
          </h1>
          <p className="mt-[1rem]">
            {" "}
            Transform your body and mind with personalized training <br />{" "}
            programs. Achieve your goals, stay motivated, and embrace <br /> a
            healthier lifestyle—all with GymMotive by your side.
          </p>
        </div>
      </div>
      <div className="animate-fadeIn">
        <h1 className="text-black flex justify-center font-bold text-[2rem] p-[10px]">
          Explore Our Program
        </h1>
      </div>
      {/* box 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        {/* Card 1 */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <div className="text-blue-900 text-3xl mb-4">
            <i className="fas fa-apple-alt"></i>{" "}
            {/* Replace with FontAwesome or other icon */}
          </div>
          <h3 className="text-xl font-bold text-blue-900 mb-2">Nutritions</h3>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            venenatis, nunc a pretium viverra.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <div className="text-blue-900 text-3xl mb-4">
            <i className="fas fa-heartbeat"></i>{" "}
            {/* Replace with FontAwesome or other icon */}
          </div>
          <h3 className="text-xl font-bold text-blue-900 mb-2">
            Cardio Strength
          </h3>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            venenatis, nunc a pretium viverra.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <div className="text-blue-900 text-3xl mb-4">
            <i className="fas fa-weight"></i>{" "}
            {/* Replace with FontAwesome or other icon */}
          </div>
          <h3 className="text-xl font-bold text-blue-900 mb-2">Fat Lose</h3>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            venenatis, nunc a pretium viverra.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <div className="text-blue-900 text-3xl mb-4">
            <i className="fas fa-dumbbell"></i>{" "}
            {/* Replace with FontAwesome or other icon */}
          </div>
          <h3 className="text-xl font-bold text-blue-900 mb-2">Muscle Gain</h3>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            venenatis, nunc a pretium viverra.
          </p>
        </div>
      </div>
      {/* after card */}

      <div className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16 py-12 bg-white animate-slide-in-right ">
        {/* Left Section with Images */}
        <div className="space-y-4 lg:space-y-0 lg:space-x-4 lg:flex-row  ">
          <div className="flex-shrink-0 ">
            <Image
              src={rectangle1}
              alt="Woman Lifting Weights"
              className="rounded-lg shadow-lg w-80 h-100 object-cover "
            />
          </div>
          <div className="flex-shrink-0  mt-[8rem] ml-[10rem]">
            <Image
              src={rectangle2}
              alt="Man Working Out"
              className="rounded-lg shadow-lg w-60 h-40 object-cover  ml-[9rem]"
            />
          </div>
          <div className="flex-shrink-0  mt-[10rem]">
            <Image
              src={rectangle3}
              alt="Woman Squatting Weights"
              className="rounded-lg shadow-lg w-80 h-100 object-cover"
            />
          </div>
        </div>

        {/* Right Section with Text */}
        <div className="mt-8 lg:mt-0 ml-[10rem] text-center lg:text-left ">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Transform your physique with our{" "}
            <span className="text-blue-700">fitness plan.</span>
          </h2>
          <p className="text-gray-600 mb-6">
            We are an online-based Gym E-Commerce website, and also provide the
            best personal training experts as training planner, diet planner,
            and more. We have a really wide range of gym equipment and also
            supplements.
          </p>
          <ul className="list-none space-y-2 mb-6">
            <li className="flex items-center">
              <span className="text-blue-600 mr-2">
                <i className="fas fa-check-circle"></i>
              </span>
              <span className="text-gray-800">
                Increase Muscle and Strength
              </span>
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
          <h4 className="text-blue-600 text-lg font-semibold">
            Why choose us?
          </h4>
          <h2 className="text-3xl font-bold text-gray-800 mt-2">
            Our Key Features See Some
          </h2>
          <p className="text-gray-600 mt-2">
            Lets join our famous class, the GymMotive provided will definitely
            be useful for you.
          </p>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center p-[1rem]">
            <Image
              src={key1}
              alt="Get In The Groove"
              className="w-full h-50 object-contain mt-[15px] rounded-xl"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                GET IN THE GROOVE
              </h3>
              <p className="text-gray-600">
                Use a past defeat as a motivator. Remind yourself you have.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center p-[1rem]">
            <Image
              src={key2}
              alt="Get Fit Don't Quit"
              className="w-full h-50 object-contain mt-[15px] rounded-xl"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                GET FIT DONT QUIT
              </h3>
              <p className="text-gray-600">
                Success isn’t really that difficult. There is a significant?
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center p-[1rem]">
            <Image
              src={key3}
              alt="Work Your Butt Off"
              className="w-full h-50 object-contain mt-[15px] rounded-xl"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                WORK YOUR BUTT OFF
              </h3>
              <p className="text-gray-600">
                For those of you who are serious about having more.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* our gym motive class */}
      {/* text */}
      <div className=" text-black text-center  mt-8  ">
        <h1 className="text-[2rem] font-bold">Our GymMotive Classes</h1>
        <p>
          Lets join our famous class, the GymMotive provided will definitely be
          useful for you.
        </p>
      </div>
      <div className="animate-fadeIn animate-on-scroll opacity-0">
        <OurGymMotiveClass />
      </div>
      {/* pricing */}
      {/* our gym trainer  */}
      <OurGymMotiveTrainer />
      <Pricing />
      {/* after card 5 */}

      <div className="">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-800 text-center mb-8">
            What Our Member Say About Us?
          </h2>
          <div className="flex items-center justify-between">
            {/* Avatar Section */}
            <div className="flex items-center">
              <Image
                src={pf1}
                alt="User 1"
                className="w-10 h-10 rounded-full border-2 border-gray-300 -ml-2"
              />
              <Image
                src={pf2}
                alt="User 2"
                className="w-10 h-10 rounded-full border-2 border-gray-300 -ml-2"
              />
              <Image
                src={pf3}
                alt="User 3"
                className="w-10 h-10 rounded-full border-2 border-gray-300 -ml-2"
              />
              <span className="ml-4 text-gray-500 text-sm">
                10k+ Satisfied Customer
              </span>
            </div>

            {/* Testimonial Card */}
            <div className="relative bg-white shadow-lg rounded-lg p-6 max-w-md">
              <p className="text-gray-700 mb-4">
                “Join this fitness member, the best choice that I’ve. They’re
                very professional and give you suggestion about what food and
                nutrition that you can eat”
              </p>
              <div className="flex items-center">
                <Image
                  src={pf2}
                  alt="Jonathan Edward"
                  className="w-10 h-10 rounded-full"
                />
                <div className="ml-4">
                  <h3 className="text-gray-800 font-semibold">
                    Jonathan Edward
                  </h3>
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
