import { useLoaderData, useParams } from "react-router";
import useFriendPromise from "../../hooks/useFriendPromise";
import { Suspense } from "react";
import FriendsDetails from "../../components/friends-details/FriendsDetails";

const Details = () => {
const friendsDataPromise=useFriendPromise()
  const {id}=useParams()



  return (
    <section className="max-w-6xl mx-auto w-[90%]">

      <Suspense fallback={<span>details is loading..</span>}>
        <FriendsDetails friendsPromise={friendsDataPromise} id={Number(id)} />
      </Suspense>
    </section>
  );
};

export default Details;