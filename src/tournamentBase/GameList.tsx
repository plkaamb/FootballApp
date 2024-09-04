import styled from "styled-components";
import { useState } from "react";
import { useGetGameListuery } from "../queries/useGetGameListQuery";
import { SingleGame } from "./SingleGame";
import { AddGames } from "./AddGames";
import { ButtonAddGames } from "./ButtonAddGame";

const Container = styled.div`
  padding: 20px;
  background-color: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 600px;
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

export const GameList = () => {
  const { data, isFetched } = useGetGameListuery();

  const [activButton, isActiveButton] = useState(false);

  if (!isFetched) return <Message>Loading...</Message>;

  if (!data) return <Message>No data...</Message>;

  const toggleAdd = () => {
    isActiveButton((prevActivButton) => !prevActivButton);
  };

  return (
    <Container>
      <ButtonAddGames label="Add Game" onClick={toggleAdd} />

      {activButton ? <AddGames /> : ""}

      <List>
        {data.map((game) => (
          <SingleGame game={game} key={game.id} />
        ))}
      </List>
    </Container>
  );
};
