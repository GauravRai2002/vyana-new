import React from 'react'
import logo from '../../assets/logo.png'
import './hero.css'
import video from '../../assets/VYANA.mp4'
function Hero() {
  return (
    // <div className='md:px-32 md:py-16 flex items-center justify-center w-5/6 mx-auto my-10'>
    //     <img className='md:w-2/5 w-5/6' src={logo} alt="" />
    // </div>
    <>
      <video src={video} className='video' autoPlay muted loop></video>
    </>
  )
}

export default Hero