import React from "react";
import Image from "next/image"; // Import Image component from Next.js
import Navbar1 from "../components/Nevbar1"; // Ensure this path matches your structure
import banner from 'public/images/yoga.png'
import mission from 'public/images/01.png'; // Importing mission
import scc from 'public/images/beni.jpg'
import trainer from 'public/images/Trainer3.png'

const Page = () => {
  return (
    <div>
      <Navbar1 />
      <main>
      <section className="relative">
        <div className="absolute inset-0 h-full w-full">
          {/* Use Next.js Image component */}
          <Image
            src={banner} // Use the imported image
            alt="Background"
            layout="fill" // Makes the image cover the container
            objectFit="cover" // Ensures the image covers the container
            priority={true} // Optimizes the image for fast loading
          />
        </div>

        <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8 text-blue-950">
          <div className="max-w-xl text-left sm:text-left">
            <h1 className="text-2xl font-bold sm:text-6xl">
            YOGA
            </h1>

            <p className="mt-4 max-w-lg sm:text-xl/relaxed">
            Yoga is a holistic practice that originated in ancient India, combining physical postures, breathing techniques, and meditation to promote physical, mental, and spiritual well-being. It’s suitable for all ages and fitness levels, making it a versatile way to enhance overall health.
            </p>

          </div>
        </div>
      </section>


      </main>
      <div className="w-full max-w-auto mx-auto py-8 px-6 lg:px-12 bg-gray-50">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-blue-950 text-sm font-bold tracking-wide uppercase">
          Yoga Classes
          </p>
          <h2 className="text-blue-950 text-4xl font-bold leading-tight">
            Mission & Vision
          </h2>
          <p className="text-[#667084] text-lg mt-4">
          For Yoga, here are suggestions for the mission and vision statements:
          </p>
        </div>

        {/* Content Area */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <Image
              className="rounded-lg shadow-md"
              src={mission} // Use the imported mission image
              alt="Yoga Classes"
              width={450} // Set a fixed width
              height={400} // Set a fixed height
            />
          </div>

          {/* Text Content Section */}
          <div className="w-full lg:w-1/2">
            {/* Mission Section */}
            <div className="mb-8">
              <h3 className="text-[#141414] text-4xl font-semibold mb-4">
                Mission
              </h3>
              <p className="text-[#474747] text-base lg:text-lg leading-relaxed">
              To harmonize the body, mind, and spirit by promoting physical wellness, mental clarity, and inner peace. Yoga seeks to empower individuals with self-awareness and holistic well-being while fostering compassion and unity in communities.
              </p>
            </div>

            {/* Vision Section */}
            <div>
              <h3 className="text-[#141414] text-4xl font-semibold mb-4">
                Vision
              </h3>
              <p className="text-[#474747] text-base lg:text-lg leading-relaxed">
              To create a balanced world where yoga is accessible to all, promoting collective health, mindfulness, and sustainable living. Yoga envisions a global community thriving in harmony, connected through self-awareness and shared purpose.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-auto px-8 py-12 bg-gray-50 mx-auto flex items-center justify-center">
      <div className="w-full max-w-[1227px] flex flex-col lg:flex-row items-center gap-8 relative">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <h2 className="text-[#102249] text-[36px] lg:text-[40px] font-semibold leading-tight">
          Benefits of Yoga
          </h2>
          <p className="text-[#474747] text-base lg:text-lg leading-relaxed">
          Yoga improves strength, flexibility, balance, and endurance while promoting mental clarity, focus, and stress relief through mindfulness and breathing. It encourages self-awareness, emotional stability, and personal growth, fostering discipline, patience, and resilience. Yoga offers a holistic approach to wellness, benefiting both body and mind.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            className="rounded-lg shadow-md"
            src={scc} // Replace with the appropriate imported image
            alt="Martial Arts Benefits"
            width={519}
            height={316}
            priority={true}
          />
        </div>
      </div>
    </div>
    <div className="w-full max-w-auto h-[476px] shadow-md flex justify-center items-center px-6 py-8 mx-auto overflow-hidden bg-gray-50">
  <div className="w-full max-w-[1105px] flex flex-col lg:flex-row items-center gap-8 relative">
    
    {/* Image Section */}
    <div className="w-full lg:w-1/3 flex justify-center">
    <Image
  className="w-[303px] h-[360px] rounded-[5px] shadow-md"
  src={trainer}
  alt="Trainer"
  width={303}
  height={360}
/>
    </div>

    {/* Text Section */}
    <div className="w-full lg:w-2/3 flex flex-col justify-start items-start gap-4">
      <div className="text-[#102249] text-base font-semibold  leading-normal">
        Trainer
      </div>
      <div className="text-[#102249] text-[36px] lg:text-[40px] font-semibold leading-tight">
      Anne Smith
      </div>
      <div className="text-[#474747] text-base lg:text-lg leading-relaxed">
      Anne Smith is a yoga instructor specializing in various yoga practices. She focuses on enhancing physical strength, flexibility, balance, and mindfulness, while promoting mental clarity, emotional stability, and stress relief. Through her classes, Anne empowers students to develop self-awareness, cultivate inner peace, and build resilience, encouraging both physical and mental well-being.
      </div>
    </div>
  </div>
    </div>

    <div className="w-full h-[594px] bg-gray-50 relative px-4 lg:px-0 py-12">
  {/* Review Title Section */}
  <div className="w-full flex flex-col items-center text-center mb-8">
    <div className="text-[#102249] text-base font-semibold  leading-normal">Reviews</div>
    <div className="text-[#102249] text-[36px] lg:text-[33px] font-semibold leading-tight">
      Reviews for Yoga Classes
    </div>
  </div>

  {/* Review Form Section */}
  <div className="w-full max-w-screen-lg mx-auto relative">
    <div className="w-full bg-white rounded-lg shadow-xl p-8">

      {/* Review Title */}
      <div className="w-full flex justify-start mb-4">
        <div className="text-[#102249] text-[28px] font-semibold f">What did you think?</div>
      </div>

      {/* Review Input */}
      <div className="w-full mb-4">
        <textarea
          className="w-full h-[150px] px-4 py-2 text-black text-lg font-normal  border border-[#bdbdbd] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#102249]"
          placeholder="Write a review"
        ></textarea>
      </div>

      {/* Review Guidelines */}
      <div className="w-full flex justify-between text-[#8d8d8d] text-sm font-medium  leading-tight">
        <span>Tell others what you thought of this class</span>
        <span className="text-xs text-[#333333]">Review must be at least 10 words</span>
      </div>

      {/* Send Message Button */}
<div className="w-full flex justify-end mt-6">
  <button className="w-[214.30px] h-[56.27px] bg-[#102249] text-white rounded-[5px] shadow-md text-center text-base font-medium hover:bg-[#1F3A59] transition duration-300">
    Send Message
  </button>
</div>
    </div>
  </div>
</div>

<div className="w-full max-w-auto relative bg-gray-50 px-6 py-2">
  <div className="w-full max-w-[1276px] mx-auto flex flex-col items-center gap-8 relative">
    
    {/* Header Section */}
    <div className="w-full text-center">
      <h2 className="text-[#102249] text-4xl font-semibold leading-[44px]">
        Reviewers of Yoga Classes
      </h2>
      <p className="text-[#101828]/80 text-xl font-normal  leading-[30px] mt-2">
        Here are all of the reviewers of Yoga Classes.
      </p>
    </div>

    {/* Review Cards - Flex Container for 3 Columns */}
    <div className="w-full flex justify-between gap-6 mt-2 mb-8 ">
      
      {/* Review 1 */}
      <div className="w-1/3 p-6 bg-white rounded-2xl border border-[#E5E5E5] shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
        <p className="text-[#1e1e1e] text-lg font-normal font-['DM Sans'] leading-normal">
          It spent the time on the history of fonts and how to choose colors, and tools to mock up an app. Will try to find something that goes into user experience, for many of us the design colors/fonts/etc. are already a brand standard.
        </p>
        <div className="flex items-center gap-4 mt-4">
          <div className="w-10 h-10 bg-[#1e1e1e] rounded-full text-center text-white text-sm font-semibold flex items-center justify-center">
            AK
          </div>
          <div className="text-black text-lg font-semibold font-['Inter'] leading-[30px]">
            Arial Kate
          </div>
        </div>
      </div>

      {/* Review 2 */}
      <div className="w-1/3 p-6 bg-white rounded-2xl border border-[#E5E5E5] shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
        <p className="text-[#1e1e1e] text-lg font-normal font-['DM Sans'] leading-normal">
          The course is overall a good course, but its a little outdated. Some of the links seem to be missing. I enjoyed the happy voice talking through the entire course and I did learn a few new things. I especially appreciated The 7th section, putting it all together.
        </p>
        <div className="flex items-center gap-4 mt-4">
          <div className="w-10 h-10 bg-[#1e1e1e] rounded-full text-center text-white text-sm font-semibold flex items-center justify-center">
            CR
          </div>
          <div className="text-black text-lg font-semibold font-['Inter'] leading-[30px]">
            Charlotte Reed
          </div>
        </div>
      </div>

      {/* Review 3 */}
      <div className="w-1/3 p-6 bg-white rounded-2xl border border-[#E5E5E5] shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
        <p className="text-[#1e1e1e] text-lg font-normal font-['DM Sans'] leading-normal">
          Id say the first half of this course is rich in insights and data. Lots and lots of stuff to learn- some things I didnt know! But the second half and some of the tooling is ancient. Very out of date. Im not sure any of the tools he talked about are still widely used.
        </p>
        <div className="flex items-center gap-4 mt-4">
          <div className="w-10 h-10 bg-[#1e1e1e] rounded-full text-center text-white text-sm font-semibold flex items-center justify-center">
            AT
          </div>
          <div className="text-black text-lg font-semibold font-['Inter'] leading-[30px]">
            Ava Thompson
          </div>
        </div>
      </div>

    </div>
  </div>
</div>


    </div>
  );
};

export default Page;
