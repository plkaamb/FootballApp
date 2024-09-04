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
  dataGameList: GameListEntity[];
  dataTeam: TeamEntity[];
};

export const LastGame = ({ dataGameList, dataTeam }: LastGameProps) => {
  // Find the latest gameDate
  const latestGameDate = dataGameList.reduce((latest, game) => {
    return new Date(game.gameDate) > new Date(latest) ? game.gameDate : latest;
  }, dataGameList[0].gameDate);

  // Filter games by the latest gameDate
  const filteredGames = dataGameList.filter(
    (game) => game.gameDate === latestGameDate
  );

  // console.log("dataTeam:", dataTeam);

  // Map relationsGamesA to team name
  const gamesWithTeamNames = filteredGames.map((game) => {
    const teamA = dataTeam.find(
      (team) => team.teamPlayers === game.relationsGamesA
    );
    const teamB = dataTeam.find(
      (team) => team.teamPlayers === game.relationsGamesB
    );
    return {
      ...game,
      teamAName: teamA ? teamA.nameTeams : "Unknown",
      teamBName: teamB ? teamB.nameTeams : "Unknown",
    };
  });

  // console.log("Games with Team Names:", gamesWithTeamNames);

  return (
    <StyledForm>
      <FormField2>
        <FormField>
          <Label htmlFor="gameDate">Data rozgrywki:</Label>
          <Input
            type="text"
            name="gameDate"
            id="gameDate"
            value={filteredGames[0].gameDate}
            readOnly
          />
        </FormField>
        <FormField>
          <Label htmlFor="placeOfGame">Lokalizacja:</Label>
          <Input
            type="text"
            name="placeOfGame"
            id="placeOfGame"
            value={filteredGames[0].placeOfGame}
            readOnly
          />
        </FormField>
      </FormField2>

      <FormField2>
        <FormField>
          <Label htmlFor="titleOfTheGame">Opis gry:</Label>
          <Input
            type="text"
            name="titleOfTheGame"
            id="titleOfTheGame"
            value={filteredGames[0].titleOfTheGame}
            readOnly
          />
        </FormField>

        <FormField>
          <Label htmlFor="timeOfDuration">Czas rozgrywki:</Label>
          <Input
            type="number"
            name="timeOfDuration"
            id="timeOfDuration"
            value={filteredGames[0].timeOfDuration}
            readOnly
          />
        </FormField>
      </FormField2>

      <FormField2>
        <FormField>
          <Label htmlFor="result">Wynik A:</Label>
          <Input2
            type="number"
            name="resultA"
            id="result"
            value={filteredGames[0].resultA}
            readOnly
          />
        </FormField>

        <FormField>
          <Label htmlFor="relationsGames">Drużyna A:</Label>
          <Input
            type="text"
            name="relationsGamesA"
            id="relationsGames"
            value={gamesWithTeamNames[0].teamAName}
            readOnly
          />
        </FormField>
      </FormField2>

      <FormField2>
        <FormField>
          <Label htmlFor="result">Wynik B:</Label>
          <Input2
            type="number"
            name="resultB"
            id="result"
            value={filteredGames[0].resultB}
            readOnly
          />
        </FormField>

        <FormField>
          <Label htmlFor="relationsGames">Drużyna B:</Label>
          <Input
            type="text"
            name="relationsGamesB"
            id="relationsGames"
            value={gamesWithTeamNames[0].teamBName}
            readOnly
          />
        </FormField>
      </FormField2>
    </StyledForm>
  );
};
