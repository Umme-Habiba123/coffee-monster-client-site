import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import CoffeeCard from './CoffeeCard';

const Home = () => {
    const initialCoffees = useLoaderData()
    console.log(initialCoffees)

    const [coffees, setCoffees]=useState(initialCoffees)

    return (
        <div className='grid grid-cols-2 gap-6 mt-20'>
           {
            coffees.map((coffee)=><CoffeeCard key={coffee._id} coffees={coffees} setCoffees={setCoffees} coffee={coffee}></CoffeeCard>)
           }
        </div>
    );
};

export default Home;