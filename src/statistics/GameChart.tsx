import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { GameListEntity } from "../types";

type GameListProps = {
  gameData: GameListEntity[];
};

export const GameChart = ({ gameData }: GameListProps) => {
  const [timeRange, setTimeRange] = useState<"day" | "week" | "month">("day");

  const countGamesPerDay = (gameData: GameListEntity[]) => {
    const gamesPerDay: { date: string; count: number }[] = [];
    const gamesCount: { [key: string]: number } = {};

    gameData.forEach((game) => {
      const date = new Date(game.gameDate).toISOString().split("T")[0];
      if (!gamesCount[date]) {
        gamesCount[date] = 0;
      }
      gamesCount[date]++;
    });

    for (const date in gamesCount) {
      gamesPerDay.push({ date, count: gamesCount[date] });
    }

    // Sortowanie dat rosnąco
    gamesPerDay.sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );
    console.log("gamesPerDay", gamesPerDay);
    return gamesPerDay;
  };

  const countGamesPerWeek = (gameData: GameListEntity[]) => {
    const gamesPerWeek: { date: string; count: number }[] = [];
    const gamesCount: { [key: string]: number } = {};

    gameData.forEach((game) => {
      const date = new Date(game.gameDate);
      const weekStart = new Date(date.setDate(date.getDate() - date.getDay()))
        .toISOString()
        .split("T")[0];
      if (!gamesCount[weekStart]) {
        gamesCount[weekStart] = 0;
      }
      gamesCount[weekStart]++;
    });

    for (const date in gamesCount) {
      gamesPerWeek.push({ date, count: gamesCount[date] });
    }

    // Sortowanie dat rosnąco
    gamesPerWeek.sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );
    console.log("gamesPerWeek", gamesPerWeek);
    return gamesPerWeek;
  };

  const countGamesPerMonth = (gameData: GameListEntity[]) => {
    const gamesPerMonth: { date: string; count: number }[] = [];
    const gamesCount: { [key: string]: number } = {};

    gameData.forEach((game) => {
      const date = new Date(game.gameDate);
      const monthStart = `${date.getFullYear()}-${String(
        date.getMonth() + 1
      ).padStart(2, "0")}`;
      if (!gamesCount[monthStart]) {
        gamesCount[monthStart] = 0;
      }
      gamesCount[monthStart]++;
    });

    for (const date in gamesCount) {
      gamesPerMonth.push({ date, count: gamesCount[date] });
    }
    console.log("gamesPerMonth", gamesPerMonth);
    return gamesPerMonth;
  };

  const filterData = (range: "day" | "week" | "month") => {
    switch (range) {
      case "day":
        return countGamesPerDay(gameData);
      case "week":
        return countGamesPerWeek(gameData);
      case "month":
        return countGamesPerMonth(gameData);
      default:
        return [];
    }
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
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="count"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </div>
  );
};
