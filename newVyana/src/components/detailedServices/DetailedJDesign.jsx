import React, { useEffect, useRef } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './services.css'
import background from '../../assets/abhenav.jpg'
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';

function DetailedJDesign() {
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
                        <img className=' rounded-lg  md:h-[95vh]' src='https://res.cloudinary.com/dy4rzochf/image/upload/v1698829610/Services/Jersey/IMG_0589_xwzufh.jpg' alt="" />
                        <img className=' rounded-lg md:h-[95vh]' src='https://res.cloudinary.com/dy4rzochf/image/upload/v1698829602/Services/Jersey/IMG_0461_b03qdr.jpg' alt="" />
                        <img className=' rounded-lg md:h-[95vh]' src='https://res.cloudinary.com/dy4rzochf/image/upload/v1698829563/Services/Jersey/2A5A8457_sifho2.jpg' alt="" />
                        <img className=' rounded-lg md:h-[95vh]' src='https://res.cloudinary.com/dy4rzochf/image/upload/v1698829560/Services/Jersey/2A5A8452_vky8zn.jpg' alt="" />
                        <img className=' rounded-lg md:h-[95vh]' src='https://res.cloudinary.com/dy4rzochf/image/upload/v1698829556/Services/Jersey/IMG_2103_sfd6eh.jpg' alt="" />
                        <img className=' rounded-lg md:h-[95vh]' src='https://res.cloudinary.com/dy4rzochf/image/upload/v1698829554/Services/Jersey/IMG_1707_jxtat7.jpg' alt="" />
                    </Slider>
                </div>
                <div className="py-1 px-4 md:p-6 flex flex-col gap-4 md:gap-10 w-full md:text-left text-justify inset-0 items-center justify-center">
                    <h1 className="block card-title md:text-3xl text-white">Jersey Design</h1>
                    <p className='block text-white text-xs md:text-lg text-center md:px-20'>Unleash your unique style with our jersey design service. We craft custom, eye-catching jerseys that reflect your team's identity and vision. Elevate your look, boost team spirit, and stand out with our creative, tailored designs. Flaunt your individuality on the field with our jersey designs..</p>

                </div>
            </div>

        </div>
    )
}

export default DetailedJDesign