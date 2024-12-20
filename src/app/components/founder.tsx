import Image from "next/image"
import Aziz from "public/images/Aziz.jpg"
export default function Founder(){
    return(
        <div className="px-10 bg-white">
            <div className=" text-gray-800">
  <div className="container mx-auto py-12">
    <div className="text-center mb-8">
      <h1 className="text-3xl font-bold">Our Founder</h1>
      <p className="text-gray-600">These are our Founder of GymMotive.</p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
     
      <div className="bg-white shadow-lg rounded-lg p-6 text-center">
        <Image src={Aziz} alt="aziz" className="w-24 h-24 object-cover rounded-full mx-auto mb-4"/>
        <h2 className="text-xl font-semibold">Sim Aziz</h2>
        <p className="text-gray-600">Martial arts and Yoga.</p>
        <div className="flex justify-center mt-4 space-x-4">
          <a href="#" className="text-gray-500 hover:text-blue-500">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="text-gray-500 hover:text-blue-500">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
      
      <div className="bg-white shadow-lg rounded-lg p-6 text-center">
        <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
        <h2 className="text-xl font-semibold">Sovann Sothearith</h2>
        <p className="text-gray-600">Cycling and Cardio.</p>
        <div className="flex justify-center mt-4 space-x-4">
          <a href="#" className="text-gray-500 hover:text-blue-500">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="text-gray-500 hover:text-blue-500">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
  
      <div className="bg-white shadow-lg rounded-lg p-6 text-center">
        <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
        <h2 className="text-xl font-semibold">Heng Chansophea</h2>
        <p className="text-gray-600">Trainer Weight lifting.</p>
        <div className="flex justify-center mt-4 space-x-4">
          <a href="#" className="text-gray-500 hover:text-blue-500">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="text-gray-500 hover:text-blue-500">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
      
      <div className="bg-white shadow-lg rounded-lg p-6 text-center">
        <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
        <h2 className="text-xl font-semibold">Sinh Porsou</h2>
        <p className="text-gray-600">Trainer Body building.</p>
        <div className="flex justify-center mt-4 space-x-4">
          <a href="#" className="text-gray-500 hover:text-blue-500">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="text-gray-500 hover:text-blue-500">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
  <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
<div/>

        </div>
        </div>


    )
}