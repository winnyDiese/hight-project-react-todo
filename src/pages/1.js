import { useState } from "react"


function App(){


  // State
  const [compteur, setCompteur] =   useState(1)

  // comportement
  const handleClick = ()=>{
    // alert('HandleClick')pteur(n => n+1)
  }

  // Render
  return (
    <>
      <h1>{compteur}</h1>
      <button onClick={handleClick}>Incrementation</button>
    </>
  )
}

export default App
