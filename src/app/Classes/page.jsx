import OurGymMotiveClass from "../components/OurGymMotiveClass";
export default function Home() {
    return (
     <header className="bg-white " >
      <div className="bg-[url('/images/bg2.png')] h-[351px]  ">
      <h1 className="font-bold  flex justify-center items-center h-[351px] text-[2rem] text-white"> GymMotive Classes</h1>

      </div>
      {/* after bg */}
      <div className="bg-white ">
        {/* text */}
        <div className=" text-black text-center  mt-8 ">
        <h1 className="text-[2rem] font-bold" >Our GymMotive Classes</h1>
        <p>Let's join our famous class, the GymMotive provided will definitely be useful for you.</p>

        </div>
        <OurGymMotiveClass/> 

    
      </div>
     
   
     </header>
        
    
    );
  }