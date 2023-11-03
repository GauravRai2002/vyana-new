import React, { useEffect, useRef } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './services.css'
import background from '../../assets/abhenav.jpg'
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';

function DetailedTDesign() {
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

    return (<>
        <div ref={topContainer} />
        <div className='services-background py-0.5'>


            {/* <video src={video} className='video' controlsList="nodownload noplaybackrate" disablePictureInPicture controls loop></video> */}
            <div className="card flex-wrap card-side shadow-xl md:w-5/6 w-full px-1 md:mx-auto my-16 relative">
                <div className='w-full'>
                    <Slider className='rounded-lg'  {...settings}>
                        <img className='brightness-50 rounded-lg  md:h-[95vh]' src='https://res.cloudinary.com/dy4rzochf/image/upload/v1698829265/Services/Trophy/CRI_1313_qrbyhx.jpg' alt="" />
                        <img className='brightness-50 rounded-lg md:h-[95vh]' src='https://res.cloudinary.com/dy4rzochf/image/upload/v1698829249/Services/Trophy/_DSC0398_lxhbd2.jpg' alt="" />
                        <img className='brightness-50 rounded-lg md:h-[95vh]' src='https://res.cloudinary.com/dy4rzochf/image/upload/v1698829241/Services/Trophy/1H1A8841_psl7o3.jpg' alt="" />
                        <img className='brightness-50 rounded-lg md:h-[95vh]' src='https://res.cloudinary.com/dy4rzochf/image/upload/v1698829218/Services/Trophy/_41A0009_oxpql3.jpg' alt="" />
                        <img className='brightness-50 rounded-lg md:h-[95vh]' src='https://res.cloudinary.com/dy4rzochf/image/upload/v1698829425/Services/Trophy/IMG_0428_uetwjv.jpg' alt="" />
                    </Slider>
                </div>
                <div className="py-1 px-4 md:p-6 flex flex-col gap-4 md:gap-10 w-full md:text-left text-justify absolute inset-0 items-center justify-center">
                    <h1 className="block card-title md:text-3xl text-white">Trophy Design</h1>
                    <p className='block text-white text-xs md:text-lg text-center md:px-20'>Celebrate excellence with our trophy design service. We craft unique, customized trophies that symbolize achievement and success in style. Each trophy is a work of art, a tangible representation of your accomplishments. Whether for sports, corporate recognition, or special events, our trophy designs epitomize distinction and honor.</p>

                </div>
            </div>

        </div>
    </>
    )
}

export default DetailedTDesign