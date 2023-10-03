import React from 'react'
import './eventElement.css'
import { Link } from 'react-router-dom';

function EventElement({ logo, data }) {
  return (
    <Link to={`/event/${data.e_id}`}>
      <div className='scale-90 duration-100 hover:scale-100 custom-background w-fit md:p-6 p-4 flex items-center justify-center  cursor-pointer'>
        <img className='md:w-32 w-12' src={logo} alt="" />
      </div>
    </Link>
  )
}

export default EventElement