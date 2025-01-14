"use client";
import Link from "next/link";

import Image from "next/image";
import logo from "public/images/logo.png";
export default function navbar() {
  return (
    <header>
      <div className="flex justify-between gap-[3rem] bg-white px-[5rem] py-[1rem] fixed w-[100%]">
        <div className="flex items-center justify-center ">
          <Image src={logo} alt="Logo" width={100} height={100} />
        </div>
        <div className="">
          <ul className="flex gap-[3rem] justify-center items-center text-[1.5rem] mt-2 text-black max-sm:text-[5px] max-sm: ">
            <li className="hover:text-blue-400">
              <Link href="/">Home</Link>
            </li>
            {/* <li className="hover:text-blue-400">
              <Link href="/Classes">Classes</Link>
            </li> */}
            {/* <li className="hover:text-blue-400"><Link href="/Pricing">Pricing</Link></li> */}
            <li className="hover:text-blue-400">
              <Link href="/AboutUs">About Us</Link>
            </li>
            <li className="hover:text-blue-400">
              <Link href="/Contact">Contact</Link>
            </li>
            {/* <li className="hover:text-blue-400"><Link href="/Mylearning">My Leaning</Link></li> */}
          </ul>
        </div>
        <div className="float-start gap-2 max-sm:gap-1 flex  justify-center items-center ">
          <button className="font-bold mr-1 text-black  hover:text-blue-400 max-sm:mr-1 max-sm:text-[8px]">
            <Link href="/signIn">Sign In</Link>
          </button>
          <button className="bg-white p-[11px] font-bold rounded-lg hover:bg-black text-black hover:text-white border-2 max-sm:text-[10px] max-sm:gap-1 max-sm:p-0 ">
            <Link href="/signUp">Create free acount</Link>
          </button>
        </div>
      </div>
    </header>
  );
}
