import { FETCH_POKEMON_FAILURE, FETCH_POKEMON_REQUEST, FETCH_POKEMON_SUCCESS } from "../actions/buscardorAction";

const initialState = {
    loading: false,
    Pokemon: [],
    error: ''
}

const buscador = (state = initialState, action) => {
    switch(action.type){
        case FETCH_POKEMON_REQUEST:{
            return {
                ...state,
                loading: true
            }
        }
        case FETCH_POKEMON_SUCCESS:{
            return{
                loading: false,
                Pokemon: action.payload,
                error: ''
            }
        }
        case FETCH_POKEMON_FAILURE: {
            return {
                loading: false,
                Pokemon: [],
                error: action.payload
            }
        }
        default: return state;
    }
}
export default buscador;