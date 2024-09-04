import { ChangeEvent, FormEvent, useState } from "react"
import { PlayerEntity } from "../types"
import { PlayerForm } from "./PlayerForm"
import { useUpadtePlayerMutation } from "../queries/useUpdatePlayerMutation"

type EditPlayerProps ={
    player: PlayerEntity
}

export const EditPlayer = ({player} : EditPlayerProps) =>{
    const {mutate, isPending} = useUpadtePlayerMutation(player.id)

    const [values, setValues] = useState({
        name: player.name,
        surname: player.surname,
        relation: player.relation
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement>) =>{
       
        const {name, value, type} = e.target

        setValues(prevValues => ({
            ...prevValues,
            [name]: type === 'number' ? Number(value) : value
        }))
    }

    const handleSubmit = (e: FormEvent)=>{
        e.preventDefault()


        mutate({
           name: values.name,
           surname: values.surname,
           relation: values.relation
       })
   }


    return(
        <PlayerForm handleChange={handleChange} handleSubmit={handleSubmit} values={values} isPending={isPending}/>
    )

}