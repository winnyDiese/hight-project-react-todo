import { useState } from "react"
import FruitFrom from "./components/fruitFrom"
import Fruit from "./components/fruits"


function App(){

  // State
  const [fruits, setFruits] = useState([
    {id:1, nom: "Ananas"},
    {id:2, nom: "Mangue"},
    {id:3, nom: "Orange"}
  ])


  // Comportement
  const handleDelete = (id)=>{
    // Copy state
    const fruitsCopy = [...fruits]

    // Manipulation
    const fruitsUpdated = fruitsCopy.filter(fruit=> fruit.id !== id)

    // Modif state
    setFruits(fruitsUpdated)
  }

  const handleAdd = (fruitAAjouter)=>{
    // State
    const fruitsCopy = [...fruits]
    // Manipule state
    fruitsCopy.push(fruitAAjouter)
    // Modif state
    setFruits(fruitsCopy)

  }

  const fruitPrefere = (fruitNom)=>{
    alert(`J'aime bien ${fruitNom}`)
  }


  // Render
  return (
    <>
      <h1>Liste des fruits</h1>
      <ul>
        {fruits.map(fruit=>(
            <Fruit 
              fruitInfo={fruit} 
              // onFruitDelete={handleDelete}

              // actionClick={()=>fruitPrefere(fruit.nom)} 
              actionClick={()=>handleDelete(fruit.id)} 
              key={fruit.id} 
            />
          )
        )}

      </ul>
      
      <FruitFrom handleAdd={handleAdd} />
    </>
  )
}

export default App


// Gestion des form
// 1. creation de form
// 2. soumission form
// 3. collecte data