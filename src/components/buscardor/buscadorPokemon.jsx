import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import fetchPokemon from '../../redux/actions/buscardorAction';

const BuscadorPokemon = () => {
    const dispatch = useDispatch();
    const [pokemonName, setPokemonName] = useState('')
    return(
        <div className="buscador">
            <label htmlFor="buscar_pokemon">Buscar Pokemon</label>
            <div>
                <input type="text" id="buscar_pokemon" 
                value={pokemonName} 
                onChange={(e)=>setPokemonName(e.target.value)}
                />
                <button
                onClick={()=>dispatch(fetchPokemon(pokemonName))}
                >Buscar</button>
            </div>
        </div>
    );
}
export default BuscadorPokemon;