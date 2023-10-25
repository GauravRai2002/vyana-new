import React from 'react'
import one from '../../assets/img1.jpeg'
import two from '../../assets/pranav.jpg'
import three from '../../assets/img3.jpg'
import four from '../../assets/img4.jpg'
import five from '../../assets/img5.jpg'
import ten from '../../assets/result_1.jpg'
import six from '../../assets/result_2.jpg'
import seven from '../../assets/rule1.jpg'
import eight from '../../assets/rule2.jpg'
import nine from '../../assets/rule3.jpg'
import './photos.css'
import Contact from './../contact/Contact';
import Footer from './../footer/Footer';

function Photos() {
    const handleDownloadButton = (key)=>{
        console.log(key)
    }
    const photos = [one, two, three, four, five, six, seven, eight, nine, ten,one, two, three, four, five, six, seven, eight, nine, ten]
    return (
        <div className="photos-area-main pt-1">
            <div className=' flex flex-wrap items-start justify-center gap-1 md:w-5/6 m-auto my-16 '>
                {
                    photos.map((photo, key) => {
                        return <img onMouseOver={()=>handleDownloadButton(key)} className='w-96' src={photo} key={key} alt="" />
                    })
                }
            </div>
            <Contact/>
            <Footer/>
        </div>

    )
}

export default Photos