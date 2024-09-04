import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  color: #343a40;
  margin: 0;
`;

export const TitleGame = () => {
  return (
    <Container>
      <Title>Game Statistic</Title>
    </Container>
  );
};
