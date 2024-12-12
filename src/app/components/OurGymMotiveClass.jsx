export default function OurGymMotiveClass(){
    return(
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

    );
}