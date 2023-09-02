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
                <div className='text-6xl font-bold flex items-center justify-center md:justify-between flex-wrap-reverse'>
                    MATCH RESULTS
                    <img className='md:w-1/3 w-full' src={sponsor} alt="" />
                </div>
                <img className='md:w-3/5' src={bottom} alt="" />
            </div>

            <div className="flex flex-wrap gap-0 items-center  justify-center">
                <Match team1='CORE' team2='STERLING' score1='05' score2='02' />
                <Match team1='FLEXI' team2='EMERGING' score1='03' score2='04' />
                <Match team1='FLOATING' team2='DYNAMIC' score1='04' score2='03' />
                <Match team1='BOND' team2='ULTRA' score1='04' score2='03' />
                <Match team1='CORE' team2='EMERGING' score1='04' score2='03' winner={'SEMI FINAL - 1'}/>
                <Match team1='FLOATING' team2='BOND' score1='06' score2='01' winner={'SEMI FINAL - 2'}/>
                <Match team1='CORE' team2='FLOATING' score1='04' score2='02' winner={' FINAL '}/>
            </div>
        </>
    )
}

export default MatchResult