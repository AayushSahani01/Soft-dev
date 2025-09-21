import React, { useState } from "react";

const Sidebar = () => {
  // const colorlist = ["red", "blue", "green", "yellow", "orange", "pink"];
  // const [color, setColor] = useState(null);
   const [more, setMore] = useState(false);
  
    const clickMore = () => {
      setMore(!more);
    };

  return (
    <aside className="w-full px-1 py-0.5 col-span-3 pt-4 hidden md:block m-1.5 space-y-4">
      <div className="bg-slate-50  shadow-md rounded-lg px-4 py-6">
        <h2 className="font-bold uppercase text-lg  tracking-wide text-gray-800 mb-6">
          Hot Deals
        </h2>
        <div className="hot-deals rounded-md flex justify-between items-center text-center hover:text-blue-400 space-y-4 transition-all duration-300 ease-in-out">
          <h4>Nike</h4>
          <span>2</span>
        </div>
        <div className="flex items-center justify-between  hover:text-blue-400 space-y-4">
          <h4>Airmax</h4>
          <span>48</span>
        </div>
        <div className="flex items-center justify-between  hover:text-blue-400 space-y-4">
          <h4>Zudio</h4>
          <span>14</span>
        </div>
        <div className="flex items-center justify-between  hover:text-blue-400 space-y-4">
          <h4>Adidas</h4>
          <span>15</span>
        </div>
        <div className="flex items-center justify-between  hover:text-blue-400 space-y-4">
          <h4>Vans</h4>
          <span>23</span>
        </div>
        <div className="flex items-center justify-between  hover:text-blue-400 space-y-4">
          <h4>All Stars</h4>
          <span>1</span>
        </div>
        <div className="flex items-center justify-between  hover:text-blue-400 space-y-4">
          <h4>Sparks</h4>
          <span>95</span>
        </div>
      </div>
      <div className="bg-slate-50 shadow-md rounded-sm px-4 py-6">
        <h2 className="font-medium  mt-6 mb-4 uppercase ">Prices</h2>
        <label
          htmlFor="priceRange"
          className=" font-medium text-sm text-gray-600 flex justify-between items-center"
        >
          Ranger:
          <span>$13.99 - $25.99</span>
        </label>
        <input
          type="range"
          min={"13.99"}
          max={"25.99"}
          defaultValue={14}
          className="w-full mt-4 h-2  cursor-pointer transition-all duration-300 ease-in-out outline-none accent-blue-500"
        />
      </div>
      <div className="bg-slate-50 shadow-md rounded-sm px-4 py-6">
        <h2 className="font-medium  mt-4 mb-4 uppercase">Color</h2>
        <div className="flex gap-4">
          {/* // &**** Using map function to each ele follow*******  */}
          {/* { colorlist.map((colr) =>
          <button
            key={colr}
            onClick={() => setColor(colr)}
            className={`w-7 h-7 mr-2 flex justify-center items-center cursor-pointer transition-all duration-300 ease-in-out rounded-full border border-slate-500 hover:border-transparent focus:ring-2 hover:ring-2 hover:ring-offset-4 ring-blue-400
                 bg-${colr}-500 ${
              color === colr &&
              `border-transparent bg-opacity-50 hover:bg-opacity-50
                 }`
            )} 
                `}
          
          />
           )}  */}
          <button className="w-7 h-7 bg-blue-500  rounded-full border border-slate-500 hover:border-transparent focus:ring-2 hover:ring-2 hover:ring-offset-4 ring-blue-400 cursor-pointer transition-all duration-300 ease-in-out"></button>
          <button className="w-7 h-7 bg-red-500  rounded-full border border-slate-500 hover:border-transparent focus:ring-2 hover:ring-2 hover:ring-offset-4 ring-blue-400 cursor-pointer transition-all duration-300 ease-in-out"></button>
          <button className="w-7 h-7 bg-black  rounded-full border border-slate-500 hover:border-transparent focus:ring-2 hover:ring-2 hover:ring-offset-4 ring-blue-400 cursor-pointer transition-all duration-300 ease-in-out"></button>
          <button className="w-7 h-7 bg-yellow-300  rounded-full border border-slate-500 hover:border-transparent focus:ring-2 hover:ring-2 hover:ring-offset-4 ring-blue-400 cursor-pointer transition-all duration-300 ease-in-out"></button>
          <button className="w-7 h-7 bg-pink-500  rounded-full border border-slate-500 hover:border-transparent focus:ring-2 hover:ring-2 hover:ring-offset-4 ring-blue-400 cursor-pointer transition-all duration-300 ease-in-out"></button>
          <button className="w-7 h-7 bg-pink-200  rounded-full border border-slate-500 hover:border-transparent focus:ring-2 hover:ring-2 hover:ring-offset-4 ring-blue-400 cursor-pointer transition-all duration-300 ease-in-out"></button>
           
        </div>
      </div>
      <div className="bg-slate-50 px-4 py-2 ">
        <h2 className="brands-items space-y-4 transition-all duration-300 ease-in-out  mt-6 mb-4 uppercase font-medium">
          Brand
        </h2>
        <div className="pt-4 flex items-center justify-between space-y-4 hover:text-blue-500 p-1">
          <h4>Nike</h4>
          <p>99</p>
        </div>

        <div className="flex items-center justify-between space-y-4 hover:text-blue-500 p-1">
          <h4>Nike</h4>
          <p>99</p>
        </div>
        <div className="flex items-center justify-between space-y-4 hover:text-blue-500 p-1">
          <h4>Adidas</h4>
          <p>99</p>
        </div>
        <div className="flex items-center justify-between space-y-4 hover:text-blue-500 p-1">
          <h4>Arimax</h4>
          <p>99</p>
        </div>
      </div>
      <div className="pt-6 ">
        <div className="bg-slate-100 px-4 py-4 shadow-sm rounded-lg text-center hover:bg-slate-200">
          <button
            className="font-medium text-slate-700 uppercase hover:text-blue-400 cursor-pointer transition-all duration-300 ease-in-out"
            onClick={clickMore}
          >
            More
          </button>
          {more ? "" : <h2 className="text-xs text-overline text-slate-500 uppercase">Not Available!</h2>}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
