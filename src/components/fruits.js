
// export default function Fruit({fruitInfo, onFruitDelete}){
export default function Fruit({fruitInfo, actionClick}){
    // State

    // comportement

    // affichage
    return (
        <li>
            {fruitInfo.nom}
            {/* <button onClick={()=>onFruitDelete(fruitInfo.id)}>x</button> */}
            <button onClick={actionClick}>x</button>
        </li>
    )
}