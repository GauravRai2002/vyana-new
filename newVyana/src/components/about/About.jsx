import React from 'react'
import background from '../../assets/abhenav.jpg'
import '../photos/photos.css'
import Contact from '../contact/Contact'
import Footer from '../footer/Footer'
import Hero from '../hero/Hero'
import './about.css'
import video from '../../assets/VYANA.mp4'
function About() {
    return (
        <div className='photos-area-main py-0.5 '>

            <video src={video} className='video' controlsList="nodownload noplaybackrate" disablePictureInPicture controls loop></video>
            <div className="card px-4 flex-wrap card-side shadow-xl md:w-5/6 w-full mx-1 md:mx-auto my-16">
                <figure className='flex items-center justify-center w-[98vw] md:w-auto' ><img draggable='false' className='md:w-[40vw] w-[90vw] rounded-xl mx-auto' src={background} alt="Movie" /></figure>
                <div className="p-6 flex flex-col gap-4 md:w-1/2 md:text-left text-justify">
                    <h1 className="block card-title text-3xl text-white">Mr. Abhenav Khettry</h1>
                    <span className='font-light text-xs w-fit text-white'>Founder - Vyana Sports</span>
                    <p className='block text-white'>From the Founder’s Desk
                        <br /><br />
                        Vyana Sports is a creation of years of planning and passion. The primary endeavor has been to provide a seamless sporting experience with the best-in-class technology.
                        <br /><br />
                        The best memories and friendships are created on a sports field. We at Vyana Sports believe in creating beautiful and ever lasting memories on and off the field.
                        <br /><br />
                        Our adoption of technology along with a passionate team, has helped create many memories and sporting events over the years. We have painstakingly organized sporting events for clubs, alumni associations, corporates and passionate sportspersons. Our clientele includes the most prestigious clubs, alumni associations and corporates of India.
                        <br /><br />
                        At Vyana Sports we promise you a memorable sporting experience.
                        <br /><br />
                        Abhenav Khettry</p>

                </div>
            </div>
        </div>
    )
}

export default About