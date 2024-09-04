import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useApi } from "../hooks/useApi";
import { GameListDto, GameListEntity } from "../types";

export const useCreateGameListMutation = () => {
  const { apiPost } = useApi();
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationKey: ["games", "create"],
    mutationFn: async (payload: GameListDto) => {
      return apiPost<GameListEntity, GameListDto>("games", payload);
    },
    onSuccess: () => [
      queryClient.invalidateQueries({
        queryKey: ["games"],
      }),
    ],
  });

  return {
    mutate,
    isPending,
  };
};
