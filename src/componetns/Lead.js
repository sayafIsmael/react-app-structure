import React, { useState } from 'react';

export default ({title, image, amount, flow}) => {
    return (
        <div className="rounded-lg h-28 shadow-md flex px-2 items-center cursor-pointer">
            <img alt="" className="lead-thumb mx-2 w-1/6" src={image} />
            <div className="w-3/6">
                <p className="text-primary font-medium">{title}</p>
                <p className="text-text-inactive">${amount}</p>
            </div>
            <div className="w-3/6 flex items-center">
                <img alt="" className="h-4 mr-2" src="/images/arrow-1.svg" />
                <p className="text-primary text-lg font-medium">{flow}%</p>
            </div>
        </div>
    )
}