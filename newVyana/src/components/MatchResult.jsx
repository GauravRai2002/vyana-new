import React from 'react'
import bottom from '../assets/match.png'
import logo from '../assets/logo.png'
import './match.css'
import Match from './Match'
function MatchResult() {
    return (
        <>
            <div className="text-6xl font-bold md:w-5/6 mx-auto mt-8 mb-3" id='resluts'>
                MATCH RESULTS
                <img className='md:w-3/5' src={bottom} alt="" />
            </div>

            <div className="flex flex-wrap items-center">
                <Match team1='CORE' team2='STERLING' score1='05' score2='02'/>
                <Match team1='FLEXI' team2='EMERGING' score1='00' score2='00'/>
            </div>
        </>
    )
}

export default MatchResult