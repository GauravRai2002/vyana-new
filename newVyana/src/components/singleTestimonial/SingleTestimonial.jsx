import React from 'react'
import './singleTestimonial.css'
function SingleTestimonial({icon,review,name,designation}) {
    return (
        <>
            <div className="card glass card-side width shadow-xl h-fit">
                <div className="avatar flex items-start justify-center m-3">
                    <div className="md:w-24 w-16  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img className='aspect-square' src={icon} />
                    </div>
                </div>
                <div className="md:p-8 p-2 text-white">
                    <h2 className="card-title font-extrabold md:text-xl text-xl">{name}</h2>
                    <span className='font-light text-xs'>{designation}</span>
                    <p className='flex flex-col'>                        
                        <svg fill="#ffffff" width="30px" height="30px" viewBox="0 0 64 64" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" xmlnsSerif="http://www.serif.com/" style={{"fill-rule":"evenodd","clip-rule":"evenodd","stroke-linejoin":"round","stroke-miterlimit":"2","display":"inline","align-self":"right"}} stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect id="Icons" x="-640" y="0" width="1280" height="800" style={{"fill":"none"}}></rect> <g id="Icons1" serifId="Icons"> <g id="Strike"> </g> <g id="H1"> </g> <g id="H2"> </g> <g id="H3"> </g> <g id="list-ul"> </g> <g id="hamburger-1"> </g> <g id="hamburger-2"> </g> <g id="list-ol"> </g> <g id="list-task"> </g> <path id="quote-1" d="M27.194,12l0,8.025c-2.537,0.14 -4.458,0.603 -5.761,1.39c-1.304,0.787 -2.22,2.063 -2.749,3.829c-0.528,1.766 -0.793,4.292 -0.793,7.579l9.303,0l0,19.145l-19.081,0l0,-18.201c0,-7.518 1.612,-13.025 4.836,-16.522c3.225,-3.497 7.973,-5.245 14.245,-5.245Zm28.806,0l0,8.025c-2.537,0.14 -4.457,0.586 -5.761,1.338c-1.304,0.751 -2.247,2.028 -2.828,3.829c-0.581,1.8 -0.872,4.344 -0.872,7.631l9.461,0l0,19.145l-19.186,0l0,-18.201c0,-7.518 1.603,-13.025 4.809,-16.522c3.207,-3.497 7.999,-5.245 14.377,-5.245Z" style={{"fill-rule":"nonzero"}}></path> <g id="trash"> </g> <g id="vertical-menu"> </g> <g id="horizontal-menu"> </g> <g id="sidebar-2"> </g> <g id="Pen"> </g> <g id="Pen1" serifId="Pen"> </g> <g id="clock"> </g> <g id="external-link"> </g> <g id="hr"> </g> <g id="info"> </g> <g id="warning"> </g> <g id="plus-circle"> </g> <g id="minus-circle"> </g> <g id="vue"> </g> <g id="cog"> </g> <g id="logo"> </g> <g id="radio-check"> </g> <g id="eye-slash"> </g> <g id="eye"> </g> <g id="toggle-off"> </g> <g id="shredder"> </g> <g id="spinner--loading--dots-" serifId="spinner [loading, dots]"> </g> <g id="react"> </g> <g id="check-selected"> </g> <g id="turn-off"> </g> <g id="code-block"> </g> <g id="user"> </g> <g id="coffee-bean"> </g> <g id="coffee-beans"> <g id="coffee-bean1" serifId="coffee-bean"> </g> </g> <g id="coffee-bean-filled"> </g> <g id="coffee-beans-filled"> <g id="coffee-bean2" serifId="coffee-bean"> </g> </g> <g id="clipboard"> </g> <g id="clipboard-paste"> </g> <g id="clipboard-copy"> </g> <g id="Layer1"> </g> </g> </g></svg>

                        <span className='md:font-normal font-light  md:text-sm md:block text-md'>{review}</span>
                        
                        
                        
                        
                        
                        <svg fill="#fff" width="30px" height="30px" viewBox="0 0 60 60" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" xmlnsSerif="http://www.serif.com/" style={{"fill-rule":"evenodd","clip-rule":"evenodd","stroke-linejoin":"round","stroke-miterlimit":"2","display":"inline","align-self":"end"}} stroke="#fff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect id="Icons" x="-1216" y="0" width="1280" height="800" style={{"fill":"none"}}></rect> <g id="Icons1" serifId="Icons"> <g id="Strike"> </g> <g id="H1"> </g> <g id="H2"> </g> <g id="H3"> </g> <g id="list-ul"> </g> <g id="hamburger-1"> </g> <g id="hamburger-2"> </g> <g id="list-ol"> </g> <g id="list-task"> </g> <path id="quote-2" d="M36.806,51.968l0,-8.026c2.537,-0.14 4.458,-0.604 5.761,-1.391c1.304,-0.786 2.22,-2.063 2.749,-3.829c0.528,-1.766 0.793,-4.293 0.793,-7.581l-9.303,0l0,-19.147l19.081,0l0,18.203c0,7.519 -1.612,13.028 -4.836,16.525c-3.225,3.497 -7.973,5.246 -14.245,5.246Zm-28.806,0l0,-8.026c2.537,-0.14 4.457,-0.586 5.761,-1.338c1.304,-0.752 2.247,-2.029 2.828,-3.83c0.581,-1.801 0.872,-4.345 0.872,-7.633l-9.461,0l0,-19.147l19.186,0l0,18.203c0,7.519 -1.603,13.028 -4.809,16.525c-3.207,3.497 -7.999,5.246 -14.377,5.246Z" style={{"fill-rule":"nonzero"}}></path> <g id="trash"> </g> <g id="vertical-menu"> </g> <g id="horizontal-menu"> </g> <g id="sidebar-2"> </g> <g id="Pen"> </g> <g id="Pen1" serifId="Pen"> </g> <g id="clock"> </g> <g id="external-link"> </g> <g id="hr"> </g> <g id="info"> </g> <g id="warning"> </g> <g id="plus-circle"> </g> <g id="minus-circle"> </g> <g id="vue"> </g> <g id="cog"> </g> <g id="logo"> </g> <g id="radio-check"> </g> <g id="eye-slash"> </g> <g id="eye"> </g> <g id="toggle-off"> </g> <g id="shredder"> </g> <g id="spinner--loading--dots-" serifId="spinner [loading, dots]"> </g> <g id="react"> </g> <g id="check-selected"> </g> <g id="turn-off"> </g> <g id="code-block"> </g> <g id="user"> </g> <g id="coffee-bean"> </g> <g id="coffee-beans"> <g id="coffee-bean1" serifId="coffee-bean"> </g> </g> <g id="coffee-bean-filled"> </g> <g id="coffee-beans-filled"> <g id="coffee-bean2" serifId="coffee-bean"> </g> </g> <g id="clipboard"> </g> <g id="clipboard-paste"> </g> <g id="clipboard-copy"> </g> <g id="Layer1"> </g> </g> </g></svg></p>
   

                </div>
            </div>
        </>
    )
}

export default SingleTestimonial