import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useApi } from "../hooks/useApi";
import { TeamEntity, TeamEntityDto } from "../types";

export const useCreateTeamMutation = () => {
  const { apiPost } = useApi();
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationKey: ["teams", "create"],
    mutationFn: async (payload: TeamEntityDto) => {
      return apiPost<TeamEntity, TeamEntityDto>("teams", payload);
    },
    onSuccess: () => [
      queryClient.invalidateQueries({
        queryKey: ["teams"],
      }),
    ],
  });

  return {
    mutate,
    isPending,
  };
};
