import React from 'react'
import MapLocation from './MapLocation'
import ContactForm from './ContactForm'

function Contact() {
  return (
    <div className='flex flex-wrap gap-8 md:gap-0 items-center justify-evenly my-16'>
        <ContactForm/>
        <MapLocation/>
    </div>
  )
}

export default Contact