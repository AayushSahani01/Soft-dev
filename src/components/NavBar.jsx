import React from "react";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();

  const navbarLinks = [
    { path: "/", name: "Home" },
    { path: "/bags", name: "Bag" },
    { path: "/sneakers", name: "Sneakers" },
    { path: "/belt", name: "Belt" },
    { path: "/contact", name: "Contact" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 bg-white shadow-md z-10 max-sm:max-w-screen">
      <div className="container mx-auto py-2 flex justify-between items-center">
        <Link to="/">
          <img src="/logo.png" alt="logo" />
        </Link>

        <div className="min-sm:block hidden">
          <ul className="items flex space-x-16 font-medium text-base uppercase">
            {navbarLinks.map((link) => (
              <Link to={link.path} key={link.path}>
                <li
                  className={`cursor-pointer
                    ${
                      location.pathname === link.path
                        ? "text-blue-400 font-semibold"
                        : "hover:text-blue-500"
                    }`}
                >
                  {link.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="flex space-x-4 md:space-x-8 justify-end items-center">
          <MdOutlineLocalGroceryStore className="w-6 h-6 cursor-pointer hover:text-blue-400 hover:scale-[1.2] transition-all duration-300 ease-in-out max-sm:w-5 max-sm:h-5" />

          <div className="flex space-x-4 text-xl max-sm:text-lg">
            <h4>Items</h4>
            <h5 className=" text-slate-400 ">$0.00</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
