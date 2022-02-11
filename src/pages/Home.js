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
        <div className="container mx-auto">
            <div className="default-spacing">
                <div class="grid grid-cols-2 gap-4">
                    <div className="sm:w-full my-auto">
                        <div className="my-auto">
                            <h1 className='default-header font-medium'>Buy stocks with crypto</h1>
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
                                <div className="w-full md:w-6/12 px-3 mb-6 md:mb-0">
                                    <input className="text-lg appearance-none block input-height w-full bg-gray-200 text-gray-700 rounded py-3 px-4 leading-tight border border-input-box focus:outline-none focus:border-input-border bg-input-box" id="grid-city" type="text" placeholder="Enter your phone number" />
                                </div>
                                <div className="w-full md:w-4/12 px-2 mb-6 md:mb-0">
                                    <button className="btn-main text-lg">Send link</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="">
                        <img alt="" className="mx-auto" src="/images/rectangle5.png" />
                    </div>
                </div>
            </div>

            <div className="default-spacing">
                <ul className="flex flex-wrap -mb-px">
                    <li className="mr-2" onClick={() => setTab(1)}>
                        <p href="" className={`${tab == 1 ? "border-b-2 text-primary" : "text-text-inactive"} cursor-pointer inline-block text-xl py-1 mr-10 font-medium text-center  border-transparent hover:text-text-hover`}>Leaders</p>
                    </li>
                    <li className="mr-2" onClick={() => setTab(2)}>
                        <p href="" className={`${tab == 2 ? "border-b-2 text-primary" : "text-text-inactive"} cursor-pointer inline-block text-xl py-1 mr-10 font-medium text-center  border-transparent hover:text-text-hover`} aria-current="page">Stocks</p>
                    </li>
                    <li className="mr-2" onClick={() => setTab(3)}>
                        <p href="" className={`${tab == 3 ? "border-b-2 text-primary" : "text-text-inactive"} cursor-pointer inline-block text-xl py-1 mr-10 font-medium text-center  border-transparent hover:text-text-hover`}>Crypto</p>
                    </li>
                    <li className="mr-2" onClick={() => setTab(4)}>
                        <p href="" className={`${tab == 4 ? "border-b-2 text-primary" : "text-text-inactive"} cursor-pointer inline-block text-xl py-1 mr-10 font-medium text-center  border-transparent hover:text-text-hover`}>Options (comming soon)</p>
                    </li>
                </ul>

                <div class="grid grid-cols-2 gap-4 mt-5">
                    <div class="grid grid-cols-2 gap-4">
                        {leaders.map((item, i) =>
                            <Lead key={i}
                                title={item.title}
                                image={item.image}
                                amount={item.amount}
                                flow={item.flow}
                            />
                        )}
                    </div>
                    <div className="my-auto mx-24">
                        <h1 className='default-header font-medium'>All of your assets, now in one place</h1>
                        <p className="text-lg desc-one my-5">Deposit crypto to the Structure Mobile App and buy stocks, crypto, and other assets in seconds.</p>
                        <button className="btn-main text-lg">Browse all assets</button>
                    </div>
                </div>
            </div>

            <div className="default-spacing">
                <div className="claim mx-auto w-10/12">

                </div>
            </div>

            <div className="default-spacing">
                <div class="grid grid-cols-2 gap-4 mt-5">
                    <div className="my-auto">
                        <h1 className='default-header font-medium'>Trade crypto and stocks</h1>
                        <p className="text-lg desc-one my-5">Have $200 in Bitcoin and want to purchase $100 of a Tesla stock? No problem, Structure makes this easy with the tap of a button.</p>
                        <button className="btn-main text-lg">Swap assets</button>
                    </div>
                    <div className="">
                        <img alt="" className="mx-auto" src="/images/rectangle5.png" />
                    </div>
                </div>
            </div>

            <div className="default-spacing flex">
                <div className="mr-28">
                    <img alt="" className="mx-auto" src="/images/rectangle5.png" />
                </div>
                <div className="my-auto">
                    <h1 className='default-header font-medium'>No market closes</h1>
                    <p className="text-lg desc-one my-5">Trade stocks, crypto, and other assets on Structure 24/7.¹ Markets are always open, weekends and holidays included.</p>
                    <button className="btn-main text-lg">Get access now</button>
                </div>
            </div>

            <div className="default-spacing">
                <div class="grid grid-cols-2 gap-4 mt-5">
                    <div className="my-auto">
                        <h1 className='default-header font-medium'>No trading pair limitations</h1>
                        <p className="text-lg desc-one my-5">Unlike Coinbase, Binance, and other crypto exchanges, any asset you own on Structure can be swapped with any crypto or stock we have available.</p>
                        <p className="text-lg desc-one my-10"> Swap $1 or more of Bitcoin for your favorite new alt coin. Trade $1 or more of your Tesla stock for another stock or crypto coin.</p>
                        <button className="btn-main text-lg">Start trading</button>
                    </div>
                    <div className="">
                        <img alt="" className="mx-auto" src="/images/rectangle5.png" />
                    </div>
                </div>
            </div>

            <div className="default-spacing flex">
                <div className="mr-28">
                    <img alt="" className="mx-auto" src="/images/rectangle5.png" />
                </div>
                <div className="my-auto">
                    <h1 className='default-header font-medium ds-title'>A better way to send and receive payments</h1>
                    <p className="text-lg desc-one my-5">Send payments in the asset of your choice. On Structure, all assets work like money.</p>
                    <p className="text-lg desc-one mb-5">Received Bitcoin but really wanted Google stock? Accept payments in the asset of your choice.</p>
                    <button className="btn-main text-lg">Send a payment</button>
                </div>
            </div>

            <div className="default-spacing">
                <div className="">
                    <h1 className='default-header font-medium text-center'>Ready, set, trade</h1>
                    <p className="text-lg text-center my-5">Setup an account and start trading in less than 5 minutes.</p>
                </div>
                <div class="grid grid-cols-3 gap-4 mt-5">
                    <div className="py-15">
                        <img alt="" className="mx-auto mb-10" src="/images/create-account-2.png" />
                        <h2 className="font-medium text-xl text-center">Create an account</h2>
                        <p className="card-dsc mx-auto text-center">Download the Structure Mobile App and create your account.</p>
                    </div>
                    <div className="py-15">
                        <img alt="" className="mx-auto mb-10" src="/images/deposit-2.png" />
                        <h2 className="font-medium text-xl text-center">Deposit crypto</h2>
                        <p className="card-dsc mx-auto text-center">Deposit crypto to your Structure Mobile App.</p>
                    </div>
                    <div className="py-15">
                        <img alt="" className="mx-auto mb-10" src="/images/start-trading.png" />
                        <h2 className="font-medium text-xl text-center">Start trading</h2>
                        <p className="card-dsc mx-auto text-center">You’re ready to start trading crypto and stocks.</p>
                    </div>
                </div>
            </div>

            <div className="default-spacing">
                <div class="grid grid-cols-2 gap-4 shadow rounded-lg">
                    <div className="p-12  border-r border-sm-border">
                        <h1 className='default-header font-medium ds-title my-5'>Rest assured, you’re in good hands</h1>
                        <div className="flex items-center mb-5">
                            <img alt="" className="w-6 h-6" src="/images/check-icon.png"/>
                            <p className="text-xl mx-2">Assigned ownership of your coins</p>
                        </div>
                        <div className="flex items-center mb-5">
                            <img alt="" className="w-6 h-6" src="/images/check-icon.png"/>
                            <p className="text-xl mx-2">Cutting edge security</p>
                        </div><div className="flex items-center mb-5">
                            <img alt="" className="w-6 h-6" src="/images/check-icon.png"/>
                            <p className="text-xl mx-2">Digital assets backed by real world assets ²</p>
                        </div><div className="flex items-center mb-5">
                            <img alt="" className="w-6 h-6" src="/images/check-icon.png"/>
                            <p className="text-xl mx-2">Crime prevention and good-faith policy ³</p>
                        </div>
                    </div>
                    <div className="p-12 mx-auto">
                        <img alt="" src="/images/sec-2.png"/>
                    </div>
                </div>
            </div>

        </div>
    )

}