import React from 'react'
import logo from '../../assets/logo.png'

function Footer() {
    return (
        <>
            <footer className="footer p-10 bg-primary text-primary-content">
                <aside>
                    <img className='w-32' src={logo} alt="" />
                    <p>Vyana Sports<br />Sports Management, Simplified</p>
                </aside>
                <nav>
                    <header className="footer-title">Also Check Out</header>
                    <div className="grid grid-flow-col gap-4">
                        <a href='https://www.vyana.in/' target='_BLANK'>Vyana Wealth</a>
                        
                    </div>
                </nav>
                <nav>
                    <header className="footer-title">Social</header>
                    <div className="grid grid-flow-col gap-4">
                        
                        <a href='https://www.youtube.com/@vyanasports'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                        
                    </div>
                </nav>
            </footer>
        </>
    )
}

export default Footer