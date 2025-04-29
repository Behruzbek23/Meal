"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

let region=[ 'Africa', 'American', 'Asian', 'British', 'Canadian', 'Chinese', 
 ];
const Region = () => {
  const [regions, setRegions] = useState(region[0]);
  const [selectedRegion, setSelectedRegion] = useState('');
  const [meals, setMeals] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [showSelectedMeal, setShowSelectedMeal] = useState(false);
  

  useEffect(() => {
    axios.get(`https://www.themealdb.com/api/json/v1/1/list.php?a=${regions}`)
      .then(data => setRegions(data.data.meals))
      .catch(err => console.log(err));


    }, []);
      

  useEffect(() => {

    axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${selectedRegion}`)
      .then(data => setMeals(data.data.meals))
      .catch(err => console.log(err));
  }, [selectedRegion]);



      const selectMealById = (id) => {
           axios.get(
                `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
              ).then(data =>setSelectedMeal(data.data.meals[0]))
              .catch(err => console.log(err));
              setShowSelectedMeal(true);
          };
  
  return (
    <div className="min-h-[80vh] flex flex-col gap-4 py-4">
      <div className="flex flex-wrap justify-center gap-3">
        {region.slice(0,5).map((item, index) => (
          <button
            key={index}
            onClick={() => setSelectedRegion(item.strArea)}
            className={`px-4 py-2 rounded-md text-white duration-300 ${
              selectedRegion === item.strArea ? 'bg-green-800' : 'bg-red-800 hover:opacity-70'
            }`}
          >
            {item.strArea}
          </button>

          
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-[90vw] mx-auto my-6">
        {meals.length ? meals.map((meal, index) => (
          <div
            onClick={() => selectMealById(item.idMeal)}
            key={index}
            className="p-3 border-2 rounded-md shadow-lg flex flex-col items-center hover:shadow-amber-400 hover:opacity-90"
          >
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="w-full rounded-md"
            />
            <h3 className="mt-2 font-semibold text-center">{meal.strMeal}</h3>
          </div>
        )) : selectedRegion && <p className="text-center col-span-full">Loading...</p>}
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

export default Region;
