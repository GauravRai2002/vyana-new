import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

function Navbar() {
    return (
        <>
            <div className="h-fit navbar bg-primary text-primary-content items-center px-8">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] bg-primary p-2 shadow rounded-box w-52">
                            <li><a href='#'>Home</a></li>
                            <li><a href='#schedule'>Schedule</a></li>
                            <li><a href='#resluts'>Results</a></li>
                        </ul>
                    </div>
                    <Link to='' className="m-2"><img className='w-48' src={logo} alt="VyanaSports" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a href='#'>Home</a></li>
                        <li><a href='#schedule'>Schedule</a></li>
                        <li><a href='#resluts'>Results</a></li>
                    </ul>
                </div>

            </div>
        </>
    )
}

export default Navbar