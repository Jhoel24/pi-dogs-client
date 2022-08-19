import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDogs } from '../actions'
import style from '../styles/Home.module.css'
import Card from './Card'

const Home = () => {

    const dogsPerPage = 8

    const dispatch = useDispatch()
    const dogs = useSelector(state => state.dogs)
    const [items, setItems] = useState([])
    const [currentPage, setCurrentPage] = useState(0)
       
    useEffect(() => {
        dispatch(getDogs())
        //eslint-disable-next-line
    }, [])

    useEffect(() => {
        setItems([...dogs].splice(0, dogsPerPage))
    }, [dogs])

    const nextHandler = () => {
        const totalElements = dogs.length
        const nextPage = currentPage + 1
        const firstIndex = nextPage * dogsPerPage
        if(firstIndex >= totalElements) return
        setItems([...dogs].splice(firstIndex, dogsPerPage))
        setCurrentPage(nextPage)
    }

    const prevHandler = () => {
        const prevPage = currentPage - 1
        if(prevPage < 0) return
        const firstIndex = prevPage * dogsPerPage
        setItems([...dogs].splice(firstIndex, dogsPerPage))
        setCurrentPage(prevPage)
    }

    return (
        <div className="container margin-top">
            { dogs.length ?
                <>
                    <div className={style.cardsContainer}>
                        { items.map(dog => (
                            <Card 
                                key={dog.id}
                                { ...dog }
                            />
                        )) }
                    </div>
                    { items.length !== 1 && (
                        <div className={style.buttons}>
                            <button className={style.prev} onClick={() => prevHandler()}>Prev</button>
                            <button className={style.next} onClick={() => nextHandler()}>Next</button>
                        </div>
                    )}
                </>
            : <p>Cargando...</p> }
        </div>
    )
}

export default Home