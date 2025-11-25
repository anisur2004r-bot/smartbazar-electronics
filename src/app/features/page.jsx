import FeaturesHero from '@/componants/featuresComponants/FeaturesHero';
import DiscountPro from '@/componants/homeComponants/DiscountPro';
import React from 'react';

const page = () => {
    return (
        <div className='bg-white text-black'>
            <FeaturesHero></FeaturesHero>
            <DiscountPro></DiscountPro>
        </div>
    );
};

export default page;