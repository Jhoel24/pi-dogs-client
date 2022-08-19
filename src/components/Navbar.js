import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import style from '../styles/Navbar.module.css'
import SearchBar from './SearchBar'
import { useLocation } from 'react-router-dom'

const Navbar = () => {

    const params = useLocation()
    console.log(params.pathname)

    const marker = useRef()
    const home = useRef()
    const dog = useRef()
    const about = useRef()

    const indicator = e => {
        marker.current.style.left = e.offsetLeft+"px"
        marker.current.style.width = e.offsetWidth+"px"
    }

    useEffect(() => {
        if(params.pathname === '/home'){
            marker.current.style.left = "0px"
            marker.current.style.width = "61px"
        } else if(params.pathname === '/home/create'){
            marker.current.style.left = "93px"
            marker.current.style.width = "107px"
        } else if(params.pathname === '/home/about'){
            marker.current.style.left = "232px"
            marker.current.style.width = "60px"
        }
    }, [params.pathname])

    return (
        <header>
            <div className={style.logo}>
                <p>Dog<span>App</span></p>
            </div>
            <nav className={style.navbar}>
                <div className="marker" ref={marker}></div>
                <Link to="/home" ref={home} onClick={e => indicator(e.target)}>Home</Link>
                <Link to="/home/create" ref={dog} onClick={e => indicator(e.target)}>Create dog</Link>
                <Link to="/home/about" ref={about} onClick={e => indicator(e.target)}>About</Link>
            </nav>
            <SearchBar />
        </header>
    )
}

export default Navbar