function SignToText() {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-8">

      {/* Heading */}
      <h2 className="text-3xl font-bold text-slate-900 mb-6">
        Sign Language to Text
      </h2>

      {/* Camera Box */}
      <div className="h-64 bg-blue-100 rounded-2xl flex items-center justify-center border-2 border-dashed border-blue-300">
        
        <div className="text-center">
          <div className="text-6xl mb-3">📷</div>

          <p className="text-blue-700 text-lg font-medium">
            Camera Preview
          </p>
        </div>

      </div>

      {/* Button */}
      <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 transition text-white py-4 rounded-2xl text-xl font-semibold shadow-md">
        Start Detection
      </button>

    </div>
  );
}

export default SignToText;