

const LoadingSpinner = () => {
  return (
<div className="flex flex-col items-center justify-center min-h-70" 
        >
      
      <div className="relative w-20 h-20">
        {/* Base Dark Ring */}
        <div 
          className="absolute inset-0 border-[7px] rounded-full"
          style={{ borderColor: '#244D3F' }}
        ></div>

        {/* Spinning Gradient Ring */}
        <div 
          className="absolute inset-0 border-[7px] border-transparent rounded-full animate-spin"
          style={{
            borderTopColor: '#CBFADB',
            borderRightColor: '#CBFADB',
            borderBottomColor: 'transparent',
            borderLeftColor: 'transparent',
            animationDuration: '0.85s'
          }}
        ></div>

        {/* Inner Reverse Spin Ring (extra depth) */}
        <div 
          className="absolute inset-1.5 border-[5px] border-transparent rounded-full animate-spin"
          style={{
            borderTopColor: '#244D3F',
            borderLeftColor: '#CBFADB',
            animationDuration: '1.4s',
            animationDirection: 'reverse'
          }}
        ></div>

        {/* Center Glowing Dot */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div 
            className="w-6 h-6 rounded-full animate-pulse shadow-[0_0_25px_#CBFADB]"
            style={{ backgroundColor: '#244D3F' }}
          ></div>
        </div>
      </div>

      {/* Loading Text */}
      <p 
        className="mt-8 text-sm font-semibold tracking-[3px] animate-pulse"
 
      >
        LOADING...
      </p>
    </div>
  );
};

export default LoadingSpinner;