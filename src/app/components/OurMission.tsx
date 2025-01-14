import Image from "next/image"
import mission from "public/images/mission.png"
import vision from "public/images/vision.png"
import mental from "public/images/mentel.png"
import profess from "public/images/Profess.png"
export default function OurMission(){
    return(
        <div>
            <div className="py-12 bg-gray-100">n
  <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">About Us</h2>
  <h3 className="text-2xl font-semibold text-center text-gray-600 mb-8">
    Mission & Vision
  </h3>
  <div className="max-w-5xl mx-auto">
    <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
      <Image
        src={mission}
        alt="Mission & Vision Banner"
        className="rounded-lg shadow-lg float-right"
      />
      <div>
        <h4 className="text-xl font-semibold text-gray-800 mb-2">Mission</h4>
        <p className="text-gray-600 mb-4">
          At GymMotive, our mission is to empower individuals to achieve their
          fitness goals by providing personalized training, expert guidance, and
          an engaging community. We strive to make fitness accessible and
          motivating through innovative and seamless online experiences,
          ensuring each member has the support they need to lead a healthier
          lifestyle.
        </p>
        <h4 className="text-xl font-semibold text-gray-800 mb-2">Vision</h4>
        <p className="text-gray-600">
          Our vision is to become the go-to fitness platform that inspires and
          motivates people worldwide to take charge of their physical well-being.
          We aim to revolutionize how individuals connect with fitness, fostering
          a global community that is committed to growth, strength, and
          well-being.
        </p>
        
        
      </div>
     
    </div>
    {/* <div className="grid  gap-8 items-center mb-16">

  
      <div>
        <h4 className="text-xl font-semibold text-gray-800 mb-2">Mission</h4>
        <p className="text-gray-600 mb-4 float-right">
        Gyms provide access to a wide range of fitness equipment, including treadmills, weights, resistance machines, and more, which cater to various aspects of physical fitness like strength, endurance, and flexibility. Regular exercise at the gym can help with weight management, reduce the risk of chronic diseases like heart disease and diabetes, and improve bone density through weight-bearing activities. Structured workouts contribute to overall stamina, making daily tasks easier and boosting physical vitality.
        </p>
   

        
        
      </div>
     
    </div> */}
    <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
     
      <div>
        <h4 className="text-2xl text-[#102248] font-semibold mb-2">Improved Physical Health</h4>
        <p className="text-gray-600 mb-4">
        Exercising at the gym promotes mental health by reducing stress and anxiety levels through the release of endorphins, the body’s natural mood-enhancing chemicals. Regular physical activity improves self-esteem as individuals achieve fitness goals and develop a healthier body image. It also aids in better sleep and cognitive function, helping with focus, memory, and overall productivity. Group activities at the gym can also foster a sense of belonging and reduce feelings of loneliness.        </p>

      </div>
      <Image
        src={vision}
        alt="Mission & Vision Banner"
        className="rounded-lg shadow-lg float-right"
      />
     
    </div>
    <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
      <Image
        src={mental}
        alt="Mission & Vision Banner"
        className="rounded-lg shadow-lg float-right"
      />
      <div>
        <h4 className="text-2xl font-semibold text-[#102248]  mb-2">Mental Well-Being</h4>
        <p className="text-gray-600 mb-4">
        Exercising at the gym promotes mental health by reducing stress and anxiety levels through the release of endorphins, the body’s natural mood-enhancing chemicals. Regular physical activity improves self-esteem as individuals achieve fitness goals and develop a healthier body image. It also aids in better sleep and cognitive function, helping with focus, memory, and overall productivity. Group activities at the gym can also foster a sense of belonging and reduce feelings of loneliness.        </p>

        
        
      </div>
     
    </div>
    <div className="grid md:grid-cols-2 gap-8 items-center mb-16">

      <div>
        <h4 className="text-2xl font-semibold text-[#102248]  mb-2">Professional Guidance and Motivation</h4>
        <p className="text-gray-600 mb-4">
        Exercising at the gym promotes mental health by reducing stress and anxiety levels through the release of endorphins, the body’s natural mood-enhancing chemicals. Regular physical activity improves self-esteem as individuals achieve fitness goals and develop a healthier body image. It also aids in better sleep and cognitive function, helping with focus, memory, and overall productivity. Group activities at the gym can also foster a sense of belonging and reduce feelings of loneliness.        </p>

      </div>
      <Image
        src={profess}
        alt="Mission & Vision Banner"
        className="rounded-lg shadow-lg float-right"
      />
     
    </div>
   

  </div>


</div>

        </div>
    )
}