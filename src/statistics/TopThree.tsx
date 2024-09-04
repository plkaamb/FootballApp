import styled from "styled-components";
import { GameListEntity, TeamEntity } from "../types";

const StyledForm = styled.form`
  padding: 20px;
  margin: 2.5% auto;
  background-color: #acacad;
  color: #e1d4d4;
  border: 3px solid #e16060;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 300px;
`;

const FormField = styled.div`
  margin-bottom: 15px;
`;

const FormField2 = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 15px;
`;
const Input2 = styled.input`
  width: 60px;
  padding: 8px 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

const Input = styled.input`
  width: calc(100% - 20px);
  padding: 8px 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
`;

type LastGameProps = {
  top3: GameListEntity[];
  dataTeam: TeamEntity[];
};

export const TopThree = ({ top3, dataTeam }: LastGameProps) => {
  const teamResults: {
    [key: number]: { teamName: string; totalResult: number };
  } = {};

  top3.forEach((game) => {
    const teamA = dataTeam.find(
      (team) => team.teamPlayers === game.relationsGamesA
    );
    const teamB = dataTeam.find(
      (team) => team.teamPlayers === game.relationsGamesB
    );

    if (teamA) {
      if (!teamResults[game.relationsGamesA]) {
        teamResults[game.relationsGamesA] = {
          teamName: teamA.nameTeams,
          totalResult: 0,
        };
      }
      teamResults[game.relationsGamesA].totalResult += game.resultA;
    }

    if (teamB) {
      if (!teamResults[game.relationsGamesB]) {
        teamResults[game.relationsGamesB] = {
          teamName: teamB.nameTeams,
          totalResult: 0,
        };
      }
      teamResults[game.relationsGamesB].totalResult += game.resultB;
    }
  });

  // Convert the object to an array and sort it by totalResult in descending order
  const sortedTeamResults = Object.values(teamResults).sort(
    (a, b) => b.totalResult - a.totalResult
  );

  // Get the top 3 results
  const top3Results = sortedTeamResults.slice(0, 3);

  // console.log(top3Results.length);
  // console.log(top3Results);

  return (
    <StyledForm>
      <FormField2>
        <FormField>
          <Label htmlFor="Top1">Top 1</Label>
          <Input2
            type="number"
            id="Top1"
            value={top3Results.length > 0 ? top3Results[0].totalResult : 0}
            readOnly
          />
        </FormField>
        <FormField>
          <Label htmlFor="team">Drużyna:</Label>
          <Input
            type="text"
            name="placeOfGame"
            id="team"
            value={top3Results.length > 0 ? top3Results[0].teamName : ""}
            readOnly
          />
        </FormField>
      </FormField2>

      <FormField2>
        <FormField>
          <Label htmlFor="Top2">Top 2</Label>
          <Input2
            type="number"
            id="Top2"
            value={top3Results.length > 1 ? top3Results[1].totalResult : 0}
            readOnly
          />
        </FormField>

        <FormField>
          <Label htmlFor="team">Drużyna:</Label>
          <Input
            type="text"
            id="team"
            value={top3Results.length > 1 ? top3Results[1].teamName : ""}
            readOnly
          />
        </FormField>
      </FormField2>

      <FormField2>
        <FormField>
          <Label htmlFor="Top3">Top 3</Label>
          <Input2
            type="number"
            id="Top3"
            value={top3Results.length > 2 ? top3Results[2].totalResult : 0}
            readOnly
          />
        </FormField>

        <FormField>
          <Label htmlFor="team">Drużyna:</Label>
          <Input
            type="text"
            id="team"
            value={top3Results.length > 2 ? top3Results[2].teamName : ""}
            readOnly
          />
        </FormField>
      </FormField2>
    </StyledForm>
  );
};
