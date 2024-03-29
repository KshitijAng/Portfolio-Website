import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters/index'
import emailjs from '@emailjs/browser'
import React, { useEffect, useRef, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => clearTimeout(timeoutId)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_ras70qs',
        'template_cilqk8j',
        refForm.current,
        'rUZWUgfk_F7hICd2y'
      )
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again!')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>

                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>

                <li>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </li>

                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>

                <li>
                  <input type="submit" className="flat-button" value="Submit" />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>

      <div className="info-map">
        Kshitij Angurala,
        <br />
        UPES, Bidholi
        <br />
        Dheradun, Uttrakhand,
        <br />
        India 248007 <br />
        <span>kshitijangurala903@gmail.com</span>
      </div>
      <div className="map-wrap">
        <MapContainer
          center={[30.415992951984208, 77.96680543135191]}
          zoom={13}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker
            position={[30.415992951984208, 77.96680543135191]}
         onMouseOver = {event => event.target.openPopup()}
          >
            <Popup>Kshitij lives here</Popup>
          </Marker>
        </MapContainer>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
