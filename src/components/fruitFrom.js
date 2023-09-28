
import { useState } from "react"

export default function FruitFrom({handleAdd}){
    // State
    const [newFruit, setNewFruit] = useState("")


    // Comportement
    const handleSubmit = (event)=>{
        event.preventDefault()
        // 2. Manupiler copy state
        const id = new Date()
        const nom = newFruit
        const  fruitAAjouter = {id, nom}

        handleAdd(fruitAAjouter)

        // 3. Modifier state
        setNewFruit("")
    }

    const handleChange = (event)=>{
        const  value = event.target.value
        setNewFruit(value)
    }

    // Affichage render
    return <form action="submit" onSubmit={handleSubmit}>
        <input type="text" placeholder="Ajouter un fruit..." value={newFruit} onChange={handleChange}/>
        <button>Ajouter</button>
    </form>
}