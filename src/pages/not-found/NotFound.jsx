import { Link } from "react-router";

const NotFound = () => {
  return (
    <div>
 <div className="flex flex-col items-center justify-center min-h-screen bg-white px-6 text-center">
      <div className="max-w-md">
        <h1 className="text-9xl font-black text-gray-200 tracking-widest relative">
          404
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl font-bold text-(--primaryColor) w-full">
            Oops! Page Not Found
          </span>
        </h1>
        
        <p className="text-gray-500 mt-8 mb-10 text-lg">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

   

        <div>
          <Link
            to="/"
            className="px-8 py-3 bg-gray-900 text-white font-medium rounded-md hover:bg-(--primaryColor) transition-colors duration-300 shadow-xl"
          >
            Back to Homepage
          </Link>
        </div>
      </div>
    </div>
      
    </div>
  );
};

export default NotFound;