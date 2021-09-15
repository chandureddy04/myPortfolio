import React from 'react'
import './Work.css'

function Work() {
    return (
        <div className='work'>
            <a href="https://challenge-907aa.web.app/" target="_blank" >
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img src="original.png" alt="Avatar" style={{width:"300px", height:"300px"}} />
                        </div>
                        <div class="flip-card-back">
                            <h1>Amazon Clone</h1>
                            <p>This is a clone of Amazon</p>
                            <p>Which is developed using React Js, Express and Firebase</p>
                        </div>
                    </div>
                </div>
            </a>
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <img src="image.jpg" alt="Avatar" style={{ width: "300px", height: "300px" }} />
                    </div>
                    <div class="flip-card-back">
                        <h1>Automated Vehicle</h1>
                        <p>This is Automated Vehicle which turns itself when there is an obstacle</p>
                        <p>This project uses Ultrasonic sensors</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work
