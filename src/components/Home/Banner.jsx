import React from "react";
import { Menu, Grip } from 'lucide-react';

const Banner = () => {
  return (
    <>
    <div className=" mx-auto m-2">

      <div className="home mx-auto m-2 flex flex-col justify-center items-center md:flex-row-reverse md:justify-between md:gap-y-5 bg-blue-400 ">
        
        <div className="mt-12 mb-2 hidden md:block">
          <div className="w-full h-auto object-cover bg-center rounded-sm">
          <img src="./shoes.png" alt="" width={700} height={500}/>
        </div>
        </div>
        <div className="px-12 justify-end items-end mt-14 text-white ">
        <h1 className="text-2xl font-medium">Adidas Men Running <strong className="font-bold">Sneakers</strong></h1>
        <p className="text-sm font-light line-clamp-1">
          Performance and design.Taken right to the edge.
          {/* <span className="absolute bottom-0 left-0 w-2/2 h-0.5 bg-gradient-to-r from-pink-500 to-amber-500"></span> */}
        </p>
      
        <button className="mt-4 px-4 py-2 text-white rounded-lg ">
            <span className=" border-b-2 border-white border-opacity-25 transition-all duration-300 hover:text-blue-600  hover:border-blue-600 hover:border-opacity-100 hover:bg-transparent hover:border-b-3 cursor-pointer "onClick={() => window.scrollTo(0, 0)} > Shop Now</span>
         
        </button>
        </div>
        </div>
      {/* <img
        src="./banner.png"
        alt="banner-img"
        className="w-full h-auto object-cover bg-center rounded-sm"
        /> */}
        </div>
    
    <div className="bg-gray-200 text-gray-600 p-3 rounded-sm flex items-center">
      <div className="flex justify-start gap-x-12 w-full">

    
     <div>
      <h2>{""}items</h2>
     </div>
     <div>
      <h2>Sort By:</h2>
     </div>
     <div>
        <select name="name" className="border-black border border-none rounded-md" id="Name" >
          <option value="">Name:{"   "} A-Z</option>
          <option value="">Low-High</option>
          <option value="">High-Low</option>
        </select>
         
     </div>
     <div>
      <p>Show {""} more {""}+</p>
     </div>
       </div>
       <div className="flex justify-end gap-x-8 ">
     <div>
<Grip />
     </div>
     <div>
      <Menu />
     </div>
     </div>
    </div>
    </>
  );
};

export default Banner;
