import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useApi } from "../hooks/useApi"
import { PlayerEntity } from "../types"

export const useDeletePlayerMutation = (playerId: string) =>{
    const {apiDelete} = useApi()
    const queryClient = useQueryClient()

    const {mutate, isPending} = useMutation({
        mutationKey: ['players', 'delete', playerId],
        mutationFn: async () =>{
            return apiDelete<PlayerEntity>(`players/${playerId}`)
        },
        onSuccess: () =>{
            queryClient.invalidateQueries({
                queryKey: ['players']
            })
        }
    })

    return {
        mutate,
        isPending
    }
}