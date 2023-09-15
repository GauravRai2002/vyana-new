import React from 'react'
import Slider from "react-slick";
import logo from '../../assets/ylfcricket23.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SingleTestimonial from '../singleTestimonial/SingleTestimonial';

function Testimonials({heading}) {
    var width = window.innerWidth
    var settings =width>1000?{
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay:true,
        arrows:false,
    }:{
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        arrows:false,
    };
    return (
        <div className='md:my-32 my-16'>
            <h1 className='text-white md:text-6xl text-xl text-center font-bold'>{heading}</h1>
            <Slider className='md:my-16 my-6' {...settings}>
                <SingleTestimonial/>
                <SingleTestimonial/>
                <SingleTestimonial/>
                <SingleTestimonial/>
                <SingleTestimonial/>
                <SingleTestimonial/>
                <SingleTestimonial/>
            </Slider>
        </div>
    )
}

export default Testimonials