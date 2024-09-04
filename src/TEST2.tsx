import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

interface Game {
  gameDate: string;
  titleOfTheGame: string;
  placeOfGame: string;
  timeOfDuration: number;
  resultA: number;
  relationsGamesA: number;
  resultB: number;
  relationsGamesB: number;
  id: string;
}

const data: Game[] = [
  {
    gameDate: "2024-08-22",
    titleOfTheGame: "liga",
    placeOfGame: "PL",
    timeOfDuration: 95,
    resultA: 1,
    relationsGamesA: 1,
    resultB: 4,
    relationsGamesB: 2,
    id: "45ee",
  },
  {
    id: "df1f",
    gameDate: "2024-08-21",
    titleOfTheGame: "Test",
    placeOfGame: "PL",
    timeOfDuration: 90,
    resultA: 2,
    relationsGamesA: 1,
    resultB: 2,
    relationsGamesB: 2,
  },
  {
    id: "d921",
    gameDate: "2024-08-20",
    titleOfTheGame: "Test2",
    placeOfGame: "PL",
    timeOfDuration: 90,
    resultA: 1,
    relationsGamesA: 1,
    resultB: 2,
    relationsGamesB: 2,
  },
  {
    gameDate: "2024-08-21",
    titleOfTheGame: "Test3",
    placeOfGame: "PL",
    timeOfDuration: 90,
    resultA: 1,
    relationsGamesA: 1,
    resultB: 3,
    relationsGamesB: 2,
    id: "67fc",
  },
];

const GameChart: React.FC = () => {
  const [timeRange, setTimeRange] = useState<"day" | "week" | "month">("day");

  const filterData = (range: "day" | "week" | "month") => {
    // Implementacja filtrowania danych na podstawie wybranego zakresu czasu
    // Na przykład, dla zakresu 'day' zwróć dane z ostatniego dnia, dla 'week' z ostatniego tygodnia, itd.
    return data; // Zwróć przefiltrowane dane
  };

  const filteredData = filterData(timeRange);

  return (
    <div>
      <div>
        <button onClick={() => setTimeRange("day")}>Dzień</button>
        <button onClick={() => setTimeRange("week")}>Tydzień</button>
        <button onClick={() => setTimeRange("month")}>Miesiąc</button>
      </div>
      <LineChart width={600} height={300} data={filteredData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="gameDate" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="timeOfDuration"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </div>
  );
};

export default GameChart;
