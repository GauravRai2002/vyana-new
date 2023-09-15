import React from 'react'
import './eventElement.css'

function EventElement({logo}) {
  return (
    <div className='custom-background w-fit md:p-6 p-4 flex items-center justify-center'>
        <img className='md:w-32 w-12' src={logo} alt="" />
    </div>
  )
}

export default EventElement