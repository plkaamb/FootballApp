import { ChangeEvent, FormEvent } from "react";
import { GameListDto } from "../types";
import styled from "styled-components";

const StyledForm = styled.form`
  padding: 20px;
  margin: 2.5% auto;
  background-color: #acacad;
  color: #e1d4d4;
  border: 3px solid #e16060;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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

const Button = styled.button`
  padding: 10px 15px;
  background-color: #e16060;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;

  &:disabled {
    background-color: #aaa;
    cursor: not-allowed;
  }

  &:hover:enabled {
    background-color: #d45050;
  }
`;

type GamesFormProps = {
  handleSubmit: (e: FormEvent) => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  values: GameListDto;
  isPending: boolean;
};

export const GameForm = ({
  handleSubmit,
  handleChange,
  values,
  isPending,
}: GamesFormProps) => {
  return (
    <StyledForm onSubmit={handleSubmit}>
      <FormField>
        <Label htmlFor="gameDate">Data rozgrywki:</Label>
        <Input
          type="date"
          name="gameDate"
          id="gameDate"
          value={values.gameDate}
          onChange={handleChange}
        />
      </FormField>
      <FormField>
        <Label htmlFor="titleOfTheGame">Opis gry:</Label>
        <Input
          type="text"
          name="titleOfTheGame"
          id="titleOfTheGame"
          value={values.titleOfTheGame}
          onChange={handleChange}
        />
      </FormField>
      <FormField>
        <Label htmlFor="placeOfGame">Lokalizacja:</Label>
        <Input
          type="text"
          name="placeOfGame"
          id="placeOfGame"
          value={values.placeOfGame}
          onChange={handleChange}
        />
      </FormField>
      <FormField>
        <Label htmlFor="timeOfDuration">Czas rozgrywki:</Label>
        <Input
          type="number"
          name="timeOfDuration"
          id="timeOfDuration"
          value={values.timeOfDuration}
          onChange={handleChange}
        />
      </FormField>

      <FormField2>
        <FormField>
          <Label htmlFor="result">Wynik A:</Label>
          <Input2
            type="number"
            name="resultA"
            id="result"
            value={values.resultA}
            onChange={handleChange}
          />
        </FormField>

        <FormField>
          <Label htmlFor="relationsGames">Drużyna A:</Label>
          <Input2
            type="number"
            name="relationsGamesA"
            id="relationsGames"
            value={values.relationsGamesA}
            onChange={handleChange}
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
            value={values.resultB}
            onChange={handleChange}
          />
        </FormField>

        <FormField>
          <Label htmlFor="relationsGames">Drużyna B:</Label>
          <Input2
            type="number"
            name="relationsGamesB"
            id="relationsGames"
            value={values.relationsGamesB}
            onChange={handleChange}
          />
        </FormField>
      </FormField2>

      {/* <FormField>
        <Label htmlFor="relationsGames">Relacja:</Label>
        <Input
          type="text"
          name="relationsGames"
          id="relationsGames"
          value={values.relationsGames}
          onChange={handleChange}
        />
      </FormField> */}

      <Button type="submit" disabled={isPending}>
        Save
      </Button>
    </StyledForm>
  );
};
