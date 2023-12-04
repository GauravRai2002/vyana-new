import React, { useEffect, useRef } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './services.css'
import background from '../../assets/abhenav.jpg'
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';

function DetailedLiveStream() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
    };
    const topContainer = useRef();
    useEffect(() => {
        // To make sure page starts from the top
        topContainer.current.scrollIntoView({ block: "end", behavior: 'smooth' });
    }, []);
    return (
        <div className='services-background py-0.5'>
<div ref={topContainer} />

            {/* <video src={video} className='video' controlsList="nodownload noplaybackrate" disablePictureInPicture controls loop></video> */}
            <div className="card flex-wrap card-side shadow-xl md:w-5/6 w-full px-1 md:mx-auto my-16 relative">
                <div className='w-full'>
                    <Slider className='rounded-lg'  {...settings}>
                        <img className=' rounded-lg md:h-[95vh]' src='https://res.cloudinary.com/dy4rzochf/image/upload/v1698831990/Services/liveStream/_41A0813_ufjiqc.jpg' alt="" />
                        <img className=' rounded-lg  md:h-[95vh]' src='https://res.cloudinary.com/dy4rzochf/image/upload/v1698832013/Services/liveStream/1H1A6730_nb4tch.jpg' alt="" />
                        <img className=' rounded-lg md:h-[95vh]' src='https://res.cloudinary.com/dy4rzochf/image/upload/v1698831969/Services/liveStream/_41A0816_owyl6n.jpg' alt="" />
                    </Slider>
                </div>
                <div className="py-1 px-4 md:p-6 flex flex-col gap-4 md:gap-10 w-full md:text-left text-justify inset-0 items-center justify-center">
                    <h1 className="block card-title md:text-3xl text-white">Live Streaming</h1>
                    <p className='block text-white text-xs md:text-lg text-center md:px-20'>Elevate your online presence with our live streaming service. We provide a seamless platform to broadcast your events, performances, and messages to a global audience in real-time. Engage, connect, and share your story, ensuring your audience is part of the moment, no matter where they are. Go live with us!</p>

                </div>
            </div>

        </div>
    )
}

export default DetailedLiveStream