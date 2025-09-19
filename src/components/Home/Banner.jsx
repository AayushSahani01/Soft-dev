import React from "react";
import { Menu, Grip } from 'lucide-react';

const Banner = () => {
  return (
    <>
    <div className=" mx-auto m-2">

      {/* <div>
        <h1 className="text-2xl font-bold">Adidas Men Running Sneakers</h1>
        <p className="text-sm text-gray-700">
          Performance and design. Taken right to the edge.
        </p>
        <button className="mt-3 px-4 py-2 bg-green-600 text-white rounded-lg">
          Shop Now
        </button>
        </div> */}
      <img
        src="./home.png"
        alt="banner-img"
        className="w-full h-auto object-cover bg-center rounded-sm"
        />
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
