import React from 'react'
import './eventElement.css'
import { Link } from 'react-router-dom';

function EventElement({ logo, data }) {
  return (
    <Link className='' to={`/event/${data.e_id}`}>
      <div className='scale-90 duration-100 hover:scale-100 md:p-6 p-4 flex items-center justify-center  cursor-pointer'>
        <img className='md:w-32' src={logo} alt="" />
      </div>
    </Link>
  )
}

export default EventElement