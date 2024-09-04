import { ChangeEvent, FormEvent, useState } from "react";
import { useCreateGameListMutation } from "../queries/useCreateGameListMutation";
import { GameForm } from "./GameForm";

export const AddGames = () => {
  const { mutate, isPending } = useCreateGameListMutation();

  const [values, setValue] = useState({
    gameDate: "",
    titleOfTheGame: "",
    placeOfGame: "",
    timeOfDuration: 90,
    resultA: 0,
    relationsGamesA: 0,
    resultB: 0,
    relationsGamesB: 0,
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

    setValue({
      gameDate: "",
      titleOfTheGame: "",
      placeOfGame: "",
      timeOfDuration: 90,
      resultA: 0,
      relationsGamesA: 0,
      resultB: 0,
      relationsGamesB: 0,
    });
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
