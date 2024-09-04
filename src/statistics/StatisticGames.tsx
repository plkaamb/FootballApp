import styled from "styled-components";

import { useGetGameListuery } from "../queries/useGetGameListQuery";
import { TitleGame } from "./Title";
import { LastGame } from "./LastGame";
import { TopThree } from "./TopThree";
import { useGetTeamQuery } from "../queries/useGetTeamQuery";
import { GameChart } from "./GameChart";

const Container = styled.div`
  padding: 20px;
  background-color: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 600px;
`;

const Message = styled.p`
  text-align: center;
  font-size: 16px;
  color: #343a40;
`;

export const GameStatistic = () => {
  const { data, isFetched } = useGetGameListuery();
  const { data: dataTeam, isFetched: isFetchedTem } = useGetTeamQuery();

  if (!isFetched) return <Message>Loading...</Message>;
  if (!isFetchedTem) return <Message>Loading...</Message>;

  if (!data) return <Message>No data...</Message>;
  if (!dataTeam) return <Message>No data...</Message>;

  // console.log(data);

  return (
    <Container>
      <TitleGame />

      <LastGame dataGameList={data} dataTeam={dataTeam} />
      <TopThree top3={data} dataTeam={dataTeam} />
      <GameChart gameData={data} />
    </Container>
  );
};
