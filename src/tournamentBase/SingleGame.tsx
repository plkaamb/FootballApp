import { useState } from "react";
import styled from "styled-components";

import { GameListEntity } from "../types";
import { EditGames } from "./EditGame";

type SinglePlayerProps = {
  game: GameListEntity;
};

const Item = styled.li`
  list-style: none;
  padding: 20px;
  margin: 10px 0;
  background-color: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Info = styled.p`
  margin: 5px 0;
  font-size: 16px;
  color: #343a40;
`;

const ActionButton = styled.button`
  padding: 10px 15px;
  margin-right: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }

  &:last-of-type {
    background-color: #dc3545;

    &:hover {
      background-color: #c82333;
    }
  }
`;

export const SingleGame = ({ game }: SinglePlayerProps) => {
  const [mode, setMode] = useState<"edit" | "delete" | "none">("none");

  const toggleEditMode = () => {
    setMode((prevMode) => (prevMode === "edit" ? "none" : "edit"));
  };

  return (
    <Item>
      <Info>Id gry: {game.id}</Info>
      <Info>Data rozgrywki: {game.gameDate}</Info>
      <Info>Opis gry: {game.titleOfTheGame}</Info>
      <Info>Kraj rozgrywki: {game.placeOfGame}</Info>
      <Info>Czas gry: {game.timeOfDuration}</Info>
      <Info>
        Wynik: {game.resultA} : {game.resultB}
      </Info>
      <Info>
        Drużyna: {game.relationsGamesA} : {game.relationsGamesB}
      </Info>

      <ActionButton onClick={toggleEditMode}>
        {mode === "edit" ? "Cancel" : "Edit"}
      </ActionButton>
      {mode === "edit" && <EditGames game={game} />}
    </Item>
  );
};
