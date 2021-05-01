import React from "react";
import { useSelector } from "react-redux";

const HookCantidadPokemon = () => {
  const game_shop = useSelector((state) => state.game_shop);

  return (
    <div className="card__menu-container--counter">
    <div className="">
      <div>Pokemon: {game_shop.pokemon}</div>
    </div>
    </div>
  );
};

export default HookCantidadPokemon;
