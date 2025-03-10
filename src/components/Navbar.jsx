import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../assests/logo.png'

const Navbar = () => {
  return (
      <>
      <div className="header shadow-md w-full">
    <div class="header  flex flex-wrap justify-center md:justify-between items-center h-18 w-2/3 mx-auto px-5 pb-6 mt-4 ">
    <div className=" mb-3 md:mb-0">
      <div class="logo relative flex items-center text-2xl md:text-3xl">
      <img src={logo} alt="" className=" h-14" />
     <h1> "BriefBites" </h1>
        <div className=" md:text-sm text-right mr-3 leading-none text-[12px] absolute bottom-0 right-0 ">stay informed</div>
      </div>
     
      </div>
   
      <div className=" flex gap-6 text-1xl md:text-2xl">
      <div class="action_links blog">
      <NavLink to="/read"  className=" underline hover:text-blue-400">
          Read Now
        </NavLink>
      </div>
      <div className="action_links read_now">
        
        <a href="https://blog.inshorts.com/" target="_blank" className=" underline">
          Blog
        </a>
      </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default Navbar;
