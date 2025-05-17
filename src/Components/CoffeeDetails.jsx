import React from 'react';
import { Link, useLoaderData } from 'react-router';
import { FaArrowLeftLong } from "react-icons/fa6";

const CoffeeDetails = () => {
    const coffee = useLoaderData()
    const { name, price, supplier, taste, details, photo } = coffee
    return (
        <div className=' grid grid-cols-1 items-center f '>
            <Link to={'/'}>
                <button className='btn btn-primary  hover:bg-white hover:text-indigo-500 py-6 flex gap-2 dancing-script-font text-4xl mb-20'><span className='mt-1.5'><FaArrowLeftLong /></span>Back to home</button>
            </Link>

            <div className='flex justify-center border'>
                <div>
                    <img className='w-100' src={photo} alt="" />
                </div>
                <div className='mt-20'>

                    <p className='dancing-script-font text-4xl mb-8'>Niceties</p>

                    <div className='space-y-3'>
                        <p className=''>Name: <span className='text-gray-300 dancing-script-font text-2xl'>{name}</span></p>

                        <p>Price : <span className='text-gray-300 dancing-script-font text-2xl'>{price}</span></p>

                        <p>Supplier : <span className='text-gray-300 dancing-script-font text-2xl'>{supplier}</span></p>

                        <p>Taste : <span className='text-gray-300 dancing-script-font text-2xl'>{taste}</span></p>

                        <p>Details : <span className='text-gray-300 dancing-script-font text-2xl'>{details}</span></p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CoffeeDetails;