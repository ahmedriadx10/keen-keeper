
const ProfileFriendCard = ({friendData}) => {
 const {  name, picture, days_since_contact, status, tags ,bio,email} = friendData;

  const statusMaker = (x) => {
    let status;
    switch (x) {
      case "almost due":
        status = (
          <span className="py-1.5 px-3 text-[12px] capitalize rounded-full font-medium text-white bg-[#EFAD44]">
            {x}
          </span>
        );

        break;

      case "overdue":
        status = (
          <span className="py-1.5 px-3 text-[12px] capitalize rounded-full font-medium text-white bg-[#EF4444]">
            {x}
          </span>
        );
        break;

      case "on-track":
        status = (
          <span className="py-1.5 px-3 text-[12px] capitalize rounded-full font-medium text-white bg-[#244D3F]">
            {x}
          </span>
        );
        break;
    }

    return status;
  };
  return (
    <div
      className="p-6 text-center space-y-3 rounded-lg bg-base-100 shadow"
      
    >
      <div>
        <img src={picture} alt={name} className="mx-auto" />
      </div>
      <div className="space-y-2">
        <h4 className="text-(--primaryContent) text-xl font-semibold">
          {name}
        </h4>
    
  

     <div className="space-y-3">
   <div className="">{statusMaker(status)}</div>

            <div className="flex flex-wrap gap-2 justify-center items-center ">
          {tags.map((x, inx) => (
            <span
              key={inx}
              className="py-1.5 px-3 text-[12px] uppercase rounded-full font-medium text-(--primaryColor) bg-(--greenSecondary)"
            >
              {x}
            </span>
          ))}
        </div>
     </div>

<div className="space-y-3 mt-3"><p className="italic font-medium text-(--textColor)" style={ { fontFamily:"'Inter', sans-serif"}}>{bio}</p><p className="text-14 text-(--textColor)">{email}</p></div>

      </div>
    </div>
  );
};

export default ProfileFriendCard;