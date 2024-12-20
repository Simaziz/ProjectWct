import OurMission from "../components/OurMission"
import Founder from "../components/founder"
export default function aboutus(){
    return(
       <header>
        <div className="bg-[url('/images/bg4.png')] h-[814]">
        {/* text */}
        <div className="h-[814] p-[13rem]">
        <h1 className=" font-bold text-[3rem] mb-5 ">About GymMotive</h1>
        <p>GymMotive is a fitness platform designed to help you achieve <br /> your health and wellness goals. We offer personalized training <br /> programs, expert guidance, and a supportive community to keep <br /> you motivated. Whether you're just starting out or looking to <br /> advance your fitness journey, GymMotive is here to provide the <br /> tools and support you need to succeed.</p>
        </div>

        </div>
        {/* after bg */}
        <div>
        <OurMission/>
        </div>
        {/* afterMission */}
        <div>
        <Founder/>
        </div>
       </header>
    )
}