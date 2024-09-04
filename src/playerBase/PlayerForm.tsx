import { ChangeEvent, FormEvent } from "react";
import { PlayerDto } from "../types";
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

type PlayerFormProps = {
  handleSubmit: (e: FormEvent) => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  values: PlayerDto;
  isPending: boolean;
};

export const PlayerForm = ({
  handleSubmit,
  handleChange,
  values,
  isPending,
}: PlayerFormProps) => {
  return (
    <StyledForm onSubmit={handleSubmit}>
      <FormField>
        <Label htmlFor="name">Imię</Label>
        <Input
          type="text"
          name="name"
          id="name"
          value={values.name}
          onChange={handleChange}
        />
      </FormField>
      <FormField>
        <Label htmlFor="surname">Nazwisko</Label>
        <Input
          type="text"
          name="surname"
          id="surname"
          value={values.surname}
          onChange={handleChange}
        />
      </FormField>
      <FormField>
        <Label htmlFor="relation">Relacja</Label>
        <Input
          type="number"
          name="relation"
          id="relation"
          value={values.relation}
          onChange={handleChange}
        />
      </FormField>
      <Button type="submit" disabled={isPending}>
        Save
      </Button>
    </StyledForm>
  );
};

// import { ChangeEvent, FormEvent } from "react"
// import { PlayerDto } from "../types";
// import styled from'styled-components'

// type PlayerFormProps = {
//     handleSubmit: (e: FormEvent) =>void;
//     handleChange: (e: ChangeEvent<HTMLInputElement>) =>void;
//     values: PlayerDto;
//     isPending: boolean;

// }

// const Styledtest = styled.form`
//     padding: 20px;
//     width: 30%;

//     background-color: #acacad;
//     color: #e1d4d4;
//     border: 3px solid #e16060;

// `

// export const PlayerForm = ({handleSubmit, handleChange, values, isPending}:PlayerFormProps) =>{

//     return (
//         <Styledtest onSubmit={handleSubmit}>
//         <div>
//             <div><label htmlFor="name">Imie</label></div>
//             <input type="text" name="name" id="name" value={values.name} onChange={handleChange} />
//         </div>
//         <div>
//         <div><label htmlFor="surname">Nazwisko</label></div>
//         <input type="text" name="surname" id="surname" value={values.surname} onChange={handleChange} />
//         </div>
//         <div>
//             <div><label htmlFor="relation">Relacja</label></div>
//             <input type="number" name="relation" id="relation" value={values.relation} onChange={handleChange}/>
//         </div>
//         <button type="submit" disabled={isPending}>Save</button>
//     </Styledtest>
//     )
// }
