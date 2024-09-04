import React, { useState } from "react";

const FootballMatchesChart: React.FC = () => {
  const [timeRange, setTimeRange] = useState<"day" | "week" | "month">("day");

  const generateData = (range: "day" | "week" | "month") => {
    switch (range) {
      case "day":
        return [2, 3, 1, 5, 4, 6];
      case "week":
        return [12, 15, 10, 20, 18, 25, 22];
      case "month":
        return [50, 60, 55, 70, 65, 80, 75];
      default:
        return [];
    }
  };

  const data = generateData(timeRange);
  const labels = {
    day: ["00:00", "04:00", "08:00", "12:00", "16:00", "20:00"],
    week: ["Pon", "Wt", "Śr", "Czw", "Pt", "Sob", "Niedz"],
    month: ["1", "5", "10", "15", "20", "25", "30"],
  };

  return (
    <div>
      <h2>Wykres ilości rozgrywek piłkarskich</h2>
      <div>
        <button onClick={() => setTimeRange("day")}>Dzień</button>
        <button onClick={() => setTimeRange("week")}>Tydzień</button>
        <button onClick={() => setTimeRange("month")}>Miesiąc</button>
      </div>
      <svg width="600" height="400">
        <polyline
          fill="none"
          stroke="blue"
          strokeWidth="2"
          points={data.map((d, i) => `${i * 100},${400 - d * 5}`).join(" ")}
        />
        {data.map((d, i) => (
          <text
            key={i}
            x={i * 100}
            y={400 - d * 5 - 10}
            fontSize="12"
            textAnchor="middle"
          >
            {d}
          </text>
        ))}
        {labels[timeRange].map((label, i) => (
          <text key={i} x={i * 100} y="420" fontSize="12" textAnchor="middle">
            {label}
          </text>
        ))}
      </svg>
    </div>
  );
};

export default FootballMatchesChart;
