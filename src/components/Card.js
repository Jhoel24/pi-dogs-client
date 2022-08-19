import style from '../styles/Card.module.css'
import { Link } from 'react-router-dom'

const Card = (props) => {

  return (
    <div className={style.card}>
        <div className={style.cardImg}>
            <img src={props.image} alt={`${props.name}`} />
        </div>
        <div className={style.content}>
            <h2>{props.name}</h2>
            <p className={style.temperament}>Temperament: <span>{Array.isArray(props.temperament) ? props.temperament.map(temp => `${temp} `) : props.temperament}</span></p>
            <p className={style.weight}>Weight: <span>{props.weight}kg</span></p>
            <div className={style.button}>
                <Link to={`/home/dog/${props.id}`}>Read more</Link>
            </div>
        </div>
    </div>
  )
}

export default Card