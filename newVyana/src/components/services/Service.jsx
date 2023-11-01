import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';


function Service({ logo, text1, text2, difference, link }) {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <Link className=' md:w-1/3 w-full' to={`/${link}`}>
      <div data-aos="fade-up" data-aos-duration="1500" data-aos-delay={`${difference}`} className=''>
        <div className="card flex flex-col items-center justify-center card-side bg-primary shadow-xl hover:glass  scale-90">
          <img className='w-20 my-3' src={logo} alt="" />
          <div className="p-6 text-white">
            <h2 className="font-extrabold text-3xl text-center my-3 mt-0">{text1}</h2>
            <p className='flex flex-col'>
              <span className='text-ellipsis text-justify'>{text2}</span>
            </p>


          </div>
        </div>
      </div>
    </Link>
  )
}

export default Service