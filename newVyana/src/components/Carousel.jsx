import React from 'react'
import hero from '../assets/hero_bg.png'
import Groups from './Groups'
import ScheduleTable from './ScheduleTable'
import bottom from '../assets/match.png'

function Carousel() {
    return (
        <>
            <div className="text-6xl font-bold md:w-5/6 mx-auto mt-8" >
                MATCH SCHEDULE
                <img className='md:w-3/5' src={bottom} alt="" />
            </div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <ScheduleTable group={'Group A'} time={' 09 : 20 AM'} court={['1','2','3','1','2','3','1']} timing={['09 : 40 AM','09 : 40 AM','09 : 40 AM','10 : 00 AM','10 : 00 AM','10 : 00 AM','10 : 20 AM',]} event={['OPEN 1','OPEN 2','OPEN 3','MIXED 1','MIXED 2','VETERAN','OPEN 4']} team1={'CORE'} team2={'STERLING'}/>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide6" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <ScheduleTable group={'Group B'} time={' 09 : 20 AM'} court={['2','3','1','2','3','1','2']} timing={['10 : 20 AM','10 : 20 AM','10 : 40 AM','10 : 40 AM','10 : 40 AM','11 : 00 AM','11 : 00 AM',]} event={['OPEN 1','OPEN 2','OPEN 3','MIXED 1','MIXED 2','VETERAN','OPEN 4']}  team1={'FLEXI'} team2={'EMERGING'}/>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <ScheduleTable group={'Group C'} time={' 10 : 00 AM'} court={['3','1','2','3','1','2','3']} timing={['11 : 00 AM','11 : 20 AM','11 : 20 AM','11 : 20 AM','11 : 40 AM','11 : 40 AM','11 : 40 AM',]} event={['OPEN 1','OPEN 2','OPEN 3','MIXED 1','MIXED 2','VETERAN','OPEN 4']}   team1={'FLOATING'} team2={'DYNAMIC'}/>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <ScheduleTable group={'Group D'} time={' 10 : 00 AM'} court={['1','2','3','1','2','3','1']} timing={['12 : 00','12 : 00','12 : 00','12 : 20 PM','12 : 20 PM','12 : 20 PM','12 : 40 PM',]} event={['OPEN 1','OPEN 2','OPEN 3','MIXED 1','MIXED 2','VETERAN','OPEN 4']} team1={'BOND'} team2={'ULTRA'}/>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide5" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide5" className="carousel-item relative w-full">
                    <ScheduleTable group={'SEMI-FINAL 1'} time={''} court={['2','3','1','2','3','1','2']} timing={['12 : 40 PM','12 : 40 PM','01 : 00 PM','01 :00 PM','01 : 00 PM','01 : 20 PM','01 : 20 PM',]} event={['OPEN 1','OPEN 2','OPEN 3','MIXED 1','MIXED 2','VETERAN','OPEN 4']} team1={'CORE'} team2={'EMERGING'}/>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide6" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide6" className="carousel-item relative w-full">
                    <ScheduleTable group={'SEMI-FINAL 2'} time={''} court={['3','1','2','3','1','2','3']} timing={['01 : 20 PM','01 : 40 PM','01 : 40 PM','01 :40 PM','02 : 00 PM','01 : 00 PM','02 : 00 PM',]} event={['OPEN 1','OPEN 2','OPEN 3','MIXED 1','MIXED 2','VETERAN','OPEN 4']} team1={'FLOATING'} team2={'BOND'}/>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide5" className="btn btn-circle">❮</a>
                        <a href="#slide7" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide7" className="carousel-item relative w-full">
                    <ScheduleTable group={'FINAL'} time={''} court={['1','2','3','1','2','3','1']} timing={['03 : 00 PM','03 : 00 PM','03 : 00 PM','03 :30 PM','03 : 30 PM','03 : 30 PM','04 : 00 PM',]} event={['OPEN 1','OPEN 2','OPEN 3','MIXED 1','MIXED 2','VETERAN','OPEN 4']} team1={'CORE'} team2={'TBD'}/>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide6" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Carousel