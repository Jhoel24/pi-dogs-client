import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { searchDog } from '../actions'
import style from '../styles/SearchBar.module.css'

const SearchBar = () => {

    const [dog, setDog] = useState('')
    const dispatch = useDispatch()

    const handleClick = () => {
        if(dog === '') return
        dispatch(searchDog(dog))
    }

    useEffect(() => {
        if(dog !== ''){
            dispatch(searchDog(dog))
        } 
    }, [dog, dispatch])

    return (
        <div className={style.containerSearchBar}>
            <input type={'text'} placeholder={'Find a breed'} className={style.searchBar} value={dog} onChange={e => setDog(e.target.value)}/>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" onClick={handleClick}>
                    <path d="M9 9a2 2 0 114 0 2 2 0 01-4 0z" />
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a4 4 0 00-3.446 6.032l-2.261 2.26a1 1 0 101.414 1.415l2.261-2.261A4 4 0 1011 5z" clipRule="evenodd" />
            </svg>
        </div>
    )
}

export default SearchBar