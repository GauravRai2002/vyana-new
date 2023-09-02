import React from 'react'
import bottom from '../assets/match.png'
import logo from '../assets/logo.png'
import './match.css'
import Match from './Match'
import sponsor from '../assets/sponsor.png'
function MatchResult() {
    return (
        <>
            <div className="text-6xl font-bold md:w-5/6 mx-auto mt-8 mb-3" id='resluts'>
                <div className='text-6xl font-bold flex items-center justify-between flex-wrap-reverse'>
                    MATCH RESULTS
                    <img className='w-1/3' src={sponsor} alt="" />
                </div>
                <img className='md:w-3/5' src={bottom} alt="" />
            </div>

            <div className="flex flex-wrap gap-0 items-center md:justify-normal justify-center">
                <Match team1='CORE' team2='STERLING' score1='05' score2='02' />
                <Match team1='FLEXI' team2='EMERGING' score1='03' score2='04' />
                <Match team1='FLOATING' team2='DYNAMIC' score1='04' score2='03' />
                <Match team1='BOND' team2='ULTRA' score1='02' score2='00' />
            </div>
        </>
    )
}

export default MatchResult