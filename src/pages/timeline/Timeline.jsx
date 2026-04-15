import { useContext } from "react";
import { timelineContext } from "../../contexts/ContextCreator";
import TimelineContainer from "../../components/timelineContainer/TimelineContainer";

const Timeline = () => {

  const {timelineHistory}=useContext(timelineContext)

  console.log(timelineHistory)



  return (
<section className="max-w-6xl mx-auto w-[90%] py-20">

<h2 className="text-5xl font-bold text-(--primaryContent)">Timeline</h2>

<TimelineContainer timelineHistory={timelineHistory} />

</section>
  );
};

export default Timeline;