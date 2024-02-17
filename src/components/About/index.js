import { useEffect, useState } from 'react'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters/index'
import Loader from 'react-loaders'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => clearTimeout(timeoutId)
  }, [])
  return (
    <>
      <Loader type="pacman" />

      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            Hi! I am Kshitij Angurala (Kshitij A.) and I am currently pursuing
            B.Tech CSE (Hons.) in UPES, Dehradun. Through self
            learning, I have worked on my coding skills and got achievement in
            the form of various projects that I have completed.
            </p><p>
            With a series of immersive bootcamps, various YouTube channels and,
            a collection of certifications under my belt, I am on the path on
            improving my expertise every day.
          </p>

          <p>Skills: Python, HTML, CSS, JavaScript,C, React.JS, SQL</p>
          
        </div>
      </div>

      <div className="container about-projects">
        <div className="text-zone1">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['M', 'y', ' ', 'w', 'o', 'r', 'k']}
              idx={15}
            />
          </h1>
          <ul>
            <li>
              <a href="/"> Portfolio Website (February 2024) </a>{' '}
            </li>
            <li>
              <a href="https://github.com/KshitijAng/AI-Chatbot-using-OpenAI"> AI Chatbot using Python and OpenAI (January 2024) </a>{' '}
            </li>
            <li>
              <a href="https://github.com/KshitijAng/MERN-Stack-MyBlog"> MyBlog MERN Application (August 2023) </a>{' '}
            </li>
            <li>
              <a href="https://github.com/KshitijAng/Hotstar-Frontend-Clone"> Disney+ Hotstar Frontend Clone (July 2023)</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
export default About
