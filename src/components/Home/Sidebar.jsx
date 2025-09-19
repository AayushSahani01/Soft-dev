import React, { useState } from "react";

const Sidebar = () => {
  const [color, setColor] = useState(null);
  

  return (
    <aside className="w-full col-span-3  pt-4 hidden md:block m-1.5 space-y-4">
      <div className="bg-slate-50 shadow-md rounded-lg px-4 py-6">
        <h2 className="font-bold uppercase text-lg  tracking-wide text-gray-800 mb-6">
          Hot Deals
        </h2>
        <div className="hot-deals flex items-center justify-between space-y-4">
          <h4>Nike</h4>
          <span>2</span>
        </div>
        <div className="flex items-center justify-between space-y-4">
          <h4>Airmax</h4>
          <span>48</span>
        </div>
        <div className="flex items-center justify-between space-y-4">
          <h4>Zudio</h4>
          <span>14</span>
        </div>
        <div className="flex items-center justify-between space-y-4">
          <h4>Addidas</h4>
          <span>15</span>
        </div>
        <div className="flex items-center justify-between space-y-4">
          <h4>Vans</h4>
          <span>23</span>
        </div>
        <div className="flex items-center justify-between space-y-4">
          <h4>All Stars</h4>
          <span>1</span>
        </div>
        <div className="flex items-center justify-between space-y-4">
          <h4>Sparks</h4>
          <span>95</span>
        </div>
      </div>
      <div className="bg-slate-50 shadow-md rounded-sm px-4 py-6">
        <h2 className="font-medium text-xl mt-6 mb-4 uppercase ">Prices</h2>
        <label
          htmlFor="priceRange"
          className=" font-bold text-sm text-gray-700 flex justify-between items-center"
        >
          Ranger:
          <span>$13.99 - $25.99</span>
        </label>
        <input
          type="range"
          min={"13.99"}
          id="priceRange"
          max={"25.99"}
          className="w-full"
        />
      </div>
      <div className="bg-slate-50 shadow-md rounded-sm px-4 py-6">
        <h2 className="font-medium text-xl mt-4 mb-4 uppercase">Color</h2>
        <div className="flex gap-2">
          {["red", "blue", "green", "yellow", "black", "white"].map((colr) => (
            <button
              key={colr}
              onClick={() => setColor(colr)}
              className={`w-7 h-7 mr-2 bg-${colr}-500 cursor-pointer transition-all duration-300 ease-in-out rounded-full border border-transparent hover:border-slate-600 focus:outline-none
            }
            )} ${color === colr ? "ring-2 ring-offset-4 ring-sky-500" : ""}`}
            />
          ))}
        </div>
      </div>
      <div className="bg-slate-50 px-4 py-2 ">
        <h2 className="font-bold mt-6 mb-4 uppercase">Brand</h2>
        <div className="pt-4 flex items-center justify-between space-y-4">
          <h4>Nike</h4>
          <span className="text-gray-400 font-medium">99</span>
        </div>

        <div className=" flex items-center justify-between space-y-4">
          <h4>Nike</h4>
          <span className="text-gray-400 font-medium">99</span>
        </div>
        <div className="flex items-center justify-between space-y-4">
          <h4>Adidas</h4>
          <span className="text-gray-400 font-medium">99</span>
        </div>
        <div className="flex items-center justify-between space-y-4">
          <h4>Arimax</h4>
          <span className="text-gray-400 font-medium">99</span>
        </div>
      </div>
      <div className="p-2">
        <div className="bg-slate-50 py-4 shadow-sm rounded-lg text-center">
          <h2 className="font-medium text-slate-700 uppercase">More</h2>
         </div>

        </div>
    </aside>
  );
};

export default Sidebar;
