import { ChangeEvent, FormEvent, useState } from "react"
import { PlayerForm } from "./PlayerForm"
import { useCreatePlayerMutation } from "../queries/useCreatePlayerMutation"



export const AddPlayer = () =>{

    const {mutate, isPending}= useCreatePlayerMutation()

    const [values, setValue]= useState({
        name: '',
        surname: '',
        relation: 0
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement>) =>{

        const {name, value, type} = e.target

        setValue(prevValues =>({
            ...prevValues,
            [name]: type === 'number' ? Number(value) : value
        }))

    }

    const handleSubmit = (e: FormEvent) =>{
        e.preventDefault()

        if(values.name === '' || values.surname === ''){
            alert('Sory name and surname is not empty')
            return
        }

        mutate({
            name: values.name,
            surname: values.surname,
            relation: values.relation
        })

        setValue({
            name: '',
            surname: '',
            relation: 0
        })
    }


    return(
        <PlayerForm handleChange={handleChange} handleSubmit={handleSubmit} 
        values={values} isPending={isPending}/>
    )

}