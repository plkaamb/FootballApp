import { ChangeEvent, FormEvent } from "react";
import { PlayerEntity, TeamEntityDto } from "../types";
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

const Select = styled.select`
  width: calc(100% - 20px);
  padding: 8px 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  background-color: #e1d4d4;
  color: #333;
  font-size: 16px;

  option {
    background-color: #acacad;
    color: #333;
  }
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

type TeamFormProps = {
  handleSubmit: (e: FormEvent) => void;
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  values: TeamEntityDto;
  isPending: boolean;
  dataPlayer: PlayerEntity[] | undefined;
  editForm: boolean;
};

export const TeamForm = ({
  handleSubmit,
  handleChange,
  values,
  isPending,
  dataPlayer,
  editForm,
}: TeamFormProps) => {
  const filteredUsers = dataPlayer?.filter((user) => user.relation === 0);

  return (
    <StyledForm onSubmit={handleSubmit}>
      <FormField>
        <Label htmlFor="nameTeams">Nazwa:</Label>
        <Input
          type="text"
          name="nameTeams"
          id="nameTeams"
          value={values.nameTeams}
          onChange={handleChange}
        />
      </FormField>
      <FormField>
        <Label htmlFor="year">Rok założenia:</Label>
        <Input
          type="number"
          name="year"
          id="year"
          value={values.year}
          onChange={handleChange}
        />
      </FormField>
      <FormField>
        <Label htmlFor="location">Lokalizacja:</Label>
        <Input
          type="text"
          name="location"
          id="location"
          value={values.location}
          onChange={handleChange}
        />
      </FormField>
      <FormField>
        <Label htmlFor="teamPlayers">Drużyna:</Label>
        <Input
          type="number"
          name="teamPlayers"
          id="teamPlayers"
          value={values.teamPlayers}
          onChange={handleChange}
        />
      </FormField>

      {editForm && (
        <FormField>
          <Label htmlFor="playerSelect" id="playerSelectLabel">
            Zawodnicy:
          </Label>
          <Select
            name="playerSelect"
            id="playerSelect"
            onChange={handleChange}
            value={values.playerSelect}
            disabled={!filteredUsers || filteredUsers.length === 0}
          >
            {filteredUsers && filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.name} {user.surname}
                </option>
              ))
            ) : (
              <option value="">Brak zawodników</option>
            )}
          </Select>
        </FormField>
      )}
      <Button type="submit" disabled={isPending}>
        Save
      </Button>
    </StyledForm>
  );
};
