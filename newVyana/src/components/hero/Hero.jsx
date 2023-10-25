import React, { useEffect, useRef } from 'react'
import logo from '../../assets/logo.png'
import './hero.css'
import sample from '../../assets/sample.png'
function Hero() {
  return (
    <>
      {/* <video src={video} className='video' controlsList="nodownload noplaybackrate" disablePictureInPicture controls loop></video> */}
      <div className='flex flex-wrap items-center justify-start custom-back md:px-32'>
        <div className='w-1/3 text-white text-3xl'>Lorem ipsum dolor sit amet.</div>
      </div>
    </>
  )
}

export default Hero