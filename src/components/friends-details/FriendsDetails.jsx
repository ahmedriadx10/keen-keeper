import { use, useContext } from "react";
import ProfileFriendCard from "../../ui/ProfileFriendCard";
import { RiDeleteBin6Line, RiNotificationSnoozeLine } from "react-icons/ri";
import { LuArchive } from "react-icons/lu";
import { BiMessageDots, BiPhoneCall } from "react-icons/bi";
import { GoDeviceCameraVideo } from "react-icons/go";
import { timelineContext } from "../../contexts/ContextCreator";

const FriendsDetails = ({ friendsData, id }) => {

  const exactFriend = friendsData.find((x) => x.id === id);

  const { next_due_date, goal, days_since_contact, name } = exactFriend;

  const { handleTimeLine, timelineHistory } = useContext(timelineContext);

  const dateOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const call = {
    name,
    date: new Date().toLocaleDateString([], dateOptions),
    status: "call",
  };

  const text = {
    name,
    date: new Date().toLocaleString([], dateOptions),
    status: "text",
  };

  const video = {
    name,
    date: new Date().toLocaleDateString([], dateOptions),
    status: "video",
  };

  // console.log(timelineHistory);
  return (
    <div className="space-y-10 lg:grid grid-cols-6 gap-6 py-20">
      <div className=" col-span-2">
        <ProfileFriendCard friendData={exactFriend} />

        <div className="flex flex-col mt-4 gap-2 font-medium text-(--primaryContent)">
          <button className="btn bg-base-100 ">
            <RiNotificationSnoozeLine className="text-lg" />
            <span>Snooze 2 weeks</span>
          </button>
          <button className="btn bg-base-100 ">
            <LuArchive className="text-lg" />
            <span>Archive</span>
          </button>
          <button className="btn bg-base-100  text-error">
            <RiDeleteBin6Line className="text-lg" />
            <span>Delete</span>
          </button>
        </div>
      </div>
      <div className="col-span-4 space-y-6 ">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-h-max">
          <div className="rounded-lg shadow text-center space-y-2 py-8 px-4 bg-base-100">
            <h6 className="text-(--primaryColor) font-semibold text-2xl xl:text-[32px]">
              {days_since_contact}
            </h6>
            <span className="text-lg text-(--textColor)">
              Days Since Contact
            </span>
          </div>
          <div className="rounded-lg shadow text-center space-y-2 py-8 px-4 bg-base-100">
            <h6 className="text-(--primaryColor) font-semibold text-2xl xl:text-[32px]">
              {goal}
            </h6>
            <span className="text-lg text-(--textColor)">Goal (Days)</span>
          </div>
          <div className="rounded-lg shadow text-center space-y-2 py-8 px-4 bg-base-100">
            <h6 className="text-(--primaryColor) font-semibold text-2xl xl:text-[32px]">
              {next_due_date}
            </h6>
            <span className="text-lg text-(--textColor)">Next Due</span>
          </div>
        </div>
        {/* relationship goal */}
        <div className="rounded-lg bg-base-100 shadow p-6 ">
          <div className="flex justify-between items-center ">
            <p className="text-(--primaryColor) font-medium text-xl">
              Relationship Goal
            </p>
            <button className="btn">Edit</button>
          </div>
          <p className="text-lg text-(--textColor)">
            Connect every{" "}
            <span className="font-bold text-(--primaryContent)">
              {goal} days
            </span>
          </p>
        </div>

        {/* action area */}

        <div className="bg-base-100 shadow p-6 space-y-4">
          <p className="text-xl font-medium text-(--primaryColor)">
            Quick Check-In
          </p>

          <div className="grid grid-cols-3 gap-4">
            <button
              className="text-lg flex-col  rounded-lg justify-center gap-2 p-4 h-auto text-(--primaryContent) btn bg-(--secondaryColor)"
              onClick={() => handleTimeLine(call)}
            >
              <BiPhoneCall className="text-3xl" />
              <span>Call</span>
            </button>
            <button
              className="text-lg flex-col  rounded-lg justify-center gap-2 p-4 h-auto text-(--primaryContent) btn bg-(--secondaryColor)"
              onClick={() => handleTimeLine(text)}
            >
              <BiMessageDots className="text-3xl" />
              <span>Text</span>
            </button>
            <button
              className="text-lg flex-col  rounded-lg justify-center gap-2 p-4 h-auto text-(--primaryContent) btn bg-(--secondaryColor)"
              onClick={() => handleTimeLine(video)}
            >
              <GoDeviceCameraVideo className="text-3xl" />
              <span>Video</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendsDetails;

/**
 * {
    "id": 3,
    "name": "Faysal Ahmed",
    "picture": "https://i.ibb.co.com/RTkHpc4Y/Ellipse-1-8.png",
    "email": "faysal.travel@example.com",
    "days_since_contact": 12,
    "status": "almost due",
    "tags": [
        "university",
        "travel"
    ],
    "bio": "Best friend from university. We traveled to Sajek Valley together last month.",
    "goal": 15,
    "next_due_date": "2025-07-15"
}
 */
