import {
    Link
} from "react-router-dom";

import React, { useState } from "react";

export default () => {
    const [togleMenue, setTogleMenue] = useState(false)

    return (
        <header>
            <div className='bg-primary w-full md:mx-auto flex justify-center items-center h-10 sm:px-12 sm:py-10 md:py-0'>
                <p className="text-base text-white">Get  no-fee trading for life when you sign up today</p>
                <img alt="" className="sm:ml-1 md:ml-2  my-auto" src="/images/arrow-right.svg" />
            </div>

            <nav className="nav-main">
                <div className="nav-main container mx-auto flex justify-between items-center">
                    <Link to="/" className="md:w-3/12">
                        <img alt="" src="/images/logo.png" />
                    </Link>
                    <div className="md:hidden cursor-pointer" onClick={() => setTogleMenue(!togleMenue)}>
                        {!togleMenue && <img alt="" src="/images/menu.png" />}
                        {togleMenue && <img alt="" src="/images/close-icon.png" />}
                    </div>
                    <ul className="md:flex text-center sm:hidden">
                        <li className="lg:block md:hidden"><Link to="#">All Assets</Link></li>
                        <li><Link to="#">Stocks </Link></li>
                        <li><Link to="#">Crypto </Link></li>
                        <li><Link to="#">Trade </Link></li>
                    </ul>

                    <div className='md:flex justify-end w-3/12 sm:hidden'>
                        <div className="flex ml-auto">
                            <a className="nav-btn cursor-pointer mr-10 my-auto lg:block md:hidden">Sign up</a>
                            <button className="btn-nav">Get the app</button>
                        </div>
                    </div>
                </div>
                {togleMenue && <div className="z-10 absolute bg-white shadow shadow-b h-full md:hidden w-full">
                    <ul className="container mx-auto">
                        <li className="my-6 text-lg"><Link to="#">All Assets</Link></li>
                        <li className="my-6 text-lg"><Link to="#">Stocks </Link></li>
                        <li className="my-6 text-lg"><Link to="#">Crypto </Link></li>
                        <li className="my-6 text-lg"><Link to="#">Trade </Link></li>
                    </ul>
                    <div className="container mx-auto mt-20">
                        <a className="nav-btn cursor-pointer">Sign up today and get no-fee trading for life.</a>
                        <button className="btn-nav w-full mt-10">Get the app</button>
                    </div>
                </div>}
            </nav>
        </header>
    )
}