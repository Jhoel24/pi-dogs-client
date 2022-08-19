import axios from 'axios'
import { BUSCAR_DOG, LIMPIAR_DOG, OBTENER_DOGS, OBTENER_TEMPERAMENTOS, SELECT_DOG } from '../types'

export const getDogs = () => {
    return async dispatch => {
        try {
            const { data } = await axios.get('http://localhost:3001/dogs') 
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
            const { data } = await axios.get(`http://localhost:3001/dogs?name=${dog}`)
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
            const { data } = await axios.get(`http://localhost:3001/dogs/${id}`)
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
            const { data } = await axios.get(`http://localhost:3001/temperaments`)
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

