import { useState } from 'react'

export const useSelectTemperament = (options) => {

    const [state, setState] = useState([])

    const handleChangeSelect = e => {
        if((state.length === 0 || state.length < 3) && e.target.value !== ''){
          if(!state.includes(e.target.value)){
            setState([...state, Number(e.target.value)])
          }
        }
    }

    const handleDelete = el => {
        const newState = state.filter(e => e !== el)
        setState(newState)
    }

    const SelectTemperament = () => {
      
      return (
        <>
          <select
            multiple={true}
            value={state}
            onChange={handleChangeSelect}
          >
            <option value="">-- Seleccione --</option>
            { options.map(opcion => (
              <option
                key={opcion.id}
                value={opcion.id}
              >{opcion.name}</option>
            )) }
          </select> 
        </>
      )
    }

    return [state, SelectTemperament, setState, handleDelete]

}