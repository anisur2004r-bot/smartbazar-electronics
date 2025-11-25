import React from 'react';

const ShopCategory = ({ categorys, handleCategory }) => {
    return (
        <div className=''>
            <div className='flex flex-col gap-8'>
                <div>
                    <p className='text-2xl font-semibold ml-4'>Filter By Color</p>
                    {
                        categorys.map(c =>
                            <div className="ml-4 mt-2 flex items-center gap-4" key={c.id}>
                                <p className='w-4 h-4' style={{ backgroundColor: c.color }}></p>
                                <h2 onClick={() => handleCategory(c.id)} className='font-semibold cursor-pointer'>{c.color}</h2>
                            </div>
                        )
                    }
                </div>

                <div>
                    <p className='text-2xl font-semibold ml-4'>Product Categories</p>
                    {
                        categorys.map(c =>
                            <div  onClick={() => handleCategory(c.id)}  className="ml-4 mt-2 flex gap-4" key={c.id}>
                                <input className='w-4' type="checkbox" name="" id="" />
                                <h2 className='font-semibold cursor-pointer'>{c.category_name}</h2>
                            </div>
                        )
                    }
                </div>
                <div>
                    <p className='text-2xl font-semibold ml-4'>Featured Products</p>
                    {
                        categorys.map(c =>
                            <div key={c.id}>
                                {/* Products map করা */}
                                <div className="ml-4 mt-2">
                                    {c.products && c.products.map((p, i) => (
                                        <p key={i}>
                                            {p.name}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default ShopCategory;