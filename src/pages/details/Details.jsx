import { useLoaderData, useParams } from "react-router";


import FriendsDetails from "../../components/friends-details/FriendsDetails";

const Details = () => {

  const {id}=useParams()

  const friendsData=useLoaderData()

  // console.log(friendsData);

  return (
    <section className="max-w-6xl mx-auto w-[90%]">

    
        <FriendsDetails friendsData={friendsData} id={Number(id)} />

    </section>
  );
};

export default Details;