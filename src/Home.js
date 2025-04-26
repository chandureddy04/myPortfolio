import React from 'react'
import './Home.css'
import About from './About'
import Education from './Education'
import Skills from './Skills'
import Work from './Work'
import Contact from './Contact'

function Home() {
    return (
        <div className='home'>
            <div className='home__title'>
                <h1>Hi,</h1>
                <h1>I'm <span>C</span>handu,</h1>
                <h1>web developer</h1>
            </div>
            <p>Front End Developer</p>
            <button onClick={()=>console.log('')}>Contact me</button>
            <br></br>
            <About />
            <br></br>
            <Education />
            <br></br>
            <Skills />
            <br></br>
            <Work />
            <br></br>
            <Contact/>
        </div>
    )
}

export default Home
