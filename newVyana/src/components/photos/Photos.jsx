import React, { useEffect, useRef, useState } from 'react'
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
    var ind = 0;
    const [photos, setPhotos] = useState([])
    const [isLoaded, setIsloaded] = useState(false)
    const cloud = 'https://d1t6kumqe5krrs.cloudfront.net/'
    const [index, setIndex] = useState(0)
    const carouselRef = useRef()

    useEffect(() => {
        const url = window.location.href
        const id = url.substring(url.lastIndexOf("/") + 1)
        try {
            fetch(`https://vyana-view-face-api.vercel.app/viewImages/${id}`).then(data => data.json()).then(res => {
                try {
                    setPhotos([...res.response])
                    console.log([...res.response])
                    setIsloaded(true)
                } catch (e) {
                    console.log(e)
                }
            })
        } catch (error) {
            console.log(error)
        }
    }, [])

    const onLeftClick = () => {
        if (index == 0) return
        const newIndex = index - 1;
        setIndex(newIndex)
    }

    const onRightClick = () => {
        if (index == photos.length - 1) return
        const newIndex = index + 1;
        setIndex(newIndex)
    }
    return (<>
        <div className="photos-area-main py-1 relative">
            <div className=' flex flex-wrap items-start justify-center gap-0.5 mx-1 my-16 '>
                {isLoaded ?
                    photos.map((photo, id) => {
                        var localIndex = ind
                        ind++
                        return <div key={id} onClick={() => {
                            carouselRef.current.classList.remove('hidden')
                            carouselRef.current.classList.add('flex')
                            setIndex(localIndex)
                        }}>
                            <Photo url={photo} />
                        </div>
                    }) : <></>
                }
            </div>
            <div ref={carouselRef} className='hidden w-full mx-auto h-screen items-center justify-center fixed z-10 top-0 md:bg-[rgba(0,0,0,0.8)] bg-black p-1'>
                <div onClick={() => {
                    carouselRef.current.classList.remove('flex')
                    carouselRef.current.classList.add('hidden')
                }} className='absolute top-5 right-1 md:right-10 cursor-pointer'>
                    <svg width="40px" height="40px" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6.96967 16.4697C6.67678 16.7626 6.67678 17.2374 6.96967 17.5303C7.26256 17.8232 7.73744 17.8232 8.03033 17.5303L6.96967 16.4697ZM13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697L13.0303 12.5303ZM11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303L11.9697 11.4697ZM18.0303 7.53033C18.3232 7.23744 18.3232 6.76256 18.0303 6.46967C17.7374 6.17678 17.2626 6.17678 16.9697 6.46967L18.0303 7.53033ZM13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303L13.0303 11.4697ZM16.9697 17.5303C17.2626 17.8232 17.7374 17.8232 18.0303 17.5303C18.3232 17.2374 18.3232 16.7626 18.0303 16.4697L16.9697 17.5303ZM11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697L11.9697 12.5303ZM8.03033 6.46967C7.73744 6.17678 7.26256 6.17678 6.96967 6.46967C6.67678 6.76256 6.67678 7.23744 6.96967 7.53033L8.03033 6.46967ZM8.03033 17.5303L13.0303 12.5303L11.9697 11.4697L6.96967 16.4697L8.03033 17.5303ZM13.0303 12.5303L18.0303 7.53033L16.9697 6.46967L11.9697 11.4697L13.0303 12.5303ZM11.9697 12.5303L16.9697 17.5303L18.0303 16.4697L13.0303 11.4697L11.9697 12.5303ZM13.0303 11.4697L8.03033 6.46967L6.96967 7.53033L11.9697 12.5303L13.0303 11.4697Z" fill="#ffffff"></path> </g></svg>
                </div>
                <div onClick={onLeftClick} className='mx-3 cursor-pointer md:relative absolute left-2 z-30 opacity-50 md:opacity-100'>
                    <svg width="30px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M15.7071 4.29289C16.0976 4.68342 16.0976 5.31658 15.7071 5.70711L9.41421 12L15.7071 18.2929C16.0976 18.6834 16.0976 19.3166 15.7071 19.7071C15.3166 20.0976 14.6834 20.0976 14.2929 19.7071L7.29289 12.7071C7.10536 12.5196 7 12.2652 7 12C7 11.7348 7.10536 11.4804 7.29289 11.2929L14.2929 4.29289C14.6834 3.90237 15.3166 3.90237 15.7071 4.29289Z" fill="#ffffff"></path> </g></svg>
                </div>
                <div className='md:w-5/6 w-full flex items-center justify-center'>
                    <img className='md:w-auto w-full  h-auto md:h-[95vh] z-20' src={`${cloud}${photos[index]}`} alt="" />
                </div>
                <div className='mx-3 rotate-180 cursor-pointer  md:relative absolute right-2 z-30 opacity-50 md:opacity-100' onClick={onRightClick}>
                    <svg width="30px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M15.7071 4.29289C16.0976 4.68342 16.0976 5.31658 15.7071 5.70711L9.41421 12L15.7071 18.2929C16.0976 18.6834 16.0976 19.3166 15.7071 19.7071C15.3166 20.0976 14.6834 20.0976 14.2929 19.7071L7.29289 12.7071C7.10536 12.5196 7 12.2652 7 12C7 11.7348 7.10536 11.4804 7.29289 11.2929L14.2929 4.29289C14.6834 3.90237 15.3166 3.90237 15.7071 4.29289Z" fill="#ffffff"></path> </g></svg>
                </div>
            </div>
        </div>

    </>
    )
}

export default Photos