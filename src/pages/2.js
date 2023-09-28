import { useState } from "react"


function App(){

  // State
  const [fruits, setFruits] = useState([
    {id:1, nom: "Ananas"},
    {id:2, nom: "Mangue"},
    {id:3, nom: "Orange"}
  ])

  const [newFruit, setNewFruit] = useState("")


  // const voiture = <li>Ananas</li>
  // const voitures = [<li>Carre</li>,<li>Boule</li>,<li>Triangle</li>]

  const handleDelete = (id)=>{
    // Copy state
    const fruitsCopy = [...fruits]

    // Manipulation
    const fruitsUpdated = fruitsCopy.filter(fruit=> fruit.id !== id)

    // Modif state
    setFruits(fruitsUpdated)
  }

  const handleSubmit = (event)=>{
    event.preventDefault()

    // 1. Copy state
    const fruitsCopy = [...fruits]

    // 2. Manupiler copy state
    const id = new Date()
    const nom = newFruit
    const  fruitAAjouter = {id, nom}

    fruitsCopy.push(fruitAAjouter)

    // 3. Modifier state
    setFruits(fruitsCopy)
    setNewFruit("")
  }

  const handleChange = (event)=>{
    const  value = event.target.value
    setNewFruit(value)
  }



  // Render
  return (
    <>
      <h1>Liste des fruits</h1>
      <ul>
        {fruits.map(fruit=>(
            <li key={fruit.id}>
              {fruit.nom}
              <button onClick={()=>handleDelete(fruit.id)}>x</button>
            </li>
          )
        )}

      </ul>
      <form action="submit" onSubmit={handleSubmit}>
          <input type="text" placeholder="Ajouter un fruit..." value={newFruit} onChange={handleChange}/>
          <button>Ajouter</button>
      </form>
    </>
  )
}

export default App


// Gestion des form
// 1. creation de form
// 2. soumission form
// 3. collecte data