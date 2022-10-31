import { useState } from "react"

export default function SingleCoffee({entireObject}) {

const [favorite,setFavorite]=useState(false) 




    return( 
    <div className="menu-items__item" style={{backgroundColor:favorite ? 'red' : 'white'}}>

    <img src={entireObject.image}
    alt=""
    />
    <div>
      <h3>{entireObject.name}</h3>
      <span>Price: {entireObject.price}</span>
      <p> {entireObject.description}</p>
      <button onClick={() => setFavorite(true)}>Favorite </button>
    </div>
  </div>

    )
}