const CustomLegend = ({ payload }) => {
  if (!payload || !payload.length) return null;

  return (
    <div className="flex flex-wrap justify-center items-center gap-4 text-sm  text-[#334155]">
      {payload.map((entry, index) => (
        <div
          key={`${entry.value}-${index}`}
          className="flex items-center gap-2"
        >
          <span
            className="inline-block w-3 h-3 rounded-full"
            style={{ backgroundColor: entry.color }}
          />
          <span>{entry.payload?.name || entry.value}</span>
        </div>
      ))}
    </div>
  );
};

export default CustomLegend;
