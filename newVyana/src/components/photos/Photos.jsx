import React, { useEffect, useState } from 'react'
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
import Photo from './Photo'

function Photos() {
    const photoUrl = `https://d1nggc2z6cn784.cloudfront.net/ympl/02daf866-ff56-46de-a16a-a65c2c2dd10e.jpg`
    const handleDownloadButton = (key)=>{
        console.log(key)
    }
    const [photos,setPhotos] = useState([])
    const [isLoaded,setIsloaded] = useState(false)

    useEffect(()=>{
        const url = window.location.href
        const id = url.substring(url.lastIndexOf("/") + 1)
        try{
            fetch(`https://vyana-view-face-api.vercel.app/viewImages/${id}`).then(data=>data.json()).then(res=>{
                try{
                    setPhotos([...res.response])
                    setIsloaded(true)
                }catch(e){
                    console.log(e)
                }
            })
        }catch(error){
            console.log(error)
        }
    },[])
    return (
        <div className="photos-area-main pt-1">
            <div className=' flex flex-wrap items-start justify-center gap-1 mx-1 my-16 '>
                {isLoaded?
                    photos.map((photo, key) => {
                        return <Photo key={key} url={photo}/>
                    }):<></>
                }
            </div>
            <Contact/>
            <Footer/>
        </div>

    )
}

export default Photos