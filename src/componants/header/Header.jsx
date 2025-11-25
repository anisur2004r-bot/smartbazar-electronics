import React from 'react';
import Header1 from './Header1';
import Header2 from './Header2';

const Header = () => {
    return (
        <div className='bg-white text-black'>
            <div className='hidden md:block lg:block'>
                <Header1></Header1>
                <Header2></Header2>
            </div>
        </div>
    );
};

export default Header;