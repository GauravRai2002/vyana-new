import React, { useEffect } from 'react'
import './latestEvents.css'
import EventElement from '../eventElement/EventElement'
import logo from '../../assets/ylfcricket23.png'
import newLogo from '../../assets/new.png'
import arrow  from '../../assets/arrow.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

function LatestEvents() {
  
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div data-aos="fade-left" data-aos-duration="2500" className='w-5/6 mx-auto rounded-l-full  background md:my-32 my-16 md:p-10 p-3 relative'>
        <div className='font-bold md:text-6xl text-xl text-center drop-shadow-lg text-white'>Our Latest Events</div>
        <div className='flex flex-wrap overflow-y-hidden h-24 md:mt-16 mt-2 items-center md:h-fit justify-center md:gap-32 gap-0 w-5/6 mx-auto'>
            <EventElement logo={logo}/>
            <EventElement logo={logo}/>
            <EventElement logo={logo}/>
        </div>

        <img className='absolute md:w-32 w-12 arrow-left cursor-pointer' src={arrow} alt="" />
    </div>
  )
}

export default LatestEvents