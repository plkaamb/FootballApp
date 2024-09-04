import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useApi } from "../hooks/useApi"
import { PlayerDto, PlayerEntity } from "../types"


export const  useCreatePlayerMutation = () =>{
    const {apiPost} = useApi()
    const queryClient = useQueryClient()

    const {mutate, isPending} = useMutation({
        mutationKey: ['players', 'create'],
        mutationFn: async (payload: PlayerDto) =>{
            return apiPost<PlayerEntity, PlayerDto>('players', payload)
        },
        onSuccess: () =>[
            queryClient.invalidateQueries({
                queryKey: ['players']
            })
        ]
    })

    return {
        mutate,
        isPending
    }
}