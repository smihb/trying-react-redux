import React from "react";
import { useDispatch } from "react-redux";
import { buy_pokemon_action, return_pokemon_action } from "../../redux/actions/gameShopAction";

const HookComprarPokemon = () => {

    const dispatch = useDispatch();

  return (
    <div className="buttons">
        <button className="buy-button"  onClick={()=>{
            dispatch(buy_pokemon_action(1));
        }}>Buy</button>
        <button className="return-button" onClick={()=>{
            dispatch(return_pokemon_action(1));
        }}>Return</button>
    </div>
  );
};
export default HookComprarPokemon;