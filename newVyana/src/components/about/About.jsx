import React from 'react'
import background from '../../assets/abhenav.jpg'
import '../photos/photos.css'
import Contact from '../contact/Contact'
import Footer from '../footer/Footer'
import Hero from '../hero/Hero'
import './about.css'
import video from '../../assets/VYANA.mp4'
function About() {
    return (
        <div className='photos-area-main pt-0.5 '>

            <video src={video} className='video' controlsList="nodownload noplaybackrate" disablePictureInPicture controls loop></video>
            <div className="card flex-wrap card-side shadow-xl md:w-5/6 w-full mx-1 md:mx-auto my-16">
                <figure className='flex items-center justify-center w-[98vw] md:w-auto' ><img draggable='false' className='md:w-[40vw] w-[95vw] rounded-xl mx-auto' src={background} alt="Movie" /></figure>
                <div className="p-6 flex flex-col gap-4 md:w-1/2 md:text-left text-justify">
                    <h1 className="block card-title text-3xl text-white">Mr. Abhenav Khettry</h1>
                    <span className='font-light text-xs w-fit text-white'>Founder - Vyana Sports</span>
                    <p className='block text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore velit mollitia soluta rem rerum cupiditate reprehenderit eveniet odio nihil quos hic autem pariatur fugiat, optio atque ipsum vero commodi veritatis dolorem voluptas voluptatibus, quod expedita! A ab cumque assumenda error earum, vitae molestias? Odio deserunt aspernatur maxime minus quasi quos accusamus soluta quia neque fugiat sunt laborum perferendis molestias dolorem consequuntur cupiditate porro ipsum expedita, officiis in magnam reprehenderit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quos accusamus libero facilis assumenda maiores. Quisquam excepturi molestias illo! Voluptates, totam architecto. Blanditiis, id? Velit nulla dolore vel eius fugiat dolorem ipsam obcaecati! Quisquam voluptatum, nam fugiat optio eius iste architecto. Accusantium provident cumque quae assumenda ipsa possimus dolorum ea, neque suscipit doloribus fugit atque consequuntur maiores alias, ducimus itaque a architecto illo natus, sunt minima maxime expedita? Repellat. </p>

                </div>
            </div>





            <Contact />
            <Footer />
        </div>
    )
}

export default About