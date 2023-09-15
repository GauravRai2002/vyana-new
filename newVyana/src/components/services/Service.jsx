import React from 'react'
import logo from '../../assets/ylfcricket23.png'


function Service({logo,text1,text2}) {
  return (
    <>
        <div className="card flex flex-col items-center justify-center card-side bg-primary shadow-xl md:w-1/3 w-full scale-90 hover:glass">
                <img className='w-20 my-3' src={logo} alt="" />
                <div className="p-6 text-white">
                    <h2 className="font-extrabold text-3xl text-center my-3 mt-0">{text1}</h2>
                    <p className='flex flex-col'>                        
                        <span className='text-ellipsis text-justify'>{text2}</span>
                    </p>
   

                </div>
            </div>
    </>
  )
}

export default Service