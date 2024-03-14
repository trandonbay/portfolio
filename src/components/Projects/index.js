import { useEffect, useState } from 'react'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import ProjectItem from './ProjectItem'
import { ProjectList } from './ProjectList'
import Loader from 'react-loaders'

const Projects = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
        <div className="container projects-page">
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['P','r','o','j','e','c','t','s']}
                        idx={12}
                    />
                </h1>
                <div className="projectList">
                    {ProjectList.map((project) => {
                        return <ProjectItem 
                            name={project.name} 
                            image={project.image} 
                            skills={project.skills} 
                            link = {project.link} />
                    })}
                </div>
            </div>
        </div>
        <Loader type='pacman' />
        </>
    )
}

export default Projects