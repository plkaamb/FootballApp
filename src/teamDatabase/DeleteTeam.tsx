import styled from "styled-components";
import { TeamEntity } from "../types";
import { useDeleteTeamMutation } from "../queries/useDeleteTeamMutation";
import { useGetGameListuery } from "../queries/useGetGameListQuery";

type DeleteTeamProps = {
  team: TeamEntity;
  onCancel: () => void;
};

const DeleteContainer = styled.div`
  padding: 20px;
  background-color: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Message = styled.p`
  font-size: 16px;
  color: #343a40;
  margin-bottom: 20px;
`;

const Strong = styled.strong`
  font-weight: bold;
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
    background-color: #6c757d;

    &:hover {
      background-color: #5a6268;
    }
  }

  &:disabled {
    background-color: #aaa;
    cursor: not-allowed;
  }
`;

export const DeletePlayer = ({ team, onCancel }: DeleteTeamProps) => {
  const { mutate, isPending } = useDeleteTeamMutation(team.id);
  const { data, isFetched } = useGetGameListuery();

  const handleDelete = () => {
    mutate();
  };

  if (isPending) return <Message>Loading Delete...</Message>;
  if (!isFetched) return <Message>Loading Data...</Message>;
  if (!data) return <Message>No data...</Message>;

  console.log("team", team.teamPlayers);
  console.log("data", data);

  let statusDeleteTeam: boolean = false;

  data.forEach((elem) => {
    // console.log(elem.relationsGamesA === team.teamPlayers);
    // console.log(elem.relationsGamesB === team.teamPlayers);
    if (elem.relationsGamesA === team.teamPlayers) {
      statusDeleteTeam = true;
    }
    if (elem.relationsGamesB === team.teamPlayers) {
      statusDeleteTeam = true;
    }
  });

  console.log(statusDeleteTeam);

  return (
    <DeleteContainer>
      {!statusDeleteTeam ? (
        <Message>
          Are you sure you want to delete the team? :{" "}
          <Strong>{team.nameTeams}</Strong>?
        </Message>
      ) : (
        <Message>You can't remove a player who is in the team</Message>
      )}

      {!statusDeleteTeam && (
        <ActionButton onClick={handleDelete}>Delete</ActionButton>
      )}

      <ActionButton onClick={onCancel}>Cancel</ActionButton>
    </DeleteContainer>
  );
};
