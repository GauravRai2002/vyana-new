import React from 'react'
import './contactForm.css'
function MapLocation() {
  return (
    <div>
        <iframe className='width-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.2672825880873!2d88.35203487483685!3d22.531658234470495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277248aebc27b%3A0x68c162c8265951ad!2sVyana%20Wealth%20Management%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1694778779219!5m2!1sen!2sin"  style={{"border":"0","borderRadius":"10px"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}

export default MapLocation