import React, { useState } from "react";

const Sidebar = () => {
  const [color, setColor] = useState(null);

  return (
    <aside className="w-full col-span-3 pt-4 hidden md:block m-1.5 space-y-2">
    <div className="bg-slate-100 shadow-md rounded-lg px-4 py-6">
      <h2 className="font-bold uppercase text-lg  tracking-wide text-gray-800 mb-6">Hot Deals</h2>
      <div className="hot-deals flex items-center justify-between space-y-4">
        <h4>
          Nike
        </h4>
        <span>2</span>
      </div>
      <div className="flex items-center justify-between space-y-4">
        <h4>
          Airmax
        </h4>
        <span>48</span>
      </div>
      <div className="flex items-center justify-between space-y-4">
        <h4>
          Zudio
        </h4>
        <span>14</span>
      </div>
      <div className="flex items-center justify-between space-y-4">
        <h4>
          Addidas
        </h4>
        <span>15</span>
      </div><div className="flex items-center justify-between space-y-4">
        <h4>
          Vans
        </h4>
        <span>23</span>
      </div>
      <div className="flex items-center justify-between space-y-4">
        <h4>
          All Stars
        </h4>
        <span>1</span>
      </div>
      <div className="flex items-center justify-between space-y-4">
        <h4>
          Sparks
        </h4>
        <span>95</span>
      </div>
</div>
<div className="bg-slate-100 shadow-md rounded-sm px-4 py-6">
      <h2 className="font-medium text-xl mt-6 mb-2 uppercase ">Prices</h2>
      <label htmlFor="priceRange" className=" font-bold text-sm text-gray-700 flex justify-between items-center">Ranger:
        <span>$13.99 - $25.99</span>
      </label>
      <input type="range" min={"13.99"} id="priceRange" max={"25.99"} className="w-full" />
</div>
      <h2 className="font-bold mt-6 mb-2">Color</h2>
      <div className="flex gap-2">
        {["red", "blue", "pink", "black", "yellow"].map((c) => (
          <button
            key={c}
            onClick={() => setColor(c)}
            className={`w-6 h-6 rounded-full bg-${c}-500 ${
              color === c ? "ring-2 ring-black" : ""
            }`}
          />
        ))}
      </div>

      <h2 className="font-bold mt-6 mb-2">Brand</h2>
      <ul className="space-y-1 text-gray-700">
        <li>Nike (99)</li>
        <li>Adidas (99)</li>
        <li>Siemens (99)</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
