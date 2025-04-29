  "use client";

  import axios from 'axios';
  import React, { useEffect, useState } from 'react';

  const categories = ['Breakfast', 'Dessert', 'Vegetarian', 'Beef', 'Chicken'];

  const Category = () => {
    const [categoryData, setCategoryData] = useState([]);
      const [selectedMeal, setSelectedMeal] = useState(null);
      const [showSelectedMeal, setShowSelectedMeal] = useState(false);
    const [categoryText, setCategoryText] = useState('');

    useEffect(() => {
      
      axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${categoryText}`)
        .then((res) => setCategoryData(res.data.meals || []))
        .catch((err) => console.log(err));
    }, [categoryText]);

    const selectedCategory = (text) => {
      setCategoryText(text);
    };
      const selectMealById = (id) => {
       axios.get(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
          ).then(data =>setSelectedMeal(data.data.meals[0]))
          .catch(err => console.log(err));
          setShowSelectedMeal(true);
      };

    return (
      <div className="min-h-[80vh] flex flex-col gap-4 py-4">
        {/* Category buttons */}
        <div className="flex justify-around flex-wrap gap-2">
          {categories.map((item, index) => (
            <button
              key={index}
              onClick={() => selectedCategory(item)}
              className={`rounded-md px-4 py-2 text-white duration-300 ${
                item === categoryText
                  ? 'bg-green-800'
                  : 'bg-red-800 hover:opacity-60'
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-[90vw] mx-auto my-4">
          {categoryData.length ? (
            categoryData.slice(0,3).map((item, index) => (
              <div
              onClick={() => selectMealById(item.idMeal)}
              key={index}
                className="p-2 flex flex-col items-center rounded-md border-2 border-gray-600 shadow-lg hover:shadow-amber-300 hover:opacity-80"
              >
                <img
                  className="w-full rounded-md"
                  src={item.strMealThumb}
                  alt={item.strMeal}
                />
                <h3 className="mt-2 font-semibold text-center">{item.strMeal}</h3>
              </div>
            ))
          ) : (
            <p className="text-center col-span-full">Loading...</p>
          )}
        </div>

        {showSelectedMeal && selectedMeal && (
        <div className="absolute inset-0 flex justify-center items-center bg-black/60">
          <div className="bg-amber-300 p-6 rounded-xl max-w-2xl w-full relative">
            <h2 className="text-2xl font-bold mb-4">{selectedMeal.strMeal}</h2>
            <p className="mb-4">{selectedMeal.strInstructions}</p>
            <iframe
              src={`https://www.youtube.com/embed/${selectedMeal.strYoutube?.slice(-11)}`}
              frameBorder="0"
              title={selectedMeal.strMeal}
              className="w-full h-[50vh] mb-4"
              allowFullScreen
            ></iframe>
            <button
              onClick={() => setShowSelectedMeal(false)}
              className="absolute top-2 right-4 text-2xl font-bold text-gray-700 hover:text-black"
            >
              &times;
            </button>
          </div>
        </div>
      )}
      </div>
    );
  };

  export default Category;
