
import Link from "next/link"

import Image from "next/image"
export default function navbar(){
    return(
        <header className="  h-screen bg-[url('/images/bg.png')] bg-cover bg-center max-sm:h-screen  ">
           <div className="flex justify-center gap-[3rem] bg-black p-[1rem]">
             <div className="flex items-center justify-center ">
                <Image  src="/images/logo.png" alt="Logo" width={100} height={100}/>
            </div>
            <div className="">
            <ul className="flex gap-[1rem] justify-center items-center text-[1.5rem] mt-2 text-white max-sm:text-[5px] max-sm: ">
                <li className="hover:text-blue-400"><Link href="/">Home</Link></li>
                <li className="hover:text-blue-400"><Link href="/Classes">Classes</Link></li>
                <li className="hover:text-blue-400"><Link href="/Pricing">Pricing</Link></li>
                <li className="hover:text-blue-400"><Link href="/AboutUs">About Us</Link></li>
                <li className="hover:text-blue-400"><Link href="/Contact">Contact</Link></li>
                <li className="hover:text-blue-400"><Link href="/MyLeaning">My Leaning</Link></li>
            </ul>
            </div>
            <div className="float-start gap-8 max-sm:gap-1 flex  justify-center items-center ">
            <button className="font-bold mr-8 text-white  hover:text-blue-400 max-sm:mr-1 max-sm:text-[8px]">Sign Up</button>
            <button className="bg-white p-[11px] font-bold rounded-lg hover:bg-black text-black hover:text-white border-2 max-sm:text-[10px] max-sm:gap-1 max-sm:p-0 ">Create free acount</button>

            
         
            </div>

           
         
           </div>
           {/* text */}
           <div className="p-[6rem] ">
                <h1 className="text-[3rem] font-bold">GymMotive,<br /> Where Fitness <br /> Meets Motivation</h1>
                <p className="mt-[1rem]"> Transform your body and mind with personalized training <br /> programs. Achieve your goals, stay motivated, and embrace <br /> a healthier lifestyle—all with GymMotive by your side.</p>
            </div>

        </header>
    )
}