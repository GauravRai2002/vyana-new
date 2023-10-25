import React, { useEffect, useRef } from 'react'
import logo from '../../assets/logo.png'
import './hero.css'
import sample from '../../assets/sample.png'
function Hero() {
  return (
    <>
      {/* <video src={video} className='video' controlsList="nodownload noplaybackrate" disablePictureInPicture controls loop></video> */}
      <div className='custom-back p-6 py-32'>
        {/* <div className='my-4 md:w-2/5 text-white text-6xl mb-10'>Vyana Sports</div> */}
        <img className='md:w-96 ml-2 w-full' src={logo} alt="" />
        <div className='my-4 md:w-2/5 text-lg font-light md:font-regular md:text-xl px-2  text-white'>Where passion meets strategy, and dreams become achievements. We are your trusted partner in sports management, dedicated to helping your events reach their full potential.</div>
        <div className='my-4 md:w-2/5 text-lg font-light md:font-regular md:text-xl px-2  text-white'> Get tailored solutions to suit your unique needs, because your journey is our priority.</div>
        <a href="#events"><button className='my-6 btn btn-secondary'>Explore More</button></a>
      </div>
    </>
  )
}

export default Hero