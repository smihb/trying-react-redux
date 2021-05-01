import React from 'react';
import imgPokemon from "../../img/pokemon.jpg";

const Imagen = () =>{
    return(
        <div className="card__img-container">
            {<img src={imgPokemon} alt={""} />}
        </div>
    )
}
export default Imagen;