import Image from "next/image"
import Trainer1 from "public/images/trainer1.png"
import Trainer2 from "public/images/Trainer2.png"
import Trainer3 from "public/images/Trainer3.png"
import Trainer4 from "public/images/Trainer4.png"
export default function OurGymMotiveTrainer(){
    return(
      <div className="bg-gray-50 py-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800">Our Trainers</h2>
        <p className="text-gray-500">These are our famous trainers in GymMotive.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        {/* Trainer Card 1 */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <Image
            src={Trainer1}
            alt="Mellissa Doe"
            className="w-full h-50 object-cover rounded-t-lg"
          />
          <h3 className="text-xl font-semibold text-gray-800 mt-4">Mellissa Doe</h3>
          <p className="text-gray-500 mb-4">Martial arts and Yoga.</p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-gray-500 hover:text-gray-700">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
        {/* Trainer Card 2 */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <Image
            src={Trainer2}
            alt="Candice Mcdonald"
            className="w-full h-50 object-cover rounded-t-lg"
          />
          <h3 className="text-xl font-semibold text-gray-800 mt-4">Candice Mcdonald</h3>
          <p className="text-gray-500 mb-4">Cycling and Cardio.</p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-gray-500 hover:text-gray-700">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
        {/* Trainer Card 3 */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <Image
            src={Trainer3}
            alt="Anne Smith"
            className="w-full h-50 object-cover rounded-t-lg"
          />
          <h3 className="text-xl font-semibold text-gray-800 mt-4">Anne Smith</h3>
          <p className="text-gray-500 mb-4">Trainer Weight lifting.</p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-gray-500 hover:text-gray-700">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
        {/* Trainer Card 4 */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <Image
            src={Trainer4}
            alt="Gwen Bass"
            className="w-full h-50 object-cover rounded-t-lg"
          />
          <h3 className="text-xl font-semibold text-gray-800 mt-4">Gwen Bass</h3>
          <p className="text-gray-500 mb-4">Trainer Body building.</p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-gray-500 hover:text-gray-700">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
    
    
    )
}