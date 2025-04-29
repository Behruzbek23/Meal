
// import React from 'react'

// const page = () => {
//   return (
//     <div className='h-[75vh] text-center  justify-center  items-center  pt-35 pl-80'>


// <div className="max-w-2xl bg-white shadow-md rounded-lg p-10  text-center  justify-center  items-center ">
//         <h1 className="text-2xl font-bold text-blue-600 mb-4">Welcome to My Page</h1>
//         <p className="text-gray-700">
//           This is a sample page created using Tailwind CSS. You can customize this content as needed.
//         </p>
//       </div>
//      </div>
//   )
// }

// export default page;

// import React, { useState } from 'react';

// const Page = () => {
//   const [count, setCount] = useState(0);

//   const handleAdd = (num) => {
//   if(num>=0){
//    setCount(num)
//   }
//   }
 

//   return (
//     <div className="h-[75vh] flex flex-col items-center justify-center">
//       <div className="max-w-md bg-white shadow-md rounded-lg p-6 text-center">
//         <h1 className="text-2xl font-bold text-blue-600 mb-4">Counter</h1>
//         <p className="text-gray-700 text-lg mb-6">Current Count: { count }</p>
//         <div className="flex space-x-4 justify-center">
//           <button onClick={()=> handleAdd(count+1) } className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">  Add </button>
//           <button onClick={()=> handleAdd(count-1)  } className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"  > Subtract  </button>
//           <button onClick={()=> handleAdd(0)  } className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"  > Reset  </button>
//         </div>      
//       </div>
//     </div>
//   );
// };

// export default Page;

// import { useState } from 'react';

// export default function RegisterPage() {
//   const [form, setForm] = useState({
//     name: '',
//     email: '',
//     password: ''
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Ro‘yxatdan o‘tish ma’lumotlari:', form);
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg w-96">
//         <h2 className="text-2xl font-bold mb-4 text-center">Ro‘yxatdan o‘tish</h2>
        
//         <label className="block mb-2">Ism:</label>
//         <input
//           type="text"
//           name="name"
//           value={form.name}
//           onChange={handleChange}
//           className="w-full p-2 border rounded mb-4"
//           required
//         />
        
//         <label className="block mb-2">Email:</label>
//         <input
//           type="email"
//           name="email"
//           value={form.email}
//           onChange={handleChange}
//           className="w-full p-2 border rounded mb-4"
//           required
//         />
        
//         <label className="block mb-2">Parol:</label>
//         <input
//           type="password"
//           name="password"
//           value={form.password}
//           onChange={handleChange}
//           className="w-full p-2 border rounded mb-4"
//           required
//         />
        
//         <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
//           Ro‘yxatdan o‘tish
//         </button>
//       </form>
//     </div>
//   );
// }


// import { useState } from 'react';

// export default function Home() {
//   const [message, setMessage] = useState('');

//   const handleClick = () => {
//     setMessage('Button bosildi!');
//   };

//   return (
//     <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
//       <button 
//         onClick={handleClick} 
//         className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//       >
//         Bosish
//       </button>
//       {message && <p className="mt-4 text-lg font-semibold">{message}</p>}
//     </div>
//   );
// }



// "use client";


// import React, { useState } from 'react'

// const page = () => {

//   const [message, setMessage] = useState('');
//   const [name, setName] = useState('');

//   const handleClick = () => {
//     setMessage(`Salom, ${name || 'Xush kelibsiz'}!`);
//   };
//   return (
//     <div>
//       <input type="text" value={name}   onChange={(e) => setName(e.target.value)}   placeholder="Ism" className="border  border-gray-300 rounded-md p-2 mb-4" />

//       <button 
//         onClick={handleClick} 
//         className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//       >
//         Salom berish
//       </button>
//       {message && <p className="mt-4 text-lg font-semibold">{message}</p>}
    
//     </div>
//   )
// }

// export default page




// "use client";
// import React, { useState } from 'react';

// const Page = () => {
//   const [text, setText] = useState('');
//   const [textAre, setTextAre] = useState('');

//   const changOn = () => {

