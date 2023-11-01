import React, { useEffect, useRef } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './services.css'
import background from '../../assets/abhenav.jpg'
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';

function DetailedServices() {
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
                        <img className='brightness-50 rounded-lg  md:h-[95vh]' src='https://res.cloudinary.com/dy4rzochf/image/upload/v1698828974/Services/Auction/CRI_1075_ybm1ow.jpg' alt="" />
                        <img className='brightness-50 rounded-lg md:h-[95vh]' src='https://res.cloudinary.com/dy4rzochf/image/upload/v1698828974/Services/Auction/CRI_1172_mdkfnj.jpg' alt="" />
                        <img className='brightness-50 rounded-lg md:h-[95vh]' src='https://res.cloudinary.com/dy4rzochf/image/upload/v1698828974/Services/Auction/CRI_1144_lgeprt.jpg' alt="" />
                        <img className='brightness-50 rounded-lg md:h-[95vh]' src='https://res.cloudinary.com/dy4rzochf/image/upload/v1698828977/Services/Auction/CRI_1104_xxtseq.jpg' alt="" />
                        <img className='brightness-50 rounded-lg md:h-[95vh]' src='https://res.cloudinary.com/dy4rzochf/image/upload/v1698828977/Services/Auction/CRI_1066_ourxxi.jpg' alt="" />
                        <img className='brightness-50 rounded-lg md:h-[95vh]' src='https://res.cloudinary.com/dy4rzochf/image/upload/v1698828977/Services/Auction/CRI_1045_nrzoht.jpg' alt="" />
                    </Slider>
                </div>
                <div className="py-1 px-4 md:p-6 flex flex-col gap-4 md:gap-10 w-full md:text-left text-justify absolute inset-0 items-center justify-center">
                    <h1 className="block card-title md:text-3xl text-white">Player Auctions</h1>
                    <p className='block text-white text-xs md:text-lg text-center md:px-20'>Streamline the player auction process with our service. We provide a transparent, efficient platform for buying and selling talent in the sports world. From individual athletes to teams, we ensure a seamless and organized process, connecting talent with opportunity. Elevate your player auctions today.</p>

                </div>
            </div>





            <Contact />
            <Footer />

        </div>
    )
}

export default DetailedServices