"use client";
import { useParams } from 'next/navigation'; // For dynamic routes in Next.js 13+
import OurGymMotiveClass from "src/app/components/OurGymMotiveClass";

const TraineeClasses = () => {
  // const { userId } = useParams(); // Capture userId from the URL

  // // You can also add a fallback if userId doesn't exist, but this should work correctly
  // if (!userId) {
  //   return <div>Loading...</div>; // Show loading or handle this error
  // }

  return (
    <header className="bg-white">
      <div className="bg-[url('/images/bg2.png')] bg-cover h-[351px]">
        <h1 className="font-bold flex justify-center items-center h-[351px] text-[2rem] text-white">
          GymMotive Classes
        </h1>
      </div>

      {/* After background */}
      <div className="bg-white">
        {/* Text */}
        <div className="text-black text-center mt-8 ">
          <h1 className="text-[2rem] font-bold text-black">Our GymMotive Classes</h1>
          <p className='text-black'>Let s join our famous class, the GymMotive provided will definitely be useful for you.</p>
        </div>

        {/* Pass the userId to the class component */}
        <OurGymMotiveClass /> 
      </div>
    </header>
  );
};

export default TraineeClasses;
