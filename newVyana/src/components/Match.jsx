import React from 'react'
import './match.css'

function Match({team1,team2,score1,score2,winner}) {
    return (
        <>
            <div className="card w-fit md:w-1/3 scale-75 md:scale-90 border border-solid border-zinc-800 text-center  bg-base-100 shadow-xl">
                <div className='font-extrabold text-2xl mt-6'>
                    {winner}
                </div>
                <div className="card-body items-center justify-center  flex flex-row gap-2">

                    <div className=''>
                        <div className="team-1 p-8 pb-6 px-1 text-2xl text-center font-bold">
                            {team1}
                        </div>

                        <div className='border border-solid rounded-md border-zinc-800 text-center  my-8'>
                            <div className='w-full border border-solid rounded-md border-zinc-800 text-center  bg-yellow-200 text-2xl font-bold p-8'>MATCHES WON</div>
                            <div className='h-32 flex items-center justify-center text-6xl font-extrabold'>
                                {score1}
                            </div>
                        </div>

                    </div>


                    <div className="divide"></div>


                    <div className=''>
                        <div className="team-2 p-8 pb-6 px-1 text-2xl text-center font-bold">
                            {team2}
                        </div>

                        <div className='border border-solid rounded-md border-zinc-800 text-center  my-8'>
                            <div className='w-full border border-solid rounded-md border-zinc-800 text-center  bg-red-400 text-2xl font-bold p-8'>MATCHES WON</div>
                            <div className='h-32 flex items-center justify-center text-6xl font-extrabold'>
                                {score2}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Match