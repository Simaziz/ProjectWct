const Login = () => {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
          {/* Login Title */}
          <h1 className="text-3xl font-bold text-blue-600 mb-2 text-center">Login</h1>
          <p className="text-gray-500 text-center mb-6">to get started</p>
  
          {/* Google Login Button */}
          <button className="flex items-center justify-center w-full border border-gray-300 py-2 rounded-lg mb-6 hover:bg-gray-100">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Google_2015_logo.svg"
              alt="Google Logo"
              className="w-5 h-5 mr-2"
            />
            <span className="text-gray-600 font-medium">Login with Google</span>
          </button>
  
          {/* Divider */}
          <div className="flex items-center my-4">
            <div className="flex-1 border-t border-gray-300"></div>
            <span className="px-3 text-gray-500 text-sm">or Login with Email</span>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>
  
          {/* Email Input */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
  
          {/* Password Input */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Password</label>
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
  
          {/* Forgot Password */}
          <div className="text-right mb-6">
            <a href="#" className="text-blue-500 text-sm hover:underline">
              Forgot Password?
            </a>
          </div>
  
          {/* Login Button */}
          <button className="w-full bg-blue-900 text-white py-2 rounded-lg font-medium hover:bg-blue-800">
            Login
          </button>
  
          {/* Register Link */}
          <div className="text-center mt-6 text-gray-500 text-sm">
            Not registered yet?{' '}
            <a href="#" className="text-blue-500 hover:underline font-medium">
              Create an account ↗
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  export default Login;
  