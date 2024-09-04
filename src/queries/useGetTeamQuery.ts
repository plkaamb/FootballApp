import { useQuery } from "@tanstack/react-query";
import { useApi } from "../hooks/useApi";
import { TeamEntity } from "../types";

export const useGetTeamQuery = () => {
  const { apiGet } = useApi();

  const { data, isFetched } = useQuery<TeamEntity[]>({
    queryKey: ["teams"],
    queryFn: async () => {
      return apiGet<TeamEntity[]>("teams");
    },
  });

  return { data, isFetched };
};
