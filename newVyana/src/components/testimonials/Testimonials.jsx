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
import def from '../../assets/default.webp'
import nikhil from '../../assets/nikhil.jpg'
import rahul from '../../assets/rahulK.jpeg'
import harsh from '../../assets/harshW.jpg'
import harshS from '../../assets/harshS.jpeg'
import arya from '../../assets/arya.jpeg'
import vishesh from '../../assets/vishesh.jpeg'
import aba from '../../assets/aba.jpg'
import vaibhav from '../../assets/vaibhav.jpeg'
import nitinJ from '../../assets/nitinJ.jpg'
import ankit from '../../assets/ankit.jpg'
import saket from '../../assets/saket.jpg'



function Testimonials({heading}) {
    var width = window.innerWidth
    var settings =width>1050?{
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


                <SingleTestimonial icon={nikhil} review={`Vyana Sports has truly elevated the amateur cricket circuit, orchestrating exceptional outdoor cricket, indoor cricket, darts and badminton tournaments. The entire team, under the adept leadership of Abhenav Khettry, has executed a commendable job. Kudos to the Maestro and the entire Vyana team!. Would highly recommend the team if you are planning to organise any sporting event.`} name={`Nikhil Jain`}/>


                <SingleTestimonial icon={harsh} review={`Fantastic is the first word which comes to mind. Flawless execution and dedicated team with passion unparalleled. Kudos`} name={`Harshvardhan Sharma`}/>


                <SingleTestimonial icon={rahul} review={`A star in himself. He puts in his everything and organises things with precision. At our level we get the international standards of arrangements with Vyana sports. Was indeed a pleasure and Would love to be a part of your organised tournaments.`} name={`Rahul Kedia`}/>


                <SingleTestimonial icon={harshS} review={`Abhenav Khettry!!! U r The Kerry Packer of Amateur cricket! You are someone Rare!! Your contribution to our experience of this game is commendable and getting better year after year! :-) The Universe is toying something Big for You, can sense it! All the very Best Dear!! ?? Keep your hunger for excellence burning!`} name={`Harshvardhan Saraf`}/>

                <SingleTestimonial icon={def} review={`Brillian management , flawless execution. The most trusted sports management company ever. Looking forward for more games with you. Keep up the good work.`} name={`LMF Tr Anurag Mittal`}/>


                <SingleTestimonial icon={arya} review={`It has always been a pleasure to play in tournaments organised by Vyana! Stark difference in the level of organisation and facilities between Vyana sporting events and others. Always provides the best of arrangements and their passion for sports comes through in their personalised approach!`} name={`Aryaman Choudhury`}/>

                <SingleTestimonial icon={def} review={`Participated in an event organised for YLF by Vyana Sport. One of the best organised tournaments I have played in. Superbly managed event, great format, and excellent live event coverage of the event.`} name={`Suhel Saraf`}/>


                <SingleTestimonial icon={vishesh} review={`Abhenav Khettry and his team at Vyana Sports are the go-to people for organising quality cricket tournaments. They take care of minute details - video streaming, scoring, photographers, trophies, player requirements, food and drinks, jerseys, app integration - you name it all. Overall the tournaments organised by him are a great experience for the players and audience alike. Having played in quite a few of these myself, I can vouch for the same.`} name={`Vishesh Agarwal`}/>

                <SingleTestimonial icon={def} review={`Abhinav has been a good friend since many years with exceptional management skills which reflects in his company Vyana.... brilliantly organised tournament with an eye for detailing makes vyana leagues apart from its competitors. Overall highly recommended !`} name={`Siddharth Tahlani`}/>

                <SingleTestimonial icon={aba} review={`Since the past one and a half years, Abhenav has been putting in his heart and soul into organising some splendid cricket tournaments. He has been doing an immaculate job and it is always a pleasure to play in his tournaments.`} name={`Abadhya Jhunjhunwala`}/>

                <SingleTestimonial icon={def} review={`One of the die-hard fans of cricket. The guy who not only loves playing but enjoys more in getting everyone play the 22yards(leather ball).. wish you great success, Mr Khettry..`} name={`Vijayendra Singh`}/>

                <SingleTestimonial icon={vaibhav} review={`Abhenav is a Maestro in Organising Cricket Tournaments ! Himself being an active cricketer , he not only takes care of all the details for Cricketers , in fact he ensures that it’s a full & about pleasant set up for everyone involved , including umpires , Camera men , grounds men , staff etc. Its indeed a pleasure to participate in events of Vyana Sports. Hats off !`} name={`Vaibhav Gupta`}/>


                <SingleTestimonial icon={def} review={`Vyana Sports has truly upgraded the quality of local cricket tournaments in Kolkata, delivering coverage and management at levels never seen before. Kudos to Abhenav and his team for their vision and efforts!`} name={`Vivek Baheti`}/>


                <SingleTestimonial icon={nitinJ} review={`Amazing experience to participate in tournaments organised by Mr. Khettry!! Kudos to you and your team and looking forward playing more such events. Cheers`} name={`Nitin Jalan`}/>

                <SingleTestimonial icon={def} review={`Very well organised… Abhinev and his team works tirelessly to ensure the success of every tournament… moreover they make the event grand and also takes note of any suggestions/ ideas and make changes immediately …`} name={`Siddharth Khaitan`}/>


                <SingleTestimonial icon={ankit} review={`Champion organiser of sports events. Especially cricket. Live streaming, professional umpires, live scoring on the app. Fantastic overall experience!`} name={`Ankit Patni`}/>


                <SingleTestimonial icon={saket} review={`A 5-Star Rating is also less for Abhenav whose passion for Cricket is quite unparalleled. He and his team at Vyana Sports has transcended all barriers and elevated cricket to an entirely different level with their organizational skills. They leave NO stone unturned in providing the absolute best in terms of ground, facilities, equipment and a larger than life environment for us humble cricket aficionados. Abhenav.. you are a STAR !! Please keep up the good work and thanks a lot for taking such good care of all of us without ever battling an eyelid !`} name={`Saket Sutodiya`}/>

            </Slider>
        </div>
    )
}

export default Testimonials