import React from 'react';
import HookCantidadPokemon from "./hook.CantidadPokemon";
import HookComprarPokemon from "./hook.botones";
import Imagen from './imagen';

const Tarjeta = () => {
    return(
        <div className="card">
          <Imagen/>
          <div className="card__menu-container">
            <HookCantidadPokemon />
            <HookComprarPokemon />
          </div>
        </div>
    )
}
export default Tarjeta;