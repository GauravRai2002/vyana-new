import React from 'react'
import './eventExplorer.css'
import ylf from '../../assets/ylfcricket23.png'
import EventElement from '../eventElement/EventElement'
import Contact from '../contact/Contact'
import Footer from '../footer/Footer'
import { Link } from 'react-router-dom'

function EventExplorer() {
  var arr = [ylf,ylf,ylf,ylf,ylf,ylf,ylf,ylf,ylf,ylf,ylf,ylf,ylf,ylf,ylf,ylf,ylf]
  return (
    <>
        <div className='main-area-events min-h-screen bg-cover bg-no-repeat bg-center pt-1'>
          <div className='font-bold md:text-6xl text-2xl mx-auto md:w-5/6 my-10 drop-shadow-lg text-white'>Latest Events</div>
          <div className='flex w-full md:w-5/6 mx-auto p-3 flex-wrap gap-20 items-center justify-center my-6'>
            {arr.map((imag,id)=>{
              return <Link to={'/event'}><EventElement logo={ylf}/></Link> 
            })}
          </div>
        <Contact/>
        <Footer/>
        </div>
    </>
  )
}

export default EventExplorer