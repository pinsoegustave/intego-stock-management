import React from "react";
import { BiSearch } from "react-icons/bi";

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
    </div>
  );
}

export default Sidebar;
