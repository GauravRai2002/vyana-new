import React, { useEffect, useParams, useRef, useState } from 'react'
import './eventsMain.css'
import rule1 from '../../assets/rule1.jpg'
import rule2 from '../../assets/rule2.jpg'
import rule3 from '../../assets/rule3.jpg'
import rule4 from '../../assets/rule4.jpg'
import YouTube from 'react-youtube';
import Contact from '../contact/Contact'
import Footer from '../footer/Footer'
import result1 from '../../assets/result_1.jpg'
import result2 from '../../assets/result_2.jpg'
import { Link } from 'react-router-dom';
import Photos from '../photos/Photos'
function EventsMain({ allData }) {
    const opts = {
        height: '200',
        width: '350',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
        },
    };

    const [showPhotos, setShowPhotos] = useState(false)

    const [data, setData] = useState({
        'result': [],
        'schedule': [],
        'rules': [],
        'videos': []
    })

    const topContainer = useRef()
    useEffect(() => {
        topContainer.current.scrollIntoView({ block: "end", behavior: 'smooth' });
        const url = window.location.href
        const id = url.substring(url.lastIndexOf("/") + 1)
        console.log(id)
        console.log('events main')
        try {
            fetch(`https://vyana-sports-back-end.vercel.app/events/${id}`).then(res => res.json()).then(result => {
                setData(result)
                console.log(result)
                if(result.result.length==0 && result.videos.length==0  && result.schedule.length==0 && result.rules.length==0){
                    setShowPhotos(true)
                }
            })

        } catch (err) {
            setData({
                'result': [],
                'schedule': [],
                'rules': [],
                'videos': []
            })


        }

    }, [])

    return (
        <>
        <div ref={topContainer} />
            <div className='px-0.5 md:px-0 main-area-events min-h-screen bg-cover bg-no-repeat bg-center py-1'>


                {!showPhotos ? <div className='rules-section w-[95%] md:w-5/6 mx-auto my-16'>
                    <div className='flex flex-wrap items-center justify-center gap-10 md:justify-between md:gap-8 font-bold md:text-6xl text-2xl mx-auto my-10 drop-shadow-lg text-white'>Don't miss out on the action -

                        <Link to={`/photos/${data.e_id}`}> <button className='btn btn-primary w-64 md:mr-40'>See all photos </button></Link>

                    </div>

                </div> : <Photos />}


                {("teams" in data) ?data.teams.length!=0 ? <div className='rules-section w-[95%] md:w-5/6 mx-auto my-16'>
                    <div className='flex flex-wrap items-center justify-center gap-10 md:justify-between md:gap-8 font-bold md:text-6xl text-2xl mx-auto my-10 drop-shadow-lg text-white'>Get to know your players! -

                        <Link to={`/teams/${data.e_id}`}> <button className='btn btn-primary w-64 md:mr-40'>See all teams </button></Link>

                    </div>

                </div>:<></> : <></>}


                {("cricheroes" in data) ? data.cricheroes!=''? <div className='rules-section w-[95%] md:w-5/6 mx-auto my-16'>
                    <div className='flex flex-wrap items-center justify-center gap-10 md:justify-between md:gap-8 font-bold md:text-6xl text-2xl mx-auto my-10 drop-shadow-lg text-white'>Follow the action live! -

                        <a target='_blank' href={`${data.cricheroes}`}> <button className='btn btn-primary w-64 md:mr-40'>Live Match results </button></a>

                    </div>

                </div>:<></> : <></>}


                {data.result.length > 0 ? <div className='rules-section w-[95%] md:w-5/6 mx-auto my-16'>
                    <div className='font-bold md:text-6xl text-2xl mx-auto my-10 drop-shadow-lg text-white'>Results </div>
                    {
                        data.result.map((result, id) => {
                            return <img draggable='false' src={result.url} key={id} alt="rules" className='md:w-4/6 mx-auto' />
                        })
                    }
                </div> : <></>}



                {data.videos.length > 0 ? <div className='rules-section w-[95%] md:w-5/6 mx-auto my-16'>
                    <div className='font-bold md:text-6xl text-2xl mx-auto my-10 drop-shadow-lg text-white'>Videos </div>
                    <div className='flex flex-wrap gap-16 items-center justify-center'>
                        {
                            data.videos.map((videos, id) => {
                                return <YouTube className='md:w-[25%]' videoId={videos} key={id} opts={opts}/>
                            })
                        }
                    </div>
                </div> : <></>}


                {data.schedule.length > 0 ? <div className='rules-section w-[95%] md:w-5/6 mx-auto my-16'>
                    <div className='font-bold md:text-6xl text-2xl mx-auto my-10 drop-shadow-lg text-white'>Teams and Schedule </div>
                    {
                        data.schedule.map((rule, id) => {
                            return <img draggable='false' src={rule.url} key={id} alt="rules" className='md:w-4/6 mx-auto' />
                        })
                    }
                </div> : <></>}



                {data.rules.length > 0 ? <div className='rules-section w-[95%] md:w-5/6 mx-auto my-16'>
                    <div className='font-bold md:text-6xl text-2xl mx-auto my-10 drop-shadow-lg text-white'>Rules And Regulations </div>
                    {
                        data.rules.map((rule, id) => {
                            return <img draggable="false" src={rule.url} key={id} alt="rules" className='md:w-4/6 mx-auto' />
                        })
                    }
                </div> : <></>}
            </div>
        </>
    )
}

export default EventsMain