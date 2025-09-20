import React from "react";
import { useState } from "react";
import { Menu, Grip } from "lucide-react";
import { FaCaretDown } from "react-icons/fa6";

const Banner = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isShow,setIsShow]=useState(false);
  const toggleopen = () => {
    setIsOpen(!isOpen);
  };

  const toggleshow = () => {
    setIsShow(!isShow);
  };

  return (
    <>
      <div className=" mx-auto m-2">
        <div className="home mx-auto m-2 flex flex-col justify-center items-center md:flex-row-reverse md:justify-between md:gap-y-5 bg-blue-400 pt-4">
          <div className="mt-12 mb-2 hidden md:block">
            <div className="w-full h-auto object-cover bg-center rounded-sm">
              <img src="./shoes.png" alt="" width={500} height={500} />
            </div>
          </div>
          <div className="px-12 justify-end items-end mt-14 text-white ">
            <h1 className="text-2xl font-medium ">
              Adidas Men Running{" "}
              <strong className="font-bold">
                <br />
                Sneakers
              </strong>
            </h1>
            <p className="banner-text text-sm font-light">
              Performance and design.Taken right to the edge.
              {/* <span className="fixed top-[10%] left-0 right-0 z-99 h-0.5 bg-gradient-to-r from-blue-600 to-blue-500"></span> */}
            </p>

            <button className="mt-4 px-4 py-2 text-white rounded-lg ">
              <span
                className="button-shop-now hover:text-blue-500  hover:bg-transparent transition-all duration-300 ease-in-out cursor-pointer "
                onClick={() => window.scrollTo(0, 0)}
              >
                {" "}
                Shop Now
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 text-gray-800 text-[16px] p-3 rounded-sm flex items-center capitalize justify-between">
        <div className="flex justify-start gap-x-12 w-full ">
          <div className="flex items-center">
            <h2>{"13 "}items</h2>
          </div>
          <div className="md:flex items-center">
            <h2>Sort by</h2>
          </div>
          <div style={{ display: "inline-block" }}>
            <button onClick={toggleopen} className="flex justify-center   items-center hover:text-blue-500 "><p className="px-6 hidden md:block ">Name</p>
             <FaCaretDown className="ml-8 hidden md:block lg:block" size={17} color="#000"/>
            </button>

            {isOpen && (
              <div className="Naming-dropdown">
                <div
                  className="Naming-list space-y-3 ">
                  <div className="hover:text-blue-500 ">Nikes</div>
                  <div className="hover:text-blue-500 ">Dell</div>
                  <div className="hover:text-blue-500 ">Apple</div>
                  <div className="hover:text-blue-500 ">Adidas</div>
                </div>
              </div>
            )}
          </div>

          <div 
          style={{ display: "inline-block" 

          }}
         >
            <button onClick={toggleshow} className="flex justify-center items-center text-[16px] hover:text-blue-500"> <div className="px-6 hidden md:block " >
              Show 
              <span className="ml-6 font-medium">{" 12 "}</span>
              </div> 
             <FaCaretDown className="ml-8 hidden md:block lg:block" size={17} color="#000"/>
            </button>

            {isShow && (
              <div className="Naming-dropdown">
                <div
                  className="Naming-list space-y-3 ">
                  
                  <div className="hover:text-blue-500 ">Nikes</div>
                  <div className="hover:text-blue-500 ">Dell</div>
                  <div className="hover:text-blue-500 ">Apple</div>
                  <div className="hover:text-blue-500 ">Adidas</div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-end gap-x-8 ">
          <div className="hidden md:block
           hover:text-blue-500 hover:scale-125 transition-all duration-300 ease-in-out" >
            <Grip className="cursor-pointer "
/>
          </div>
          <div className="">
            <Menu />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
