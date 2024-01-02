import React, { useEffect, useRef, useState } from 'react'
import EventElement from '../eventElement/EventElement';
import TeamElement from './../eventElement/TeamElement';
import '../mainArea/mainArea.css'
import { Link } from 'react-router-dom';

function ParticipatingTeams() {
    
    const topContainer = useRef()
    const [data, setData] = useState({
        'teams': []
    })
    var i=-1;
    useEffect(() => {
        topContainer.current.scrollIntoView({ block: "end", behavior: 'smooth' });
        const url = window.location.href
        const id = url.substring(url.lastIndexOf("/") + 1)
        try {
            fetch(`https://vyana-sports-back-end.vercel.app/events/${id}`).then(res => res.json()).then(result => {
                setData(result)
            })

        } catch (err) {
            console.log(err)
        }
    }, [])

    return(
     <div className='min-h-screen main-area-main p-1'>
            <div ref={topContainer} ></div>
            {('mastHead' in data)?<img src={data.mastHead} className="h-64 md:w-4/6 mx-auto" alt="" />:<></>}
            <div className='flex w-full min-h-screen md:w-5/6 mx-auto p-3 flex-wrap gap-3 md:gap-20 items-center justify-center my-6'>
                {
                    data.teams.map((te,id)=> {
                        i++
                        return <TeamElement key={id} ind={i} logo={te.logo.url} name={te.name} data={data} e_id={window.location.href.substring(window.location.href.lastIndexOf("/") + 1)} />
                    })
                }
            </div>
        </div>)
    
}

export default ParticipatingTeams