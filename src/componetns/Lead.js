import React, { useState } from 'react';

export default ({title, image, amount, flow}) => {
    return (
        <div className="rounded-lg h-28 shadow-md flex justify-between px-2 items-center cursor-pointer lg:mb-0 md:mb-0 sm:mb-2">
            <img alt="" className="lead-thumb mx-2 w-1/6" src={image} />
            <div className=" mr-2">
                <p className="text-primary font-medium md:text-md ">{title}</p>
                <p className="text-text-inactive md:text-md ">${amount}</p>
            </div>
            <div className="flex items-center lg:mr-5 md:mr-2">
                <img alt="" className="h-4 mr-2 sm:hidden md:block" src="/images/arrow-1.svg" />
                <p className="text-primary text-lg font-medium sm:hidden md:block">{flow}%</p>
                <p className="text-primary text-lg font-medium sm:block md:hidden">▲{flow}%</p>
            </div>
        </div>
    )
}