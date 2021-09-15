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
            <div class="container">
                <form>
                    <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
                        <input type="text" id="lname" name="email" placeholder="Email"/>
                        <input type='text' id="subject" name="subject" placeholder="Subject" />
                            <textarea id="message" name="message" placeholder="Write something.." style={{height:"200px"}}></textarea>

                    <button type='submit' onClick={() => console.log('')}>Submit</button>
                            </form>
                            </div>
        </div>
    )
}

export default Contact
