import React from 'react'
import Service from './Service'
import planning from '../../assets/planning.png'
import face from '../../assets/face.png'
import design from '../../assets/design.png'
import score from '../../assets/score.png'
import live from '../../assets/live.png'
import auction from '../../assets/auction.png'

function Services() {
    return (
        <>
            <h1 className='md:text-6xl text-xl md:my-6 my-2 text-white font-extrabold text-center'>Services We Offer</h1>
            <div className='md:w-5/6 w-full md:p-0 md-2 flex flex-wrap mx-auto justify-center items-center gap-0'>
                <Service difference={100} logo={planning} text1={'Event Conceptualization'} text2={'Our event planning service transforms your vision into memorable experiences. From concept to execution, we handle every detail, ensuring seamless, unforgettable events. Your dream, our expertise.'} />
                <Service difference={300} logo={auction} text1={'Player Auction'} text2={'Elevate your player auction experience with our service. We streamline the process, providing transparency, efficiency, and fair market value for athletes and teams. Unlock your game-changing potential today.'} />
                <Service difference={600} logo={design} text1={'Jersey Design'} text2={"Turn your vision into a reality with our jersey design service. We create custom, eye-catching jerseys that reflect your unique style and identity. Elevate your team's look with us."} />
                <Service difference={900} logo={live} text1={'Live Broadcasting'} text2={'Experience seamless live broadcasting with our service. We bring your event, message, or performance to a global audience, ensuring professional production and real-time engagement. Your story, live.'} />
                <Service difference={1200} logo={face} text1={'Photos and Videos with Face Recognition'} text2={'Unlock the future of media organization with our facial recognition technology. Effortlessly manage your photos and videos, instantly tagging and locating faces for a hassle-free experience. Elevate your memories.'} />
                <Service difference={1500} logo={score} text1={'Live Scoring'} text2={'Stay in the game with our live scoring service. Real-time updates, statistics, and results delivered instantly, enhancing your sports or event experience. Score like never before with us.'} />
            </div>
        </>
    )
}

export default Services