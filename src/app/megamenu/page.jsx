import LastComponants from '@/componants/homeComponants/LastComponants';
import MegamenuComponants from '@/componants/megamenu/MegamenuComponants';
import React from 'react';

const pages = () => {
    return (
        <div className='bg-white text-black'>
            <MegamenuComponants></MegamenuComponants>
            <LastComponants></LastComponants>
        </div>
    );
};

export default pages;