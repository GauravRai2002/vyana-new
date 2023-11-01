import React, { useEffect, useRef } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './services.css'
import background from '../../assets/abhenav.jpg'
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';

function DetailedLiveScoring() {
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
                        <img className='brightness-50 rounded-lg  md:h-[95vh]' src='https://res.cloudinary.com/dy4rzochf/image/upload/v1698832556/Services/Scoring/1H1A6490_cjf7tr.jpg' alt="" />
                        <img className='brightness-50 rounded-lg md:h-[95vh]' src='https://res.cloudinary.com/dy4rzochf/image/upload/v1698832478/Services/Scoring/1H1A6232_jsueu6.jpg' alt="" />
                        <img className='brightness-50 rounded-lg md:h-[95vh]' src='https://res.cloudinary.com/dy4rzochf/image/upload/v1698832298/Services/Scoring/_41A1033_twctoh.jpg' alt="" />
                        <img className='brightness-50 rounded-lg md:h-[95vh]' src='https://res.cloudinary.com/dy4rzochf/image/upload/v1698832436/Services/Scoring/IMG_9649_ykdekc.jpg' alt="" />
                    </Slider>
                </div>
                <div className="py-1 px-4 md:p-6 flex flex-col gap-4 md:gap-10 w-full md:text-left text-justify absolute inset-0 items-center justify-center">
                    <h1 className="block card-title md:text-3xl text-white">Live Scoring</h1>
                    <p className='block text-white text-xs md:text-lg text-center md:px-20'>Stay connected to the action with our live scoring service on the CricHeros App. Real-time updates, statistics, and results delivered instantly, enhancing your sports or event experience. Follow the game play-by-play, and keep the excitement alive with our live scoring solutions.</p>

                </div>
            </div>





            <Contact />
            <Footer />

        </div>
    )
}

export default DetailedLiveScoring