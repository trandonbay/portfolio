import { Link } from "react-router-dom"
import LogoTitle from "../../assets/images/logo-s.png"
import ProfilePic from "../../assets/images/profile.jpeg"
import './index.scss'
import { useEffect, useState } from "react"
import AnimatedLetters from "../AnimatedLetters"
import Loader from "react-loaders"

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['r', 'a', 'n', 'd', 'o', 'n']

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>e</span>
                <span className={`${letterClass} _13`}>l</span>
                <span className={`${letterClass} _14`}>l</span>
                <span className={`${letterClass} _15`}>o</span>
                <span className={`${letterClass} _16`}>,</span>
                <br />
                <span className={`${letterClass} _17`}>I</span>
                <span className={`${letterClass} _18`}>'</span>
                <span className={`${letterClass} _19`}>m</span>
                <img src={LogoTitle} alt="developer" />
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={20} />
                <span className={`${letterClass} _26`}>.</span>
                </h1>
                <h2>Software Engineer</h2>
                <Link to="./contact" className='flat-button'>CONTACT ME</Link>
            </div>
            <div className="profile">
                <img src={ProfilePic} alt="profile-pic" /> 
            </div>
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default Home