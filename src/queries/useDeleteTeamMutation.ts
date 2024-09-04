import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useApi } from "../hooks/useApi";
import { TeamEntity } from "../types";

export const useDeleteTeamMutation = (playerId: string) => {
  const { apiDelete } = useApi();
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationKey: ["teams", "delete", playerId],
    mutationFn: async () => {
      return apiDelete<TeamEntity>(`teams/${playerId}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["teams"],
      });
    },
  });

  return {
    mutate,
    isPending,
  };
};
