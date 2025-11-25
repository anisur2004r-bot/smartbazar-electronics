import React from 'react';
import ProductsReview from '../homeComponants/ProductsReview';

const PageHero = () => {
    return (
        <div>
            <div className='space-y-8'>
                <div className='relative'>
                    <img className='w-full h-140 object-cover brightness-60' src="https://electron.ninetheme.com/wp-content/uploads/2023/08/careers-2-1.jpg" alt="" />
                    <div className='absolute text-center top-40 left-150 space-y-4'>
                        <p className='text-xl uppercase'>ninetheme company</p>
                        <h3 className='text-5xl font-semibold text-center'>We believe we can all <br /> make a difference.</h3>
                        <p className='text-2xl'>Aesthetic brunch polaroid bespoke, vice kale <br /> chips leggings 90’s selfies raw denim.</p>
                    </div>
                </div>
                <div className='flex items-center justify-between gap-10 container mx-auto py-10 text-gray-800'>
                    <img className='w-160 rounded-xl' src="https://electron.ninetheme.com/wp-content/uploads/2023/08/product1-19-1.png" alt="" />
                    <div className='space-y-8'>
                        <p className='text-5xl font-semibold'>Modern and eye-catching lines</p>
                        <p className='w-180 text-gray-500'>Inspired by the rebellious spirit of America and the intrigue of unwavering authenticity, R13 launched in Fall 2009. At the forefront of design, R13 cuts avant-garde silhouettes such as the skinny legging and harem pant from Italian and Turkish denim produced in Castelfranco, Italy. Pure indigo casting, quality stretch and machine hand mending give the jeans their superior shape</p>
                        <p className='font-bold'>#mobile #swatch #tv #smart #electron</p>
                    </div>
                </div>
                <div className='flex items-center justify-between container mx-auto  py-10 text-gray-800'>
                    <div className='space-y-8'>
                        <p className='text-5xl font-semibold'>Exciting and innovative</p>
                        <p className='w-180 text-gray-500'>Inspired by the rebellious spirit of America and the intrigue of unwavering authenticity, R13 launched in Fall 2009. At the forefront of design, R13 cuts avant-garde silhouettes such as the skinny legging and harem pant from Italian and Turkish denim produced in Castelfranco, Italy. Pure indigo casting, quality stretch and machine hand mending give the jeans their superior shape and an authentic...</p>
                        <p className='w-180 text-gray-500'>Inspired by the rebellious spirit of America and the intrigue of unwavering authenticity, R13 launched in Fall 2009. At the forefront of design, R13 cuts avant-garde silhouettes such as the skinny legging and harem pant from Italian and Turkish denim produced in Castelfranco, Italy. Pure indigo casting, quality stretch and machine hand mending give the jeans their superior shape...</p>
                    </div>
                    <img className='w-160 rounded-xl' src="https://electron.ninetheme.com/wp-content/uploads/2023/08/product2-14-1.png" alt="" />
                </div>
                <div className='text-black'>
                    <ProductsReview></ProductsReview>
                </div>
            </div>
        </div>
    );
};

export default PageHero;