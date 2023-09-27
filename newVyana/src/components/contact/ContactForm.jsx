import React from 'react'
import './contactForm.css'

function ContactForm() {
    return (
        <>
            <div className='lower-conter-right drop-shadow-2xl'>
                <div className='get-a-demo-border'>
                    <div className='get-a-demo-form'>
                        <p id='get-1'>Contact Us</p>
                        <p>Email</p>
                        <input className='p-3' name='email' placeholder='Enter the Email' type="email"></input>
                        <p>Message</p>
                        <input className='p-3' id='input-2' placeholder='Anything you wan to say to us? Go ahead !!' type="text"></input><br></br>
                        <button>SUBMIT</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactForm