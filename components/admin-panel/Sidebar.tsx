import React from "react";
import { BiSearch } from "react-icons/bi";
import { MENUS } from "../utils";
import Image from "next/image";

function Sidebar() {
  return (
    <div className="bg-red-200 w-75 min-h-screen p-4 shrink-0 shadow-2xl">
      <h2 className="font-bold">Stock Management System</h2>
      <div className="border-2 border-black-100 my-4 lg:flex hidden w-full max-w-125 items-center hover:border-accent/80 focus-within:border-accent/80 transition-colors rounded-lg">
        <div className="bg-accent text-gray-600 text-[26px] flex items-center justify-center px-2 h-full">
          <BiSearch />
        </div>
        <input
          className="border-0 px-2 py-3 w-full focus:outline-none focus:ring-0 placeholder:text-gray-500"
          type="text"
          placeholder="Search"
        />
      </div>
      {/* List */}
        { MENUS.map((menu) => (
      <div key={menu.href} className="">
        <ul className="">
          <div className="flex bg-green-300">
          <Image 
            src={menu.image} 
            alt={menu.title} 
            height={20} 
            width={20} 
            className="w-5 h-5 mr-2"
          />
          <li key={menu.href} className="" >{menu.title}</li>
          </div>
        </ul>
      </div>
        )) }
    </div>
  );
}

export default Sidebar;
