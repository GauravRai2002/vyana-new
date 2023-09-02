import React from 'react'
import bottom from '../assets/bottom.png'
import './group.css'

function Groups() {
    return (
        <div className='relative h-fit bg-white' id='schedule'>
            <img className='image-top' src={bottom} alt="" />
            <div className="text-center font-bold text-6xl py-20 text-green-600">
                Groups And Matches
            </div>
            <div className="overflow-x-auto pb-40">
                <table className="table md:w-5/6 md:mx-auto my-8">
                    {/* head */}
                    <thead>
                        <tr className='bg-green-900 text-white text-lg'>
                            <th className='text-center font-bold py-6'>NO.</th>
                            <th className='text-center font-bold py-6'>Group A</th>
                            <th className='text-center font-bold py-6'>Group B</th>
                            <th className='text-center font-bold py-6'>Group C</th>
                            <th className='text-center font-bold py-6'>Group D</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th className='text-center font-bold py-6 bg-emerald-600'>Team 1</th>
                            <td className='text-center font-bold py-6 bg-red-400'>Core</td>
                            <td className='text-center font-bold py-6 bg-blue-600'>Flexi</td>
                            <td className='text-center font-bold py-6 bg-fuchsia-400'>Floating</td>
                            <td className='text-center font-bold py-6 bg-sky-400'>Bond</td>
                        </tr>
                        {/* row 2 */}
                        <tr>
                            <th className='text-center font-bold py-6 bg-emerald-600'>Team 2</th>
                            <td className='text-center font-bold py-6 bg-red-400'>Sterling</td>
                            <td className='text-center font-bold py-6 bg-blue-600'>Emerging</td>
                            <td className='text-center font-bold py-6 bg-fuchsia-400'>Dynamic</td>
                            <td className='text-center font-bold py-6 bg-sky-400'>Ultra</td>
                        </tr>
                        {/* row 3 */}
                        <tr>
                            <th className='text-center font-bold py-6 bg-emerald-600'>Reporting Time</th>
                            <td className='text-center font-bold py-6 bg-red-400'>9:20 AM</td>
                            <td className='text-center font-bold py-6 bg-blue-600'>10:00 AM</td>
                            <td className='text-center font-bold py-6 bg-fuchsia-400'>10:40 AM</td>
                            <td className='text-center font-bold py-6 bg-sky-400'>11:40 AM</td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
            <img className='image-bottom' src={bottom} alt="" />
        </div>
    )
}

export default Groups