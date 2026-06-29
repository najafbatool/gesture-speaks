function LoginModal({ isOpen, onClose }) {

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      {/* Small Popup Box */}
      <div className="bg-white w-[400px] rounded-2xl shadow-2xl p-6 relative">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-3xl text-gray-500 hover:text-black"
        >
          ×
        </button>

        {/* Heading */}
        <h1 className="text-3xl font-bold text-slate-900 mb-6">
          Welcome Back
        </h1>

        {/* Email */}
        <div className="mb-4">

          <label className="block text-gray-600 mb-2 text-lg">
            Email
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
          />

        </div>

        {/* Password */}
        <div className="mb-6">

          <label className="block text-gray-600 mb-2 text-lg">
            Password
          </label>

          <input
            type="password"
            placeholder="Enter your password"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
          />

        </div>

        {/* Login Button */}
        <button className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-lg text-lg font-semibold">
          LOGIN
        </button>

        {/* Divider */}
        <div className="flex items-center my-5">

          <div className="flex-1 h-[1px] bg-gray-300"></div>

          <span className="px-4 text-gray-500">
            OR
          </span>

          <div className="flex-1 h-[1px] bg-gray-300"></div>

        </div>

        {/* Signup */}
        <div className="text-center">

          <p className="text-gray-600 mb-2">
            Don't have an account?
          </p>

          <button className="text-blue-600 font-semibold hover:underline">
            SIGN UP HERE
          </button>

        </div>

      </div>
    </div>
  );
}

export default LoginModal;