import React, { useEffect, useParams, useState } from 'react'
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
function EventsMain({ allData }) {
    const opts = {
        height: '230',
        width: '400',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    const [data, setData] = useState({
        'result':[],
        'schedule':[],
        'rules':[],
        'videos':[]
    })

    const handleOnReady = (event) => {
        event.target.pauseVideo();
    }

    useEffect(() => {
        const url = window.location.href
        const id = url.substring(url.lastIndexOf("/") + 1)
        console.log(id)
        console.log('events main')
        try{
            fetch(`https://vyana-sports-back-end.vercel.app/events/${id}`).then(res => res.json()).then(result => setData(result))
        }catch(err){
            setData({
                'result':[],
                'schedule':[],
                'rules':[],
                'videos':[]
            })
        }

    }, [])

    return (
        <>
            <div className='px-6 md:px-0 main-area-events min-h-screen bg-cover bg-no-repeat bg-center pt-1'>




                <div className='rules-section md:w-5/6 mx-auto my-16'>
                    <div className='font-bold md:text-6xl text-2xl mx-auto md:w-5/6 my-10 drop-shadow-lg text-white'>Results </div>
                    {
                        data.result.map((result, id) => {
                            return <img draggable='false' src={result.url} key={id} alt="rules" />
                        })
                    }
                </div>

                <div className='rules-section md:w-5/6 mx-auto my-16'>
                    <div className='font-bold md:text-6xl text-2xl mx-auto md:w-5/6 my-10 drop-shadow-lg text-white'>Photos </div>

                </div>

                <div className='rules-section md:w-5/6 mx-auto my-16'>
                    <div className='font-bold md:text-6xl text-2xl mx-auto md:w-5/6 my-10 drop-shadow-lg text-white'>Videos </div>
                    <div className='flex flex-wrap gap-16 items-center justify-center'>
                        {
                            data.videos.map((videos, id) => {
                                return <YouTube videoId={videos} key={id} opts={opts} onReady={handleOnReady} />
                            })
                        }
                    </div>
                </div>


                <div className='rules-section md:w-5/6 mx-auto my-16'>
                    <div className='font-bold md:text-6xl text-2xl mx-auto md:w-5/6 my-10 drop-shadow-lg text-white'>Teams and Schedule </div>
                    {
                        data.schedule.map((rule, id) => {
                            return <img draggable='false' src={rule.url} key={id} alt="rules" />
                        })
                    }
                </div>



                <div className='rules-section md:w-5/6 mx-auto my-16'>
                    <div className='font-bold md:text-6xl text-2xl mx-auto md:w-5/6 my-10 drop-shadow-lg text-white'>Rules And Regulations </div>
                    {
                        data.rules.map((rule, id) => {
                            return <img draggable="false" src={rule.url} key={id} alt="rules" />
                        })
                    }
                </div>


                <Contact />
            </div>
            <Footer />
        </>
    )
}

export default EventsMain