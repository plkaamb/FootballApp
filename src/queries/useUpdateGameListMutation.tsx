import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useApi } from "../hooks/useApi";
import { GameListDto, GameListEntity } from "../types";

export const useUpadteGameListMutation = (gameId: string) => {
  const { apiPut } = useApi();
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationKey: ["games", "update", gameId],
    mutationFn: async (payload: GameListDto) => {
      return apiPut<GameListEntity, GameListDto>(`games/${gameId}`, payload);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["games"],
      });
    },
  });

  return {
    mutate,
    isPending,
  };
};
