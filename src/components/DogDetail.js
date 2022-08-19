import style from '../styles/DogDetail.module.css'
import { useParams, Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cleanDog, selectDog } from '../actions'

const DogDetail = () => {

    const { id } = useParams()
    const dispatch = useDispatch()
    const dogSelected = useSelector(state => state.dogSelected)
    
    console.log(dogSelected)

    useEffect(() => {
        dispatch(selectDog(id))
        //eslint-disable-next-line
    }, [])
 
    const handleClick = () => {
        dispatch(cleanDog())
    }

    return (
        <div className="container">
            { Object.keys(dogSelected).length ? <>
                <Link to="/home" onClick={handleClick} className={style.button}>Back</Link>
                <div className={style.cardDetail}>
                    <h2>{dogSelected.name}</h2>
                    <div className={style.containerImage}>
                        <img src={dogSelected.image === '' ? 'https://i.pinimg.com/originals/5b/22/d9/5b22d9ae604335802dbcb5cdc476d57b.jpg' : dogSelected.image} alt={dogSelected.name} />
                    </div>
                    <p className={style.temperament}>This breed of dog is known for its temperament: <span>{dogSelected.hasOwnProperty('created') ?
                    dogSelected.temperaments.map(temp => `${temp.name} `) : dogSelected.temperament }</span></p>
                    <p className={style.height}>Its average height is between: <span>{dogSelected.height}cm</span></p>
                    <p className={style.weight}>Its average weight is between: <span>{dogSelected.weight}kg</span></p>
                    <p className={style.spanLife}>Its life span is approximately between: <span>{dogSelected.yearsLife}</span></p>
                </div>
            </>
             : <p>Cargando...</p> }
        </div>
    )
}

export default DogDetail