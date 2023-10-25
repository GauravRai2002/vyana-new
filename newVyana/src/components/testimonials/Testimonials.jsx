import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SingleTestimonial from '../singleTestimonial/SingleTestimonial';
import one from '../../assets/img1.jpeg'
import two from '../../assets/pranav.jpg'
import three from '../../assets/img3.jpg'
import four from '../../assets/img4.jpg'
import five from '../../assets/harsh.jpg'

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
                <SingleTestimonial icon={one} review={`Had the fortune to take part in the tournament organised by Mr. Khettry. Was pleasantly surprised by the professionalism shown by his team and him in handling and organising the tournament. Looking forward to taking part in other tournaments organised by him`} name={`Yashovardhan Kanodia`}/>
                <SingleTestimonial icon={two} review={`He is an absolute blessing to the amateur cricket circuit in Kolkata. Best grounds, International level broadcasting and an electric environment is what you are assured while participating in his tournaments. This is surely just the beginning! ????`} name={`Pranav Jatia`}/>
                <SingleTestimonial icon={three} review={`Thanks Abhenav for taking the Kolkata social club cricket scene for amateurs to the next level. Brilliant organization skills, great social media and youtube coverage and thoughtful planning. Looking forward to so much more going ahead. Wish you and your team all the very best!`} name={`Anant Kajaria`}/>
                <SingleTestimonial icon={four} review={`Great initiative by Abhenav Khettry and Vaanya sports for well organized tourney for ametur cricketers. With such passion, professionalism, and positivity . Games were good, fast-paced , and by far one of the best tournaments we have been part of. Keep up the great work.. we need more of this!! Cheers`} name={`Rajat Agarwal`}/>
                <SingleTestimonial icon={five} review={`Amazing experience playing the tournament. Great work done by Vyana Sports and Abhenav in organising the tournament and especially a fantastic digital experience with all games being streamed live on YouTube.`} name={`Harshvardhan Shah`}/>
            </Slider>
        </div>
    )
}

export default Testimonials