import React, { useEffect, useRef } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './services.css'
import background from '../../assets/abhenav.jpg'
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';

function DetailedFaceRecognition() {
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
        <div className='services-background pt-0.5'>
            <div ref={topContainer} />

            {/* <video src={video} className='video' controlsList="nodownload noplaybackrate" disablePictureInPicture controls loop></video> */}
            <div className="card flex-wrap card-side shadow-xl md:w-5/6 w-full px-1 md:mx-auto my-16 relative">
                <div className='w-full'>
                    <Slider className='rounded-lg'  {...settings}>
                        <img className='brightness-50 rounded-lg  md:h-[95vh]' src='https://res.cloudinary.com/dy4rzochf/image/upload/v1698835626/Services/face/face-recognition_z8jggn.jpg' alt="" />
                    </Slider>
                </div>
                <div className="py-1 px-4 md:p-6 flex flex-col gap-4 md:gap-10 w-full md:text-left text-center absolute inset-0 items-center justify-center">
                    <h1 className="block card-title md:text-3xl text-white">Event photos and Videos with face recognition</h1>
                    <p className='block text-white text-xs md:text-lg text-center md:px-20'>Experience the future of image management with our facial recognition database. Effortlessly organize and locate photos and videos using cutting-edge facial recognition technology. Instantly tag and search for faces, enhancing efficiency and making your media library smarter and more accessible. Simplify image management and rediscover your memories.</p>

                </div>
            </div>
        </div>
    )
}

export default DetailedFaceRecognition