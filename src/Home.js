import React from 'react'
import './Home.css'

function Home() {
    return (
        <div className='home'>
            <div className='home__title'>
                <h1>Hi,</h1>
                <h1>I'm <span>C</span>handu,</h1>
                <h1>web deveoper</h1>
            </div>
            <p>Front End Developer</p>
            <button onClick={()=>console.log('')}>Contact me</button>
        </div>
    )
}

export default Home
