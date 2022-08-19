import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux' 
import { getTemperamentsToSelect } from '../actions'
import { useSelectTemperament } from '../hooks/useSelectTemperament'
import { useNavigate } from 'react-router-dom'
import style from '../styles/Form.module.css'
import axios from 'axios'

const Form = () => {

    const dispatch = useDispatch()
    const temperamentsSelect = useSelector(state => state.temperamentsSelect)

    const [error, setError] = useState(false)
    const [values, setValues] = useState({
        name: '',
        height_min: '',
        height_max: '',
        weight_min: '',
        weight_max: '',
        year_min: '',
        year_max: '',
        image: '',
        temperamentId: []
    })

    const { name, height_min, height_max, weight_max, weight_min, year_max, year_min, image } = values

    const navigate = useNavigate()
    
    useEffect(() => {
        dispatch(getTemperamentsToSelect())
        // eslint-disable-next-line
    }, [])
    const [temperament, SelectTemperament, setState, handleDelete] = useSelectTemperament(temperamentsSelect)
    
    const handleChange = e => {
        setValues({
            ...values,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = async e => {
        e.preventDefault()
        if([name, height_min, height_max, weight_max, weight_min, year_max, year_min].includes('') || temperament.length > 3){
            setError(true)
            setTimeout(() => {
                setError(false)
            }, 2500)
            return
        }

        try {
            const obj = {
               name,
               height_min,
               height_max,
               weight_min,
               weight_max,
               year_min,
               year_max,
               image,
               temperamentId: temperament
            }

            await axios.post('http://localhost:3001/dogs', obj)
            setTimeout(() => {
                setState([])
                navigate('/home')
            }, 1500);

        } catch (error) {
            console.log('Error: ', error)
        }

    }

    return (
        <div className="container">
            <h2 className={style.title}>Create a <span>dog</span></h2>
            <div className={style.formContainer}>
                <form className={style.form} onSubmit={handleSubmit}>
                    <div className={style.campo}>
                        <label>Breed: </label>
                        <input type="text" placeholder="Enter the breed..." name='name' value={name} onChange={handleChange}/>
                    </div>
                    <div className={style.campoMultiple}>
                        <label>Size: </label>
                        <div className={style.both}>
                            <input type="number" placeholder="Min" name="height_min" value={height_min} onChange={handleChange}/>
                            <input type="number" placeholder="Max" name="height_max" value={height_max} onChange={handleChange}/> 
                        </div>
                    </div>
                    <div className={style.campoMultiple}>
                        <label>Weight: </label>
                        <div className={style.both}>
                            <input type="number" placeholder="Min" name="weight_min" value={weight_min} onChange={handleChange}/>
                            <input type="number" placeholder="Max" name="weight_max" value={weight_max} onChange={handleChange}/> 
                        </div> 
                    </div>
                    <div className={style.campoMultiple}>
                        <label>Lifespan: </label>
                        <div className={style.both}>
                            <input type="number" placeholder="Min" name="year_min" value={year_min} onChange={handleChange}/>
                            <input type="number" placeholder="Max" name="year_max" value={year_max} onChange={handleChange}/> 
                        </div> 
                    </div>
                    <div className={style.campo}>
                        <label>Image (not obligatory): </label>
                        <input type="text" placeholder="URL" name="image" value={image} onChange={handleChange}/>
                    </div>
                    <div className={style.campo}>
                        <label>Temperaments: (max: 3 items)</label>
                        <SelectTemperament />
                        <div className={style.containerTemp}>
                            { (temperament.length > 0) && temperament.map(el => {
                                const temp = temperamentsSelect.find(tempState => tempState.id === el)
                                return (
                                    <button key={temp.id} type="button" onClick={() => handleDelete(temp.id)} className={style.buttonTemp} >
                                        {temp.name}
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                )
                            }) }
                        </div>
                    </div>
                    <div className={style.buttonContainer}>
                        <button>Create</button> 
                    </div>
                { error && <div className={style.containerError}><p className={style.error}>Missing data!</p></div> }
                </form>
            </div>
        </div>
    )
}

export default Form