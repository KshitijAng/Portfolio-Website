import React, { useEffect, useState } from 'react'
import logok from "../../assets/images/logoK.png"
import { Link } from 'react-router-dom'
import "./index.scss";
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';
import Loader from 'react-loaders';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['s','h','i','t','i','j',',']
  const jobArray = ['S','o','f','t','w','a','r','e','','D','e','v','e','l','o','p','e','r','.']

useEffect(() => {  
  const timeoutId = setTimeout(() => {
    setLetterClass('text-animate-hover');
  }, 4000);

  // Return a cleanup function
  return () => clearTimeout(timeoutId);
}, []);

  
  return (
    <>
    <Loader type="pacman" />
    <div className='home-page'>
        <div className='text-zone'>
            <h1>
              <span className={letterClass}>H</span>
              <span className={`${letterClass} _12`}>i,</span>
            <br/>
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>

            <img src={logok} alt="developer"/>
              <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
            <br />
            <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={17} />
            </h1>
            <h2> Frotend Developer / Javascript</h2>
            <Link to="/contact" className="flat-button">CONTACT ME</Link>
        </div>
        <Logo />
    </div>
    
    </>

  )
}

export default Home