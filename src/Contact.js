import React from 'react'
import './Contact.css'

function Contact() {
    return (
        <div className='contact'>
            <div className='contact__title'>
                <h1>Contact Me</h1>
                <p>I am interested in freelancing jobs. I am willing to work with passionate people
                    where I can collaborate as a team and create responsive and robust applications.</p>
            </div>
            <div className='contact__form'>
                <form>
                    <input className='name' type='text' placeholder='Name' style={{width: '46.6%'}} />
                    <input className='email' type='email' placeholder='Email' style={{width: '46.5%'}}/>
                    <br></br>
                    <input className='subject' type='subject' placeholder='subject' />
                    <br></br>
                    <input className='message' type='message' placeholder='message' aria-multiline/>
                    <button className='submit' type='submit'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
