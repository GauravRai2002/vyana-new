import React, { useEffect, useRef } from 'react'
import './eventExplorer.css'
import EventElement from '../eventElement/EventElement'
import Contact from '../contact/Contact'
import Footer from '../footer/Footer'
import { Link } from 'react-router-dom'

function EventExplorer({ allData }) {
  console.log(allData)
  const topContainer = useRef()
  useEffect(()=>{
    topContainer.current.scrollIntoView({ block: "end", behavior: 'smooth' });
  },[])
  return (
    <div className='main-area-events min-h-screen bg-cover bg-no-repeat bg-center py-1'>
      <div ref={topContainer} />
      <div className='font-bold md:text-6xl text-2xl mx-auto w-[95%] md:w-5/6 my-10 drop-shadow-lg text-white'>Latest Events</div>
      <div className='flex w-full md:w-5/6 mx-auto p-3 flex-wrap gap-3 md:gap-20 items-center justify-center my-6'>
        {
          allData.map((data, id) => {
            return <EventElement data={data} key={id} logo={data.e_logo} />
          })}
      </div>
    </div>

  )
}

export default EventExplorer