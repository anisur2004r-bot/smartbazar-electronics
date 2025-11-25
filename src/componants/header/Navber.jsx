import React from 'react';
import { ChevronDown, Home, ShoppingBag, Monitor, Megaphone, Lightbulb, Menu } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
    return (
        <div className=" bg-white shadow-sm">
            <div className="w-full border-b border-gray-300 bg-white font-sans">
                <div className="container mx-auto flex items-center justify-between py-2">

                    {/* Left Side: Categories Button and Main Links */}
                    <div className="flex items-center">

                        {/* Categories Button */}
                        <div className="relative mr-6">
                            <button className="flex items-center gap-3 bg-blue-700 text-white px-6 py-4 font-bold uppercase tracking-wide hover:bg-blue-800 transition-colors">
                                <Menu className="w-5 h-5" />
                                <span>Categories</span>
                                <ChevronDown className="w-4 h-4 ml-8" />
                            </button>
                        </div>

                        {/* Navigation Links */}
                        <nav className="hidden lg:flex items-center gap-6 text-gray-700 font-medium">

                            {/* Home Pages */}
                            <div className="relative group cursor-pointer flex items-center gap-1 hover:text-blue-600">
                                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-red-700 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-sm uppercase">
                                    7 Pages
                                </div>
                                <Home className="w-4 h-4" />
                                <div className='relative'>
                                    <Link href={"/"}>HOME PAGE</Link>
                                </div>
                            </div>

                            {/* Shop */}
                            <div className="relative group cursor-pointer flex items-center gap-1 hover:text-blue-600">
                                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-emerald-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-sm uppercase">
                                    Advanced
                                </div>
                                <ShoppingBag className="w-4 h-4" />
                                <div>
                                    <Link href={"/shop"}>SUPAR SHOP</Link>
                                </div>
                            </div>

                            {/* Pages */}
                            <div className="group cursor-pointer flex items-center gap-1 hover:text-blue-600">
                                <Monitor className="w-4 h-4" />
                                <Link href={"/page"}>PAGES</Link>
                            </div>

                            {/* Features */}
                            <div className="group cursor-pointer flex items-center gap-1 hover:text-blue-600">
                                <Megaphone className="w-4 h-4" />
                                <Link href={"/features"}>FEATURES</Link>
                            </div>

                            {/* Mega Menu */}
                            <div className="relative group cursor-pointer flex items-center gap-1 hover:text-blue-600">
                                <div className="absolute -top-8 left-8 bg-cyan-400 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-sm uppercase">
                                    Hot
                                </div>
                                <Lightbulb className="w-4 h-4" />
                                <Link href={"/megamenu"}>MEGA MENU</Link>
                            </div>

                        </nav>
                    </div>

                    {/* Right Side: Promotions */}
                    <div className="hidden xl:flex items-center gap-6 font-bold uppercase text-sm">
                        <a href="#" className="text-emerald-500 hover:text-emerald-600">Flash Deals</a>
                        <a href="#" className="text-blue-500 hover:text-blue-600">New Arrivals</a>
                        <a href="#" className="text-blue-700 hover:text-blue-800">Super Sale!</a>
                        <a href="#" className="text-red-500 hover:text-red-600">Outlet</a>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Navbar;
