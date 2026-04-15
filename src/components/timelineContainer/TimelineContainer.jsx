import { RiArrowDropDownLine } from "react-icons/ri";
import TimelineCard from "../../ui/TimelineCard";
import { useState } from "react";

const TimelineContainer = ({timelineHistory}) => {
 
const [timeLineData,setTimeLineData]=useState(timelineHistory)


const handleFilterTimeline=(status)=>{


  if(status==='call'){

setTimeLineData(timelineHistory.filter(x=>x.status==='call'))

return
  }

  else if(status==='text'){
    setTimeLineData(timelineHistory.filter(x=>x.status==='text'))
    return
  } 

  else if (status==='video'){
      setTimeLineData(timelineHistory.filter(x=>x.status==='video'))
      return
  }


  setTimeLineData(timelineHistory)



}


 if(!timeLineData.length){
  return(
<div className="py-20 bg-zinc-200  rounded-xl mt-10">

<h2 className="text-center text-3xl font-semibold">Timeline is Empthy</h2>


</div>
  )
 }
 
  return (
    <>
    {/* here is filter dropdown and sort,search bar */}
<div className="py-6">

<div className="dropdown dropdown-center">
  <div tabIndex={0} role="button" className="btn bg-base-100  justify-between items-center m-1 w-[320px] text-lg font-normal text-(--textColor)"><span className="">Filter timeline</span>  <RiArrowDropDownLine className="text-[30px]"/></div>
  <ul tabIndex="-1" className="dropdown-content menu bg-base-100 text-(--textColor) rounded-box z-1 w-75 p-2 shadow-sm">
    <li><button onClick={()=>handleFilterTimeline()}>All Timeline</button></li>
    <li><button onClick={()=>handleFilterTimeline('call')}>Call</button></li>
    <li><button onClick={()=>handleFilterTimeline('text')}>Text</button></li>
    <li><button onClick={()=>handleFilterTimeline('video')}>Video</button></li>
  </ul>
</div>

</div>

{/* all timeline history */}
<section className="space-y-6">

{timeLineData.map((x,inx)=><TimelineCard key={inx} data={x} />)}
</section>
    </>
  );
};

export default TimelineContainer;