import React from 'react';
import { FaCommentAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BiSolidPhoneCall } from "react-icons/bi";

const Header2 = () => {
    return (
        <div className='border-b border-gray-300'>
            <div className='flex items-center justify-between container mx-auto text-sm py-3'>
                <ul className='flex gap-3'>
                    <li>
                        <select className='outline-none' name="language" id="language">
                            <option value="">LANGUAGE</option>
                            <option value="bangla">Bangla</option>
                            <option value="english">English</option>
                            <option value="hindi">Hindi</option>
                        </select>
                    </li>
                    <li>
                        <select className='outline-none' name="country" id="country">
                            <option value="">COUNTRY</option>
                            <option value="bd">Bangladesh</option>
                            <option value="in">India</option>
                            <option value="pk">Pakistan</option>
                        </select>
                    </li>
                    <li>
                        <select className='outline-none' name="help" id="help">
                            <option value=""> QUICK HELP</option>
                            <option value="order">Order Related</option>
                            <option value="payment">Payment Problem</option>
                            <option value="support">Customer Support</option>
                        </select>
                    </li>
                </ul>
                <div className='bg-[#072AC8] text-white flex gap-2 items-center px-4 py-2 rounded-md'>
                    <FaCommentAlt />
                    <p>FREE SHIPPING FOR ALL ORDERS OF $340</p>
                </div>
                <div className='flex items-center gap-3'>
                    <FaFacebookF />
                    <FaInstagram />
                    <FaXTwitter />
                    <BiSolidPhoneCall />
                </div>
            </div>
        </div>
    );
};

export default Header2;