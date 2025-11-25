"use client";

import React from 'react';
import { CiFacebook, CiYoutube, CiTwitter } from "react-icons/ci";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";

const Footer = () => {
    return (
        <footer className='bg-[#FFDC00] text-black'>
            {/* Top Section */}
            <div className="container mx-auto py-10 px-4 md:py-20">
                <div className="flex flex-col md:flex-row md:justify-between gap-10">
                    
                    {/* Left Column */}
                    <div className='flex flex-col gap-10 md:w-1/3'>
                        <p className='text-3xl font-bold'>Social Media</p>
                        <div className='flex text-xl gap-3'>
                            <CiFacebook />
                            <CiYoutube />
                            <FaInstagram />
                            <CiTwitter />
                            <FaTiktok />
                        </div>

                        {/* App Download */}
                        <div className='flex items-center gap-4 md:gap-8'>
                            <p className='text-xl font-semibold'>DOWNLOAD APP</p>
                            <img className='w-10' src="https://electron.ninetheme.com/wp-content/uploads/2023/08/app-store-1-100x100.png" alt="App Store" />
                            <img className='w-10' src="https://electron.ninetheme.com/wp-content/uploads/2023/08/google-play-1-100x100.png" alt="Google Play" />
                        </div>

                        {/* Newsletter */}
                        <div className='space-y-2'>
                            <p className='text-xl font-semibold'>Subscribe to the newsletter</p>
                            <div className='flex flex-col sm:flex-row items-stretch sm:items-center font-semibold rounded-md px-4 bg-black text-white w-full sm:w-auto py-2 sm:py-4'>
                                <input className='text-black flex-1 px-2 py-1 sm:py-0' type="email" placeholder='Email' />
                                <button className='sm:ml-2 bg-yellow-500 px-4 py-1 rounded mt-2 sm:mt-0'>Submit</button>
                            </div>
                        </div>

                        {/* Call Help */}
                        <div className='flex items-center gap-5'>
                            <div className='flex items-center justify-center rounded-full bg-amber-700 text-white w-16 h-16 sm:w-18 sm:h-18'>
                                <FiPhoneCall className='text-3xl sm:text-4xl' />
                            </div>
                            <div>
                                <p className='text-2xl sm:text-3xl font-semibold'>Need help? Call now!</p>
                                <p className='text-xl sm:text-2xl font-semibold'>(+8801914106079) <span>+8801324802557</span></p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className='flex flex-col gap-10 md:w-2/3'>
                        {/* First Row */}
                        <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
                            <div className='space-y-2'>
                                <p className='text-xl font-semibold'>About Electron</p>
                                <p>Electron Inside</p>
                                <p>About Us</p>
                                <p>Company</p>
                                <p>Careers</p>
                                <p>Brands</p>
                            </div>
                            <div className='space-y-2'>
                                <p className='text-xl font-semibold'>Quick Link</p>
                                <p>Electron Inside</p>
                                <p>About Us</p>
                                <p>Company</p>
                                <p>Careers</p>
                                <p>Brands</p>
                            </div>
                            <div className='space-y-2'>
                                <p className='text-xl font-semibold'>Policies</p>
                                <p>Electron Inside</p>
                                <p>About Us</p>
                                <p>Company</p>
                                <p>Career</p>
                                <p>Brand</p>
                            </div>
                            <div className='space-y-2'>
                                <p className='text-xl font-semibold'>Brand</p>
                                <p>Samsung</p>
                                <p>Apple</p>
                                <p>LG</p>
                                <p>Bosch</p>
                                <p>Beko</p>
                            </div>
                        </div>

                        {/* Second Row */}
                        <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
                            <div className='space-y-2'>
                                <p className='text-xl font-semibold'>Smart Phones</p>
                                <p>Order Tracking</p>
                                <p>Terms & Conditions</p>
                                <p>Privacy policy</p>
                                <p>Tutorials</p>
                                <p>FAQ</p>
                            </div>
                            <div className='space-y-2'>
                                <p className='text-xl font-semibold'>Smart TV</p>
                                <p>Order Tracking</p>
                                <p>Terms & Conditions</p>
                                <p>Privacy policy</p>
                                <p>Tutorials</p>
                                <p>FAQ</p>
                            </div>
                            <div className='space-y-2'>
                                <p className='text-xl font-semibold'>Accessories</p>
                                <p>Order Tracking</p>
                                <p>Terms & Conditions</p>
                                <p>Privacy policy</p>
                                <p>Tutorials</p>
                                <p>FAQ</p>
                            </div>
                            <div className='space-y-2'>
                                <p className='text-xl font-semibold'>Bestseller</p>
                                <p>Iphone 14 Pro Max</p>
                                <p>Iphone 13 Pro Max</p>
                                <p>Samsung Note 21 Ultra</p>
                                <p>Xiaomi Vacuum Cleaner</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className='bg-gray-700 text-white py-6'>
                <div className='container mx-auto flex flex-col md:flex-row justify-between items-center gap-4 px-4'>
                    <div className='space-y-2 text-center md:text-left'>
                        <p className='text-xl font-semibold'>Secure Shopping</p>
                        <img className='mx-auto md:mx-0' src="https://electron.ninetheme.com/wp-content/uploads/2023/08/payment-1.webp" alt="Payment" />
                    </div>
                    <p className='text-center md:text-left text-sm md:text-base max-w-2xl'>
                        <span className='border-b'>ALL Rights Reserved &copy; </span>
                        <span className='font-bold'>Md Anisur Rahman (Frontend Developer)</span>
                        <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur provident culpa ipsam dolorem. Atque laboriosam corporis praesentium ex reprehenderit.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
