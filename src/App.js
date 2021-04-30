import "./App.css";
//import CantidadPokemons from "./components/cantidadPokemos";
//import ComprarPokemons from "./components/compraPokemos";
import imgPokemon from "./img/pokemon.jpg";
import store from "./redux/store";

import { Provider } from "react-redux";
import HookCantidadPokemon from "./components/hook.CantidadPokemon";
import HookComprarPokemon from "./components/hook.ComprarPokemon";
import BuscadorPokemon from "./components/buscardor/buscadorPokemon";
import ResultadoPokemon from "./components/buscardor/resultadoPokemon";

function App() {
  return (
    <Provider store={store}> 
      <div className="App">
        <div className="card">
          <div className="card__img-container">
            {<img src={imgPokemon} alt={""} />}
          </div>
          <div className="card__menu-container">
            <div className="card__menu-container--counter">
              <div className="">
                <HookCantidadPokemon />
              </div>
            </div>
            <div className="buttons">
              <HookComprarPokemon />
            </div>
          </div>
        </div>
        <BuscadorPokemon />
        <ResultadoPokemon />
      </div>
    </Provider>
  );
}

export default App;
