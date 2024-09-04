import styled from "styled-components";
import { Team } from "../types";
import { useState } from "react";
import { EditTeam } from "./EditTeam";
import { AddPlayerTeam } from "./AddPlayerTeam";
import { RemovePlayerTeam } from "./RemovePlayerTeam";
import { DeletePlayer } from "./DeleteTeam";

type SingleTeamProps = {
  team: Team;
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
const InfoPlayer = styled.p`
  margin: 1px 0;
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

export const SingleTeam = ({ team }: SingleTeamProps) => {
  const [mode, setMode] = useState<
    "edit" | "delete" | "add" | "remove" | "none"
  >("none");

  const toggleEditMode = () => {
    setMode((prevMode) => (prevMode === "edit" ? "none" : "edit"));
  };
  const toggleAddMode = () => {
    setMode((prevMode) => (prevMode === "add" ? "none" : "add"));
  };
  const toggleRemoveMode = () => {
    setMode((prevMode) => (prevMode === "remove" ? "none" : "remove"));
  };
  const toggleDeleteMode = () => {
    setMode((prevMode) => (prevMode === "delete" ? "none" : "delete"));
  };
  const relation: number = team.teamPlayers;
  // const id: string = team.id;

  // console.log("SingleTeam", team);

  return (
    <Item>
      <Info>Nazwa drużyny {team.nameTeams}</Info>
      <Info>Rok założenia: {team.year}</Info>
      <Info>Lokalizacja: {team.location}</Info>
      <Info>Rok : {team.year}</Info>
      <Info>Relacja drużyny: {team.teamPlayers}</Info>
      <Info>
        Piłkarze:
        {team.players.map((player, index) => (
          <InfoPlayer key={index}>
            {index + 1} - {player.name} {player.surname}
          </InfoPlayer>
        ))}
      </Info>

      <ActionButton onClick={toggleEditMode}>
        {mode === "edit" ? "Cancel" : "Edit"}
      </ActionButton>
      {mode === "edit" && <EditTeam team={team} />}

      <ActionButton onClick={toggleAddMode}>
        {mode === "add" ? "Cancel" : "Add"}
      </ActionButton>
      {mode === "add" && (
        <AddPlayerTeam relation={relation} player={team.players} />
      )}

      <ActionButton onClick={toggleRemoveMode}>
        {mode === "remove" ? "Cancel" : "Remove"}
      </ActionButton>
      {mode === "remove" && (
        <RemovePlayerTeam relation={relation} player={team.players} />
      )}

      <ActionButton onClick={toggleDeleteMode}>
        {mode === "delete" ? "Cancel" : "Delete"}
      </ActionButton>
      {mode === "delete" && <DeletePlayer team={team} />}
    </Item>
  );
};
