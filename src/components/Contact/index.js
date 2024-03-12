import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react'
import emailjs from "@emailjs/browser"
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'service_xurs3it',
                'template_b4hzmg4',
                refForm.current,
                'T4QWKjG_89G7fqs8l'
            )
            .then(
                () => {
                    alert("Message successfully sent!")
                    window.location.reload(false)
                },
                () => {
                    alert("Failed to send the message, please try again.")
                }
            )
    }
    
    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['C','o','n','t','a','c','t',' ','m','e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        Ready to collaborate or have more questions about me?
                        Feel free to reach out by using the form below. Let's build
                        something amazing together!
                    </p>
                    <div className="contact-form">
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input 
                                        type="text" 
                                        name="name" 
                                        placeholder="Name" 
                                        required />
                                </li>
                                <li className='half'>
                                    <input 
                                        type="email" 
                                        name="email" 
                                        placeholder="Email" 
                                        required />
                                </li>
                                <li>
                                    <input
                                        placeholder="Subject"
                                        type="text"
                                        name="subject"
                                        required />
                                </li>
                                <li>
                                    <textarea
                                        placeholder="Message"
                                        name="message"
                                        required />
                                </li>
                                <li>
                                    <input 
                                        type="submit"
                                        className="flat-button"
                                        value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className='info-map'>
                    Brandon Tay,
                    <br />
                    San Diego, CA 92110
                    <br />
                    United States of America
                    <span>brandontay95@gmail.com</span>
                </div>
                <div className='map-wrap'>
                    <MapContainer center={[32.77707,-117.19545]} zoom={13}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[32.77707,-117.19545]}>
                            <Popup>Brandon lives here.</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Contact