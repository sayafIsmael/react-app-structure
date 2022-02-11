import React, { useState } from 'react';
import Lead from "./../componetns/Lead"
import codes from "../data/country.json"
import leaders from "../data/leaders.json"

export default function Home() {
    const [countryCode, setCountryCode] = useState("US +1")
    const [tab, setTab] = useState(1)

    function handleCodepicker(e) {
        setCountryCode(e.target.value)
    }

    return (
        <React.Fragment>
            <div className="container mx-auto">
                <div className="default-spacing">
                    <div className="lg:grid lg:grid-cols-2 gap-4">
                        <div className="sm:w-full my-auto">
                            <div className="my-auto">
                                <h2 className='default-header font-medium'>Buy stocks with crypto</h2>
                                <p className="text-lg desc-one mt-5">No market closes. No trading fees. All the stocks and crypto coins you love.</p>
                            </div>

                            <div className="mt-14">
                                <p className="text-lg desc-one mb-5">Ready to start trading?</p>
                                <div className="flex flex-wrap mb-2">
                                    <div className="w-full md:w-2/12 mb-6 md:mb-0">
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
                                    <div className="w-full md:w-6/12 md:px-3 mb-6 md:mb-0">
                                        <input className="text-lg appearance-none block input-height w-full bg-gray-200 text-gray-700 rounded px-4 leading-tight border border-input-box focus:outline-none focus:border-input-border bg-input-box" id="grid-city" type="text" placeholder="Enter your phone number" />
                                    </div>
                                    <div className="w-full md:w-4/12 sm:w-full md:px-2 mb-6 md:mb-0">
                                        <button className="btn-main lg:text-lg md:text-md sm:w-full">Send link</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:block md:hidden sm:hidden">
                            <img alt="" className="mx-auto" src="/images/rectangle5.png" />
                        </div>
                    </div>
                </div>

                <div className="default-spacing">
                    <div className="md:overflow-x-hidden sm:overflow-x-scroll scrollbar-hidden">
                        <ul className="flex flex-wrap -mb-px menu-scroll">
                            <li className="mr-2" onClick={() => setTab(1)}>
                                <p className={`${tab == 1 ? "border-b-2 text-primary" : "text-text-inactive"} cursor-pointer inline-block text-xl py-1 mr-10 font-medium text-center  border-transparent hover:text-text-hover`}>Leaders</p>
                            </li>
                            <li className="mr-2" onClick={() => setTab(2)}>
                                <p className={`${tab == 2 ? "border-b-2 text-primary" : "text-text-inactive"} cursor-pointer inline-block text-xl py-1 mr-10 font-medium text-center  border-transparent hover:text-text-hover`} aria-current="page">Stocks</p>
                            </li>
                            <li className="mr-2" onClick={() => setTab(3)}>
                                <p className={`${tab == 3 ? "border-b-2 text-primary" : "text-text-inactive"} cursor-pointer inline-block text-xl py-1 mr-10 font-medium text-center  border-transparent hover:text-text-hover`}>Crypto</p>
                            </li>
                            <li className="mr-2" onClick={() => setTab(4)}>
                                <p className={`${tab == 4 ? "border-b-2 text-primary" : "text-text-inactive"} cursor-pointer inline-block text-xl py-1 mr-10 font-medium text-center  border-transparent hover:text-text-hover`}>Options (comming soon)</p>
                            </li>
                        </ul>
                    </div>


                    <div className="lg:grid lg:grid-cols-2 lg:gap-4 mt-5">
                        <div className="md:grid md:grid-cols-2 gap-4">
                            {leaders.map((item, i) =>
                                <Lead key={i}
                                    title={item.title}
                                    image={item.image}
                                    amount={item.amount}
                                    flow={item.flow}
                                />
                            )}
                        </div>
                        <div className="lg:my-auto lg:mx-24 spacing md:px-24 lg:px-0">
                            <h2 className='default-header font-medium desc-one'>All of your assets, now in one place</h2>
                            <p className="text-lg desc-one my-5">Deposit crypto to the Structure Mobile App and buy stocks, crypto, and other assets in seconds.</p>
                            <button className="btn-main lg:text-lg md:text-md  md:w-full sm:w-full">Browse all assets</button>
                        </div>
                    </div>
                </div>

                <div className="default-spacing">
                    <div className="claim mx-auto w-10/12 shadow">
                        <div className="h-full md:flex my-auto items-center mx-5 justify-between">
                            <div className="">
                                <h2 className="text-xl font-medium">Sign up and get no-fee trading for life</h2>
                                <p className="text-lg desc-one my-5 desc-one md:pr-5">We’re giving our first 5,000 users lifetime access to totally free trading.</p>
                            </div>
                            <div className="lg:mx-10 right-item">
                                <p className="text-lg text-center">Spots left</p>
                                <h2 className='default-header font-medium desc-one text-center'>2,631</h2>
                                <button className="btn-main lg:text-lg md:text-md  md:w-full sm:w-full sm:mt-5">Claim your spot</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="default-spacing">
                    <div className="grid md:grid-cols-2 gap-4 mt-5">
                        <div className="my-auto lg:order-first md:order-last sm:order-last">
                            <h2 className='default-header font-medium'>Trade crypto and stocks</h2>
                            <p className="text-lg desc-one my-5">Have $200 in Bitcoin and want to purchase $100 of a Tesla stock? No problem, Structure makes this easy with the tap of a button.</p>
                            <button className="btn-main lg:text-lg md:text-md sm:w-full md:w-auto">Swap assets</button>
                        </div>
                        <div className="">
                            <img alt="" className="mx-auto" src="/images/rectangle5.png" />
                        </div>
                    </div>
                </div>

                <div className="default-spacing grid md:grid-cols-3">
                    <div className="lg:mr-28 lg:order-first md:order-last sm:order-first">
                        <img alt="" className="mx-auto sm:mx-0" src="/images/rectangle5.png" />
                    </div>
                    <div className="my-auto lg:ml-0 md:ml-5 md:col-span-2">
                        <h2 className='default-header font-medium sm:mt-5'>No market closes</h2>
                        <p className="text-lg desc-one my-5">Trade stocks, crypto, and other assets on Structure 24/7.¹ Markets are always open, weekends and holidays included.</p>
                        <button className="btn-main lg:text-lg md:text-md sm:w-full md:w-auto">Get access now</button>
                    </div>
                </div>

                <div className="default-spacing">
                    <div className="grid md:grid-cols-2 gap-4 mt-5">
                        <div className="my-auto lg:order-first md:order-last sm:order-last">
                            <h2 className='default-header font-medium'>No trading pair limitations</h2>
                            <p className="text-lg desc-one my-5">Unlike Coinbase, Binance, and other crypto exchanges, any asset you own on Structure can be swapped with any crypto or stock we have available.</p>
                            <p className="text-lg desc-one my-10"> Swap $1 or more of Bitcoin for your favorite new alt coin. Trade $1 or more of your Tesla stock for another stock or crypto coin.</p>
                            <button className="btn-main lg:text-lg md:text-md sm:w-full md:w-auto">Start trading</button>
                        </div>
                        <div className="lg:order-first md:order-first sm:order-first">
                            <img alt="" className="mx-auto" src="/images/rectangle5.png" />
                        </div>
                    </div>
                </div>

                <div className="default-spacing grid md:grid-cols-3">
                    <div className="lg:mr-28 lg:order-first md:order-last sm:order-first">
                        <img alt="" className="mx-auto" src="/images/rectangle5.png" />
                    </div>
                    <div className="my-auto lg:ml-0 md:ml-5 md:col-span-2">
                        <h2 className='default-header font-medium desc-one sm:mt-5'>A better way to send and receive payments</h2>
                        <p className="text-lg desc-one my-5">Send payments in the asset of your choice. On Structure, all assets work like money.</p>
                        <p className="text-lg desc-one mb-5">Received Bitcoin but really wanted Google stock? Accept payments in the asset of your choice.</p>
                        <button className="btn-main lg:text-lg md:text-md sm:w-full md:w-auto">Send a payment</button>
                    </div>
                </div>

                <div className="default-spacing">
                    <div className="">
                        <h2 className='default-header font-medium text-center'>Ready, set, trade</h2>
                        <p className="text-lg text-center my-5">Setup an account and start trading in less than 5 minutes.</p>
                    </div>
                    <div className="lg:grid lg:grid-cols-3 gap-4 mt-10 md:mx-36">
                        <div className="py-15 md:flex sm:flex lg:block sm:items-center sm:mb-5">
                            <img alt="" className="lg:mx-auto sm:w-16 sm:h-16 md:mx-8 mb-10" src="/images/create-account-2.png" />
                            <div className="sm:mx-2">
                                <h2 className="font-medium text-xl lg:text-center">Create an account</h2>
                                <p className="card-dsc lg:mx-auto lg:text-center">Download the Structure Mobile App and create your account.</p>
                            </div>
                        </div>
                        <div className="py-15 md:flex sm:flex lg:block sm:items-center sm:mb-5">
                            <img alt="" className="lg:mx-auto sm:w-16 sm:h-16 md:mx-8 mb-10" src="/images/deposit-2.png" />
                            <div className="sm:mx-2">
                                <h2 className="font-medium text-xl lg:text-center">Deposit crypto</h2>
                                <p className="card-dsc lg:mx-auto lg:text-center">Deposit crypto to your Structure Mobile App.</p>
                            </div>
                        </div>
                        <div className="py-15 md:flex sm:flex lg:block sm:items-center sm:mb-5">
                            <img alt="" className="lg:mx-auto sm:w-16 sm:h-16 md:mx-5 mb-10" src="/images/start-trading.png" />
                            <div className="sm:mx-2">
                                <h2 className="font-medium text-xl lg:text-center">Start trading</h2>
                                <p className="card-dsc lg:mx-auto lg:text-center">You’re ready to start trading crypto and stocks.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="default-spacing">
                    <div className="grid lg:grid-cols-2 lg:gap-4 shadow rounded-lg">
                        <div className="lg:order-first md:order-last md:p-12 sm:p-3 lg:border-r lg:border-sm-border md:border-t md:border-sm-border lg:border-t-0">
                            <h2 className='default-header font-medium ds-title my-5 bt-title'>Rest assured, you’re in good hands</h2>
                            <div className="flex items-center mb-5">
                                <img alt="" className="w-6 h-6 mr-2" src="/images/check-icon.png" />
                                <p className="text-xl mx-2">Assigned ownership of your coins</p>
                            </div>
                            <div className="flex items-center mb-5">
                                <img alt="" className="w-6 h-6 mr-2" src="/images/check-icon.png" />
                                <p className="text-xl mx-2">Cutting edge security</p>
                            </div><div className="flex items-center mb-5">
                                <img alt="" className="w-6 h-6 mr-2" src="/images/check-icon.png" />
                                <p className="text-xl mx-2">Digital assets backed by real world assets ²</p>
                            </div><div className="flex items-center mb-5">
                                <img alt="" className="w-6 h-6 mr-2" src="/images/check-icon.png" />
                                <p className="text-xl mx-2">Crime prevention and good-faith policy ³</p>
                            </div>
                        </div>
                        <div className="p-12 mx-auto flex items-center justify-center">
                            <img alt="" src="/images/sec-2.png" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="default-spacing">
                <div className="lg:grid lg:grid-cols-2 gap-4 lg:container lg:mx-auto">
                    <div className="lg:flex sm:hidden justify-end">
                        <img className="mr-10" alt="" src="/images/container.png" />
                    </div>
                    <div className="lg:ml-40 lg:hidden md:block">
                        <img alt="" src="/images/container-2.png" />
                    </div>
                    <div className="lg:my-auto lg:ml-10 md:m-10 sm:m-5">
                        <h2 className='default-header font-medium ds-title'>Connecting the world of assets</h2>
                        <p className="lg:mr-24 text-lg my-5 md:max-w-full;">Structure was created to give people around the world access to the same investment assets.  We’re on a mission to empower investors of all types through secure and easy-to-use  financial tools.</p>
                        <p className="lg:mr-24 text-lg mb-5 md:max-w-full;">Interested in helping us build the future of finance? Checkout our careers page to get started.</p>
                        <button className="btn-main lg:text-lg md:text-md sm:w-full md:w-auto">View open positions</button>
                    </div>
                </div>
            </div>

            <div className="default-spacing sm:hidden md:block">
                <div className="lg:container mx-auto grid grid-cols-12 gap-4 ">
                    <div className="lg:col-span-6 md:col-span-7 sm:w-full my-auto lg:order-first md:order-last">
                        <div className="my-auto">
                            <h2 className='default-header font-medium bt-title'>Sign up today and get no-fee trading for life.</h2>
                            <p className="text-lg desc-one mt-5">No market closes. No trading fees. All the stocks and crypto coins you love.</p>
                        </div>

                        <div className="mt-14 lg:mr-0 md:mr-5">
                            <div className="flex flex-wrap mb-2">
                                <div className="w-full lg:w-2/12 md:w-2/6 mb-6 md:mb-0">
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
                                <div className="w-full lg:w-6/12 md:w-4/6 px-3 mb-6 md:mb-0">
                                    <input className="text-lg appearance-none block input-height w-full bg-gray-200 text-gray-700 rounded py-3 px-4 leading-tight border border-input-box focus:outline-none focus:border-input-border bg-input-box" id="grid-city" type="text" placeholder="Enter your phone number" />
                                </div>
                                <div className="w-full lg:w-4/12 px-2 mb-6 md:mb-0 lg:my-0 md:my-5">
                                    <button className="btn-main lg:text-lg md:text-md md:w-full">Send link</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-6 md:col-span-5">
                        <img alt="" className="mx-auto -mb-28 lg:block sm:hidden" src="/images/iPhone.png" />
                        <img alt="" className="mx-auto -mb-28 lg:hidden md:block" src="/images/iphone-2.png" />
                    </div>
                </div>
            </div>

            <div className="default-spacing container mx-auto md:hidden">
                <div className="grid lg:grid-cols-2 gap-4">
                    <div className="sm:w-full my-auto sm:order-last">
                        <div className="my-auto">
                            <h2 className='default-header font-medium'>Buy stocks with crypto</h2>
                            <p className="text-lg desc-one mt-5">No market closes. No trading fees. All the stocks and crypto coins you love.</p>
                        </div>

                        <div className="mt-14">
                            <div className="flex flex-wrap mb-2">
                                <div className="w-full md:w-2/12 mb-6 md:mb-0">
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
                                <div className="w-full md:w-6/12 md:px-3 mb-6 md:mb-0">
                                    <input className="text-lg appearance-none block input-height w-full bg-gray-200 text-gray-700 rounded px-4 leading-tight border border-input-box focus:outline-none focus:border-input-border bg-input-box" id="grid-city" type="text" placeholder="Enter your phone number" />
                                </div>
                                <div className="w-full md:w-4/12 sm:w-full md:px-2 mb-6 md:mb-0">
                                    <button className="btn-main lg:text-lg md:text-md sm:w-full">Send link</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="">
                        <img alt="" className="" src="/images/iphone-3.png" />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )

}