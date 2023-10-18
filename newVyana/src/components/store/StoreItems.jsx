import React from 'react'
import jersey from '../../assets/jersey.png'

function StoreItems({ img, heading, description, price }) {
    return (
        <div className="card card-compact xl:w-80  md:w-64 glass shadow-xl">
            <figure><img className='' src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="text-white card-title flex items-center justify-between"><div>{heading}</div> <div>{price}</div></h2>
                <p className='text-white '>{description}</p>
                <div className="card-actions justify-end">
                    <button className="text-white btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    )
}

export default StoreItems