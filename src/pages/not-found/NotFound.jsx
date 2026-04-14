
import { Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-[#0f0f1e] via-[#1a1a2e] to-[#16213e] flex items-center justify-center overflow-hidden relative">
      
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(at_center,#00d4ff12_0%,transparent_60%)]" />

      <div className="text-center z-10 px-6 max-w-lg">
        
        {/* Big 404 with gradient */}
        <div className="text-[160px] md:text-[200px] font-black leading-none tracking-tighter bg-linear-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent -mb-5">
          404
        </div>

      
      

        <h1 className="text-3xl md:text-4xl font-semibold text-white mb-3">
        Page Not Found
        </h1>

        <p className="text-gray-400 text-lg leading-relaxed mb-10">
         Sorry, the page you're looking for doesn't exist or has been moved.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/"
            className="group flex items-center justify-center gap-3 bg-linear-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold text-lg px-10 py-4 rounded-2xl transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/40"
          >
            <Home className="w-6 h-6 group-hover:scale-110 transition-transform" />
            Back to Home
          </a>

          <button
            onClick={() => window.history.back()}
            className="flex items-center justify-center gap-3 border border-gray-600 hover:border-gray-400 hover:text-white text-gray-300 font-semibold text-lg px-8 py-4 rounded-2xl transition-all duration-300"
          >
            <ArrowLeft className="w-6 h-6" />
           Go Back
          </button>
        </div>

     
      </div>

      {/* Optional subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-size-[50px_50px]" />
    </div>
  );
};

export default NotFound;