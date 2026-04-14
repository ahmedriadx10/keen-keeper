import { use } from "react";
import FriendCard from "../ui/FriendCard";

const Friends = ({friendsPromise}) => {

  const friendsData=use(friendsPromise)


  return (
    <section className="mt-10">

    <h2 className="mb-4 text-(--primaryContent) font-semibold text-2xl">Your Friends</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

      {friendsData.map((friend)=><FriendCard key={friend.id} friendData={friend} />)}

    </div>
    </section>
  );
};

export default Friends;