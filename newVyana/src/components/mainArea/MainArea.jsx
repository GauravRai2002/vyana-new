import React, { useEffect } from 'react'
import './mainArea.css'
import { Route, Routes } from 'react-router-dom'
import CurrentEvents from '../currentEvents/CurrentEvents'
import Hero from '../hero/Hero'
import LatestEvents from '../invertedEvents/LatestEvents'
import Footer from '../footer/Footer'
import Testimonials from '../testimonials/Testimonials'
import Services from '../services/Services'
import Contact from '../contact/Contact'


function MainArea() {



  return (
    <div className='main-area-main min-h-screen bg-cover bg-no-repeat bg-center pt-1'>
      <Hero/>
      <CurrentEvents/>
      <LatestEvents data-aos="fade-left" />
      <Testimonials heading={'Testimonials and Reviews'}/>
      <Services/>
      <Testimonials heading={'Our Clients'}/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default MainArea