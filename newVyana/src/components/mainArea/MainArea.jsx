import React, { useEffect, useState } from 'react'
import './mainArea.css'
import Hero from '../hero/Hero'
import LatestEvents from '../invertedEvents/LatestEvents'
import Footer from '../footer/Footer'
import Testimonials from '../testimonials/Testimonials'
import Services from '../services/Services'
import Contact from '../contact/Contact'
import ClientTestimonial from '../testimonials/ClientTestimonial'
import photo from '../../assets/harsh.jpg'


function MainArea({allData}) {


  

  const photos = [photo,photo,photo]

  return (
    <div className='main-area-main min-h-screen bg-cover bg-no-repeat bg-center py-1'>
      <Hero/>
      <LatestEvents allData={allData} data-aos="fade-left" />
      <Testimonials heading={'Testimonials and Reviews'}/>
      <Services/>
      <ClientTestimonial heading={'Our Clients'}/>
    </div>
  )
}

export default MainArea