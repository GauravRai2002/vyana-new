import React from 'react'
import './eventElement.css'
import { Link } from 'react-router-dom';

function TeamElement({ logo, name, e_id,ind }) {
  return (
    <Link className='' to={`/team/${e_id}/${ind}`}>
      <div className='flex flex-col items-center justify-center w-40'>
        <div className='scale-90 duration-100 hover:scale-100 md:p-5 custom-background p-4 flex items-center justify-center  cursor-pointer'>
          <img className='md:w-32 w-22' src={logo} alt="" />
        </div>
        <div className='text-white font-md text-center font-bold' >{name}</div>
      </div>
    </Link>
  )
}

export default TeamElement