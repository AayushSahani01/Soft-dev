import React from "react";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="">
      <div className="container mx-auto  py-2 flex justify-between items-center">
     <img src="/logo.png" alt="logo" srcset=""  />
        <div>
          <ul className="items flex space-x-16 font-bold">
            <Link to="/">
              <li className="cursor-pointer hover:text-blue-400 transition-all duration-300 ease-in-out">Home</li>
            </Link>
            <Link to="/bags">
              <li className="cursor-pointer hover:text-blue-400 transition-all duration-300 ease-in-out">Bag</li>
            </Link>
            <Link to="/sneakers">
              <li className="cursor-pointer hover:text-blue-400 transition-all duration-300 ease-in-out">Sneakers</li>
            </Link>
            <Link to="/belt">
              <li className="cursor-pointer hover:text-blue-400 transition-all duration-300 ease-in-out">Belt</li>
            </Link>
            <Link to="/contact">
              <li className="cursor-pointer hover:text-blue-400 transition-all duration-300 ease-in-out" >Contact</li>
            </Link>
          </ul>
        </div>
        <div className="flex space-x-8 justify-end items-center">
          <MdOutlineLocalGroceryStore className="w-6 h-6 cursor-pointer hover:text-blue-400 hover:scale-110 transition-all duration-300 ease-in-out" />

          <div className="flex space-x-4 text-xl">
            <h4>items</h4>
            <h5 className=" text-slate-500">$0.00</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
