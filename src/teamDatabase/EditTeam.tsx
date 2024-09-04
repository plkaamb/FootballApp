import { ChangeEvent, FormEvent, useState } from "react";
import { TeamEntity } from "../types";
import { useUpadteTeamMutation } from "../queries/useUpdateTeamMutation";
import { TeamForm } from "./TeamForm";
import { useGetPlayersQuery } from "../queries/useGetPlayersQuery";
type EditTeamProps = {
  team: TeamEntity;
};

export const EditTeam = ({ team }: EditTeamProps) => {
  const { mutate, isPending } = useUpadteTeamMutation(team.id);
  const { data: dataPlayer } = useGetPlayersQuery();

  const [values, setValues] = useState({
    nameTeams: team.nameTeams,
    year: team.year,
    location: team.location,
    teamPlayers: team.teamPlayers,
    playerSelect: team.playerSelect,
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    setValues((prevValues) => ({
      ...prevValues,
      [name]: type === "number" ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    mutate({
      nameTeams: values.nameTeams,
      year: values.year,
      location: values.location,
      teamPlayers: values.teamPlayers,
      playerSelect: "",
    });
  };

  return (
    <TeamForm
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      values={values}
      isPending={isPending}
      dataPlayer={dataPlayer}
      editForm={false}
    />
  );
};
