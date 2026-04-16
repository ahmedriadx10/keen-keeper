import { useContext } from "react";
import { Legend, Pie, PieChart, Tooltip } from "recharts";
import { timelineContext } from "./../../contexts/ContextCreator";
import CustomLegend from "../../components/customLegend/CustomLegend";

const Stats = () => {
  const { timelineHistory } = useContext(timelineContext);

  const callTimeLine = timelineHistory.filter(
    (x) => x.status === "call",
  ).length;
  const textTimeLine = timelineHistory.filter(
    (x) => x.status === "text",
  ).length;
  const videoTimeLIne = timelineHistory.filter(
    (x) => x.status === "video",
  ).length;
  const data = [
    { name: "Call", value: callTimeLine, fill: "#244d3f" },
    { name: "Text", value: textTimeLine, fill: "#7f36f5" },
    { name: "Video", value: videoTimeLIne, fill: "#37a163" },
  ];

  if (!timelineHistory.length) {
    return (
      <div className="text-center py-20 h-[50vh]  space-y-2 flex flex-col justify-center items-center">
        <p className="text-(--primaryColor) text-2xl font-semibold ">
          📈 No Data
        </p>
        <p className="text-[#64748B] text-lg ">
          Start connecting with your friends and add communication records
        </p>
      </div>
    );
  }

  return (
    <section className="py-10">
      <div className="max-w-6xl mx-auto w-[90%]">
        <h2 className="font-bold text-4xl lg:text-5xl text-(--primaryContent)">
          Friendship Analytics
        </h2>

        <div className="bg-base-100 rounded-lg shadow-lg p-8 mt-6">
          <h6 className="text-xl font-medium text-(--primaryColor) mb-6">
            By Interaction Type
          </h6>

          <PieChart
            style={{
              width: "90%",
              maxWidth: "350px",
              margin: "auto",
              maxHeight: "50vh",
              aspectRatio: 1,
            }}
            responsive
          >
            <Pie
              data={data}
              innerRadius="80%"
              outerRadius="100%"
              cornerRadius="10%"
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
              isAnimationActive={true}
            />

            <Legend content={CustomLegend} wrapperStyle={{ marginTop: 20 }} />
            <Tooltip />
          </PieChart>
        </div>
      </div>
    </section>
  );
};

export default Stats;
