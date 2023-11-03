import React from 'react'
import MapLocation from './MapLocation'
import ContactForm from './ContactForm'
import Footer from './../footer/Footer';
import './contact.css'

function Contact() {
  return (<div className='background-contact py-16 h-screen'>
    <h1 className=' text-white md:text-6xl text-xl text-center font-bold'>Get In Touch</h1>
    <div className='flex flex-wrap gap-8 md:gap-0 p-1 items-center justify-evenly my-16 mb-0 pb-16'>
      <ContactForm />
      <MapLocation />
    </div>
  </div>
  )
}

export default Contact