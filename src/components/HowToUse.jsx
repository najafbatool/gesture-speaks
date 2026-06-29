function HowToUse() {
  return (
    <section className="px-10 pb-10">
      
      <div className="bg-blue-600 rounded-3xl p-10 shadow-xl">
        
        {/* Heading */}
        <h2 className="text-white text-4xl font-bold text-center mb-10">
          How To Use
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-6 shadow-md">
            <div className="text-blue-600 text-5xl mb-4">
              ✍️
            </div>

            <h3 className="text-2xl font-bold mb-3">
              Enter Input
            </h3>

            <p className="text-slate-600 text-lg">
              Type text or use sign language gestures through camera input.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-6 shadow-md">
            <div className="text-blue-600 text-5xl mb-4">
              🤖
            </div>

            <h3 className="text-2xl font-bold mb-3">
              AI Processing
            </h3>

            <p className="text-slate-600 text-lg">
              Our system processes and translates the language instantly.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl p-6 shadow-md">
            <div className="text-blue-600 text-5xl mb-4">
              🔊
            </div>

            <h3 className="text-2xl font-bold mb-3">
              Get Output
            </h3>

            <p className="text-slate-600 text-lg">
              Receive sign language or text output in real-time.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default HowToUse;