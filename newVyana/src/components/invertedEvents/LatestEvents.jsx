import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './latestEvents.css'
import EventElement from '../eventElement/EventElement'
import arrow  from '../../assets/arrow.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

function LatestEvents({ data }) {
  console.log(data)
  useEffect(() => {
    AOS.init();
  }, [])
  var i=0;
  return (
    <div id='events' data-aos="fade-left" data-aos-duration="2500" className='w-5/6 mx-auto rounded-l-full  background md:my-32 my-16 md:p-10 p-3 relative'>
        <div className='font-bold md:text-6xl text-xl text-center drop-shadow-lg text-white'>Our Events</div>
        <div className='flex flex-wrap overflow-y-hidden h-24 md:mt-16 mt-2 items-center md:h-fit justify-center md:gap-24 gap-0 w-5/6 mx-auto'>
           {/* <Link to={'/event'}><EventElement logo={logo}/></Link>
           
           <Link to={'/event'}><EventElement logo={logo}/></Link> */}
          {
            
            data.map((d,i)=>{
              if (i<3 ) return d.timing == 'PREV'? <Link key={i} to={`/event/${d.e_id}`}><EventElement data={d} logo={d.e_logo}/></Link>:<></>
              i++
            })
          }
        </div>

        <Link to='/latestEvents'><img className='absolute md:w-32 w-12 arrow-left cursor-pointer' src={arrow} alt="" /></Link>
    </div>
  )
}

export default LatestEvents