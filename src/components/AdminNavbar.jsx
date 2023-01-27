import React from "react";
import { BsSearch, BsFillPersonFill, BsFillBellFill } from "react-icons/bs";
import AuthModal from "./AuthModal";

const AdminNavbar = () => {
  return (
    <div className="navbar-component border-b  z-10 bg-white shadow-lg">
      <div className="container mx-auto xl:px-8  lg:px-10 py-2">
        <div className="flex justify-between items-center">
          <div className=" flex items-center">
            <form action="" className="flex">
              <input type="text" className=" bg-gray-100 border rounded-l text-sm py-2 px-3 w-60 focus:border-purple-500 focus:outline-none" placeholder="Search" />

              <button type="submit" className=" bg-purple-600 text-white py-2 px-3 border rounded-r">
                <BsSearch />
              </button>
            </form>
          </div>

          <div className="flex gap-4">
            <div className="flex items-center py-2 mx-3 rounded gap-2 hover:text-purple-500 hover:shadow relative ">
              <BsFillBellFill className="text-gray-400 hover:text-purple-500 text-xl" />
              <div className="flex absolute bg-red-500 w-4 h-4 rounded-full justify-center items-center top-1 -right-2">
                <p className=" text-xs font-semibold text-white"> 2</p>
              </div>
            </div>
            <div className="border-r"></div>
            <div className="flex items-center  py-2 px-3 rounded gap-3 hover:text-purple-500 hover:shadow ">
              <p className="font-semibold">Admin</p>
              <div className="bg-gray-100 w-10 h-10 rounded-full">
                <img src="/profile.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminNavbar;
