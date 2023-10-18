import React from 'react'
import './store.css'
import Contact from './../contact/Contact';
import Footer from './../footer/Footer';
import StoreItems from './StoreItems';
import jersey from '../../assets/jersey.png'
import jersey2 from '../../assets/jersey2.png'
import jersey3 from '../../assets/jersey3.png'
import jersey4 from '../../assets/jersey4.png'

function Store() {
    return (
        <div className='store-area-main min-h-screen bg-cover bg-no-repeat bg-center pt-1'>

            <div className="items-container w-5/6 flex items-center justify-center flex-wrap gap-16 mx-auto my-16">
                <StoreItems img={jersey4} heading={'ITEM 1'} description={'This is the description'} price={'Rs. 999'} itemId={1}/>
                <StoreItems img={jersey} heading={'ITEM 2'} description={'This is the description'} price={'Rs. 2999'} itemId={2}/>
                <StoreItems img={jersey} heading={'ITEM 3'} description={'This is the description'} price={'Rs. 4999'} itemId={3}/>
                <StoreItems img={jersey2} heading={'ITEM 4'} description={'This is the description'} price={'Rs. 4999'} itemId={4}/>
                <StoreItems img={jersey3} heading={'ITEM 5'} description={'This is the description'} price={'Rs. 4999'} itemId={5}/>
            </div>

            <Contact />
            <Footer />
        </div>
    )
}

export default Store