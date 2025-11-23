import React from 'react';
import Header1 from './Header1';
import Header2 from './Header2';
import Header3 from './Header3';
import Navber from './Navber';

const Header = () => {
    return (
        <div className='bg-white text-black'>
            <Header1></Header1>
            <Header2></Header2>
            <Header3></Header3>
            <Navber></Navber>
        </div>
    );
};

export default Header;