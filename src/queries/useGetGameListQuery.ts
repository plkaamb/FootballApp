import { useQuery } from "@tanstack/react-query";
import { useApi } from "../hooks/useApi";
import { GameListEntity } from "../types";

export const useGetGameListuery = () => {
  const { apiGet } = useApi();

  const { data, isFetched } = useQuery<GameListEntity[]>({
    queryKey: ["games"],
    queryFn: async () => {
      return apiGet<GameListEntity[]>("games");
    },
  });

  return { data, isFetched };
};
