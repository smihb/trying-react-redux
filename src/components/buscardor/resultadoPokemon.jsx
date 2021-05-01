import React from 'react';
import { useSelector } from 'react-redux';

const ResultadoPokemon = () => {
    const buscador = useSelector((state) => state.buscador)
    return(
        <div className="resultado">
            <h3>Resultado</h3>
            {buscador.loading && <h4>Buscando...</h4>}
            {buscador.error !== '' && <h5>Error</h5>}
            {buscador.Pokemon.length !== 0 &&
                <div className="imgPokemon">
                    <img src={buscador.Pokemon.sprites.front_default} alt=""/>
                    <span>{buscador.Pokemon.name}</span>
                </div>
            }
        </div>
    );
}
export default ResultadoPokemon;