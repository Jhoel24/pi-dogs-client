import style from '../styles/About.module.css'

const About = () => {
    return (
        <div className={style.contenedorAbout}>
            <h1 className={style.tituloPrincipal}>Hello there!</h1>  
            <p className={style.developer}>Hi my name is Jhoel Moreno, I'm a Full Stack developer, this is my individual project from the "Soy Henry" bootcamp.</p>
            <p className={style.frontend}><span>Frontend: </span>ReactJS, Redux and CSS Pure</p>
            <p className={style.backend}><span>Backend: </span>NodeJS, Sequelize and Postgresql</p>
            <p className={style.connect}>Let's connect!</p>
            <div className={style.containerSocialMedia}>
                <a href='https://www.linkedin.com/in/kenneth-moreno-291620219/' target={'_blank'} rel='noreferrer'>
                    <img  src='/linkedin.png' alt="logo linkedin" />
                </a>
                <a href='https://github.com/Jhoel24' target={'_blank'} rel='noreferrer'>
                    <img  src='/github.png' alt="logo github" />
                </a>
            </div>
        </div>
    )
}

export default About