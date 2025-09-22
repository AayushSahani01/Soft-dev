import React from "react";
import { Facebook, Twitter } from "lucide-react";
// import { Instagram, Youtube } from "lucide-react";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="flex items-center mx-[4%] mr-[8%] pt-18">
          <div className="grid grid-flow-col px-[6%] py-8 gap-x-12  mr-[8%] max-sm:block max-sm:space-y-8">
            <div className="flex-col justify-center items-center space-y-4  w-1/2 h-full  min-sm:w-1/3">
              <img src="/logo.png" alt="images" />
              <h2 className="text-[12px] font-normal leading-[18px]">
                Lorem Ipsum is simply dummy text of the printing and typesettin. industry. Lorem Ipsum has been the industry's standard dummy text ever.Since the 1500s, when an unknown printer.
              </h2>
            </div>
            <div className="flex-col justify-start items-center space-y-4 w-1/3">
              <h2 className="font-bold text-medium">Follow Us</h2>
              <p className="text-[12px] font-normal leading-[18px]  ">
                Since the 1500s, when an unknown printer took a galley of type and scrambled.
              </p>
              <div className="flex justify-start items-center space-x-8">
                <span className="cursor-pointer">
                  <Facebook className="w-6 h-6 text-blue-800 fill-blue-500 hover:text-blue-700 hover:scale-[1.3] transition-all duration-300 ease-in-out"onClick={() => window.scrollTo(0, 0)} />
                </span>
                <span className="cursor-pointer ">
                  <Twitter className="w-6 h-6 text-blue-500 fill-blue-400 hover:text-blue-600 hover:scale-[1.3] transition-all duration-300 ease-in-out"onClick={() => window.scrollTo(0, 0)} />
                </span>
{/* Youtube and Instagram  */}

                {/* <span className="cursor-pointer ">
            <Youtube  className="w-6 h-6 text-red-500 fill-red-50 hover:text-red-600 hover:scale-[1.3] transition-all duration-300 ease-in-out"/>
          </span>
          <span className="cursor-pointer ">
            <Instagram  className="w-6 h-6 text-pink-600 fill-pink-200 hover:text-pink-600 hover:scale-[1.3] transition-all duration-300 ease-in-out"/>
          </span> */}
              </div>
            </div>
            <div className="flex-col justify-center items-center space-y-4">
              <h2 className="font-bold text-medium">Contact Us</h2>
              <p className="text-[14px] font-normal leading-[18px]">
                E-Comm , 4578 <br />
                Marmora Road, <br />
                Glasgow D04 89GR
              </p>
            </div>
          </div>
          <div></div>
        </div>
        <div className="grid grid-flow-col px-[4%] py-8 gap-8 max-sm:grid-flow-row max-sm:space-y-4 max-sm:grid-cols-2">
          <div className="grid grid-flow-row justify-center items-center space-y-4 ">
            <h2 className="font-bold text-medium">Information</h2>
            <p className="text-[12px] font-normal leading-[18px]">
              About Us <br /> Infomation <br /> Privacy Policy
              <br /> Terms & Conditions
            </p>
          </div>
          <div className="grid grid-flow-row justify-center items-center space-y-4">
            <h2 className="font-bold text-medium">Service</h2>
            <p className="text-[12px] font-normal leading-[18px]">
              About Us <br /> Infomation <br /> Privacy Policy
              <br /> Terms & Conditions
            </p>
          </div>
          <div className="grid grid-flow-row justify-center items-center space-y-4">
            <h2 className="font-bold text-medium">My Account</h2>
            <p className="text-[12px] font-normal leading-[18px]">
              About Us <br /> Infomation <br /> Privacy Policy
              <br /> Terms & Conditions
            </p>
          </div>
          <div className="grid grid-flow-row justify-center items-center space-y-4">
            <h2 className="font-bold text-medium">Our Offers</h2>
            <p className="text-[12px] font-normal leading-[18px]">
              About Us <br /> Infomation <br /> Privacy Policy
              <br /> Terms & Conditions
            </p>
          </div>
          <div></div>
        </div>
        <div className=" border-t-2 border-gray-100 mx-[6%] my=[6%]">
          <div className="flex flex-nowrap justify-between items-center pt-6 m-1 pb-8 max-sm:flex-wrap max-sm:justify-around max-sm:space-y-4">
            <span className="self-center text-lg whitespace-nowrap dark:text-slate-400 font-light max-sm:text-sm max-sm:flex-wrap">
              &copy; 2018 Ecommerce theme by www.bisenbaev.com
            </span>
            <span>
                <img src="/Brands.png" alt="img" onClick={() => window.scrollTo(0, 0)} />
               
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
