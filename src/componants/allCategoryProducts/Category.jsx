import React from 'react';

const Category = ({categorys ,handleCategory}) => {
    return (
        <div className='flex items-center justify-between container mx-auto'>
             <h1 className='text-2xl font-sans font-bold'>Latest Products</h1>
            <div className='flex gap-10'>
                {
                    categorys.map(c=>
                        <div key={c.id}>
                            <img src={c.img} alt="" />
                            <h2 onClick={()=>handleCategory(c.id)} className='font-semibold cursor-pointer'>{c.name}</h2>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Category;