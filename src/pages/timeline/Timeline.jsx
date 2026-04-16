import { useContext } from "react";
import { timelineContext } from "../../contexts/ContextCreator";
import TimelineContainer from "../../components/timelineContainer/TimelineContainer";

const Timeline = () => {
  const { timelineHistory } = useContext(timelineContext);



  if (!timelineHistory.length) {
    return (
      <section className="max-w-6xl mx-auto w-[90%] py-20">
        <h2 className="text-4xl lg:text-5xl font-bold text-(--primaryContent) mb-16">
          Timeline
        </h2>
        <div className="flex flex-col items-center justify-center py-20">
          <div className="text-center space-y-4">
            <h2 className="text-5xl">⏰</h2>
            <h3 className="text-2xl font-semibold text-(--primaryColor)">
              No Communication History 
            </h3>
            <p className="text-(--textColor) text-base max-w-lg">
              Start connecting with your friends! Add your first call, text, or
              video interaction to see your timeline here.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="max-w-6xl mx-auto w-[90%] py-20">
      <h2 className="text-4xl lg:text-5xl font-bold text-(--primaryContent)">Timeline</h2>



      <TimelineContainer timelineHistory={timelineHistory} />
    </section>
  );
};

export default Timeline;
