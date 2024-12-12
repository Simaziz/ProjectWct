export default function footer(){
    return(
       
     <div className="">
<footer className="bg-blue-900 text-white py-10 px-20 ">
  <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
    {/* Logo and Address Section */}
    <div>
      <h3 className="text-lg font-semibold mb-4">GymMotive</h3>
      <p className="text-sm">
        Faculty of Engineering, STEM Building,<br />
        Royal University of Phnom Penh (Campus 1),<br />
        Russian Federation Blvd (110), Phnom Penh.
      </p>
    </div>
    
    {/* Company Links */}
    <div>
      <h4 className="text-sm font-semibold mb-4">Company</h4>
      <ul className="space-y-2">
        <li><a href="#" className="text-sm hover:underline">About us</a></li>
        <li><a href="#" className="text-sm hover:underline">Careers</a></li>
        <li><a href="#" className="text-sm hover:underline">News</a></li>
      </ul>
    </div>
    
    {/* Social Links */}
    <div>
      <h4 className="text-sm font-semibold mb-4">Social</h4>
      <ul className="space-y-2">
        <li><a href="#" className="text-sm hover:underline">Facebook</a></li>
        <li><a href="#" className="text-sm hover:underline">Youtube</a></li>
        <li><a href="#" className="text-sm hover:underline">GitHub</a></li>
        <li><a href="#" className="text-sm hover:underline">Email</a></li>
      </ul>
    </div>
  </div>
  {/* Bottom Bar */}
  <div className="border-t border-blue-800 mt-8 pt-6 flex flex-col md:flex-row items-center justify-between">
    <p className="text-sm">&copy; GymMotive</p>
    <div className="flex space-x-4 mt-4 md:mt-0">
      <a href="#" className="text-blue-400 hover:text-blue-300">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M4.98 3a2 2 0 012-2h10.04a2 2 0 012 2v10.04a2 2 0 01-2 2H6.98a2 2 0 01-2-2V3zm9.04 6h2.32v5.56h-2.32V9zm-5.56 0h2.32v5.56h-2.32V9zm2.78 2.78v-.01.01z" />
        </svg>
      </a>
      <a href="#" className="text-blue-400 hover:text-blue-300">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636a9 9 0 11-12.728 0M12 15v.01M12 11V7m5.728 4.964a6 6 0 01-9.456 0" />
        </svg>
      </a>
      <a href="#" className="text-blue-400 hover:text-blue-300">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A15.932 15.932 0 0112 18.5c4.418 0 8.418-1.714 11.879-4.696A16.038 16.038 0 0112 21.5c-4.418 0-8.418-1.714-11.879-4.696a16.038 16.038 0 0111.879 4.804z" />
        </svg>
      </a>
    </div>
  </div>
</footer>


     </div>
    
    )
}
   