import { CirclesWithBar } from "react-loader-spinner";


const LoadingSpinner = () => {
  return (
<div className="flex py-20 justify-center items-center">
  <CirclesWithBar
height="100"
width="100"
color="#244D3F"
outerCircleColor="#244D3F"
innerCircleColor="#244D3F"
barColor="#244D3F"
ariaLabel="circles-with-bar-loading"
wrapperStyle={{}}
wrapperClass=""
visible={true}
/>
</div>
  );
};

export default LoadingSpinner;