import React from 'react'

function ScheduleTable(props) {
    return (
        <>
            <div className='relative h-fit flex flex-col'>
                <div className="text-left font-bold text-4xl  text-zinc-900  md:w-5/6 mx-auto">
                    <p className='mt-10 p-4 w-fit bg-gradient-to-r from-sky-500 to-indigo-500'>{props.group}</p>
                </div>
                <div className='md:w-5/6 mx-auto'>
                    <p className='bg-indigo-500 font-bold p-2 w-fit text-lg text-white tracking-wider'>Reporting Time : {props.time}</p>
                </div>
                <div className="overflow-x-auto pb-40 w-screen">
                    <table className="table md:w-5/6 md:mx-auto my-8">
                        {/* head */}
                        <thead>
                            <tr className='bg-green-900 text-white text-lg'>
                                <th className='text-center font-bold py-6'>MATCH</th>
                                <th className='text-center font-bold py-6'>COURT</th>
                                <th className='text-center font-bold py-6'>TIME</th>
                                <th className='text-center font-bold py-6'>EVENT</th>
                                <th className='text-center font-bold py-6'>TEAM 1</th>
                                <th className='text-center font-bold py-6'>TEAM 2</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr>
                                <th className='text-center font-bold py-6 bg-emerald-600'>1</th>
                                <td className='text-center font-bold py-6 bg-emerald-600'>{props.court[0]}</td>
                                <td className='text-center font-bold py-6 bg-emerald-600'>{props.timing[0]}</td>
                                <td className='text-center font-bold py-6 bg-emerald-600'>{props.event[0]}</td>
                                <td className='text-center font-bold py-6 bg-amber-400'>{props.team1}</td>
                                <td className='text-center font-bold py-6 bg-red-400'>{props.team2}</td>
                            </tr>
                            <tr>
                                <th className='text-center font-bold py-6 bg-emerald-600'>2</th>
                                <td className='text-center font-bold py-6 bg-emerald-600'>{props.court[1]}</td>
                                <td className='text-center font-bold py-6 bg-emerald-600'>{props.timing[1]}</td>
                                <td className='text-center font-bold py-6 bg-emerald-600'>{props.event[1]}</td>
                                <td className='text-center font-bold py-6 bg-amber-400'>{props.team1}</td>
                                <td className='text-center font-bold py-6 bg-red-400'>{props.team2}</td>
                            </tr>
                            <tr>
                                <th className='text-center font-bold py-6 bg-emerald-600'>3</th>
                                <td className='text-center font-bold py-6 bg-emerald-600'>{props.court[2]}</td>
                                <td className='text-center font-bold py-6 bg-emerald-600'>{props.timing[2]}</td>
                                <td className='text-center font-bold py-6 bg-emerald-600'>{props.event[2]}</td>
                                <td className='text-center font-bold py-6 bg-amber-400'>{props.team1}</td>
                                <td className='text-center font-bold py-6 bg-red-400'>{props.team2}</td>
                            </tr>
                            <tr>
                                <th className='text-center font-bold py-6 bg-emerald-600'>4</th>
                                <td className='text-center font-bold py-6 bg-emerald-600'>{props.court[3]}</td>
                                <td className='text-center font-bold py-6 bg-emerald-600'>{props.timing[3]}</td>
                                <td className='text-center font-bold py-6 bg-emerald-600'>{props.event[3]}</td>
                                <td className='text-center font-bold py-6 bg-amber-400'>{props.team1}</td>
                                <td className='text-center font-bold py-6 bg-red-400'>{props.team2}</td>
                            </tr>
                            <tr>
                                <th className='text-center font-bold py-6 bg-emerald-600'>5</th>
                                <td className='text-center font-bold py-6 bg-emerald-600'>{props.court[4]}</td>
                                <td className='text-center font-bold py-6 bg-emerald-600'>{props.timing[4]}</td>
                                <td className='text-center font-bold py-6 bg-emerald-600'>{props.event[4]}</td>
                                <td className='text-center font-bold py-6 bg-amber-400'>{props.team1}</td>
                                <td className='text-center font-bold py-6 bg-red-400'>{props.team2}</td>
                            </tr>
                            <tr>
                                <th className='text-center font-bold py-6 bg-emerald-600'>6</th>
                                <td className='text-center font-bold py-6 bg-emerald-600'>{props.court[5]}</td>
                                <td className='text-center font-bold py-6 bg-emerald-600'>{props.timing[5]}</td>
                                <td className='text-center font-bold py-6 bg-emerald-600'>{props.event[5]}</td>
                                <td className='text-center font-bold py-6 bg-amber-400'>{props.team1}</td>
                                <td className='text-center font-bold py-6 bg-red-400'>{props.team2}</td>
                            </tr>
                            <tr>
                                <th className='text-center font-bold py-6 bg-emerald-600'>7</th>
                                <td className='text-center font-bold py-6 bg-emerald-600'>{props.court[6]}</td>
                                <td className='text-center font-bold py-6 bg-emerald-600'>{props.timing[6]}</td>
                                <td className='text-center font-bold py-6 bg-emerald-600'>{props.event[6]}</td>
                                <td className='text-center font-bold py-6 bg-amber-400'>{props.team1}</td>
                                <td className='text-center font-bold py-6 bg-red-400'>{props.team2}</td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default ScheduleTable