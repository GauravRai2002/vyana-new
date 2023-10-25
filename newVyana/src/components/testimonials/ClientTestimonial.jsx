import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SingleTestimonial from '../singleTestimonial/SingleTestimonial';
import one from '../../assets/nitin.jpg'
import two from '../../assets/karan.jpg'
import three from '../../assets/arihant.jpg'

function ClientTestimonial({ heading }) {
    var width = window.innerWidth
    var settings = width > 1000 ? {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
    } : {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
    };
    return (
        <div className='md:my-32 my-16'>
            <h1 className='text-white md:text-6xl text-xl text-center font-bold'>{heading}</h1>
            <Slider className='md:my-16 my-6' {...settings}>
                <SingleTestimonial icon={one} review={`We hired Vyana Sports to manage the sixth edition of the Bandhan Smash Up Badminton tournament for our channel partners. We were delighted by their organizational and creative skills.
                They brought in a new element to the tournament and took the experience and participation to greater heights. Our partners loved the engagement and Vyana Sports was able to do it in the most professional manner.
                We would love to work with them in the future again.`} name={`Mr Nitin Khera`} designation={'Zonal Head – East, Bandhan Asset Management Co Ltd'} />
                <SingleTestimonial icon={three} review={`Vyana Sports managed the third edition of the YLF T10 Cricket 2023 on behalf of the executive committee of YLF. This was the second year that Abhenav & his team were managing the tournament. His eye for detail and meticulous planning led to a successful execution of the tournament. Starting with the auctions, the designing, the event planning and the technological execution of the event delighted all our members. The event was followed by an awards night, which too was executed perfectly by the Vyana Sports team. Looking forward to continued association with Vyana Sports with the Young Leaders Forum.`} name={`Mr Arihant Parakh`} designation={'Chairman (2023) – Young Leaders Forum'} />
                <SingleTestimonial icon={two} review={`For the fifth edition of the KKR CCFC T10, we decided to hire a professional team to manage the tournament on behalf of the cricket section of CCFC. It was for the first time we were engaging with a third party but Vyana Sports professionalism laid to rest our hesitation.Abhenav Khettry and his team executed the 45-day event seamlessly and brought in a new dimension of live streaming to the event. The over all experience of the club, the participants and the GC members was great and we hope to work with Vyana Sports again in the future.`} name={`Mr Karan Singh Grewal`} designation={'Sports Coordinator (2022-23) – Calcutta Cricket & Football Club '} />
            </Slider>
        </div>
    )
}

export default ClientTestimonial