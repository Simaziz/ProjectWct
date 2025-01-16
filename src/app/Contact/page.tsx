import image from "next/image"
import bg5 from "public/images/bg5.png"
export default function Contact(){
    return(
        <header>
            <div className="bg-[url('/images/bg5.png')] bg-cover h-[397px]">
            <h2 className=" font-bold text-[2rem] text-white flex items-center h-[397px] justify-center">GymMotive Contact</h2>

            </div>
            <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto text-center mb-10">
    <h2 className="text-sm font-semibold text-indigo-600 uppercase">Contact</h2>
    <h1 className="text-3xl font-bold text-gray-800 mt-2">Contact Us</h1>
    <p className="text-gray-500 mt-4">
      We love to hear from you! Fill out the form below or reach out to us via email or phone.
    </p>
  </div>
  <div className="bg-white shadow-lg rounded-lg p-8 grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
    {/* Contact Information */}
    <div>
      <h3 className="text-2xl font-semibold text-gray-800">Contact Information</h3>
      <p className="text-gray-500 mt-2 mb-6">Say something to start a live chat!</p>
      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <i className="fas fa-phone-alt text-indigo-600 text-xl"></i>
          <span className="text-gray-600">+1012 3456 789</span>
        </div>
        <div className="flex items-center space-x-4">
          <i className="fas fa-envelope text-indigo-600 text-xl"></i>
          <span className="text-gray-600">GymMotive@gmail.com</span>
        </div>
        <div className="flex items-start space-x-4">
          <i className="fas fa-map-marker-alt text-indigo-600 text-xl"></i>
          <span className="text-gray-600">
            Faculty of Engineering, STEM Building, <br />
            Royal University of Phnom Penh (Campus 1), <br />
            Russian Federation Blvd (110), Phnom Penh.
          </span>
        </div>
      </div>
    </div>
    {/* Contact Form */}
    <form className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-gray-700 font-medium">Your Name</label>
        <input
          type="text"
          id="name"
          placeholder="Enter your name"
          className="w-full mt-2 px-4 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-gray-700 font-medium">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          className="w-full mt-2 px-4 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-gray-700 font-medium">Your Message</label>
        <textarea
          id="message"
          placeholder="Write your message..."
          // rows="5"
          className="w-full mt-2 px-4 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-indigo-600 text-white px-6 py-2 rounded-md shadow hover:bg-indigo-700 transition"
      >
        Send Message
      </button>
    </form>
  </div>
</div>



        </header>
    )

}