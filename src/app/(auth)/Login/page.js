import React from 'react'

const login = () => {
  return (
    <div className='h-122 pt-22'>

    <div className="max-w-2xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
    <h1 className="text-3xl font-bold text-center mb-6">Login</h1>
 
    <form className="space-y-4">
        <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">     Email: </label>
            <input type="email" id="name "  required   className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
        </div>
        <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">      Password:  </label>
            <input type="password" id="password" name="password"  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
        </div>
       
        <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
            Submit
        </button>
    </form>
</div>
    </div>
  )
}

export default login
