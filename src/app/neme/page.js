"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";

const SearchByName = () => {
  const [query, setQuery] = useState('');
  const [meals, setMeals] = useState([]);

       const [selectedMeal, setSelectedMeal] = useState(null);
        const [showSelectedMeal, setShowSelectedMeal] = useState(false);

  useEffect(() => {
    if (!query) return;
    const delayDebounce = setTimeout(() => {
      axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
        .then(res => setMeals(res.data.meals || []))
        .catch(err => console.log(err));
    }, 500); // 500ms debounce

    return () => clearTimeout(delayDebounce);
  }, [query]);


    const selectMealById = (id) => {
         axios.get(
              `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
            ).then(data =>setSelectedMeal(data.data.meals[0]))
            .catch(err => console.log(err));
            setShowSelectedMeal(true);
        };

  return (
    <div className="min-h-[80vh] py-6 px-4">
      <div className="flex justify-center mb-6">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Taom nomini yozing..."
          className="w-[300px] border border-gray-400 rounded-md px-4 py-2 outline-none focus:border-amber-600"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-[90vw] mx-auto">
        {meals.length > 0 ? meals.map((meal, index) => (
          <div
            key={index}
            onClick={() => selectMealById(item.idMeal)}
            className="p-3 border-2 rounded-md shadow-lg flex flex-col items-center hover:shadow-amber-400 hover:opacity-90"
          >
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="w-full rounded-md"
            />
            <h3 className="mt-2 font-semibold text-center">{meal.strMeal}</h3>
          </div>
        )) : query && <p className="text-center col-span-full">No results found...</p>}
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

export default SearchByName;
