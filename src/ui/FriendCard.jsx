import { useNavigate } from "react-router";

const FriendCard = ({ friendData }) => {
  const { id, name, picture, days_since_contact, status, tags } = friendData;
  const navigate = useNavigate();
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
      onClick={() => navigate(`/friends/details/${id}`)}
    >
      <div>
        <img src={picture} alt={name} className="mx-auto" />
      </div>
      <div className="space-y-2">
        <h4 className="text-(--primaryContent) text-xl font-semibold">
          {name}
        </h4>
        <p className="text-[12px] text-(--textColor)">
          {days_since_contact}d ago
        </p>
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

        <div className="pt-1">{statusMaker(status)}</div>
      </div>
    </div>
  );
};

export default FriendCard;

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
