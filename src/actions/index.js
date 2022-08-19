import axios from 'axios'
import { BUSCAR_DOG, LIMPIAR_DOG, OBTENER_DOGS, OBTENER_TEMPERAMENTOS, SELECT_DOG } from '../types'

export const getDogs = () => {
    return async dispatch => {
        try {
            const { data } = await axios.get('https://pi-dogs-app-2022.herokuapp.com/dogs') 
            return dispatch({
                type: OBTENER_DOGS,
                payload: data
            })          
        } catch (error) {
            console.log(error)
        }
    }
}

export const searchDog = dog => {
    return async dispatch => {
        try {
            const { data } = await axios.get(`https://pi-dogs-app-2022.herokuapp.com/dogs?name=${dog}`)
            return dispatch({
                type: BUSCAR_DOG,
                payload: data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const selectDog = id => {
    return async dispatch => {
        try {
            const { data } = await axios.get(`https://pi-dogs-app-2022.herokuapp.com/dogs/${id}`)
            return dispatch({
                type: SELECT_DOG,
                payload: data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const getTemperamentsToSelect = () => {
    return async dispatch => {
        try {
            const { data } = await axios.get(`https://pi-dogs-app-2022.herokuapp.com/temperaments`)
            return dispatch({
                type: OBTENER_TEMPERAMENTOS,
                payload: data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const cleanDog = () => ({
    type: LIMPIAR_DOG,
    payload: {}
})

