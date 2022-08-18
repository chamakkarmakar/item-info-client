import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const [cat,setCat]=useState([]);
  useEffect(()=>{
    fetch('http://localhost:5000/items')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setCat(data)
  })
  },[])
  return (
    <div className="relative min-h-screen md:flex">

      <div className="bg-gray-800 text-gray-100 flex justify-between md:hidden">

        <button className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-700">
          <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokwidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <div className="sidebar bg-blue-800 text-blue-100 w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">

        

        <nav>
          <Link to="/item-list" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
            Item List
          </Link>
          <Link to="/item-info" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
           Item Info
          </Link>
          <Link to="/item-form" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
            Create Item
          </Link>
        
        </nav>
      </div>

     
      <div className="flex-1 p-10 text-2xl font-bold">
      <ul>

       {
        cat.map(c => 
            <li>{c.subCategory}</li>
          
          )
       }
       </ul>
      </div>

    </div>
  )
}

export default Home
