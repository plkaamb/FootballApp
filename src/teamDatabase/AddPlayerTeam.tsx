import { ChangeEvent, FormEvent, useState } from "react";
import { useUpadtePlayerMutation } from "../queries/useUpdatePlayerMutation";
import styled from "styled-components";
import { useGetPlayersQuery } from "../queries/useGetPlayersQuery";
import { PlayerTest } from "../types";

const StyledForm = styled.form`
  padding: 20px;
  margin: 2.5% auto;
  background-color: #acacad;
  color: #e1d4d4;
  border: 3px solid #e16060;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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
const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;
const FormField = styled.div`
  margin-bottom: 15px;
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

type RelationProps = {
  relation: number;
  player: PlayerTest;
  id: string;
};

export const AddPlayerTeam = ({ relation }: RelationProps) => {
  // const { mutate, isPending } = useAddPlayerTeamMutation(player.id);
  const { data: dataPlayer } = useGetPlayersQuery(); // pobranie uzytkowników
  // const { data, isFetched } = useGetTeamQuery();
  const [selectedPlayerId, setSelectedPlayerId] = useState<string | null>(null);
  const { mutate: mutatePlayer } = useUpadtePlayerMutation(
    selectedPlayerId || ""
  );

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { value } = e.target;

    console.log(value);

    if (value !== "0") {
      setSelectedPlayerId(value);
      console.log("jestem");
    } else {
      setSelectedPlayerId("0");
    }

    // value && setSelectedPlayerId(value);
  };
  const filteredUsers = dataPlayer?.filter((user) => user.relation === 0);
  const testData = dataPlayer?.filter((user) => user.id === selectedPlayerId);

  // console.log(filteredUsers);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (testData?.length > 0) {
      mutatePlayer({
        name: testData ? testData[0].name : "",
        surname: testData ? testData[0].surname : "",
        relation: relation,
      });
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <FormField>
        <Label htmlFor="playerSelect" id="playerSelectLabel">
          Zawodnicy:
        </Label>
        <Select
          name="playerSelect"
          id="playerSelect"
          onChange={handleChange}
          // disabled={!filteredUsers || filteredUsers.length === 0}
        >
          <option value="0">Wybór</option>
          {filteredUsers?.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name} {user.surname}
            </option>
          ))}
        </Select>
      </FormField>
      <Button type="submit">Add</Button>
    </StyledForm>
  );
};

//  {filteredUsers && filteredUsers.length > 0 ? (

//         filteredUsers.map((user) => (

//           <option key={user.id} value={user.id}>
//             {user.name} {user.surname}
//           </option>
//         ))
//       ) : (
//         <option value="">Brak zawodników</option>
//       )}
