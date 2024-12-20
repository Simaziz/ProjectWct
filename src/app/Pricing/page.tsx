import PricingC from "../components/Pricing";
import OurGymMotiveTrainer from "../components/OurGymMotiveTrainer";
import Schedule from "../components/Schedule";
export default function Pricing (){
    return(
        <header>
            <div className="bg-[url('/images/bg3.png')] h-[397px] ">
            <h1 className="text-white text-[2rem] font-bold flex justify-center items-center h-[397px] ">GymMotive Pricing </h1>

            </div>
            {/* after bg */}
            <div>
                <PricingC/>
            </div>
            {/* after price */}
            <div>
                <OurGymMotiveTrainer/>
            </div>
            {/* after Trainer */}
            <div>
                <Schedule/>

            </div>
        </header>

    );
}