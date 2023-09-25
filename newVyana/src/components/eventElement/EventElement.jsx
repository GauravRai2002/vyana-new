import React from 'react'
import './eventElement.css'

function EventElement({logo}) {
  return (
    <div className='scale-90 duration-100 hover:scale-100 custom-background w-fit md:p-6 p-4 flex items-center justify-center'>
        <img className='md:w-32 w-12' src={logo} alt="" />
    </div>
  )
}

export default EventElement