import Image from "next/image";
import Pic1 from "public/images/picAboutUs1.png";
import Pic2 from "public/images/PicAboutUs2.png";
import Pic3 from "public/images/Pic3AboutUs.png";  
export default function AboutUsTrainer() {
  return (
    <header>
      <div className="bg-[url('/images/AboutUsBg.png')] bg-cover h-[856px] ">
        <div className="flex items-center h-full ml-[3rem] ">
        <div className=" text-white">
          <h1 className="text-[4rem] font-extrabold">THE BEST PERSONAL <br /> TRAINERS IN GYM <br /> MOTIVE</h1>
          <p className="text-[2rem] mt-5">
            Put an end to the mid-afternoon slump, or having <br /> to bust out the
            WD40 in order to squeeze into your <br /> best  suit-trousers or dress
          </p>
        </div>
        </div>
      </div>
      {/* body */}
      <div className="">
        <h1 className="text-[3rem] text-blue-700 font-extrabold text-center ">Who are we? </h1>
      </div>
      {/* body 1 */}
      <div className="flex gap-[5rem] p-[3rem]">
        <div>
            <p className="text-wrap text-center ">
            I’m guessing you’ve either ended up here from a quick  google search for a personal trainer in Milton Keynes, via a recommendation from a friend, or navigated your way over from one of our hilarious, insightful & poignant social media posts So now you’re looking around, trying to figure out if we’re the answer you’re looking for (and frankly, we’d love to know if we are too)So let’s start simple: who are we?The Armoury Coaching Studio is a Small Group & 1-2-1 Personal Training Facility in Milton Keynes. We provide bespoke training, nutrition guidance and a mix of both accountability and community that strives to make fitness and health a valued and enjoyable part of your life, rather than a chore
            </p>
        </div>
        <div>
            <Image src={Pic1} alt=""/>
        </div>

      </div>
      {/* body 2 */}
      <div className="bg-blue-100">
        <h1 className="text-[4rem] text-center font-extrabold text-blue-600">ARE WE RIGHT FOR YOU?
        </h1>
        <div className="flex gap-[5rem] p-[3rem]">
            <Image src={Pic2} alt="" width={300}/>
            <p>How do you know if we’re the right Personal Trainers in Milton Keynes to help you get from point A (where you are now), to point B (where you want to be)?For over a decade we’ve been helping men and women achieve results they never thought were possible, often after years of frustration and empty promises from solutions they’d tried previouslyWe work with any man or woman that are willing to step up, and make a change</p>
        </div>
      </div>
      {/* body 3 */}
      <div>
        <h1 className="text-[4rem] font-extrabold text-center text-blue-600">What We Do?
        </h1>
        <div className="flex gap-[5rem] p-[3rem]">
            <p className="text-wrap">Our coaching options have been designed from the ground up to put you and your goals first. From one-on-one training in your private studio, to our renowned small group personal training and bespoke nutrition packages- everything we offer has been battle-tested over a decade in the field, to ensure the results you achieve are not only impressive in the short term- but also sustainable for life</p>
            <Image src={Pic3} alt="" width={500}/>
        </div>
      </div>
    </header>
  );
}
