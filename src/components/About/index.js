import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3Alt, faReact, faJsSquare, faGitAlt } from '@fortawesome/free-brands-svg-icons'
import pyLogo from '../../assets/images/python-5.svg'
import Loader from 'react-loaders'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['A','b','o','u','t',' ','m','e']}
                        idx={15}
                    />
                </h1>
                <p>
                    Hello there! I'm Brandon Tay, a highly ambitious software engineer
                    on the lookout for exciting and challenging projects. I immerse myself
                    in the latest technologies to stay at the forefront of innovation. 
                    It's not just about staying current; it's about leading the charge 
                    and shaping the future of technology.
                </p>
                <p>
                    With 6 years of hands-on experience in Python, I've cultivated a deep 
                    expertise in crafting robust and scalable solutions. But that's just the 
                    tip of the iceberg - my journey also delves into the realms of front-end 
                    development, where I navigate the seas of&nbsp;
                    <span class="tech-tag">HTML5</span>,&nbsp;
                    <span class="tech-tag">CSS3</span>,&nbsp;
                    <span class="tech-tag">React</span>,&nbsp;
                    <span class="tech-tag">JavaScript</span>,&nbsp;
                    <span class="tech-tag">Git</span>.
                </p>
                <p> 
                    Beyond the confines of code, my interests extend into the realms of machine 
                    learning and artificial intelligence. I firmly believe that these emerging 
                    technologies hold the key to elevating humanity and solving challenges in 
                    ways we've never imagined.
                </p>
                <p>
                    Please visit 
                    my <a href="https://www.linkedin.com/in/brandontay95/">LinkedIn</a> profile 
                    for more details. Also you can check out 
                    my <a href="https://github.com/trandonbay">GitHub</a> to 
                    view projects I have done. 
                </p>
            </div>

            <div className='stage-cub-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <img src={pyLogo} alt="python-logo" />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3Alt} color="#28A4D9" />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4328" />
                    </div>
                </div>
            </div>
        </div>
        <Loader type='pacman' />
        </>
    )
}

export default About