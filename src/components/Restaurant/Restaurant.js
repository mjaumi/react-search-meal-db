import React, { useEffect, useState } from 'react';

const Restaurant = () => {
    const [searchText, setSearchText] = useState('');
    const [meals, setMeals] = useState([]);

    //setting the search text dynamically
    const searchMeal = event => {
        setSearchText(event.target.value);
    }

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
            .then(res => res.json())
            .then(data => setMeals(data.meals));
    }, [searchText]);

    return (
        <section className='pt-28'>
            <div>
                <h1 className='text-6xl text-gray-400'>Search The <span className='text-meals-panda-base font-medium'>Meal</span> You Want</h1>
                <input onChange={searchMeal} className='mt-10 border-2 border-meals-panda-light rounded-xl px-4 py-3 w-1/2 text-lg font-medium' type="text" placeholder='Search Your Food Here' />
            </div>
        </section>
    );
};

export default Restaurant;