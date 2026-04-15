import { Suspense } from "react";
import Hero from "../../components/hero/Hero";
import useFriendPromise from "../../hooks/useFriendPromise";
import Friends from "../../components/Friends";
import LoadingSpinner from "../../components/spinner/LoadingSpinner";

const Homepage = () => {

  const friendsPromise=useFriendPromise()



  return (
    <div className="max-w-6xl mx-auto w-[90%] py-20">
<Hero/>  

<Suspense fallback={<LoadingSpinner/>}>
<Friends
friendsPromise={friendsPromise}
></Friends>
</Suspense>
    </div>
  );
};

export default Homepage;