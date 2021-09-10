import React from 'react'
import './Skills.css'

function Skills() {
    return (
        <div className='skills'>
            <div className='skills__left'>
                <h1>Skills</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet eros a sem varius pretium.
                    Nam tincidunt convallis elit, nec bibendum nunc pharetra non.
                    Pellentesque scelerisque tortor eu consectetur pharetra.
                    Suspendisse tristique, justo sed congue aliquet, lacus lacus rutrum lacus,
                    et congue tortor ante in tortor. Donec pulvinar, urna et volutpat lacinia,
                    justo orci venenatis nibh, at volutpat velit quam quis eros. Duis consequat ac neque eget auctor.
                    Aenean tempor bibendum massa, sed commodo augue sagittis vitae.
                    Vivamus convallis suscipit nibh, eu lobortis nunc tristique et.
                </p>
            </div>
            <div className='skills__details'>
                <h4>C Programming</h4>
                <div className="container">
                    <div className="skills__bar c">80%</div>
                </div>
                <h4>HTML5</h4>
                <div className="container">
                    <div className="skills__bar html">80%</div>
                </div>

                <h4>CSS3</h4>
                <div className="container">
                    <div className="skills__bar css">60%</div>
                </div>

                <h4>JavaScript</h4>
                <div className="container">
                    <div className="skills__bar js">50%</div>
                </div>

                <h4>React Js</h4>
                <div className="container">
                    <div className="skills__bar react">60%</div>
                </div>

                <h4>Node Js</h4>
                <div className="container">
                    <div className="skills__bar node">40%</div>
                </div>

            </div>
        </div>
    )
}

export default Skills
