import styled from "styled-components";
import { useDeletePlayerMutation } from "../queries/useDeletePlayerMutation";
import { PlayerEntity } from "../types";

type DeletePlayerProps = {
  player: PlayerEntity;
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

export const DeletePlayer = ({ player, onCancel }: DeletePlayerProps) => {
  const { mutate, isPending } = useDeletePlayerMutation(player.id);

  const handleDelete = () => {
    mutate();
  };

  if (isPending) return <Message>Loading Delete...</Message>;

  return (
    <DeleteContainer>
      {player.relation === 0 ? (
        <Message>
          Do you really want to delete this player name:{" "}
          <Strong>{player.name}</Strong>?
        </Message>
      ) : (
        <Message>You can't remove a player who is in the team</Message>
      )}

      {player.relation === 0 && (
        <ActionButton onClick={handleDelete}>Delete</ActionButton>
      )}

      <ActionButton onClick={onCancel}>Cancel</ActionButton>
    </DeleteContainer>
  );
};
