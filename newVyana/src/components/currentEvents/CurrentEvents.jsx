import React, { useEffect } from 'react'
import './currentEvent.css'
import EventElement from '../eventElement/EventElement'
import logo from '../../assets/ylfcricket23.png'
import newLogo from '../../assets/new.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

function CurrentEvents({ data }) {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div data-aos="fade-right" data-aos-duration="2500" className='w-5/6 mx-auto rounded-r-full background md:my-32 my-16 md:p-10 p-3  relative'>
      <img className='absolute md:w-32 w-12 new' src={newLogo} alt="" />
      <div className='font-bold md:text-6xl text-xl text-center drop-shadow-lg text-white'>Our Ongoing Events</div>
      <div className='flex flex-wrap overflow-y-hidden md:mt-16 items-center h-fit justify-center gap-32 w-4/6 mx-auto'>
        {/* <a className='' href="https://cricheroes.in/tournament/739660/YLF-T10-Cricket-2023/live-matches/1" target='_blank'> */}
        {
          data.map((d,i)=>{
            if(d.timing=='CURR') return <EventElement key={i} logo={d.e_logo} />
          })
        }
        

        {/* </a>  */}
      </div>

      {/* <Link to='/latestEvents'> <img className='absolute md:w-32 w-12 arrow cursor-pointer' src={arrow} alt="" /></Link> */}
    </div>
  )
}

export default CurrentEvents