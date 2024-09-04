import { ChangeEvent, FormEvent, useState } from "react";
import { GameForm } from "./GameForm";
import { GameListEntity } from "../types";
import { useUpadteGameListMutation } from "../queries/useUpdateGameListMutation";

type EditGameProps = {
  game: GameListEntity;
};

export const EditGames = ({ game }: EditGameProps) => {
  const { mutate, isPending } = useUpadteGameListMutation(game.id);

  const [values, setValue] = useState({
    gameDate: game.gameDate,
    titleOfTheGame: game.titleOfTheGame,
    placeOfGame: game.placeOfGame,
    timeOfDuration: game.timeOfDuration,
    resultA: game.resultA,
    relationsGamesA: game.relationsGamesA,
    resultB: game.resultB,
    relationsGamesB: game.relationsGamesB,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;

    setValue((prevValues) => ({
      ...prevValues,
      [name]: type === "number" ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    mutate(values);
  };

  return (
    <GameForm
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      values={values}
      isPending={isPending}
    />
  );
};
