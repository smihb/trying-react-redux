import "./App.css";
//import CantidadPokemons from "./components/cantidadPokemos";
//import ComprarPokemons from "./components/compraPokemos";

import store from "./redux/store";
import { Provider } from "react-redux";
import BuscadorPokemon from "./components/buscardor/buscadorPokemon";
import ResultadoPokemon from "./components/buscardor/resultadoPokemon";
import Tarjeta from "./components/tarjeta/Tarjeta";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Tarjeta />
        <BuscadorPokemon />
        <ResultadoPokemon />
      </div>
    </Provider>
  );
}

export default App;
