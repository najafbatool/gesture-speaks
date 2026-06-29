function TextToSign() {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-8">
      
      {/* Heading */}
      <h2 className="text-3xl font-bold text-slate-900 mb-6">
        Text to Sign Language
      </h2>

      {/* Textarea */}
      <textarea
        placeholder="Enter text here..."
        className="w-full h-64 bg-slate-100 rounded-2xl p-5 text-lg outline-none resize-none border border-slate-200"
      />

      {/* Button */}
      <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 transition text-white py-4 rounded-2xl text-xl font-semibold shadow-md">
        Convert
      </button>

    </div>
  );
}

export default TextToSign;