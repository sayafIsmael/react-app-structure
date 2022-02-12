import {
    Link
} from "react-router-dom";
import Modal from 'react-modal';
import codes from "../data/country.json"
import React, { useEffect, useState } from "react";
const mobile = require('is-mobile');


export default () => {
    const [togleMenue, setTogleMenue] = useState(false)
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [countryCode, setCountryCode] = useState("US +1")

    function handleCodepicker(e) {
        setCountryCode(e.target.value)
    }


    const customStyles = {
        content: {
            top: mobile() ? 0 : '50%',
            left: mobile() ? 0 : '50%',
            right: mobile() ? 0 : 'auto',
            bottom: mobile() ? 0 : 'auto',
            marginRight: mobile() ? 0 : '-50%',
            transform: mobile() ? '' : 'translate(-50%, -50%)',
            zIndex: 1000,
            background: "transeparent",
            border: 0,
            borderRadius: 0
        },
        overlay: {
            zIndex: 1000,
            background: "rgba(91, 97, 110, 0.5)"
        }
    };


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
                            <a className="nav-btn cursor-pointer mr-10 my-auto lg:block md:hidden" onClick={() => setIsOpen(true)}>Sign up</a>
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
                        <a className="nav-btn cursor-pointer" onClick={() => { setIsOpen(true);  }}>Sign up today and get no-fee trading for life.</a>
                        <button className="btn-main w-full mt-10">Get the app</button>
                    </div>
                </div>}
            </nav>
            {<Modal
                isOpen={modalIsOpen}
                // onAfterOpen={afterOpenModal}
                onRequestClose={() => setIsOpen(false)}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className="absolute -top-1 right-3 cursor-pointer sm:hidden md:block" onClick={() => setIsOpen(false)}>
                    <img alt="" src="/images/icon_x-circle.png" />
                </div>
                <div className="p-10 md:mt-10 md:m-10 md:rounded-lg bg-white sm:h-full md:h-auto signup-box">
                    <div className="absolute -top-0 right-3 cursor-pointer md:hidden md:block" onClick={() => setIsOpen(false)}>
                        <img alt="" src="/images/icon_x-circle-2.png" />
                    </div>
                    <div className="sm:mt-16 md:mt-0">
                        <h1 className="mb-5 text-2xl font-bold">Sign up today and get no-fee trading for life.</h1>
                        <p className="">Get a link sent to your phone to download the app.</p>
                    </div>
                    <div className="flex flex-wrap mt-20 mb-5">
                        <div className="w-full md:w-4/12 mb-6 md:mb-0">
                            <div className="relative">
                                <select className="text-lg block input-height appearance-none w-full bg-gray-200 text-gray-700 py-3 px-3 rounded leading-tight border border-input-box focus:outline-none focus:border-input-border bg-input-box" id="grid-state"
                                    value={countryCode} onChange={(e) => handleCodepicker(e)}>
                                    {codes.map((item, i) => <option key={i}>{item.code} {item.dial_code}</option>)}
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-8/12 md:pl-3 mb-6 md:mb-0">
                            <input className="text-lg appearance-none block input-height w-full bg-gray-200 text-gray-700 rounded px-4 leading-tight border border-input-box focus:outline-none focus:border-input-border bg-input-box" id="grid-city" type="text" placeholder="Enter your phone number" />
                        </div>
                    </div>
                    <div className="w-full mb-20">
                        <button className="btn-main lg:text-lg md:text-md sm:w-full">Send link</button>
                    </div>
                </div>
            </Modal>}
        </header>
    )
}