//   setText(textAre.replace('1','bir')
// .replace('2','ikki')
// .replace('3', 'uch')
// .replace('4', 'to`rt')
// .replace('5', 'besh')
// .replace('6', 'olti')
// .replace('7','yeti')
// .replace('8','sakiz')
// .replace('9','toqqiz')
// .replace('0','nol')
// .replace('0','nol')
// )
//   }
 
        
//   return (
//     <div className='h-[75vh] px-[80vh] py-[20vh] flex justify-center items-center'>
//       <div className='flex flex-col items-center'>
//         <textarea
//           onChange={(e) => setTextAre(e.target.value)}
//           value={textAre}
//           className='resize-none w-[50vh] h-[30vh] p-4 border-2 border-gray-300 rounded-lg mb-4'
//           placeholder='Text...'
//         />
//         <button
//           onClick={changOn}
//           className='px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-700 focus:outline-none mb-4'> Change</button>
//         <div className="text-center">
//           <p>{text}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Page;
// "use client";

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const Page = () => {
//   const [animals, setAnimals] = useState([]);

//   useEffect(() => {
//     axios
//       .get(
//         "https://api.api-ninjas.com/v1/animals?x-api-key=rhGw%2F9h%2B%2B4Qrmb%2FFl%2BPx8Q%3D%3DiKDQ6KejhQUToomc&name=dog"
//       )
//       .then((data) => setAnimals(data.data))
//       .catch((err) => console.log(err));
//   }, []);

//   return (
//     <div className="min-h-[75vh] py-4 flex justify-center items-center">
//       <div className="grid grid-cols-4 gap-4 max-md:grid-cols-2">
//         {animals.map((item, index) => (
//           <div
//             key={index}
//             className="bg-gray-600 text-white flex flex-col gap-4 rounded-md p-2 items-center"
//           >
//             <h3>Title: {item.name}</h3>
//             <h3>Age: {item.characteristics.lifespan}</h3>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Page;



// export default page;
"use client"

// import axios from 'axios';
// import React, { useEffect, useState } from 'react';

// const Page = () => {
//   const [foods, setFoods] = useState([]);

//   useEffect(() => {
//     axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=Plov')
//       .then(data =>setFoods (data.data.meals))
//       .catch(err => console.log(err));
//   }, []);

//   return (
//     <div className="min-h-[80vh]">
//       <div className="grid grid-cols-3 gap-4 w-[90vw] mx-auto my-4">
//         {foods.length ? foods.slice(2,3).map((item, index) => (
//           <div  className="p-2 rounded-md border-2 border-gray-600 shadow-lg shadow-amber-600">
//             <img className="w-full" src={item.strMealThumb} alt='' />
//             <h3>{item.strMeal}</h3>
//           </div>
//         )) : <p>Loading...</p>}
//       </div>
//     </div>
//   );
// };

// export default Page;
"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [foods, setFoods] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [showSelectedMeal, setShowSelectedMeal] = useState(false);

  // Barcha ovqatlarni olish
  useEffect(() => {
      axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=chicken')
      .then(data =>setFoods (data.data.meals))
      .catch(err => console.log(err));

  }, []);

  const selectMealById = (id) => {
   axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      ).then(data =>setSelectedMeal(data.data.meals[0]))
      .catch(err => console.log(err));
      setShowSelectedMeal(true);
  };

  return (
    <div className="min-h-[80vh] relative">
      <h1 className=" text-6xl flex justify-center text-center top-5">Hello   Male</h1>
      <div className="grid grid-cols-3 gap-2 w-[90vw] mx-auto my-8">
        {foods.length > 0 ? (
          foods.slice(0, 9).map((item) => (
            <div
              key={item.idMeal}
              onClick={() => selectMealById(item.idMeal)}
              className="p-2 rounded-md border-2 border-gray-600 cursor-pointer shadow-lg shadow-amber-600"
            >
              <img
                src={item.strMealThumb}
                alt={item.strMeal}
                className="w-full rounded"
              />
              <h3 className="text-center mt-2 font-semibold">{item.strMeal}</h3>
            </div>
          ))
        ) : (
          <p className="col-span-3 text-center text-lg">Loading...</p>
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

export default Page;
