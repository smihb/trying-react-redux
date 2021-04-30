import React from "react";
import { useSelector } from "react-redux";

const HookCantidadPokemon = () => {
  
    const game_shop = useSelector((state)=> state.game_shop);

  return <div>Pokemon: {game_shop.pokemon}</div>;
};

export default HookCantidadPokemon;
