import { BUSCAR_DOG, LIMPIAR_DOG, OBTENER_DOGS, OBTENER_TEMPERAMENTOS, SELECT_DOG } from "../types"

const initialState = {
    dogs: [],
    dogsFiltered: [],
    temperamentsSelect: [],
    dogSelected: {}
}

export const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case OBTENER_DOGS:
            return {
                ...state,
                dogs: action.payload,
                dogsFiltered: action.payload
            }
        case BUSCAR_DOG:
            return {
                ...state,
                dogs: action.payload,
                dogsFiltered: action.payload
            }
        case SELECT_DOG:
            return {
                ...state,
                dogSelected: action.payload
            }
        case LIMPIAR_DOG:
            return {
                ...state,
                dogSelected: action.payload
            }
        case OBTENER_TEMPERAMENTOS:
            return {
                ...state,
                temperamentsSelect: action.payload
            }
        default: 
        return state
    }
}