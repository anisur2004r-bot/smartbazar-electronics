"use client";

import Image from "next/image";

import { FaSearch, FaWhatsapp, FaShoppingBag, FaHeadphones, FaHeart, FaUser, FaBell } from "react-icons/fa";

const Header3 = () => {
    return (
        <div className=" bg-white text-gray-800">
            <header className="w-full border-b border-gray-300">
                <div className=" flex items-center justify-between container mx-auto py-4 gap-6">
                    {/* Logo */}
                    <div>
                        <img className="w-70 -translate-x-7" src="https://i.ibb.co.com/0y2XNpyq/Blue-Simple-Modern-Electronic-Logo-removebg-preview.png" alt="" />
                    </div>

                    {/* Search Bar */}
                    <div className="flex-1 max-w-2xl">
                        <div className="flex border-2 shadow-md border-gray-300  rounded-sm overflow-hidden">
                            {/* Search input */}
                            <input
                                type="text"
                                placeholder="Search for products"
                                className="flex-1 px-4 py-2 text-sm outline-none"
                            />

                            {/* ALL dropdown */}
                            <select
                                className="px-3 text-xs font-semibold border-gray-400 border-l outline-none bg-white"
                                defaultValue="all"
                            >
                                <option value="all">ALL</option>
                                <option value="tv">TV</option>
                                <option value="laptop">Laptop</option>
                                <option value="mobile">Mobile</option>
                            </select>

                            {/* Search button */}
                            <button className="px-5 h-15 bg-blue-600 flex items-center justify-center">
                                <FaSearch className="text-white" />
                            </button>
                        </div>

                    </div>

                    {/* Call & Icons */}
                    <div className="flex items-center gap-6">
                        {/* Call section */}
                        <div className="flex items-center gap-2">
                            <FaWhatsapp className="text-4xl text-green-500" />
                            <div className="leading-tight">
                                <p className="text-[12px] uppercase text-gray-500">Call Anytime</p>
                                <p className="text-xl font-semibold">+01914106079</p>
                            </div>
                        </div>

                        {/* Icons */}
                        <div className="flex items-center gap-4 text-blue-700">
                            <div className="relative">
                                <FaShoppingBag className="text-2xl" />
                                <span className="absolute -top-1 -right-2 text-[9px] bg-blue-600 text-white rounded-full w-4 h-4 flex items-center justify-center">
                                    0
                                </span>
                            </div>

                            <div className="relative">
                                <FaHeadphones className="text-2xl" />
                            </div>

                            <div className="relative">
                                <FaHeart className="text-2xl" />
                                <span className="absolute -top-1 -right-2 text-[9px] bg-blue-600 text-white rounded-full w-4 h-4 flex items-center justify-center">
                                    0
                                </span>
                            </div>

                            <FaUser className="text-2xl" />

                            <FaBell className="text-2xl text-yellow-500" />
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header3;
