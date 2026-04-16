import { RiArrowDropDownLine } from "react-icons/ri";
import TimelineCard from "../../ui/TimelineCard";
import { useState } from "react";
import { LuMessageCircleWarning } from "react-icons/lu";

const TimelineContainer = ({ timelineHistory }) => {
  const [timeLineData, setTimeLineData] = useState(timelineHistory);
  const [timelineStatus, setTimelineStatus] = useState(null);
  const handleButtons = (
    <>
      <li>
        <button onClick={() => handleFilterTimeline()}>All Timeline</button>
      </li>
      <li>
        <button onClick={() => handleFilterTimeline("call")}>Call</button>
      </li>
      <li>
        <button onClick={() => handleFilterTimeline("text")}>Text</button>
      </li>
      <li>
        <button onClick={() => handleFilterTimeline("video")}>Video</button>
      </li>
    </>
  );

const sortButtons=(
  <>
  <li><button onClick={()=>handleSortTimeline(true)}>Newest</button></li>
  <li><button onClick={()=>handleSortTimeline()}>Oldest</button></li>
  </>
)

  const handleFilterTimeline = (status) => {
    if (status === "call") {
      setTimeLineData(timelineHistory.filter((x) => x.status === "call"));
      setTimelineStatus("Call");
      return;
    } else if (status === "text") {
      setTimeLineData(timelineHistory.filter((x) => x.status === "text"));
      setTimelineStatus("Text");
      return;
    } else if (status === "video") {
      setTimeLineData(timelineHistory.filter((x) => x.status === "video"));
      setTimelineStatus("Video");
      return;
    }

    setTimeLineData(timelineHistory);
  };

  const handleSortTimeline=(x)=>{

    if(x){

      const sortedData=[...timeLineData].sort((a,b)=>b.actionTime-a.actionTime)
      setTimeLineData(sortedData)
return
    }

      const sortedData=[...timeLineData].sort((a,b)=>a.actionTime-b.actionTime)
      setTimeLineData(sortedData)


  }


  if (!timeLineData.length) {
    return (
      <>
        {/* here is filter dropdown and sort,search bar */}
        <div className="my-5">
          <div className="dropdown dropdown-center">
            <div
              tabIndex={0}
              role="button"
              className="btn bg-base-100  justify-between items-center m-1 w-[320px] text-lg font-normal text-(--textColor)"
            >
              <span className="">Filter timeline</span>{" "}
              <RiArrowDropDownLine className="text-[30px]" />
            </div>
            <ul
              tabIndex="-1"
              className="dropdown-content menu bg-base-100 text-(--textColor) rounded-box z-1 w-75 p-2 shadow-sm"
            >
              {handleButtons}
            </ul>
          </div>
        </div>

        <div className=" py-10 md:py-20 bg-base-100 shadow  rounded-xl  ">
          <h2 className="text-center text-xl md:text-3xl text-(--primaryColor) font-semibold flex justify-center items-center gap-2">
            {" "}
            <span>{timelineStatus} Timeline is Empthy </span>{" "}
            <LuMessageCircleWarning />
          </h2>
        </div>
      </>
    );
  }

  return (
    <>
      {/* here is filter dropdown and sort,search bar */}
   <div className="flex justify-between items-center">
       <div className="py-6">
        <div className="dropdown ">
          <div
            tabIndex={0}
            role="button"
            className="btn bg-base-100  justify-between items-center m-1 md:w-[320px] text-lg font-normal text-(--textColor)"
          >
            <span className="">Filter timeline</span>{" "}
            <RiArrowDropDownLine className="text-[30px]" />
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 text-(--textColor) ml-0 rounded-box z-1 md:w-75 p-2 shadow-sm"
          >
            {handleButtons}
          </ul>
        </div>
        
      </div>
{/* right side sort dropdown */}

         <div className="py-6">
        <div className="dropdown dropdown-center">
          <div
            tabIndex={0}
            role="button"
            className="btn bg-base-100  justify-between items-center m-1  text-lg font-normal text-(--textColor)"
          >
            <span className="">Sort</span>{" "}
            <RiArrowDropDownLine className="text-[30px]" />
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 text-(--textColor) rounded-box z-1  p-2 shadow-sm"
          >
           {sortButtons}
          </ul>
        </div>
      </div>
   </div>

      {/* all timeline history */}
      <section className="space-y-6">
        {timeLineData.map((x, inx) => (
          <TimelineCard key={inx} data={x} />
        ))}
      </section>
    </>
  );
};

export default TimelineContainer;
