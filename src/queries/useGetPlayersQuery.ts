import { useQuery } from "@tanstack/react-query";
import { PlayerEntity } from "../types";
import { useApi } from "../hooks/useApi";

export const useGetPlayersQuery = () => {
  const { apiGet } = useApi();

  const { data, isFetched } = useQuery<PlayerEntity[]>({
    queryKey: ["players"],
    queryFn: async () => {
      return apiGet<PlayerEntity[]>("players");
      //   const response = await fetch("http://localhost:3000/players");
      //   return response.json() as Promise<PlayerEntity[]>;
    },
  });
  // console.log("isFetched", isFetched);

  return { data, isFetched };
};
