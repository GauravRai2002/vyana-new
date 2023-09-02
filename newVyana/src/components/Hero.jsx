import React from 'react'
import hero from '../assets/hero_bg.png'
import './hero.css'

function Hero() {
    return (
        <>
            <div className=" relative flex items-center justify-center mx-1 md:mx-11 h-screen height ">

                <svg className='absolute top-position' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#0F62FE" d="M38.8,-51.6C52.3,-43.6,66.7,-35,73.1,-22.1C79.6,-9.2,78.1,7.8,72.4,22.9C66.7,38.1,56.7,51.2,43.9,61.3C31.2,71.3,15.6,78.2,0,78.2C-15.6,78.2,-31.1,71.3,-42.3,60.7C-53.5,50.1,-60.3,36,-67.5,20.4C-74.7,4.8,-82.3,-12.2,-80.4,-28.6C-78.5,-45,-67.1,-60.8,-52.1,-68.3C-37.1,-75.9,-18.6,-75.1,-2.9,-71C12.7,-66.9,25.3,-59.6,38.8,-51.6Z" transform="translate(100 100)" />
                </svg>

                <div className="hero-content flex-col-reverse md:flex-row w-full justify-center gap-2 md:gap-32 text-left text-neutral-content">
                    <div className="max-w-lg text-justify mx-2 ">
                        <h1 className="mb-5 text-5xl font-bold text-zinc-900">Vyana Sports</h1>
                        <p className="mb-5 text-zinc-600">Vyana Sports was founded in 2021 by Mr Abhenav Khettry, a passionate sportsman and a wealth manager by profession. The aim of Vyana Sports is to provide a professional sporting event experience to all events managed by them. Their foremost clients include social clubs of Calcutta, alumni associations of Mayo College and The Doon School and companies who wish to encourage sports and team building activities for their employees. Vyana Sports brings in a complete digital experience encompassing various facets of tournaments like: digital record keeping, live broadcasting, still photos with facial recognition, social media marketing and event creative for use on social media. We have our own in house design & execution teams.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                    <img src={hero} alt="" />
                </div>

                {/* <svg className='absolute bottom-position' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#0F62FE" d="M50.9,-73.3C63.3,-61,69.1,-42.6,70.8,-25.7C72.5,-8.8,70.3,6.6,67.5,24C64.7,41.4,61.5,60.8,50.1,68.6C38.8,76.4,19.4,72.7,2.6,69.1C-14.1,65.5,-28.3,61.9,-40.9,54.5C-53.4,47.1,-64.5,35.8,-68.4,22.5C-72.4,9.2,-69.3,-6.2,-65.2,-21.9C-61.1,-37.6,-55.9,-53.8,-44.9,-66.6C-33.9,-79.4,-16.9,-88.9,1.1,-90.4C19.2,-92,38.4,-85.7,50.9,-73.3Z" transform="translate(100 100)" />
                </svg> */}
            </div>
        </>
    )
}

export default Hero