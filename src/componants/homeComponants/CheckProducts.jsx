import React from 'react';

const CheckProducts = () => {
    return (
        <div className='container mx-auto py-10'>
            <div className='relative'>
                <img className='w-full h-54 rounded-md' src="https://electron.ninetheme.com/wp-content/uploads/2023/08/product-banners-h-150-17-2.png" alt="" />
                <div className='absolute top-10 px-10 flex items-center'>
                    <div className=' space-y-4'>
                        <div className='flex gap-8 text-white uppercase'>
                            <p className='bg-[#B20808] rounded-xl px-4 py-1'>trend products</p>
                            <p className='bg-[#011962] rounded-xl px-4 py-1'>promotion price</p>
                        </div>
                        <h2 className='text-3xl font-bold text-white'>New generation M1 Processor - limited stocks!</h2>
                        <div className='flex  gap-4 text-white uppercase'>
                            <p>Iphone 14 Pro Max</p>
                            <p>Iphone 13 Pro Max</p>
                            <p>Samsung Ultra 22 Pro</p>
                        </div>
                    </div>
                    <button className='text-xl ml-120 text-white font-semibold hover:bg-[#1E96FC] cursor-pointer duration-500 bg-[#011962] px-8 py-4 rounded-full'>All Categories</button>
                </div>
            </div>
        </div>
    );
};

export default CheckProducts;