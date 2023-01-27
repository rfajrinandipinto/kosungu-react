import React from "react";

import { BsSearch } from "react-icons/bs";
import ItemCard from "./ItemCard";

const AdminProduk = () => {
  return (
    <div className="flex  px-5 flex-col  w-full ">
      <div className="flex gap-3 items-center pb-4 justify-between">
        <p className="text-2xl">Produk</p>

        <p className="border rounded py-2 px-3 font-semibold  bg-green-400">Tambah Produk</p>
      </div>

      <div className="flex gap-10 bg-white rounded overflow-hidden">
        <div className="flex flex-col w-full pb-4">
          <div className="flex bg-purple-100 items-center justify-between px-5">
            <p className="text-lg font-semibold py-3">Daftar Produk</p>
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
                  <p className="font-semibold">Produk Id : 84734</p>
                  <p>|</p>
                  <p className="text-green-700 bg-green-100 rounded py-1 px-3">Available</p>
                </div>
                <div className="flex">
                  <p className="font-semibold">Owner Id : 84734</p>
                </div>
              </div>
            </div>
            <div className="flex py-2 gap-4">
              <div className="flex basis-3/4 border-r items-start pr-4 py-3">
                <ItemCard type="dashboard" />
              </div>

              <div className="flex flex-col basis-1/3 py-3 px-5 gap-2 justify-center">
                <p className="border rounded py-2 px-3 font-bold text-center text-lg bg-amber-300">Edit</p>
                <p className="border rounded py-2 px-3 font-bold text-center text-lg bg-red-500">Hapus</p>
              </div>
            </div>
          </div>
          <div className="flex border rounded px-5 py-2 flex-col mx-5 mt-5 mb-2">
            <div className="flex justify-between border-b pb-2">
              <div className="flex flex-col ">
                <div className="flex gap-2 items-center">
                  <p className="font-semibold">Produk Id : 84734</p>
                  <p>|</p>
                  <p className="text-green-700 bg-green-100 rounded py-1 px-3">Available</p>
                </div>
                <div className="flex">
                  <p className="font-semibold">Owner Id : 84734</p>
                </div>
              </div>
            </div>
            <div className="flex py-2 gap-4">
              <div className="flex basis-3/4 border-r items-start pr-4 py-3">
                <ItemCard type="dashboard" />
              </div>

              <div className="flex flex-col basis-1/3 py-3 px-5 gap-2 justify-center">
                <p className="border rounded py-2 px-3 font-bold text-center text-lg bg-amber-300">Edit</p>
                <p className="border rounded py-2 px-3 font-bold text-center text-lg bg-red-500">Hapus</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-3 justify-end"></div>
    </div>
  );
};

export default AdminProduk;
