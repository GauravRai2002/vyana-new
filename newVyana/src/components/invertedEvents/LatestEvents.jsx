import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './latestEvents.css'
import EventElement from '../eventElement/EventElement'
import arrow  from '../../assets/arrow.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

function LatestEvents({ data }) {
  // data.reverse()
  const width = window.innerWidth
  const limit = width>1000?3:2


  console.log(data)
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div id='events' data-aos="fade-up" data-aos-duration="2500" className='md:w-5/6 md:rounded-lg mx-auto border-solid border-2 border-[#0F1837] bg-blue-950 md:my-32 my-16 py-16 md:p-10 p-3 relative'>
        <div className='font-bold md:text-6xl text-xl text-center drop-shadow-lg text-white'>Our Events</div>
        <div className='flex flex-wrap overflow-y-hidden md:mt-16 my-2 items-center md:h-fit justify-center md:gap-24 mx-auto'>
          {
            data.length>0?<><Link key={0} to={`/event/${data[0].e_id}`}><EventElement data={data[0]} logo={data[0].e_logo}/></Link>
            <Link key={1} to={`/event/${data[1].e_id}`}><EventElement data={data[1]} logo={data[1].e_logo}/></Link>
            <Link key={2} to={`/event/${data[2].e_id}`}><EventElement data={data[2]} logo={data[2].e_logo}/></Link></>:<></>
          }
        
        </div>

        <Link className='mx-auto mt-8 block w-40' to='/latestEvents'><button className=' btn btn-secondary btn-lg'>Show More</button></Link>
    </div>
  )
}

export default LatestEvents