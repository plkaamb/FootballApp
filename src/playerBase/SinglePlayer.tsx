// import { useState } from "react"

// import { PlayerEntity } from "../types"
// import { EditPlayer } from "./EditPlayer"
// import { DeletePlayer } from "./DeletePlayer"

// type SinglePlayerProps = {
//     player: PlayerEntity
// }

// export const SinglePlayer = ({player}: SinglePlayerProps) =>{
//     const [mode, setMode] = useState<'edit' | 'delete' |'none'>('none')

//     const toggleEditMode = () =>{
//         setMode(prevMode => prevMode === 'edit' ? 'none' : 'edit')
//     }

//      const toggleDeletetMode = () =>{
//          setMode(prevMode => prevMode === 'delete' ? 'none' : 'delete')
//      }

//     return (
//         <li>
//             <p> id gracza: {player.id} </p>
//             <p> Imie i nazwisko: {player.name} {player.surname}</p>
//             <p> Relacja drużyny {player.relation}</p>

//             <button onClick={toggleEditMode}>{mode ==='edit' ? 'Cancel' : 'Edit'}</button>
//             {mode === 'edit' ? <EditPlayer player={player}/> : undefined}

//             <button onClick={toggleDeletetMode}>{mode ==='delete' ? 'Cancel' : 'Delete'}</button>

//             {mode === 'delete' ? <DeletePlayer onCancle={toggleDeletetMode} player={player}/> : undefined}
//         </li>
//     )
// }

import { useState } from "react";
import styled from "styled-components";

import { PlayerEntity } from "../types";
import { EditPlayer } from "./EditPlayer";
import { DeletePlayer } from "./DeletePlayer";

type SinglePlayerProps = {
  player: PlayerEntity;
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

export const SinglePlayer = ({ player }: SinglePlayerProps) => {
  const [mode, setMode] = useState<"edit" | "delete" | "none">("none");

  const toggleEditMode = () => {
    setMode((prevMode) => (prevMode === "edit" ? "none" : "edit"));
  };

  const toggleDeleteMode = () => {
    setMode((prevMode) => (prevMode === "delete" ? "none" : "delete"));
  };

  return (
    <Item>
      <Info>Id gracza: {player.id}</Info>
      <Info>
        Imię i nazwisko: {player.name} {player.surname}
      </Info>
      <Info>Relacja drużyny: {player.relation}</Info>

      <ActionButton onClick={toggleEditMode}>
        {mode === "edit" ? "Cancel" : "Edit"}
      </ActionButton>
      {mode === "edit" && <EditPlayer player={player} />}

      <ActionButton onClick={toggleDeleteMode}>
        {mode === "delete" ? "Cancel" : "Delete"}
      </ActionButton>
      {mode === "delete" && (
        <DeletePlayer onCancel={toggleDeleteMode} player={player} />
      )}
    </Item>
  );
};
