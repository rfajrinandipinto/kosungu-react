import React from "react";

import { BsSearch } from "react-icons/bs";
import ItemCard from "./ItemCard";

const AdminOwner = () => {
  return (
    <div className="flex  px-5 flex-col  w-full ">
      <div className="flex gap-3 items-center pb-4 justify-between">
        <p className="text-2xl">Owner</p>
      </div>

      <div className="flex gap-10 bg-white rounded overflow-hidden">
        <div className="flex flex-col w-full pb-4">
          <div className="flex bg-purple-100 items-center justify-between px-5">
            <p className="text-lg font-semibold py-3">Daftar Owner</p>
            <div className=" flex items-center">
              <form action="" className="flex">
                <input type="text" className="  border rounded-l text-sm py-2 px-3 w-60 focus:border-purple-500 focus:outline-none" placeholder="Search" />

                <button type="submit" className=" bg-purple-600 text-white py-2 px-3 border rounded-r">
                  <BsSearch />
                </button>
              </form>
            </div>
          </div>

          <div className="flex border rounded px-5 py-2 flex-col mx-5 mt-5 mb-2">
            <div className="flex justify-between border-b pb-2">
              <div className="flex flex-col ">
                <div className="flex gap-2 items-center">
                  <p className="font-semibold">User Id : 84734</p>
                  <p>|</p>
                  <p className="text-green-700 bg-green-100 rounded py-1 px-3">Active</p>
                </div>
                <p className="font-semibold">Product Id : 84734</p>
              </div>
            </div>
            <div className="flex py-2 gap-4">
              <div className="flex basis-3/4 border-r items-center pr-4 py-3">
                <div className="flex gap-10 items-center">
                  <div className="bg-gray-100 w-20 h-20 rounded-full">
                    <img src="/profile.png" alt="" />
                  </div>

                  <div className="flex flex-col">
                    <p className="font-semibold">Rahmat Fajri Nandipinto</p>
                    <p>Email : nandipintorahmatfajri@gmail.com </p>
                    <p>Phone : 0895341972293</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col basis-1/3 py-3 px-5 gap-2 justify-center">
                <p className="border rounded py-2 px-3 font-bold text-center text-lg bg-red-400">Ban</p>
              </div>
            </div>
          </div>

          <div className="flex border rounded px-5 py-2 flex-col mx-5 mt-5 mb-2">
            <div className="flex justify-between border-b pb-2">
              <div className="flex flex-col ">
                <div className="flex gap-2 items-center">
                  <p className="font-semibold">User Id : 84734</p>
                  <p>|</p>
                  <p className="text-green-700 bg-green-100 rounded py-1 px-3">Active</p>
                </div>
                <p className="font-semibold">Product Id : 84734</p>
              </div>
            </div>
            <div className="flex py-2 gap-4">
              <div className="flex basis-3/4 border-r items-center pr-4 py-3">
                <div className="flex gap-10 items-center">
                  <div className="bg-gray-100 w-20 h-20 rounded-full">
                    <img src="/profile.png" alt="" />
                  </div>

                  <div className="flex flex-col">
                    <p className="font-semibold">Rahmat Fajri Nandipinto</p>
                    <p>Email : nandipintorahmatfajri@gmail.com </p>
                    <p>Phone : 0895341972293</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col basis-1/3 py-3 px-5 gap-2 justify-center">
                <p className="border rounded py-2 px-3 font-bold text-center text-lg bg-red-400">Ban</p>
              </div>
            </div>
          </div>

          <div className="flex border rounded px-5 py-2 flex-col mx-5 mt-5 mb-2">
            <div className="flex justify-between border-b pb-2">
              <div className="flex flex-col ">
                <div className="flex gap-2 items-center">
                  <p className="font-semibold">User Id : 84734</p>
                  <p>|</p>
                  <p className="text-green-700 bg-green-100 rounded py-1 px-3">Active</p>
                </div>
                <p className="font-semibold">Product Id : 84734</p>
              </div>
            </div>
            <div className="flex py-2 gap-4">
              <div className="flex basis-3/4 border-r items-center pr-4 py-3">
                <div className="flex gap-10 items-center">
                  <div className="bg-gray-100 w-20 h-20 rounded-full">
                    <img src="/profile.png" alt="" />
                  </div>

                  <div className="flex flex-col">
                    <p className="font-semibold">Rahmat Fajri Nandipinto</p>
                    <p>Email : nandipintorahmatfajri@gmail.com </p>
                    <p>Phone : 0895341972293</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col basis-1/3 py-3 px-5 gap-2 justify-center">
                <p className="border rounded py-2 px-3 font-bold text-center text-lg bg-red-400">Ban</p>
              </div>
            </div>
          </div>

          <div className="flex border rounded px-5 py-2 flex-col mx-5 mt-5 mb-2">
            <div className="flex justify-between border-b pb-2">
              <div className="flex flex-col ">
                <div className="flex gap-2 items-center">
                  <p className="font-semibold">User Id : 84734</p>
                  <p>|</p>
                  <p className="text-green-700 bg-green-100 rounded py-1 px-3">Active</p>
                </div>
                <p className="font-semibold">Product Id : 84734</p>
              </div>
            </div>
            <div className="flex py-2 gap-4">
              <div className="flex basis-3/4 border-r items-center pr-4 py-3">
                <div className="flex gap-10 items-center">
                  <div className="bg-gray-100 w-20 h-20 rounded-full">
                    <img src="/profile.png" alt="" />
                  </div>

                  <div className="flex flex-col">
                    <p className="font-semibold">Rahmat Fajri Nandipinto</p>
                    <p>Email : nandipintorahmatfajri@gmail.com </p>
                    <p>Phone : 0895341972293</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col basis-1/3 py-3 px-5 gap-2 justify-center">
                <p className="border rounded py-2 px-3 font-bold text-center text-lg bg-red-400">Ban</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-3 justify-end"></div>
    </div>
  );
};

export default AdminOwner;
