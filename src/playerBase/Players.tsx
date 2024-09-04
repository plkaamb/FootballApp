import styled from "styled-components";
import { SinglePlayer } from "./SinglePlayer";
import { useGetPlayersQuery } from "../queries/useGetPlayersQuery";
import { AddPlayer } from "./AddPlayer";
import { ButtonAddPlayer } from "./ButtonAddPlayer";
import { useState } from "react";

const Container = styled.div`
  padding: 20px;
  background-color: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 500px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const Message = styled.p`
  text-align: center;
  font-size: 16px;
  color: #343a40;
`;

export const Players = () => {
  const { data, isFetched } = useGetPlayersQuery();

  const [activButton, isActiveButton] = useState(false);

  if (!isFetched) return <Message>Loading...</Message>;

  if (!data) return <Message>No data...</Message>;

  const toggleAdd = () => {
    isActiveButton((prevActivButton) => !prevActivButton);
  };

  return (
    <Container>
      <ButtonAddPlayer label="Add Player" onClick={toggleAdd} />

      {activButton ? <AddPlayer /> : ""}

      <List>
        {data.map((player) => (
          <SinglePlayer player={player} key={player.id} />
        ))}
      </List>
    </Container>
  );
};
