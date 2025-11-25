"use client";

import React from 'react';

const LastComponants = () => {
    const brands = [
        "https://electron.ninetheme.com/wp-content/uploads/2023/08/1-25-1-100x42.png",
        "https://electron.ninetheme.com/wp-content/uploads/2023/08/8-1-100x42.png",
        "https://electron.ninetheme.com/wp-content/uploads/2023/08/9-3-100x42.png",
        "https://electron.ninetheme.com/wp-content/uploads/2023/08/6-1-1-100x42.png",
        "https://electron.ninetheme.com/wp-content/uploads/2023/08/7-1-100x42.png",
        "https://electron.ninetheme.com/wp-content/uploads/2023/08/5-1-1-100x42.png",
        "https://electron.ninetheme.com/wp-content/uploads/2023/08/4-22-1-100x42.png",
        "https://electron.ninetheme.com/wp-content/uploads/2023/08/2-23-1-100x42.png",
        "https://electron.ninetheme.com/wp-content/uploads/2023/08/3-22-1-100x42.png",
        "https://electron.ninetheme.com/wp-content/uploads/2023/08/10-3-100x42.png",
    ];

    return (
        <div className="py-20">
            <div className='flex items-center justify-center py-10'>
                <p className='text-2xl font-bold text-gray-700'>Search by Our Brand</p>
            </div>
            {/* overflow hidden must be here */}
            <div className="container mx-auto overflow-hidden">
                
                {/* slider */}
                <div className="flex gap-6 slide-animation w-max">
                    {brands.concat(brands).map((src, i) => (
                        <img
                            key={i}
                            src={src}
                            alt="brand"
                            className="border border-gray-300 px-10 py-5 bg-white"
                        />
                    ))}
                </div>

            </div>
        </div>
    );
};

export default LastComponants;
