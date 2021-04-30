import axios from "axios";

export const FETCH_POKEMON_REQUEST = 'FETCH_POKEMON_REQUEST';
export const FETCH_POKEMON_SUCCESS = 'FETCH_POKEMON_SUCCESS'
export const FETCH_POKEMON_FAILURE = 'FETCH_POKEMON_FAILURE'

//actions
export const fetch_pokemon_request = () =>{
    return{
        type: FETCH_POKEMON_REQUEST
    }
}
export const fetch_pokemon_success = (pokemon) =>{
    return{
        type: FETCH_POKEMON_SUCCESS,
        payload: pokemon
    }
}
export const fetch_pokemon_failure = (error) =>{
    return{
        type: FETCH_POKEMON_FAILURE,
        payload: error
    }
}


const fetchPokemon = (valor) => {
    return (dispatch) =>{
        dispatch(fetch_pokemon_request());
        axios.get(`https://pokeapi.co/api/v2/pokemon/${valor}`)
            .then(response => {
                dispatch(fetch_pokemon_success(response.data))
            })
            .catch(error => {
                dispatch(fetch_pokemon_failure('No se encontró el pokemon'))
            });
    }
}

export default fetchPokemon;