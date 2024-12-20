import Image from "next/image"
import image1 from "public/images/image2.png"
import image2 from "public/images/image.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Schedule from "../components/Schedule"
import { faCalendarAlt, faUser, faClock, faStar, faUsers, faArrowRight, } from '@fortawesome/free-solid-svg-icons';

export default function Mylearning(){
    return(
        <header>
            <div className="bg-[url('/images/bg5.png')] bg-cover h-[397px]">
            <h2 className=" font-bold text-[2rem] text-white flex items-center h-[397px] justify-center">My Learning</h2>
            


            </div>
            <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto text-center mb-10">
    <h2 className="text-sm font-semibold text-indigo-600 uppercase">Contact</h2>
    <h1 className="text-3xl font-bold text-gray-800 mt-2">My Learning</h1>
    <p className="text-gray-500 mt-4">
      We'd love to hear from you! Fill out the form below or reach out to us via email or phone.
    </p>
  </div>
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
    {/* My Packages Section */}
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h3 className="text-2xl font-semibold text-gray-800">My Packages</h3>
      <p className="text-gray-500 mt-2 mb-6">Beginner Plan</p>
      <ul className="space-y-4">
        <li className="flex items-center space-x-4">
        <FontAwesomeIcon icon={faCalendarAlt} className="text-indigo-600 text-xl w-[30px]" />
        <span className="text-gray-600">Follow by Schedules</span>
        </li>
        <li className="flex items-center space-x-4">
        <FontAwesomeIcon icon={faUser} className="text-indigo-600 text-xl w-[30px]" />
          <span className="text-gray-600">Trainer by Hanzo</span>
        </li>
        <li className="flex items-center space-x-4">
        <FontAwesomeIcon icon={faClock} className="text-indigo-600 text-xl w-[30px]" />
          <span className="text-gray-600">Convenient Time</span>
        </li>
        <li className="flex items-center space-x-4">
        <FontAwesomeIcon icon={faUsers} className="text-indigo-600 text-xl w-[30px]" />
          <span className="text-gray-600">Special Class</span>
        </li>
        <li className="flex items-center space-x-4">
        <FontAwesomeIcon icon={faArrowRight} className="text-indigo-600 text-xl w-[30px]" />
          <span className="text-gray-600">Group Training</span>
        </li>
      </ul>
    </div>
    {/* Weight Lifting Card */}
    <div className="bg-white shadow-lg rounded-lg overflow-hidden p-[1rem]">
      <Image
        src={image1}
        alt="Weight Lifting"
        className="w-full h-50 object-cover"
      />
      <div className="p-6">
        <h4 className="text-lg font-bold text-gray-800">WEIGHT LIFTING</h4>
        <p className="text-gray-500 mt-2 text-sm">
          A small river named Duden flows by their place and supplies it with the necessary regelialia.
          It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
        </p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-indigo-600 font-medium">Hanzo</span>
          <a
            href="#"
            className="text-indigo-600 font-medium hover:underline flex items-center"
          >
            View <i className="fas fa-arrow-right ml-2"></i>
          </a>
        </div>
      </div>
    </div>
    {/* Body Building Card */}
    <div className="bg-white shadow-lg rounded-lg overflow-hidden p-[1rem]">
      <Image
        src={image2}
        alt="Body Building"
        className="w-full h-50 object-cover"
      />
      <div className="p-6">
        <h4 className="text-lg font-bold text-gray-800">BODY BUILDING</h4>
        <p className="text-gray-500 mt-2 text-sm">
          A small river named Duden flows by their place and supplies it with the necessary regelialia.
          It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
        </p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-indigo-600 font-medium">Hanzo</span>
          <a
            href="#"
            className="text-indigo-600 font-medium hover:underline flex items-center"
          >
            View <i className="fas fa-arrow-right ml-2"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
<Schedule/>

        </header>
    )

}